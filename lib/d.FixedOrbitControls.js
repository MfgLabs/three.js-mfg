/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / https://github.com/WestLangley
 */

THREE.FixedOrbitControls = function ( object, domElement ) {

	THREE.EventTarget.call( this );

	this.object = object;
	this.domElement = ( domElement !== undefined ) ? domElement : document;

	// API

	this.center = new THREE.Vector3();
    this.CAMERAMODE = { CAMERA2D : 0, CAMERA3D : 1, TIMELINE : 2 };
    this.cameraMode = this.CAMERAMODE.CAMERA3D;

	this.userZoom = true;
	this.userZoomSpeed = 1.0;

	this.userRotate = true;
	this.userRotateSpeed = 1.0;

	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI / 2; // radians

	this.minDistance = 10;
	this.maxDistance = 20000;

	// internals

	var scope = this;


	var EPS = 0.000001;
	var PIXELS_PER_ROUND = 1800;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var zoomStart = new THREE.Vector2();
	var zoomEnd = new THREE.Vector2();
	var zoomDelta = new THREE.Vector2();

	var translateStart = new THREE.Vector2();
	var translateEnd = new THREE.Vector2();
	var translateDelta = new THREE.Vector2();

	var moveForward = false;
	var moveBackward = false;
	var moveLeft = false;
	var moveRight = false;

	var phiDelta = 0;
	var thetaDelta = 0;
	var scale = 1;

	var distance = -1;

	var lastPosition = new THREE.Vector3();
	var lastOffset = new THREE.Vector3();
	var MOUSE = { NONE : -1, LEFT : 0, MIDDLE : 1, RIGHT : 2 };
	var STATE = { NONE : -1, ROTATE : 0, ZOOM : 1, TRANSLATE : 2 };
	var state = STATE.NONE;

	// events

	var changeEvent = { type: 'change' };


	this.rotateLeft = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		thetaDelta -= angle;

	};

	this.rotateRight = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		thetaDelta += angle;

	};

	this.rotateUp = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		phiDelta -= angle;

	};


	this.rotateDown = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		phiDelta += angle;

	};

	this.setCameraMode = function (value) {
		this.cameraMode = value;
	}


	// simplified: we suppose we always rotate positively
	this.setThetaDelta = function ( t ) {

	    thetaDelta = t;

	};

	this.setPhiDelta = function ( p ) {

		phiDelta = p;

	};


	this.setDistance= function ( s ) {
		distance = s;
	};



	this.zoomIn = function ( zoomScale ) {

		if ( zoomScale === undefined ) {

			zoomScale = getZoomScale();

		}

		scale /= zoomScale;

	};

	this.zoomOut = function ( zoomScale ) {

		if ( zoomScale === undefined ) {

			zoomScale = getZoomScale();

		}

		scale *= zoomScale;

	};

	this.translate = function ( x, y ) {
		
		var vector = new THREE.Vector2(0.0,0.0);
	    if (x === undefined) {  vector.y = y; }
	    if (y === undefined) {  vector.x = x; }

		/*
		Je pense qu'il faut que je rajoute une rotation autour du centre sur le vecteur de translation
		*/

		// TODO rotate the vector before applying it to the center and object
		//vector.x 

        //var axis = new THREE.Vector3( 1, 0, 0 );
        //var angle = - Math.PI / 2;
        //var matrix = new THREE.Matrix4().makeRotation( axis, angle );
        //var matrix.multiplyVector3( vector );

		this.center.x            += vector.x;
		this.object.position.x   += vector.x;
		this.center.z            -= vector.y;
		this.object.position.z   -= vector.y;

	};


    this.getPhi = function () {

		var position = this.object.position;
		var offset = position.clone().subSelf( this.center );
		// angle from y-axis
        return Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );
    };

    this.getTheta = function () {

      	var position = this.object.position;
		var offset = position.clone().subSelf( this.center );

		// angle from z-axis around y-axis
		return Math.atan2( offset.x, offset.z );
    };

    this.getScale = function () {
    	return scale;
    }

    /**
     * Set scale using a factor (between 0 and 1)
     * 0.0 -> min distance
     * 1.0 -> max distance
     */
    this.setScaleFactor = function (factor) {
         var newScale = this.minDistance + factor * (this.maxDistance - this.minDistance);
 		 console.log("newScale: "+newScale);
 		 scale = newScale;
    }

	this.update = function () {

		var position = this.object.position;
		var offset = position.clone().subSelf( this.center );

        if (false) {
          var axis = new THREE.Vector3( 1, 0, 0 );
          var angle = + Math.PI / 2;
          var matrix = new THREE.Matrix4().makeRotationAxis( axis, angle );
          matrix.multiplyVector3( offset );
        }
  

		// angle from z-axis around y-axis

		var theta = Math.atan2( offset.x, offset.z );

		// angle from y-axis

		var phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

		if ( this.autoRotate ) {

			this.rotateLeft( getAutoRotationAngle() );

		}


		if ( this.moveLeft )      this.translate( undefined, - 1  );
		if ( this.moveRight )     this.translate( undefined,  1  );
		if ( this.moveForward )   this.translate( - 1, undefined );
		if ( this.moveBackward )  this.translate(   1, undefined );

	
		theta += thetaDelta;
		phi += phiDelta;
	   

		// restrict phi to be between desired limits
		phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

		// restrict phi to be betwee EPS and PI-EPS
		phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

		var radius = offset.length() * scale;

		// restrict radius to be between desired limits
		if (distance > 0) {
			radius = this.minDistance + distance * (this.maxDistance - this.minDistance);
			distance = -1;
		} else {
			// UGLY HACK, SHOULD BE DONE IN A MORE CLEAR WAY
			radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );
			var factor = 1.0 - (radius - this.minDistance) / (this.maxDistance - this.minDistance);

			var on100 =  Math.round(factor * 100);
			//console.log("factor: "+factor+ " value / 100: "+on100);
			$("#zoom").slider('option','value',on100);
		}



		offset.x = radius * Math.sin( phi ) * Math.sin( theta );
		offset.y = radius * Math.cos( phi );
		offset.z = radius * Math.sin( phi ) * Math.cos( theta );

		//lastOffset = offset.copy();

		position.copy( this.center ).addSelf( offset );

		this.object.lookAt( this.center );

		thetaDelta = 0;
		phiDelta = 0;
		scale = 1;

		if ( lastPosition.distanceTo( this.object.position ) > 0 ) {

			this.dispatchEvent( changeEvent );

			lastPosition.copy( this.object.position );

		}

	};


	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	}

	function getZoomScale() {

		return Math.pow( 0.95, scope.userZoomSpeed );

	}

	function onMouseDown( event ) {

		if ( !scope.userRotate ) return;

		event.preventDefault();

        if ( event.button === MOUSE.LEFT ) {
        	if (scope.cameraMode == scope.CAMERAMODE.CAMERA2D
        	 || scope.cameraMode == scope.CAMERAMODE.TIMELINE) {
	          	state = STATE.TRANSLATE;
				translateStart.set( event.clientX, event.clientY );
			} 

			else if (scope.cameraMode == scope.CAMERAMODE.CAMERA3D) {
				state = STATE.ROTATE;
				rotateStart.set( event.clientX, event.clientY );			
			}

        }  else if ( event.button === MOUSE.MIDDLE) {

			state = STATE.ZOOM;

			zoomStart.set( event.clientX, event.clientY );

		} else if ( event.button === MOUSE.RIGHT ) {


		}

		document.addEventListener( 'mousemove', onMouseMove, false );
		document.addEventListener( 'mouseup', onMouseUp, false );

	}

	function onMouseMove( event ) {

		event.preventDefault();

	    if ( state === STATE.TRANSLATE ) {

	    
	    	 translateEnd.set( event.clientX, event.clientY );
			

				translateDelta.sub( translateEnd, translateStart );

			    scope.translate( -translateDelta.x, undefined );
			    if (scope.cameraMode == scope.CAMERAMODE.CAMERA2D) {
				  scope.translate( undefined, translateDelta.y );
			    }

				translateStart.copy( translateEnd );


		} else if ( state === STATE.ROTATE ) {

	
				rotateEnd.set( event.clientX, event.clientY );
				rotateDelta.sub( rotateEnd, rotateStart );

				scope.rotateLeft( 2 * Math.PI * rotateDelta.x / PIXELS_PER_ROUND * scope.userRotateSpeed );
				scope.rotateUp( 2 * Math.PI * rotateDelta.y / PIXELS_PER_ROUND * scope.userRotateSpeed );

				rotateStart.copy( rotateEnd );
			

		} else if ( state === STATE.ZOOM ) {

			zoomEnd.set( event.clientX, event.clientY );
			zoomDelta.sub( zoomEnd, zoomStart );

			if ( zoomDelta.y > 0 ) {

				scope.zoomIn();

			} else {

				scope.zoomOut();

			}

			zoomStart.copy( zoomEnd );

		}

	}

	this.onDragStart = function (event ) {

	    	if (scope.cameraMode == scope.CAMERAMODE.CAMERA2D
	        	 || scope.cameraMode == scope.CAMERAMODE.TIMELINE) {
		          	state = STATE.TRANSLATE;
					translateStart.set( event.clientX, event.clientY );
			} 

				else if (scope.cameraMode == scope.CAMERAMODE.CAMERA3D) {
					state = STATE.ROTATE;
					rotateStart.set( event.clientX, event.clientY );			
			}

	};

	this.onDragEnd = function ( event ) {

		state == STATE.NONE;

	};

	this.onDragMove = function(  event ) {

	    if ( state === STATE.TRANSLATE ) {

	    
	    	 translateEnd.set( event.clientX, event.clientY );
			

				translateDelta.sub( translateEnd, translateStart );

			    scope.translate( -translateDelta.x, undefined );
			    if (scope.cameraMode == scope.CAMERAMODE.CAMERA2D) {
				  scope.translate( undefined, translateDelta.y );
			    }

				translateStart.copy( translateEnd );


		} else if ( state === STATE.ROTATE ) {

	
				rotateEnd.set( event.clientX, event.clientY );
				rotateDelta.sub( rotateEnd, rotateStart );

				scope.rotateLeft( 2 * Math.PI * rotateDelta.x / PIXELS_PER_ROUND * scope.userRotateSpeed );
				scope.rotateUp( 2 * Math.PI * rotateDelta.y / PIXELS_PER_ROUND * scope.userRotateSpeed );

				rotateStart.copy( rotateEnd );
			

		} 

	};

	function onMouseUp( event ) {

		//if ( ! scope.userRotate ) return;

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );

		state = STATE.NONE;

	}

	function onMouseWheel( event ) {

		if ( ! scope.userZoom ) return;

        var zoom = false;
		if ("wheelDelta" in event) {
		  zoom = event.wheelDelta < 0;
	    } else {
	   	  zoom = event.detail > 0;
	    }

	    if (zoom) {
	    	scope.zoomIn();
	    } else {
	    	scope.zoomOut();
	    }

	}

	this.onKeyDown = function ( event ) {

		switch( event.keyCode ) {

			case 38: /*up*/
			case 87: /*W*/ this.moveForward = true; break;

			case 37: /*left*/
			case 65: /*A*/ this.moveLeft = true; break;

			case 40: /*down*/
			case 83: /*S*/ this.moveBackward = true; break;

			case 39: /*right*/
			case 68: /*D*/ this.moveRight = true; break;

			case 82: /*R*/ this.moveUp = true; break;
			case 70: /*F*/ this.moveDown = true; break;

		}

	};

	this.onKeyUp = function ( event ) {

		switch( event.keyCode ) {

			case 38: /*up*/
			case 87: /*W*/ this.moveForward = false; break;

			case 37: /*left*/
			case 65: /*A*/ this.moveLeft = false; break;

			case 40: /*down*/
			case 83: /*S*/ this.moveBackward = false; break;

			case 39: /*right*/
			case 68: /*D*/ this.moveRight = false; break;

			case 82: /*R*/ this.moveUp = false; break;
			case 70: /*F*/ this.moveDown = false; break;

		}

	};

	this.remove = function () {
	    this.domElement.removeEventListener( 'mousedown',  onMouseDown );
	    this.domElement.removeEventListener( 'mousewheel', onMouseWheel );
	    this.domElement.removeEventListener( 'DOMMouseScroll', onMouseWheel );
	};

	this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
	this.domElement.addEventListener( 'mousedown',  onMouseDown,   false );
	this.domElement.addEventListener( 'mousewheel', onMouseWheel,  false );
	this.domElement.addEventListener('DOMMouseScroll', onMouseWheel, false);
	//this.domElement.addEventListener( 'keydown',    onKeyDown,     false );
	//this.domElement.addEventListener( 'keyup',      onKeyUp,       false );
};
