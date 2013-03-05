// three.min.js - http://github.com/mrdoob/three.js
'use strict';var THREE=THREE||{REVISION:"52"};self.console=self.console||{info:function(){},log:function(){},debug:function(){},warn:function(){},error:function(){}};self.Int32Array=self.Int32Array||Array;self.Float32Array=self.Float32Array||Array;String.prototype.startsWith=String.prototype.startsWith||function(a){return this.slice(0,a.length)===a};String.prototype.endsWith=String.prototype.endsWith||function(a){var a=String(a),b=this.lastIndexOf(a);return(-1<b&&b)===this.length-a.length};
String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")};
(function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];void 0===window.requestAnimationFrame&&(window.requestAnimationFrame=function(b){var c=Date.now(),f=Math.max(0,16-(c-a)),g=window.setTimeout(function(){b(c+f)},f);a=c+f;return g});window.cancelAnimationFrame=window.cancelAnimationFrame||
function(a){window.clearTimeout(a)}})();THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;
THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;THREE.SrcAlphaSaturateFactor=210;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.UVMapping=function(){};THREE.CubeReflectionMapping=function(){};THREE.CubeRefractionMapping=function(){};THREE.SphericalReflectionMapping=function(){};THREE.SphericalRefractionMapping=function(){};
THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.UnsignedShort4444Type=1016;
THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype.start=function(){this.oldTime=this.startTime=Date.now();this.running=!0};THREE.Clock.prototype.stop=function(){this.getElapsedTime();this.running=!1};THREE.Clock.prototype.getElapsedTime=function(){return this.elapsedTime+=this.getDelta()};THREE.Clock.prototype.getDelta=function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=Date.now(),a=0.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a};
THREE.Color=function(a){void 0!==a&&this.setHex(a);return this};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a){this.r=a.r*a.r;this.g=a.g*a.g;this.b=a.b*a.b;return this},copyLinearToGamma:function(a){this.r=Math.sqrt(a.r);this.g=Math.sqrt(a.g);this.b=Math.sqrt(a.b);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);
this.b=Math.sqrt(this.b);return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSV:function(a,b,c){var d,e,f;0===c?this.r=this.g=this.b=0:(d=Math.floor(6*a),e=6*a-d,a=c*(1-b),f=c*(1-b*e),b=c*(1-b*(1-e)),0===d?(this.r=c,this.g=b,this.b=a):1===d?(this.r=f,this.g=c,this.b=a):2===d?(this.r=a,this.g=c,this.b=b):3===d?(this.r=a,this.g=f,this.b=c):4===d?(this.r=b,this.g=a,this.b=c):5===d&&(this.r=c,this.g=a,this.b=f));return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&
255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},lerpSelf:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getContextStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;return this},sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},subSelf:function(a){this.x-=a.x;this.y-=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divideScalar:function(a){a?(this.x/=a,this.y/=a):this.set(0,
0);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.lengthSq())},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,a=this.y-a.y;return b*b+a*a},setLength:function(a){return this.normalize().multiplyScalar(a)},lerpSelf:function(a,
b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y},isZero:function(a){return this.lengthSq()<(void 0!==a?a:1E-4)},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},
sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},subSelf:function(a){this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},multiply:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},multiplySelf:function(a){this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},divideSelf:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){a?(this.x/=a,this.y/=a,this.z/=a):
this.z=this.y=this.x=0;return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.lengthSq())},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.normalize().multiplyScalar(a)},lerpSelf:function(a,b){this.x+=
(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},cross:function(a,b){this.x=a.y*b.z-a.z*b.y;this.y=a.z*b.x-a.x*b.z;this.z=a.x*b.y-a.y*b.x;return this},crossSelf:function(a){var b=this.x,c=this.y,d=this.z;this.x=c*a.z-d*a.y;this.y=d*a.x-b*a.z;this.z=b*a.y-c*a.x;return this},angleTo:function(a){return Math.acos(this.dot(a)/this.length()/a.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){return(new THREE.Vector3).sub(this,
a).lengthSq()},getPositionFromMatrix:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setEulerFromRotationMatrix:function(a,b){function c(a){return Math.min(Math.max(a,-1),1)}var d=a.elements,e=d[0],f=d[4],g=d[8],h=d[1],i=d[5],j=d[9],l=d[2],m=d[6],d=d[10];void 0===b||"XYZ"===b?(this.y=Math.asin(c(g)),0.99999>Math.abs(g)?(this.x=Math.atan2(-j,d),this.z=Math.atan2(-f,e)):(this.x=Math.atan2(m,i),this.z=0)):"YXZ"===b?(this.x=Math.asin(-c(j)),0.99999>Math.abs(j)?
(this.y=Math.atan2(g,d),this.z=Math.atan2(h,i)):(this.y=Math.atan2(-l,e),this.z=0)):"ZXY"===b?(this.x=Math.asin(c(m)),0.99999>Math.abs(m)?(this.y=Math.atan2(-l,d),this.z=Math.atan2(-f,i)):(this.y=0,this.z=Math.atan2(h,e))):"ZYX"===b?(this.y=Math.asin(-c(l)),0.99999>Math.abs(l)?(this.x=Math.atan2(m,d),this.z=Math.atan2(h,e)):(this.x=0,this.z=Math.atan2(-f,i))):"YZX"===b?(this.z=Math.asin(c(h)),0.99999>Math.abs(h)?(this.x=Math.atan2(-j,i),this.y=Math.atan2(-l,e)):(this.x=0,this.y=Math.atan2(g,d))):
"XZY"===b&&(this.z=Math.asin(-c(f)),0.99999>Math.abs(f)?(this.x=Math.atan2(m,i),this.y=Math.atan2(g,e)):(this.x=Math.atan2(-j,d),this.y=0));return this},setEulerFromQuaternion:function(a,b){function c(a){return Math.min(Math.max(a,-1),1)}var d=a.x*a.x,e=a.y*a.y,f=a.z*a.z,g=a.w*a.w;void 0===b||"XYZ"===b?(this.x=Math.atan2(2*(a.x*a.w-a.y*a.z),g-d-e+f),this.y=Math.asin(c(2*(a.x*a.z+a.y*a.w))),this.z=Math.atan2(2*(a.z*a.w-a.x*a.y),g+d-e-f)):"YXZ"===b?(this.x=Math.asin(c(2*(a.x*a.w-a.y*a.z))),this.y=Math.atan2(2*
(a.x*a.z+a.y*a.w),g-d-e+f),this.z=Math.atan2(2*(a.x*a.y+a.z*a.w),g-d+e-f)):"ZXY"===b?(this.x=Math.asin(c(2*(a.x*a.w+a.y*a.z))),this.y=Math.atan2(2*(a.y*a.w-a.z*a.x),g-d-e+f),this.z=Math.atan2(2*(a.z*a.w-a.x*a.y),g-d+e-f)):"ZYX"===b?(this.x=Math.atan2(2*(a.x*a.w+a.z*a.y),g-d-e+f),this.y=Math.asin(c(2*(a.y*a.w-a.x*a.z))),this.z=Math.atan2(2*(a.x*a.y+a.z*a.w),g+d-e-f)):"YZX"===b?(this.x=Math.atan2(2*(a.x*a.w-a.z*a.y),g-d+e-f),this.y=Math.atan2(2*(a.y*a.w-a.x*a.z),g+d-e-f),this.z=Math.asin(c(2*(a.x*a.y+
a.z*a.w)))):"XZY"===b&&(this.x=Math.atan2(2*(a.x*a.w+a.y*a.z),g-d+e-f),this.y=Math.atan2(2*(a.x*a.z+a.y*a.w),g+d-e-f),this.z=Math.asin(c(2*(a.z*a.w-a.x*a.y))));return this},getScaleFromMatrix:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length(),a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=a;return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},
isZero:function(a){return this.lengthSq()<(void 0!==a?a:1E-4)},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},subSelf:function(a){this.x-=
a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},divideScalar:function(a){a?(this.x/=a,this.y/=a,this.z/=a,this.w/=a):(this.z=this.y=this.x=0,this.w=1);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.dot(this)},length:function(){return Math.sqrt(this.lengthSq())},lengthManhattan:function(){return Math.abs(this.x)+
Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.normalize().multiplyScalar(a)},lerpSelf:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):
(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d,a=a.elements,e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],i=a[9];c=a[2];b=a[6];var j=a[10];if(0.01>Math.abs(d-g)&&0.01>Math.abs(f-c)&&0.01>Math.abs(i-b)){if(0.1>Math.abs(d+g)&&0.1>Math.abs(f+c)&&0.1>Math.abs(i+b)&&0.1>Math.abs(e+h+j-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;j=(j+1)/2;d=(d+g)/4;f=(f+c)/4;i=(i+b)/4;e>h&&e>j?0.01>e?(b=0,d=c=0.707106781):(b=Math.sqrt(e),c=d/b,d=f/
b):h>j?0.01>h?(b=0.707106781,c=0,d=0.707106781):(c=Math.sqrt(h),b=d/c,d=i/c):0.01>j?(c=b=0.707106781,d=0):(d=Math.sqrt(j),b=f/d,c=i/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-i)*(b-i)+(f-c)*(f-c)+(g-d)*(g-d));0.001>Math.abs(a)&&(a=1);this.x=(b-i)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+j-1)/2);return this}};THREE.Matrix3=function(){this.elements=new Float32Array(9)};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,getInverse:function(a){var b=a.elements,a=b[10]*b[5]-b[6]*b[9],c=-b[10]*b[1]+b[2]*b[9],d=b[6]*b[1]-b[2]*b[5],e=-b[10]*b[4]+b[6]*b[8],f=b[10]*b[0]-b[2]*b[8],g=-b[6]*b[0]+b[2]*b[4],h=b[9]*b[4]-b[5]*b[8],i=-b[9]*b[0]+b[1]*b[8],j=b[5]*b[0]-b[1]*b[4],b=b[0]*a+b[1]*e+b[2]*h;0===b&&console.warn("Matrix3.getInverse(): determinant == 0");var b=1/b,l=this.elements;l[0]=b*a;l[1]=b*c;l[2]=b*d;l[3]=b*e;l[4]=b*f;l[5]=b*g;l[6]=b*h;l[7]=b*i;l[8]=b*j;return this},
transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},transposeIntoArray:function(a){var b=this.m;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this}};THREE.Matrix4=function(a,b,c,d,e,f,g,h,i,j,l,m,n,p,o,q){this.elements=new Float32Array(16);this.set(void 0!==a?a:1,b||0,c||0,d||0,e||0,void 0!==f?f:1,g||0,h||0,i||0,j||0,void 0!==l?l:1,m||0,n||0,p||0,o||0,void 0!==q?q:1)};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,g,h,i,j,l,m,n,p,o,q){var r=this.elements;r[0]=a;r[4]=b;r[8]=c;r[12]=d;r[1]=e;r[5]=f;r[9]=g;r[13]=h;r[2]=i;r[6]=j;r[10]=l;r[14]=m;r[3]=n;r[7]=p;r[11]=o;r[15]=q;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15]);return this},lookAt:function(a,b,c){var d=this.elements,
e=THREE.Matrix4.__v1,f=THREE.Matrix4.__v2,g=THREE.Matrix4.__v3;g.sub(a,b).normalize();0===g.length()&&(g.z=1);e.cross(c,g).normalize();0===e.length()&&(g.x+=1E-4,e.cross(c,g).normalize());f.cross(g,e);d[0]=e.x;d[4]=f.x;d[8]=g.x;d[1]=e.y;d[5]=f.y;d[9]=g.y;d[2]=e.z;d[6]=f.z;d[10]=g.z;return this},multiply:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],i=c[12],j=c[1],l=c[5],m=c[9],n=c[13],p=c[2],o=c[6],q=c[10],r=c[14],t=c[3],B=c[7],u=c[11],c=c[15],s=d[0],z=d[4],A=d[8],
v=d[12],y=d[1],C=d[5],G=d[9],H=d[13],J=d[2],E=d[6],M=d[10],K=d[14],F=d[3],I=d[7],L=d[11],d=d[15];e[0]=f*s+g*y+h*J+i*F;e[4]=f*z+g*C+h*E+i*I;e[8]=f*A+g*G+h*M+i*L;e[12]=f*v+g*H+h*K+i*d;e[1]=j*s+l*y+m*J+n*F;e[5]=j*z+l*C+m*E+n*I;e[9]=j*A+l*G+m*M+n*L;e[13]=j*v+l*H+m*K+n*d;e[2]=p*s+o*y+q*J+r*F;e[6]=p*z+o*C+q*E+r*I;e[10]=p*A+o*G+q*M+r*L;e[14]=p*v+o*H+q*K+r*d;e[3]=t*s+B*y+u*J+c*F;e[7]=t*z+B*C+u*E+c*I;e[11]=t*A+B*G+u*M+c*L;e[15]=t*v+B*H+u*K+c*d;return this},multiplySelf:function(a){return this.multiply(this,
a)},multiplyToArray:function(a,b,c){var d=this.elements;this.multiply(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},multiplyVector3:function(a){var b=this.elements,
c=a.x,d=a.y,e=a.z,f=1/(b[3]*c+b[7]*d+b[11]*e+b[15]);a.x=(b[0]*c+b[4]*d+b[8]*e+b[12])*f;a.y=(b[1]*c+b[5]*d+b[9]*e+b[13])*f;a.z=(b[2]*c+b[6]*d+b[10]*e+b[14])*f;return a},multiplyVector4:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w;a.x=b[0]*c+b[4]*d+b[8]*e+b[12]*f;a.y=b[1]*c+b[5]*d+b[9]*e+b[13]*f;a.z=b[2]*c+b[6]*d+b[10]*e+b[14]*f;a.w=b[3]*c+b[7]*d+b[11]*e+b[15]*f;return a},multiplyVector3Array:function(a){for(var b=THREE.Matrix4.__v1,c=0,d=a.length;c<d;c+=3)b.x=a[c],b.y=a[c+1],b.z=a[c+2],
this.multiplyVector3(b),a[c]=b.x,a[c+1]=b.y,a[c+2]=b.z;return a},rotateAxis:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z;a.x=c*b[0]+d*b[4]+e*b[8];a.y=c*b[1]+d*b[5]+e*b[9];a.z=c*b[2]+d*b[6]+e*b[10];a.normalize();return a},crossVector:function(a){var b=this.elements,c=new THREE.Vector4;c.x=b[0]*a.x+b[4]*a.y+b[8]*a.z+b[12]*a.w;c.y=b[1]*a.x+b[5]*a.y+b[9]*a.z+b[13]*a.w;c.z=b[2]*a.x+b[6]*a.y+b[10]*a.z+b[14]*a.w;c.w=a.w?b[3]*a.x+b[7]*a.y+b[11]*a.z+b[15]*a.w:1;return c},determinant:function(){var a=
this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],i=a[13],j=a[2],l=a[6],m=a[10],n=a[14],p=a[3],o=a[7],q=a[11],a=a[15];return e*h*l*p-d*i*l*p-e*g*m*p+c*i*m*p+d*g*n*p-c*h*n*p-e*h*j*o+d*i*j*o+e*f*m*o-b*i*m*o-d*f*n*o+b*h*n*o+e*g*j*q-c*i*j*q-e*f*l*q+b*i*l*q+c*f*n*q-b*g*n*q-d*g*j*a+c*h*j*a+d*f*l*a-b*h*l*a-c*f*m*a+b*g*m*a},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=
a[11];a[11]=a[14];a[14]=b;return this},flattenToArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+
14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a=this.elements;return THREE.Matrix4.__v1.set(a[12],a[13],a[14])},setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getColumnX:function(){var a=this.elements;return THREE.Matrix4.__v1.set(a[0],a[1],a[2])},getColumnY:function(){var a=this.elements;return THREE.Matrix4.__v1.set(a[4],a[5],a[6])},getColumnZ:function(){var a=this.elements;return THREE.Matrix4.__v1.set(a[8],a[9],a[10])},getInverse:function(a){var b=
this.elements,c=a.elements,d=c[0],e=c[4],f=c[8],g=c[12],h=c[1],i=c[5],j=c[9],l=c[13],m=c[2],n=c[6],p=c[10],o=c[14],q=c[3],r=c[7],t=c[11],c=c[15];b[0]=j*o*r-l*p*r+l*n*t-i*o*t-j*n*c+i*p*c;b[4]=g*p*r-f*o*r-g*n*t+e*o*t+f*n*c-e*p*c;b[8]=f*l*r-g*j*r+g*i*t-e*l*t-f*i*c+e*j*c;b[12]=g*j*n-f*l*n-g*i*p+e*l*p+f*i*o-e*j*o;b[1]=l*p*q-j*o*q-l*m*t+h*o*t+j*m*c-h*p*c;b[5]=f*o*q-g*p*q+g*m*t-d*o*t-f*m*c+d*p*c;b[9]=g*j*q-f*l*q-g*h*t+d*l*t+f*h*c-d*j*c;b[13]=f*l*m-g*j*m+g*h*p-d*l*p-f*h*o+d*j*o;b[2]=i*o*q-l*n*q+l*m*r-h*o*
r-i*m*c+h*n*c;b[6]=g*n*q-e*o*q-g*m*r+d*o*r+e*m*c-d*n*c;b[10]=e*l*q-g*i*q+g*h*r-d*l*r-e*h*c+d*i*c;b[14]=g*i*m-e*l*m-g*h*n+d*l*n+e*h*o-d*i*o;b[3]=j*n*q-i*p*q-j*m*r+h*p*r+i*m*t-h*n*t;b[7]=e*p*q-f*n*q+f*m*r-d*p*r-e*m*t+d*n*t;b[11]=f*i*q-e*j*q-f*h*r+d*j*r+e*h*t-d*i*t;b[15]=e*j*m-f*i*m+f*h*n-d*j*n-e*h*p+d*i*p;this.multiplyScalar(1/a.determinant());return this},setRotationFromEuler:function(a,b){var c=this.elements,d=a.x,e=a.y,f=a.z,g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e),i=Math.cos(f),f=
Math.sin(f);if(void 0===b||"XYZ"===b){var j=g*i,l=g*f,m=d*i,n=d*f;c[0]=h*i;c[4]=-h*f;c[8]=e;c[1]=l+m*e;c[5]=j-n*e;c[9]=-d*h;c[2]=n-j*e;c[6]=m+l*e;c[10]=g*h}else"YXZ"===b?(j=h*i,l=h*f,m=e*i,n=e*f,c[0]=j+n*d,c[4]=m*d-l,c[8]=g*e,c[1]=g*f,c[5]=g*i,c[9]=-d,c[2]=l*d-m,c[6]=n+j*d,c[10]=g*h):"ZXY"===b?(j=h*i,l=h*f,m=e*i,n=e*f,c[0]=j-n*d,c[4]=-g*f,c[8]=m+l*d,c[1]=l+m*d,c[5]=g*i,c[9]=n-j*d,c[2]=-g*e,c[6]=d,c[10]=g*h):"ZYX"===b?(j=g*i,l=g*f,m=d*i,n=d*f,c[0]=h*i,c[4]=m*e-l,c[8]=j*e+n,c[1]=h*f,c[5]=n*e+j,c[9]=
l*e-m,c[2]=-e,c[6]=d*h,c[10]=g*h):"YZX"===b?(j=g*h,l=g*e,m=d*h,n=d*e,c[0]=h*i,c[4]=n-j*f,c[8]=m*f+l,c[1]=f,c[5]=g*i,c[9]=-d*i,c[2]=-e*i,c[6]=l*f+m,c[10]=j-n*f):"XZY"===b&&(j=g*h,l=g*e,m=d*h,n=d*e,c[0]=h*i,c[4]=-f,c[8]=e*i,c[1]=j*f+n,c[5]=g*i,c[9]=l*f-m,c[2]=m*f-l,c[6]=d*i,c[10]=n*f+j);return this},setRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,i=e+e,a=c*g,j=c*h,c=c*i,l=d*h,d=d*i,e=e*i,g=f*g,h=f*h,f=f*i;b[0]=1-(l+e);b[4]=j-f;b[8]=c+h;b[1]=j+f;b[5]=1-(a+
e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+l);return this},compose:function(a,b,c){var d=this.elements,e=THREE.Matrix4.__m1,f=THREE.Matrix4.__m2;e.identity();e.setRotationFromQuaternion(b);f.makeScale(c.x,c.y,c.z);this.multiply(e,f);d[12]=a.x;d[13]=a.y;d[14]=a.z;return this},decompose:function(a,b,c){var d=this.elements,e=THREE.Matrix4.__v1,f=THREE.Matrix4.__v2,g=THREE.Matrix4.__v3;e.set(d[0],d[1],d[2]);f.set(d[4],d[5],d[6]);g.set(d[8],d[9],d[10]);a=a instanceof THREE.Vector3?a:new THREE.Vector3;b=
b instanceof THREE.Quaternion?b:new THREE.Quaternion;c=c instanceof THREE.Vector3?c:new THREE.Vector3;c.x=e.length();c.y=f.length();c.z=g.length();a.x=d[12];a.y=d[13];a.z=d[14];d=THREE.Matrix4.__m1;d.copy(this);d.elements[0]/=c.x;d.elements[1]/=c.x;d.elements[2]/=c.x;d.elements[4]/=c.y;d.elements[5]/=c.y;d.elements[6]/=c.y;d.elements[8]/=c.z;d.elements[9]/=c.z;d.elements[10]/=c.z;b.setFromRotationMatrix(d);return[a,b,c]},extractPosition:function(a){var b=this.elements,a=a.elements;b[12]=a[12];b[13]=
a[13];b[14]=a[14];return this},extractRotation:function(a){var b=this.elements,a=a.elements,c=THREE.Matrix4.__v1,d=1/c.set(a[0],a[1],a[2]).length(),e=1/c.set(a[4],a[5],a[6]).length(),c=1/c.set(a[8],a[9],a[10]).length();b[0]=a[0]*d;b[1]=a[1]*d;b[2]=a[2]*d;b[4]=a[4]*e;b[5]=a[5]*e;b[6]=a[6]*e;b[8]=a[8]*c;b[9]=a[9]*c;b[10]=a[10]*c;return this},translate:function(a){var b=this.elements,c=a.x,d=a.y,a=a.z;b[12]=b[0]*c+b[4]*d+b[8]*a+b[12];b[13]=b[1]*c+b[5]*d+b[9]*a+b[13];b[14]=b[2]*c+b[6]*d+b[10]*a+b[14];
b[15]=b[3]*c+b[7]*d+b[11]*a+b[15];return this},rotateX:function(a){var b=this.elements,c=b[4],d=b[5],e=b[6],f=b[7],g=b[8],h=b[9],i=b[10],j=b[11],l=Math.cos(a),a=Math.sin(a);b[4]=l*c+a*g;b[5]=l*d+a*h;b[6]=l*e+a*i;b[7]=l*f+a*j;b[8]=l*g-a*c;b[9]=l*h-a*d;b[10]=l*i-a*e;b[11]=l*j-a*f;return this},rotateY:function(a){var b=this.elements,c=b[0],d=b[1],e=b[2],f=b[3],g=b[8],h=b[9],i=b[10],j=b[11],l=Math.cos(a),a=Math.sin(a);b[0]=l*c-a*g;b[1]=l*d-a*h;b[2]=l*e-a*i;b[3]=l*f-a*j;b[8]=l*g+a*c;b[9]=l*h+a*d;b[10]=
l*i+a*e;b[11]=l*j+a*f;return this},rotateZ:function(a){var b=this.elements,c=b[0],d=b[1],e=b[2],f=b[3],g=b[4],h=b[5],i=b[6],j=b[7],l=Math.cos(a),a=Math.sin(a);b[0]=l*c+a*g;b[1]=l*d+a*h;b[2]=l*e+a*i;b[3]=l*f+a*j;b[4]=l*g-a*c;b[5]=l*h-a*d;b[6]=l*i-a*e;b[7]=l*j-a*f;return this},rotateByAxis:function(a,b){var c=this.elements;if(1===a.x&&0===a.y&&0===a.z)return this.rotateX(b);if(0===a.x&&1===a.y&&0===a.z)return this.rotateY(b);if(0===a.x&&0===a.y&&1===a.z)return this.rotateZ(b);var d=a.x,e=a.y,f=a.z,
g=Math.sqrt(d*d+e*e+f*f),d=d/g,e=e/g,f=f/g,g=d*d,h=e*e,i=f*f,j=Math.cos(b),l=Math.sin(b),m=1-j,n=d*e*m,p=d*f*m,m=e*f*m,d=d*l,o=e*l,l=f*l,f=g+(1-g)*j,g=n+l,e=p-o,n=n-l,h=h+(1-h)*j,l=m+d,p=p+o,m=m-d,i=i+(1-i)*j,j=c[0],d=c[1],o=c[2],q=c[3],r=c[4],t=c[5],B=c[6],u=c[7],s=c[8],z=c[9],A=c[10],v=c[11];c[0]=f*j+g*r+e*s;c[1]=f*d+g*t+e*z;c[2]=f*o+g*B+e*A;c[3]=f*q+g*u+e*v;c[4]=n*j+h*r+l*s;c[5]=n*d+h*t+l*z;c[6]=n*o+h*B+l*A;c[7]=n*q+h*u+l*v;c[8]=p*j+m*r+i*s;c[9]=p*d+m*t+i*z;c[10]=p*o+m*B+i*A;c[11]=p*q+m*u+i*v;
return this},scale:function(a){var b=this.elements,c=a.x,d=a.y,a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a),a=Math.sin(a);
this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,i=e*f,j=e*g;this.set(i*f+c,i*g-d*h,i*h+d*g,0,i*g+d*h,j*g+c,j*h-d*f,0,i*h-d*g,j*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,
b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},makeFrustum:function(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makePerspective:function(a,b,c,d){var a=c*Math.tan(a*Math.PI/360),e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=b-a,i=c-d,j=f-e;g[0]=2/
h;g[4]=0;g[8]=0;g[12]=-((b+a)/h);g[1]=0;g[5]=2/i;g[9]=0;g[13]=-((c+d)/i);g[2]=0;g[6]=0;g[10]=-2/j;g[14]=-((f+e)/j);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},clone:function(){var a=this.elements;return new THREE.Matrix4(a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15])}};THREE.Matrix4.__v1=new THREE.Vector3;THREE.Matrix4.__v2=new THREE.Vector3;THREE.Matrix4.__v3=new THREE.Vector3;THREE.Matrix4.__m1=new THREE.Matrix4;THREE.Matrix4.__m2=new THREE.Matrix4;
THREE.EventTarget=function(){var a={};this.addEventListener=function(b,c){void 0===a[b]&&(a[b]=[]);-1===a[b].indexOf(c)&&a[b].push(c)};this.dispatchEvent=function(b){for(var c in a[b.type])a[b.type][c](b)};this.removeEventListener=function(b,c){var d=a[b].indexOf(c);-1!==d&&a[b].splice(d,1)}};THREE.Frustum=function(){this.planes=[new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4]};
THREE.Frustum.prototype.setFromMatrix=function(a){var b=this.planes,c=a.elements,a=c[0],d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],i=c[6],j=c[7],l=c[8],m=c[9],n=c[10],p=c[11],o=c[12],q=c[13],r=c[14],c=c[15];b[0].set(f-a,j-g,p-l,c-o);b[1].set(f+a,j+g,p+l,c+o);b[2].set(f+d,j+h,p+m,c+q);b[3].set(f-d,j-h,p-m,c-q);b[4].set(f-e,j-i,p-n,c-r);b[5].set(f+e,j+i,p+n,c+r);for(d=0;6>d;d++)a=b[d],a.divideScalar(Math.sqrt(a.x*a.x+a.y*a.y+a.z*a.z))};
THREE.Frustum.prototype.contains=function(a){for(var b=0,c=this.planes,b=a.matrixWorld,d=b.elements,a=-a.geometry.boundingSphere.radius*b.getMaxScaleOnAxis(),e=0;6>e;e++)if(b=c[e].x*d[12]+c[e].y*d[13]+c[e].z*d[14]+c[e].w,b<=a)return!1;return!0};THREE.Frustum.__v1=new THREE.Vector3;
(function(a){a.Ray=function(b,c,d,e){this.origin=b||new a.Vector3;this.direction=c||new a.Vector3;this.near=d||0;this.far=e||Infinity};var b=new a.Vector3,c=new a.Vector3,d=new a.Vector3,e=new a.Vector3,f=new a.Vector3,g=new a.Vector3,h=new a.Matrix4,i=function(a,b){return a.distance-b.distance},j=new a.Vector3,l=new a.Vector3,m=new a.Vector3,n=function(a,b,c){j.sub(c,a);var d=j.dot(b),a=l.add(a,m.copy(b).multiplyScalar(d));return c.distanceTo(a)},p=function(a,b,c,d){j.sub(d,b);l.sub(c,b);m.sub(a,
b);var a=j.dot(j),b=j.dot(l),c=j.dot(m),e=l.dot(l),d=l.dot(m),f=1/(a*e-b*b),e=(e*c-b*d)*f,a=(a*d-b*c)*f;return 0<=e&&0<=a&&1>e+a},o=function(i,l,j){var m,o;if(i instanceof a.Particle){m=n(l.origin,l.direction,i.matrixWorld.getPosition());if(m>i.scale.x)return j;o={distance:m,point:i.position,face:null,object:i};j.push(o)}else if(i instanceof a.Mesh){var q=i.geometry.boundingSphere.radius*i.matrixWorld.getMaxScaleOnAxis();m=n(l.origin,l.direction,i.matrixWorld.getPosition());if(m>q)return j;var A,
v,y=i.geometry,C=y.vertices,G,H,J;G=i.geometry.materials;H=i.material instanceof a.MeshFaceMaterial;var E,M=l.precision;i.matrixRotationWorld.extractRotation(i.matrixWorld);b.copy(l.origin);h.getInverse(i.matrixWorld);c.copy(b);h.multiplyVector3(c);d.copy(l.direction);h.rotateAxis(d).normalize();q=0;for(A=y.faces.length;q<A;q++)if(o=y.faces[q],m=!0===H?G[o.materialIndex]:i.material,void 0!==m&&(J=m.side,e.sub(o.centroid,c),f=o.normal,m=d.dot(f),!(Math.abs(m)<M)&&(v=f.dot(e)/m,!(0>v)&&(J===a.DoubleSide||
(J===a.FrontSide?0>m:0<m)))))if(g.add(c,d.multiplyScalar(v)),o instanceof a.Face3)m=C[o.a],v=C[o.b],J=C[o.c],p(g,m,v,J)&&(v=i.matrixWorld.multiplyVector3(g.clone()),m=b.distanceTo(v),m<l.near||m>l.far||(o={distance:m,point:v,face:o,faceIndex:q,object:i},j.push(o)));else if(o instanceof a.Face4&&(m=C[o.a],v=C[o.b],J=C[o.c],E=C[o.d],p(g,m,v,E)||p(g,v,J,E)))v=i.matrixWorld.multiplyVector3(g.clone()),m=b.distanceTo(v),m<l.near||m>l.far||(o={distance:m,point:v,face:o,faceIndex:q,object:i},j.push(o))}},
q=function(a,b,c){for(var a=a.getDescendants(),d=0,e=a.length;d<e;d++)o(a[d],b,c)};a.Ray.prototype.precision=1E-4;a.Ray.prototype.set=function(a,b){this.origin=a;this.direction=b};a.Ray.prototype.intersectObject=function(a,b){var c=[];!0===b&&q(a,this,c);o(a,this,c);c.sort(i);return c};a.Ray.prototype.intersectObjects=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)o(a[d],this,c),!0===b&&q(a[d],this,c);c.sort(i);return c}})(THREE);
THREE.Rectangle=function(){function a(){f=d-b;g=e-c}var b=0,c=0,d=0,e=0,f=0,g=0,h=!0;this.getX=function(){return b};this.getY=function(){return c};this.getWidth=function(){return f};this.getHeight=function(){return g};this.getLeft=function(){return b};this.getTop=function(){return c};this.getRight=function(){return d};this.getBottom=function(){return e};this.set=function(f,g,l,m){h=!1;b=f;c=g;d=l;e=m;a()};this.addPoint=function(f,g){!0===h?(h=!1,b=f,c=g,d=f,e=g):(b=b<f?b:f,c=c<g?c:g,d=d>f?d:f,e=e>
g?e:g);a()};this.add3Points=function(f,g,l,m,n,p){!0===h?(h=!1,b=f<l?f<n?f:n:l<n?l:n,c=g<m?g<p?g:p:m<p?m:p,d=f>l?f>n?f:n:l>n?l:n,e=g>m?g>p?g:p:m>p?m:p):(b=f<l?f<n?f<b?f:b:n<b?n:b:l<n?l<b?l:b:n<b?n:b,c=g<m?g<p?g<c?g:c:p<c?p:c:m<p?m<c?m:c:p<c?p:c,d=f>l?f>n?f>d?f:d:n>d?n:d:l>n?l>d?l:d:n>d?n:d,e=g>m?g>p?g>e?g:e:p>e?p:e:m>p?m>e?m:e:p>e?p:e);a()};this.addRectangle=function(f){!0===h?(h=!1,b=f.getLeft(),c=f.getTop(),d=f.getRight(),e=f.getBottom()):(b=b<f.getLeft()?b:f.getLeft(),c=c<f.getTop()?c:f.getTop(),
d=d>f.getRight()?d:f.getRight(),e=e>f.getBottom()?e:f.getBottom());a()};this.inflate=function(f){b-=f;c-=f;d+=f;e+=f;a()};this.minSelf=function(f){b=b>f.getLeft()?b:f.getLeft();c=c>f.getTop()?c:f.getTop();d=d<f.getRight()?d:f.getRight();e=e<f.getBottom()?e:f.getBottom();a()};this.intersects=function(a){return d<a.getLeft()||b>a.getRight()||e<a.getTop()||c>a.getBottom()?!1:!0};this.empty=function(){h=!0;e=d=c=b=0;a()};this.isEmpty=function(){return h}};
THREE.Math={clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(0.5-Math.random())},sign:function(a){return 0>a?-1:0<a?1:0}};
THREE.Object3D=function(){THREE.Object3DLibrary.push(this);this.id=THREE.Object3DIdCount++;this.name="";this.properties={};this.parent=void 0;this.children=[];this.up=new THREE.Vector3(0,1,0);this.position=new THREE.Vector3;this.rotation=new THREE.Vector3;this.eulerOrder=THREE.Object3D.defaultEulerOrder;this.scale=new THREE.Vector3(1,1,1);this.renderDepth=null;this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixRotationWorld=new THREE.Matrix4;this.matrixWorldNeedsUpdate=
this.matrixAutoUpdate=!0;this.quaternion=new THREE.Quaternion;this.useQuaternion=!1;this.boundRadius=0;this.boundRadiusScale=1;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this._vector=new THREE.Vector3};
THREE.Object3D.prototype={constructor:THREE.Object3D,applyMatrix:function(a){this.matrix.multiply(a,this.matrix);this.scale.getScaleFromMatrix(this.matrix);a=(new THREE.Matrix4).extractRotation(this.matrix);this.rotation.setEulerFromRotationMatrix(a,this.eulerOrder);this.position.getPositionFromMatrix(this.matrix)},translate:function(a,b){this.matrix.rotateAxis(b);this.position.addSelf(b.multiplyScalar(a))},translateX:function(a){this.translate(a,this._vector.set(1,0,0))},translateY:function(a){this.translate(a,
this._vector.set(0,1,0))},translateZ:function(a){this.translate(a,this._vector.set(0,0,1))},localToWorld:function(a){return this.matrixWorld.multiplyVector3(a)},worldToLocal:function(a){return THREE.Object3D.__m1.getInverse(this.matrixWorld).multiplyVector3(a)},lookAt:function(a){this.matrix.lookAt(a,this.position,this.up);this.rotationAutoUpdate&&this.rotation.setEulerFromRotationMatrix(this.matrix,this.eulerOrder)},add:function(a){if(a===this)console.warn("THREE.Object3D.add: An object can't be added as a child of itself.");
else if(a instanceof THREE.Object3D){void 0!==a.parent&&a.parent.remove(a);a.parent=this;this.children.push(a);for(var b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__addObject(a)}},remove:function(a){var b=this.children.indexOf(a);if(-1!==b){a.parent=void 0;this.children.splice(b,1);for(b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__removeObject(a)}},traverse:function(a){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverse(a)},
getChildByName:function(a,b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.name===a||!0===b&&(e=e.getChildByName(a,b),void 0!==e))return e}},getDescendants:function(a){void 0===a&&(a=[]);Array.prototype.push.apply(a,this.children);for(var b=0,c=this.children.length;b<c;b++)this.children[b].getDescendants(a);return a},updateMatrix:function(){this.matrix.setPosition(this.position);!1===this.useQuaternion?this.matrix.setRotationFromEuler(this.rotation,this.eulerOrder):this.matrix.setRotationFromQuaternion(this.quaternion);
if(1!==this.scale.x||1!==this.scale.y||1!==this.scale.z)this.matrix.scale(this.scale),this.boundRadiusScale=Math.max(this.scale.x,Math.max(this.scale.y,this.scale.z));this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)void 0===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiply(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<
c;b++)this.children[b].updateMatrixWorld(a)},clone:function(a){void 0===a&&(a=new THREE.Object3D);a.name=this.name;a.up.copy(this.up);a.position.copy(this.position);a.rotation instanceof THREE.Vector3&&a.rotation.copy(this.rotation);a.eulerOrder=this.eulerOrder;a.scale.copy(this.scale);a.renderDepth=this.renderDepth;a.rotationAutoUpdate=this.rotationAutoUpdate;a.matrix.copy(this.matrix);a.matrixWorld.copy(this.matrixWorld);a.matrixRotationWorld.copy(this.matrixRotationWorld);a.matrixAutoUpdate=this.matrixAutoUpdate;
a.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;a.quaternion.copy(this.quaternion);a.useQuaternion=this.useQuaternion;a.boundRadius=this.boundRadius;a.boundRadiusScale=this.boundRadiusScale;a.visible=this.visible;a.castShadow=this.castShadow;a.receiveShadow=this.receiveShadow;a.frustumCulled=this.frustumCulled;return a},deallocate:function(){var a=THREE.Object3DLibrary.indexOf(this);-1!==a&&THREE.Object3DLibrary.splice(a,1)}};THREE.Object3D.__m1=new THREE.Matrix4;
THREE.Object3D.defaultEulerOrder="XYZ";THREE.Object3DIdCount=0;THREE.Object3DLibrary=[];
THREE.Projector=function(){function a(){if(f===h){var a=new THREE.RenderableObject;g.push(a);h++;f++;return a}return g[f++]}function b(){if(j===m){var a=new THREE.RenderableVertex;l.push(a);m++;j++;return a}return l[j++]}function c(a,b){return b.z-a.z}function d(a,b){var c=0,d=1,e=a.z+a.w,f=b.z+b.w,g=-a.z+a.w,h=-b.z+b.w;if(0<=e&&0<=f&&0<=g&&0<=h)return!0;if(0>e&&0>f||0>g&&0>h)return!1;0>e?c=Math.max(c,e/(e-f)):0>f&&(d=Math.min(d,e/(e-f)));0>g?c=Math.max(c,g/(g-h)):0>h&&(d=Math.min(d,g/(g-h)));if(d<
c)return!1;a.lerpSelf(b,c);b.lerpSelf(a,1-d);return!0}var e,f,g=[],h=0,i,j,l=[],m=0,n,p,o=[],q=0,r,t=[],B=0,u,s,z=[],A=0,v,y,C=[],G=0,H={objects:[],sprites:[],lights:[],elements:[]},J=new THREE.Vector3,E=new THREE.Vector4,M=new THREE.Matrix4,K=new THREE.Matrix4,F=new THREE.Frustum,I=new THREE.Vector4,L=new THREE.Vector4;this.projectVector=function(a,b){b.matrixWorldInverse.getInverse(b.matrixWorld);M.multiply(b.projectionMatrix,b.matrixWorldInverse);M.multiplyVector3(a);return a};this.unprojectVector=
function(a,b){b.projectionMatrixInverse.getInverse(b.projectionMatrix);M.multiply(b.matrixWorld,b.projectionMatrixInverse);M.multiplyVector3(a);return a};this.pickingRay=function(a,b){var c;a.z=-1;c=new THREE.Vector3(a.x,a.y,1);this.unprojectVector(a,b);this.unprojectVector(c,b);c.subSelf(a).normalize();return new THREE.Ray(a,c)};this.projectScene=function(g,h,m,N){var ea=h.near,Q=h.far,qa=!1,la,O,fa,W,V,ia,Z,ca,Ga,Pa,Ia,Ua,na,Va,ib,Ra;y=s=r=p=0;H.elements.length=0;g.updateMatrixWorld();void 0===
h.parent&&h.updateMatrixWorld();h.matrixWorldInverse.getInverse(h.matrixWorld);M.multiply(h.projectionMatrix,h.matrixWorldInverse);F.setFromMatrix(M);f=0;H.objects.length=0;H.sprites.length=0;H.lights.length=0;var eb=function(b){for(var c=0,d=b.children.length;c<d;c++){var f=b.children[c];if(!1!==f.visible){if(f instanceof THREE.Light)H.lights.push(f);else if(f instanceof THREE.Mesh||f instanceof THREE.Line){if(!1===f.frustumCulled||!0===F.contains(f))e=a(),e.object=f,null!==f.renderDepth?e.z=f.renderDepth:
(J.copy(f.matrixWorld.getPosition()),M.multiplyVector3(J),e.z=J.z),H.objects.push(e)}else f instanceof THREE.Sprite||f instanceof THREE.Particle?(e=a(),e.object=f,null!==f.renderDepth?e.z=f.renderDepth:(J.copy(f.matrixWorld.getPosition()),M.multiplyVector3(J),e.z=J.z),H.sprites.push(e)):(e=a(),e.object=f,null!==f.renderDepth?e.z=f.renderDepth:(J.copy(f.matrixWorld.getPosition()),M.multiplyVector3(J),e.z=J.z),H.objects.push(e));eb(f)}}};eb(g);!0===m&&H.objects.sort(c);g=0;for(m=H.objects.length;g<
m;g++)if(ca=H.objects[g].object,Ga=ca.matrixWorld,j=0,ca instanceof THREE.Mesh){Pa=ca.geometry;Ia=ca.geometry.materials;fa=Pa.vertices;Ua=Pa.faces;Va=Pa.faceVertexUvs;Pa=ca.matrixRotationWorld.extractRotation(Ga);ib=ca.material instanceof THREE.MeshFaceMaterial;la=0;for(O=fa.length;la<O;la++)i=b(),i.positionWorld.copy(fa[la]),Ga.multiplyVector3(i.positionWorld),i.positionScreen.copy(i.positionWorld),M.multiplyVector4(i.positionScreen),i.positionScreen.x/=i.positionScreen.w,i.positionScreen.y/=i.positionScreen.w,
i.visible=i.positionScreen.z>ea&&i.positionScreen.z<Q;fa=0;for(la=Ua.length;fa<la;fa++)if(O=Ua[fa],Ra=!0===ib?Ia[O.materialIndex]:ca.material,void 0!==Ra){ia=Ra.side;if(O instanceof THREE.Face3)if(W=l[O.a],V=l[O.b],Z=l[O.c],!0===W.visible&&!0===V.visible&&!0===Z.visible)if(qa=0>(Z.positionScreen.x-W.positionScreen.x)*(V.positionScreen.y-W.positionScreen.y)-(Z.positionScreen.y-W.positionScreen.y)*(V.positionScreen.x-W.positionScreen.x),ia===THREE.DoubleSide||qa===(ia===THREE.FrontSide))p===q?(na=new THREE.RenderableFace3,
o.push(na),q++,p++,n=na):n=o[p++],n.v1.copy(W),n.v2.copy(V),n.v3.copy(Z);else continue;else continue;else if(O instanceof THREE.Face4)if(W=l[O.a],V=l[O.b],Z=l[O.c],na=l[O.d],!0===W.visible&&!0===V.visible&&!0===Z.visible&&!0===na.visible)if(qa=0>(na.positionScreen.x-W.positionScreen.x)*(V.positionScreen.y-W.positionScreen.y)-(na.positionScreen.y-W.positionScreen.y)*(V.positionScreen.x-W.positionScreen.x)||0>(V.positionScreen.x-Z.positionScreen.x)*(na.positionScreen.y-Z.positionScreen.y)-(V.positionScreen.y-
Z.positionScreen.y)*(na.positionScreen.x-Z.positionScreen.x),ia===THREE.DoubleSide||qa===(ia===THREE.FrontSide)){if(r===B){var pb=new THREE.RenderableFace4;t.push(pb);B++;r++;n=pb}else n=t[r++];n.v1.copy(W);n.v2.copy(V);n.v3.copy(Z);n.v4.copy(na)}else continue;else continue;n.normalWorld.copy(O.normal);!1===qa&&(ia===THREE.BackSide||ia===THREE.DoubleSide)&&n.normalWorld.negate();Pa.multiplyVector3(n.normalWorld);n.centroidWorld.copy(O.centroid);Ga.multiplyVector3(n.centroidWorld);n.centroidScreen.copy(n.centroidWorld);
M.multiplyVector3(n.centroidScreen);Z=O.vertexNormals;W=0;for(V=Z.length;W<V;W++)na=n.vertexNormalsWorld[W],na.copy(Z[W]),!1===qa&&(ia===THREE.BackSide||ia===THREE.DoubleSide)&&na.negate(),Pa.multiplyVector3(na);n.vertexNormalsLength=Z.length;W=0;for(V=Va.length;W<V;W++)if(na=Va[W][fa],void 0!==na){ia=0;for(Z=na.length;ia<Z;ia++)n.uvs[W][ia]=na[ia]}n.color=O.color;n.material=Ra;n.z=n.centroidScreen.z;H.elements.push(n)}}else if(ca instanceof THREE.Line){K.multiply(M,Ga);fa=ca.geometry.vertices;W=
b();W.positionScreen.copy(fa[0]);K.multiplyVector4(W.positionScreen);Ga=ca.type===THREE.LinePieces?2:1;la=1;for(O=fa.length;la<O;la++)W=b(),W.positionScreen.copy(fa[la]),K.multiplyVector4(W.positionScreen),0<(la+1)%Ga||(V=l[j-2],I.copy(W.positionScreen),L.copy(V.positionScreen),!0===d(I,L)&&(I.multiplyScalar(1/I.w),L.multiplyScalar(1/L.w),s===A?(Ia=new THREE.RenderableLine,z.push(Ia),A++,s++,u=Ia):u=z[s++],u.v1.positionScreen.copy(I),u.v2.positionScreen.copy(L),u.z=Math.max(I.z,L.z),u.material=ca.material,
H.elements.push(u)))}g=0;for(m=H.sprites.length;g<m;g++)ca=H.sprites[g].object,Ga=ca.matrixWorld,ca instanceof THREE.Particle&&(E.set(Ga.elements[12],Ga.elements[13],Ga.elements[14],1),M.multiplyVector4(E),E.z/=E.w,0<E.z&&1>E.z&&(y===G?(ea=new THREE.RenderableParticle,C.push(ea),G++,y++,v=ea):v=C[y++],v.object=ca,v.x=E.x/E.w,v.y=E.y/E.w,v.z=E.z,v.rotation=ca.rotation.z,v.scale.x=ca.scale.x*Math.abs(v.x-(E.x+h.projectionMatrix.elements[0])/(E.w+h.projectionMatrix.elements[12])),v.scale.y=ca.scale.y*
Math.abs(v.y-(E.y+h.projectionMatrix.elements[5])/(E.w+h.projectionMatrix.elements[13])),v.material=ca.material,H.elements.push(v)));!0===N&&H.elements.sort(c);return H}};THREE.Quaternion=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=a.w;return this},setFromEuler:function(a,b){var c=Math.cos(a.x/2),d=Math.cos(a.y/2),e=Math.cos(a.z/2),f=Math.sin(a.x/2),g=Math.sin(a.y/2),h=Math.sin(a.z/2);void 0===b||"XYZ"===b?(this.x=f*d*e+c*g*h,this.y=c*g*e-f*d*h,this.z=c*d*h+f*g*e,this.w=c*d*e-f*g*h):"YXZ"===b?(this.x=f*d*e+c*g*h,this.y=c*g*e-f*d*h,this.z=c*d*
h-f*g*e,this.w=c*d*e+f*g*h):"ZXY"===b?(this.x=f*d*e-c*g*h,this.y=c*g*e+f*d*h,this.z=c*d*h+f*g*e,this.w=c*d*e-f*g*h):"ZYX"===b?(this.x=f*d*e-c*g*h,this.y=c*g*e+f*d*h,this.z=c*d*h-f*g*e,this.w=c*d*e+f*g*h):"YZX"===b?(this.x=f*d*e+c*g*h,this.y=c*g*e+f*d*h,this.z=c*d*h-f*g*e,this.w=c*d*e-f*g*h):"XZY"===b&&(this.x=f*d*e-c*g*h,this.y=c*g*e-f*d*h,this.z=c*d*h+f*g*e,this.w=c*d*e+f*g*h);return this},setFromAxisAngle:function(a,b){var c=b/2,d=Math.sin(c);this.x=a.x*d;this.y=a.y*d;this.z=a.z*d;this.w=Math.cos(c);
return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0],a=b[4],d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],i=b[6],b=b[10],j=c+f+b;0<j?(c=0.5/Math.sqrt(j+1),this.w=0.25/c,this.x=(i-g)*c,this.y=(d-h)*c,this.z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this.w=(i-g)/c,this.x=0.25*c,this.y=(a+e)/c,this.z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this.w=(d-h)/c,this.x=(a+e)/c,this.y=0.25*c,this.z=(g+i)/c):(c=2*Math.sqrt(1+b-c-f),this.w=(e-a)/c,this.x=(d+h)/c,this.y=(g+i)/c,this.z=0.25*c);return this},calculateW:function(){this.w=
-Math.sqrt(Math.abs(1-this.x*this.x-this.y*this.y-this.z*this.z));return this},inverse:function(){this.x*=-1;this.y*=-1;this.z*=-1;return this},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},normalize:function(){var a=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);0===a?this.w=this.z=this.y=this.x=0:(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a);return this},multiply:function(a,b){var c=a.x,d=a.y,e=a.z,f=a.w,g=b.x,h=b.y,i=b.z,j=b.w;
this.x=c*j+d*i-e*h+f*g;this.y=-c*i+d*j+e*g+f*h;this.z=c*h-d*g+e*j+f*i;this.w=-c*g-d*h-e*i+f*j;return this},multiplySelf:function(a){var b=this.x,c=this.y,d=this.z,e=this.w,f=a.x,g=a.y,h=a.z,a=a.w;this.x=b*a+e*f+c*h-d*g;this.y=c*a+e*g+d*f-b*h;this.z=d*a+e*h+b*g-c*f;this.w=e*a-b*f-c*g-d*h;return this},multiplyVector3:function(a,b){b||(b=a);var c=a.x,d=a.y,e=a.z,f=this.x,g=this.y,h=this.z,i=this.w,j=i*c+g*e-h*d,l=i*d+h*c-f*e,m=i*e+f*d-g*c,c=-f*c-g*d-h*e;b.x=j*i+c*-f+l*-h-m*-g;b.y=l*i+c*-g+m*-f-j*-h;
b.z=m*i+c*-h+j*-g-l*-f;return b},slerpSelf:function(a,b){var c=this.x,d=this.y,e=this.z,f=this.w,g=f*a.w+c*a.x+d*a.y+e*a.z;0>g?(this.w=-a.w,this.x=-a.x,this.y=-a.y,this.z=-a.z,g=-g):this.copy(a);if(1<=g)return this.w=f,this.x=c,this.y=d,this.z=e,this;var h=Math.acos(g),i=Math.sqrt(1-g*g);if(0.001>Math.abs(i))return this.w=0.5*(f+this.w),this.x=0.5*(c+this.x),this.y=0.5*(d+this.y),this.z=0.5*(e+this.z),this;g=Math.sin((1-b)*h)/i;h=Math.sin(b*h)/i;this.w=f*g+this.w*h;this.x=c*g+this.x*h;this.y=d*g+
this.y*h;this.z=e*g+this.z*h;return this},clone:function(){return new THREE.Quaternion(this.x,this.y,this.z,this.w)}};
THREE.Quaternion.slerp=function(a,b,c,d){var e=a.w*b.w+a.x*b.x+a.y*b.y+a.z*b.z;0>e?(c.w=-b.w,c.x=-b.x,c.y=-b.y,c.z=-b.z,e=-e):c.copy(b);if(1<=Math.abs(e))return c.w=a.w,c.x=a.x,c.y=a.y,c.z=a.z,c;var b=Math.acos(e),f=Math.sqrt(1-e*e);if(0.001>Math.abs(f))return c.w=0.5*(a.w+c.w),c.x=0.5*(a.x+c.x),c.y=0.5*(a.y+c.y),c.z=0.5*(a.z+c.z),c;e=Math.sin((1-d)*b)/f;d=Math.sin(d*b)/f;c.w=a.w*e+c.w*d;c.x=a.x*e+c.x*d;c.y=a.y*e+c.y*d;c.z=a.z*e+c.z*d;return c};
THREE.Vertex=function(a){console.warn("THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead.");return a};THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=f;this.centroid=new THREE.Vector3};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var a=new THREE.Face3(this.a,this.b,this.c);a.normal.copy(this.normal);a.color.copy(this.color);a.centroid.copy(this.centroid);a.materialIndex=this.materialIndex;var b,c;b=0;for(c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();
return a}};THREE.Face4=function(a,b,c,d,e,f,g){this.a=a;this.b=b;this.c=c;this.d=d;this.normal=e instanceof THREE.Vector3?e:new THREE.Vector3;this.vertexNormals=e instanceof Array?e:[];this.color=f instanceof THREE.Color?f:new THREE.Color;this.vertexColors=f instanceof Array?f:[];this.vertexTangents=[];this.materialIndex=g;this.centroid=new THREE.Vector3};
THREE.Face4.prototype={constructor:THREE.Face4,clone:function(){var a=new THREE.Face4(this.a,this.b,this.c,this.d);a.normal.copy(this.normal);a.color.copy(this.color);a.centroid.copy(this.centroid);a.materialIndex=this.materialIndex;var b,c;b=0;for(c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();
return a}};THREE.UV=function(a,b){this.u=a||0;this.v=b||0};THREE.UV.prototype={constructor:THREE.UV,set:function(a,b){this.u=a;this.v=b;return this},copy:function(a){this.u=a.u;this.v=a.v;return this},lerpSelf:function(a,b){this.u+=(a.u-this.u)*b;this.v+=(a.v-this.v)*b;return this},clone:function(){return new THREE.UV(this.u,this.v)}};
THREE.Geometry=function(){THREE.GeometryLibrary.push(this);this.id=THREE.GeometryIdCount++;this.name="";this.vertices=[];this.colors=[];this.materials=[];this.faces=[];this.faceUvs=[[]];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.dynamic=!0;this.colorsNeedUpdate=this.tangentsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.elementsNeedUpdate=
this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){var b=new THREE.Matrix4;b.extractRotation(a);for(var c=0,d=this.vertices.length;c<d;c++)a.multiplyVector3(this.vertices[c]);c=0;for(d=this.faces.length;c<d;c++){var e=this.faces[c];b.multiplyVector3(e.normal);for(var f=0,g=e.vertexNormals.length;f<g;f++)b.multiplyVector3(e.vertexNormals[f]);a.multiplyVector3(e.centroid)}},computeCentroids:function(){var a,b,c;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.centroid.set(0,
0,0),c instanceof THREE.Face3?(c.centroid.addSelf(this.vertices[c.a]),c.centroid.addSelf(this.vertices[c.b]),c.centroid.addSelf(this.vertices[c.c]),c.centroid.divideScalar(3)):c instanceof THREE.Face4&&(c.centroid.addSelf(this.vertices[c.a]),c.centroid.addSelf(this.vertices[c.b]),c.centroid.addSelf(this.vertices[c.c]),c.centroid.addSelf(this.vertices[c.d]),c.centroid.divideScalar(4))},computeFaceNormals:function(){var a,b,c,d,e,f,g=new THREE.Vector3,h=new THREE.Vector3;a=0;for(b=this.faces.length;a<
b;a++)c=this.faces[a],d=this.vertices[c.a],e=this.vertices[c.b],f=this.vertices[c.c],g.sub(f,e),h.sub(d,e),g.crossSelf(h),g.isZero()||g.normalize(),c.normal.copy(g)},computeVertexNormals:function(){var a,b,c,d;if(void 0===this.__tmpVertices){d=this.__tmpVertices=Array(this.vertices.length);a=0;for(b=this.vertices.length;a<b;a++)d[a]=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c instanceof THREE.Face3?c.vertexNormals=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3]:
c instanceof THREE.Face4&&(c.vertexNormals=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3])}else{d=this.__tmpVertices;a=0;for(b=this.vertices.length;a<b;a++)d[a].set(0,0,0)}a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c instanceof THREE.Face3?(d[c.a].addSelf(c.normal),d[c.b].addSelf(c.normal),d[c.c].addSelf(c.normal)):c instanceof THREE.Face4&&(d[c.a].addSelf(c.normal),d[c.b].addSelf(c.normal),d[c.c].addSelf(c.normal),d[c.d].addSelf(c.normal));a=0;for(b=this.vertices.length;a<
b;a++)d[a].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c instanceof THREE.Face3?(c.vertexNormals[0].copy(d[c.a]),c.vertexNormals[1].copy(d[c.b]),c.vertexNormals[2].copy(d[c.c])):c instanceof THREE.Face4&&(c.vertexNormals[0].copy(d[c.a]),c.vertexNormals[1].copy(d[c.b]),c.vertexNormals[2].copy(d[c.c]),c.vertexNormals[3].copy(d[c.d]))},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++){e=this.faces[c];e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):
e.__originalFaceNormal=e.normal.clone();e.__originalVertexNormals||(e.__originalVertexNormals=[]);a=0;for(b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone()}var f=new THREE.Geometry;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];var g=this.morphNormals[a].faceNormals,
h=this.morphNormals[a].vertexNormals,i,j;c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],i=new THREE.Vector3,j=e instanceof THREE.Face3?{a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3}:{a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3,d:new THREE.Vector3},g.push(i),h.push(j)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],i=g.faceNormals[c],j=g.vertexNormals[c],
i.copy(e.normal),e instanceof THREE.Face3?(j.a.copy(e.vertexNormals[0]),j.b.copy(e.vertexNormals[1]),j.c.copy(e.vertexNormals[2])):(j.a.copy(e.vertexNormals[0]),j.b.copy(e.vertexNormals[1]),j.c.copy(e.vertexNormals[2]),j.d.copy(e.vertexNormals[3]))}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){function a(a,b,c,d,e,f,y){h=a.vertices[b];i=a.vertices[c];j=a.vertices[d];l=g[e];m=g[f];n=g[y];p=i.x-
h.x;o=j.x-h.x;q=i.y-h.y;r=j.y-h.y;t=i.z-h.z;B=j.z-h.z;u=m.u-l.u;s=n.u-l.u;z=m.v-l.v;A=n.v-l.v;v=1/(u*A-s*z);H.set((A*p-z*o)*v,(A*q-z*r)*v,(A*t-z*B)*v);J.set((u*o-s*p)*v,(u*r-s*q)*v,(u*B-s*t)*v);C[b].addSelf(H);C[c].addSelf(H);C[d].addSelf(H);G[b].addSelf(J);G[c].addSelf(J);G[d].addSelf(J)}var b,c,d,e,f,g,h,i,j,l,m,n,p,o,q,r,t,B,u,s,z,A,v,y,C=[],G=[],H=new THREE.Vector3,J=new THREE.Vector3,E=new THREE.Vector3,M=new THREE.Vector3,K=new THREE.Vector3;b=0;for(c=this.vertices.length;b<c;b++)C[b]=new THREE.Vector3,
G[b]=new THREE.Vector3;b=0;for(c=this.faces.length;b<c;b++)f=this.faces[b],g=this.faceVertexUvs[0][b],f instanceof THREE.Face3?a(this,f.a,f.b,f.c,0,1,2):f instanceof THREE.Face4&&(a(this,f.a,f.b,f.d,0,1,3),a(this,f.b,f.c,f.d,1,2,3));var F=["a","b","c","d"];b=0;for(c=this.faces.length;b<c;b++){f=this.faces[b];for(d=0;d<f.vertexNormals.length;d++)K.copy(f.vertexNormals[d]),e=f[F[d]],y=C[e],E.copy(y),E.subSelf(K.multiplyScalar(K.dot(y))).normalize(),M.cross(f.vertexNormals[d],y),e=M.dot(G[e]),e=0>e?
-1:1,f.vertexTangents[d]=new THREE.Vector4(E.x,E.y,E.z,e)}this.hasTangents=!0},computeBoundingBox:function(){this.boundingBox||(this.boundingBox={min:new THREE.Vector3,max:new THREE.Vector3});if(0<this.vertices.length){var a;a=this.vertices[0];this.boundingBox.min.copy(a);this.boundingBox.max.copy(a);for(var b=this.boundingBox.min,c=this.boundingBox.max,d=1,e=this.vertices.length;d<e;d++)(a=this.vertices[d],a.x<b.x?b.x=a.x:a.x>c.x&&(c.x=a.x),a.y<b.y?b.y=a.y:a.y>c.y&&(c.y=a.y),a.z<b.z)?b.z=a.z:a.z>
c.z&&(c.z=a.z)}else this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0)},computeBoundingSphere:function(){var a=0;null===this.boundingSphere&&(this.boundingSphere={radius:0});for(var b=0,c=this.vertices.length;b<c;b++){var d=this.vertices[b].lengthSq();d>a&&(a=d)}this.boundingSphere.radius=Math.sqrt(a)},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g,h,i;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=[Math.round(d.x*e),Math.round(d.y*e),Math.round(d.z*e)].join("_"),
void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];f=0;for(g=this.faces.length;f<g;f++)if(a=this.faces[f],a instanceof THREE.Face3)a.a=c[a.a],a.b=c[a.b],a.c=c[a.c];else if(a instanceof THREE.Face4){a.a=c[a.a];a.b=c[a.b];a.c=c[a.c];a.d=c[a.d];d=[a.a,a.b,a.c,a.d];for(e=3;0<e;e--)if(d.indexOf(a["abcd"[e]])!==e){d.splice(e,1);this.faces[f]=new THREE.Face3(d[0],d[1],d[2],a.normal,a.color,a.materialIndex);d=0;for(h=this.faceVertexUvs.length;d<h;d++)(i=this.faceVertexUvs[d][f])&&
i.splice(e,1);this.faces[f].vertexColors=a.vertexColors;break}}c=this.vertices.length-b.length;this.vertices=b;return c},clone:function(){},deallocate:function(){var a=THREE.GeometryLibrary.indexOf(this);-1!==a&&THREE.GeometryLibrary.splice(a,1)}};THREE.GeometryIdCount=0;THREE.GeometryLibrary=[];THREE.BufferGeometry=function(){this.id=THREE.GeometryCount++;this.attributes={};this.dynamic=!1;this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.morphTargets=[]};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,applyMatrix:function(a){var b,c;this.attributes.position&&(b=this.attributes.position.array);this.attributes.normal&&(c=this.attributes.normal.array);void 0!==b&&(a.multiplyVector3Array(b),this.verticesNeedUpdate=!0);void 0!==c&&(b=new THREE.Matrix4,b.extractRotation(a),b.multiplyVector3Array(c),this.normalsNeedUpdate=!0)},computeBoundingBox:function(){this.boundingBox||(this.boundingBox={min:new THREE.Vector3(Infinity,Infinity,Infinity),
max:new THREE.Vector3(-Infinity,-Infinity,-Infinity)});var a=this.attributes.position.array;if(a)for(var b=this.boundingBox,c,d,e,f=0,g=a.length;f<g;f+=3)(c=a[f],d=a[f+1],e=a[f+2],c<b.min.x?b.min.x=c:c>b.max.x&&(b.max.x=c),d<b.min.y?b.min.y=d:d>b.max.y&&(b.max.y=d),e<b.min.z)?b.min.z=e:e>b.max.z&&(b.max.z=e);if(void 0===a||0===a.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0)},computeBoundingSphere:function(){this.boundingSphere||(this.boundingSphere={radius:0});var a=this.attributes.position.array;
if(a){for(var b,c=0,d,e,f=0,g=a.length;f<g;f+=3)b=a[f],d=a[f+1],e=a[f+2],b=b*b+d*d+e*e,b>c&&(c=b);this.boundingSphere.radius=Math.sqrt(c)}},computeVertexNormals:function(){if(this.attributes.position&&this.attributes.index){var a,b,c,d;a=this.attributes.position.array.length;if(void 0===this.attributes.normal)this.attributes.normal={itemSize:3,array:new Float32Array(a),numItems:a};else{a=0;for(b=this.attributes.normal.array.length;a<b;a++)this.attributes.normal.array[a]=0}var e=this.offsets,f=this.attributes.index.array,
g=this.attributes.position.array,h=this.attributes.normal.array,i,j,l,m,n,p,o=new THREE.Vector3,q=new THREE.Vector3,r=new THREE.Vector3,t=new THREE.Vector3,B=new THREE.Vector3;c=0;for(d=e.length;c<d;++c){b=e[c].start;i=e[c].count;var u=e[c].index;a=b;for(b+=i;a<b;a+=3)i=u+f[a],j=u+f[a+1],l=u+f[a+2],m=g[3*i],n=g[3*i+1],p=g[3*i+2],o.set(m,n,p),m=g[3*j],n=g[3*j+1],p=g[3*j+2],q.set(m,n,p),m=g[3*l],n=g[3*l+1],p=g[3*l+2],r.set(m,n,p),t.sub(r,q),B.sub(o,q),t.crossSelf(B),h[3*i]+=t.x,h[3*i+1]+=t.y,h[3*i+
2]+=t.z,h[3*j]+=t.x,h[3*j+1]+=t.y,h[3*j+2]+=t.z,h[3*l]+=t.x,h[3*l+1]+=t.y,h[3*l+2]+=t.z}a=0;for(b=h.length;a<b;a+=3)m=h[a],n=h[a+1],p=h[a+2],c=1/Math.sqrt(m*m+n*n+p*p),h[a]*=c,h[a+1]*=c,h[a+2]*=c;this.normalsNeedUpdate=!0}},computeTangents:function(){function a(a){$.x=d[3*a];$.y=d[3*a+1];$.z=d[3*a+2];Y.copy($);ea=i[a];L.copy(ea);L.subSelf($.multiplyScalar($.dot(ea))).normalize();R.cross(Y,ea);Q=R.dot(j[a]);N=0>Q?-1:1;h[4*a]=L.x;h[4*a+1]=L.y;h[4*a+2]=L.z;h[4*a+3]=N}if(void 0===this.attributes.index||
void 0===this.attributes.position||void 0===this.attributes.normal||void 0===this.attributes.uv)console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var b=this.attributes.index.array,c=this.attributes.position.array,d=this.attributes.normal.array,e=this.attributes.uv.array,f=c.length/3;if(void 0===this.attributes.tangent){var g=4*f;this.attributes.tangent={itemSize:4,array:new Float32Array(g),numItems:g}}for(var h=this.attributes.tangent.array,
i=[],j=[],g=0;g<f;g++)i[g]=new THREE.Vector3,j[g]=new THREE.Vector3;var l,m,n,p,o,q,r,t,B,u,s,z,A,v,y,f=new THREE.Vector3,g=new THREE.Vector3,C,G,H,J,E,M,K,F=this.offsets;H=0;for(J=F.length;H<J;++H){G=F[H].start;E=F[H].count;var I=F[H].index;C=G;for(G+=E;C<G;C+=3)E=I+b[C],M=I+b[C+1],K=I+b[C+2],l=c[3*E],m=c[3*E+1],n=c[3*E+2],p=c[3*M],o=c[3*M+1],q=c[3*M+2],r=c[3*K],t=c[3*K+1],B=c[3*K+2],u=e[2*E],s=e[2*E+1],z=e[2*M],A=e[2*M+1],v=e[2*K],y=e[2*K+1],p-=l,l=r-l,o-=m,m=t-m,q-=n,n=B-n,z-=u,u=v-u,A-=s,s=y-
s,y=1/(z*s-u*A),f.set((s*p-A*l)*y,(s*o-A*m)*y,(s*q-A*n)*y),g.set((z*l-u*p)*y,(z*m-u*o)*y,(z*n-u*q)*y),i[E].addSelf(f),i[M].addSelf(f),i[K].addSelf(f),j[E].addSelf(g),j[M].addSelf(g),j[K].addSelf(g)}var L=new THREE.Vector3,R=new THREE.Vector3,$=new THREE.Vector3,Y=new THREE.Vector3,N,ea,Q;H=0;for(J=F.length;H<J;++H){G=F[H].start;E=F[H].count;I=F[H].index;C=G;for(G+=E;C<G;C+=3)E=I+b[C],M=I+b[C+1],K=I+b[C+2],a(E),a(M),a(K)}this.tangentsNeedUpdate=this.hasTangents=!0}}};
THREE.Spline=function(a){function b(a,b,c,d,e,f,g){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,i,j,l,m,n;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:
f+2;j=this.points[c[0]];l=this.points[c[1]];m=this.points[c[2]];n=this.points[c[3]];h=g*g;i=g*h;d.x=b(j.x,l.x,m.x,n.x,g,h,i);d.y=b(j.y,l.y,m.y,n.y,g,h,i);d.z=b(j.z,l.z,m.z,n.z,g,h,i);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,g=new THREE.Vector3,h=[],i=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),g.copy(d),i+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!=e&&(h[b]=i,e=b);h[h.length]=i;return{chunks:h,total:i}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],i=new THREE.Vector3,l=this.getLength();h.push(i.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=l.chunks[b]-l.chunks[b-1];g=Math.ceil(a*c/l.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+c*(1/g)*(f-e),d=this.getPoint(d),
h.push(i.copy(d).clone());h.push(i.copy(this.points[b]).clone())}this.points=h}};THREE.Camera=function(){THREE.Object3D.call(this);this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4;this.projectionMatrixInverse=new THREE.Matrix4};THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.lookAt=function(a){this.matrix.lookAt(this.position,a,this.up);!0===this.rotationAutoUpdate&&this.rotation.setEulerFromRotationMatrix(this.matrix,this.eulerOrder)};
THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:0.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){this.projectionMatrix.makeOrthographic(this.left,this.right,this.top,this.bottom,this.near,this.far)};
THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:0.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*Math.atan(b/(2*a))*(180/Math.PI);this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){if(this.fullWidth){var a=this.fullWidth/this.fullHeight,b=Math.tan(this.fov*Math.PI/360)*this.near,c=-b,d=a*c,a=Math.abs(a*b-d),c=Math.abs(b-c);this.projectionMatrix.makeFrustum(d+this.x*a/this.fullWidth,d+(this.x+this.width)*a/this.fullWidth,b-(this.y+this.height)*c/this.fullHeight,b-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(this.fov,this.aspect,this.near,this.far)};
THREE.Light=function(a){THREE.Object3D.call(this);this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.AmbientLight=function(a){THREE.Light.call(this,a)};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);
THREE.DirectionalLight=function(a,b,c){THREE.Light.call(this,a);this.position=new THREE.Vector3(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowCascade=
!1;this.shadowCascadeOffset=new THREE.Vector3(0,0,-1E3);this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,0.99,0.998];this.shadowCascadeFarZ=[0.99,0.998,1];this.shadowCascadeArray=[];this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);
THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.groundColor=new THREE.Color(b);this.position=new THREE.Vector3(0,100,0);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight=function(a,b,c){THREE.Light.call(this,a);this.position=new THREE.Vector3(0,0,0);this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);
THREE.SpotLight=function(a,b,c,d,e){THREE.Light.call(this,a);this.position=new THREE.Vector3(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/2;this.exponent=void 0!==e?e:10;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowMatrix=this.shadowCamera=
this.shadowMapSize=this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:"anonymous",addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var b="Loaded ",b=a.total?b+((100*a.loaded/
a.total).toFixed(0)+"%"):b+((a.loaded/1E3).toFixed(2)+" KB");this.statusDomElement.innerHTML=b},extractUrlBase:function(a){a=a.split("/");a.pop();return(1>a.length?".":a.join("/"))+"/"},initMaterials:function(a,b,c){a.materials=[];for(var d=0;d<b.length;++d)a.materials[d]=THREE.Loader.prototype.createMaterial(b[d],c)},hasNormals:function(a){var b,c,d=a.materials.length;for(c=0;c<d;c++)if(b=a.materials[c],b instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(a,b){function c(a){a=
Math.log(a)/Math.LN2;return Math.floor(a)==a}function d(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function e(a,e,f,h,i,j,r){var t=f.toLowerCase().endsWith(".dds"),B=b+"/"+f;if(t){var u=THREE.ImageUtils.loadCompressedTexture(B);a[e]=u}else u=document.createElement("canvas"),a[e]=new THREE.Texture(u);a[e].sourceFile=f;if(h&&(a[e].repeat.set(h[0],h[1]),1!==h[0]&&(a[e].wrapS=THREE.RepeatWrapping),1!==h[1]))a[e].wrapT=THREE.RepeatWrapping;i&&a[e].offset.set(i[0],i[1]);if(j&&(f={repeat:THREE.RepeatWrapping,
mirror:THREE.MirroredRepeatWrapping},void 0!==f[j[0]]&&(a[e].wrapS=f[j[0]]),void 0!==f[j[1]]))a[e].wrapT=f[j[1]];r&&(a[e].anisotropy=r);if(!t){var s=a[e],a=new Image;a.onload=function(){if(!c(this.width)||!c(this.height)){var a=d(this.width),b=d(this.height);s.image.width=a;s.image.height=b;s.image.getContext("2d").drawImage(this,0,0,a,b)}else s.image=this;s.needsUpdate=true};a.crossOrigin=g.crossOrigin;a.src=B}}function f(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}var g=this,h="MeshLambertMaterial",
i={color:15658734,opacity:1,map:null,lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(a.shading){var j=a.shading.toLowerCase();"phong"===j?h="MeshPhongMaterial":"basic"===j&&(h="MeshBasicMaterial")}void 0!==a.blending&&void 0!==THREE[a.blending]&&(i.blending=THREE[a.blending]);if(void 0!==a.transparent||1>a.opacity)i.transparent=a.transparent;void 0!==a.depthTest&&(i.depthTest=a.depthTest);void 0!==a.depthWrite&&(i.depthWrite=a.depthWrite);void 0!==a.visible&&(i.visible=a.visible);void 0!==
a.flipSided&&(i.side=THREE.BackSide);void 0!==a.doubleSided&&(i.side=THREE.DoubleSide);void 0!==a.wireframe&&(i.wireframe=a.wireframe);void 0!==a.vertexColors&&("face"===a.vertexColors?i.vertexColors=THREE.FaceColors:a.vertexColors&&(i.vertexColors=THREE.VertexColors));a.colorDiffuse?i.color=f(a.colorDiffuse):a.DbgColor&&(i.color=a.DbgColor);a.colorSpecular&&(i.specular=f(a.colorSpecular));a.colorAmbient&&(i.ambient=f(a.colorAmbient));a.transparency&&(i.opacity=a.transparency);a.specularCoef&&(i.shininess=
a.specularCoef);a.mapDiffuse&&b&&e(i,"map",a.mapDiffuse,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,a.mapDiffuseAnisotropy);a.mapLight&&b&&e(i,"lightMap",a.mapLight,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);a.mapBump&&b&&e(i,"bumpMap",a.mapBump,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);a.mapNormal&&b&&e(i,"normalMap",a.mapNormal,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);a.mapSpecular&&b&&e(i,"specularMap",
a.mapSpecular,a.mapSpecularRepeat,a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);a.mapBumpScale&&(i.bumpScale=a.mapBumpScale);a.mapNormal?(h=THREE.ShaderUtils.lib.normal,j=THREE.UniformsUtils.clone(h.uniforms),j.tNormal.value=i.normalMap,a.mapNormalFactor&&j.uNormalScale.value.set(a.mapNormalFactor,a.mapNormalFactor),i.map&&(j.tDiffuse.value=i.map,j.enableDiffuse.value=!0),i.specularMap&&(j.tSpecular.value=i.specularMap,j.enableSpecular.value=!0),i.lightMap&&(j.tAO.value=i.lightMap,
j.enableAO.value=!0),j.uDiffuseColor.value.setHex(i.color),j.uSpecularColor.value.setHex(i.specular),j.uAmbientColor.value.setHex(i.ambient),j.uShininess.value=i.shininess,void 0!==i.opacity&&(j.uOpacity.value=i.opacity),i=new THREE.ShaderMaterial({fragmentShader:h.fragmentShader,vertexShader:h.vertexShader,uniforms:j,lights:!0,fog:!0})):i=new THREE[h](i);void 0!==a.DbgName&&(i.name=a.DbgName);return i}};THREE.BinaryLoader=function(a){THREE.Loader.call(this,a)};THREE.BinaryLoader.prototype=Object.create(THREE.Loader.prototype);
THREE.BinaryLoader.prototype.load=function(a,b,c,d){var c=c?c:this.extractUrlBase(a),d=d?d:this.extractUrlBase(a),e=this.showProgress?THREE.Loader.prototype.updateProgress:null;this.onLoadStart();this.loadAjaxJSON(this,a,b,c,d,e)};
THREE.BinaryLoader.prototype.loadAjaxJSON=function(a,b,c,d,e,f){var g=new XMLHttpRequest;g.onreadystatechange=function(){if(4==g.readyState)if(200==g.status||0==g.status){var h=JSON.parse(g.responseText);a.loadAjaxBuffers(h,c,e,d,f)}else console.error("THREE.BinaryLoader: Couldn't load ["+b+"] ["+g.status+"]")};g.open("GET",b,!0);g.send(null)};
THREE.BinaryLoader.prototype.loadAjaxBuffers=function(a,b,c,d,e){var f=new XMLHttpRequest,g=c+"/"+a.buffers,h=0;f.onreadystatechange=function(){if(4==f.readyState)if(200==f.status||0==f.status){var c=f.response;void 0===c&&(c=(new Uint8Array(f.responseBody)).buffer);THREE.BinaryLoader.prototype.createBinModel(c,b,d,a.materials)}else console.error("THREE.BinaryLoader: Couldn't load ["+g+"] ["+f.status+"]");else 3==f.readyState?e&&(0==h&&(h=f.getResponseHeader("Content-Length")),e({total:h,loaded:f.responseText.length})):
2==f.readyState&&(h=f.getResponseHeader("Content-Length"))};f.open("GET",g,!0);f.responseType="arraybuffer";f.send(null)};
THREE.BinaryLoader.prototype.createBinModel=function(a,b,c,d){var e=function(b){var c,e,i,j,l,m,n,p,o,q,r,t,B,u,s;function z(a){return a%4?4-a%4:0}function A(a,b){return(new Uint8Array(a,b,1))[0]}function v(a,b){return(new Uint32Array(a,b,1))[0]}function y(b,c){var d,e,f,g,h,i,j,l,m=new Uint32Array(a,c,3*b);for(d=0;d<b;d++){e=m[3*d];f=m[3*d+1];g=m[3*d+2];h=I[2*e];e=I[2*e+1];i=I[2*f];j=I[2*f+1];f=I[2*g];l=I[2*g+1];g=M.faceVertexUvs[0];var n=[];n.push(new THREE.UV(h,e));n.push(new THREE.UV(i,j));n.push(new THREE.UV(f,
l));g.push(n)}}function C(b,c){var d,e,f,g,h,i,j,l,m,n,o=new Uint32Array(a,c,4*b);for(d=0;d<b;d++){e=o[4*d];f=o[4*d+1];g=o[4*d+2];h=o[4*d+3];i=I[2*e];e=I[2*e+1];j=I[2*f];m=I[2*f+1];l=I[2*g];n=I[2*g+1];g=I[2*h];f=I[2*h+1];h=M.faceVertexUvs[0];var p=[];p.push(new THREE.UV(i,e));p.push(new THREE.UV(j,m));p.push(new THREE.UV(l,n));p.push(new THREE.UV(g,f));h.push(p)}}function G(b,c,d){for(var e,f,g,h,c=new Uint32Array(a,c,3*b),i=new Uint16Array(a,d,b),d=0;d<b;d++)e=c[3*d],f=c[3*d+1],g=c[3*d+2],h=i[d],
M.faces.push(new THREE.Face3(e,f,g,null,null,h))}function H(b,c,d){for(var e,f,g,h,i,c=new Uint32Array(a,c,4*b),j=new Uint16Array(a,d,b),d=0;d<b;d++)e=c[4*d],f=c[4*d+1],g=c[4*d+2],h=c[4*d+3],i=j[d],M.faces.push(new THREE.Face4(e,f,g,h,null,null,i))}function J(b,c,d,e){for(var f,g,h,i,j,l,m,c=new Uint32Array(a,c,3*b),d=new Uint32Array(a,d,3*b),n=new Uint16Array(a,e,b),e=0;e<b;e++){f=c[3*e];g=c[3*e+1];h=c[3*e+2];j=d[3*e];l=d[3*e+1];m=d[3*e+2];i=n[e];var o=F[3*l],p=F[3*l+1];l=F[3*l+2];var q=F[3*m],r=
F[3*m+1];m=F[3*m+2];M.faces.push(new THREE.Face3(f,g,h,[new THREE.Vector3(F[3*j],F[3*j+1],F[3*j+2]),new THREE.Vector3(o,p,l),new THREE.Vector3(q,r,m)],null,i))}}function E(b,c,d,e){for(var f,g,h,i,j,l,m,n,o,c=new Uint32Array(a,c,4*b),d=new Uint32Array(a,d,4*b),p=new Uint16Array(a,e,b),e=0;e<b;e++){f=c[4*e];g=c[4*e+1];h=c[4*e+2];i=c[4*e+3];l=d[4*e];m=d[4*e+1];n=d[4*e+2];o=d[4*e+3];j=p[e];var q=F[3*m],r=F[3*m+1];m=F[3*m+2];var s=F[3*n],t=F[3*n+1];n=F[3*n+2];var u=F[3*o],v=F[3*o+1];o=F[3*o+2];M.faces.push(new THREE.Face4(f,
g,h,i,[new THREE.Vector3(F[3*l],F[3*l+1],F[3*l+2]),new THREE.Vector3(q,r,m),new THREE.Vector3(s,t,n),new THREE.Vector3(u,v,o)],null,j))}}var M=this,K=0,F=[],I=[],L,R,$;THREE.Geometry.call(this);THREE.Loader.prototype.initMaterials(M,d,b);s=a;R=K;b=new Uint8Array(s,R,12);q="";for(B=0;12>B;B++)q+=String.fromCharCode(b[R+B]);c=A(s,R+12);A(s,R+13);A(s,R+14);A(s,R+15);e=A(s,R+16);i=A(s,R+17);j=A(s,R+18);l=A(s,R+19);m=v(s,R+20);n=v(s,R+20+4);p=v(s,R+20+8);o=v(s,R+20+12);q=v(s,R+20+16);r=v(s,R+20+20);t=
v(s,R+20+24);B=v(s,R+20+28);b=v(s,R+20+32);u=v(s,R+20+36);s=v(s,R+20+40);K+=c;R=3*e+l;$=4*e+l;L=o*R;c=q*(R+3*i);e=r*(R+3*j);l=t*(R+3*i+3*j);R=B*$;i=b*($+4*i);j=u*($+4*j);$=K;var K=new Float32Array(a,K,3*m),Y,N,ea,Q;for(Y=0;Y<m;Y++)N=K[3*Y],ea=K[3*Y+1],Q=K[3*Y+2],M.vertices.push(new THREE.Vector3(N,ea,Q));m=K=$+3*m*Float32Array.BYTES_PER_ELEMENT;if(n){K=new Int8Array(a,K,3*n);for($=0;$<n;$++)Y=K[3*$],N=K[3*$+1],ea=K[3*$+2],F.push(Y/127,N/127,ea/127)}K=m+3*n*Int8Array.BYTES_PER_ELEMENT;n=K+=z(3*n);
if(p){K=new Float32Array(a,K,2*p);for(m=0;m<p;m++)$=K[2*m],Y=K[2*m+1],I.push($,Y)}p=K=n+2*p*Float32Array.BYTES_PER_ELEMENT;L=p+L+z(2*o);n=L+c+z(2*q);c=n+e+z(2*r);e=c+l+z(2*t);R=e+R+z(2*B);l=R+i+z(2*b);i=l+j+z(2*u);r&&(j=n+3*r*Uint32Array.BYTES_PER_ELEMENT,G(r,n,j+3*r*Uint32Array.BYTES_PER_ELEMENT),y(r,j));t&&(r=c+3*t*Uint32Array.BYTES_PER_ELEMENT,j=r+3*t*Uint32Array.BYTES_PER_ELEMENT,J(t,c,r,j+3*t*Uint32Array.BYTES_PER_ELEMENT),y(t,j));u&&(t=l+4*u*Uint32Array.BYTES_PER_ELEMENT,H(u,l,t+4*u*Uint32Array.BYTES_PER_ELEMENT),
C(u,t));s&&(u=i+4*s*Uint32Array.BYTES_PER_ELEMENT,t=u+4*s*Uint32Array.BYTES_PER_ELEMENT,E(s,i,u,t+4*s*Uint32Array.BYTES_PER_ELEMENT),C(s,t));o&&G(o,p,p+3*o*Uint32Array.BYTES_PER_ELEMENT);q&&(o=L+3*q*Uint32Array.BYTES_PER_ELEMENT,J(q,L,o,o+3*q*Uint32Array.BYTES_PER_ELEMENT));B&&H(B,e,e+4*B*Uint32Array.BYTES_PER_ELEMENT);b&&(q=R+4*b*Uint32Array.BYTES_PER_ELEMENT,E(b,R,q,q+4*b*Uint32Array.BYTES_PER_ELEMENT));this.computeCentroids();this.computeFaceNormals();THREE.Loader.prototype.hasNormals(this)&&this.computeTangents()};
e.prototype=Object.create(THREE.Geometry.prototype);b(new e(c))};THREE.ImageLoader=function(){THREE.EventTarget.call(this);this.crossOrigin=null};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b){var c=this;void 0===b&&(b=new Image);b.addEventListener("load",function(){c.dispatchEvent({type:"load",content:b})},!1);b.addEventListener("error",function(){c.dispatchEvent({type:"error",message:"Couldn't load URL ["+a+"]"})},!1);c.crossOrigin&&(b.crossOrigin=c.crossOrigin);b.src=a}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a)};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);
THREE.JSONLoader.prototype.load=function(a,b,c){c=c?c:this.extractUrlBase(a);this.onLoadStart();this.loadAjaxJSON(this,a,b,c)};
THREE.JSONLoader.prototype.loadAjaxJSON=function(a,b,c,d,e){var f=new XMLHttpRequest,g=0;f.onreadystatechange=function(){if(f.readyState===f.DONE)if(200===f.status||0===f.status){if(f.responseText){var h=JSON.parse(f.responseText);a.createModel(h,c,d)}else console.warn("THREE.JSONLoader: ["+b+"] seems to be unreachable or file there is empty");a.onLoadComplete()}else console.error("THREE.JSONLoader: Couldn't load ["+b+"] ["+f.status+"]");else f.readyState===f.LOADING?e&&(0===g&&(g=f.getResponseHeader("Content-Length")),
e({total:g,loaded:f.responseText.length})):f.readyState===f.HEADERS_RECEIVED&&(g=f.getResponseHeader("Content-Length"))};f.open("GET",b,!0);f.send(null)};
THREE.JSONLoader.prototype.createModel=function(a,b,c){var d=new THREE.Geometry,e=void 0!==a.scale?1/a.scale:1;this.initMaterials(d,a.materials,c);var f,g,h,i,j,l,m,n,p,o,q,r,t,B,u=a.faces;p=a.vertices;var s=a.normals,z=a.colors,A=0;for(f=0;f<a.uvs.length;f++)a.uvs[f].length&&A++;for(f=0;f<A;f++)d.faceUvs[f]=[],d.faceVertexUvs[f]=[];c=0;for(i=p.length;c<i;)j=new THREE.Vector3,j.x=p[c++]*e,j.y=p[c++]*e,j.z=p[c++]*e,d.vertices.push(j);c=0;for(i=u.length;c<i;){p=u[c++];j=p&1;h=p&2;f=p&4;g=p&8;m=p&16;
l=p&32;o=p&64;p&=128;j?(q=new THREE.Face4,q.a=u[c++],q.b=u[c++],q.c=u[c++],q.d=u[c++],j=4):(q=new THREE.Face3,q.a=u[c++],q.b=u[c++],q.c=u[c++],j=3);h&&(h=u[c++],q.materialIndex=h);h=d.faces.length;if(f)for(f=0;f<A;f++)r=a.uvs[f],n=u[c++],B=r[2*n],n=r[2*n+1],d.faceUvs[f][h]=new THREE.UV(B,n);if(g)for(f=0;f<A;f++){r=a.uvs[f];t=[];for(g=0;g<j;g++)n=u[c++],B=r[2*n],n=r[2*n+1],t[g]=new THREE.UV(B,n);d.faceVertexUvs[f][h]=t}m&&(m=3*u[c++],g=new THREE.Vector3,g.x=s[m++],g.y=s[m++],g.z=s[m],q.normal=g);if(l)for(f=
0;f<j;f++)m=3*u[c++],g=new THREE.Vector3,g.x=s[m++],g.y=s[m++],g.z=s[m],q.vertexNormals.push(g);o&&(l=u[c++],l=new THREE.Color(z[l]),q.color=l);if(p)for(f=0;f<j;f++)l=u[c++],l=new THREE.Color(z[l]),q.vertexColors.push(l);d.faces.push(q)}if(a.skinWeights){c=0;for(i=a.skinWeights.length;c<i;c+=2)u=a.skinWeights[c],s=a.skinWeights[c+1],d.skinWeights.push(new THREE.Vector4(u,s,0,0))}if(a.skinIndices){c=0;for(i=a.skinIndices.length;c<i;c+=2)u=a.skinIndices[c],s=a.skinIndices[c+1],d.skinIndices.push(new THREE.Vector4(u,
s,0,0))}d.bones=a.bones;d.animation=a.animation;if(void 0!==a.morphTargets){c=0;for(i=a.morphTargets.length;c<i;c++){d.morphTargets[c]={};d.morphTargets[c].name=a.morphTargets[c].name;d.morphTargets[c].vertices=[];z=d.morphTargets[c].vertices;A=a.morphTargets[c].vertices;u=0;for(s=A.length;u<s;u+=3)p=new THREE.Vector3,p.x=A[u]*e,p.y=A[u+1]*e,p.z=A[u+2]*e,z.push(p)}}if(void 0!==a.morphColors){c=0;for(i=a.morphColors.length;c<i;c++){d.morphColors[c]={};d.morphColors[c].name=a.morphColors[c].name;d.morphColors[c].colors=
[];s=d.morphColors[c].colors;z=a.morphColors[c].colors;e=0;for(u=z.length;e<u;e+=3)A=new THREE.Color(16755200),A.setRGB(z[e],z[e+1],z[e+2]),s.push(A)}}d.computeCentroids();d.computeFaceNormals();this.hasNormals(d)&&d.computeTangents();b(d)};THREE.LoadingMonitor=function(){THREE.EventTarget.call(this);var a=this,b=0,c=0,d=function(){b++;a.dispatchEvent({type:"progress",loaded:b,total:c});b===c&&a.dispatchEvent({type:"load"})};this.add=function(a){c++;a.addEventListener("load",d,!1)}};
THREE.GeometryLoader=function(){THREE.EventTarget.call(this);this.path=this.crossOrigin=null};
THREE.GeometryLoader.prototype={constructor:THREE.GeometryLoader,load:function(a){var b=this,c=null;if(null===b.path){var d=a.split("/");d.pop();b.path=1>d.length?".":d.join("/")}d=new XMLHttpRequest;d.addEventListener("load",function(d){d.target.responseText?c=b.parse(JSON.parse(d.target.responseText),e):b.dispatchEvent({type:"error",message:"Invalid file ["+a+"]"})},!1);d.addEventListener("error",function(){b.dispatchEvent({type:"error",message:"Couldn't load URL ["+a+"]"})},!1);d.open("GET",a,
!0);d.send(null);var e=new THREE.LoadingMonitor;e.addEventListener("load",function(){b.dispatchEvent({type:"load",content:c})});e.add(d)},parse:function(a,b){var c=this,d=new THREE.Geometry,e=void 0!==a.scale?1/a.scale:1;if(a.materials){d.materials=[];for(var f=0;f<a.materials.length;++f){var g=a.materials[f],h=function(a){a=Math.log(a)/Math.LN2;return Math.floor(a)==a},i=function(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))},j=function(a,d,e,f,g,l){a[d]=new THREE.Texture;a[d].sourceFile=
e;if(f&&(a[d].repeat.set(f[0],f[1]),1!==f[0]&&(a[d].wrapS=THREE.RepeatWrapping),1!==f[1]))a[d].wrapT=THREE.RepeatWrapping;g&&a[d].offset.set(g[0],g[1]);if(l&&(f={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==f[l[0]]&&(a[d].wrapS=f[l[0]]),void 0!==f[l[1]]))a[d].wrapT=f[l[1]];var j=a[d],a=new THREE.ImageLoader;a.addEventListener("load",function(a){a=a.content;if(!h(a.width)||!h(a.height)){var b=i(a.width),c=i(a.height);j.image=document.createElement("canvas");j.image.width=
b;j.image.height=c;j.image.getContext("2d").drawImage(a,0,0,b,c)}else j.image=a;j.needsUpdate=!0});a.crossOrigin=c.crossOrigin;a.load(c.path+"/"+e);b&&b.add(a)},l=function(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]},m="MeshLambertMaterial",n={color:15658734,opacity:1,map:null,lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(g.shading){var p=g.shading.toLowerCase();"phong"===p?m="MeshPhongMaterial":"basic"===p&&(m="MeshBasicMaterial")}void 0!==g.blending&&void 0!==THREE[g.blending]&&
(n.blending=THREE[g.blending]);if(void 0!==g.transparent||1>g.opacity)n.transparent=g.transparent;void 0!==g.depthTest&&(n.depthTest=g.depthTest);void 0!==g.depthWrite&&(n.depthWrite=g.depthWrite);void 0!==g.vertexColors&&("face"==g.vertexColors?n.vertexColors=THREE.FaceColors:g.vertexColors&&(n.vertexColors=THREE.VertexColors));g.colorDiffuse?n.color=l(g.colorDiffuse):g.DbgColor&&(n.color=g.DbgColor);g.colorSpecular&&(n.specular=l(g.colorSpecular));g.colorAmbient&&(n.ambient=l(g.colorAmbient));g.transparency&&
(n.opacity=g.transparency);g.specularCoef&&(n.shininess=g.specularCoef);void 0!==g.visible&&(n.visible=g.visible);void 0!==g.flipSided&&(n.side=THREE.BackSide);void 0!==g.doubleSided&&(n.side=THREE.DoubleSide);void 0!==g.wireframe&&(n.wireframe=g.wireframe);g.mapDiffuse&&j(n,"map",g.mapDiffuse,g.mapDiffuseRepeat,g.mapDiffuseOffset,g.mapDiffuseWrap);g.mapLight&&j(n,"lightMap",g.mapLight,g.mapLightRepeat,g.mapLightOffset,g.mapLightWrap);g.mapBump&&j(n,"bumpMap",g.mapBump,g.mapBumpRepeat,g.mapBumpOffset,
g.mapBumpWrap);g.mapNormal&&j(n,"normalMap",g.mapNormal,g.mapNormalRepeat,g.mapNormalOffset,g.mapNormalWrap);g.mapSpecular&&j(n,"specularMap",g.mapSpecular,g.mapSpecularRepeat,g.mapSpecularOffset,g.mapSpecularWrap);g.mapNormal?(j=THREE.ShaderUtils.lib.normal,l=THREE.UniformsUtils.clone(j.uniforms),l.tNormal.value=n.normalMap,g.mapNormalFactor&&l.uNormalScale.value.set(g.mapNormalFactor,g.mapNormalFactor),n.map&&(l.tDiffuse.value=n.map,l.enableDiffuse.value=!0),n.specularMap&&(l.tSpecular.value=n.specularMap,
l.enableSpecular.value=!0),n.lightMap&&(l.tAO.value=n.lightMap,l.enableAO.value=!0),l.uDiffuseColor.value.setHex(n.color),l.uSpecularColor.value.setHex(n.specular),l.uAmbientColor.value.setHex(n.ambient),l.uShininess.value=n.shininess,void 0!==n.opacity&&(l.uOpacity.value=n.opacity),n=new THREE.ShaderMaterial({fragmentShader:j.fragmentShader,vertexShader:j.vertexShader,uniforms:l,lights:!0,fog:!0})):n=new THREE[m](n);void 0!==g.DbgName&&(n.name=g.DbgName);d.materials[f]=n}}var g=a.faces,o=a.vertices,
n=a.normals,j=a.colors,l=0;if(a.uvs)for(f=0;f<a.uvs.length;f++)a.uvs[f].length&&l++;for(f=0;f<l;f++)d.faceUvs[f]=[],d.faceVertexUvs[f]=[];m=0;for(p=o.length;m<p;){var q=new THREE.Vector3;q.x=o[m++]*e;q.y=o[m++]*e;q.z=o[m++]*e;d.vertices.push(q)}m=0;for(p=g.length;m<p;){var r=g[m++],t=r&2,f=r&4,B=r&8,u=r&16,o=r&32,s=r&64,q=r&128;if(r&1){r=new THREE.Face4;r.a=g[m++];r.b=g[m++];r.c=g[m++];r.d=g[m++];var z=4}else r=new THREE.Face3,r.a=g[m++],r.b=g[m++],r.c=g[m++],z=3;t&&(t=g[m++],r.materialIndex=t);var A=
d.faces.length;if(f)for(f=0;f<l;f++){var v=a.uvs[f],t=g[m++],y=v[2*t],t=v[2*t+1];d.faceUvs[f][A]=new THREE.UV(y,t)}if(B)for(f=0;f<l;f++){for(var v=a.uvs[f],B=[],C=0;C<z;C++)t=g[m++],y=v[2*t],t=v[2*t+1],B[C]=new THREE.UV(y,t);d.faceVertexUvs[f][A]=B}u&&(u=3*g[m++],t=new THREE.Vector3,t.x=n[u++],t.y=n[u++],t.z=n[u],r.normal=t);if(o)for(f=0;f<z;f++)u=3*g[m++],t=new THREE.Vector3,t.x=n[u++],t.y=n[u++],t.z=n[u],r.vertexNormals.push(t);s&&(o=g[m++],r.color=new THREE.Color(j[o]));if(q)for(f=0;f<z;f++)o=
g[m++],r.vertexColors.push(new THREE.Color(j[o]));d.faces.push(r)}if(a.skinWeights){f=0;for(g=a.skinWeights.length;f<g;f+=2)d.skinWeights.push(new THREE.Vector4(a.skinWeights[f],a.skinWeights[f+1],0,0))}if(a.skinIndices){f=0;for(g=a.skinIndices.length;f<g;f+=2)n=0,d.skinIndices.push(new THREE.Vector4(a.skinIndices[f],a.skinIndices[f+1],n,0))}d.bones=a.bones;d.animation=a.animation;if(a.morphTargets){f=0;for(g=a.morphTargets.length;f<g;f++){d.morphTargets[f]={};d.morphTargets[f].name=a.morphTargets[f].name;
d.morphTargets[f].vertices=[];n=d.morphTargets[f].vertices;j=a.morphTargets[f].vertices;t=0;for(l=j.length;t<l;t+=3)q=new THREE.Vector3,q.x=j[t]*e,q.y=j[t+1]*e,q.z=j[t+2]*e,n.push(q)}}if(a.morphColors){f=0;for(g=a.morphColors.length;f<g;f++){d.morphColors[f]={};d.morphColors[f].name=a.morphColors[f].name;d.morphColors[f].colors=[];e=d.morphColors[f].colors;j=a.morphColors[f].colors;n=0;for(l=j.length;n<l;n+=3)m=new THREE.Color(16755200),m.setRGB(j[n],j[n+1],j[n+2]),e.push(m)}}d.computeCentroids();
d.computeFaceNormals();return d}};THREE.SceneLoader=function(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){};this.callbackSync=function(){};this.callbackProgress=function(){};this.geometryHandlerMap={};this.addGeometryHandler("ascii",THREE.JSONLoader);this.addGeometryHandler("binary",THREE.BinaryLoader)};THREE.SceneLoader.prototype.constructor=THREE.SceneLoader;
THREE.SceneLoader.prototype.load=function(a,b){var c=this,d=new XMLHttpRequest;d.onreadystatechange=function(){if(4===d.readyState)if(200===d.status||0===d.status){var e=JSON.parse(d.responseText);c.parse(e,b,a)}else console.error("THREE.SceneLoader: Couldn't load ["+a+"] ["+d.status+"]")};d.open("GET",a,!0);d.send(null)};THREE.SceneLoader.prototype.addGeometryHandler=function(a,b){this.geometryHandlerMap[a]={loaderClass:b}};
THREE.SceneLoader.prototype.parse=function(a,b,c){function d(a,b){return"relativeToHTML"==b?a:j+"/"+a}function e(a,b){for(var c in b)if(void 0===I.objects[c]){var d=b[c],f=null;if(void 0!==d.geometry){if(y=I.geometries[d.geometry])f=!1,C=I.materials[d.materials[0]],(f=C instanceof THREE.ShaderMaterial)&&y.computeTangents(),B=d.position,u=d.rotation,s=d.quaternion,z=d.scale,r=d.matrix,s=0,0===d.materials.length&&(C=new THREE.MeshFaceMaterial),1<d.materials.length&&(C=new THREE.MeshFaceMaterial),d.morph?
(f=new THREE.MorphAnimMesh(y,C),void 0!==d.duration&&(f.duration=d.duration),void 0!==d.time&&(f.time=d.time),void 0!==d.mirroredLoop&&(f.mirroredLoop=d.mirroredLoop),C.morphNormals&&y.computeMorphNormals()):f=new THREE.Mesh(y,C),f.name=c,r?(f.matrixAutoUpdate=!1,f.matrix.set(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15])):(f.position.set(B[0],B[1],B[2]),s?(f.quaternion.set(s[0],s[1],s[2],s[3]),f.useQuaternion=!0):f.rotation.set(u[0],u[1],u[2]),f.scale.set(z[0],
z[1],z[2])),f.visible=d.visible,f.castShadow=d.castShadow,f.receiveShadow=d.receiveShadow,a.add(f),I.objects[c]=f}else B=d.position,u=d.rotation,s=d.quaternion,z=d.scale,s=0,f=new THREE.Object3D,f.name=c,f.position.set(B[0],B[1],B[2]),s?(f.quaternion.set(s[0],s[1],s[2],s[3]),f.useQuaternion=!0):f.rotation.set(u[0],u[1],u[2]),f.scale.set(z[0],z[1],z[2]),f.visible=void 0!==d.visible?d.visible:!1,a.add(f),I.objects[c]=f,I.empties[c]=f;if(f){if(void 0!==d.properties)for(var g in d.properties)f.properties[g]=
d.properties[g];void 0!==d.children&&e(f,d.children)}}}function f(a){return function(b){I.geometries[a]=b;e(I.scene,L.objects);E-=1;i.onLoadComplete();h()}}function g(a){return function(b){I.geometries[a]=b}}function h(){i.callbackProgress({totalModels:K,totalTextures:F,loadedModels:K-E,loadedTextures:F-M},I);i.onLoadProgress();0===E&&0===M&&b(I)}var i=this,j=THREE.Loader.prototype.extractUrlBase(c),l,m,n,p,o,q,r,t,B,u,s,z,A,v,y,C,G,H,J,E,M,K,F,I,L=a;for(A in this.geometryHandlerMap)this.geometryHandlerMap[A].loaderObject=
new this.geometryHandlerMap[A].loaderClass;M=E=0;I={scene:new THREE.Scene,geometries:{},materials:{},textures:{},objects:{},cameras:{},lights:{},fogs:{},empties:{}};if(L.transform&&(a=L.transform.position,c=L.transform.rotation,A=L.transform.scale,a&&I.scene.position.set(a[0],a[1],a[2]),c&&I.scene.rotation.set(c[0],c[1],c[2]),A&&I.scene.scale.set(A[0],A[1],A[2]),a||c||A))I.scene.updateMatrix(),I.scene.updateMatrixWorld();a=function(a){return function(){M-=a;h();i.onLoadComplete()}};for(p in L.cameras)A=
L.cameras[p],"perspective"===A.type?G=new THREE.PerspectiveCamera(A.fov,A.aspect,A.near,A.far):"ortho"===A.type&&(G=new THREE.OrthographicCamera(A.left,A.right,A.top,A.bottom,A.near,A.far)),B=A.position,c=A.target,A=A.up,G.position.set(B[0],B[1],B[2]),G.target=new THREE.Vector3(c[0],c[1],c[2]),A&&G.up.set(A[0],A[1],A[2]),I.cameras[p]=G;for(n in L.lights)c=L.lights[n],p=void 0!==c.color?c.color:16777215,G=void 0!==c.intensity?c.intensity:1,"directional"===c.type?(B=c.direction,t=new THREE.DirectionalLight(p,
G),t.position.set(B[0],B[1],B[2]),t.position.normalize()):"point"===c.type?(B=c.position,t=c.distance,t=new THREE.PointLight(p,G,t),t.position.set(B[0],B[1],B[2])):"ambient"===c.type&&(t=new THREE.AmbientLight(p)),I.scene.add(t),I.lights[n]=t;for(o in L.fogs)n=L.fogs[o],"linear"===n.type?H=new THREE.Fog(0,n.near,n.far):"exp2"===n.type&&(H=new THREE.FogExp2(0,n.density)),A=n.color,H.color.setRGB(A[0],A[1],A[2]),I.fogs[o]=H;I.cameras&&L.defaults.camera&&(I.currentCamera=I.cameras[L.defaults.camera]);
I.fogs&&L.defaults.fog&&(I.scene.fog=I.fogs[L.defaults.fog]);A=L.defaults.bgcolor;I.bgColor=new THREE.Color;I.bgColor.setRGB(A[0],A[1],A[2]);I.bgColorAlpha=L.defaults.bgalpha;for(l in L.geometries)o=L.geometries[l],o.type in this.geometryHandlerMap&&(E+=1,i.onLoadStart());K=E;for(l in L.geometries)if(o=L.geometries[l],"cube"===o.type)y=new THREE.CubeGeometry(o.width,o.height,o.depth,o.segmentsWidth,o.segmentsHeight,o.segmentsDepth,null,o.flipped,o.sides),I.geometries[l]=y;else if("plane"===o.type)y=
new THREE.PlaneGeometry(o.width,o.height,o.segmentsWidth,o.segmentsHeight),I.geometries[l]=y;else if("sphere"===o.type)y=new THREE.SphereGeometry(o.radius,o.segmentsWidth,o.segmentsHeight),I.geometries[l]=y;else if("cylinder"===o.type)y=new THREE.CylinderGeometry(o.topRad,o.botRad,o.height,o.radSegs,o.heightSegs),I.geometries[l]=y;else if("torus"===o.type)y=new THREE.TorusGeometry(o.radius,o.tube,o.segmentsR,o.segmentsT),I.geometries[l]=y;else if("icosahedron"===o.type)y=new THREE.IcosahedronGeometry(o.radius,
o.subdivisions),I.geometries[l]=y;else if(o.type in this.geometryHandlerMap){H={};for(J in o)"type"!==J&&"url"!==J&&(H[J]=o[J]);this.geometryHandlerMap[o.type].loaderObject.load(d(o.url,L.urlBaseType),f(l),H)}else"embedded"===o.type&&(o=L.embeds[o.id],o.metadata=L.metadata,o&&this.geometryHandlerMap.ascii.loaderObject.createModel(o,g(l),""));for(q in L.textures)if(l=L.textures[q],l.url instanceof Array){M+=l.url.length;for(J=0;J<l.url.length;J++)i.onLoadStart()}else M+=1,i.onLoadStart();F=M;for(q in L.textures){l=
L.textures[q];void 0!==l.mapping&&void 0!==THREE[l.mapping]&&(l.mapping=new THREE[l.mapping]);if(l.url instanceof Array){o=l.url.length;H=[];for(J=0;J<o;J++)H[J]=d(l.url[J],L.urlBaseType);J=(J=H[0].endsWith(".dds"))?THREE.ImageUtils.loadCompressedTextureCube(H,l.mapping,a(o)):THREE.ImageUtils.loadTextureCube(H,l.mapping,a(o))}else{J=l.url.toLowerCase().endsWith(".dds");o=d(l.url,L.urlBaseType);H=a(1);J=J?THREE.ImageUtils.loadCompressedTexture(o,l.mapping,H):THREE.ImageUtils.loadTexture(o,l.mapping,
H);void 0!==THREE[l.minFilter]&&(J.minFilter=THREE[l.minFilter]);void 0!==THREE[l.magFilter]&&(J.magFilter=THREE[l.magFilter]);l.anisotropy&&(J.anisotropy=l.anisotropy);if(l.repeat&&(J.repeat.set(l.repeat[0],l.repeat[1]),1!==l.repeat[0]&&(J.wrapS=THREE.RepeatWrapping),1!==l.repeat[1]))J.wrapT=THREE.RepeatWrapping;l.offset&&J.offset.set(l.offset[0],l.offset[1]);if(l.wrap&&(o={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==o[l.wrap[0]]&&(J.wrapS=o[l.wrap[0]]),void 0!==o[l.wrap[1]]))J.wrapT=
o[l.wrap[1]]}I.textures[q]=J}for(m in L.materials){r=L.materials[m];for(v in r.parameters)"envMap"===v||"map"===v||"lightMap"===v||"bumpMap"===v?r.parameters[v]=I.textures[r.parameters[v]]:"shading"===v?r.parameters[v]="flat"===r.parameters[v]?THREE.FlatShading:THREE.SmoothShading:"side"===v?r.parameters[v]="double"==r.parameters[v]?THREE.DoubleSide:"back"==r.parameters[v]?THREE.BackSide:THREE.FrontSide:"blending"===v?r.parameters[v]=r.parameters[v]in THREE?THREE[r.parameters[v]]:THREE.NormalBlending:
"combine"===v?r.parameters[v]="MixOperation"==r.parameters[v]?THREE.MixOperation:THREE.MultiplyOperation:"vertexColors"===v?"face"==r.parameters[v]?r.parameters[v]=THREE.FaceColors:r.parameters[v]&&(r.parameters[v]=THREE.VertexColors):"wrapRGB"===v&&(q=r.parameters[v],r.parameters[v]=new THREE.Vector3(q[0],q[1],q[2]));void 0!==r.parameters.opacity&&1>r.parameters.opacity&&(r.parameters.transparent=!0);r.parameters.normalMap?(q=THREE.ShaderUtils.lib.normal,a=THREE.UniformsUtils.clone(q.uniforms),l=
r.parameters.color,J=r.parameters.specular,o=r.parameters.ambient,H=r.parameters.shininess,a.tNormal.value=I.textures[r.parameters.normalMap],r.parameters.normalScale&&a.uNormalScale.value.set(r.parameters.normalScale[0],r.parameters.normalScale[1]),r.parameters.map&&(a.tDiffuse.value=r.parameters.map,a.enableDiffuse.value=!0),r.parameters.envMap&&(a.tCube.value=r.parameters.envMap,a.enableReflection.value=!0,a.uReflectivity.value=r.parameters.reflectivity),r.parameters.lightMap&&(a.tAO.value=r.parameters.lightMap,
a.enableAO.value=!0),r.parameters.specularMap&&(a.tSpecular.value=I.textures[r.parameters.specularMap],a.enableSpecular.value=!0),r.parameters.displacementMap&&(a.tDisplacement.value=I.textures[r.parameters.displacementMap],a.enableDisplacement.value=!0,a.uDisplacementBias.value=r.parameters.displacementBias,a.uDisplacementScale.value=r.parameters.displacementScale),a.uDiffuseColor.value.setHex(l),a.uSpecularColor.value.setHex(J),a.uAmbientColor.value.setHex(o),a.uShininess.value=H,r.parameters.opacity&&
(a.uOpacity.value=r.parameters.opacity),C=new THREE.ShaderMaterial({fragmentShader:q.fragmentShader,vertexShader:q.vertexShader,uniforms:a,lights:!0,fog:!0})):C=new THREE[r.type](r.parameters);I.materials[m]=C}e(I.scene,L.objects);i.callbackSync(I);h()};THREE.TextureLoader=function(){THREE.EventTarget.call(this);this.crossOrigin=null};
THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a){var b=this,c=new Image;c.addEventListener("load",function(){var a=new THREE.Texture(c);a.needsUpdate=!0;b.dispatchEvent({type:"load",content:a})},!1);c.addEventListener("error",function(){b.dispatchEvent({type:"error",message:"Couldn't load URL ["+a+"]"})},!1);b.crossOrigin&&(c.crossOrigin=b.crossOrigin);c.src=a}};
THREE.Material=function(){THREE.MaterialLibrary.push(this);this.id=THREE.MaterialIdCount++;this.name="";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.depthWrite=this.depthTest=!0;this.polygonOffset=!1;this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.overdraw=!1;this.needsUpdate=this.visible=!0};
THREE.Material.prototype.setValues=function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if(b in this){var d=this[b];d instanceof THREE.Color&&c instanceof THREE.Color?d.copy(c):d instanceof THREE.Color&&"number"===typeof c?d.setHex(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]=c}}};
THREE.Material.prototype.clone=function(a){void 0===a&&(a=new THREE.Material);a.name=this.name;a.side=this.side;a.opacity=this.opacity;a.transparent=this.transparent;a.blending=this.blending;a.blendSrc=this.blendSrc;a.blendDst=this.blendDst;a.blendEquation=this.blendEquation;a.depthTest=this.depthTest;a.depthWrite=this.depthWrite;a.polygonOffset=this.polygonOffset;a.polygonOffsetFactor=this.polygonOffsetFactor;a.polygonOffsetUnits=this.polygonOffsetUnits;a.alphaTest=this.alphaTest;a.overdraw=this.overdraw;
a.visible=this.visible;return a};THREE.Material.prototype.deallocate=function(){var a=THREE.MaterialLibrary.indexOf(this);-1!==a&&THREE.MaterialLibrary.splice(a,1)};THREE.MaterialIdCount=0;THREE.MaterialLibrary=[];THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.linecap=this.linecap;a.linejoin=this.linejoin;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};
THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone=function(){var a=new THREE.MeshBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=
this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;return a};
THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap=
"round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone=function(){var a=new THREE.MeshLambertMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;
a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.wrapAround=this.perPixel=this.metal=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.bumpMap=this.lightMap=this.map=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.envMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=
1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone=function(){var a=new THREE.MeshPhongMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.specular.copy(this.specular);a.shininess=this.shininess;a.metal=this.metal;a.perPixel=this.perPixel;a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.bumpMap=this.bumpMap;a.bumpScale=this.bumpScale;a.normalMap=this.normalMap;a.normalScale.copy(this.normalScale);
a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.wireframe=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};
THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.shading=THREE.FlatShading;this.wireframe=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.clone=function(){var a=new THREE.MeshNormalMaterial;THREE.Material.prototype.clone.call(this,a);a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshFaceMaterial=function(){};
THREE.MeshFaceMaterial.prototype.clone=function(){return new THREE.MeshFaceMaterial};THREE.ParticleBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.ParticleBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ParticleBasicMaterial.prototype.clone=function(){var a=new THREE.ParticleBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.size=this.size;a.sizeAttenuation=this.sizeAttenuation;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.ParticleCanvasMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.program=function(){};this.setValues(a)};THREE.ParticleCanvasMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ParticleCanvasMaterial.prototype.clone=function(){var a=new THREE.ParticleCanvasMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.program=this.program;return a};THREE.ParticleDOMMaterial=function(a){this.element=a};THREE.ParticleDOMMaterial.prototype.clone=function(){return new THREE.ParticleDOMMaterial(this.element)};
THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.vertexShader=this.fragmentShader="void main() {}";this.uniforms={};this.defines={};this.attributes=null;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone=function(){var a=new THREE.ShaderMaterial;THREE.Material.prototype.clone.call(this,a);a.fragmentShader=this.fragmentShader;a.vertexShader=this.vertexShader;a.uniforms=this.uniforms;a.attributes=this.attributes;a.defines=this.defines;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.fog=this.fog;a.lights=this.lights;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=
this.morphNormals;return a};
THREE.Texture=function(a,b,c,d,e,f,g,h,i){THREE.TextureLibrary.push(this);this.id=THREE.TextureIdCount++;this.image=a;this.mapping=void 0!==b?b:new THREE.UVMapping;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==i?i:1;this.format=void 0!==g?g:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;this.offset=
new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.needsUpdate=!1;this.onUpdate=null};
THREE.Texture.prototype={constructor:THREE.Texture,clone:function(){var a=new THREE.Texture;a.image=this.image;a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.format=this.format;a.type=this.type;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.generateMipmaps=this.generateMipmaps;a.premultiplyAlpha=this.premultiplyAlpha;a.flipY=this.flipY;return a},deallocate:function(){var a=THREE.TextureLibrary.indexOf(this);
-1!==a&&THREE.TextureLibrary.splice(a,1)}};THREE.TextureIdCount=0;THREE.TextureLibrary=[];THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,i,j){THREE.Texture.call(this,null,f,g,h,i,j,d,e);this.image={width:b,height:c};this.mipmaps=a};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.clone=function(){var a=new THREE.CompressedTexture;a.image=this.image;a.mipmaps=this.mipmaps;a.format=this.format;a.type=this.type;a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.offset.copy(this.offset);a.repeat.copy(this.repeat);return a};THREE.DataTexture=function(a,b,c,d,e,f,g,h,i,j){THREE.Texture.call(this,null,f,g,h,i,j,d,e);this.image={data:a,width:b,height:c}};
THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.clone=function(){var a=new THREE.DataTexture(this.image.data,this.image.width,this.image.height,this.format,this.type,this.mapping,this.wrapS,this.wrapT,this.magFilter,this.minFilter);a.offset.copy(this.offset);a.repeat.copy(this.repeat);return a};THREE.Particle=function(a){THREE.Object3D.call(this);this.material=a};THREE.Particle.prototype=Object.create(THREE.Object3D.prototype);
THREE.Particle.prototype.clone=function(a){void 0===a&&(a=new THREE.Particle(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.ParticleSystem=function(a,b){THREE.Object3D.call(this);this.geometry=a;this.material=void 0!==b?b:new THREE.ParticleBasicMaterial({color:16777215*Math.random()});this.sortParticles=!1;this.geometry&&(null===this.geometry.boundingSphere&&this.geometry.computeBoundingSphere(),this.boundRadius=a.boundingSphere.radius);this.frustumCulled=!1};
THREE.ParticleSystem.prototype=Object.create(THREE.Object3D.prototype);THREE.ParticleSystem.prototype.clone=function(a){void 0===a&&(a=new THREE.ParticleSystem(this.geometry,this.material));a.sortParticles=this.sortParticles;THREE.Object3D.prototype.clone.call(this,a);return a};
THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.geometry=a;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});this.type=void 0!==c?c:THREE.LineStrip;this.geometry&&(this.geometry.boundingSphere||this.geometry.computeBoundingSphere())};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.clone=function(a){void 0===a&&(a=new THREE.Line(this.geometry,this.material,this.type));THREE.Object3D.prototype.clone.call(this,a);return a};
THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.geometry=a;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random(),wireframe:!0});if(this.geometry&&(null===this.geometry.boundingSphere&&this.geometry.computeBoundingSphere(),this.boundRadius=a.boundingSphere.radius,this.geometry.morphTargets.length)){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var c=0;c<this.geometry.morphTargets.length;c++)this.morphTargetInfluences.push(0),
this.morphTargetDictionary[this.geometry.morphTargets[c].name]=c}};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.log("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};
THREE.Mesh.prototype.clone=function(a){void 0===a&&(a=new THREE.Mesh(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Bone=function(a){THREE.Object3D.call(this);this.skin=a;this.skinMatrix=new THREE.Matrix4};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.update=function(a,b){this.matrixAutoUpdate&&(b|=this.updateMatrix());if(b||this.matrixWorldNeedsUpdate)a?this.skinMatrix.multiply(a,this.matrix):this.skinMatrix.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,b=!0;var c,d=this.children.length;for(c=0;c<d;c++)this.children[c].update(this.skinMatrix,b)};
THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;this.bones=[];this.boneMatrices=[];var d,e,f;if(void 0!==this.geometry.bones){for(a=0;a<this.geometry.bones.length;a++)c=this.geometry.bones[a],d=c.pos,e=c.rotq,f=c.scl,b=this.addBone(),b.name=c.name,b.position.set(d[0],d[1],d[2]),b.quaternion.set(e[0],e[1],e[2],e[3]),b.useQuaternion=!0,void 0!==f?b.scale.set(f[0],f[1],f[2]):b.scale.set(1,1,1);for(a=0;a<this.bones.length;a++)c=
this.geometry.bones[a],b=this.bones[a],-1===c.parent?this.add(b):this.bones[c.parent].add(b);a=this.bones.length;this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=a=256<a?64:64<a?32:16<a?16:8,this.boneMatrices=new Float32Array(4*this.boneTextureWidth*this.boneTextureHeight),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),this.boneTexture.minFilter=THREE.NearestFilter,this.boneTexture.magFilter=
THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*a);this.pose()}};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.addBone=function(a){void 0===a&&(a=new THREE.Bone(this));this.bones.push(a);return a};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)this.parent?this.matrixWorld.multiply(this.parent.matrixWorld,this.matrix):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=!1;for(var a=0,b=this.children.length;a<b;a++){var c=this.children[a];c instanceof THREE.Bone?c.update(this.identityMatrix,!1):c.updateMatrixWorld(!0)}if(void 0==this.boneInverses){this.boneInverses=[];a=0;for(b=this.bones.length;a<
b;a++)c=new THREE.Matrix4,c.getInverse(this.bones[a].skinMatrix),this.boneInverses.push(c)}a=0;for(b=this.bones.length;a<b;a++)THREE.SkinnedMesh.offsetMatrix.multiply(this.bones[a].skinMatrix,this.boneInverses[a]),THREE.SkinnedMesh.offsetMatrix.flattenToArrayOffset(this.boneMatrices,16*a);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)};
THREE.SkinnedMesh.prototype.pose=function(){this.updateMatrixWorld(!0);for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};THREE.SkinnedMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture));THREE.Mesh.prototype.clone.call(this,a);return a};THREE.SkinnedMesh.offsetMatrix=new THREE.Matrix4;
THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};
THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)(\d+)/,e=0,f=a.morphTargets.length;e<f;e++){var g=a.morphTargets[e].name.match(d);if(g&&1<g.length){g=g[1];c[g]||(c[g]={start:Infinity,end:-Infinity});var h=c[g];e<h.start&&(h.start=e);e>h.end&&(h.end=e);b||(b=g)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=1E3*((c.end-c.start)/b),this.time=0):console.warn("animation["+a+"] undefined")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)if(this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time)this.time=0,this.directionBackwards=!1}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);a=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a!==this.currentKeyframe&&
(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[a]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=a);b=this.time%b/b;this.directionBackwards&&(b=1-b);this.morphTargetInfluences[this.currentKeyframe]=b;this.morphTargetInfluences[this.lastKeyframe]=1-b};
THREE.MorphAnimMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.MorphAnimMesh(this.geometry,this.material));a.duration=this.duration;a.mirroredLoop=this.mirroredLoop;a.time=this.time;a.lastKeyframe=this.lastKeyframe;a.currentKeyframe=this.currentKeyframe;a.direction=this.direction;a.directionBackwards=this.directionBackwards;THREE.Mesh.prototype.clone.call(this,a);return a};THREE.Ribbon=function(a,b){THREE.Object3D.call(this);this.geometry=a;this.material=b};THREE.Ribbon.prototype=Object.create(THREE.Object3D.prototype);
THREE.Ribbon.prototype.clone=function(a){void 0===a&&(a=new THREE.Ribbon(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.LOD=function(){THREE.Object3D.call(this);this.LODs=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);for(var b=Math.abs(b),c=0;c<this.LODs.length&&!(b<this.LODs[c].visibleAtDistance);c++);this.LODs.splice(c,0,{visibleAtDistance:b,object3D:a});this.add(a)};
THREE.LOD.prototype.update=function(a){if(1<this.LODs.length){a.matrixWorldInverse.getInverse(a.matrixWorld);a=a.matrixWorldInverse;a=-(a.elements[2]*this.matrixWorld.elements[12]+a.elements[6]*this.matrixWorld.elements[13]+a.elements[10]*this.matrixWorld.elements[14]+a.elements[14]);this.LODs[0].object3D.visible=!0;for(var b=1;b<this.LODs.length;b++)if(a>=this.LODs[b].visibleAtDistance)this.LODs[b-1].object3D.visible=!1,this.LODs[b].object3D.visible=!0;else break;for(;b<this.LODs.length;b++)this.LODs[b].object3D.visible=
!1}};THREE.LOD.prototype.clone=function(){};
THREE.Sprite=function(a){THREE.Object3D.call(this);this.color=void 0!==a.color?new THREE.Color(a.color):new THREE.Color(16777215);this.map=void 0!==a.map?a.map:new THREE.Texture;this.blending=void 0!==a.blending?a.blending:THREE.NormalBlending;this.blendSrc=void 0!==a.blendSrc?a.blendSrc:THREE.SrcAlphaFactor;this.blendDst=void 0!==a.blendDst?a.blendDst:THREE.OneMinusSrcAlphaFactor;this.blendEquation=void 0!==a.blendEquation?a.blendEquation:THREE.AddEquation;this.useScreenCoordinates=void 0!==a.useScreenCoordinates?
a.useScreenCoordinates:!0;this.mergeWith3D=void 0!==a.mergeWith3D?a.mergeWith3D:!this.useScreenCoordinates;this.affectedByDistance=void 0!==a.affectedByDistance?a.affectedByDistance:!this.useScreenCoordinates;this.scaleByViewport=void 0!==a.scaleByViewport?a.scaleByViewport:!this.affectedByDistance;this.alignment=a.alignment instanceof THREE.Vector2?a.alignment:THREE.SpriteAlignment.center;this.rotation3d=this.rotation;this.rotation=0;this.opacity=1;this.uvOffset=new THREE.Vector2(0,0);this.uvScale=
new THREE.Vector2(1,1)};THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);THREE.Sprite.prototype.updateMatrix=function(){this.matrix.setPosition(this.position);this.rotation3d.set(0,0,this.rotation);this.matrix.setRotationFromEuler(this.rotation3d);if(1!==this.scale.x||1!==this.scale.y)this.matrix.scale(this.scale),this.boundRadiusScale=Math.max(this.scale.x,this.scale.y);this.matrixWorldNeedsUpdate=!0};
THREE.Sprite.prototype.clone=function(a){void 0===a&&(a=new THREE.Sprite({}));a.color.copy(this.color);a.map=this.map;a.blending=this.blending;a.useScreenCoordinates=this.useScreenCoordinates;a.mergeWith3D=this.mergeWith3D;a.affectedByDistance=this.affectedByDistance;a.scaleByViewport=this.scaleByViewport;a.alignment=this.alignment;a.rotation3d.copy(this.rotation3d);a.rotation=this.rotation;a.opacity=this.opacity;a.uvOffset.copy(this.uvOffset);a.uvScale.copy(this.uvScale);THREE.Object3D.prototype.clone.call(this,
a);return a};THREE.SpriteAlignment={};THREE.SpriteAlignment.topLeft=new THREE.Vector2(1,-1);THREE.SpriteAlignment.topCenter=new THREE.Vector2(0,-1);THREE.SpriteAlignment.topRight=new THREE.Vector2(-1,-1);THREE.SpriteAlignment.centerLeft=new THREE.Vector2(1,0);THREE.SpriteAlignment.center=new THREE.Vector2(0,0);THREE.SpriteAlignment.centerRight=new THREE.Vector2(-1,0);THREE.SpriteAlignment.bottomLeft=new THREE.Vector2(1,1);THREE.SpriteAlignment.bottomCenter=new THREE.Vector2(0,1);
THREE.SpriteAlignment.bottomRight=new THREE.Vector2(-1,1);THREE.Scene=function(){THREE.Object3D.call(this);this.overrideMaterial=this.fog=null;this.matrixAutoUpdate=!1;this.__objects=[];this.__lights=[];this.__objectsAdded=[];this.__objectsRemoved=[]};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject=function(a){if(a instanceof THREE.Light)-1===this.__lights.indexOf(a)&&this.__lights.push(a),a.target&&void 0===a.target.parent&&this.add(a.target);else if(!(a instanceof THREE.Camera||a instanceof THREE.Bone)&&-1===this.__objects.indexOf(a)){this.__objects.push(a);this.__objectsAdded.push(a);var b=this.__objectsRemoved.indexOf(a);-1!==b&&this.__objectsRemoved.splice(b,1)}for(b=0;b<a.children.length;b++)this.__addObject(a.children[b])};
THREE.Scene.prototype.__removeObject=function(a){if(a instanceof THREE.Light){var b=this.__lights.indexOf(a);-1!==b&&this.__lights.splice(b,1)}else a instanceof THREE.Camera||(b=this.__objects.indexOf(a),-1!==b&&(this.__objects.splice(b,1),this.__objectsRemoved.push(a),b=this.__objectsAdded.indexOf(a),-1!==b&&this.__objectsAdded.splice(b,1)));for(b=0;b<a.children.length;b++)this.__removeObject(a.children[b])};
THREE.Fog=function(a,b,c){this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};THREE.FogExp2=function(a,b){this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};
THREE.CanvasRenderer=function(a){function b(a){B!==a&&(B=q.globalAlpha=a)}function c(a){u!==a&&(a===THREE.NormalBlending?q.globalCompositeOperation="source-over":a===THREE.AdditiveBlending?q.globalCompositeOperation="lighter":a===THREE.SubtractiveBlending&&(q.globalCompositeOperation="darker"),u=a)}function d(a){s!==a&&(s=q.strokeStyle=a)}function e(a){z!==a&&(z=q.fillStyle=a)}console.log("THREE.CanvasRenderer",THREE.REVISION);var a=a||{},f=this,g,h,i,j=new THREE.Projector,l=void 0!==a.canvas?a.canvas:
document.createElement("canvas"),m,n,p,o,q=l.getContext("2d"),r=new THREE.Color(0),t=0,B=1,u=0,s=null,z=null,A=null,v=null,y=null,C,G,H,J,E=new THREE.RenderableVertex,M=new THREE.RenderableVertex,K,F,I,L,R,$,Y,N,ea,Q,qa,la,O=new THREE.Color,fa=new THREE.Color,W=new THREE.Color,V=new THREE.Color,ia=new THREE.Color,Z=new THREE.Color,ca=new THREE.Color,Ga={},Pa={},Ia,Ua,na,Va,ib,Ra,eb,pb,Pb,db,$a=new THREE.Rectangle,Ja=new THREE.Rectangle,wa=new THREE.Rectangle,wb=!1,Da=new THREE.Color,qb=new THREE.Color,
fb=new THREE.Color,ra=new THREE.Vector3,gb,Za,Wa,Ea,xb,k,a=16;gb=document.createElement("canvas");gb.width=gb.height=2;Za=gb.getContext("2d");Za.fillStyle="rgba(0,0,0,1)";Za.fillRect(0,0,2,2);Wa=Za.getImageData(0,0,2,2);Ea=Wa.data;xb=document.createElement("canvas");xb.width=xb.height=a;k=xb.getContext("2d");k.translate(-a/2,-a/2);k.scale(a,a);a--;this.domElement=l;this.sortElements=this.sortObjects=this.autoClear=!0;this.info={render:{vertices:0,faces:0}};this.setSize=function(a,b){m=a;n=b;p=Math.floor(m/
2);o=Math.floor(n/2);l.width=m;l.height=n;$a.set(-p,-o,p,o);Ja.set(-p,-o,p,o);B=1;u=0;y=v=A=z=s=null};this.setClearColor=function(a,b){r.copy(a);t=void 0!==b?b:1;Ja.set(-p,-o,p,o)};this.setClearColorHex=function(a,b){r.setHex(a);t=void 0!==b?b:1;Ja.set(-p,-o,p,o)};this.getMaxAnisotropy=function(){return 0};this.clear=function(){q.setTransform(1,0,0,-1,p,o);!1===Ja.isEmpty()&&(Ja.minSelf($a),Ja.inflate(2),1>t&&q.clearRect(Math.floor(Ja.getX()),Math.floor(Ja.getY()),Math.floor(Ja.getWidth()),Math.floor(Ja.getHeight())),
0<t&&(c(THREE.NormalBlending),b(1),e("rgba("+Math.floor(255*r.r)+","+Math.floor(255*r.g)+","+Math.floor(255*r.b)+","+t+")"),q.fillRect(Math.floor(Ja.getX()),Math.floor(Ja.getY()),Math.floor(Ja.getWidth()),Math.floor(Ja.getHeight()))),Ja.empty())};this.render=function(a,l){function m(a,b,c){for(var d=0,e=i.length;d<e;d++){var f=i[d],g=f.color;if(f instanceof THREE.DirectionalLight){var h=f.matrixWorld.getPosition().normalize(),k=b.dot(h);0>=k||(k*=f.intensity,c.r+=g.r*k,c.g+=g.g*k,c.b+=g.b*k)}else f instanceof
THREE.PointLight&&(h=f.matrixWorld.getPosition(),k=b.dot(ra.sub(h,a).normalize()),0>=k||(k*=0==f.distance?1:1-Math.min(a.distanceTo(h)/f.distance,1),0!=k&&(k*=f.intensity,c.r+=g.r*k,c.g+=g.g*k,c.b+=g.b*k)))}}function n(a,d,e,g,h,k,i,j){f.info.render.vertices+=3;f.info.render.faces++;b(j.opacity);c(j.blending);K=a.positionScreen.x;F=a.positionScreen.y;I=d.positionScreen.x;L=d.positionScreen.y;R=e.positionScreen.x;$=e.positionScreen.y;r(K,F,I,L,R,$);(j instanceof THREE.MeshLambertMaterial||j instanceof
THREE.MeshPhongMaterial)&&null===j.map&&null===j.map?(Z.copy(j.color),ca.copy(j.emissive),j.vertexColors===THREE.FaceColors&&(Z.r*=i.color.r,Z.g*=i.color.g,Z.b*=i.color.b),!0===wb)?!1===j.wireframe&&j.shading==THREE.SmoothShading&&3==i.vertexNormalsLength?(fa.r=W.r=V.r=Da.r,fa.g=W.g=V.g=Da.g,fa.b=W.b=V.b=Da.b,m(i.v1.positionWorld,i.vertexNormalsWorld[0],fa),m(i.v2.positionWorld,i.vertexNormalsWorld[1],W),m(i.v3.positionWorld,i.vertexNormalsWorld[2],V),fa.r=fa.r*Z.r+ca.r,fa.g=fa.g*Z.g+ca.g,fa.b=fa.b*
Z.b+ca.b,W.r=W.r*Z.r+ca.r,W.g=W.g*Z.g+ca.g,W.b=W.b*Z.b+ca.b,V.r=V.r*Z.r+ca.r,V.g=V.g*Z.g+ca.g,V.b=V.b*Z.b+ca.b,ia.r=0.5*(W.r+V.r),ia.g=0.5*(W.g+V.g),ia.b=0.5*(W.b+V.b),na=Dc(fa,W,V,ia),gc(K,F,I,L,R,$,0,0,1,0,0,1,na)):(O.r=Da.r,O.g=Da.g,O.b=Da.b,m(i.centroidWorld,i.normalWorld,O),O.r=O.r*Z.r+ca.r,O.g=O.g*Z.g+ca.g,O.b=O.b*Z.b+ca.b,!0===j.wireframe?t(O,j.wireframeLinewidth,j.wireframeLinecap,j.wireframeLinejoin):u(O)):!0===j.wireframe?t(j.color,j.wireframeLinewidth,j.wireframeLinecap,j.wireframeLinejoin):
u(j.color):j instanceof THREE.MeshBasicMaterial||j instanceof THREE.MeshLambertMaterial||j instanceof THREE.MeshPhongMaterial?null!==j.map?j.map.mapping instanceof THREE.UVMapping&&(Va=i.uvs[0],Ba(K,F,I,L,R,$,Va[g].u,Va[g].v,Va[h].u,Va[h].v,Va[k].u,Va[k].v,j.map)):null!==j.envMap?j.envMap.mapping instanceof THREE.SphericalReflectionMapping&&(a=l.matrixWorldInverse,ra.copy(i.vertexNormalsWorld[g]),ib=0.5*(ra.x*a.elements[0]+ra.y*a.elements[4]+ra.z*a.elements[8])+0.5,Ra=0.5*(ra.x*a.elements[1]+ra.y*
a.elements[5]+ra.z*a.elements[9])+0.5,ra.copy(i.vertexNormalsWorld[h]),eb=0.5*(ra.x*a.elements[0]+ra.y*a.elements[4]+ra.z*a.elements[8])+0.5,pb=0.5*(ra.x*a.elements[1]+ra.y*a.elements[5]+ra.z*a.elements[9])+0.5,ra.copy(i.vertexNormalsWorld[k]),Pb=0.5*(ra.x*a.elements[0]+ra.y*a.elements[4]+ra.z*a.elements[8])+0.5,db=0.5*(ra.x*a.elements[1]+ra.y*a.elements[5]+ra.z*a.elements[9])+0.5,Ba(K,F,I,L,R,$,ib,Ra,eb,pb,Pb,db,j.envMap)):(O.copy(j.color),j.vertexColors===THREE.FaceColors&&(O.r*=i.color.r,O.g*=
i.color.g,O.b*=i.color.b),!0===j.wireframe?t(O,j.wireframeLinewidth,j.wireframeLinecap,j.wireframeLinejoin):u(O)):j instanceof THREE.MeshDepthMaterial?(Ia=l.near,Ua=l.far,fa.r=fa.g=fa.b=1-tb(a.positionScreen.z,Ia,Ua),W.r=W.g=W.b=1-tb(d.positionScreen.z,Ia,Ua),V.r=V.g=V.b=1-tb(e.positionScreen.z,Ia,Ua),ia.r=0.5*(W.r+V.r),ia.g=0.5*(W.g+V.g),ia.b=0.5*(W.b+V.b),na=Dc(fa,W,V,ia),gc(K,F,I,L,R,$,0,0,1,0,0,1,na)):j instanceof THREE.MeshNormalMaterial&&(O.r=jc(i.normalWorld.x),O.g=jc(i.normalWorld.y),O.b=
jc(i.normalWorld.z),!0===j.wireframe?t(O,j.wireframeLinewidth,j.wireframeLinecap,j.wireframeLinejoin):u(O))}function r(a,b,c,d,e,f){q.beginPath();q.moveTo(a,b);q.lineTo(c,d);q.lineTo(e,f);q.closePath()}function s(a,b,c,d,e,f,g,h){q.beginPath();q.moveTo(a,b);q.lineTo(c,d);q.lineTo(e,f);q.lineTo(g,h);q.closePath()}function t(a,b,c,e){A!==b&&(A=q.lineWidth=b);v!==c&&(v=q.lineCap=c);y!==e&&(y=q.lineJoin=e);d(a.getContextStyle());q.stroke();wa.inflate(2*b)}function u(a){e(a.getContextStyle());q.fill()}
function Ba(a,b,c,d,f,g,h,k,i,j,l,m,n){if(!(n instanceof THREE.DataTexture||void 0===n.image||0==n.image.width)){if(!0===n.needsUpdate){var Ba=n.wrapS==THREE.RepeatWrapping,o=n.wrapT==THREE.RepeatWrapping;Ga[n.id]=q.createPattern(n.image,!0===Ba&&!0===o?"repeat":!0===Ba&&!1===o?"repeat-x":!1===Ba&&!0===o?"repeat-y":"no-repeat");n.needsUpdate=!1}void 0===Ga[n.id]?e("rgba(0,0,0,1)"):e(Ga[n.id]);var Ba=n.offset.x/n.repeat.x,o=n.offset.y/n.repeat.y,p=n.image.width*n.repeat.x,tb=n.image.height*n.repeat.y,
h=(h+Ba)*p,k=(1-k+o)*tb,c=c-a,d=d-b,f=f-a,g=g-b,i=(i+Ba)*p-h,j=(1-j+o)*tb-k,l=(l+Ba)*p-h,m=(1-m+o)*tb-k,Ba=i*m-l*j;0===Ba?(void 0===Pa[n.id]&&(b=document.createElement("canvas"),b.width=n.image.width,b.height=n.image.height,b=b.getContext("2d"),b.drawImage(n.image,0,0),Pa[n.id]=b.getImageData(0,0,n.image.width,n.image.height).data),b=Pa[n.id],h=4*(Math.floor(h)+Math.floor(k)*n.image.width),O.setRGB(b[h]/255,b[h+1]/255,b[h+2]/255),u(O)):(Ba=1/Ba,n=(m*c-j*f)*Ba,j=(m*d-j*g)*Ba,c=(i*f-l*c)*Ba,d=(i*g-
l*d)*Ba,a=a-n*h-c*k,h=b-j*h-d*k,q.save(),q.transform(n,j,c,d,a,h),q.fill(),q.restore())}}function gc(a,b,c,d,e,f,g,h,k,i,j,l,n){var m,Ba;m=n.width-1;Ba=n.height-1;g*=m;h*=Ba;c-=a;d-=b;e-=a;f-=b;k=k*m-g;i=i*Ba-h;j=j*m-g;l=l*Ba-h;Ba=1/(k*l-j*i);m=(l*c-i*e)*Ba;i=(l*d-i*f)*Ba;c=(k*e-j*c)*Ba;d=(k*f-j*d)*Ba;a=a-m*g-c*h;b=b-i*g-d*h;q.save();q.transform(m,i,c,d,a,b);q.clip();q.drawImage(n,0,0);q.restore()}function Dc(a,b,c,d){Ea[0]=255*a.r|0;Ea[1]=255*a.g|0;Ea[2]=255*a.b|0;Ea[4]=255*b.r|0;Ea[5]=255*b.g|0;
Ea[6]=255*b.b|0;Ea[8]=255*c.r|0;Ea[9]=255*c.g|0;Ea[10]=255*c.b|0;Ea[12]=255*d.r|0;Ea[13]=255*d.g|0;Ea[14]=255*d.b|0;Za.putImageData(Wa,0,0);k.drawImage(gb,0,0);return xb}function tb(a,b,c){a=(a-b)/(c-b);return a*a*(3-2*a)}function jc(a){a=0.5*(a+1);return 0>a?0:1<a?1:a}function Wb(a,b){var c=b.x-a.x,d=b.y-a.y,e=c*c+d*d;0!==e&&(e=1/Math.sqrt(e),c*=e,d*=e,b.x+=c,b.y+=d,a.x-=c,a.y-=d)}if(!1===l instanceof THREE.Camera)console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
else{var B,Fc,ja,aa;!0===this.autoClear?this.clear():q.setTransform(1,0,0,-1,p,o);f.info.render.vertices=0;f.info.render.faces=0;g=j.projectScene(a,l,this.sortObjects,this.sortElements);h=g.elements;i=g.lights;wb=0<i.length;if(!0===wb){Da.setRGB(0,0,0);qb.setRGB(0,0,0);fb.setRGB(0,0,0);B=0;for(Fc=i.length;B<Fc;B++){aa=i[B];var z=aa.color;aa instanceof THREE.AmbientLight?(Da.r+=z.r,Da.g+=z.g,Da.b+=z.b):aa instanceof THREE.DirectionalLight?(qb.r+=z.r,qb.g+=z.g,qb.b+=z.b):aa instanceof THREE.PointLight&&
(fb.r+=z.r,fb.g+=z.g,fb.b+=z.b)}}B=0;for(Fc=h.length;B<Fc;B++)if(ja=h[B],aa=ja.material,!(void 0===aa||!1===aa.visible)){wa.empty();if(ja instanceof THREE.RenderableParticle){C=ja;C.x*=p;C.y*=o;var z=C,Xa=ja;b(aa.opacity);c(aa.blending);var rb=void 0,sb=void 0,jb=void 0,kb=void 0,kc=ja=void 0,Uc=void 0;aa instanceof THREE.ParticleBasicMaterial?null===aa.map?(jb=Xa.object.scale.x,kb=Xa.object.scale.y,jb*=Xa.scale.x*p,kb*=Xa.scale.y*o,wa.set(z.x-jb,z.y-kb,z.x+jb,z.y+kb),!1!==$a.intersects(wa)&&(e(aa.color.getContextStyle()),
q.save(),q.translate(z.x,z.y),q.rotate(-Xa.rotation),q.scale(jb,kb),q.fillRect(-1,-1,2,2),q.restore())):(ja=aa.map.image,kc=ja.width>>1,Uc=ja.height>>1,jb=Xa.scale.x*p,kb=Xa.scale.y*o,rb=jb*kc,sb=kb*Uc,wa.set(z.x-rb,z.y-sb,z.x+rb,z.y+sb),!1!==$a.intersects(wa)&&(q.save(),q.translate(z.x,z.y),q.rotate(-Xa.rotation),q.scale(jb,-kb),q.translate(-kc,-Uc),q.drawImage(ja,0,0),q.restore())):aa instanceof THREE.ParticleCanvasMaterial&&(rb=Xa.scale.x*p,sb=Xa.scale.y*o,wa.set(z.x-rb,z.y-sb,z.x+rb,z.y+sb),!1!==
$a.intersects(wa)&&(d(aa.color.getContextStyle()),e(aa.color.getContextStyle()),q.save(),q.translate(z.x,z.y),q.rotate(-Xa.rotation),q.scale(rb,sb),aa.program(q),q.restore()))}else if(ja instanceof THREE.RenderableLine){if(C=ja.v1,G=ja.v2,C.positionScreen.x*=p,C.positionScreen.y*=o,G.positionScreen.x*=p,G.positionScreen.y*=o,wa.addPoint(C.positionScreen.x,C.positionScreen.y),wa.addPoint(G.positionScreen.x,G.positionScreen.y),!0===$a.intersects(wa)&&(z=C,Xa=G,b(aa.opacity),c(aa.blending),q.beginPath(),
q.moveTo(z.positionScreen.x,z.positionScreen.y),q.lineTo(Xa.positionScreen.x,Xa.positionScreen.y),aa instanceof THREE.LineBasicMaterial))z=aa.linewidth,A!==z&&(A=q.lineWidth=z),z=aa.linecap,v!==z&&(v=q.lineCap=z),z=aa.linejoin,y!==z&&(y=q.lineJoin=z),d(aa.color.getContextStyle()),q.stroke(),wa.inflate(2*aa.linewidth)}else if(ja instanceof THREE.RenderableFace3)C=ja.v1,G=ja.v2,H=ja.v3,C.positionScreen.x*=p,C.positionScreen.y*=o,G.positionScreen.x*=p,G.positionScreen.y*=o,H.positionScreen.x*=p,H.positionScreen.y*=
o,!0===aa.overdraw&&(Wb(C.positionScreen,G.positionScreen),Wb(G.positionScreen,H.positionScreen),Wb(H.positionScreen,C.positionScreen)),wa.add3Points(C.positionScreen.x,C.positionScreen.y,G.positionScreen.x,G.positionScreen.y,H.positionScreen.x,H.positionScreen.y),!0===$a.intersects(wa)&&n(C,G,H,0,1,2,ja,aa,a);else if(ja instanceof THREE.RenderableFace4&&(C=ja.v1,G=ja.v2,H=ja.v3,J=ja.v4,C.positionScreen.x*=p,C.positionScreen.y*=o,G.positionScreen.x*=p,G.positionScreen.y*=o,H.positionScreen.x*=p,H.positionScreen.y*=
o,J.positionScreen.x*=p,J.positionScreen.y*=o,E.positionScreen.copy(G.positionScreen),M.positionScreen.copy(J.positionScreen),!0===aa.overdraw&&(Wb(C.positionScreen,G.positionScreen),Wb(G.positionScreen,J.positionScreen),Wb(J.positionScreen,C.positionScreen),Wb(H.positionScreen,E.positionScreen),Wb(H.positionScreen,M.positionScreen)),wa.addPoint(C.positionScreen.x,C.positionScreen.y),wa.addPoint(G.positionScreen.x,G.positionScreen.y),wa.addPoint(H.positionScreen.x,H.positionScreen.y),wa.addPoint(J.positionScreen.x,
J.positionScreen.y),!0===$a.intersects(wa)))(z=C,Xa=G,rb=H,sb=J,jb=E,kb=M,kc=a,f.info.render.vertices+=4,f.info.render.faces++,b(aa.opacity),c(aa.blending),void 0!==aa.map&&null!==aa.map||void 0!==aa.envMap&&null!==aa.envMap)?(n(z,Xa,sb,0,1,3,ja,aa,kc),n(jb,rb,kb,1,2,3,ja,aa,kc)):(K=z.positionScreen.x,F=z.positionScreen.y,I=Xa.positionScreen.x,L=Xa.positionScreen.y,R=rb.positionScreen.x,$=rb.positionScreen.y,Y=sb.positionScreen.x,N=sb.positionScreen.y,ea=jb.positionScreen.x,Q=jb.positionScreen.y,
qa=kb.positionScreen.x,la=kb.positionScreen.y,aa instanceof THREE.MeshLambertMaterial||aa instanceof THREE.MeshPhongMaterial)?(Z.copy(aa.color),ca.copy(aa.emissive),aa.vertexColors===THREE.FaceColors&&(Z.r*=ja.color.r,Z.g*=ja.color.g,Z.b*=ja.color.b),!0===wb)?!1===aa.wireframe&&aa.shading==THREE.SmoothShading&&4==ja.vertexNormalsLength?(fa.r=W.r=V.r=ia.r=Da.r,fa.g=W.g=V.g=ia.g=Da.g,fa.b=W.b=V.b=ia.b=Da.b,m(ja.v1.positionWorld,ja.vertexNormalsWorld[0],fa),m(ja.v2.positionWorld,ja.vertexNormalsWorld[1],
W),m(ja.v4.positionWorld,ja.vertexNormalsWorld[3],V),m(ja.v3.positionWorld,ja.vertexNormalsWorld[2],ia),fa.r=fa.r*Z.r+ca.r,fa.g=fa.g*Z.g+ca.g,fa.b=fa.b*Z.b+ca.b,W.r=W.r*Z.r+ca.r,W.g=W.g*Z.g+ca.g,W.b=W.b*Z.b+ca.b,V.r=V.r*Z.r+ca.r,V.g=V.g*Z.g+ca.g,V.b=V.b*Z.b+ca.b,ia.r=ia.r*Z.r+ca.r,ia.g=ia.g*Z.g+ca.g,ia.b=ia.b*Z.b+ca.b,na=Dc(fa,W,V,ia),r(K,F,I,L,Y,N),gc(K,F,I,L,Y,N,0,0,1,0,0,1,na),r(ea,Q,R,$,qa,la),gc(ea,Q,R,$,qa,la,1,0,1,1,0,1,na)):(O.r=Da.r,O.g=Da.g,O.b=Da.b,m(ja.centroidWorld,ja.normalWorld,O),
O.r=O.r*Z.r+ca.r,O.g=O.g*Z.g+ca.g,O.b=O.b*Z.b+ca.b,s(K,F,I,L,R,$,Y,N),!0===aa.wireframe?t(O,aa.wireframeLinewidth,aa.wireframeLinecap,aa.wireframeLinejoin):u(O)):(O.r=Z.r+ca.r,O.g=Z.g+ca.g,O.b=Z.b+ca.b,s(K,F,I,L,R,$,Y,N),!0===aa.wireframe?t(O,aa.wireframeLinewidth,aa.wireframeLinecap,aa.wireframeLinejoin):u(O)):aa instanceof THREE.MeshBasicMaterial?(O.copy(aa.color),aa.vertexColors===THREE.FaceColors&&(O.r*=ja.color.r,O.g*=ja.color.g,O.b*=ja.color.b),s(K,F,I,L,R,$,Y,N),!0===aa.wireframe?t(O,aa.wireframeLinewidth,
aa.wireframeLinecap,aa.wireframeLinejoin):u(O)):aa instanceof THREE.MeshNormalMaterial?(O.r=jc(ja.normalWorld.x),O.g=jc(ja.normalWorld.y),O.b=jc(ja.normalWorld.z),s(K,F,I,L,R,$,Y,N),!0===aa.wireframe?t(O,aa.wireframeLinewidth,aa.wireframeLinecap,aa.wireframeLinejoin):u(O)):aa instanceof THREE.MeshDepthMaterial&&(Ia=l.near,Ua=l.far,fa.r=fa.g=fa.b=1-tb(z.positionScreen.z,Ia,Ua),W.r=W.g=W.b=1-tb(Xa.positionScreen.z,Ia,Ua),V.r=V.g=V.b=1-tb(sb.positionScreen.z,Ia,Ua),ia.r=ia.g=ia.b=1-tb(rb.positionScreen.z,
Ia,Ua),na=Dc(fa,W,V,ia),r(K,F,I,L,Y,N),gc(K,F,I,L,Y,N,0,0,1,0,0,1,na),r(ea,Q,R,$,qa,la),gc(ea,Q,R,$,qa,la,1,0,1,1,0,1,na));Ja.addRectangle(wa)}q.setTransform(1,0,0,1,0,0)}}};
THREE.ShaderChunk={fog_pars_fragment:"#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",fog_fragment:"#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform float flipEnvMap;\nuniform int combine;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nuniform bool useRefract;\nuniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",
envmap_fragment:"#ifdef USE_ENVMAP\nvec3 reflectVec;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nreflectVec = refract( cameraToVertex, normal, refractionRatio );\n} else { \nreflectVec = reflect( cameraToVertex, normal );\n}\n#else\nreflectVec = vReflect;\n#endif\n#ifdef DOUBLE_SIDED\nfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\nvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#else\nvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#endif\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\nif ( combine == 1 ) {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n} else {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n}\n#endif",
envmap_pars_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n#ifdef USE_SKINNING\nvec4 mPosition = modelMatrix * skinned;\n#endif\n#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 mPosition = modelMatrix * vec4( morphed, 1.0 );\n#endif\n#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 mPosition = modelMatrix * vec4( position, 1.0 );\n#endif\n#endif",
envmap_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvec3 nWorld = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\nif ( useRefract ) {\nvReflect = refract( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ), refractionRatio );\n} else {\nvReflect = reflect( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ) );\n}\n#endif",map_particle_pars_fragment:"#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_particle_fragment:"#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n#endif",map_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",map_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",map_fragment:"#ifdef USE_MAP\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( map, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( map, vUv );\n#endif\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",
lightmap_pars_vertex:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",lightmap_fragment:"#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",lightmap_vertex:"#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;\nuniform float bumpScale;\nvec2 dHdxy_fwd() {\nvec2 dSTdx = dFdx( vUv );\nvec2 dSTdy = dFdy( vUv );\nfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\nfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\nfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\nreturn vec2( dBx, dBy );\n}\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\nvec3 vSigmaX = dFdx( surf_pos );\nvec3 vSigmaY = dFdy( surf_pos );\nvec3 vN = surf_norm;\nvec3 R1 = cross( vSigmaY, vN );\nvec3 R2 = cross( vN, vSigmaX );\nfloat fDet = dot( vSigmaX, R1 );\nvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\nreturn normalize( abs( fDet ) * surf_norm - vGrad );\n}\n#endif",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;\nuniform vec2 normalScale;\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\nvec3 q0 = dFdx( eye_pos.xyz );\nvec3 q1 = dFdy( eye_pos.xyz );\nvec2 st0 = dFdx( vUv.st );\nvec2 st1 = dFdy( vUv.st );\nvec3 S = normalize(  q0 * st1.t - q1 * st0.t );\nvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\nvec3 N = normalize( surf_norm );\nvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\nmapN.xy = normalScale * mapN.xy;\nmat3 tsn = mat3( S, T, N );\nreturn normalize( tsn * mapN );\n}\n#endif",
specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular = texture2D( specularMap, vUv );\nspecularStrength = texelSpecular.r;\n#else\nspecularStrength = 1.0;\n#endif",lights_lambert_pars_vertex:"uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightPosition[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngle[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif",
lights_lambert_vertex:"vLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\nvLightBack = vec3( 0.0 );\n#endif\ntransformedNormal = normalize( transformedNormal );\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, dirVector );\nvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\ndirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\ndirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n#ifdef DOUBLE_SIDED\nvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n#endif\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\npointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\npointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef DOUBLE_SIDED\nvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nlVector = normalize( lVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - mPosition.xyz ) );\nif ( spotEffect > spotLightAngle[ i ] ) {\nspotEffect = pow( spotEffect, spotLightExponent[ i ] );\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\nspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\nspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n#ifdef DOUBLE_SIDED\nvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( hemisphereLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\nvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n#ifdef DOUBLE_SIDED\nvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n#endif\n}\n#endif\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n#ifdef DOUBLE_SIDED\nvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n#endif",
lights_phong_pars_vertex:"#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif",
lights_phong_vertex:"#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nvSpotLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvWorldPosition = mPosition.xyz;\n#endif",
lights_phong_pars_fragment:"uniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightPosition[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#else\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngle[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#else\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
lights_phong_fragment:"vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#ifdef DOUBLE_SIDED\nnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n#endif\n#ifdef USE_NORMALMAP\nnormal = perturbNormal2Arb( -viewPosition, normal );\n#elif defined( USE_BUMPMAP )\nnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vPointLight[ i ].xyz );\nfloat lDistance = vPointLight[ i ].w;\n#endif\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n#endif\npointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\nvec3 pointHalfVector = normalize( lVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n#else\npointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse  = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vSpotLight[ i ].xyz );\nfloat lDistance = vSpotLight[ i ].w;\n#endif\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngle[ i ] ) {\nspotEffect = pow( spotEffect, spotLightExponent[ i ] );\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n#endif\nspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\nvec3 spotHalfVector = normalize( lVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse  = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, dirVector );\n#ifdef WRAP_AROUND\nfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n#endif\ndirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( hemisphereLightPosition[ i ], 1.0 );\nvec3 lVector = normalize( lPosition.xyz + vViewPosition.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = normalize( -lPosition.xyz + vViewPosition.xyz );\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += specular * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif",
color_pars_fragment:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_fragment:"#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",color_pars_vertex:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n#ifdef GAMMA_INPUT\nvColor = color * color;\n#else\nvColor = color;\n#endif\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n#ifdef BONE_TEXTURE\nuniform sampler2D boneTexture;\nmat4 getBoneMatrix( const in float i ) {\nfloat j = i * 4.0;\nfloat x = mod( j, N_BONE_PIXEL_X );\nfloat y = floor( j / N_BONE_PIXEL_X );\nconst float dx = 1.0 / N_BONE_PIXEL_X;\nconst float dy = 1.0 / N_BONE_PIXEL_Y;\ny = dy * ( y + 0.5 );\nvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\nvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\nvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\nvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\nmat4 bone = mat4( v1, v2, v3, v4 );\nreturn bone;\n}\n#else\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\nmat4 getBoneMatrix( const in float i ) {\nmat4 bone = boneGlobalMatrices[ int(i) ];\nreturn bone;\n}\n#endif\n#endif",
skinbase_vertex:"#ifdef USE_SKINNING\nmat4 boneMatX = getBoneMatrix( skinIndex.x );\nmat4 boneMatY = getBoneMatrix( skinIndex.y );\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n#ifdef USE_MORPHTARGETS\nvec4 skinVertex = vec4( morphed, 1.0 );\n#else\nvec4 skinVertex = vec4( position, 1.0 );\n#endif\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[ 8 ];\n#else\nuniform float morphTargetInfluences[ 4 ];\n#endif\n#endif",
morphtarget_vertex:"#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n#ifndef USE_MORPHNORMALS\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n#endif\nmorphed += position;\n#endif",
default_vertex:"vec4 mvPosition;\n#ifdef USE_SKINNING\nmvPosition = modelViewMatrix * skinned;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( position, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\nvec3 morphedNormal = vec3( 0.0 );\nmorphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\nmorphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\nmorphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\nmorphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\nmorphedNormal += normal;\n#endif",
skinnormal_vertex:"#ifdef USE_SKINNING\nmat4 skinMatrix = skinWeight.x * boneMatX;\nskinMatrix \t+= skinWeight.y * boneMatY;\n#ifdef USE_MORPHNORMALS\nvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n#else\nvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n#endif\n#endif",defaultnormal_vertex:"vec3 objectNormal;\n#ifdef USE_SKINNING\nobjectNormal = skinnedNormal.xyz;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\nobjectNormal = morphedNormal;\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\nobjectNormal = normal;\n#endif\n#ifdef FLIP_SIDED\nobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;",
shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform vec2 shadowMapSize[ MAX_SHADOWS ];\nuniform float shadowDarkness[ MAX_SHADOWS ];\nuniform float shadowBias[ MAX_SHADOWS ];\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",shadowmap_fragment:"#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_DEBUG\nvec3 frustumColors[3];\nfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\nfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\nfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n#endif\n#ifdef SHADOWMAP_CASCADE\nint inFrustumCount = 0;\n#endif\nfloat fDepth;\nvec3 shadowColor = vec3( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\nbool inFrustum = all( inFrustumVec );\n#ifdef SHADOWMAP_CASCADE\ninFrustumCount += int( inFrustum );\nbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n#else\nbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n#endif\nbool frustumTest = all( frustumTestVec );\nif ( frustumTest ) {\nshadowCoord.z += shadowBias[ i ];\n#ifdef SHADOWMAP_SOFT\nfloat shadow = 0.0;\nconst float shadowDelta = 1.0 / 9.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.25 * xPixelOffset;\nfloat dy0 = -1.25 * yPixelOffset;\nfloat dx1 = 1.25 * xPixelOffset;\nfloat dy1 = 1.25 * yPixelOffset;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n#endif\n}\n#ifdef SHADOWMAP_DEBUG\n#ifdef SHADOWMAP_CASCADE\nif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n#else\nif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n#endif\n#endif\n}\n#ifdef GAMMA_OUTPUT\nshadowColor *= shadowColor;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n#endif",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",shadowmap_vertex:"#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * mPosition;\n}\n#endif",alphatest_fragment:"#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif",linear_to_gamma_fragment:"#ifdef GAMMA_OUTPUT\ngl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n#endif"};
THREE.UniformsUtils={merge:function(a){var b,c,d,e={};for(b=0;b<a.length;b++)for(c in d=this.clone(a[b]),d)e[c]=d[c];return e},clone:function(a){var b,c,d,e={};for(b in a)for(c in e[b]={},a[b])d=a[b][c],e[b][c]=d instanceof THREE.Color||d instanceof THREE.Vector2||d instanceof THREE.Vector3||d instanceof THREE.Vector4||d instanceof THREE.Matrix4||d instanceof THREE.Texture?d.clone():d instanceof Array?d.slice():d;return e}};
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},useRefract:{type:"i",value:0},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:0.98},combine:{type:"i",value:0},morphTargetInfluences:{type:"f",value:0}},bump:{bumpMap:{type:"t",
value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightPosition:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",
value:[]},hemisphereLightGroundColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngle:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",
value:1},scale:{type:"f",value:1},map:{type:"t",value:null},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};
THREE.ShaderLib={depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",value:1}},vertexShader:"void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}"},normal:{uniforms:{opacity:{type:"f",
value:1}},vertexShader:"varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalMatrix * normal;\ngl_Position = projectionMatrix * mvPosition;\n}",fragmentShader:"uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}"},basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.map_pars_vertex,
THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,"#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,
"#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,
THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,
THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,
THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,
THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,
"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"#ifdef DOUBLE_SIDED\nif ( gl_FrontFacing )\ngl_FragColor.xyz *= vLightFront;\nelse\ngl_FragColor.xyz *= vLightBack;\n#else\ngl_FragColor.xyz *= vLightFront;\n#endif",THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,
THREE.ShaderChunk.fog_fragment,"}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,
THREE.ShaderChunk.defaultnormal_vertex,"vNormal = transformedNormal;",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,"vViewPosition = -mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;",
THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,
THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.color_pars_vertex,
THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,
THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,"void main() {\ngl_FragColor = vec4( psColor, opacity );",THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,"void main() {",
THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n"),fragmentShader:"vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}"}};
THREE.WebGLRenderer=function(a){function b(a,b){var c=a.vertices.length,d=b.material;if(d.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var e in d.attributes){var f=d.attributes[e];if(!f.__webglInitialized||f.createUniqueBuffers){f.__webglInitialized=!0;var g=1;"v2"===f.type?g=2:"v3"===f.type?g=3:"v4"===f.type?g=4:"c"===f.type&&(g=3);f.size=g;f.array=new Float32Array(c*g);f.buffer=k.createBuffer();f.buffer.belongsToAttribute=e;f.needsUpdate=!0}a.__webglCustomAttributesList.push(f)}}}
function c(a,b){if(a.material&&!(a.material instanceof THREE.MeshFaceMaterial))return a.material;if(0<=b.materialIndex)return a.geometry.materials[b.materialIndex]}function d(a){return a instanceof THREE.MeshBasicMaterial&&!a.envMap||a instanceof THREE.MeshDepthMaterial?!1:a&&void 0!==a.shading&&a.shading===THREE.SmoothShading?THREE.SmoothShading:THREE.FlatShading}function e(a){return a.map||a.lightMap||a.bumpMap||a.normalMap||a.specularMap||a instanceof THREE.ShaderMaterial?!0:!1}function f(a){var b,
c,d;for(b in a.attributes)d="index"===b?k.ELEMENT_ARRAY_BUFFER:k.ARRAY_BUFFER,c=a.attributes[b],c.buffer=k.createBuffer(),k.bindBuffer(d,c.buffer),k.bufferData(d,c.array,k.STATIC_DRAW)}function g(a,b,c){var d,e,f,g,h=a.vertices;g=h.length;var i=a.colors,j=i.length,l=a.__vertexArray,n=a.__colorArray,m=a.__sortArray,o=a.verticesNeedUpdate,p=a.colorsNeedUpdate,q=a.__webglCustomAttributesList;if(c.sortParticles){gb.copy(ra);gb.multiplySelf(c.matrixWorld);for(d=0;d<g;d++)e=h[d],Za.copy(e),gb.multiplyVector3(Za),
m[d]=[Za.z,d];m.sort(function(a,b){return b[0]-a[0]});for(d=0;d<g;d++)e=h[m[d][1]],f=3*d,l[f]=e.x,l[f+1]=e.y,l[f+2]=e.z;for(d=0;d<j;d++)f=3*d,e=i[m[d][1]],n[f]=e.r,n[f+1]=e.g,n[f+2]=e.b;if(q){i=0;for(j=q.length;i<j;i++)if(h=q[i],void 0===h.boundTo||"vertices"===h.boundTo)if(f=0,e=h.value.length,1===h.size)for(d=0;d<e;d++)g=m[d][1],h.array[d]=h.value[g];else if(2===h.size)for(d=0;d<e;d++)g=m[d][1],g=h.value[g],h.array[f]=g.x,h.array[f+1]=g.y,f+=2;else if(3===h.size)if("c"===h.type)for(d=0;d<e;d++)g=
m[d][1],g=h.value[g],h.array[f]=g.r,h.array[f+1]=g.g,h.array[f+2]=g.b,f+=3;else for(d=0;d<e;d++)g=m[d][1],g=h.value[g],h.array[f]=g.x,h.array[f+1]=g.y,h.array[f+2]=g.z,f+=3;else if(4===h.size)for(d=0;d<e;d++)g=m[d][1],g=h.value[g],h.array[f]=g.x,h.array[f+1]=g.y,h.array[f+2]=g.z,h.array[f+3]=g.w,f+=4}}else{if(o)for(d=0;d<g;d++)e=h[d],f=3*d,l[f]=e.x,l[f+1]=e.y,l[f+2]=e.z;if(p)for(d=0;d<j;d++)e=i[d],f=3*d,n[f]=e.r,n[f+1]=e.g,n[f+2]=e.b;if(q){i=0;for(j=q.length;i<j;i++)if(h=q[i],h.needsUpdate&&(void 0===
h.boundTo||"vertices"===h.boundTo))if(e=h.value.length,f=0,1===h.size)for(d=0;d<e;d++)h.array[d]=h.value[d];else if(2===h.size)for(d=0;d<e;d++)g=h.value[d],h.array[f]=g.x,h.array[f+1]=g.y,f+=2;else if(3===h.size)if("c"===h.type)for(d=0;d<e;d++)g=h.value[d],h.array[f]=g.r,h.array[f+1]=g.g,h.array[f+2]=g.b,f+=3;else for(d=0;d<e;d++)g=h.value[d],h.array[f]=g.x,h.array[f+1]=g.y,h.array[f+2]=g.z,f+=3;else if(4===h.size)for(d=0;d<e;d++)g=h.value[d],h.array[f]=g.x,h.array[f+1]=g.y,h.array[f+2]=g.z,h.array[f+
3]=g.w,f+=4}}if(o||c.sortParticles)k.bindBuffer(k.ARRAY_BUFFER,a.__webglVertexBuffer),k.bufferData(k.ARRAY_BUFFER,l,b);if(p||c.sortParticles)k.bindBuffer(k.ARRAY_BUFFER,a.__webglColorBuffer),k.bufferData(k.ARRAY_BUFFER,n,b);if(q){i=0;for(j=q.length;i<j;i++)if(h=q[i],h.needsUpdate||c.sortParticles)k.bindBuffer(k.ARRAY_BUFFER,h.buffer),k.bufferData(k.ARRAY_BUFFER,h.array,b)}}function h(a,b,c){var d=a.attributes,f=d.index,e=d.position,g=d.normal,h=d.uv,i=d.color,d=d.tangent;a.elementsNeedUpdate&&void 0!==
f&&(k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,f.buffer),k.bufferData(k.ELEMENT_ARRAY_BUFFER,f.array,b));a.verticesNeedUpdate&&void 0!==e&&(k.bindBuffer(k.ARRAY_BUFFER,e.buffer),k.bufferData(k.ARRAY_BUFFER,e.array,b));a.normalsNeedUpdate&&void 0!==g&&(k.bindBuffer(k.ARRAY_BUFFER,g.buffer),k.bufferData(k.ARRAY_BUFFER,g.array,b));a.uvsNeedUpdate&&void 0!==h&&(k.bindBuffer(k.ARRAY_BUFFER,h.buffer),k.bufferData(k.ARRAY_BUFFER,h.array,b));a.colorsNeedUpdate&&void 0!==i&&(k.bindBuffer(k.ARRAY_BUFFER,i.buffer),
k.bufferData(k.ARRAY_BUFFER,i.array,b));a.tangentsNeedUpdate&&void 0!==d&&(k.bindBuffer(k.ARRAY_BUFFER,d.buffer),k.bufferData(k.ARRAY_BUFFER,d.array,b));if(c)for(var j in a.attributes)delete a.attributes[j].array}function i(a,b){return b.z-a.z}function j(a,b){return b[1]-a[1]}function l(a,b,c){if(a.length)for(var d=0,f=a.length;d<f;d++)ia=O=null,W=V=Pa=Ga=Ra=ib=Ia=-1,Ea=!0,a[d].render(b,c,Da,qb),ia=O=null,W=V=Pa=Ga=Ra=ib=Ia=-1,Ea=!0}function m(a,b,c,d,f,e,g,h){var k,i,j,l;b?(i=a.length-1,l=b=-1):
(i=0,b=a.length,l=1);for(var n=i;n!==b;n+=l)if(k=a[n],k.render){i=k.object;j=k.buffer;if(h)k=h;else{k=k[c];if(!k)continue;g&&Q.setBlending(k.blending,k.blendEquation,k.blendSrc,k.blendDst);Q.setDepthTest(k.depthTest);Q.setDepthWrite(k.depthWrite);v(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits)}Q.setMaterialFaces(k);j instanceof THREE.BufferGeometry?Q.renderBufferDirect(d,f,e,k,j,i):Q.renderBuffer(d,f,e,k,j,i)}}function n(a,b,c,d,f,e,g){for(var h,k,i=0,j=a.length;i<j;i++)if(h=a[i],k=
h.object,k.visible){if(g)h=g;else{h=h[b];if(!h)continue;e&&Q.setBlending(h.blending,h.blendEquation,h.blendSrc,h.blendDst);Q.setDepthTest(h.depthTest);Q.setDepthWrite(h.depthWrite);v(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits)}Q.renderImmediateObject(c,d,f,h,k)}}function p(a,b,c){a.push({buffer:b,object:c,opaque:null,transparent:null})}function o(a){for(var b in a.attributes)if(a.attributes[b].needsUpdate)return!0;return!1}function q(a){for(var b in a.attributes)a.attributes[b].needsUpdate=
!1}function r(a,b){for(var c=a.length-1;0<=c;c--)a[c].object===b&&a.splice(c,1)}function t(a,b){for(var c=a.length-1;0<=c;c--)a[c]===b&&a.splice(c,1)}function B(a,b,c,d,f){ca=0;d.needsUpdate&&(d.program&&Q.deallocateMaterial(d),Q.initMaterial(d,b,c,f),d.needsUpdate=!1);d.morphTargets&&!f.__webglMorphTargetInfluences&&(f.__webglMorphTargetInfluences=new Float32Array(Q.maxMorphTargets));var e=!1,g=d.program,h=g.uniforms,i=d.uniforms;g!==O&&(k.useProgram(g),O=g,e=!0);d.id!==W&&(W=d.id,e=!0);if(e||a!==
ia)k.uniformMatrix4fv(h.projectionMatrix,!1,a._projectionMatrixArray),a!==ia&&(ia=a);if(d.skinning)if(ic&&f.useVertexTexture){if(null!==h.boneTexture){var j=u();k.uniform1i(h.boneTexture,j);Q.setTexture(f.boneTexture,j)}}else null!==h.boneGlobalMatrices&&k.uniformMatrix4fv(h.boneGlobalMatrices,!1,f.boneMatrices);if(e){c&&d.fog&&(i.fogColor.value=c.color,c instanceof THREE.Fog?(i.fogNear.value=c.near,i.fogFar.value=c.far):c instanceof THREE.FogExp2&&(i.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||
d instanceof THREE.MeshLambertMaterial||d.lights){if(Ea){for(var l=0,n=0,m=0,o,p,q,r,s=xb,t=s.directional.colors,v=s.directional.positions,y=s.point.colors,B=s.point.positions,C=s.point.distances,H=s.spot.colors,J=s.spot.positions,I=s.spot.distances,K=s.spot.directions,F=s.spot.angles,L=s.spot.exponents,N=s.hemi.skyColors,V=s.hemi.groundColors,Z=s.hemi.positions,fa=0,R=0,ea=0,$=0,c=o=q=q=p=0,e=b.length;c<e;c++)j=b[c],!j.onlyShadow&&j.visible&&(o=j.color,r=j.intensity,p=j.distance,j instanceof THREE.AmbientLight?
Q.gammaInput?(l+=o.r*o.r,n+=o.g*o.g,m+=o.b*o.b):(l+=o.r,n+=o.g,m+=o.b):j instanceof THREE.DirectionalLight?(p=3*fa,Q.gammaInput?z(t,p,o,r*r):A(t,p,o,r),Wa.copy(j.matrixWorld.getPosition()),Wa.subSelf(j.target.matrixWorld.getPosition()),Wa.normalize(),v[p]=Wa.x,v[p+1]=Wa.y,v[p+2]=Wa.z,fa+=1):j instanceof THREE.PointLight?(q=3*R,Q.gammaInput?z(y,q,o,r*r):A(y,q,o,r),r=j.matrixWorld.getPosition(),B[q]=r.x,B[q+1]=r.y,B[q+2]=r.z,C[R]=p,R+=1):j instanceof THREE.SpotLight?(q=3*ea,Q.gammaInput?z(H,q,o,r*r):
A(H,q,o,r),r=j.matrixWorld.getPosition(),J[q]=r.x,J[q+1]=r.y,J[q+2]=r.z,I[ea]=p,Wa.copy(r),Wa.subSelf(j.target.matrixWorld.getPosition()),Wa.normalize(),K[q]=Wa.x,K[q+1]=Wa.y,K[q+2]=Wa.z,F[ea]=Math.cos(j.angle),L[ea]=j.exponent,ea+=1):j instanceof THREE.HemisphereLight&&(p=j.color,q=j.groundColor,o=3*$,Q.gammaInput?(r*=r,z(N,o,p,r),z(V,o,q,r)):(A(N,o,p,r),A(V,o,q,r)),r=j.matrixWorld.getPosition(),Z[o]=r.x,Z[o+1]=r.y,Z[o+2]=r.z,$+=1));c=3*fa;for(e=t.length;c<e;c++)t[c]=0;c=3*R;for(e=y.length;c<e;c++)y[c]=
0;c=3*ea;for(e=H.length;c<e;c++)H[c]=0;c=3*$;for(e=N.length;c<e;c++)N[c]=0;c=3*$;for(e=V.length;c<e;c++)V[c]=0;s.directional.length=fa;s.point.length=R;s.spot.length=ea;s.hemi.length=$;s.ambient[0]=l;s.ambient[1]=n;s.ambient[2]=m;Ea=!1}c=xb;i.ambientLightColor.value=c.ambient;i.directionalLightColor.value=c.directional.colors;i.directionalLightDirection.value=c.directional.positions;i.pointLightColor.value=c.point.colors;i.pointLightPosition.value=c.point.positions;i.pointLightDistance.value=c.point.distances;
i.spotLightColor.value=c.spot.colors;i.spotLightPosition.value=c.spot.positions;i.spotLightDistance.value=c.spot.distances;i.spotLightDirection.value=c.spot.directions;i.spotLightAngle.value=c.spot.angles;i.spotLightExponent.value=c.spot.exponents;i.hemisphereLightSkyColor.value=c.hemi.skyColors;i.hemisphereLightGroundColor.value=c.hemi.groundColors;i.hemisphereLightPosition.value=c.hemi.positions}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){i.opacity.value=
d.opacity;Q.gammaInput?i.diffuse.value.copyGammaToLinear(d.color):i.diffuse.value=d.color;i.map.value=d.map;i.lightMap.value=d.lightMap;i.specularMap.value=d.specularMap;d.bumpMap&&(i.bumpMap.value=d.bumpMap,i.bumpScale.value=d.bumpScale);d.normalMap&&(i.normalMap.value=d.normalMap,i.normalScale.value.copy(d.normalScale));var Y;d.map?Y=d.map:d.specularMap?Y=d.specularMap:d.normalMap?Y=d.normalMap:d.bumpMap&&(Y=d.bumpMap);void 0!==Y&&(c=Y.offset,Y=Y.repeat,i.offsetRepeat.value.set(c.x,c.y,Y.x,Y.y));
i.envMap.value=d.envMap;i.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?1:-1;i.reflectivity.value=d.reflectivity;i.refractionRatio.value=d.refractionRatio;i.combine.value=d.combine;i.useRefract.value=d.envMap&&d.envMap.mapping instanceof THREE.CubeRefractionMapping}d instanceof THREE.LineBasicMaterial?(i.diffuse.value=d.color,i.opacity.value=d.opacity):d instanceof THREE.ParticleBasicMaterial?(i.psColor.value=d.color,i.opacity.value=d.opacity,i.size.value=d.size,i.scale.value=M.height/
2,i.map.value=d.map):d instanceof THREE.MeshPhongMaterial?(i.shininess.value=d.shininess,Q.gammaInput?(i.ambient.value.copyGammaToLinear(d.ambient),i.emissive.value.copyGammaToLinear(d.emissive),i.specular.value.copyGammaToLinear(d.specular)):(i.ambient.value=d.ambient,i.emissive.value=d.emissive,i.specular.value=d.specular),d.wrapAround&&i.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshLambertMaterial?(Q.gammaInput?(i.ambient.value.copyGammaToLinear(d.ambient),i.emissive.value.copyGammaToLinear(d.emissive)):
(i.ambient.value=d.ambient,i.emissive.value=d.emissive),d.wrapAround&&i.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshDepthMaterial?(i.mNear.value=a.near,i.mFar.value=a.far,i.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(i.opacity.value=d.opacity);if(f.receiveShadow&&!d._shadowPass&&i.shadowMatrix){c=Y=0;for(e=b.length;c<e;c++)if(j=b[c],j.castShadow&&(j instanceof THREE.SpotLight||j instanceof THREE.DirectionalLight&&!j.shadowCascade))i.shadowMap.value[Y]=j.shadowMap,i.shadowMapSize.value[Y]=
j.shadowMapSize,i.shadowMatrix.value[Y]=j.shadowMatrix,i.shadowDarkness.value[Y]=j.shadowDarkness,i.shadowBias.value[Y]=j.shadowBias,Y++}b=d.uniformsList;i=0;for(Y=b.length;i<Y;i++)if(e=g.uniforms[b[i][1]])if(c=b[i][0],l=c.type,j=c.value,"i"===l)k.uniform1i(e,j);else if("f"===l)k.uniform1f(e,j);else if("v2"===l)k.uniform2f(e,j.x,j.y);else if("v3"===l)k.uniform3f(e,j.x,j.y,j.z);else if("v4"===l)k.uniform4f(e,j.x,j.y,j.z,j.w);else if("c"===l)k.uniform3f(e,j.r,j.g,j.b);else if("iv1"===l)k.uniform1iv(e,
j);else if("iv"===l)k.uniform3iv(e,j);else if("fv1"===l)k.uniform1fv(e,j);else if("fv"===l)k.uniform3fv(e,j);else if("v2v"===l){void 0===c._array&&(c._array=new Float32Array(2*j.length));l=0;for(n=j.length;l<n;l++)m=2*l,c._array[m]=j[l].x,c._array[m+1]=j[l].y;k.uniform2fv(e,c._array)}else if("v3v"===l){void 0===c._array&&(c._array=new Float32Array(3*j.length));l=0;for(n=j.length;l<n;l++)m=3*l,c._array[m]=j[l].x,c._array[m+1]=j[l].y,c._array[m+2]=j[l].z;k.uniform3fv(e,c._array)}else if("v4v"===l){void 0===
c._array&&(c._array=new Float32Array(4*j.length));l=0;for(n=j.length;l<n;l++)m=4*l,c._array[m]=j[l].x,c._array[m+1]=j[l].y,c._array[m+2]=j[l].z,c._array[m+3]=j[l].w;k.uniform4fv(e,c._array)}else if("m4"===l)void 0===c._array&&(c._array=new Float32Array(16)),j.flattenToArray(c._array),k.uniformMatrix4fv(e,!1,c._array);else if("m4v"===l){void 0===c._array&&(c._array=new Float32Array(16*j.length));l=0;for(n=j.length;l<n;l++)j[l].flattenToArrayOffset(c._array,16*l);k.uniformMatrix4fv(e,!1,c._array)}else if("t"===
l){if(m=j,j=u(),k.uniform1i(e,j),m)if(m.image instanceof Array&&6===m.image.length){if(c=m,e=j,6===c.image.length)if(c.needsUpdate){c.image.__webglTextureCube||(c.image.__webglTextureCube=k.createTexture());k.activeTexture(k.TEXTURE0+e);k.bindTexture(k.TEXTURE_CUBE_MAP,c.image.__webglTextureCube);k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,c.flipY);e=c instanceof THREE.CompressedTexture;j=[];for(l=0;6>l;l++)Q.autoScaleCubemaps&&!e?(n=j,m=l,s=c.image[l],v=Tc,s.width<=v&&s.height<=v||(y=Math.max(s.width,s.height),
t=Math.floor(s.width*v/y),v=Math.floor(s.height*v/y),y=document.createElement("canvas"),y.width=t,y.height=v,y.getContext("2d").drawImage(s,0,0,s.width,s.height,0,0,t,v),s=y),n[m]=s):j[l]=c.image[l];l=j[0];n=0===(l.width&l.width-1)&&0===(l.height&l.height-1);m=E(c.format);s=E(c.type);G(k.TEXTURE_CUBE_MAP,c,n);for(l=0;6>l;l++)if(e){v=j[l].mipmaps;y=0;for(B=v.length;y<B;y++)t=v[y],k.compressedTexImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X+l,y,m,t.width,t.height,0,t.data)}else k.texImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X+
l,0,m,m,s,j[l]);c.generateMipmaps&&n&&k.generateMipmap(k.TEXTURE_CUBE_MAP);c.needsUpdate=!1;if(c.onUpdate)c.onUpdate()}else k.activeTexture(k.TEXTURE0+e),k.bindTexture(k.TEXTURE_CUBE_MAP,c.image.__webglTextureCube)}else m instanceof THREE.WebGLRenderTargetCube?(c=m,k.activeTexture(k.TEXTURE0+j),k.bindTexture(k.TEXTURE_CUBE_MAP,c.__webglTexture)):Q.setTexture(m,j)}else if("tv"===l){void 0===c._array&&(c._array=[]);l=0;for(n=c.value.length;l<n;l++)c._array[l]=u();k.uniform1iv(e,c._array);l=0;for(n=
c.value.length;l<n;l++)m=c.value[l],j=c._array[l],m&&Q.setTexture(m,j)}if((d instanceof THREE.ShaderMaterial||d instanceof THREE.MeshPhongMaterial||d.envMap)&&null!==h.cameraPosition)b=a.matrixWorld.getPosition(),k.uniform3f(h.cameraPosition,b.x,b.y,b.z);(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.ShaderMaterial||d.skinning)&&null!==h.viewMatrix&&k.uniformMatrix4fv(h.viewMatrix,!1,a._viewMatrixArray)}k.uniformMatrix4fv(h.modelViewMatrix,!1,f._modelViewMatrix.elements);
h.normalMatrix&&k.uniformMatrix3fv(h.normalMatrix,!1,f._normalMatrix.elements);null!==h.modelMatrix&&k.uniformMatrix4fv(h.modelMatrix,!1,f.matrixWorld.elements);return g}function u(){var a=ca;a>=rc&&console.warn("Trying to use "+a+" texture units while this GPU supports only "+rc);ca+=1;return a}function s(a,b){a._modelViewMatrix.multiply(b.matrixWorldInverse,a.matrixWorld);a._normalMatrix.getInverse(a._modelViewMatrix);a._normalMatrix.transpose()}function z(a,b,c,d){a[b]=c.r*c.r*d;a[b+1]=c.g*c.g*
d;a[b+2]=c.b*c.b*d}function A(a,b,c,d){a[b]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function v(a,b,c){eb!==a&&(a?k.enable(k.POLYGON_OFFSET_FILL):k.disable(k.POLYGON_OFFSET_FILL),eb=a);if(a&&(pb!==b||Pb!==c))k.polygonOffset(b,c),pb=b,Pb=c}function y(a){for(var a=a.split("\n"),b=0,c=a.length;b<c;b++)a[b]=b+1+": "+a[b];return a.join("\n")}function C(a,b){var c;"fragment"===a?c=k.createShader(k.FRAGMENT_SHADER):"vertex"===a&&(c=k.createShader(k.VERTEX_SHADER));k.shaderSource(c,b);k.compileShader(c);return!k.getShaderParameter(c,
k.COMPILE_STATUS)?(console.error(k.getShaderInfoLog(c)),console.error(y(b)),null):c}function G(a,b,c){c?(k.texParameteri(a,k.TEXTURE_WRAP_S,E(b.wrapS)),k.texParameteri(a,k.TEXTURE_WRAP_T,E(b.wrapT)),k.texParameteri(a,k.TEXTURE_MAG_FILTER,E(b.magFilter)),k.texParameteri(a,k.TEXTURE_MIN_FILTER,E(b.minFilter))):(k.texParameteri(a,k.TEXTURE_WRAP_S,k.CLAMP_TO_EDGE),k.texParameteri(a,k.TEXTURE_WRAP_T,k.CLAMP_TO_EDGE),k.texParameteri(a,k.TEXTURE_MAG_FILTER,J(b.magFilter)),k.texParameteri(a,k.TEXTURE_MIN_FILTER,
J(b.minFilter)));if(Qb&&b.type!==THREE.FloatType&&(1<b.anisotropy||b.__oldAnisotropy))k.texParameterf(a,Qb.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,Ec)),b.__oldAnisotropy=b.anisotropy}function H(a,b){k.bindRenderbuffer(k.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?(k.renderbufferStorage(k.RENDERBUFFER,k.DEPTH_COMPONENT16,b.width,b.height),k.framebufferRenderbuffer(k.FRAMEBUFFER,k.DEPTH_ATTACHMENT,k.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(k.renderbufferStorage(k.RENDERBUFFER,k.DEPTH_STENCIL,
b.width,b.height),k.framebufferRenderbuffer(k.FRAMEBUFFER,k.DEPTH_STENCIL_ATTACHMENT,k.RENDERBUFFER,a)):k.renderbufferStorage(k.RENDERBUFFER,k.RGBA4,b.width,b.height)}function J(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?k.NEAREST:k.LINEAR}function E(a){if(a===THREE.RepeatWrapping)return k.REPEAT;if(a===THREE.ClampToEdgeWrapping)return k.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return k.MIRRORED_REPEAT;if(a===THREE.NearestFilter)return k.NEAREST;
if(a===THREE.NearestMipMapNearestFilter)return k.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return k.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return k.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return k.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return k.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return k.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return k.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return k.UNSIGNED_SHORT_5_5_5_1;
if(a===THREE.UnsignedShort565Type)return k.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return k.BYTE;if(a===THREE.ShortType)return k.SHORT;if(a===THREE.UnsignedShortType)return k.UNSIGNED_SHORT;if(a===THREE.IntType)return k.INT;if(a===THREE.UnsignedIntType)return k.UNSIGNED_INT;if(a===THREE.FloatType)return k.FLOAT;if(a===THREE.AlphaFormat)return k.ALPHA;if(a===THREE.RGBFormat)return k.RGB;if(a===THREE.RGBAFormat)return k.RGBA;if(a===THREE.LuminanceFormat)return k.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return k.LUMINANCE_ALPHA;
if(a===THREE.AddEquation)return k.FUNC_ADD;if(a===THREE.SubtractEquation)return k.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return k.FUNC_REVERSE_SUBTRACT;if(a===THREE.ZeroFactor)return k.ZERO;if(a===THREE.OneFactor)return k.ONE;if(a===THREE.SrcColorFactor)return k.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return k.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return k.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return k.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return k.DST_ALPHA;
if(a===THREE.OneMinusDstAlphaFactor)return k.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return k.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return k.ONE_MINUS_DST_COLOR;if(a===THREE.SrcAlphaSaturateFactor)return k.SRC_ALPHA_SATURATE;if(void 0!==yb){if(a===THREE.RGB_S3TC_DXT1_Format)return yb.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return yb.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return yb.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return yb.COMPRESSED_RGBA_S3TC_DXT5_EXT}return 0}
console.log("THREE.WebGLRenderer",THREE.REVISION);var a=a||{},M=void 0!==a.canvas?a.canvas:document.createElement("canvas"),K=void 0!==a.precision?a.precision:"highp",F=void 0!==a.alpha?a.alpha:!0,I=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,L=void 0!==a.antialias?a.antialias:!1,R=void 0!==a.stencil?a.stencil:!0,$=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,Y=void 0!==a.clearColor?new THREE.Color(a.clearColor):new THREE.Color(0),N=void 0!==a.clearAlpha?a.clearAlpha:0,ea=
void 0!==a.maxLights?a.maxLights:4;this.domElement=M;this.context=null;this.autoUpdateScene=this.autoUpdateObjects=this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.shadowMapEnabled=this.physicallyBasedShading=this.gammaOutput=this.gammaInput=!1;this.shadowMapCullFrontFaces=this.shadowMapSoft=this.shadowMapAutoUpdate=!0;this.shadowMapCascade=this.shadowMapDebug=!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;this.renderPluginsPre=
[];this.renderPluginsPost=[];this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var Q=this,qa=[],la=0,O=null,fa=null,W=-1,V=null,ia=null,Z=0,ca=0,Ga=-1,Pa=-1,Ia=-1,Ua=-1,na=-1,Va=-1,ib=-1,Ra=-1,eb=null,pb=null,Pb=null,db=null,$a=0,Ja=0,wa=0,wb=0,Da=0,qb=0,fb=new THREE.Frustum,ra=new THREE.Matrix4,gb=new THREE.Matrix4,Za=new THREE.Vector4,Wa=new THREE.Vector3,Ea=!0,xb={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],
positions:[],distances:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],angles:[],exponents:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},k,Qb,yb;try{if(!(k=M.getContext("experimental-webgl",{alpha:F,premultipliedAlpha:I,antialias:L,stencil:R,preserveDrawingBuffer:$})))throw"Error creating WebGL context.";}catch(Sc){console.error(Sc)}a=k.getExtension("OES_texture_float");F=k.getExtension("OES_standard_derivatives");Qb=k.getExtension("EXT_texture_filter_anisotropic")||
k.getExtension("MOZ_EXT_texture_filter_anisotropic")||k.getExtension("WEBKIT_EXT_texture_filter_anisotropic");yb=k.getExtension("WEBGL_compressed_texture_s3tc")||k.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||k.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");a||console.log("THREE.WebGLRenderer: Float textures not supported.");F||console.log("THREE.WebGLRenderer: Standard derivatives not supported.");Qb||console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");yb||
console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");k.clearColor(0,0,0,1);k.clearDepth(1);k.clearStencil(0);k.enable(k.DEPTH_TEST);k.depthFunc(k.LEQUAL);k.frontFace(k.CCW);k.cullFace(k.BACK);k.enable(k.CULL_FACE);k.enable(k.BLEND);k.blendEquation(k.FUNC_ADD);k.blendFunc(k.SRC_ALPHA,k.ONE_MINUS_SRC_ALPHA);k.clearColor(Y.r,Y.g,Y.b,N);this.context=k;var rc=k.getParameter(k.MAX_TEXTURE_IMAGE_UNITS),F=k.getParameter(k.MAX_VERTEX_TEXTURE_IMAGE_UNITS);k.getParameter(k.MAX_TEXTURE_SIZE);
var Tc=k.getParameter(k.MAX_CUBE_MAP_TEXTURE_SIZE),Ec=Qb?k.getParameter(Qb.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0,hc=0<F,ic=hc&&a;yb&&k.getParameter(k.COMPRESSED_TEXTURE_FORMATS);this.getContext=function(){return k};this.supportsVertexTextures=function(){return hc};this.getMaxAnisotropy=function(){return Ec};this.setSize=function(a,b){M.width=a;M.height=b;this.setViewport(0,0,M.width,M.height)};this.setViewport=function(a,b,c,d){$a=void 0!==a?a:0;Ja=void 0!==b?b:0;wa=void 0!==c?c:M.width;wb=void 0!==d?
d:M.height;k.viewport($a,Ja,wa,wb)};this.setScissor=function(a,b,c,d){k.scissor(a,b,c,d)};this.enableScissorTest=function(a){a?k.enable(k.SCISSOR_TEST):k.disable(k.SCISSOR_TEST)};this.setClearColorHex=function(a,b){Y.setHex(a);N=b;k.clearColor(Y.r,Y.g,Y.b,N)};this.setClearColor=function(a,b){Y.copy(a);N=b;k.clearColor(Y.r,Y.g,Y.b,N)};this.getClearColor=function(){return Y};this.getClearAlpha=function(){return N};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=k.COLOR_BUFFER_BIT;if(void 0===
b||b)d|=k.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=k.STENCIL_BUFFER_BIT;k.clear(d)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.addPostPlugin=function(a){a.init(this);this.renderPluginsPost.push(a)};this.addPrePlugin=function(a){a.init(this);this.renderPluginsPre.push(a)};this.deallocateObject=function(a){if(a.__webglInit)if(a.__webglInit=!1,delete a._modelViewMatrix,delete a._normalMatrix,delete a._normalMatrixArray,delete a._modelViewMatrixArray,delete a._modelMatrixArray,
a instanceof THREE.Mesh)for(var b in a.geometry.geometryGroups){var c=a.geometry.geometryGroups[b];k.deleteBuffer(c.__webglVertexBuffer);k.deleteBuffer(c.__webglNormalBuffer);k.deleteBuffer(c.__webglTangentBuffer);k.deleteBuffer(c.__webglColorBuffer);k.deleteBuffer(c.__webglUVBuffer);k.deleteBuffer(c.__webglUV2Buffer);k.deleteBuffer(c.__webglSkinIndicesBuffer);k.deleteBuffer(c.__webglSkinWeightsBuffer);k.deleteBuffer(c.__webglFaceBuffer);k.deleteBuffer(c.__webglLineBuffer);var d=void 0,e=void 0;if(c.numMorphTargets){d=
0;for(e=c.numMorphTargets;d<e;d++)k.deleteBuffer(c.__webglMorphTargetsBuffers[d])}if(c.numMorphNormals){d=0;for(e=c.numMorphNormals;d<e;d++)k.deleteBuffer(c.__webglMorphNormalsBuffers[d])}if(c.__webglCustomAttributesList)for(d in d=void 0,c.__webglCustomAttributesList)k.deleteBuffer(c.__webglCustomAttributesList[d].buffer);Q.info.memory.geometries--}else a instanceof THREE.Ribbon?(a=a.geometry,k.deleteBuffer(a.__webglVertexBuffer),k.deleteBuffer(a.__webglColorBuffer),Q.info.memory.geometries--):a instanceof
THREE.Line?(a=a.geometry,k.deleteBuffer(a.__webglVertexBuffer),k.deleteBuffer(a.__webglColorBuffer),Q.info.memory.geometries--):a instanceof THREE.ParticleSystem&&(a=a.geometry,k.deleteBuffer(a.__webglVertexBuffer),k.deleteBuffer(a.__webglColorBuffer),Q.info.memory.geometries--)};this.deallocateTexture=function(a){a.__webglInit&&(a.__webglInit=!1,k.deleteTexture(a.__webglTexture),Q.info.memory.textures--)};this.deallocateRenderTarget=function(a){if(a&&a.__webglTexture)if(k.deleteTexture(a.__webglTexture),
a instanceof THREE.WebGLRenderTargetCube)for(var b=0;6>b;b++)k.deleteFramebuffer(a.__webglFramebuffer[b]),k.deleteRenderbuffer(a.__webglRenderbuffer[b]);else k.deleteFramebuffer(a.__webglFramebuffer),k.deleteRenderbuffer(a.__webglRenderbuffer)};this.deallocateMaterial=function(a){var b=a.program;if(b){a.program=void 0;var c,d,e=!1,a=0;for(c=qa.length;a<c;a++)if(d=qa[a],d.program===b){d.usedTimes--;0===d.usedTimes&&(e=!0);break}if(e){e=[];a=0;for(c=qa.length;a<c;a++)d=qa[a],d.program!==b&&e.push(d);
qa=e;k.deleteProgram(b);Q.info.memory.programs--}}};this.updateShadowMap=function(a,b){O=null;W=V=Ra=ib=Ia=-1;Ea=!0;Pa=Ga=-1;this.shadowMapPlugin.update(a,b)};this.renderBufferImmediate=function(a,b,c){a.hasPositions&&!a.__webglVertexBuffer&&(a.__webglVertexBuffer=k.createBuffer());a.hasNormals&&!a.__webglNormalBuffer&&(a.__webglNormalBuffer=k.createBuffer());a.hasUvs&&!a.__webglUvBuffer&&(a.__webglUvBuffer=k.createBuffer());a.hasColors&&!a.__webglColorBuffer&&(a.__webglColorBuffer=k.createBuffer());
a.hasPositions&&(k.bindBuffer(k.ARRAY_BUFFER,a.__webglVertexBuffer),k.bufferData(k.ARRAY_BUFFER,a.positionArray,k.DYNAMIC_DRAW),k.enableVertexAttribArray(b.attributes.position),k.vertexAttribPointer(b.attributes.position,3,k.FLOAT,!1,0,0));if(a.hasNormals){k.bindBuffer(k.ARRAY_BUFFER,a.__webglNormalBuffer);if(c.shading===THREE.FlatShading){var d,e,f,g,h,i,j,l,n,m,o,p=3*a.count;for(o=0;o<p;o+=9)m=a.normalArray,d=m[o],e=m[o+1],f=m[o+2],g=m[o+3],i=m[o+4],l=m[o+5],h=m[o+6],j=m[o+7],n=m[o+8],d=(d+g+h)/
3,e=(e+i+j)/3,f=(f+l+n)/3,m[o]=d,m[o+1]=e,m[o+2]=f,m[o+3]=d,m[o+4]=e,m[o+5]=f,m[o+6]=d,m[o+7]=e,m[o+8]=f}k.bufferData(k.ARRAY_BUFFER,a.normalArray,k.DYNAMIC_DRAW);k.enableVertexAttribArray(b.attributes.normal);k.vertexAttribPointer(b.attributes.normal,3,k.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(k.bindBuffer(k.ARRAY_BUFFER,a.__webglUvBuffer),k.bufferData(k.ARRAY_BUFFER,a.uvArray,k.DYNAMIC_DRAW),k.enableVertexAttribArray(b.attributes.uv),k.vertexAttribPointer(b.attributes.uv,2,k.FLOAT,!1,0,0));a.hasColors&&
c.vertexColors!==THREE.NoColors&&(k.bindBuffer(k.ARRAY_BUFFER,a.__webglColorBuffer),k.bufferData(k.ARRAY_BUFFER,a.colorArray,k.DYNAMIC_DRAW),k.enableVertexAttribArray(b.attributes.color),k.vertexAttribPointer(b.attributes.color,3,k.FLOAT,!1,0,0));k.drawArrays(k.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){if(!1!==d.visible)if(c=B(a,b,c,d,f),a=c.attributes,b=!1,d=16777215*e.id+2*c.id+(d.wireframe?1:0),d!==V&&(V=d,b=!0),f instanceof THREE.Mesh){f=e.offsets;1<f.length&&
(b=!0);d=0;for(c=f.length;d<c;++d){var g=f[d].index;if(b){var h=e.attributes.position,i=h.itemSize;k.bindBuffer(k.ARRAY_BUFFER,h.buffer);k.vertexAttribPointer(a.position,i,k.FLOAT,!1,0,4*g*i);h=e.attributes.normal;0<=a.normal&&h&&(i=h.itemSize,k.bindBuffer(k.ARRAY_BUFFER,h.buffer),k.vertexAttribPointer(a.normal,i,k.FLOAT,!1,0,4*g*i));h=e.attributes.uv;0<=a.uv&&h&&(h.buffer?(i=h.itemSize,k.bindBuffer(k.ARRAY_BUFFER,h.buffer),k.vertexAttribPointer(a.uv,i,k.FLOAT,!1,0,4*g*i),k.enableVertexAttribArray(a.uv)):
k.disableVertexAttribArray(a.uv));i=e.attributes.color;if(0<=a.color&&i){var j=i.itemSize;k.bindBuffer(k.ARRAY_BUFFER,i.buffer);k.vertexAttribPointer(a.color,j,k.FLOAT,!1,0,4*g*j)}h=e.attributes.tangent;0<=a.tangent&&h&&(i=h.itemSize,k.bindBuffer(k.ARRAY_BUFFER,h.buffer),k.vertexAttribPointer(a.tangent,i,k.FLOAT,!1,0,4*g*i));k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,e.attributes.index.buffer)}k.drawElements(k.TRIANGLES,f[d].count,k.UNSIGNED_SHORT,2*f[d].start);Q.info.render.calls++;Q.info.render.vertices+=
f[d].count;Q.info.render.faces+=f[d].count/3}}else f instanceof THREE.ParticleSystem&&b&&(h=e.attributes.position,i=h.itemSize,k.bindBuffer(k.ARRAY_BUFFER,h.buffer),k.vertexAttribPointer(a.position,i,k.FLOAT,!1,0,0),i=e.attributes.color,0<=a.color&&i&&(j=i.itemSize,k.bindBuffer(k.ARRAY_BUFFER,i.buffer),k.vertexAttribPointer(a.color,j,k.FLOAT,!1,0,0)),k.drawArrays(k.POINTS,0,h.numItems/3),Q.info.render.calls++,Q.info.render.points+=h.numItems/3)};this.renderBuffer=function(a,b,c,d,e,f){if(!1!==d.visible){var g,
h,c=B(a,b,c,d,f),b=c.attributes,a=!1,c=16777215*e.id+2*c.id+(d.wireframe?1:0);c!==V&&(V=c,a=!0);if(!d.morphTargets&&0<=b.position)a&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglVertexBuffer),k.vertexAttribPointer(b.position,3,k.FLOAT,!1,0,0));else if(f.morphTargetBase){c=d.program.attributes;-1!==f.morphTargetBase?(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[f.morphTargetBase]),k.vertexAttribPointer(c.position,3,k.FLOAT,!1,0,0)):0<=c.position&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglVertexBuffer),
k.vertexAttribPointer(c.position,3,k.FLOAT,!1,0,0));if(f.morphTargetForcedOrder.length){var i=0;h=f.morphTargetForcedOrder;for(g=f.morphTargetInfluences;i<d.numSupportedMorphTargets&&i<h.length;)k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[h[i]]),k.vertexAttribPointer(c["morphTarget"+i],3,k.FLOAT,!1,0,0),d.morphNormals&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[h[i]]),k.vertexAttribPointer(c["morphNormal"+i],3,k.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[i]=g[h[i]],
i++}else{h=[];g=f.morphTargetInfluences;var l,m=g.length;for(l=0;l<m;l++)i=g[l],0<i&&h.push([l,i]);h.length>d.numSupportedMorphTargets?(h.sort(j),h.length=d.numSupportedMorphTargets):h.length>d.numSupportedMorphNormals?h.sort(j):0===h.length&&h.push([0,0]);for(i=0;i<d.numSupportedMorphTargets;)h[i]?(l=h[i][0],k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[l]),k.vertexAttribPointer(c["morphTarget"+i],3,k.FLOAT,!1,0,0),d.morphNormals&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[l]),
k.vertexAttribPointer(c["morphNormal"+i],3,k.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[i]=g[l]):(k.vertexAttribPointer(c["morphTarget"+i],3,k.FLOAT,!1,0,0),d.morphNormals&&k.vertexAttribPointer(c["morphNormal"+i],3,k.FLOAT,!1,0,0),f.__webglMorphTargetInfluences[i]=0),i++}null!==d.program.uniforms.morphTargetInfluences&&k.uniform1fv(d.program.uniforms.morphTargetInfluences,f.__webglMorphTargetInfluences)}if(a){if(e.__webglCustomAttributesList){g=0;for(h=e.__webglCustomAttributesList.length;g<h;g++)c=
e.__webglCustomAttributesList[g],0<=b[c.buffer.belongsToAttribute]&&(k.bindBuffer(k.ARRAY_BUFFER,c.buffer),k.vertexAttribPointer(b[c.buffer.belongsToAttribute],c.size,k.FLOAT,!1,0,0))}0<=b.color&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglColorBuffer),k.vertexAttribPointer(b.color,3,k.FLOAT,!1,0,0));0<=b.normal&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglNormalBuffer),k.vertexAttribPointer(b.normal,3,k.FLOAT,!1,0,0));0<=b.tangent&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglTangentBuffer),k.vertexAttribPointer(b.tangent,
4,k.FLOAT,!1,0,0));0<=b.uv&&(e.__webglUVBuffer?(k.bindBuffer(k.ARRAY_BUFFER,e.__webglUVBuffer),k.vertexAttribPointer(b.uv,2,k.FLOAT,!1,0,0),k.enableVertexAttribArray(b.uv)):k.disableVertexAttribArray(b.uv));0<=b.uv2&&(e.__webglUV2Buffer?(k.bindBuffer(k.ARRAY_BUFFER,e.__webglUV2Buffer),k.vertexAttribPointer(b.uv2,2,k.FLOAT,!1,0,0),k.enableVertexAttribArray(b.uv2)):k.disableVertexAttribArray(b.uv2));d.skinning&&(0<=b.skinIndex&&0<=b.skinWeight)&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglSkinIndicesBuffer),
k.vertexAttribPointer(b.skinIndex,4,k.FLOAT,!1,0,0),k.bindBuffer(k.ARRAY_BUFFER,e.__webglSkinWeightsBuffer),k.vertexAttribPointer(b.skinWeight,4,k.FLOAT,!1,0,0))}f instanceof THREE.Mesh?(d.wireframe?(d=d.wireframeLinewidth,d!==db&&(k.lineWidth(d),db=d),a&&k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,e.__webglLineBuffer),k.drawElements(k.LINES,e.__webglLineCount,k.UNSIGNED_SHORT,0)):(a&&k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,e.__webglFaceBuffer),k.drawElements(k.TRIANGLES,e.__webglFaceCount,k.UNSIGNED_SHORT,0)),
Q.info.render.calls++,Q.info.render.vertices+=e.__webglFaceCount,Q.info.render.faces+=e.__webglFaceCount/3):f instanceof THREE.Line?(f=f.type===THREE.LineStrip?k.LINE_STRIP:k.LINES,d=d.linewidth,d!==db&&(k.lineWidth(d),db=d),k.drawArrays(f,0,e.__webglLineCount),Q.info.render.calls++):f instanceof THREE.ParticleSystem?(k.drawArrays(k.POINTS,0,e.__webglParticleCount),Q.info.render.calls++,Q.info.render.points+=e.__webglParticleCount):f instanceof THREE.Ribbon&&(k.drawArrays(k.TRIANGLE_STRIP,0,e.__webglVertexCount),
Q.info.render.calls++)}};this.render=function(a,b,c,d){if(!1===b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var e,f,g,h,j=a.__lights,o=a.fog;W=-1;Ea=!0;this.autoUpdateScene&&a.updateMatrixWorld();void 0===b.parent&&b.updateMatrixWorld();b._viewMatrixArray||(b._viewMatrixArray=new Float32Array(16));b._projectionMatrixArray||(b._projectionMatrixArray=new Float32Array(16));b.matrixWorldInverse.getInverse(b.matrixWorld);b.matrixWorldInverse.flattenToArray(b._viewMatrixArray);
b.projectionMatrix.flattenToArray(b._projectionMatrixArray);ra.multiply(b.projectionMatrix,b.matrixWorldInverse);fb.setFromMatrix(ra);this.autoUpdateObjects&&this.initWebGLObjects(a);l(this.renderPluginsPre,a,b);Q.info.render.calls=0;Q.info.render.vertices=0;Q.info.render.faces=0;Q.info.render.points=0;this.setRenderTarget(c);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);h=a.__webglObjects;d=0;for(e=h.length;d<e;d++)if(f=h[d],g=f.object,f.render=!1,
g.visible&&(!(g instanceof THREE.Mesh||g instanceof THREE.ParticleSystem)||!g.frustumCulled||fb.contains(g))){s(g,b);var p=f,q=p.object,r=p.buffer,t=void 0,t=t=void 0,t=q.material;t instanceof THREE.MeshFaceMaterial?(t=r.materialIndex,0<=t&&(t=q.geometry.materials[t],t.transparent?(p.transparent=t,p.opaque=null):(p.opaque=t,p.transparent=null))):t&&(t.transparent?(p.transparent=t,p.opaque=null):(p.opaque=t,p.transparent=null));f.render=!0;!0===this.sortObjects&&(null!==g.renderDepth?f.z=g.renderDepth:
(Za.copy(g.matrixWorld.getPosition()),ra.multiplyVector3(Za),f.z=Za.z))}this.sortObjects&&h.sort(i);h=a.__webglObjectsImmediate;d=0;for(e=h.length;d<e;d++)f=h[d],g=f.object,g.visible&&(s(g,b),g=f.object.material,g.transparent?(f.transparent=g,f.opaque=null):(f.opaque=g,f.transparent=null));a.overrideMaterial?(d=a.overrideMaterial,this.setBlending(d.blending,d.blendEquation,d.blendSrc,d.blendDst),this.setDepthTest(d.depthTest),this.setDepthWrite(d.depthWrite),v(d.polygonOffset,d.polygonOffsetFactor,
d.polygonOffsetUnits),m(a.__webglObjects,!1,"",b,j,o,!0,d),n(a.__webglObjectsImmediate,"",b,j,o,!1,d)):(this.setBlending(THREE.NormalBlending),m(a.__webglObjects,!0,"opaque",b,j,o,!1),n(a.__webglObjectsImmediate,"opaque",b,j,o,!1),m(a.__webglObjects,!1,"transparent",b,j,o,!0),n(a.__webglObjectsImmediate,"transparent",b,j,o,!0));l(this.renderPluginsPost,a,b);c&&(c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter)&&(c instanceof THREE.WebGLRenderTargetCube?(k.bindTexture(k.TEXTURE_CUBE_MAP,
c.__webglTexture),k.generateMipmap(k.TEXTURE_CUBE_MAP),k.bindTexture(k.TEXTURE_CUBE_MAP,null)):(k.bindTexture(k.TEXTURE_2D,c.__webglTexture),k.generateMipmap(k.TEXTURE_2D),k.bindTexture(k.TEXTURE_2D,null)));this.setDepthTest(!0);this.setDepthWrite(!0)}};this.renderImmediateObject=function(a,b,c,d,e){var f=B(a,b,c,d,e);V=-1;Q.setMaterialFaces(d);e.immediateRenderCallback?e.immediateRenderCallback(f,k,fb):e.render(function(a){Q.renderBufferImmediate(a,f,d)})};this.initWebGLObjects=function(a){a.__webglObjects||
(a.__webglObjects=[],a.__webglObjectsImmediate=[],a.__webglSprites=[],a.__webglFlares=[]);for(;a.__objectsAdded.length;){var i=a.__objectsAdded[0],j=a,l=void 0,m=void 0,n=void 0;if(!i.__webglInit)if(i.__webglInit=!0,i._modelViewMatrix=new THREE.Matrix4,i._normalMatrix=new THREE.Matrix3,i instanceof THREE.Mesh)if(m=i.geometry,m instanceof THREE.Geometry){if(void 0===m.geometryGroups){var s=m,u=void 0,v=void 0,y=void 0,z=void 0,A=void 0,B=void 0,C=void 0,E={},G=s.morphTargets.length,H=s.morphNormals.length;
s.geometryGroups={};u=0;for(v=s.faces.length;u<v;u++)y=s.faces[u],z=y.materialIndex,B=void 0!==z?z:-1,void 0===E[B]&&(E[B]={hash:B,counter:0}),C=E[B].hash+"_"+E[B].counter,void 0===s.geometryGroups[C]&&(s.geometryGroups[C]={faces3:[],faces4:[],materialIndex:z,vertices:0,numMorphTargets:G,numMorphNormals:H}),A=y instanceof THREE.Face3?3:4,65535<s.geometryGroups[C].vertices+A&&(E[B].counter+=1,C=E[B].hash+"_"+E[B].counter,void 0===s.geometryGroups[C]&&(s.geometryGroups[C]={faces3:[],faces4:[],materialIndex:z,
vertices:0,numMorphTargets:G,numMorphNormals:H})),y instanceof THREE.Face3?s.geometryGroups[C].faces3.push(u):s.geometryGroups[C].faces4.push(u),s.geometryGroups[C].vertices+=A;s.geometryGroupsList=[];var J=void 0;for(J in s.geometryGroups)s.geometryGroups[J].id=Z++,s.geometryGroupsList.push(s.geometryGroups[J])}for(l in m.geometryGroups)if(n=m.geometryGroups[l],!n.__webglVertexBuffer){var I=n;I.__webglVertexBuffer=k.createBuffer();I.__webglNormalBuffer=k.createBuffer();I.__webglTangentBuffer=k.createBuffer();
I.__webglColorBuffer=k.createBuffer();I.__webglUVBuffer=k.createBuffer();I.__webglUV2Buffer=k.createBuffer();I.__webglSkinIndicesBuffer=k.createBuffer();I.__webglSkinWeightsBuffer=k.createBuffer();I.__webglFaceBuffer=k.createBuffer();I.__webglLineBuffer=k.createBuffer();var O=void 0,K=void 0;if(I.numMorphTargets){I.__webglMorphTargetsBuffers=[];O=0;for(K=I.numMorphTargets;O<K;O++)I.__webglMorphTargetsBuffers.push(k.createBuffer())}if(I.numMorphNormals){I.__webglMorphNormalsBuffers=[];O=0;for(K=I.numMorphNormals;O<
K;O++)I.__webglMorphNormalsBuffers.push(k.createBuffer())}Q.info.memory.geometries++;var F=n,M=i,L=M.geometry,N=F.faces3,W=F.faces4,V=3*N.length+4*W.length,fa=1*N.length+2*W.length,ca=3*N.length+4*W.length,R=c(M,F),Y=e(R),ea=d(R),ia=R.vertexColors?R.vertexColors:!1;F.__vertexArray=new Float32Array(3*V);ea&&(F.__normalArray=new Float32Array(3*V));L.hasTangents&&(F.__tangentArray=new Float32Array(4*V));ia&&(F.__colorArray=new Float32Array(3*V));if(Y){if(0<L.faceUvs.length||0<L.faceVertexUvs.length)F.__uvArray=
new Float32Array(2*V);if(1<L.faceUvs.length||1<L.faceVertexUvs.length)F.__uv2Array=new Float32Array(2*V)}M.geometry.skinWeights.length&&M.geometry.skinIndices.length&&(F.__skinIndexArray=new Float32Array(4*V),F.__skinWeightArray=new Float32Array(4*V));F.__faceArray=new Uint16Array(3*fa);F.__lineArray=new Uint16Array(2*ca);var $=void 0,qa=void 0;if(F.numMorphTargets){F.__morphTargetsArrays=[];$=0;for(qa=F.numMorphTargets;$<qa;$++)F.__morphTargetsArrays.push(new Float32Array(3*V))}if(F.numMorphNormals){F.__morphNormalsArrays=
[];$=0;for(qa=F.numMorphNormals;$<qa;$++)F.__morphNormalsArrays.push(new Float32Array(3*V))}F.__webglFaceCount=3*fa;F.__webglLineCount=2*ca;if(R.attributes){void 0===F.__webglCustomAttributesList&&(F.__webglCustomAttributesList=[]);var Ga=void 0;for(Ga in R.attributes){var na=R.attributes[Ga],la={},Pa;for(Pa in na)la[Pa]=na[Pa];if(!la.__webglInitialized||la.createUniqueBuffers){la.__webglInitialized=!0;var ra=1;"v2"===la.type?ra=2:"v3"===la.type?ra=3:"v4"===la.type?ra=4:"c"===la.type&&(ra=3);la.size=
ra;la.array=new Float32Array(V*ra);la.buffer=k.createBuffer();la.buffer.belongsToAttribute=Ga;na.needsUpdate=!0;la.__original=na}F.__webglCustomAttributesList.push(la)}}F.__inittedArrays=!0;m.verticesNeedUpdate=!0;m.morphTargetsNeedUpdate=!0;m.elementsNeedUpdate=!0;m.uvsNeedUpdate=!0;m.normalsNeedUpdate=!0;m.tangentsNeedUpdate=!0;m.colorsNeedUpdate=!0}}else m instanceof THREE.BufferGeometry&&f(m);else if(i instanceof THREE.Ribbon){if(m=i.geometry,!m.__webglVertexBuffer){var Ia=m;Ia.__webglVertexBuffer=
k.createBuffer();Ia.__webglColorBuffer=k.createBuffer();Q.info.memory.geometries++;var wa=m,Da=wa.vertices.length;wa.__vertexArray=new Float32Array(3*Da);wa.__colorArray=new Float32Array(3*Da);wa.__webglVertexCount=Da;m.verticesNeedUpdate=!0;m.colorsNeedUpdate=!0}}else if(i instanceof THREE.Line){if(m=i.geometry,!m.__webglVertexBuffer){var Ja=m;Ja.__webglVertexBuffer=k.createBuffer();Ja.__webglColorBuffer=k.createBuffer();Q.info.memory.geometries++;var Ea=m,Ua=i,Va=Ea.vertices.length;Ea.__vertexArray=
new Float32Array(3*Va);Ea.__colorArray=new Float32Array(3*Va);Ea.__webglLineCount=Va;b(Ea,Ua);m.verticesNeedUpdate=!0;m.colorsNeedUpdate=!0}}else if(i instanceof THREE.ParticleSystem&&(m=i.geometry,!m.__webglVertexBuffer))if(m instanceof THREE.Geometry){var Wa=m;Wa.__webglVertexBuffer=k.createBuffer();Wa.__webglColorBuffer=k.createBuffer();Q.info.memory.geometries++;var Ra=m,ib=i,$a=Ra.vertices.length;Ra.__vertexArray=new Float32Array(3*$a);Ra.__colorArray=new Float32Array(3*$a);Ra.__sortArray=[];
Ra.__webglParticleCount=$a;b(Ra,ib);m.verticesNeedUpdate=!0;m.colorsNeedUpdate=!0}else m instanceof THREE.BufferGeometry&&f(m);if(!i.__webglActive){if(i instanceof THREE.Mesh)if(m=i.geometry,m instanceof THREE.BufferGeometry)p(j.__webglObjects,m,i);else for(l in m.geometryGroups)n=m.geometryGroups[l],p(j.__webglObjects,n,i);else i instanceof THREE.Ribbon||i instanceof THREE.Line||i instanceof THREE.ParticleSystem?(m=i.geometry,p(j.__webglObjects,m,i)):i instanceof THREE.ImmediateRenderObject||i.immediateRenderCallback?
j.__webglObjectsImmediate.push({object:i,opaque:null,transparent:null}):i instanceof THREE.Sprite?j.__webglSprites.push(i):i instanceof THREE.LensFlare&&j.__webglFlares.push(i);i.__webglActive=!0}a.__objectsAdded.splice(0,1)}for(;a.__objectsRemoved.length;){var lb=a.__objectsRemoved[0],Za=a;lb instanceof THREE.Mesh||lb instanceof THREE.ParticleSystem||lb instanceof THREE.Ribbon||lb instanceof THREE.Line?r(Za.__webglObjects,lb):lb instanceof THREE.Sprite?t(Za.__webglSprites,lb):lb instanceof THREE.LensFlare?
t(Za.__webglFlares,lb):(lb instanceof THREE.ImmediateRenderObject||lb.immediateRenderCallback)&&r(Za.__webglObjectsImmediate,lb);lb.__webglActive=!1;a.__objectsRemoved.splice(0,1)}for(var fb=0,qb=a.__webglObjects.length;fb<qb;fb++){var ub=a.__webglObjects[fb].object,ga=ub.geometry,gb=void 0,eb=void 0,ab=void 0;if(ub instanceof THREE.Mesh)if(ga instanceof THREE.BufferGeometry)(ga.verticesNeedUpdate||ga.elementsNeedUpdate||ga.uvsNeedUpdate||ga.normalsNeedUpdate||ga.colorsNeedUpdate||ga.tangentsNeedUpdate)&&
h(ga,k.DYNAMIC_DRAW,!ga.dynamic),ga.verticesNeedUpdate=!1,ga.elementsNeedUpdate=!1,ga.uvsNeedUpdate=!1,ga.normalsNeedUpdate=!1,ga.colorsNeedUpdate=!1,ga.tangentsNeedUpdate=!1;else{for(var pb=0,wb=ga.geometryGroupsList.length;pb<wb;pb++)if(gb=ga.geometryGroupsList[pb],ab=c(ub,gb),eb=ab.attributes&&o(ab),ga.verticesNeedUpdate||ga.morphTargetsNeedUpdate||ga.elementsNeedUpdate||ga.uvsNeedUpdate||ga.normalsNeedUpdate||ga.colorsNeedUpdate||ga.tangentsNeedUpdate||eb){var ma=gb,xb=ub,mb=k.DYNAMIC_DRAW,yb=
!ga.dynamic,db=ab;if(ma.__inittedArrays){var Qb=d(db),Pb=db.vertexColors?db.vertexColors:!1,hc=e(db),Gc=Qb===THREE.SmoothShading,D=void 0,X=void 0,Xb=void 0,P=void 0,lc=void 0,Yb=void 0,vb=void 0,Hc=void 0,Rb=void 0,mc=void 0,nc=void 0,S=void 0,T=void 0,U=void 0,ka=void 0,zb=void 0,Ab=void 0,Bb=void 0,sc=void 0,Cb=void 0,Db=void 0,Eb=void 0,tc=void 0,Fb=void 0,Gb=void 0,Hb=void 0,uc=void 0,Ib=void 0,Jb=void 0,Kb=void 0,vc=void 0,Lb=void 0,Mb=void 0,Nb=void 0,wc=void 0,sa=void 0,ic=void 0,Zb=void 0,
oc=void 0,pc=void 0,Ma=void 0,rc=void 0,Ka=void 0,La=void 0,$b=void 0,Sb=void 0,Ca=0,Ha=0,Tb=0,Ub=0,nb=0,Sa=0,ua=0,Ya=0,Fa=0,da=0,ha=0,x=0,ta=void 0,Na=ma.__vertexArray,xc=ma.__uvArray,yc=ma.__uv2Array,ob=ma.__normalArray,xa=ma.__tangentArray,Oa=ma.__colorArray,ya=ma.__skinIndexArray,za=ma.__skinWeightArray,Vc=ma.__morphTargetsArrays,Wc=ma.__morphNormalsArrays,Xc=ma.__webglCustomAttributesList,w=void 0,Ob=ma.__faceArray,hb=ma.__lineArray,bb=xb.geometry,Ec=bb.elementsNeedUpdate,bd=bb.uvsNeedUpdate,
Sc=bb.normalsNeedUpdate,Tc=bb.tangentsNeedUpdate,id=bb.colorsNeedUpdate,jd=bb.morphTargetsNeedUpdate,ec=bb.vertices,oa=ma.faces3,pa=ma.faces4,Ta=bb.faces,Yc=bb.faceVertexUvs[0],Zc=bb.faceVertexUvs[1],fc=bb.skinIndices,ac=bb.skinWeights,bc=bb.morphTargets,Ic=bb.morphNormals;if(bb.verticesNeedUpdate){D=0;for(X=oa.length;D<X;D++)P=Ta[oa[D]],S=ec[P.a],T=ec[P.b],U=ec[P.c],Na[Ha]=S.x,Na[Ha+1]=S.y,Na[Ha+2]=S.z,Na[Ha+3]=T.x,Na[Ha+4]=T.y,Na[Ha+5]=T.z,Na[Ha+6]=U.x,Na[Ha+7]=U.y,Na[Ha+8]=U.z,Ha+=9;D=0;for(X=
pa.length;D<X;D++)P=Ta[pa[D]],S=ec[P.a],T=ec[P.b],U=ec[P.c],ka=ec[P.d],Na[Ha]=S.x,Na[Ha+1]=S.y,Na[Ha+2]=S.z,Na[Ha+3]=T.x,Na[Ha+4]=T.y,Na[Ha+5]=T.z,Na[Ha+6]=U.x,Na[Ha+7]=U.y,Na[Ha+8]=U.z,Na[Ha+9]=ka.x,Na[Ha+10]=ka.y,Na[Ha+11]=ka.z,Ha+=12;k.bindBuffer(k.ARRAY_BUFFER,ma.__webglVertexBuffer);k.bufferData(k.ARRAY_BUFFER,Na,mb)}if(jd){Ma=0;for(rc=bc.length;Ma<rc;Ma++){D=ha=0;for(X=oa.length;D<X;D++)$b=oa[D],P=Ta[$b],S=bc[Ma].vertices[P.a],T=bc[Ma].vertices[P.b],U=bc[Ma].vertices[P.c],Ka=Vc[Ma],Ka[ha]=S.x,
Ka[ha+1]=S.y,Ka[ha+2]=S.z,Ka[ha+3]=T.x,Ka[ha+4]=T.y,Ka[ha+5]=T.z,Ka[ha+6]=U.x,Ka[ha+7]=U.y,Ka[ha+8]=U.z,db.morphNormals&&(Gc?(Sb=Ic[Ma].vertexNormals[$b],Cb=Sb.a,Db=Sb.b,Eb=Sb.c):Eb=Db=Cb=Ic[Ma].faceNormals[$b],La=Wc[Ma],La[ha]=Cb.x,La[ha+1]=Cb.y,La[ha+2]=Cb.z,La[ha+3]=Db.x,La[ha+4]=Db.y,La[ha+5]=Db.z,La[ha+6]=Eb.x,La[ha+7]=Eb.y,La[ha+8]=Eb.z),ha+=9;D=0;for(X=pa.length;D<X;D++)$b=pa[D],P=Ta[$b],S=bc[Ma].vertices[P.a],T=bc[Ma].vertices[P.b],U=bc[Ma].vertices[P.c],ka=bc[Ma].vertices[P.d],Ka=Vc[Ma],
Ka[ha]=S.x,Ka[ha+1]=S.y,Ka[ha+2]=S.z,Ka[ha+3]=T.x,Ka[ha+4]=T.y,Ka[ha+5]=T.z,Ka[ha+6]=U.x,Ka[ha+7]=U.y,Ka[ha+8]=U.z,Ka[ha+9]=ka.x,Ka[ha+10]=ka.y,Ka[ha+11]=ka.z,db.morphNormals&&(Gc?(Sb=Ic[Ma].vertexNormals[$b],Cb=Sb.a,Db=Sb.b,Eb=Sb.c,tc=Sb.d):tc=Eb=Db=Cb=Ic[Ma].faceNormals[$b],La=Wc[Ma],La[ha]=Cb.x,La[ha+1]=Cb.y,La[ha+2]=Cb.z,La[ha+3]=Db.x,La[ha+4]=Db.y,La[ha+5]=Db.z,La[ha+6]=Eb.x,La[ha+7]=Eb.y,La[ha+8]=Eb.z,La[ha+9]=tc.x,La[ha+10]=tc.y,La[ha+11]=tc.z),ha+=12;k.bindBuffer(k.ARRAY_BUFFER,ma.__webglMorphTargetsBuffers[Ma]);
k.bufferData(k.ARRAY_BUFFER,Vc[Ma],mb);db.morphNormals&&(k.bindBuffer(k.ARRAY_BUFFER,ma.__webglMorphNormalsBuffers[Ma]),k.bufferData(k.ARRAY_BUFFER,Wc[Ma],mb))}}if(ac.length){D=0;for(X=oa.length;D<X;D++)P=Ta[oa[D]],Ib=ac[P.a],Jb=ac[P.b],Kb=ac[P.c],za[da]=Ib.x,za[da+1]=Ib.y,za[da+2]=Ib.z,za[da+3]=Ib.w,za[da+4]=Jb.x,za[da+5]=Jb.y,za[da+6]=Jb.z,za[da+7]=Jb.w,za[da+8]=Kb.x,za[da+9]=Kb.y,za[da+10]=Kb.z,za[da+11]=Kb.w,Lb=fc[P.a],Mb=fc[P.b],Nb=fc[P.c],ya[da]=Lb.x,ya[da+1]=Lb.y,ya[da+2]=Lb.z,ya[da+3]=Lb.w,
ya[da+4]=Mb.x,ya[da+5]=Mb.y,ya[da+6]=Mb.z,ya[da+7]=Mb.w,ya[da+8]=Nb.x,ya[da+9]=Nb.y,ya[da+10]=Nb.z,ya[da+11]=Nb.w,da+=12;D=0;for(X=pa.length;D<X;D++)P=Ta[pa[D]],Ib=ac[P.a],Jb=ac[P.b],Kb=ac[P.c],vc=ac[P.d],za[da]=Ib.x,za[da+1]=Ib.y,za[da+2]=Ib.z,za[da+3]=Ib.w,za[da+4]=Jb.x,za[da+5]=Jb.y,za[da+6]=Jb.z,za[da+7]=Jb.w,za[da+8]=Kb.x,za[da+9]=Kb.y,za[da+10]=Kb.z,za[da+11]=Kb.w,za[da+12]=vc.x,za[da+13]=vc.y,za[da+14]=vc.z,za[da+15]=vc.w,Lb=fc[P.a],Mb=fc[P.b],Nb=fc[P.c],wc=fc[P.d],ya[da]=Lb.x,ya[da+1]=Lb.y,
ya[da+2]=Lb.z,ya[da+3]=Lb.w,ya[da+4]=Mb.x,ya[da+5]=Mb.y,ya[da+6]=Mb.z,ya[da+7]=Mb.w,ya[da+8]=Nb.x,ya[da+9]=Nb.y,ya[da+10]=Nb.z,ya[da+11]=Nb.w,ya[da+12]=wc.x,ya[da+13]=wc.y,ya[da+14]=wc.z,ya[da+15]=wc.w,da+=16;0<da&&(k.bindBuffer(k.ARRAY_BUFFER,ma.__webglSkinIndicesBuffer),k.bufferData(k.ARRAY_BUFFER,ya,mb),k.bindBuffer(k.ARRAY_BUFFER,ma.__webglSkinWeightsBuffer),k.bufferData(k.ARRAY_BUFFER,za,mb))}if(id&&Pb){D=0;for(X=oa.length;D<X;D++)P=Ta[oa[D]],vb=P.vertexColors,Hc=P.color,3===vb.length&&Pb===
THREE.VertexColors?(Fb=vb[0],Gb=vb[1],Hb=vb[2]):Hb=Gb=Fb=Hc,Oa[Fa]=Fb.r,Oa[Fa+1]=Fb.g,Oa[Fa+2]=Fb.b,Oa[Fa+3]=Gb.r,Oa[Fa+4]=Gb.g,Oa[Fa+5]=Gb.b,Oa[Fa+6]=Hb.r,Oa[Fa+7]=Hb.g,Oa[Fa+8]=Hb.b,Fa+=9;D=0;for(X=pa.length;D<X;D++)P=Ta[pa[D]],vb=P.vertexColors,Hc=P.color,4===vb.length&&Pb===THREE.VertexColors?(Fb=vb[0],Gb=vb[1],Hb=vb[2],uc=vb[3]):uc=Hb=Gb=Fb=Hc,Oa[Fa]=Fb.r,Oa[Fa+1]=Fb.g,Oa[Fa+2]=Fb.b,Oa[Fa+3]=Gb.r,Oa[Fa+4]=Gb.g,Oa[Fa+5]=Gb.b,Oa[Fa+6]=Hb.r,Oa[Fa+7]=Hb.g,Oa[Fa+8]=Hb.b,Oa[Fa+9]=uc.r,Oa[Fa+10]=uc.g,
Oa[Fa+11]=uc.b,Fa+=12;0<Fa&&(k.bindBuffer(k.ARRAY_BUFFER,ma.__webglColorBuffer),k.bufferData(k.ARRAY_BUFFER,Oa,mb))}if(Tc&&bb.hasTangents){D=0;for(X=oa.length;D<X;D++)P=Ta[oa[D]],Rb=P.vertexTangents,zb=Rb[0],Ab=Rb[1],Bb=Rb[2],xa[ua]=zb.x,xa[ua+1]=zb.y,xa[ua+2]=zb.z,xa[ua+3]=zb.w,xa[ua+4]=Ab.x,xa[ua+5]=Ab.y,xa[ua+6]=Ab.z,xa[ua+7]=Ab.w,xa[ua+8]=Bb.x,xa[ua+9]=Bb.y,xa[ua+10]=Bb.z,xa[ua+11]=Bb.w,ua+=12;D=0;for(X=pa.length;D<X;D++)P=Ta[pa[D]],Rb=P.vertexTangents,zb=Rb[0],Ab=Rb[1],Bb=Rb[2],sc=Rb[3],xa[ua]=
zb.x,xa[ua+1]=zb.y,xa[ua+2]=zb.z,xa[ua+3]=zb.w,xa[ua+4]=Ab.x,xa[ua+5]=Ab.y,xa[ua+6]=Ab.z,xa[ua+7]=Ab.w,xa[ua+8]=Bb.x,xa[ua+9]=Bb.y,xa[ua+10]=Bb.z,xa[ua+11]=Bb.w,xa[ua+12]=sc.x,xa[ua+13]=sc.y,xa[ua+14]=sc.z,xa[ua+15]=sc.w,ua+=16;k.bindBuffer(k.ARRAY_BUFFER,ma.__webglTangentBuffer);k.bufferData(k.ARRAY_BUFFER,xa,mb)}if(Sc&&Qb){D=0;for(X=oa.length;D<X;D++)if(P=Ta[oa[D]],lc=P.vertexNormals,Yb=P.normal,3===lc.length&&Gc)for(sa=0;3>sa;sa++)Zb=lc[sa],ob[Sa]=Zb.x,ob[Sa+1]=Zb.y,ob[Sa+2]=Zb.z,Sa+=3;else for(sa=
0;3>sa;sa++)ob[Sa]=Yb.x,ob[Sa+1]=Yb.y,ob[Sa+2]=Yb.z,Sa+=3;D=0;for(X=pa.length;D<X;D++)if(P=Ta[pa[D]],lc=P.vertexNormals,Yb=P.normal,4===lc.length&&Gc)for(sa=0;4>sa;sa++)Zb=lc[sa],ob[Sa]=Zb.x,ob[Sa+1]=Zb.y,ob[Sa+2]=Zb.z,Sa+=3;else for(sa=0;4>sa;sa++)ob[Sa]=Yb.x,ob[Sa+1]=Yb.y,ob[Sa+2]=Yb.z,Sa+=3;k.bindBuffer(k.ARRAY_BUFFER,ma.__webglNormalBuffer);k.bufferData(k.ARRAY_BUFFER,ob,mb)}if(bd&&Yc&&hc){D=0;for(X=oa.length;D<X;D++)if(Xb=oa[D],mc=Yc[Xb],void 0!==mc)for(sa=0;3>sa;sa++)oc=mc[sa],xc[Tb]=oc.u,xc[Tb+
1]=oc.v,Tb+=2;D=0;for(X=pa.length;D<X;D++)if(Xb=pa[D],mc=Yc[Xb],void 0!==mc)for(sa=0;4>sa;sa++)oc=mc[sa],xc[Tb]=oc.u,xc[Tb+1]=oc.v,Tb+=2;0<Tb&&(k.bindBuffer(k.ARRAY_BUFFER,ma.__webglUVBuffer),k.bufferData(k.ARRAY_BUFFER,xc,mb))}if(bd&&Zc&&hc){D=0;for(X=oa.length;D<X;D++)if(Xb=oa[D],nc=Zc[Xb],void 0!==nc)for(sa=0;3>sa;sa++)pc=nc[sa],yc[Ub]=pc.u,yc[Ub+1]=pc.v,Ub+=2;D=0;for(X=pa.length;D<X;D++)if(Xb=pa[D],nc=Zc[Xb],void 0!==nc)for(sa=0;4>sa;sa++)pc=nc[sa],yc[Ub]=pc.u,yc[Ub+1]=pc.v,Ub+=2;0<Ub&&(k.bindBuffer(k.ARRAY_BUFFER,
ma.__webglUV2Buffer),k.bufferData(k.ARRAY_BUFFER,yc,mb))}if(Ec){D=0;for(X=oa.length;D<X;D++)Ob[nb]=Ca,Ob[nb+1]=Ca+1,Ob[nb+2]=Ca+2,nb+=3,hb[Ya]=Ca,hb[Ya+1]=Ca+1,hb[Ya+2]=Ca,hb[Ya+3]=Ca+2,hb[Ya+4]=Ca+1,hb[Ya+5]=Ca+2,Ya+=6,Ca+=3;D=0;for(X=pa.length;D<X;D++)Ob[nb]=Ca,Ob[nb+1]=Ca+1,Ob[nb+2]=Ca+3,Ob[nb+3]=Ca+1,Ob[nb+4]=Ca+2,Ob[nb+5]=Ca+3,nb+=6,hb[Ya]=Ca,hb[Ya+1]=Ca+1,hb[Ya+2]=Ca,hb[Ya+3]=Ca+3,hb[Ya+4]=Ca+1,hb[Ya+5]=Ca+2,hb[Ya+6]=Ca+2,hb[Ya+7]=Ca+3,Ya+=8,Ca+=4;k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,ma.__webglFaceBuffer);
k.bufferData(k.ELEMENT_ARRAY_BUFFER,Ob,mb);k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,ma.__webglLineBuffer);k.bufferData(k.ELEMENT_ARRAY_BUFFER,hb,mb)}if(Xc){sa=0;for(ic=Xc.length;sa<ic;sa++)if(w=Xc[sa],w.__original.needsUpdate){x=0;if(1===w.size)if(void 0===w.boundTo||"vertices"===w.boundTo){D=0;for(X=oa.length;D<X;D++)P=Ta[oa[D]],w.array[x]=w.value[P.a],w.array[x+1]=w.value[P.b],w.array[x+2]=w.value[P.c],x+=3;D=0;for(X=pa.length;D<X;D++)P=Ta[pa[D]],w.array[x]=w.value[P.a],w.array[x+1]=w.value[P.b],w.array[x+
2]=w.value[P.c],w.array[x+3]=w.value[P.d],x+=4}else{if("faces"===w.boundTo){D=0;for(X=oa.length;D<X;D++)ta=w.value[oa[D]],w.array[x]=ta,w.array[x+1]=ta,w.array[x+2]=ta,x+=3;D=0;for(X=pa.length;D<X;D++)ta=w.value[pa[D]],w.array[x]=ta,w.array[x+1]=ta,w.array[x+2]=ta,w.array[x+3]=ta,x+=4}}else if(2===w.size)if(void 0===w.boundTo||"vertices"===w.boundTo){D=0;for(X=oa.length;D<X;D++)P=Ta[oa[D]],S=w.value[P.a],T=w.value[P.b],U=w.value[P.c],w.array[x]=S.x,w.array[x+1]=S.y,w.array[x+2]=T.x,w.array[x+3]=T.y,
w.array[x+4]=U.x,w.array[x+5]=U.y,x+=6;D=0;for(X=pa.length;D<X;D++)P=Ta[pa[D]],S=w.value[P.a],T=w.value[P.b],U=w.value[P.c],ka=w.value[P.d],w.array[x]=S.x,w.array[x+1]=S.y,w.array[x+2]=T.x,w.array[x+3]=T.y,w.array[x+4]=U.x,w.array[x+5]=U.y,w.array[x+6]=ka.x,w.array[x+7]=ka.y,x+=8}else{if("faces"===w.boundTo){D=0;for(X=oa.length;D<X;D++)U=T=S=ta=w.value[oa[D]],w.array[x]=S.x,w.array[x+1]=S.y,w.array[x+2]=T.x,w.array[x+3]=T.y,w.array[x+4]=U.x,w.array[x+5]=U.y,x+=6;D=0;for(X=pa.length;D<X;D++)ka=U=T=
S=ta=w.value[pa[D]],w.array[x]=S.x,w.array[x+1]=S.y,w.array[x+2]=T.x,w.array[x+3]=T.y,w.array[x+4]=U.x,w.array[x+5]=U.y,w.array[x+6]=ka.x,w.array[x+7]=ka.y,x+=8}}else if(3===w.size){var ba;ba="c"===w.type?["r","g","b"]:["x","y","z"];if(void 0===w.boundTo||"vertices"===w.boundTo){D=0;for(X=oa.length;D<X;D++)P=Ta[oa[D]],S=w.value[P.a],T=w.value[P.b],U=w.value[P.c],w.array[x]=S[ba[0]],w.array[x+1]=S[ba[1]],w.array[x+2]=S[ba[2]],w.array[x+3]=T[ba[0]],w.array[x+4]=T[ba[1]],w.array[x+5]=T[ba[2]],w.array[x+
6]=U[ba[0]],w.array[x+7]=U[ba[1]],w.array[x+8]=U[ba[2]],x+=9;D=0;for(X=pa.length;D<X;D++)P=Ta[pa[D]],S=w.value[P.a],T=w.value[P.b],U=w.value[P.c],ka=w.value[P.d],w.array[x]=S[ba[0]],w.array[x+1]=S[ba[1]],w.array[x+2]=S[ba[2]],w.array[x+3]=T[ba[0]],w.array[x+4]=T[ba[1]],w.array[x+5]=T[ba[2]],w.array[x+6]=U[ba[0]],w.array[x+7]=U[ba[1]],w.array[x+8]=U[ba[2]],w.array[x+9]=ka[ba[0]],w.array[x+10]=ka[ba[1]],w.array[x+11]=ka[ba[2]],x+=12}else if("faces"===w.boundTo){D=0;for(X=oa.length;D<X;D++)U=T=S=ta=
w.value[oa[D]],w.array[x]=S[ba[0]],w.array[x+1]=S[ba[1]],w.array[x+2]=S[ba[2]],w.array[x+3]=T[ba[0]],w.array[x+4]=T[ba[1]],w.array[x+5]=T[ba[2]],w.array[x+6]=U[ba[0]],w.array[x+7]=U[ba[1]],w.array[x+8]=U[ba[2]],x+=9;D=0;for(X=pa.length;D<X;D++)ka=U=T=S=ta=w.value[pa[D]],w.array[x]=S[ba[0]],w.array[x+1]=S[ba[1]],w.array[x+2]=S[ba[2]],w.array[x+3]=T[ba[0]],w.array[x+4]=T[ba[1]],w.array[x+5]=T[ba[2]],w.array[x+6]=U[ba[0]],w.array[x+7]=U[ba[1]],w.array[x+8]=U[ba[2]],w.array[x+9]=ka[ba[0]],w.array[x+10]=
ka[ba[1]],w.array[x+11]=ka[ba[2]],x+=12}else if("faceVertices"===w.boundTo){D=0;for(X=oa.length;D<X;D++)ta=w.value[oa[D]],S=ta[0],T=ta[1],U=ta[2],w.array[x]=S[ba[0]],w.array[x+1]=S[ba[1]],w.array[x+2]=S[ba[2]],w.array[x+3]=T[ba[0]],w.array[x+4]=T[ba[1]],w.array[x+5]=T[ba[2]],w.array[x+6]=U[ba[0]],w.array[x+7]=U[ba[1]],w.array[x+8]=U[ba[2]],x+=9;D=0;for(X=pa.length;D<X;D++)ta=w.value[pa[D]],S=ta[0],T=ta[1],U=ta[2],ka=ta[3],w.array[x]=S[ba[0]],w.array[x+1]=S[ba[1]],w.array[x+2]=S[ba[2]],w.array[x+3]=
T[ba[0]],w.array[x+4]=T[ba[1]],w.array[x+5]=T[ba[2]],w.array[x+6]=U[ba[0]],w.array[x+7]=U[ba[1]],w.array[x+8]=U[ba[2]],w.array[x+9]=ka[ba[0]],w.array[x+10]=ka[ba[1]],w.array[x+11]=ka[ba[2]],x+=12}}else if(4===w.size)if(void 0===w.boundTo||"vertices"===w.boundTo){D=0;for(X=oa.length;D<X;D++)P=Ta[oa[D]],S=w.value[P.a],T=w.value[P.b],U=w.value[P.c],w.array[x]=S.x,w.array[x+1]=S.y,w.array[x+2]=S.z,w.array[x+3]=S.w,w.array[x+4]=T.x,w.array[x+5]=T.y,w.array[x+6]=T.z,w.array[x+7]=T.w,w.array[x+8]=U.x,w.array[x+
9]=U.y,w.array[x+10]=U.z,w.array[x+11]=U.w,x+=12;D=0;for(X=pa.length;D<X;D++)P=Ta[pa[D]],S=w.value[P.a],T=w.value[P.b],U=w.value[P.c],ka=w.value[P.d],w.array[x]=S.x,w.array[x+1]=S.y,w.array[x+2]=S.z,w.array[x+3]=S.w,w.array[x+4]=T.x,w.array[x+5]=T.y,w.array[x+6]=T.z,w.array[x+7]=T.w,w.array[x+8]=U.x,w.array[x+9]=U.y,w.array[x+10]=U.z,w.array[x+11]=U.w,w.array[x+12]=ka.x,w.array[x+13]=ka.y,w.array[x+14]=ka.z,w.array[x+15]=ka.w,x+=16}else if("faces"===w.boundTo){D=0;for(X=oa.length;D<X;D++)U=T=S=ta=
w.value[oa[D]],w.array[x]=S.x,w.array[x+1]=S.y,w.array[x+2]=S.z,w.array[x+3]=S.w,w.array[x+4]=T.x,w.array[x+5]=T.y,w.array[x+6]=T.z,w.array[x+7]=T.w,w.array[x+8]=U.x,w.array[x+9]=U.y,w.array[x+10]=U.z,w.array[x+11]=U.w,x+=12;D=0;for(X=pa.length;D<X;D++)ka=U=T=S=ta=w.value[pa[D]],w.array[x]=S.x,w.array[x+1]=S.y,w.array[x+2]=S.z,w.array[x+3]=S.w,w.array[x+4]=T.x,w.array[x+5]=T.y,w.array[x+6]=T.z,w.array[x+7]=T.w,w.array[x+8]=U.x,w.array[x+9]=U.y,w.array[x+10]=U.z,w.array[x+11]=U.w,w.array[x+12]=ka.x,
w.array[x+13]=ka.y,w.array[x+14]=ka.z,w.array[x+15]=ka.w,x+=16}else if("faceVertices"===w.boundTo){D=0;for(X=oa.length;D<X;D++)ta=w.value[oa[D]],S=ta[0],T=ta[1],U=ta[2],w.array[x]=S.x,w.array[x+1]=S.y,w.array[x+2]=S.z,w.array[x+3]=S.w,w.array[x+4]=T.x,w.array[x+5]=T.y,w.array[x+6]=T.z,w.array[x+7]=T.w,w.array[x+8]=U.x,w.array[x+9]=U.y,w.array[x+10]=U.z,w.array[x+11]=U.w,x+=12;D=0;for(X=pa.length;D<X;D++)ta=w.value[pa[D]],S=ta[0],T=ta[1],U=ta[2],ka=ta[3],w.array[x]=S.x,w.array[x+1]=S.y,w.array[x+2]=
S.z,w.array[x+3]=S.w,w.array[x+4]=T.x,w.array[x+5]=T.y,w.array[x+6]=T.z,w.array[x+7]=T.w,w.array[x+8]=U.x,w.array[x+9]=U.y,w.array[x+10]=U.z,w.array[x+11]=U.w,w.array[x+12]=ka.x,w.array[x+13]=ka.y,w.array[x+14]=ka.z,w.array[x+15]=ka.w,x+=16}k.bindBuffer(k.ARRAY_BUFFER,w.buffer);k.bufferData(k.ARRAY_BUFFER,w.array,mb)}}yb&&(delete ma.__inittedArrays,delete ma.__colorArray,delete ma.__normalArray,delete ma.__tangentArray,delete ma.__uvArray,delete ma.__uv2Array,delete ma.__faceArray,delete ma.__vertexArray,
delete ma.__lineArray,delete ma.__skinIndexArray,delete ma.__skinWeightArray)}}ga.verticesNeedUpdate=!1;ga.morphTargetsNeedUpdate=!1;ga.elementsNeedUpdate=!1;ga.uvsNeedUpdate=!1;ga.normalsNeedUpdate=!1;ga.colorsNeedUpdate=!1;ga.tangentsNeedUpdate=!1;ab.attributes&&q(ab)}else if(ub instanceof THREE.Ribbon){if(ga.verticesNeedUpdate||ga.colorsNeedUpdate){var cc=ga,cd=k.DYNAMIC_DRAW,zc=void 0,Ac=void 0,Jc=void 0,dc=void 0,Kc=void 0,dd=cc.vertices,ed=cc.colors,kd=dd.length,ld=ed.length,Lc=cc.__vertexArray,
Mc=cc.__colorArray,md=cc.colorsNeedUpdate;if(cc.verticesNeedUpdate){for(zc=0;zc<kd;zc++)Jc=dd[zc],dc=3*zc,Lc[dc]=Jc.x,Lc[dc+1]=Jc.y,Lc[dc+2]=Jc.z;k.bindBuffer(k.ARRAY_BUFFER,cc.__webglVertexBuffer);k.bufferData(k.ARRAY_BUFFER,Lc,cd)}if(md){for(Ac=0;Ac<ld;Ac++)Kc=ed[Ac],dc=3*Ac,Mc[dc]=Kc.r,Mc[dc+1]=Kc.g,Mc[dc+2]=Kc.b;k.bindBuffer(k.ARRAY_BUFFER,cc.__webglColorBuffer);k.bufferData(k.ARRAY_BUFFER,Mc,cd)}}ga.verticesNeedUpdate=!1;ga.colorsNeedUpdate=!1}else if(ub instanceof THREE.Line){ab=c(ub,gb);eb=
ab.attributes&&o(ab);if(ga.verticesNeedUpdate||ga.colorsNeedUpdate||eb){var Vb=ga,$c=k.DYNAMIC_DRAW,Bc=void 0,Cc=void 0,Nc=void 0,Aa=void 0,Oc=void 0,fd=Vb.vertices,gd=Vb.colors,nd=fd.length,od=gd.length,Pc=Vb.__vertexArray,Qc=Vb.__colorArray,pd=Vb.colorsNeedUpdate,ad=Vb.__webglCustomAttributesList,Rc=void 0,hd=void 0,Qa=void 0,qc=void 0,cb=void 0,va=void 0;if(Vb.verticesNeedUpdate){for(Bc=0;Bc<nd;Bc++)Nc=fd[Bc],Aa=3*Bc,Pc[Aa]=Nc.x,Pc[Aa+1]=Nc.y,Pc[Aa+2]=Nc.z;k.bindBuffer(k.ARRAY_BUFFER,Vb.__webglVertexBuffer);
k.bufferData(k.ARRAY_BUFFER,Pc,$c)}if(pd){for(Cc=0;Cc<od;Cc++)Oc=gd[Cc],Aa=3*Cc,Qc[Aa]=Oc.r,Qc[Aa+1]=Oc.g,Qc[Aa+2]=Oc.b;k.bindBuffer(k.ARRAY_BUFFER,Vb.__webglColorBuffer);k.bufferData(k.ARRAY_BUFFER,Qc,$c)}if(ad){Rc=0;for(hd=ad.length;Rc<hd;Rc++)if(va=ad[Rc],va.needsUpdate&&(void 0===va.boundTo||"vertices"===va.boundTo)){Aa=0;qc=va.value.length;if(1===va.size)for(Qa=0;Qa<qc;Qa++)va.array[Qa]=va.value[Qa];else if(2===va.size)for(Qa=0;Qa<qc;Qa++)cb=va.value[Qa],va.array[Aa]=cb.x,va.array[Aa+1]=cb.y,
Aa+=2;else if(3===va.size)if("c"===va.type)for(Qa=0;Qa<qc;Qa++)cb=va.value[Qa],va.array[Aa]=cb.r,va.array[Aa+1]=cb.g,va.array[Aa+2]=cb.b,Aa+=3;else for(Qa=0;Qa<qc;Qa++)cb=va.value[Qa],va.array[Aa]=cb.x,va.array[Aa+1]=cb.y,va.array[Aa+2]=cb.z,Aa+=3;else if(4===va.size)for(Qa=0;Qa<qc;Qa++)cb=va.value[Qa],va.array[Aa]=cb.x,va.array[Aa+1]=cb.y,va.array[Aa+2]=cb.z,va.array[Aa+3]=cb.w,Aa+=4;k.bindBuffer(k.ARRAY_BUFFER,va.buffer);k.bufferData(k.ARRAY_BUFFER,va.array,$c)}}}ga.verticesNeedUpdate=!1;ga.colorsNeedUpdate=
!1;ab.attributes&&q(ab)}else ub instanceof THREE.ParticleSystem&&(ga instanceof THREE.BufferGeometry?((ga.verticesNeedUpdate||ga.colorsNeedUpdate)&&h(ga,k.DYNAMIC_DRAW,!ga.dynamic),ga.verticesNeedUpdate=!1,ga.colorsNeedUpdate=!1):(ab=c(ub,gb),eb=ab.attributes&&o(ab),(ga.verticesNeedUpdate||ga.colorsNeedUpdate||ub.sortParticles||eb)&&g(ga,k.DYNAMIC_DRAW,ub),ga.verticesNeedUpdate=!1,ga.colorsNeedUpdate=!1,ab.attributes&&q(ab)))}};this.initMaterial=function(a,b,c,d){var e,f,g,h,i,j,l,m,n;a instanceof
THREE.MeshDepthMaterial?n="depth":a instanceof THREE.MeshNormalMaterial?n="normal":a instanceof THREE.MeshBasicMaterial?n="basic":a instanceof THREE.MeshLambertMaterial?n="lambert":a instanceof THREE.MeshPhongMaterial?n="phong":a instanceof THREE.LineBasicMaterial?n="basic":a instanceof THREE.ParticleBasicMaterial&&(n="particle_basic");if(n){var o=THREE.ShaderLib[n];a.uniforms=THREE.UniformsUtils.clone(o.uniforms);a.vertexShader=o.vertexShader;a.fragmentShader=o.fragmentShader}var p,q,s;e=p=q=s=o=
0;for(f=b.length;e<f;e++)g=b[e],g.onlyShadow||(g instanceof THREE.DirectionalLight&&p++,g instanceof THREE.PointLight&&q++,g instanceof THREE.SpotLight&&s++,g instanceof THREE.HemisphereLight&&o++);q+s+p+o<=ea?e=p:(e=Math.ceil(ea*p/(q+p)),s=q=ea-e,o=e);f=q;g=s;h=o;o=p=0;for(s=b.length;o<s;o++)q=b[o],q.castShadow&&(q instanceof THREE.SpotLight&&p++,q instanceof THREE.DirectionalLight&&!q.shadowCascade&&p++);m=p;ic&&d&&d.useVertexTexture?l=1024:(b=k.getParameter(k.MAX_VERTEX_UNIFORM_VECTORS),b=Math.floor((b-
20)/4),void 0!==d&&d instanceof THREE.SkinnedMesh&&(b=Math.min(d.bones.length,b),b<d.bones.length&&console.warn("WebGLRenderer: too many bones - "+d.bones.length+", this GPU supports just "+b+" (try OpenGL instead of ANGLE)")),l=b);var r;a:{q=a.fragmentShader;s=a.vertexShader;o=a.uniforms;b=a.attributes;p=a.defines;var c={map:!!a.map,envMap:!!a.envMap,lightMap:!!a.lightMap,bumpMap:!!a.bumpMap,normalMap:!!a.normalMap,specularMap:!!a.specularMap,vertexColors:a.vertexColors,fog:c,useFog:a.fog,sizeAttenuation:a.sizeAttenuation,
skinning:a.skinning,maxBones:l,useVertexTexture:ic&&d&&d.useVertexTexture,boneTextureWidth:d&&d.boneTextureWidth,boneTextureHeight:d&&d.boneTextureHeight,morphTargets:a.morphTargets,morphNormals:a.morphNormals,maxMorphTargets:this.maxMorphTargets,maxMorphNormals:this.maxMorphNormals,maxDirLights:e,maxPointLights:f,maxSpotLights:g,maxHemiLights:h,maxShadows:m,shadowMapEnabled:this.shadowMapEnabled&&d.receiveShadow,shadowMapSoft:this.shadowMapSoft,shadowMapDebug:this.shadowMapDebug,shadowMapCascade:this.shadowMapCascade,
alphaTest:a.alphaTest,metal:a.metal,perPixel:a.perPixel,wrapAround:a.wrapAround,doubleSided:a.side===THREE.DoubleSide,flipSided:a.side===THREE.BackSide},t,u,v,d=[];n?d.push(n):(d.push(q),d.push(s));for(u in p)d.push(u),d.push(p[u]);for(t in c)d.push(t),d.push(c[t]);n=d.join();t=0;for(u=qa.length;t<u;t++)if(d=qa[t],d.code===n){d.usedTimes++;r=d.program;break a}t=[];for(v in p)u=p[v],!1!==u&&(u="#define "+v+" "+u,t.push(u));u=t.join("\n");v=k.createProgram();t=["precision "+K+" float;",u,hc?"#define VERTEX_TEXTURES":
"",Q.gammaInput?"#define GAMMA_INPUT":"",Q.gammaOutput?"#define GAMMA_OUTPUT":"",Q.physicallyBasedShading?"#define PHYSICALLY_BASED_SHADING":"","#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+c.maxSpotLights,"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,"#define MAX_BONES "+c.maxBones,c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":
"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":"",c.skinning?"#define USE_SKINNING":"",c.useVertexTexture?"#define BONE_TEXTURE":"",c.boneTextureWidth?"#define N_BONE_PIXEL_X "+c.boneTextureWidth.toFixed(1):"",c.boneTextureHeight?"#define N_BONE_PIXEL_Y "+c.boneTextureHeight.toFixed(1):"",c.morphTargets?"#define USE_MORPHTARGETS":"",c.morphNormals?"#define USE_MORPHNORMALS":"",c.perPixel?"#define PHONG_PER_PIXEL":"",c.wrapAround?
"#define WRAP_AROUND":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapSoft?"#define SHADOWMAP_SOFT":"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",c.sizeAttenuation?"#define USE_SIZEATTENUATION":"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\n#ifdef USE_MORPHNORMALS\nattribute vec3 morphNormal0;\nattribute vec3 morphNormal1;\nattribute vec3 morphNormal2;\nattribute vec3 morphNormal3;\n#else\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n");
u=["precision "+K+" float;",c.bumpMap||c.normalMap?"#extension GL_OES_standard_derivatives : enable":"",u,"#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+c.maxSpotLights,"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,c.alphaTest?"#define ALPHATEST "+c.alphaTest:"",Q.gammaInput?"#define GAMMA_INPUT":"",Q.gammaOutput?"#define GAMMA_OUTPUT":"",Q.physicallyBasedShading?"#define PHYSICALLY_BASED_SHADING":"",
c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&c.fog instanceof THREE.FogExp2?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":"",c.metal?"#define METAL":"",c.perPixel?"#define PHONG_PER_PIXEL":"",c.wrapAround?"#define WRAP_AROUND":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?
"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapSoft?"#define SHADOWMAP_SOFT":"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?"#define SHADOWMAP_CASCADE":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");u=C("fragment",u+q);t=C("vertex",t+s);k.attachShader(v,t);k.attachShader(v,u);k.linkProgram(v);k.getProgramParameter(v,k.LINK_STATUS)||console.error("Could not initialise shader\nVALIDATE_STATUS: "+k.getProgramParameter(v,
k.VALIDATE_STATUS)+", gl error ["+k.getError()+"]");k.deleteShader(u);k.deleteShader(t);v.uniforms={};v.attributes={};var y;t="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences".split(" ");c.useVertexTexture?t.push("boneTexture"):t.push("boneGlobalMatrices");for(y in o)t.push(y);y=t;t=0;for(u=y.length;t<u;t++)d=y[t],v.uniforms[d]=k.getUniformLocation(v,d);t="position normal uv uv2 tangent color skinIndex skinWeight".split(" ");for(y=0;y<c.maxMorphTargets;y++)t.push("morphTarget"+
y);for(y=0;y<c.maxMorphNormals;y++)t.push("morphNormal"+y);for(r in b)t.push(r);r=t;y=0;for(t=r.length;y<t;y++)u=r[y],v.attributes[u]=k.getAttribLocation(v,u);v.id=la++;qa.push({program:v,code:n,usedTimes:1});Q.info.memory.programs=qa.length;r=v}a.program=r;r=a.program.attributes;0<=r.position&&k.enableVertexAttribArray(r.position);0<=r.color&&k.enableVertexAttribArray(r.color);0<=r.normal&&k.enableVertexAttribArray(r.normal);0<=r.tangent&&k.enableVertexAttribArray(r.tangent);a.skinning&&(0<=r.skinIndex&&
0<=r.skinWeight)&&(k.enableVertexAttribArray(r.skinIndex),k.enableVertexAttribArray(r.skinWeight));if(a.attributes)for(j in a.attributes)void 0!==r[j]&&0<=r[j]&&k.enableVertexAttribArray(r[j]);if(a.morphTargets){a.numSupportedMorphTargets=0;v="morphTarget";for(j=0;j<this.maxMorphTargets;j++)y=v+j,0<=r[y]&&(k.enableVertexAttribArray(r[y]),a.numSupportedMorphTargets++)}if(a.morphNormals){a.numSupportedMorphNormals=0;v="morphNormal";for(j=0;j<this.maxMorphNormals;j++)y=v+j,0<=r[y]&&(k.enableVertexAttribArray(r[y]),
a.numSupportedMorphNormals++)}a.uniformsList=[];for(i in a.uniforms)a.uniformsList.push([a.uniforms[i],i])};this.setFaceCulling=function(a,b){a?(!b||"ccw"===b?k.frontFace(k.CCW):k.frontFace(k.CW),"back"===a?k.cullFace(k.BACK):"front"===a?k.cullFace(k.FRONT):k.cullFace(k.FRONT_AND_BACK),k.enable(k.CULL_FACE)):k.disable(k.CULL_FACE)};this.setMaterialFaces=function(a){var b=a.side===THREE.DoubleSide,a=a.side===THREE.BackSide;Ga!==b&&(b?k.disable(k.CULL_FACE):k.enable(k.CULL_FACE),Ga=b);Pa!==a&&(a?k.frontFace(k.CW):
k.frontFace(k.CCW),Pa=a)};this.setDepthTest=function(a){ib!==a&&(a?k.enable(k.DEPTH_TEST):k.disable(k.DEPTH_TEST),ib=a)};this.setDepthWrite=function(a){Ra!==a&&(k.depthMask(a),Ra=a)};this.setBlending=function(a,b,c,d){a!==Ia&&(a===THREE.NoBlending?k.disable(k.BLEND):a===THREE.AdditiveBlending?(k.enable(k.BLEND),k.blendEquation(k.FUNC_ADD),k.blendFunc(k.SRC_ALPHA,k.ONE)):a===THREE.SubtractiveBlending?(k.enable(k.BLEND),k.blendEquation(k.FUNC_ADD),k.blendFunc(k.ZERO,k.ONE_MINUS_SRC_COLOR)):a===THREE.MultiplyBlending?
(k.enable(k.BLEND),k.blendEquation(k.FUNC_ADD),k.blendFunc(k.ZERO,k.SRC_COLOR)):a===THREE.CustomBlending?k.enable(k.BLEND):(k.enable(k.BLEND),k.blendEquationSeparate(k.FUNC_ADD,k.FUNC_ADD),k.blendFuncSeparate(k.SRC_ALPHA,k.ONE_MINUS_SRC_ALPHA,k.ONE,k.ONE_MINUS_SRC_ALPHA)),Ia=a);if(a===THREE.CustomBlending){if(b!==Ua&&(k.blendEquation(E(b)),Ua=b),c!==na||d!==Va)k.blendFunc(E(c),E(d)),na=c,Va=d}else Va=na=Ua=null};this.setTexture=function(a,b){if(a.needsUpdate){a.__webglInit||(a.__webglInit=!0,a.__webglTexture=
k.createTexture(),Q.info.memory.textures++);k.activeTexture(k.TEXTURE0+b);k.bindTexture(k.TEXTURE_2D,a.__webglTexture);k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,a.flipY);k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha);var c=a.image,d=0===(c.width&c.width-1)&&0===(c.height&c.height-1),e=E(a.format),f=E(a.type);G(k.TEXTURE_2D,a,d);if(a instanceof THREE.CompressedTexture)for(var f=a.mipmaps,g=0,h=f.length;g<h;g++)c=f[g],k.compressedTexImage2D(k.TEXTURE_2D,g,e,c.width,c.height,0,c.data);
else a instanceof THREE.DataTexture?k.texImage2D(k.TEXTURE_2D,0,e,c.width,c.height,0,e,f,c.data):k.texImage2D(k.TEXTURE_2D,0,e,e,f,a.image);a.generateMipmaps&&d&&k.generateMipmap(k.TEXTURE_2D);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()}else k.activeTexture(k.TEXTURE0+b),k.bindTexture(k.TEXTURE_2D,a.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&!a.__webglFramebuffer){void 0===a.depthBuffer&&(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=
!0);a.__webglTexture=k.createTexture();var c=0===(a.width&a.width-1)&&0===(a.height&a.height-1),d=E(a.format),e=E(a.type);if(b){a.__webglFramebuffer=[];a.__webglRenderbuffer=[];k.bindTexture(k.TEXTURE_CUBE_MAP,a.__webglTexture);G(k.TEXTURE_CUBE_MAP,a,c);for(var f=0;6>f;f++){a.__webglFramebuffer[f]=k.createFramebuffer();a.__webglRenderbuffer[f]=k.createRenderbuffer();k.texImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,d,a.width,a.height,0,d,e,null);var g=a,h=k.TEXTURE_CUBE_MAP_POSITIVE_X+f;k.bindFramebuffer(k.FRAMEBUFFER,
a.__webglFramebuffer[f]);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,h,g.__webglTexture,0);H(a.__webglRenderbuffer[f],a)}c&&k.generateMipmap(k.TEXTURE_CUBE_MAP)}else a.__webglFramebuffer=k.createFramebuffer(),a.__webglRenderbuffer=k.createRenderbuffer(),k.bindTexture(k.TEXTURE_2D,a.__webglTexture),G(k.TEXTURE_2D,a,c),k.texImage2D(k.TEXTURE_2D,0,d,a.width,a.height,0,d,e,null),d=k.TEXTURE_2D,k.bindFramebuffer(k.FRAMEBUFFER,a.__webglFramebuffer),k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,
d,a.__webglTexture,0),H(a.__webglRenderbuffer,a),c&&k.generateMipmap(k.TEXTURE_2D);b?k.bindTexture(k.TEXTURE_CUBE_MAP,null):k.bindTexture(k.TEXTURE_2D,null);k.bindRenderbuffer(k.RENDERBUFFER,null);k.bindFramebuffer(k.FRAMEBUFFER,null)}a?(b=b?a.__webglFramebuffer[a.activeCubeFace]:a.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=wa,a=wb,d=$a,e=Ja);b!==fa&&(k.bindFramebuffer(k.FRAMEBUFFER,b),k.viewport(d,e,c,a),fa=b);Da=c;qb=a};this.shadowMapPlugin=new THREE.ShadowMapPlugin;this.addPrePlugin(this.shadowMapPlugin);
this.addPostPlugin(new THREE.SpritePlugin);this.addPostPlugin(new THREE.LensFlarePlugin)};
THREE.WebGLRenderTarget=function(a,b,c){this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.format=void 0!==c.format?c.format:
THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0};
THREE.WebGLRenderTarget.prototype.clone=function(){var a=new THREE.WebGLRenderTarget(this.width,this.height);a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.anisotropy=this.anisotropy;a.minFilter=this.minFilter;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.format=this.format;a.type=this.type;a.depthBuffer=this.depthBuffer;a.stencilBuffer=this.stencilBuffer;a.generateMipmaps=this.generateMipmaps;return a};
THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);THREE.RenderableVertex=function(){this.positionWorld=new THREE.Vector3;this.positionScreen=new THREE.Vector4;this.visible=!0};THREE.RenderableVertex.prototype.copy=function(a){this.positionWorld.copy(a.positionWorld);this.positionScreen.copy(a.positionScreen)};
THREE.RenderableFace3=function(){this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.centroidWorld=new THREE.Vector3;this.centroidScreen=new THREE.Vector3;this.normalWorld=new THREE.Vector3;this.vertexNormalsWorld=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.vertexNormalsLength=0;this.material=this.color=null;this.uvs=[[]];this.z=null};
THREE.RenderableFace4=function(){this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.v4=new THREE.RenderableVertex;this.centroidWorld=new THREE.Vector3;this.centroidScreen=new THREE.Vector3;this.normalWorld=new THREE.Vector3;this.vertexNormalsWorld=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.vertexNormalsLength=0;this.material=this.color=null;this.uvs=[[]];this.z=null};
THREE.RenderableObject=function(){this.z=this.object=null};THREE.RenderableParticle=function(){this.rotation=this.z=this.y=this.x=this.object=null;this.scale=new THREE.Vector2;this.material=null};THREE.RenderableLine=function(){this.z=null;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.material=null};
THREE.ColorUtils={adjustHSV:function(a,b,c,d){var e=THREE.ColorUtils.__hsv;THREE.ColorUtils.rgbToHsv(a,e);e.h=THREE.Math.clamp(e.h+b,0,1);e.s=THREE.Math.clamp(e.s+c,0,1);e.v=THREE.Math.clamp(e.v+d,0,1);a.setHSV(e.h,e.s,e.v)},rgbToHsv:function(a,b){var c=a.r,d=a.g,e=a.b,f=Math.max(Math.max(c,d),e),g=Math.min(Math.min(c,d),e);if(g===f)g=c=0;else{var h=f-g,g=h/f,c=(c===f?(d-e)/h:d===f?2+(e-c)/h:4+(c-d)/h)/6;0>c&&(c+=1);1<c&&(c-=1)}void 0===b&&(b={h:0,s:0,v:0});b.h=c;b.s=g;b.v=f;return b}};
THREE.ColorUtils.__hsv={h:0,s:0,v:0};
THREE.GeometryUtils={merge:function(a,b){for(var c,d,e=a.vertices.length,f=b instanceof THREE.Mesh?b.geometry:b,g=a.vertices,h=f.vertices,i=a.faces,j=f.faces,l=a.faceVertexUvs[0],m=f.faceVertexUvs[0],n={},p=0;p<a.materials.length;p++)n[a.materials[p].id]=p;b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),c=b.matrix,d=new THREE.Matrix4,d.extractRotation(c,b.scale));for(var p=0,o=h.length;p<o;p++){var q=h[p].clone();c&&c.multiplyVector3(q);g.push(q)}p=0;for(o=j.length;p<o;p++){var g=j[p],
r,t,B=g.vertexNormals,u=g.vertexColors;g instanceof THREE.Face3?r=new THREE.Face3(g.a+e,g.b+e,g.c+e):g instanceof THREE.Face4&&(r=new THREE.Face4(g.a+e,g.b+e,g.c+e,g.d+e));r.normal.copy(g.normal);d&&d.multiplyVector3(r.normal);h=0;for(q=B.length;h<q;h++)t=B[h].clone(),d&&d.multiplyVector3(t),r.vertexNormals.push(t);r.color.copy(g.color);h=0;for(q=u.length;h<q;h++)t=u[h],r.vertexColors.push(t.clone());void 0!==g.materialIndex&&(h=f.materials[g.materialIndex],q=h.id,u=n[q],void 0===u&&(u=a.materials.length,
n[q]=u,a.materials.push(h)),r.materialIndex=u);r.centroid.copy(g.centroid);c&&c.multiplyVector3(r.centroid);i.push(r)}p=0;for(o=m.length;p<o;p++){c=m[p];d=[];h=0;for(q=c.length;h<q;h++)d.push(new THREE.UV(c[h].u,c[h].v));l.push(d)}},clone:function(a){var b=new THREE.Geometry,c,d=a.vertices,e=a.faces,f=a.faceVertexUvs[0];a.materials&&(b.materials=a.materials.slice());a=0;for(c=d.length;a<c;a++)b.vertices.push(d[a].clone());a=0;for(c=e.length;a<c;a++)b.faces.push(e[a].clone());a=0;for(c=f.length;a<
c;a++){for(var d=f[a],e=[],g=0,h=d.length;g<h;g++)e.push(new THREE.UV(d[g].u,d[g].v));b.faceVertexUvs[0].push(e)}return b},randomPointInTriangle:function(a,b,c){var d,e,f,g=new THREE.Vector3,h=THREE.GeometryUtils.__v1;d=THREE.GeometryUtils.random();e=THREE.GeometryUtils.random();1<d+e&&(d=1-d,e=1-e);f=1-d-e;g.copy(a);g.multiplyScalar(d);h.copy(b);h.multiplyScalar(e);g.addSelf(h);h.copy(c);h.multiplyScalar(f);g.addSelf(h);return g},randomPointInFace:function(a,b,c){var d,e,f;if(a instanceof THREE.Face3)return d=
b.vertices[a.a],e=b.vertices[a.b],f=b.vertices[a.c],THREE.GeometryUtils.randomPointInTriangle(d,e,f);if(a instanceof THREE.Face4){d=b.vertices[a.a];e=b.vertices[a.b];f=b.vertices[a.c];var b=b.vertices[a.d],g;c?a._area1&&a._area2?(c=a._area1,g=a._area2):(c=THREE.GeometryUtils.triangleArea(d,e,b),g=THREE.GeometryUtils.triangleArea(e,f,b),a._area1=c,a._area2=g):(c=THREE.GeometryUtils.triangleArea(d,e,b),g=THREE.GeometryUtils.triangleArea(e,f,b));return THREE.GeometryUtils.random()*(c+g)<c?THREE.GeometryUtils.randomPointInTriangle(d,
e,b):THREE.GeometryUtils.randomPointInTriangle(e,f,b)}},randomPointsInGeometry:function(a,b){function c(a){function b(c,d){if(d<c)return c;var e=c+Math.floor((d-c)/2);return j[e]>a?b(c,e-1):j[e]<a?b(e+1,d):e}return b(0,j.length-1)}var d,e,f=a.faces,g=a.vertices,h=f.length,i=0,j=[],l,m,n,p;for(e=0;e<h;e++)d=f[e],d instanceof THREE.Face3?(l=g[d.a],m=g[d.b],n=g[d.c],d._area=THREE.GeometryUtils.triangleArea(l,m,n)):d instanceof THREE.Face4&&(l=g[d.a],m=g[d.b],n=g[d.c],p=g[d.d],d._area1=THREE.GeometryUtils.triangleArea(l,
m,p),d._area2=THREE.GeometryUtils.triangleArea(m,n,p),d._area=d._area1+d._area2),i+=d._area,j[e]=i;d=[];for(e=0;e<b;e++)g=THREE.GeometryUtils.random()*i,g=c(g),d[e]=THREE.GeometryUtils.randomPointInFace(f[g],a,!0);return d},triangleArea:function(a,b,c){var d,e=THREE.GeometryUtils.__v1;e.sub(a,b);d=e.length();e.sub(a,c);a=e.length();e.sub(b,c);c=e.length();b=0.5*(d+a+c);return Math.sqrt(b*(b-d)*(b-a)*(b-c))},center:function(a){a.computeBoundingBox();var b=a.boundingBox,c=new THREE.Vector3;c.add(b.min,
b.max);c.multiplyScalar(-0.5);a.applyMatrix((new THREE.Matrix4).makeTranslation(c.x,c.y,c.z));a.computeBoundingBox();return c},normalizeUVs:function(a){for(var a=a.faceVertexUvs[0],b=0,c=a.length;b<c;b++)for(var d=a[b],e=0,f=d.length;e<f;e++)if(1!==d[e].u&&(d[e].u-=Math.floor(d[e].u)),1!==d[e].v)d[e].v-=Math.floor(d[e].v)},triangulateQuads:function(a){var b,c,d,e,f=[],g=[],h=[];b=0;for(c=a.faceUvs.length;b<c;b++)g[b]=[];b=0;for(c=a.faceVertexUvs.length;b<c;b++)h[b]=[];b=0;for(c=a.faces.length;b<c;b++)if(d=
a.faces[b],d instanceof THREE.Face4){e=d.a;var i=d.b,j=d.c,l=d.d,m=new THREE.Face3,n=new THREE.Face3;m.color.copy(d.color);n.color.copy(d.color);m.materialIndex=d.materialIndex;n.materialIndex=d.materialIndex;m.a=e;m.b=i;m.c=l;n.a=i;n.b=j;n.c=l;4===d.vertexColors.length&&(m.vertexColors[0]=d.vertexColors[0].clone(),m.vertexColors[1]=d.vertexColors[1].clone(),m.vertexColors[2]=d.vertexColors[3].clone(),n.vertexColors[0]=d.vertexColors[1].clone(),n.vertexColors[1]=d.vertexColors[2].clone(),n.vertexColors[2]=
d.vertexColors[3].clone());f.push(m,n);d=0;for(e=a.faceVertexUvs.length;d<e;d++)a.faceVertexUvs[d].length&&(m=a.faceVertexUvs[d][b],i=m[1],j=m[2],l=m[3],m=[m[0].clone(),i.clone(),l.clone()],i=[i.clone(),j.clone(),l.clone()],h[d].push(m,i));d=0;for(e=a.faceUvs.length;d<e;d++)a.faceUvs[d].length&&(i=a.faceUvs[d][b],g[d].push(i,i))}else{f.push(d);d=0;for(e=a.faceUvs.length;d<e;d++)g[d].push(a.faceUvs[d][b]);d=0;for(e=a.faceVertexUvs.length;d<e;d++)h[d].push(a.faceVertexUvs[d][b])}a.faces=f;a.faceUvs=
g;a.faceVertexUvs=h;a.computeCentroids();a.computeFaceNormals();a.computeVertexNormals();a.hasTangents&&a.computeTangents()},explode:function(a){for(var b=[],c=0,d=a.faces.length;c<d;c++){var e=b.length,f=a.faces[c];if(f instanceof THREE.Face4){var g=f.a,h=f.b,i=f.c,g=a.vertices[g],h=a.vertices[h],i=a.vertices[i],j=a.vertices[f.d];b.push(g.clone());b.push(h.clone());b.push(i.clone());b.push(j.clone());f.a=e;f.b=e+1;f.c=e+2;f.d=e+3}else g=f.a,h=f.b,i=f.c,g=a.vertices[g],h=a.vertices[h],i=a.vertices[i],
b.push(g.clone()),b.push(h.clone()),b.push(i.clone()),f.a=e,f.b=e+1,f.c=e+2}a.vertices=b;delete a.__tmpVertices},tessellate:function(a,b){var c,d,e,f,g,h,i,j,l,m,n,p,o,q,r,t,B,u,s,z=[],A=[];c=0;for(d=a.faceVertexUvs.length;c<d;c++)A[c]=[];c=0;for(d=a.faces.length;c<d;c++)if(e=a.faces[c],e instanceof THREE.Face3)if(f=e.a,g=e.b,h=e.c,j=a.vertices[f],l=a.vertices[g],m=a.vertices[h],p=j.distanceTo(l),o=l.distanceTo(m),n=j.distanceTo(m),p>b||o>b||n>b){i=a.vertices.length;u=e.clone();s=e.clone();p>=o&&
p>=n?(j=j.clone(),j.lerpSelf(l,0.5),u.a=f,u.b=i,u.c=h,s.a=i,s.b=g,s.c=h,3===e.vertexNormals.length&&(f=e.vertexNormals[0].clone(),f.lerpSelf(e.vertexNormals[1],0.5),u.vertexNormals[1].copy(f),s.vertexNormals[0].copy(f)),3===e.vertexColors.length&&(f=e.vertexColors[0].clone(),f.lerpSelf(e.vertexColors[1],0.5),u.vertexColors[1].copy(f),s.vertexColors[0].copy(f)),e=0):o>=p&&o>=n?(j=l.clone(),j.lerpSelf(m,0.5),u.a=f,u.b=g,u.c=i,s.a=i,s.b=h,s.c=f,3===e.vertexNormals.length&&(f=e.vertexNormals[1].clone(),
f.lerpSelf(e.vertexNormals[2],0.5),u.vertexNormals[2].copy(f),s.vertexNormals[0].copy(f),s.vertexNormals[1].copy(e.vertexNormals[2]),s.vertexNormals[2].copy(e.vertexNormals[0])),3===e.vertexColors.length&&(f=e.vertexColors[1].clone(),f.lerpSelf(e.vertexColors[2],0.5),u.vertexColors[2].copy(f),s.vertexColors[0].copy(f),s.vertexColors[1].copy(e.vertexColors[2]),s.vertexColors[2].copy(e.vertexColors[0])),e=1):(j=j.clone(),j.lerpSelf(m,0.5),u.a=f,u.b=g,u.c=i,s.a=i,s.b=g,s.c=h,3===e.vertexNormals.length&&
(f=e.vertexNormals[0].clone(),f.lerpSelf(e.vertexNormals[2],0.5),u.vertexNormals[2].copy(f),s.vertexNormals[0].copy(f)),3===e.vertexColors.length&&(f=e.vertexColors[0].clone(),f.lerpSelf(e.vertexColors[2],0.5),u.vertexColors[2].copy(f),s.vertexColors[0].copy(f)),e=2);z.push(u,s);a.vertices.push(j);f=0;for(g=a.faceVertexUvs.length;f<g;f++)a.faceVertexUvs[f].length&&(j=a.faceVertexUvs[f][c],s=j[0],h=j[1],u=j[2],0===e?(l=s.clone(),l.lerpSelf(h,0.5),j=[s.clone(),l.clone(),u.clone()],h=[l.clone(),h.clone(),
u.clone()]):1===e?(l=h.clone(),l.lerpSelf(u,0.5),j=[s.clone(),h.clone(),l.clone()],h=[l.clone(),u.clone(),s.clone()]):(l=s.clone(),l.lerpSelf(u,0.5),j=[s.clone(),h.clone(),l.clone()],h=[l.clone(),h.clone(),u.clone()]),A[f].push(j,h))}else{z.push(e);f=0;for(g=a.faceVertexUvs.length;f<g;f++)A[f].push(a.faceVertexUvs[f][c])}else if(f=e.a,g=e.b,h=e.c,i=e.d,j=a.vertices[f],l=a.vertices[g],m=a.vertices[h],n=a.vertices[i],p=j.distanceTo(l),o=l.distanceTo(m),q=m.distanceTo(n),r=j.distanceTo(n),p>b||o>b||
q>b||r>b){t=a.vertices.length;B=a.vertices.length+1;u=e.clone();s=e.clone();p>=o&&p>=q&&p>=r||q>=o&&q>=p&&q>=r?(p=j.clone(),p.lerpSelf(l,0.5),l=m.clone(),l.lerpSelf(n,0.5),u.a=f,u.b=t,u.c=B,u.d=i,s.a=t,s.b=g,s.c=h,s.d=B,4===e.vertexNormals.length&&(f=e.vertexNormals[0].clone(),f.lerpSelf(e.vertexNormals[1],0.5),g=e.vertexNormals[2].clone(),g.lerpSelf(e.vertexNormals[3],0.5),u.vertexNormals[1].copy(f),u.vertexNormals[2].copy(g),s.vertexNormals[0].copy(f),s.vertexNormals[3].copy(g)),4===e.vertexColors.length&&
(f=e.vertexColors[0].clone(),f.lerpSelf(e.vertexColors[1],0.5),g=e.vertexColors[2].clone(),g.lerpSelf(e.vertexColors[3],0.5),u.vertexColors[1].copy(f),u.vertexColors[2].copy(g),s.vertexColors[0].copy(f),s.vertexColors[3].copy(g)),e=0):(p=l.clone(),p.lerpSelf(m,0.5),l=n.clone(),l.lerpSelf(j,0.5),u.a=f,u.b=g,u.c=t,u.d=B,s.a=B,s.b=t,s.c=h,s.d=i,4===e.vertexNormals.length&&(f=e.vertexNormals[1].clone(),f.lerpSelf(e.vertexNormals[2],0.5),g=e.vertexNormals[3].clone(),g.lerpSelf(e.vertexNormals[0],0.5),
u.vertexNormals[2].copy(f),u.vertexNormals[3].copy(g),s.vertexNormals[0].copy(g),s.vertexNormals[1].copy(f)),4===e.vertexColors.length&&(f=e.vertexColors[1].clone(),f.lerpSelf(e.vertexColors[2],0.5),g=e.vertexColors[3].clone(),g.lerpSelf(e.vertexColors[0],0.5),u.vertexColors[2].copy(f),u.vertexColors[3].copy(g),s.vertexColors[0].copy(g),s.vertexColors[1].copy(f)),e=1);z.push(u,s);a.vertices.push(p,l);f=0;for(g=a.faceVertexUvs.length;f<g;f++)a.faceVertexUvs[f].length&&(j=a.faceVertexUvs[f][c],s=j[0],
h=j[1],u=j[2],j=j[3],0===e?(l=s.clone(),l.lerpSelf(h,0.5),m=u.clone(),m.lerpSelf(j,0.5),s=[s.clone(),l.clone(),m.clone(),j.clone()],h=[l.clone(),h.clone(),u.clone(),m.clone()]):(l=h.clone(),l.lerpSelf(u,0.5),m=j.clone(),m.lerpSelf(s,0.5),s=[s.clone(),h.clone(),l.clone(),m.clone()],h=[m.clone(),l.clone(),u.clone(),j.clone()]),A[f].push(s,h))}else{z.push(e);f=0;for(g=a.faceVertexUvs.length;f<g;f++)A[f].push(a.faceVertexUvs[f][c])}a.faces=z;a.faceVertexUvs=A}};THREE.GeometryUtils.random=THREE.Math.random16;
THREE.GeometryUtils.__v1=new THREE.Vector3;
THREE.ImageUtils={crossOrigin:"anonymous",loadTexture:function(a,b,c,d){var e=new Image,f=new THREE.Texture(e,b),b=new THREE.ImageLoader;b.addEventListener("load",function(a){f.image=a.content;f.needsUpdate=!0;c&&c(f)});b.addEventListener("error",function(a){d&&d(a.message)});b.crossOrigin=this.crossOrigin;b.load(a,e);return f},loadCompressedTexture:function(a,b,c,d){var e=new THREE.CompressedTexture;e.mapping=b;var f=new XMLHttpRequest;f.onload=function(){var a=THREE.ImageUtils.parseDDS(f.response,
!0);e.format=a.format;e.mipmaps=a.mipmaps;e.image.width=a.width;e.image.height=a.height;e.generateMipmaps=!1;e.needsUpdate=!0;c&&c(e)};f.onerror=d;f.open("GET",a,!0);f.responseType="arraybuffer";f.send(null);return e},loadTextureCube:function(a,b,c,d){var e=[];e.loadCount=0;var f=new THREE.Texture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;for(var b=0,g=a.length;b<g;++b){var h=new Image;e[b]=h;h.onload=function(){e.loadCount=e.loadCount+1;if(e.loadCount===6){f.needsUpdate=true;c&&c()}};h.onerror=
d;h.crossOrigin=this.crossOrigin;h.src=a[b]}return f},loadCompressedTextureCube:function(a,b,c,d){var e=[];e.loadCount=0;var f=new THREE.CompressedTexture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;f.generateMipmaps=!1;for(var b=function(a,b){return function(){var d=THREE.ImageUtils.parseDDS(a.response,true);b.format=d.format;b.mipmaps=d.mipmaps;b.width=d.width;b.height=d.height;e.loadCount=e.loadCount+1;if(e.loadCount===6){f.format=d.format;f.needsUpdate=true;c&&c()}}},g=0,h=a.length;g<h;++g){var i=
{};e[g]=i;var j=new XMLHttpRequest;j.onload=b(j,i);j.onerror=d;j.open("GET",a[g],!0);j.responseType="arraybuffer";j.send(null)}return f},parseDDS:function(a,b){function c(a){return a.charCodeAt(0)+(a.charCodeAt(1)<<8)+(a.charCodeAt(2)<<16)+(a.charCodeAt(3)<<24)}var d={mipmaps:[],width:0,height:0,format:null,mipmapCount:1},e=c("DXT1"),f=c("DXT3"),g=c("DXT5"),h=new Int32Array(a,0,31);if(542327876!==h[0])return console.error("ImageUtils.parseDDS(): Invalid magic number in DDS header"),d;if(!h[20]&4)return console.error("ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code"),
d;var i=h[21];switch(i){case e:e=8;d.format=THREE.RGB_S3TC_DXT1_Format;break;case f:e=16;d.format=THREE.RGBA_S3TC_DXT3_Format;break;case g:e=16;d.format=THREE.RGBA_S3TC_DXT5_Format;break;default:return console.error("ImageUtils.parseDDS(): Unsupported FourCC code: ",String.fromCharCode(i&255,i>>8&255,i>>16&255,i>>24&255)),d}d.mipmapCount=1;h[2]&131072&&!1!==b&&(d.mipmapCount=Math.max(1,h[7]));d.width=h[4];d.height=h[3];h=h[1]+4;f=d.width;g=d.height;for(i=0;i<d.mipmapCount;i++){var j=Math.max(4,f)/
4*Math.max(4,g)/4*e,l={data:new Uint8Array(a,h,j),width:f,height:g};d.mipmaps.push(l);h+=j;f=Math.max(0.5*f,1);g=Math.max(0.5*g,1)}return d},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]},b=b|1,d=a.width,e=a.height,f=document.createElement("canvas");f.width=d;f.height=e;var g=f.getContext("2d");g.drawImage(a,0,0);for(var h=g.getImageData(0,0,d,e).data,i=g.createImageData(d,e),j=i.data,l=0;l<d;l++)for(var m=0;m<e;m++){var n=
0>m-1?0:m-1,p=m+1>e-1?e-1:m+1,o=0>l-1?0:l-1,q=l+1>d-1?d-1:l+1,r=[],t=[0,0,h[4*(m*d+l)]/255*b];r.push([-1,0,h[4*(m*d+o)]/255*b]);r.push([-1,-1,h[4*(n*d+o)]/255*b]);r.push([0,-1,h[4*(n*d+l)]/255*b]);r.push([1,-1,h[4*(n*d+q)]/255*b]);r.push([1,0,h[4*(m*d+q)]/255*b]);r.push([1,1,h[4*(p*d+q)]/255*b]);r.push([0,1,h[4*(p*d+l)]/255*b]);r.push([-1,1,h[4*(p*d+o)]/255*b]);n=[];o=r.length;for(p=0;p<o;p++){var q=r[p],B=r[(p+1)%o],q=[q[0]-t[0],q[1]-t[1],q[2]-t[2]],B=[B[0]-t[0],B[1]-t[1],B[2]-t[2]];n.push(c([q[1]*
B[2]-q[2]*B[1],q[2]*B[0]-q[0]*B[2],q[0]*B[1]-q[1]*B[0]]))}r=[0,0,0];for(p=0;p<n.length;p++)r[0]+=n[p][0],r[1]+=n[p][1],r[2]+=n[p][2];r[0]/=n.length;r[1]/=n.length;r[2]/=n.length;t=4*(m*d+l);j[t]=255*((r[0]+1)/2)|0;j[t+1]=255*((r[1]+1)/2)|0;j[t+2]=255*r[2]|0;j[t+3]=255}g.putImageData(i,0,0);return f},generateDataTexture:function(a,b,c){for(var d=a*b,e=new Uint8Array(3*d),f=Math.floor(255*c.r),g=Math.floor(255*c.g),c=Math.floor(255*c.b),h=0;h<d;h++)e[3*h]=f,e[3*h+1]=g,e[3*h+2]=c;a=new THREE.DataTexture(e,
a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Object3D,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};
THREE.WebGLRenderer&&(THREE.ShaderUtils={lib:{fresnel:{uniforms:{mRefractionRatio:{type:"f",value:1.02},mFresnelBias:{type:"f",value:0.1},mFresnelPower:{type:"f",value:2},mFresnelScale:{type:"f",value:1},tCube:{type:"t",value:null}},fragmentShader:"uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\nrefractedColor.a = 1.0;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}",
vertexShader:"uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 mPosition = modelMatrix * vec4( position, 1.0 );\nvec3 nWorld = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\nvec3 I = mPosition.xyz - cameraPosition;\nvReflect = reflect( I, nWorld );\nvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}"},
normal:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{enableAO:{type:"i",value:0},enableDiffuse:{type:"i",value:0},enableSpecular:{type:"i",value:0},enableReflection:{type:"i",value:0},enableDisplacement:{type:"i",value:0},tDisplacement:{type:"t",value:null},tDiffuse:{type:"t",value:null},tCube:{type:"t",value:null},tNormal:{type:"t",value:null},tSpecular:{type:"t",value:null},tAO:{type:"t",value:null},uNormalScale:{type:"v2",value:new THREE.Vector2(1,
1)},uDisplacementBias:{type:"f",value:0},uDisplacementScale:{type:"f",value:1},uDiffuseColor:{type:"c",value:new THREE.Color(16777215)},uSpecularColor:{type:"c",value:new THREE.Color(1118481)},uAmbientColor:{type:"c",value:new THREE.Color(16777215)},uShininess:{type:"f",value:30},uOpacity:{type:"f",value:1},useRefract:{type:"i",value:0},uRefractionRatio:{type:"f",value:0.98},uReflectivity:{type:"f",value:0.5},uOffset:{type:"v2",value:new THREE.Vector2(0,0)},uRepeat:{type:"v2",value:new THREE.Vector2(1,
1)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),fragmentShader:["uniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform float uOpacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float uRefractionRatio;\nuniform float uReflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightPosition[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngle[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3( 1.0 ), uOpacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse ) {\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( tDiffuse, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n#endif\n}\nif( enableAO ) {\n#ifdef GAMMA_INPUT\nvec4 aoColor = texture2D( tAO, vUv );\naoColor.xyz *= aoColor.xyz;\ngl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n#endif\n}\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\nvec3 finalNormal = tsb * normalTex;\n#ifdef FLIP_SIDED\nfinalNormal = -finalNormal;\n#endif\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\nfloat pointDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\npointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\npointVector = normalize( pointVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n#endif\npointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\nvec3 pointHalfVector = normalize( pointVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n#else\npointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\nfloat spotDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\nspotVector = normalize( spotVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngle[ i ] ) {\nspotEffect = pow( spotEffect, spotLightExponent[ i ] );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n#endif\nspotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;\nvec3 spotHalfVector = normalize( spotVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\n#ifdef WRAP_AROUND\nfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\nfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n#endif\ndirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( hemisphereLightPosition[ i ], 1.0 );\nvec3 lVector = normalize( lPosition.xyz + vViewPosition.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += uDiffuseColor * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );\nvec3 lVectorGround = normalize( -lPosition.xyz + vViewPosition.xyz );\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;\n#endif\nif ( enableReflection ) {\nvec3 vReflect;\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, normal, uRefractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, normal );\n}\nvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );\n}",
THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,"#ifdef USE_SKINNING\nvNormal = normalMatrix * skinnedNormal.xyz;\nvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\nvTangent = normalMatrix * skinnedTangent.xyz;\n#else\nvNormal = normalMatrix * normal;\nvTangent = normalMatrix * tangent.xyz;\n#endif\nvBinormal = cross( vNormal, vTangent ) * tangent.w;\nvUv = uv * uRepeat + uOffset;\nvec3 displacedPosition;\n#ifdef VERTEX_TEXTURES\nif ( enableDisplacement ) {\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\ndisplacedPosition = position + normalize( normal ) * df;\n} else {\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n}\n#else\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n#endif\nvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\nvec4 mPosition = modelMatrix * vec4( displacedPosition, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\nvWorldPosition = mPosition.xyz;\nvViewPosition = -mvPosition.xyz;\n#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * mPosition;\n}\n#endif\n}"].join("\n")},
cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:"varying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = modelMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 wPos = cameraPosition - vViewPosition;\ngl_FragColor = textureCube( tCube, vec3( tFlip * wPos.x, wPos.yz ) );\n}"}}});
THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){return this.faces[this.face][this.weight][this.style]},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=a},drawText:function(a){for(var b=this.getFace(),c=this.size/b.resolution,d=
0,e=String(a).split(""),f=e.length,g=[],a=0;a<f;a++){var h=new THREE.Path,h=this.extractGlyphPoints(e[a],b,c,d,h),d=d+h.offset;g.push(h.path)}return{paths:g,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var f=[],g,h,i,j,l,m,n,p,o,q,r,t=b.glyphs[a]||b.glyphs["?"];if(t){if(t.o){b=t._cachedOutline||(t._cachedOutline=t.o.split(" "));j=b.length;for(a=0;a<j;){i=b[a++];switch(i){case "m":i=b[a++]*c+d;l=b[a++]*c;e.moveTo(i,l);break;case "l":i=b[a++]*c+d;l=b[a++]*c;e.lineTo(i,l);break;case "q":i=b[a++]*
c+d;l=b[a++]*c;p=b[a++]*c+d;o=b[a++]*c;e.quadraticCurveTo(p,o,i,l);if(g=f[f.length-1]){m=g.x;n=g.y;g=1;for(h=this.divisions;g<=h;g++){var B=g/h;THREE.Shape.Utils.b2(B,m,p,i);THREE.Shape.Utils.b2(B,n,o,l)}}break;case "b":i=b[a++]*c+d;l=b[a++]*c;p=b[a++]*c+d;o=b[a++]*-c;q=b[a++]*c+d;r=b[a++]*-c;e.bezierCurveTo(i,l,p,o,q,r);if(g=f[f.length-1]){m=g.x;n=g.y;g=1;for(h=this.divisions;g<=h;g++){B=g/h;THREE.Shape.Utils.b3(B,m,p,q,i);THREE.Shape.Utils.b3(B,n,o,r,l)}}}}}return{offset:t.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){var b=b||{},c=b.curveSegments!==void 0?b.curveSegments:4,d=b.font!==void 0?b.font:"helvetiker",e=b.weight!==void 0?b.weight:"normal",f=b.style!==void 0?b.style:"normal";THREE.FontUtils.size=b.size!==void 0?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=f;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(f=c.length;e<f;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,f=b-1,g=0;g<b;f=g++)e=e+(a[f].x*a[g].y-a[g].x*a[f].y);return e*0.5};a.Triangulate=function(a,d){var e=a.length;if(e<3)return null;var f=[],g=[],h=[],i,j,l;if(b(a)>0)for(j=0;j<e;j++)g[j]=j;else for(j=0;j<e;j++)g[j]=e-1-j;var m=2*e;for(j=e-1;e>2;){if(m--<=0){console.log("Warning, unable to triangulate polygon!");break}i=j;e<=i&&(i=0);j=i+1;e<=j&&(j=0);l=j+1;e<=l&&(l=0);var n;a:{n=a;var p=i,o=j,q=l,r=e,t=g,B=void 0,u=void 0,s=void 0,z=void 0,A=void 0,
v=void 0,y=void 0,C=void 0,G=void 0,u=n[t[p]].x,s=n[t[p]].y,z=n[t[o]].x,A=n[t[o]].y,v=n[t[q]].x,y=n[t[q]].y;if(1E-10>(z-u)*(y-s)-(A-s)*(v-u))n=false;else{for(B=0;B<r;B++)if(!(B==p||B==o||B==q)){var C=n[t[B]].x,G=n[t[B]].y,H=void 0,J=void 0,E=void 0,M=void 0,K=void 0,F=void 0,I=void 0,L=void 0,R=void 0,$=void 0,Y=void 0,N=void 0,H=E=K=void 0,H=v-z,J=y-A,E=u-v,M=s-y,K=z-u,F=A-s,I=C-u,L=G-s,R=C-z,$=G-A,Y=C-v,N=G-y,H=H*$-J*R,K=K*L-F*I,E=E*N-M*Y;if(H>=0&&E>=0&&K>=0){n=false;break a}}n=true}}if(n){f.push([a[g[i]],
a[g[j]],a[g[l]]]);h.push([g[i],g[j],g[l]]);i=j;for(l=j+1;l<e;i++,l++)g[i]=g[l];e--;m=2*e}}return d?h:f};a.Triangulate.area=b;return a})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(){console.log("Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};
THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};
THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length==a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=false;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++){c=this.getPoint(e/a);f=f+c.distanceTo(d);b.push(f);d=c}return this.cacheArcLengths=b};THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=true;this.getLengths()};
THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,i;g<=h;){d=Math.floor(g+(h-g)/2);i=c[d]-f;if(i<0)g=d+1;else if(i>0)h=d-1;else{h=d;break}}d=h;if(c[d]==f)return d/(e-1);g=c[d];return c=(d+(f-g)/(c[d+1]-g))/(e-1)};THREE.Curve.prototype.getNormalVector=function(a){a=this.getTangent(a);return new THREE.Vector2(-a.y,a.x)};
THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4,a=a+1E-4;b<0&&(b=0);a>1&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().subSelf(b).normalize()};THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().subSelf(this.v1);b.multiplyScalar(a).addSelf(this.v1);return b};
THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};THREE.LineCurve.prototype.getTangent=function(){return this.v2.clone().subSelf(this.v1).normalize()};THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return new THREE.Vector2(b,a)};THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);b=new THREE.Vector2(b,a);b.normalize();return b};
THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};
THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.SplineCurve=function(a){this.points=a==void 0?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.SplineCurve.prototype.getPoint=function(a){var b=new THREE.Vector2,c=[],d=this.points,e;e=(d.length-1)*a;a=Math.floor(e);e=e-a;c[0]=a==0?a:a-1;c[1]=a;c[2]=a>d.length-2?d.length-1:a+1;c[3]=a>d.length-3?d.length-1:a+2;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);return b};
THREE.EllipseCurve=function(a,b,c,d,e,f,g){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);THREE.EllipseCurve.prototype.getPoint=function(a){var b=this.aEndAngle-this.aStartAngle;this.aClockwise||(a=1-a);b=this.aStartAngle+a*b;a=this.aX+this.xRadius*Math.cos(b);b=this.aY+this.yRadius*Math.sin(b);return new THREE.Vector2(a,b)};
THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){var a=(c-a)*0.5,d=(d-b)*0.5,f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.getPoint=b;return a};THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.sub(this.v2,this.v1);b.multiplyScalar(a);b.addSelf(this.v1);return b});
THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b,c;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);c=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);a=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return new THREE.Vector3(b,c,a)});
THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b,c;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);c=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);a=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return new THREE.Vector3(b,c,a)});
THREE.SplineCurve3=THREE.Curve.create(function(a){this.points=a==void 0?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e,a=(d.length-1)*a;e=Math.floor(a);a=a-e;c[0]=e==0?e:e-1;c[1]=e;c[2]=e>d.length-2?d.length-1:e+1;c[3]=e>d.length-3?d.length-1:e+2;e=d[c[0]];var f=d[c[1]],g=d[c[2]],c=d[c[3]];b.x=THREE.Curve.Utils.interpolate(e.x,f.x,g.x,c.x,a);b.y=THREE.Curve.Utils.interpolate(e.y,f.y,g.y,c.y,a);b.z=THREE.Curve.Utils.interpolate(e.z,f.z,g.z,c.z,a);return b});
THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=a==void 0?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e;e=(d.length-0)*a;a=Math.floor(e);e=e-a;a=a+(a>0?0:(Math.floor(Math.abs(a)/d.length)+1)*d.length);c[0]=(a-1)%d.length;c[1]=a%d.length;c[2]=(a+1)%d.length;c[3]=(a+2)%d.length;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);b.z=THREE.Curve.Utils.interpolate(d[c[0]].z,
d[c[1]].z,d[c[2]].z,d[c[3]].z,e);return b});THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=false};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};
THREE.CurvePath.prototype.getPoint=function(a){for(var b=a*this.getLength(),c=this.getCurveLengths(),a=0;a<c.length;){if(c[a]>=b){b=c[a]-b;a=this.curves[a];b=1-b/a.getLength();return a.getPointAt(b)}a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++){b=b+this.curves[c].getLength();a.push(b)}return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,f,g;b=c=Number.NEGATIVE_INFINITY;e=f=Number.POSITIVE_INFINITY;var h,i,j,l,m=a[0]instanceof THREE.Vector3;l=m?new THREE.Vector3:new THREE.Vector2;i=0;for(j=a.length;i<j;i++){h=a[i];if(h.x>b)b=h.x;else if(h.x<e)e=h.x;if(h.y>c)c=h.y;else if(h.y<f)f=h.y;if(m)if(h.z>d)d=h.z;else if(h.z<g)g=h.z;l.addSelf(h)}a={minX:e,minY:f,maxX:b,maxY:c,centroid:l.divideScalar(j)};if(m){a.maxZ=d;a.minZ=g}return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,true);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,true);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;if(!b)b=this.bends;d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;if(!b)b=this.bends;d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,f,g,h,i;d=0;for(e=a.length;d<e;d++){f=a[d];g=f.x;h=f.y;i=g/c.maxX;i=b.getUtoTmapping(i,g);g=b.getPoint(i);h=b.getNormalVector(i).multiplyScalar(h);f.x=g.x+h.x;f.y=g.y+h.y}return a};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld=function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a){if(this.parent){this.matrixWorld.multiply(this.parent.matrixWorld,this.matrix);this.matrixWorld.decompose(this.translationWorld,this.rotationWorld,this.scaleWorld);this.matrix.decompose(this.translationObject,this.rotationObject,this.scaleObject);this.matrixWorld.compose(this.translationWorld,this.rotationObject,this.scaleWorld)}else this.matrixWorld.copy(this.matrix);
this.matrixWorldNeedsUpdate=false;a=true}for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)};THREE.Gyroscope.prototype.translationWorld=new THREE.Vector3;THREE.Gyroscope.prototype.translationObject=new THREE.Vector3;THREE.Gyroscope.prototype.rotationWorld=new THREE.Quaternion;THREE.Gyroscope.prototype.rotationObject=new THREE.Quaternion;THREE.Gyroscope.prototype.scaleWorld=new THREE.Vector3;THREE.Gyroscope.prototype.scaleObject=new THREE.Vector3;
THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};
THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),f=this.actions[this.actions.length-1].args,f=new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length-2],f[f.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(f);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var g=Array.prototype.slice.call(arguments),h=this.actions[this.actions.length-1].args,h=new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length-2],h[h.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(h);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:g})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args;this.absarc(a+g[g.length-2],b+g[g.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,g){var h=this.actions[this.actions.length-1].args;this.absellipse(a+h[h.length-2],b+h[h.length-1],c,d,e,f,g)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,g){var h=Array.prototype.slice.call(arguments),i=new THREE.EllipseCurve(a,b,c,d,e,f,g);this.curves.push(i);i=i.getPoint(g?1:0);h.push(i.x);h.push(i.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:h})};
THREE.Path.prototype.getSpacedPoints=function(a){a||(a=40);for(var b=[],c=0;c<a;c++)b.push(this.getPoint(c/a));return b};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints){console.log("tata");return this.getSpacedPoints(a,b)}var a=a||12,c=[],d,e,f,g,h,i,j,l,m,n,p,o,q;d=0;for(e=this.actions.length;d<e;d++){f=this.actions[d];g=f.action;f=f.args;switch(g){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:h=f[2];i=f[3];m=f[0];n=f[1];if(c.length>0){g=c[c.length-1];
p=g.x;o=g.y}else{g=this.actions[d-1].args;p=g[g.length-2];o=g[g.length-1]}for(f=1;f<=a;f++){q=f/a;g=THREE.Shape.Utils.b2(q,p,m,h);q=THREE.Shape.Utils.b2(q,o,n,i);c.push(new THREE.Vector2(g,q))}break;case THREE.PathActions.BEZIER_CURVE_TO:h=f[4];i=f[5];m=f[0];n=f[1];j=f[2];l=f[3];if(c.length>0){g=c[c.length-1];p=g.x;o=g.y}else{g=this.actions[d-1].args;p=g[g.length-2];o=g[g.length-1]}for(f=1;f<=a;f++){q=f/a;g=THREE.Shape.Utils.b3(q,p,m,j,h);q=THREE.Shape.Utils.b3(q,o,n,l,i);c.push(new THREE.Vector2(g,
q))}break;case THREE.PathActions.CSPLINE_THRU:g=this.actions[d-1].args;q=[new THREE.Vector2(g[g.length-2],g[g.length-1])];g=a*f[0].length;q=q.concat(f[0]);q=new THREE.SplineCurve(q);for(f=1;f<=g;f++)c.push(q.getPointAt(f/g));break;case THREE.PathActions.ARC:h=f[0];i=f[1];n=f[2];j=f[3];g=f[4];m=!!f[5];p=g-j;o=a*2;for(f=1;f<=o;f++){q=f/o;m||(q=1-q);q=j+q*p;g=h+n*Math.cos(q);q=i+n*Math.sin(q);c.push(new THREE.Vector2(g,q))}break;case THREE.PathActions.ELLIPSE:h=f[0];i=f[1];n=f[2];l=f[3];j=f[4];g=f[5];
m=!!f[6];p=g-j;o=a*2;for(f=1;f<=o;f++){q=f/o;m||(q=1-q);q=j+q*p;g=h+n*Math.cos(q);q=i+l*Math.sin(q);c.push(new THREE.Vector2(g,q))}}}d=c[c.length-1];Math.abs(d.x-c[0].x)<1E-10&&Math.abs(d.y-c[0].y)<1E-10&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(){var a,b,c,d,e=[],f=new THREE.Path;a=0;for(b=this.actions.length;a<b;a++){c=this.actions[a];d=c.args;c=c.action;if(c==THREE.PathActions.MOVE_TO&&f.actions.length!=0){e.push(f);f=new THREE.Path}f[c].apply(f,d)}f.actions.length!=0&&e.push(f);if(e.length==0)return[];var g;d=[];a=!THREE.Shape.Utils.isClockWise(e[0].getPoints());if(e.length==1){f=e[0];g=new THREE.Shape;g.actions=f.actions;g.curves=f.curves;d.push(g);return d}if(a){g=new THREE.Shape;a=0;for(b=e.length;a<
b;a++){f=e[a];if(THREE.Shape.Utils.isClockWise(f.getPoints())){g.actions=f.actions;g.curves=f.curves;d.push(g);g=new THREE.Shape}else g.holes.push(f)}}else{a=0;for(b=e.length;a<b;a++){f=e[a];if(THREE.Shape.Utils.isClockWise(f.getPoints())){g&&d.push(g);g=new THREE.Shape;g.actions=f.actions;g.curves=f.curves}else g.holes.push(f)}d.push(g)}return d};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);
THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};
THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={removeHoles:function(a,b){var c=a.concat(),d=c.concat(),e,f,g,h,i,j,l,m,n,p,o=[];for(i=0;i<b.length;i++){j=b[i];Array.prototype.push.apply(d,j);f=Number.POSITIVE_INFINITY;for(e=0;e<j.length;e++){n=j[e];p=[];for(m=0;m<c.length;m++){l=c[m];l=n.distanceToSquared(l);p.push(l);if(l<f){f=l;g=e;h=m}}}e=h-1>=0?h-1:c.length-1;f=g-1>=0?g-1:j.length-1;var q=[j[g],c[h],c[e]];m=THREE.FontUtils.Triangulate.area(q);var r=[j[g],j[f],c[h]];n=THREE.FontUtils.Triangulate.area(r);p=h;l=g;h=h+1;g=g+
-1;h<0&&(h=h+c.length);h=h%c.length;g<0&&(g=g+j.length);g=g%j.length;e=h-1>=0?h-1:c.length-1;f=g-1>=0?g-1:j.length-1;q=[j[g],c[h],c[e]];q=THREE.FontUtils.Triangulate.area(q);r=[j[g],j[f],c[h]];r=THREE.FontUtils.Triangulate.area(r);if(m+n>q+r){h=p;g=l;h<0&&(h=h+c.length);h=h%c.length;g<0&&(g=g+j.length);g=g%j.length;e=h-1>=0?h-1:c.length-1;f=g-1>=0?g-1:j.length-1}m=c.slice(0,h);n=c.slice(h);p=j.slice(g);l=j.slice(0,g);f=[j[g],j[f],c[h]];o.push([j[g],c[h],c[e]]);o.push(f);c=m.concat(p).concat(l).concat(n)}return{shape:c,
isolatedPts:o,allpoints:d}},triangulateShape:function(a,b){var c=THREE.Shape.Utils.removeHoles(a,b),d=c.allpoints,e=c.isolatedPts,c=THREE.FontUtils.Triangulate(c.shape,false),f,g,h,i,j={};f=0;for(g=d.length;f<g;f++){i=d[f].x+":"+d[f].y;j[i]!==void 0&&console.log("Duplicate point",i);j[i]=f}f=0;for(g=c.length;f<g;f++){h=c[f];for(d=0;d<3;d++){i=h[d].x+":"+h[d].y;i=j[i];i!==void 0&&(h[d]=i)}}f=0;for(g=e.length;f<g;f++){h=e[f];for(d=0;d<3;d++){i=h[d].x+":"+h[d].y;i=j[i];i!==void 0&&(h[d]=i)}}return c.concat(e)},
isClockWise:function(a){return THREE.FontUtils.Triangulate.area(a)<0},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-a)*a*a*b},b3p3:function(a,b){return a*a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,b)+this.b3p1(a,c)+this.b3p2(a,d)+
this.b3p3(a,e)}};
THREE.AnimationHandler=function(){var a=[],b={},c={update:function(b){for(var c=0;c<a.length;c++)a[c].update(b)},addToUpdate:function(b){a.indexOf(b)===-1&&a.push(b)},removeFromUpdate:function(b){b=a.indexOf(b);b!==-1&&a.splice(b,1)},add:function(a){b[a.name]!==void 0&&console.log("THREE.AnimationHandler.add: Warning! "+a.name+" already exists in library. Overwriting.");b[a.name]=a;if(a.initialized!==true){for(var c=0;c<a.hierarchy.length;c++){for(var d=0;d<a.hierarchy[c].keys.length;d++){if(a.hierarchy[c].keys[d].time<0)a.hierarchy[c].keys[d].time=
0;if(a.hierarchy[c].keys[d].rot!==void 0&&!(a.hierarchy[c].keys[d].rot instanceof THREE.Quaternion)){var h=a.hierarchy[c].keys[d].rot;a.hierarchy[c].keys[d].rot=new THREE.Quaternion(h[0],h[1],h[2],h[3])}}if(a.hierarchy[c].keys.length&&a.hierarchy[c].keys[0].morphTargets!==void 0){h={};for(d=0;d<a.hierarchy[c].keys.length;d++)for(var i=0;i<a.hierarchy[c].keys[d].morphTargets.length;i++){var j=a.hierarchy[c].keys[d].morphTargets[i];h[j]=-1}a.hierarchy[c].usedMorphTargets=h;for(d=0;d<a.hierarchy[c].keys.length;d++){var l=
{};for(j in h){for(i=0;i<a.hierarchy[c].keys[d].morphTargets.length;i++)if(a.hierarchy[c].keys[d].morphTargets[i]===j){l[j]=a.hierarchy[c].keys[d].morphTargetsInfluences[i];break}i===a.hierarchy[c].keys[d].morphTargets.length&&(l[j]=0)}a.hierarchy[c].keys[d].morphTargetsInfluences=l}}for(d=1;d<a.hierarchy[c].keys.length;d++)if(a.hierarchy[c].keys[d].time===a.hierarchy[c].keys[d-1].time){a.hierarchy[c].keys.splice(d,1);d--}for(d=0;d<a.hierarchy[c].keys.length;d++)a.hierarchy[c].keys[d].index=d}d=parseInt(a.length*
a.fps,10);a.JIT={};a.JIT.hierarchy=[];for(c=0;c<a.hierarchy.length;c++)a.JIT.hierarchy.push(Array(d));a.initialized=true}},get:function(a){if(typeof a==="string"){if(b[a])return b[a];console.log("THREE.AnimationHandler.get: Couldn't find animation "+a);return null}},parse:function(a){var b=[];if(a instanceof THREE.SkinnedMesh)for(var c=0;c<a.bones.length;c++)b.push(a.bones[c]);else d(a,b);return b}},d=function(a,b){b.push(a);for(var c=0;c<a.children.length;c++)d(a.children[c],b)};c.LINEAR=0;c.CATMULLROM=
1;c.CATMULLROM_FORWARD=2;return c}();THREE.Animation=function(a,b,c){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=false;this.loop=this.isPaused=true;this.interpolationType=c!==void 0?c:THREE.AnimationHandler.LINEAR;this.points=[];this.target=new THREE.Vector3};
THREE.Animation.prototype.play=function(a,b){if(this.isPlaying===false){this.isPlaying=true;this.loop=a!==void 0?a:true;this.currentTime=b!==void 0?b:0;var c,d=this.hierarchy.length,e;for(c=0;c<d;c++){e=this.hierarchy[c];if(this.interpolationType!==THREE.AnimationHandler.CATMULLROM_FORWARD)e.useQuaternion=true;e.matrixAutoUpdate=true;if(e.animationCache===void 0){e.animationCache={};e.animationCache.prevKey={pos:0,rot:0,scl:0};e.animationCache.nextKey={pos:0,rot:0,scl:0};e.animationCache.originalMatrix=
e instanceof THREE.Bone?e.skinMatrix:e.matrix}var f=e.animationCache.prevKey;e=e.animationCache.nextKey;f.pos=this.data.hierarchy[c].keys[0];f.rot=this.data.hierarchy[c].keys[0];f.scl=this.data.hierarchy[c].keys[0];e.pos=this.getNextKeyWith("pos",c,1);e.rot=this.getNextKeyWith("rot",c,1);e.scl=this.getNextKeyWith("scl",c,1)}this.update(0)}this.isPaused=false;THREE.AnimationHandler.addToUpdate(this)};
THREE.Animation.prototype.pause=function(){this.isPaused===true?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};THREE.Animation.prototype.stop=function(){this.isPaused=this.isPlaying=false;THREE.AnimationHandler.removeFromUpdate(this)};
THREE.Animation.prototype.update=function(a){if(this.isPlaying!==false){var b=["pos","rot","scl"],c,d,e,f,g,h,i,j,l;l=this.currentTime=this.currentTime+a*this.timeScale;j=this.currentTime=this.currentTime%this.data.length;parseInt(Math.min(j*this.data.fps,this.data.length*this.data.fps),10);for(var m=0,n=this.hierarchy.length;m<n;m++){a=this.hierarchy[m];i=a.animationCache;for(var p=0;p<3;p++){c=b[p];g=i.prevKey[c];h=i.nextKey[c];if(h.time<=l){if(j<l)if(this.loop){g=this.data.hierarchy[m].keys[0];
for(h=this.getNextKeyWith(c,m,1);h.time<j;){g=h;h=this.getNextKeyWith(c,m,h.index+1)}}else{this.stop();return}else{do{g=h;h=this.getNextKeyWith(c,m,h.index+1)}while(h.time<j)}i.prevKey[c]=g;i.nextKey[c]=h}a.matrixAutoUpdate=true;a.matrixWorldNeedsUpdate=true;d=(j-g.time)/(h.time-g.time);e=g[c];f=h[c];if(d<0||d>1){console.log("THREE.Animation.update: Warning! Scale out of bounds:"+d+" on bone "+m);d=d<0?0:1}if(c==="pos"){c=a.position;if(this.interpolationType===THREE.AnimationHandler.LINEAR){c.x=e[0]+
(f[0]-e[0])*d;c.y=e[1]+(f[1]-e[1])*d;c.z=e[2]+(f[2]-e[2])*d}else if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD){this.points[0]=this.getPrevKeyWith("pos",m,g.index-1).pos;this.points[1]=e;this.points[2]=f;this.points[3]=this.getNextKeyWith("pos",m,h.index+1).pos;d=d*0.33+0.33;e=this.interpolateCatmullRom(this.points,d);c.x=e[0];c.y=e[1];c.z=e[2];if(this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD){d=
this.interpolateCatmullRom(this.points,d*1.01);this.target.set(d[0],d[1],d[2]);this.target.subSelf(c);this.target.y=0;this.target.normalize();d=Math.atan2(this.target.x,this.target.z);a.rotation.set(0,d,0)}}}else if(c==="rot")THREE.Quaternion.slerp(e,f,a.quaternion,d);else if(c==="scl"){c=a.scale;c.x=e[0]+(f[0]-e[0])*d;c.y=e[1]+(f[1]-e[1])*d;c.z=e[2]+(f[2]-e[2])*d}}}}};
THREE.Animation.prototype.interpolateCatmullRom=function(a,b){var c=[],d=[],e,f,g,h,i,j;e=(a.length-1)*b;f=Math.floor(e);e=e-f;c[0]=f===0?f:f-1;c[1]=f;c[2]=f>a.length-2?f:f+1;c[3]=f>a.length-3?f:f+2;f=a[c[0]];h=a[c[1]];i=a[c[2]];j=a[c[3]];c=e*e;g=e*c;d[0]=this.interpolate(f[0],h[0],i[0],j[0],e,c,g);d[1]=this.interpolate(f[1],h[1],i[1],j[1],e,c,g);d[2]=this.interpolate(f[2],h[2],i[2],j[2],e,c,g);return d};
THREE.Animation.prototype.interpolate=function(a,b,c,d,e,f,g){a=(c-a)*0.5;d=(d-b)*0.5;return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b};THREE.Animation.prototype.getNextKeyWith=function(a,b,c){for(var d=this.data.hierarchy[b].keys,c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(d[c][a]!==void 0)return d[c];return this.data.hierarchy[b].keys[0]};
THREE.Animation.prototype.getPrevKeyWith=function(a,b,c){for(var d=this.data.hierarchy[b].keys,c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c>0?c:0:c>=0?c:c+d.length;c>=0;c--)if(d[c][a]!==void 0)return d[c];return this.data.hierarchy[b].keys[d.length-1]};
THREE.KeyFrameAnimation=function(a,b,c){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=0.001;this.isPlaying=false;this.loop=this.isPaused=true;this.JITCompile=c!==void 0?c:true;a=0;for(b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var f=c[e],g=this.getNextKeyWith(f,a,0);g&&g.apply(f)}d.matrixAutoUpdate=
false;this.data.hierarchy[a].node.updateMatrix();d.matrixWorldNeedsUpdate=true}}};
THREE.KeyFrameAnimation.prototype.play=function(a,b){if(!this.isPlaying){this.isPlaying=true;this.loop=a!==void 0?a:true;this.currentTime=b!==void 0?b:0;this.startTimeMs=b;this.startTime=1E7;this.endTime=-this.startTime;var c,d=this.hierarchy.length,e,f;for(c=0;c<d;c++){e=this.hierarchy[c];f=this.data.hierarchy[c];e.useQuaternion=true;if(f.animationCache===void 0){f.animationCache={};f.animationCache.prevKey=null;f.animationCache.nextKey=null;f.animationCache.originalMatrix=e instanceof THREE.Bone?
e.skinMatrix:e.matrix}e=this.data.hierarchy[c].keys;if(e.length){f.animationCache.prevKey=e[0];f.animationCache.nextKey=e[1];this.startTime=Math.min(e[0].time,this.startTime);this.endTime=Math.max(e[e.length-1].time,this.endTime)}}this.update(0)}this.isPaused=false;THREE.AnimationHandler.addToUpdate(this)};THREE.KeyFrameAnimation.prototype.pause=function(){this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};
THREE.KeyFrameAnimation.prototype.stop=function(){this.isPaused=this.isPlaying=false;THREE.AnimationHandler.removeFromUpdate(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(c.animationCache!==void 0){var d=c.animationCache.originalMatrix;if(b instanceof THREE.Bone){d.copy(b.skinMatrix);b.skinMatrix=d}else{d.copy(b.matrix);b.matrix=d}delete c.animationCache}}};
THREE.KeyFrameAnimation.prototype.update=function(a){if(this.isPlaying){var b,c,d,e,f=this.data.JIT.hierarchy,g,h,i;h=this.currentTime=this.currentTime+a*this.timeScale;g=this.currentTime=this.currentTime%this.data.length;if(g<this.startTimeMs)g=this.currentTime=this.startTimeMs+g;e=parseInt(Math.min(g*this.data.fps,this.data.length*this.data.fps),10);if((i=g<h)&&!this.loop){for(var a=0,j=this.hierarchy.length;a<j;a++){var l=this.data.hierarchy[a].keys,f=this.data.hierarchy[a].sids;d=l.length-1;e=
this.hierarchy[a];if(l.length){for(l=0;l<f.length;l++){g=f[l];(h=this.getPrevKeyWith(g,a,d))&&h.apply(g)}this.data.hierarchy[a].node.updateMatrix();e.matrixWorldNeedsUpdate=true}}this.stop()}else if(!(g<this.startTime)){a=0;for(j=this.hierarchy.length;a<j;a++){d=this.hierarchy[a];b=this.data.hierarchy[a];var l=b.keys,m=b.animationCache;if(this.JITCompile&&f[a][e]!==void 0)if(d instanceof THREE.Bone){d.skinMatrix=f[a][e];d.matrixWorldNeedsUpdate=false}else{d.matrix=f[a][e];d.matrixWorldNeedsUpdate=
true}else if(l.length){if(this.JITCompile&&m)d instanceof THREE.Bone?d.skinMatrix=m.originalMatrix:d.matrix=m.originalMatrix;b=m.prevKey;c=m.nextKey;if(b&&c){if(c.time<=h){if(i&&this.loop){b=l[0];for(c=l[1];c.time<g;){b=c;c=l[b.index+1]}}else if(!i)for(var n=l.length-1;c.time<g&&c.index!==n;){b=c;c=l[b.index+1]}m.prevKey=b;m.nextKey=c}c.time>=g?b.interpolate(c,g):b.interpolate(c,c.time)}this.data.hierarchy[a].node.updateMatrix();d.matrixWorldNeedsUpdate=true}}if(this.JITCompile&&f[0][e]===void 0){this.hierarchy[0].updateMatrixWorld(true);
for(a=0;a<this.hierarchy.length;a++)f[a][e]=this.hierarchy[a]instanceof THREE.Bone?this.hierarchy[a].skinMatrix.clone():this.hierarchy[a].matrix.clone()}}}};THREE.KeyFrameAnimation.prototype.getNextKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c=c%b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]};
THREE.KeyFrameAnimation.prototype.getPrevKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c=c>=0?c:c+b.length;c>=0;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]};
THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new THREE.Vector3(0,-1,0));this.add(g);var h=new THREE.PerspectiveCamera(90,
1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var i=new THREE.PerspectiveCamera(90,1,a,b);i.up.set(0,-1,0);i.lookAt(new THREE.Vector3(0,0,-1));this.add(i);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){var c=this.renderTarget,n=c.generateMipmaps;c.generateMipmaps=false;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=
2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.generateMipmaps=n;c.activeCubeFace=5;a.render(b,i,c)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CombinedCamera=function(a,b,c,d,e,f,g){THREE.Camera.call(this);this.fov=c;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2;this.cameraO=new THREE.OrthographicCamera(a/-2,a/2,b/2,b/-2,f,g);this.cameraP=new THREE.PerspectiveCamera(c,a/b,d,e);this.zoom=1;this.toPerspective()};
THREE.CombinedCamera.prototype=Object.create(THREE.Camera.prototype);THREE.CombinedCamera.prototype.toPerspective=function(){this.near=this.cameraP.near;this.far=this.cameraP.far;this.cameraP.fov=this.fov/this.zoom;this.cameraP.updateProjectionMatrix();this.projectionMatrix=this.cameraP.projectionMatrix;this.inPerspectiveMode=true;this.inOrthographicMode=false};
THREE.CombinedCamera.prototype.toOrthographic=function(){var a=this.cameraP.aspect,b=(this.cameraP.near+this.cameraP.far)/2,b=Math.tan(this.fov/2)*b,a=2*b*a/2,b=b/this.zoom,a=a/this.zoom;this.cameraO.left=-a;this.cameraO.right=a;this.cameraO.top=b;this.cameraO.bottom=-b;this.cameraO.updateProjectionMatrix();this.near=this.cameraO.near;this.far=this.cameraO.far;this.projectionMatrix=this.cameraO.projectionMatrix;this.inPerspectiveMode=false;this.inOrthographicMode=true};
THREE.CombinedCamera.prototype.setSize=function(a,b){this.cameraP.aspect=a/b;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2};THREE.CombinedCamera.prototype.setFov=function(a){this.fov=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.updateProjectionMatrix=function(){if(this.inPerspectiveMode)this.toPerspective();else{this.toPerspective();this.toOrthographic()}};
THREE.CombinedCamera.prototype.setLens=function(a,b){b===void 0&&(b=24);var c=2*Math.atan(b/(a*2))*(180/Math.PI);this.setFov(c);return c};THREE.CombinedCamera.prototype.setZoom=function(a){this.zoom=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.toFrontView=function(){this.rotation.x=0;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=false};
THREE.CombinedCamera.prototype.toBackView=function(){this.rotation.x=0;this.rotation.y=Math.PI;this.rotation.z=0;this.rotationAutoUpdate=false};THREE.CombinedCamera.prototype.toLeftView=function(){this.rotation.x=0;this.rotation.y=-Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=false};THREE.CombinedCamera.prototype.toRightView=function(){this.rotation.x=0;this.rotation.y=Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=false};
THREE.CombinedCamera.prototype.toTopView=function(){this.rotation.x=-Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=false};THREE.CombinedCamera.prototype.toBottomView=function(){this.rotation.x=Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=false};
THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);var a=a||50,c=c!==void 0?c:0,d=d!==void 0?d:Math.PI*2,b=b!==void 0?Math.max(3,b):8,e,f=[];e=new THREE.Vector3;var g=new THREE.UV(0.5,0.5);this.vertices.push(e);f.push(g);for(e=0;e<=b;e++){var h=new THREE.Vector3;h.x=a*Math.cos(c+e/b*d);h.y=a*Math.sin(c+e/b*d);this.vertices.push(h);f.push(new THREE.UV((h.x/a+1)/2,-(h.y/a+1)/2+1))}c=new THREE.Vector3(0,0,-1);for(e=1;e<=b;e++){this.faces.push(new THREE.Face3(e,e+1,0,[c,c,c]));this.faceVertexUvs[0].push([f[e],
f[e+1],g])}this.computeCentroids();this.computeFaceNormals();this.boundingSphere={radius:a}};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.CubeGeometry=function(a,b,c,d,e,f,g,h){function i(a,b,c,g,h,i,l,m){var n,o=d||1,p=e||1,q=h/2,r=i/2,t=j.vertices.length;if(a==="x"&&b==="y"||a==="y"&&b==="x")n="z";else if(a==="x"&&b==="z"||a==="z"&&b==="x"){n="y";p=f||1}else if(a==="z"&&b==="y"||a==="y"&&b==="z"){n="x";o=f||1}var u=o+1,B=p+1,$=h/o,Y=i/p,N=new THREE.Vector3;N[n]=l>0?1:-1;for(h=0;h<B;h++)for(i=0;i<u;i++){var ea=new THREE.Vector3;ea[a]=(i*$-q)*c;ea[b]=(h*Y-r)*g;ea[n]=l;j.vertices.push(ea)}for(h=0;h<p;h++)for(i=0;i<o;i++){a=new THREE.Face4(i+
u*h+t,i+u*(h+1)+t,i+1+u*(h+1)+t,i+1+u*h+t);a.normal.copy(N);a.vertexNormals.push(N.clone(),N.clone(),N.clone(),N.clone());a.materialIndex=m;j.faces.push(a);j.faceVertexUvs[0].push([new THREE.UV(i/o,1-h/p),new THREE.UV(i/o,1-(h+1)/p),new THREE.UV((i+1)/o,1-(h+1)/p),new THREE.UV((i+1)/o,1-h/p)])}}THREE.Geometry.call(this);var j=this,l=a/2,m=b/2,n=c/2,p,o,q,r,t,B;if(g!==void 0){if(g instanceof Array)this.materials=g;else{this.materials=[];for(p=0;p<6;p++)this.materials.push(g)}p=0;r=1;o=2;t=3;q=4;B=
5}else this.materials=[];this.sides={px:true,nx:true,py:true,ny:true,pz:true,nz:true};if(h!=void 0)for(var u in h)this.sides[u]!==void 0&&(this.sides[u]=h[u]);this.sides.px&&i("z","y",-1,-1,c,b,l,p);this.sides.nx&&i("z","y",1,-1,c,b,-l,r);this.sides.py&&i("x","z",1,1,a,c,m,o);this.sides.ny&&i("x","z",1,-1,a,c,-m,t);this.sides.pz&&i("x","y",1,-1,a,b,n,q);this.sides.nz&&i("x","y",-1,-1,a,b,-n,B);this.computeCentroids();this.mergeVertices()};THREE.CubeGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.CylinderGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);var a=a!==void 0?a:20,b=b!==void 0?b:20,c=c!==void 0?c:100,g=c/2,d=d||8,e=e||1,h,i,j=[],l=[];for(i=0;i<=e;i++){var m=[],n=[],p=i/e,o=p*(b-a)+a;for(h=0;h<=d;h++){var q=h/d,r=new THREE.Vector3;r.x=o*Math.sin(q*Math.PI*2);r.y=-p*c+g;r.z=o*Math.cos(q*Math.PI*2);this.vertices.push(r);m.push(this.vertices.length-1);n.push(new THREE.UV(q,1-p))}j.push(m);l.push(n)}c=(b-a)/c;for(h=0;h<d;h++){if(a!==0){m=this.vertices[j[0][h]].clone();n=
this.vertices[j[0][h+1]].clone()}else{m=this.vertices[j[1][h]].clone();n=this.vertices[j[1][h+1]].clone()}m.setY(Math.sqrt(m.x*m.x+m.z*m.z)*c).normalize();n.setY(Math.sqrt(n.x*n.x+n.z*n.z)*c).normalize();for(i=0;i<e;i++){var p=j[i][h],o=j[i+1][h],q=j[i+1][h+1],r=j[i][h+1],t=m.clone(),B=m.clone(),u=n.clone(),s=n.clone(),z=l[i][h].clone(),A=l[i+1][h].clone(),v=l[i+1][h+1].clone(),y=l[i][h+1].clone();this.faces.push(new THREE.Face4(p,o,q,r,[t,B,u,s]));this.faceVertexUvs[0].push([z,A,v,y])}}if(!f&&a>
0){this.vertices.push(new THREE.Vector3(0,g,0));for(h=0;h<d;h++){p=j[0][h];o=j[0][h+1];q=this.vertices.length-1;t=new THREE.Vector3(0,1,0);B=new THREE.Vector3(0,1,0);u=new THREE.Vector3(0,1,0);z=l[0][h].clone();A=l[0][h+1].clone();v=new THREE.UV(A.u,0);this.faces.push(new THREE.Face3(p,o,q,[t,B,u]));this.faceVertexUvs[0].push([z,A,v])}}if(!f&&b>0){this.vertices.push(new THREE.Vector3(0,-g,0));for(h=0;h<d;h++){p=j[i][h+1];o=j[i][h];q=this.vertices.length-1;t=new THREE.Vector3(0,-1,0);B=new THREE.Vector3(0,
-1,0);u=new THREE.Vector3(0,-1,0);z=l[i][h+1].clone();A=l[i][h].clone();v=new THREE.UV(A.u,1);this.faces.push(new THREE.Face3(p,o,q,[t,B,u]));this.faceVertexUvs[0].push([z,A,v])}}this.computeCentroids();this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry=function(a,b){if(typeof a!=="undefined"){THREE.Geometry.call(this);a=a instanceof Array?a:[a];this.shapebb=a[a.length-1].getBoundingBox();this.addShapeList(a,b);this.computeCentroids();this.computeFaceNormals()}};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.log("die");return b.clone().multiplyScalar(c).addSelf(a)}function d(a,b,c){var d=THREE.ExtrudeGeometry.__v1,e=THREE.ExtrudeGeometry.__v2,f=THREE.ExtrudeGeometry.__v3,g=THREE.ExtrudeGeometry.__v4,h=THREE.ExtrudeGeometry.__v5,i=THREE.ExtrudeGeometry.__v6;d.set(a.x-b.x,a.y-b.y);e.set(a.x-c.x,a.y-c.y);d=d.normalize();e=e.normalize();f.set(-d.y,d.x);g.set(e.y,-e.x);h.copy(a).addSelf(f);i.copy(a).addSelf(g);if(h.equals(i))return g.clone();
h.copy(b).addSelf(f);i.copy(c).addSelf(g);f=d.dot(g);g=i.subSelf(h).dot(g);if(f===0){console.log("Either infinite or no solutions!");g===0?console.log("Its finite solutions."):console.log("Too bad, no solutions.")}g=g/f;if(g<0){b=Math.atan2(b.y-a.y,b.x-a.x);a=Math.atan2(c.y-a.y,c.x-a.x);b>a&&(a=a+Math.PI*2);c=(b+a)/2;a=-Math.cos(c);c=-Math.sin(c);return new THREE.Vector2(a,c)}return d.multiplyScalar(g).addSelf(h).subSelf(a).clone()}function e(c,d){var e,f;for(N=c.length;--N>=0;){e=N;f=N-1;f<0&&(f=
c.length-1);for(var g=0,h=n+l*2,g=0;g<h;g++){var i=R*g,j=R*(g+1),m=d+e+i,i=d+f+i,o=d+f+j,j=d+e+j,p=c,q=g,r=h,s=e,u=f,m=m+H,i=i+H,o=o+H,j=j+H;G.faces.push(new THREE.Face4(m,i,o,j,null,null,t));m=B.generateSideWallUV(G,a,p,b,m,i,o,j,q,r,s,u);G.faceVertexUvs[0].push(m)}}}function f(a,b,c){G.vertices.push(new THREE.Vector3(a,b,c))}function g(c,d,e,f){c=c+H;d=d+H;e=e+H;G.faces.push(new THREE.Face3(c,d,e,null,null,r));c=f?B.generateBottomUV(G,a,b,c,d,e):B.generateTopUV(G,a,b,c,d,e);G.faceVertexUvs[0].push(c)}
var h=b.amount!==void 0?b.amount:100,i=b.bevelThickness!==void 0?b.bevelThickness:6,j=b.bevelSize!==void 0?b.bevelSize:i-2,l=b.bevelSegments!==void 0?b.bevelSegments:3,m=b.bevelEnabled!==void 0?b.bevelEnabled:true,n=b.steps!==void 0?b.steps:1,p=b.extrudePath,o,q=false,r=b.material,t=b.extrudeMaterial,B=b.UVGenerator!==void 0?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,u,s,z,A;if(p){o=p.getSpacedPoints(n);q=true;m=false;u=b.frames!==void 0?b.frames:new THREE.TubeGeometry.FrenetFrames(p,n,
false);s=new THREE.Vector3;z=new THREE.Vector3;A=new THREE.Vector3}if(!m)j=i=l=0;var v,y,C,G=this,H=this.vertices.length,p=a.extractPoints(),J=p.shape,p=p.holes,E=!THREE.Shape.Utils.isClockWise(J);if(E){J=J.reverse();y=0;for(C=p.length;y<C;y++){v=p[y];THREE.Shape.Utils.isClockWise(v)&&(p[y]=v.reverse())}E=false}var M=THREE.Shape.Utils.triangulateShape(J,p),E=J;y=0;for(C=p.length;y<C;y++){v=p[y];J=J.concat(v)}var K,F,I,L,R=J.length,$=M.length,Y=[],N=0,ea=E.length;K=ea-1;for(F=N+1;N<ea;N++,K++,F++){K===
ea&&(K=0);F===ea&&(F=0);Y[N]=d(E[N],E[K],E[F])}var Q=[],qa,la=Y.concat();y=0;for(C=p.length;y<C;y++){v=p[y];qa=[];N=0;ea=v.length;K=ea-1;for(F=N+1;N<ea;N++,K++,F++){K===ea&&(K=0);F===ea&&(F=0);qa[N]=d(v[N],v[K],v[F])}Q.push(qa);la=la.concat(qa)}for(K=0;K<l;K++){v=K/l;I=i*(1-v);F=j*Math.sin(v*Math.PI/2);N=0;for(ea=E.length;N<ea;N++){L=c(E[N],Y[N],F);f(L.x,L.y,-I)}y=0;for(C=p.length;y<C;y++){v=p[y];qa=Q[y];N=0;for(ea=v.length;N<ea;N++){L=c(v[N],qa[N],F);f(L.x,L.y,-I)}}}F=j;for(N=0;N<R;N++){L=m?c(J[N],
la[N],F):J[N];if(q){z.copy(u.normals[0]).multiplyScalar(L.x);s.copy(u.binormals[0]).multiplyScalar(L.y);A.copy(o[0]).addSelf(z).addSelf(s);f(A.x,A.y,A.z)}else f(L.x,L.y,0)}for(v=1;v<=n;v++)for(N=0;N<R;N++){L=m?c(J[N],la[N],F):J[N];if(q){z.copy(u.normals[v]).multiplyScalar(L.x);s.copy(u.binormals[v]).multiplyScalar(L.y);A.copy(o[v]).addSelf(z).addSelf(s);f(A.x,A.y,A.z)}else f(L.x,L.y,h/n*v)}for(K=l-1;K>=0;K--){v=K/l;I=i*(1-v);F=j*Math.sin(v*Math.PI/2);N=0;for(ea=E.length;N<ea;N++){L=c(E[N],Y[N],F);
f(L.x,L.y,h+I)}y=0;for(C=p.length;y<C;y++){v=p[y];qa=Q[y];N=0;for(ea=v.length;N<ea;N++){L=c(v[N],qa[N],F);q?f(L.x,L.y+o[n-1].y,o[n-1].x+I):f(L.x,L.y,h+I)}}}if(m){i=R*0;for(N=0;N<$;N++){h=M[N];g(h[2]+i,h[1]+i,h[0]+i,true)}i=R*(n+l*2);for(N=0;N<$;N++){h=M[N];g(h[0]+i,h[1]+i,h[2]+i,false)}}else{for(N=0;N<$;N++){h=M[N];g(h[2],h[1],h[0],true)}for(N=0;N<$;N++){h=M[N];g(h[0]+R*n,h[1]+R*n,h[2]+R*n,false)}}h=0;e(E,h);h=h+E.length;y=0;for(C=p.length;y<C;y++){v=p[y];e(v,h);h=h+v.length}};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d,e,f){b=a.vertices[e].x;e=a.vertices[e].y;c=a.vertices[f].x;f=a.vertices[f].y;return[new THREE.UV(a.vertices[d].x,a.vertices[d].y),new THREE.UV(b,e),new THREE.UV(c,f)]},generateBottomUV:function(a,b,c,d,e,f){return this.generateTopUV(a,b,c,d,e,f)},generateSideWallUV:function(a,b,c,d,e,f,g,h){var b=a.vertices[e].x,c=a.vertices[e].y,e=a.vertices[e].z,d=a.vertices[f].x,i=a.vertices[f].y,f=a.vertices[f].z,j=a.vertices[g].x,l=a.vertices[g].y,
g=a.vertices[g].z,m=a.vertices[h].x,n=a.vertices[h].y,a=a.vertices[h].z;return Math.abs(c-i)<0.01?[new THREE.UV(b,1-e),new THREE.UV(d,1-f),new THREE.UV(j,1-g),new THREE.UV(m,1-a)]:[new THREE.UV(c,1-e),new THREE.UV(i,1-f),new THREE.UV(l,1-g),new THREE.UV(n,1-a)]}};THREE.ExtrudeGeometry.__v1=new THREE.Vector2;THREE.ExtrudeGeometry.__v2=new THREE.Vector2;THREE.ExtrudeGeometry.__v3=new THREE.Vector2;THREE.ExtrudeGeometry.__v4=new THREE.Vector2;THREE.ExtrudeGeometry.__v5=new THREE.Vector2;
THREE.ExtrudeGeometry.__v6=new THREE.Vector2;THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);a instanceof Array===false&&(a=[a]);this.shapebb=a[a.length-1].getBoundingBox();this.addShapeList(a,b);this.computeCentroids();this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){b===void 0&&(b={});var c=b.material,d=b.UVGenerator===void 0?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints();var i=e.shape,j=e.holes;if(!THREE.Shape.Utils.isClockWise(i)){i=i.reverse();e=0;for(f=j.length;e<f;e++){g=j[e];THREE.Shape.Utils.isClockWise(g)&&(j[e]=g.reverse())}}var l=THREE.Shape.Utils.triangulateShape(i,j);e=0;for(f=j.length;e<f;e++){g=j[e];i=i.concat(g)}j=i.length;f=l.length;for(e=
0;e<j;e++){g=i[e];this.vertices.push(new THREE.Vector3(g.x,g.y,0))}for(e=0;e<f;e++){j=l[e];i=j[0]+h;g=j[1]+h;j=j[2]+h;this.faces.push(new THREE.Face3(i,g,j,null,null,c));this.faceVertexUvs[0].push(d.generateBottomUV(this,a,b,i,g,j))}};
THREE.LatheGeometry=function(a,b,c){THREE.Geometry.call(this);for(var b=b||12,c=c||2*Math.PI,d=[],e=(new THREE.Matrix4).makeRotationZ(c/b),f=0;f<a.length;f++){d[f]=a[f].clone();this.vertices.push(d[f])}for(var g=b+1,c=0;c<g;c++)for(f=0;f<d.length;f++){d[f]=e.multiplyVector3(d[f].clone());this.vertices.push(d[f])}for(c=0;c<b;c++){d=0;for(e=a.length;d<e-1;d++){this.faces.push(new THREE.Face4(c*e+d,(c+1)%g*e+d,(c+1)%g*e+(d+1)%e,c*e+(d+1)%e));this.faceVertexUvs[0].push([new THREE.UV(1-c/b,d/e),new THREE.UV(1-
(c+1)/b,d/e),new THREE.UV(1-(c+1)/b,(d+1)/e),new THREE.UV(1-c/b,(d+1)/e)])}}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this);for(var e=a/2,f=b/2,c=c||1,d=d||1,g=c+1,h=d+1,i=a/c,j=b/d,l=new THREE.Vector3(0,0,1),a=0;a<h;a++)for(b=0;b<g;b++)this.vertices.push(new THREE.Vector3(b*i-e,-(a*j-f),0));for(a=0;a<d;a++)for(b=0;b<c;b++){e=new THREE.Face4(b+g*a,b+g*(a+1),b+1+g*(a+1),b+1+g*a);e.normal.copy(l);e.vertexNormals.push(l.clone(),l.clone(),l.clone(),l.clone());this.faces.push(e);this.faceVertexUvs[0].push([new THREE.UV(b/c,1-a/d),new THREE.UV(b/c,1-(a+1)/d),new THREE.UV((b+
1)/c,1-(a+1)/d),new THREE.UV((b+1)/c,1-a/d)])}this.computeCentroids()};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);var a=a||50,d=d!==void 0?d:0,e=e!==void 0?e:Math.PI*2,f=f!==void 0?f:0,g=g!==void 0?g:Math.PI,b=Math.max(3,Math.floor(b)||8),c=Math.max(2,Math.floor(c)||6),h,i,j=[],l=[];for(i=0;i<=c;i++){var m=[],n=[];for(h=0;h<=b;h++){var p=h/b,o=i/c,q=new THREE.Vector3;q.x=-a*Math.cos(d+p*e)*Math.sin(f+o*g);q.y=a*Math.cos(f+o*g);q.z=a*Math.sin(d+p*e)*Math.sin(f+o*g);this.vertices.push(q);m.push(this.vertices.length-1);n.push(new THREE.UV(p,
1-o))}j.push(m);l.push(n)}for(i=0;i<c;i++)for(h=0;h<b;h++){var d=j[i][h+1],e=j[i][h],f=j[i+1][h],g=j[i+1][h+1],m=this.vertices[d].clone().normalize(),n=this.vertices[e].clone().normalize(),p=this.vertices[f].clone().normalize(),o=this.vertices[g].clone().normalize(),q=l[i][h+1].clone(),r=l[i][h].clone(),t=l[i+1][h].clone(),B=l[i+1][h+1].clone();if(Math.abs(this.vertices[d].y)==a){this.faces.push(new THREE.Face3(d,f,g,[m,p,o]));this.faceVertexUvs[0].push([q,t,B])}else if(Math.abs(this.vertices[f].y)==
a){this.faces.push(new THREE.Face3(d,e,f,[m,n,p]));this.faceVertexUvs[0].push([q,r,t])}else{this.faces.push(new THREE.Face4(d,e,f,g,[m,n,p,o]));this.faceVertexUvs[0].push([q,r,t,B])}}this.computeCentroids();this.computeFaceNormals();this.boundingSphere={radius:a}};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TextGeometry=function(a,b){var c=THREE.FontUtils.generateShapes(a,b);b.amount=b.height!==void 0?b.height:50;if(b.bevelThickness===void 0)b.bevelThickness=10;if(b.bevelSize===void 0)b.bevelSize=8;if(b.bevelEnabled===void 0)b.bevelEnabled=false;THREE.ExtrudeGeometry.call(this,c,b)};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.radius=a||100;this.tube=b||40;this.radialSegments=c||8;this.tubularSegments=d||6;this.arc=e||Math.PI*2;e=new THREE.Vector3;a=[];b=[];for(c=0;c<=this.radialSegments;c++)for(d=0;d<=this.tubularSegments;d++){var f=d/this.tubularSegments*this.arc,g=c/this.radialSegments*Math.PI*2;e.x=this.radius*Math.cos(f);e.y=this.radius*Math.sin(f);var h=new THREE.Vector3;h.x=(this.radius+this.tube*Math.cos(g))*Math.cos(f);h.y=(this.radius+this.tube*
Math.cos(g))*Math.sin(f);h.z=this.tube*Math.sin(g);this.vertices.push(h);a.push(new THREE.UV(d/this.tubularSegments,c/this.radialSegments));b.push(h.clone().subSelf(e).normalize())}for(c=1;c<=this.radialSegments;c++)for(d=1;d<=this.tubularSegments;d++){var e=(this.tubularSegments+1)*c+d-1,f=(this.tubularSegments+1)*(c-1)+d-1,g=(this.tubularSegments+1)*(c-1)+d,h=(this.tubularSegments+1)*c+d,i=new THREE.Face4(e,f,g,h,[b[e],b[f],b[g],b[h]]);i.normal.addSelf(b[e]);i.normal.addSelf(b[f]);i.normal.addSelf(b[g]);
i.normal.addSelf(b[h]);i.normal.normalize();this.faces.push(i);this.faceVertexUvs[0].push([a[e].clone(),a[f].clone(),a[g].clone(),a[h].clone()])}this.computeCentroids()};THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){function h(a,b,c,d,e,f){var g=Math.cos(a);Math.cos(b);b=Math.sin(a);a=c/d*a;c=Math.cos(a);g=e*(2+c)*0.5*g;b=e*(2+c)*b*0.5;e=f*e*Math.sin(a)*0.5;return new THREE.Vector3(g,b,e)}THREE.Geometry.call(this);this.radius=a||200;this.tube=b||40;this.radialSegments=c||64;this.tubularSegments=d||8;this.p=e||2;this.q=f||3;this.heightScale=g||1;this.grid=Array(this.radialSegments);c=new THREE.Vector3;d=new THREE.Vector3;e=new THREE.Vector3;for(a=0;a<this.radialSegments;++a){this.grid[a]=
Array(this.tubularSegments);for(b=0;b<this.tubularSegments;++b){var i=a/this.radialSegments*2*this.p*Math.PI,g=b/this.tubularSegments*2*Math.PI,f=h(i,g,this.q,this.p,this.radius,this.heightScale),i=h(i+0.01,g,this.q,this.p,this.radius,this.heightScale);c.sub(i,f);d.add(i,f);e.cross(c,d);d.cross(e,c);e.normalize();d.normalize();i=-this.tube*Math.cos(g);g=this.tube*Math.sin(g);f.x=f.x+(i*d.x+g*e.x);f.y=f.y+(i*d.y+g*e.y);f.z=f.z+(i*d.z+g*e.z);this.grid[a][b]=this.vertices.push(new THREE.Vector3(f.x,
f.y,f.z))-1}}for(a=0;a<this.radialSegments;++a)for(b=0;b<this.tubularSegments;++b){var e=(a+1)%this.radialSegments,f=(b+1)%this.tubularSegments,c=this.grid[a][b],d=this.grid[e][b],e=this.grid[e][f],f=this.grid[a][f],g=new THREE.UV(a/this.radialSegments,b/this.tubularSegments),i=new THREE.UV((a+1)/this.radialSegments,b/this.tubularSegments),j=new THREE.UV((a+1)/this.radialSegments,(b+1)/this.tubularSegments),l=new THREE.UV(a/this.radialSegments,(b+1)/this.tubularSegments);this.faces.push(new THREE.Face4(c,
d,e,f));this.faceVertexUvs[0].push([g,i,j,l])}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.path=a;this.segments=b||64;this.radius=c||1;this.radiusSegments=d||8;this.closed=e||false;if(f)this.debug=new THREE.Object3D;this.grid=[];var g,h,f=this.segments+1,i,j,l,m=new THREE.Vector3,n,p,o,b=new THREE.TubeGeometry.FrenetFrames(a,b,e);n=b.tangents;p=b.normals;o=b.binormals;this.tangents=n;this.normals=p;this.binormals=o;for(b=0;b<f;b++){this.grid[b]=[];d=b/(f-1);l=a.getPointAt(d);d=n[b];g=p[b];h=o[b];if(this.debug){this.debug.add(new THREE.ArrowHelper(d,
l,c,255));this.debug.add(new THREE.ArrowHelper(g,l,c,16711680));this.debug.add(new THREE.ArrowHelper(h,l,c,65280))}for(d=0;d<this.radiusSegments;d++){i=d/this.radiusSegments*2*Math.PI;j=-this.radius*Math.cos(i);i=this.radius*Math.sin(i);m.copy(l);m.x=m.x+(j*g.x+i*h.x);m.y=m.y+(j*g.y+i*h.y);m.z=m.z+(j*g.z+i*h.z);this.grid[b][d]=this.vertices.push(new THREE.Vector3(m.x,m.y,m.z))-1}}for(b=0;b<this.segments;b++)for(d=0;d<this.radiusSegments;d++){f=e?(b+1)%this.segments:b+1;m=(d+1)%this.radiusSegments;
a=this.grid[b][d];c=this.grid[f][d];f=this.grid[f][m];m=this.grid[b][m];n=new THREE.UV(b/this.segments,d/this.radiusSegments);p=new THREE.UV((b+1)/this.segments,d/this.radiusSegments);o=new THREE.UV((b+1)/this.segments,(d+1)/this.radiusSegments);g=new THREE.UV(b/this.segments,(d+1)/this.radiusSegments);this.faces.push(new THREE.Face4(a,c,f,m));this.faceVertexUvs[0].push([n,p,o,g])}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames=function(a,b,c){new THREE.Vector3;var d=new THREE.Vector3;new THREE.Vector3;var e=[],f=[],g=[],h=new THREE.Vector3,i=new THREE.Matrix4,b=b+1,j,l,m;this.tangents=e;this.normals=f;this.binormals=g;for(j=0;j<b;j++){l=j/(b-1);e[j]=a.getTangentAt(l);e[j].normalize()}f[0]=new THREE.Vector3;g[0]=new THREE.Vector3;a=Number.MAX_VALUE;j=Math.abs(e[0].x);l=Math.abs(e[0].y);m=Math.abs(e[0].z);if(j<=a){a=j;d.set(1,0,0)}if(l<=a){a=l;d.set(0,1,0)}m<=a&&d.set(0,0,1);h.cross(e[0],d).normalize();
f[0].cross(e[0],h);g[0].cross(e[0],f[0]);for(j=1;j<b;j++){f[j]=f[j-1].clone();g[j]=g[j-1].clone();h.cross(e[j-1],e[j]);if(h.length()>1E-4){h.normalize();d=Math.acos(e[j-1].dot(e[j]));i.makeRotationAxis(h,d).multiplyVector3(f[j])}g[j].cross(e[j],f[j])}if(c){d=Math.acos(f[0].dot(f[b-1]));d=d/(b-1);e[0].dot(h.cross(f[0],f[b-1]))>0&&(d=-d);for(j=1;j<b;j++){i.makeRotationAxis(e[j],d*j).multiplyVector3(f[j]);g[j].cross(e[j],f[j])}}};
THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=i.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+0.5,a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+0.5;b.uv=new THREE.UV(c,1-a);return b}function f(a,b,c,d){if(d<1){d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]);d.centroid.addSelf(a).addSelf(b).addSelf(c).divideScalar(3);d.normal=d.centroid.clone().normalize();i.faces.push(d);d=Math.atan2(d.centroid.z,-d.centroid.x);
i.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),h(c.uv,c,d)])}else{d=d-1;f(a,g(a,b),g(a,c),d);f(g(a,b),b,g(b,c),d);f(g(a,c),g(b,c),c,d);f(g(a,b),g(b,c),g(a,c),d)}}function g(a,b){m[a.index]||(m[a.index]=[]);m[b.index]||(m[b.index]=[]);var c=m[a.index][b.index];c===void 0&&(m[a.index][b.index]=m[b.index][a.index]=c=e((new THREE.Vector3).add(a,b).divideScalar(2)));return c}function h(a,b,c){c<0&&a.u===1&&(a=new THREE.UV(a.u-1,a.v));b.x===0&&b.z===0&&(a=new THREE.UV(c/2/Math.PI+0.5,a.v));return a}THREE.Geometry.call(this);
for(var c=c||1,d=d||0,i=this,j=0,l=a.length;j<l;j++)e(new THREE.Vector3(a[j][0],a[j][1],a[j][2]));for(var m=[],a=this.vertices,j=0,l=b.length;j<l;j++)f(a[b[j][0]],a[b[j][1]],a[b[j][2]],d);this.mergeVertices();j=0;for(l=this.vertices.length;j<l;j++)this.vertices[j].multiplyScalar(c);this.computeCentroids();this.boundingSphere={radius:c}};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[[-1,c,0],[1,c,0],[-1,-c,0],[1,-c,0],[0,-1,c],[0,1,c],[0,-1,-c],[0,1,-c],[c,0,-1],[c,0,1],[-c,0,-1],[-c,0,1]],[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]],a,b)};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.OctahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],[[0,2,4],[0,4,3],[0,3,5],[0,5,2],[1,2,5],[1,5,3],[1,3,4],[1,4,2]],a,b)};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,1,1],[-1,-1,1],[-1,1,-1],[1,-1,-1]],[[2,1,0],[0,3,2],[1,3,0],[2,3,1]],a,b)};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry=function(a,b,c,d){THREE.Geometry.call(this);var e=this.vertices,f=this.faces,g=this.faceVertexUvs[0],d=d===void 0?false:d,h,i,j,l,m=b+1;for(h=0;h<=c;h++){l=h/c;for(i=0;i<=b;i++){j=i/b;j=a(j,l);e.push(j)}}var n,p,o,q;for(h=0;h<c;h++)for(i=0;i<b;i++){a=h*m+i;e=h*m+i+1;l=(h+1)*m+i;j=(h+1)*m+i+1;n=new THREE.UV(i/b,h/c);p=new THREE.UV((i+1)/b,h/c);o=new THREE.UV(i/b,(h+1)/c);q=new THREE.UV((i+1)/b,(h+1)/c);if(d){f.push(new THREE.Face3(a,e,l));f.push(new THREE.Face3(e,j,l));g.push([n,
p,o]);g.push([p,q,o])}else{f.push(new THREE.Face4(a,e,j,l));g.push([n,p,q,o])}}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.ConvexGeometry=function(a){function b(a){var b=a.length();return new THREE.UV(a.x/b,a.y/b)}THREE.Geometry.call(this);for(var c=[[0,1,2],[0,2,1]],d=3;d<a.length;d++){var e=d,f=a[e].clone(),g=f.length();f.x=f.x+g*(Math.random()-0.5)*2E-6;f.y=f.y+g*(Math.random()-0.5)*2E-6;f.z=f.z+g*(Math.random()-0.5)*2E-6;for(var g=[],h=0;h<c.length;){var i=c[h],j=f,l=a[i[0]],m;m=l;var n=a[i[1]],p=a[i[2]],o=new THREE.Vector3,q=new THREE.Vector3;o.sub(p,n);q.sub(m,n);o.crossSelf(q);o.isZero()||o.normalize();m=
o;l=m.dot(l);if(m.dot(j)>=l){for(j=0;j<3;j++){l=[i[j],i[(j+1)%3]];m=true;for(n=0;n<g.length;n++)if(g[n][0]===l[1]&&g[n][1]===l[0]){g[n]=g[g.length-1];g.pop();m=false;break}m&&g.push(l)}c[h]=c[c.length-1];c.pop()}else h++}for(n=0;n<g.length;n++)c.push([g[n][0],g[n][1],e])}e=0;f=Array(a.length);for(d=0;d<c.length;d++){g=c[d];for(h=0;h<3;h++){if(f[g[h]]===void 0){f[g[h]]=e++;this.vertices.push(a[g[h]])}g[h]=f[g[h]]}}for(d=0;d<c.length;d++)this.faces.push(new THREE.Face3(c[d][0],c[d][1],c[d][2]));for(d=
0;d<this.faces.length;d++){g=this.faces[d];this.faceVertexUvs[0].push([b(this.vertices[g.a]),b(this.vertices[g.b]),b(this.vertices[g.c])])}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.ConvexGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.AxisHelper=function(a){var b=new THREE.Geometry;b.vertices.push(new THREE.Vector3,new THREE.Vector3(a||1,0,0),new THREE.Vector3,new THREE.Vector3(0,a||1,0),new THREE.Vector3,new THREE.Vector3(0,0,a||1));b.colors.push(new THREE.Color(16711680),new THREE.Color(16755200),new THREE.Color(65280),new THREE.Color(11206400),new THREE.Color(255),new THREE.Color(43775));a=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.Line.call(this,b,a,THREE.LinePieces)};
THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);
THREE.ArrowHelper=function(a,b,c,d){THREE.Object3D.call(this);d===void 0&&(d=16776960);c===void 0&&(c=20);var e=new THREE.Geometry;e.vertices.push(new THREE.Vector3(0,0,0));e.vertices.push(new THREE.Vector3(0,1,0));this.line=new THREE.Line(e,new THREE.LineBasicMaterial({color:d}));this.add(this.line);e=new THREE.CylinderGeometry(0,0.05,0.25,5,1);this.cone=new THREE.Mesh(e,new THREE.MeshBasicMaterial({color:d}));this.cone.position.set(0,1,0);this.add(this.cone);if(b instanceof THREE.Vector3)this.position=
b;this.setDirection(a);this.setLength(c)};THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.setDirection=function(a){var b=(new THREE.Vector3(0,1,0)).crossSelf(a),a=Math.acos((new THREE.Vector3(0,1,0)).dot(a.clone().normalize()));this.matrix=(new THREE.Matrix4).makeRotationAxis(b.normalize(),a);this.rotation.setEulerFromRotationMatrix(this.matrix,this.eulerOrder)};THREE.ArrowHelper.prototype.setLength=function(a){this.scale.set(a,a,a)};
THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.setHex(a);this.cone.material.color.setHex(a)};
THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.geometry.vertices.push(new THREE.Vector3);d.geometry.colors.push(new THREE.Color(b));d.pointMap[a]===void 0&&(d.pointMap[a]=[]);d.pointMap[a].push(d.geometry.vertices.length-1)}THREE.Line.call(this);var d=this;this.geometry=new THREE.Geometry;this.material=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors});this.type=THREE.LinePieces;this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=false;this.pointMap=
{};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1",
"cf2",3355443);b("cf3","cf4",3355443);this.camera=a;this.update(a)};THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update=function(){function a(a,d,e,f){THREE.CameraHelper.__v.set(d,e,f);THREE.CameraHelper.__projector.unprojectVector(THREE.CameraHelper.__v,THREE.CameraHelper.__c);a=b.pointMap[a];if(a!==void 0){d=0;for(e=a.length;d<e;d++)b.geometry.vertices[a[d]].copy(THREE.CameraHelper.__v)}}var b=this;THREE.CameraHelper.__c.projectionMatrix.copy(this.camera.projectionMatrix);a("c",0,0,-1);a("t",0,0,1);a("n1",-1,-1,-1);a("n2",1,-1,-1);a("n3",-1,1,-1);a("n4",1,1,-1);a("f1",-1,-1,1);
a("f2",1,-1,1);a("f3",-1,1,1);a("f4",1,1,1);a("u1",0.7,1.1,-1);a("u2",-0.7,1.1,-1);a("u3",0,2,-1);a("cf1",-1,0,1);a("cf2",1,0,1);a("cf3",0,-1,1);a("cf4",0,1,1);a("cn1",-1,0,-1);a("cn2",1,0,-1);a("cn3",0,-1,-1);a("cn4",0,1,-1);this.geometry.verticesNeedUpdate=true};THREE.CameraHelper.__projector=new THREE.Projector;THREE.CameraHelper.__v=new THREE.Vector3;THREE.CameraHelper.__c=new THREE.Camera;
THREE.SubdivisionModifier=function(a){this.subdivisions=a===void 0?1:a;this.useOldVertexColors=false;this.supportUVs=true;this.debug=false};THREE.SubdivisionModifier.prototype.modify=function(a){for(var b=this.subdivisions;b-- >0;)this.smooth(a)};THREE.GeometryUtils.orderedKey=function(a,b){return Math.min(a,b)+"_"+Math.max(a,b)};
THREE.GeometryUtils.computeEdgeFaces=function(a){function b(a,b){g[a]===void 0&&(g[a]=[]);g[a].push(b)}var c,d,e,f,g={},h=THREE.GeometryUtils.orderedKey;c=0;for(d=a.faces.length;c<d;c++){e=a.faces[c];if(e instanceof THREE.Face3){f=h(e.a,e.b);b(f,c);f=h(e.b,e.c);b(f,c);f=h(e.c,e.a);b(f,c)}else if(e instanceof THREE.Face4){f=h(e.a,e.b);b(f,c);f=h(e.b,e.c);b(f,c);f=h(e.c,e.d);b(f,c);f=h(e.d,e.a);b(f,c)}}return g};
THREE.SubdivisionModifier.prototype.smooth=function(a){function b(){l.debug&&(console&&console.assert)&&console.assert.apply(console,arguments)}function c(){l.debug&&console.log.apply(console,arguments)}function d(){console&&console.log.apply(console,arguments)}function e(a,b,d,e,g,h,m){var n=new THREE.Face4(a,b,d,e,null,g.color,g.materialIndex);if(l.useOldVertexColors){n.vertexColors=[];for(var o,p,q,r=0;r<4;r++){q=h[r];o=new THREE.Color;o.setRGB(0,0,0);for(var s=0;s<q.length;s++){p=g.vertexColors[q[s]-
1];o.r=o.r+p.r;o.g=o.g+p.g;o.b=o.b+p.b}o.r=o.r/q.length;o.g=o.g/q.length;o.b=o.b/q.length;n.vertexColors[r]=o}}i.push(n);if(l.supportUVs){g=[f(a,""),f(b,m),f(d,m),f(e,m)];g[0]?g[1]?g[2]?g[3]?j.push(g):c("d :( ",e+":"+m):c("c :( ",d+":"+m):c("b :( ",b+":"+m):c("a :( ",a+":"+m)}}function f(a,b){var e=a+":"+b,f=u[e];if(!f){a>=q&&a<q+o.length?c("face pt"):c("edge pt");d("warning, UV not found for",e);return null}return f}function g(a,b,c){var e=a+":"+b;e in u?d("dup vertexNo",a,"oldFaceNo",b,"value",
c,"key",e,u[e]):u[e]=c}var h=[],i=[],j=[],l=this,m=THREE.GeometryUtils.orderedKey,n=THREE.GeometryUtils.computeEdgeFaces,p=a.vertices,o=a.faces,q=p.length,h=p.concat(),r=[],t={},B={},u={},s,z,A,v,y,C=a.faceVertexUvs[0],G;c("originalFaces, uvs, originalVerticesLength",o.length,C.length,q);if(l.supportUVs){s=0;for(z=C.length;s<z;s++){A=0;for(v=C[s].length;A<v;A++){G=o[s]["abcd".charAt(A)];g(G,s,C[s][A])}}}if(C.length==0)l.supportUVs=false;s=0;for(var H in u)s++;if(!s){l.supportUVs=false;c("no uvs")}s=
0;for(z=o.length;s<z;s++){y=o[s];r.push(y.centroid);h.push(y.centroid);if(l.supportUVs){v=new THREE.UV;if(y instanceof THREE.Face3){v.u=f(y.a,s).u+f(y.b,s).u+f(y.c,s).u;v.v=f(y.a,s).v+f(y.b,s).v+f(y.c,s).v;v.u=v.u/3;v.v=v.v/3}else if(y instanceof THREE.Face4){v.u=f(y.a,s).u+f(y.b,s).u+f(y.c,s).u+f(y.d,s).u;v.v=f(y.a,s).v+f(y.b,s).v+f(y.c,s).v+f(y.d,s).v;v.u=v.u/4;v.v=v.v/4}g(q+s,"",v)}}var n=n(a),J;z=0;var E,M;H={};C={};for(s in n){G=n[s];E=s.split("_");M=E[0];E=E[1];A=M;y=[M,E];H[A]===void 0&&(H[A]=
[]);H[A].push(y);A=E;y=[M,E];H[A]===void 0&&(H[A]=[]);H[A].push(y);A=0;for(v=G.length;A<v;A++){y=G[A];J=M;var K=y,F=s;C[J]===void 0&&(C[J]={});C[J][K]=F;J=E;K=s;C[J]===void 0&&(C[J]={});C[J][y]=K}G.length<2&&(B[s]=true)}for(s in n){G=n[s];y=G[0];J=G[1];E=s.split("_");M=E[0];E=E[1];v=new THREE.Vector3;b(G.length>0,"an edge without faces?!");if(G.length==1){v.addSelf(p[M]);v.addSelf(p[E]);v.multiplyScalar(0.5)}else{v.addSelf(r[y]);v.addSelf(r[J]);v.addSelf(p[M]);v.addSelf(p[E]);v.multiplyScalar(0.25)}t[s]=
q+o.length+z;h.push(v);z++;if(l.supportUVs){v=new THREE.UV;v.u=f(M,y).u+f(E,y).u;v.v=f(M,y).v+f(E,y).v;v.u=v.u/2;v.v=v.v/2;g(t[s],y,v);if(G.length>=2){b(G.length==2,"did we plan for more than 2 edges?");v=new THREE.UV;v.u=f(M,J).u+f(E,J).u;v.v=f(M,J).v+f(E,J).v;v.u=v.u/2;v.v=v.v/2;g(t[s],J,v)}}}c("-- Step 2 done");var I,L;v=["123","12","2","23"];J=["123","23","3","31"];var K=["123","31","1","12"],F=["1234","12","2","23"],R=["1234","23","3","34"],$=["1234","34","4","41"],Y=["1234","41","1","12"];s=
0;for(z=r.length;s<z;s++){y=o[s];G=q+s;if(y instanceof THREE.Face3){M=m(y.a,y.b);E=m(y.b,y.c);I=m(y.c,y.a);e(G,t[M],y.b,t[E],y,v,s);e(G,t[E],y.c,t[I],y,J,s);e(G,t[I],y.a,t[M],y,K,s)}else if(y instanceof THREE.Face4){M=m(y.a,y.b);E=m(y.b,y.c);I=m(y.c,y.d);L=m(y.d,y.a);e(G,t[M],y.b,t[E],y,F,s);e(G,t[E],y.c,t[I],y,R,s);e(G,t[I],y.d,t[L],y,$,s);e(G,t[L],y.a,t[M],y,Y,s)}else c("face should be a face!",y)}t=new THREE.Vector3;y=new THREE.Vector3;s=0;for(z=p.length;s<z;s++)if(H[s]!==void 0){t.set(0,0,0);
y.set(0,0,0);E=new THREE.Vector3(0,0,0);G=0;for(A in C[s]){t.addSelf(r[A]);G++}J=0;M=H[s].length;v=G!=M;for(A=0;A<M;A++)B[m(H[s][A][0],H[s][A][1])]&&J++;t.divideScalar(G);J=0;if(v){for(A=0;A<M;A++){G=H[s][A];if(K=n[m(G[0],G[1])].length==1){G=p[G[0]].clone().addSelf(p[G[1]]).divideScalar(2);y.addSelf(G);J++}}y.divideScalar(4);b(J==2,"should have only 2 boundary edges")}else{for(A=0;A<M;A++){G=H[s][A];G=p[G[0]].clone().addSelf(p[G[1]]).divideScalar(2);y.addSelf(G)}y.divideScalar(M)}E.addSelf(p[s]);
if(v){E.divideScalar(2);E.addSelf(y)}else{E.multiplyScalar(M-3);E.addSelf(t);E.addSelf(y.multiplyScalar(2));E.divideScalar(M)}h[s]=E}a.vertices=h;a.faces=i;a.faceVertexUvs[0]=j;delete a.__tmpVertices;a.computeCentroids();a.computeFaceNormals();a.computeVertexNormals()};THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);
THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;a!==void 0&&this.add(a,b,c,d,e)};THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){b===void 0&&(b=-1);c===void 0&&(c=0);f===void 0&&(f=1);e===void 0&&(e=new THREE.Color(16777215));if(d===void 0)d=THREE.NormalBlending;c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:1,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=-this.positionScreen.x*2,e=-this.positionScreen.y*2;for(a=0;a<b;a++){c=this.lensFlares[a];c.x=this.positionScreen.x+d*c.distance;c.y=this.positionScreen.y+e*c.distance;c.wantedRotation=c.x*Math.PI*0.25;c.rotation=c.rotation+(c.wantedRotation-c.rotation)*0.25}};
THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={startFrame:b,endFrame:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:false,time:0,direction:1,weight:1,directionBackwards:false,mirroredLoop:false};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)(\d+)/,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&h.length>1){var i=h[1];d[i]||(d[i]={start:Infinity,end:-Infinity});h=d[i];if(f<h.start)h.start=f;if(f>h.end)h.end=f;c||(c=i)}}for(i in d){h=d[i];this.createAnimation(i,h.start,h.end,a)}this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a]){a.direction=1;a.directionBackwards=false}};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a]){a.direction=-1;a.directionBackwards=true}};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];if(c){c.fps=b;c.duration=(c.end-c.start)/c.fps}};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];if(c){c.duration=b;c.fps=(c.end-c.start)/c.duration}};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];if(c)c.weight=b};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];if(c)c.time=b};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];if(b){b.time=0;b.active=true}else console.warn("animation["+a+"] undefined")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=false};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time=d.time+d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||d.time<0){d.direction=d.direction*-1;if(d.time>d.duration){d.time=d.duration;d.directionBackwards=true}if(d.time<0){d.time=0;d.directionBackwards=false}}}else{d.time=d.time%d.duration;if(d.time<0)d.time=d.time+d.duration}var f=d.startFrame+THREE.Math.clamp(Math.floor(d.time/
e),0,d.length-1),g=d.weight;if(f!==d.currentFrame){this.morphTargetInfluences[d.lastFrame]=0;this.morphTargetInfluences[d.currentFrame]=1*g;this.morphTargetInfluences[f]=0;d.lastFrame=d.currentFrame;d.currentFrame=f}e=d.time%e/e;d.directionBackwards&&(e=1-e);this.morphTargetInfluences[d.currentFrame]=e*g;this.morphTargetInfluences[d.lastFrame]=(1-e)*g}}};
THREE.LensFlarePlugin=function(){function a(a){var c=b.createProgram(),d=b.createShader(b.FRAGMENT_SHADER),e=b.createShader(b.VERTEX_SHADER);b.shaderSource(d,a.fragmentShader);b.shaderSource(e,a.vertexShader);b.compileShader(d);b.compileShader(e);b.attachShader(c,d);b.attachShader(c,e);b.linkProgram(c);return c}var b,c,d,e,f,g,h,i,j,l,m,n,p;this.init=function(o){b=o.context;c=o;d=new Float32Array(16);e=new Uint16Array(6);o=0;d[o++]=-1;d[o++]=-1;d[o++]=0;d[o++]=0;d[o++]=1;d[o++]=-1;d[o++]=1;d[o++]=
0;d[o++]=1;d[o++]=1;d[o++]=1;d[o++]=1;d[o++]=-1;d[o++]=1;d[o++]=0;d[o++]=1;o=0;e[o++]=0;e[o++]=1;e[o++]=2;e[o++]=0;e[o++]=2;e[o++]=3;f=b.createBuffer();g=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,f);b.bufferData(b.ARRAY_BUFFER,d,b.STATIC_DRAW);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.bufferData(b.ELEMENT_ARRAY_BUFFER,e,b.STATIC_DRAW);h=b.createTexture();i=b.createTexture();b.bindTexture(b.TEXTURE_2D,h);b.texImage2D(b.TEXTURE_2D,0,b.RGB,16,16,0,b.RGB,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,
b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.bindTexture(b.TEXTURE_2D,i);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,16,16,0,b.RGBA,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);if(b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS)<=0){j=false;l=a(THREE.ShaderFlares.lensFlare)}else{j=true;l=a(THREE.ShaderFlares.lensFlareVertexTexture)}m={};n={};m.vertex=b.getAttribLocation(l,"position");m.uv=b.getAttribLocation(l,"uv");n.renderType=b.getUniformLocation(l,"renderType");n.map=b.getUniformLocation(l,"map");n.occlusionMap=b.getUniformLocation(l,"occlusionMap");n.opacity=b.getUniformLocation(l,"opacity");n.color=b.getUniformLocation(l,
"color");n.scale=b.getUniformLocation(l,"scale");n.rotation=b.getUniformLocation(l,"rotation");n.screenPosition=b.getUniformLocation(l,"screenPosition");p=false};this.render=function(a,d,e,t){var a=a.__webglFlares,B=a.length;if(B){var u=new THREE.Vector3,s=t/e,z=e*0.5,A=t*0.5,v=16/t,y=new THREE.Vector2(v*s,v),C=new THREE.Vector3(1,1,0),G=new THREE.Vector2(1,1),H=n,v=m;b.useProgram(l);if(!p){b.enableVertexAttribArray(m.vertex);b.enableVertexAttribArray(m.uv);p=true}b.uniform1i(H.occlusionMap,0);b.uniform1i(H.map,
1);b.bindBuffer(b.ARRAY_BUFFER,f);b.vertexAttribPointer(v.vertex,2,b.FLOAT,false,16,0);b.vertexAttribPointer(v.uv,2,b.FLOAT,false,16,8);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.disable(b.CULL_FACE);b.depthMask(false);var J,E,M,K,F;for(J=0;J<B;J++){v=16/t;y.set(v*s,v);K=a[J];u.set(K.matrixWorld.elements[12],K.matrixWorld.elements[13],K.matrixWorld.elements[14]);d.matrixWorldInverse.multiplyVector3(u);d.projectionMatrix.multiplyVector3(u);C.copy(u);G.x=C.x*z+z;G.y=C.y*A+A;if(j||G.x>0&&G.x<e&&G.y>0&&
G.y<t){b.activeTexture(b.TEXTURE1);b.bindTexture(b.TEXTURE_2D,h);b.copyTexImage2D(b.TEXTURE_2D,0,b.RGB,G.x-8,G.y-8,16,16,0);b.uniform1i(H.renderType,0);b.uniform2f(H.scale,y.x,y.y);b.uniform3f(H.screenPosition,C.x,C.y,C.z);b.disable(b.BLEND);b.enable(b.DEPTH_TEST);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);b.activeTexture(b.TEXTURE0);b.bindTexture(b.TEXTURE_2D,i);b.copyTexImage2D(b.TEXTURE_2D,0,b.RGBA,G.x-8,G.y-8,16,16,0);b.uniform1i(H.renderType,1);b.disable(b.DEPTH_TEST);b.activeTexture(b.TEXTURE1);
b.bindTexture(b.TEXTURE_2D,h);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);K.positionScreen.copy(C);K.customUpdateCallback?K.customUpdateCallback(K):K.updateLensFlares();b.uniform1i(H.renderType,2);b.enable(b.BLEND);E=0;for(M=K.lensFlares.length;E<M;E++){F=K.lensFlares[E];if(F.opacity>0.001&&F.scale>0.001){C.x=F.x;C.y=F.y;C.z=F.z;v=F.size*F.scale/t;y.x=v*s;y.y=v;b.uniform3f(H.screenPosition,C.x,C.y,C.z);b.uniform2f(H.scale,y.x,y.y);b.uniform1f(H.rotation,F.rotation);b.uniform1f(H.opacity,F.opacity);
b.uniform3f(H.color,F.color.r,F.color.g,F.color.b);c.setBlending(F.blending,F.blendEquation,F.blendSrc,F.blendDst);c.setTexture(F.texture,1);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0)}}}}b.enable(b.CULL_FACE);b.enable(b.DEPTH_TEST);b.depthMask(true)}}};
THREE.ShadowMapPlugin=function(){var a,b,c,d,e,f,g=new THREE.Frustum,h=new THREE.Matrix4,i=new THREE.Vector3,j=new THREE.Vector3;this.init=function(g){a=g.context;b=g;var g=THREE.ShaderLib.depthRGBA,h=THREE.UniformsUtils.clone(g.uniforms);c=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h});d=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:true});e=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,
vertexShader:g.vertexShader,uniforms:h,skinning:true});f=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:true,skinning:true});c._shadowPass=true;d._shadowPass=true;e._shadowPass=true;f._shadowPass=true};this.render=function(a,c){b.shadowMapEnabled&&b.shadowMapAutoUpdate&&this.update(a,c)};this.update=function(l,m){var n,p,o,q,r,t,B,u,s,z=[];q=0;a.clearColor(1,1,1,1);a.disable(a.BLEND);a.enable(a.CULL_FACE);a.frontFace(a.CCW);b.shadowMapCullFrontFaces?
a.cullFace(a.FRONT):a.cullFace(a.BACK);b.setDepthTest(true);n=0;for(p=l.__lights.length;n<p;n++){o=l.__lights[n];if(o.castShadow)if(o instanceof THREE.DirectionalLight&&o.shadowCascade)for(r=0;r<o.shadowCascadeCount;r++){var A;if(o.shadowCascadeArray[r])A=o.shadowCascadeArray[r];else{s=o;B=r;A=new THREE.DirectionalLight;A.isVirtual=true;A.onlyShadow=true;A.castShadow=true;A.shadowCameraNear=s.shadowCameraNear;A.shadowCameraFar=s.shadowCameraFar;A.shadowCameraLeft=s.shadowCameraLeft;A.shadowCameraRight=
s.shadowCameraRight;A.shadowCameraBottom=s.shadowCameraBottom;A.shadowCameraTop=s.shadowCameraTop;A.shadowCameraVisible=s.shadowCameraVisible;A.shadowDarkness=s.shadowDarkness;A.shadowBias=s.shadowCascadeBias[B];A.shadowMapWidth=s.shadowCascadeWidth[B];A.shadowMapHeight=s.shadowCascadeHeight[B];A.pointsWorld=[];A.pointsFrustum=[];u=A.pointsWorld;t=A.pointsFrustum;for(var v=0;v<8;v++){u[v]=new THREE.Vector3;t[v]=new THREE.Vector3}u=s.shadowCascadeNearZ[B];s=s.shadowCascadeFarZ[B];t[0].set(-1,-1,u);
t[1].set(1,-1,u);t[2].set(-1,1,u);t[3].set(1,1,u);t[4].set(-1,-1,s);t[5].set(1,-1,s);t[6].set(-1,1,s);t[7].set(1,1,s);A.originalCamera=m;t=new THREE.Gyroscope;t.position=o.shadowCascadeOffset;t.add(A);t.add(A.target);m.add(t);o.shadowCascadeArray[r]=A;console.log("Created virtualLight",A)}B=o;u=r;s=B.shadowCascadeArray[u];s.position.copy(B.position);s.target.position.copy(B.target.position);s.lookAt(s.target);s.shadowCameraVisible=B.shadowCameraVisible;s.shadowDarkness=B.shadowDarkness;s.shadowBias=
B.shadowCascadeBias[u];t=B.shadowCascadeNearZ[u];B=B.shadowCascadeFarZ[u];s=s.pointsFrustum;s[0].z=t;s[1].z=t;s[2].z=t;s[3].z=t;s[4].z=B;s[5].z=B;s[6].z=B;s[7].z=B;z[q]=A;q++}else{z[q]=o;q++}}n=0;for(p=z.length;n<p;n++){o=z[n];if(!o.shadowMap){o.shadowMap=new THREE.WebGLRenderTarget(o.shadowMapWidth,o.shadowMapHeight,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBAFormat});o.shadowMapSize=new THREE.Vector2(o.shadowMapWidth,o.shadowMapHeight);o.shadowMatrix=new THREE.Matrix4}if(!o.shadowCamera){if(o instanceof
THREE.SpotLight)o.shadowCamera=new THREE.PerspectiveCamera(o.shadowCameraFov,o.shadowMapWidth/o.shadowMapHeight,o.shadowCameraNear,o.shadowCameraFar);else if(o instanceof THREE.DirectionalLight)o.shadowCamera=new THREE.OrthographicCamera(o.shadowCameraLeft,o.shadowCameraRight,o.shadowCameraTop,o.shadowCameraBottom,o.shadowCameraNear,o.shadowCameraFar);else{console.error("Unsupported light type for shadow");continue}l.add(o.shadowCamera);b.autoUpdateScene&&l.updateMatrixWorld()}if(o.shadowCameraVisible&&
!o.cameraHelper){o.cameraHelper=new THREE.CameraHelper(o.shadowCamera);o.shadowCamera.add(o.cameraHelper)}if(o.isVirtual&&A.originalCamera==m){r=m;q=o.shadowCamera;t=o.pointsFrustum;s=o.pointsWorld;i.set(Infinity,Infinity,Infinity);j.set(-Infinity,-Infinity,-Infinity);for(B=0;B<8;B++){u=s[B];u.copy(t[B]);THREE.ShadowMapPlugin.__projector.unprojectVector(u,r);q.matrixWorldInverse.multiplyVector3(u);if(u.x<i.x)i.x=u.x;if(u.x>j.x)j.x=u.x;if(u.y<i.y)i.y=u.y;if(u.y>j.y)j.y=u.y;if(u.z<i.z)i.z=u.z;if(u.z>
j.z)j.z=u.z}q.left=i.x;q.right=j.x;q.top=j.y;q.bottom=i.y;q.updateProjectionMatrix()}q=o.shadowMap;t=o.shadowMatrix;r=o.shadowCamera;r.position.copy(o.matrixWorld.getPosition());r.lookAt(o.target.matrixWorld.getPosition());r.updateMatrixWorld();r.matrixWorldInverse.getInverse(r.matrixWorld);if(o.cameraHelper)o.cameraHelper.visible=o.shadowCameraVisible;o.shadowCameraVisible&&o.cameraHelper.update();t.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);t.multiplySelf(r.projectionMatrix);t.multiplySelf(r.matrixWorldInverse);
if(!r._viewMatrixArray)r._viewMatrixArray=new Float32Array(16);if(!r._projectionMatrixArray)r._projectionMatrixArray=new Float32Array(16);r.matrixWorldInverse.flattenToArray(r._viewMatrixArray);r.projectionMatrix.flattenToArray(r._projectionMatrixArray);h.multiply(r.projectionMatrix,r.matrixWorldInverse);g.setFromMatrix(h);b.setRenderTarget(q);b.clear();s=l.__webglObjects;o=0;for(q=s.length;o<q;o++){B=s[o];t=B.object;B.render=false;if(t.visible&&t.castShadow&&(!(t instanceof THREE.Mesh)||!t.frustumCulled||
g.contains(t))){t._modelViewMatrix.multiply(r.matrixWorldInverse,t.matrixWorld);B.render=true}}o=0;for(q=s.length;o<q;o++){B=s[o];if(B.render){t=B.object;B=B.buffer;v=t.material instanceof THREE.MeshFaceMaterial?t.geometry.materials[0]:t.material;u=t.geometry.morphTargets.length>0&&v.morphTargets;v=t instanceof THREE.SkinnedMesh&&v.skinning;u=t.customDepthMaterial?t.customDepthMaterial:v?u?f:e:u?d:c;B instanceof THREE.BufferGeometry?b.renderBufferDirect(r,l.__lights,null,u,B,t):b.renderBuffer(r,l.__lights,
null,u,B,t)}}s=l.__webglObjectsImmediate;o=0;for(q=s.length;o<q;o++){B=s[o];t=B.object;if(t.visible&&t.castShadow){t._modelViewMatrix.multiply(r.matrixWorldInverse,t.matrixWorld);b.renderImmediateObject(r,l.__lights,null,c,t)}}}n=b.getClearColor();p=b.getClearAlpha();a.clearColor(n.r,n.g,n.b,p);a.enable(a.BLEND);b.shadowMapCullFrontFaces&&a.cullFace(a.BACK)}};THREE.ShadowMapPlugin.__projector=new THREE.Projector;
THREE.SpritePlugin=function(){function a(a,b){return b.z-a.z}var b,c,d,e,f,g,h,i,j,l;this.init=function(a){b=a.context;c=a;d=new Float32Array(16);e=new Uint16Array(6);a=0;d[a++]=-1;d[a++]=-1;d[a++]=0;d[a++]=0;d[a++]=1;d[a++]=-1;d[a++]=1;d[a++]=0;d[a++]=1;d[a++]=1;d[a++]=1;d[a++]=1;d[a++]=-1;d[a++]=1;d[a++]=0;d[a++]=1;a=0;e[a++]=0;e[a++]=1;e[a++]=2;e[a++]=0;e[a++]=2;e[a++]=3;f=b.createBuffer();g=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,f);b.bufferData(b.ARRAY_BUFFER,d,b.STATIC_DRAW);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,
g);b.bufferData(b.ELEMENT_ARRAY_BUFFER,e,b.STATIC_DRAW);var a=THREE.ShaderSprite.sprite,n=b.createProgram(),p=b.createShader(b.FRAGMENT_SHADER),o=b.createShader(b.VERTEX_SHADER);b.shaderSource(p,a.fragmentShader);b.shaderSource(o,a.vertexShader);b.compileShader(p);b.compileShader(o);b.attachShader(n,p);b.attachShader(n,o);b.linkProgram(n);h=n;i={};j={};i.position=b.getAttribLocation(h,"position");i.uv=b.getAttribLocation(h,"uv");j.uvOffset=b.getUniformLocation(h,"uvOffset");j.uvScale=b.getUniformLocation(h,
"uvScale");j.rotation=b.getUniformLocation(h,"rotation");j.scale=b.getUniformLocation(h,"scale");j.alignment=b.getUniformLocation(h,"alignment");j.color=b.getUniformLocation(h,"color");j.map=b.getUniformLocation(h,"map");j.opacity=b.getUniformLocation(h,"opacity");j.useScreenCoordinates=b.getUniformLocation(h,"useScreenCoordinates");j.affectedByDistance=b.getUniformLocation(h,"affectedByDistance");j.screenPosition=b.getUniformLocation(h,"screenPosition");j.modelViewMatrix=b.getUniformLocation(h,"modelViewMatrix");
j.projectionMatrix=b.getUniformLocation(h,"projectionMatrix");l=false};this.render=function(d,e,p,o){var d=d.__webglSprites,q=d.length;if(q){var r=i,t=j,B=o/p,p=p*0.5,u=o*0.5,s=true;b.useProgram(h);if(!l){b.enableVertexAttribArray(r.position);b.enableVertexAttribArray(r.uv);l=true}b.disable(b.CULL_FACE);b.enable(b.BLEND);b.depthMask(true);b.bindBuffer(b.ARRAY_BUFFER,f);b.vertexAttribPointer(r.position,2,b.FLOAT,false,16,0);b.vertexAttribPointer(r.uv,2,b.FLOAT,false,16,8);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,
g);b.uniformMatrix4fv(t.projectionMatrix,false,e._projectionMatrixArray);b.activeTexture(b.TEXTURE0);b.uniform1i(t.map,0);for(var z,A=[],r=0;r<q;r++){z=d[r];if(z.visible&&z.opacity!==0)if(z.useScreenCoordinates)z.z=-z.position.z;else{z._modelViewMatrix.multiply(e.matrixWorldInverse,z.matrixWorld);z.z=-z._modelViewMatrix.elements[14]}}d.sort(a);for(r=0;r<q;r++){z=d[r];if(z.visible&&z.opacity!==0&&z.map&&z.map.image&&z.map.image.width){if(z.useScreenCoordinates){b.uniform1i(t.useScreenCoordinates,1);
b.uniform3f(t.screenPosition,(z.position.x-p)/p,(u-z.position.y)/u,Math.max(0,Math.min(1,z.position.z)))}else{b.uniform1i(t.useScreenCoordinates,0);b.uniform1i(t.affectedByDistance,z.affectedByDistance?1:0);b.uniformMatrix4fv(t.modelViewMatrix,false,z._modelViewMatrix.elements)}e=z.map.image.width/(z.scaleByViewport?o:1);A[0]=e*B*z.scale.x;A[1]=e*z.scale.y;b.uniform2f(t.uvScale,z.uvScale.x,z.uvScale.y);b.uniform2f(t.uvOffset,z.uvOffset.x,z.uvOffset.y);b.uniform2f(t.alignment,z.alignment.x,z.alignment.y);
b.uniform1f(t.opacity,z.opacity);b.uniform3f(t.color,z.color.r,z.color.g,z.color.b);b.uniform1f(t.rotation,z.rotation);b.uniform2fv(t.scale,A);if(z.mergeWith3D&&!s){b.enable(b.DEPTH_TEST);s=true}else if(!z.mergeWith3D&&s){b.disable(b.DEPTH_TEST);s=false}c.setBlending(z.blending,z.blendEquation,z.blendSrc,z.blendDst);c.setTexture(z.map,0);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0)}}b.enable(b.CULL_FACE);b.enable(b.DEPTH_TEST);b.depthMask(true)}}};
THREE.DepthPassPlugin=function(){this.enabled=false;this.renderTarget=null;var a,b,c,d,e=new THREE.Frustum,f=new THREE.Matrix4;this.init=function(e){a=e.context;b=e;var e=THREE.ShaderLib.depthRGBA,f=THREE.UniformsUtils.clone(e.uniforms);c=new THREE.ShaderMaterial({fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:f});d=new THREE.ShaderMaterial({fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:f,morphTargets:true});c._shadowPass=true;d._shadowPass=true};this.render=
function(a,b){this.enabled&&this.update(a,b)};this.update=function(g,h){var i,j,l,m,n,p;a.clearColor(1,1,1,1);a.disable(a.BLEND);b.setDepthTest(true);b.autoUpdateScene&&g.updateMatrixWorld();if(!h._viewMatrixArray)h._viewMatrixArray=new Float32Array(16);if(!h._projectionMatrixArray)h._projectionMatrixArray=new Float32Array(16);h.matrixWorldInverse.getInverse(h.matrixWorld);h.matrixWorldInverse.flattenToArray(h._viewMatrixArray);h.projectionMatrix.flattenToArray(h._projectionMatrixArray);f.multiply(h.projectionMatrix,
h.matrixWorldInverse);e.setFromMatrix(f);b.setRenderTarget(this.renderTarget);b.clear();p=g.__webglObjects;i=0;for(j=p.length;i<j;i++){l=p[i];n=l.object;l.render=false;if(n.visible&&(!(n instanceof THREE.Mesh)||!n.frustumCulled||e.contains(n))){n._modelViewMatrix.multiply(h.matrixWorldInverse,n.matrixWorld);l.render=true}}i=0;for(j=p.length;i<j;i++){l=p[i];if(l.render){n=l.object;l=l.buffer;n.material&&b.setMaterialFaces(n.material);m=n.customDepthMaterial?n.customDepthMaterial:n.geometry.morphTargets.length?
d:c;l instanceof THREE.BufferGeometry?b.renderBufferDirect(h,g.__lights,null,m,l,n):b.renderBuffer(h,g.__lights,null,m,l,n)}}p=g.__webglObjectsImmediate;i=0;for(j=p.length;i<j;i++){l=p[i];n=l.object;if(n.visible&&n.castShadow){n._modelViewMatrix.multiply(h.matrixWorldInverse,n.matrixWorld);b.renderImmediateObject(h,g.__lights,null,c,n)}}i=b.getClearColor();j=b.getClearAlpha();a.clearColor(i.r,i.g,i.b,j);a.enable(a.BLEND)}};
THREE.ShaderFlares={lensFlareVertexTexture:{vertexShader:"uniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform int renderType;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility = (       visibility.r / 9.0 ) *\n( 1.0 - visibility.g / 9.0 ) *\n(       visibility.b / 9.0 ) *\n( 1.0 - visibility.a / 9.0 );\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader:"precision mediump float;\nuniform sampler2D map;\nuniform float opacity;\nuniform int renderType;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},
lensFlare:{vertexShader:"uniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform int renderType;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader:"precision mediump float;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform int renderType;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}};
THREE.ShaderSprite={sprite:{vertexShader:"uniform int useScreenCoordinates;\nuniform int affectedByDistance;\nuniform vec3 screenPosition;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 alignment;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}",
fragmentShader:"precision mediump float;\nuniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\n}"}};

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

Detector = {

	canvas : !! window.CanvasRenderingContext2D,
	webgl : ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
	workers : !! window.Worker,
	fileapi : window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage : function () {

		var domElement = document.createElement( 'div' );

		domElement.style.fontFamily = 'monospace';
		domElement.style.fontSize = '13px';
		domElement.style.textAlign = 'center';
		domElement.style.background = '#eee';
		domElement.style.color = '#000';
		domElement.style.padding = '1em';
		domElement.style.width = '475px';
		domElement.style.margin = '5em auto 0';

		if ( ! this.webgl ) {

			domElement.innerHTML = window.WebGLRenderingContext ? [
				'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>.<br />',
				'Find out how to get it <a href="http://get.webgl.org/">here</a>.'
			].join( '\n' ) : [
				'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>.<br/>',
				'Find out how to get it <a href="http://get.webgl.org/">here</a>.'
			].join( '\n' );

		}

		return domElement;

	},

	addGetWebGLMessage : function ( parameters ) {

		var parent, id, domElement;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		domElement = Detector.getWebGLErrorMessage();
		domElement.id = id;

		parent.appendChild( domElement );

	}

};

/**
 * @author sole / http://soledadpenades.com
 * @author mrdoob / http://mrdoob.com
 * @author Robert Eisele / http://www.xarg.org
 * @author Philippe / http://philippe.elsass.me
 * @author Robert Penner / http://www.robertpenner.com/easing_terms_of_use.html
 * @author Paul Lewis / http://www.aerotwist.com/
 * @author lechecacharro
 * @author Josh Faul / http://jocafa.com/
 * @author egraether / http://egraether.com/
 */

var TWEEN = TWEEN || ( function () {

	var _tweens = [], _threshold = 100, _dir = 0;

	return {

		REVISION: '7',

        setThreshold: function(threshold) {
            _threshold = threshold;
        },
		getAll: function () {

			return _tweens;

		},

		removeAll: function () {

			_tweens = [];

		},

		add: function ( tween ) {

			_tweens.push( tween );

		},

		remove: function ( tween ) {

			var i = _tweens.indexOf( tween );

			if ( i !== -1 ) {

				_tweens.splice( i, 1 );

			}

		},

		update: function ( time ) {

			if ( _tweens.length === 0 ) return false;

			var i = 0, l = _tweens.length, factor = _threshold / _tweens.length;
			time = time !== undefined ? time : Date.now();

			while ( i < l ) {

				if ( Math.random() < factor ) {

					if ( _tweens[ i ].update( time ) ) {

						i ++;

					} else {

						_tweens.splice( i, 1 );

						l --;

					}
				}

			}

			return true;

		}

	};

} )();

TWEEN.Tween = function ( object ) {

	var _object = object;
	var _valuesStart = {};
	var _valuesEnd = {};
	var _duration = 1000;
	var _delayTime = 0;
	var _startTime = null;
	var _easingFunction = TWEEN.Easing.Linear.None;
	var _interpolationFunction = TWEEN.Interpolation.Linear;
	var _chainedTweens = [];
	var _onStartCallback = null;
	var _onStartCallbackFired = false;
	var _onUpdateCallback = null;
	var _onCompleteCallback = null;

	this.to = function ( properties, duration ) {

		if ( duration !== undefined ) {

			_duration = duration;

		}

		_valuesEnd = properties;

		return this;

	};

	this.start = function ( time ) {

		TWEEN.add( this );

		_onStartCallbackFired = false;

		_startTime = time !== undefined ? time : Date.now();
		_startTime += _delayTime;

		for ( var property in _valuesEnd ) {

			// This prevents the engine from interpolating null values
			if ( _object[ property ] === null ) {

				continue;

			}

			// check if an Array was provided as property value
			if ( _valuesEnd[ property ] instanceof Array ) {

				if ( _valuesEnd[ property ].length === 0 ) {

					continue;

				}

				// create a local copy of the Array with the start value at the front
				_valuesEnd[ property ] = [ _object[ property ] ].concat( _valuesEnd[ property ] );

			}

			_valuesStart[ property ] = _object[ property ];

		}

		return this;

	};

	this.stop = function () {

		TWEEN.remove( this );
		return this;

	};

	this.delay = function ( amount ) {

		_delayTime = amount;
		return this;

	};

	this.easing = function ( easing ) {

		_easingFunction = easing;
		return this;

	};

	this.interpolation = function ( interpolation ) {

		_interpolationFunction = interpolation;
		return this;

	};

	this.chain = function () {

		_chainedTweens = arguments;
		return this;

	};

	this.onStart = function ( callback ) {

		_onStartCallback = callback;
		return this;

	};

	this.onUpdate = function ( callback ) {

		_onUpdateCallback = callback;
		return this;

	};

	this.onComplete = function ( callback ) {

		_onCompleteCallback = callback;
		return this;

	};

	this.update = function ( time ) {

		if ( time < _startTime ) {

			return true;

		}

		if ( _onStartCallbackFired === false ) {

			if ( _onStartCallback !== null ) {

				_onStartCallback.call( _object );

			}

			_onStartCallbackFired = true;

		}
		//console.log(" - time: "+time+"  startTime: "+_startTime+" duration: "+_duration);
		var elapsed = ( time - _startTime ) / _duration;
		elapsed = elapsed > 1 ? 1 : elapsed;

		var value = _easingFunction( elapsed );

		for ( var property in _valuesStart ) {

			var start = _valuesStart[ property ];
			var end = _valuesEnd[ property ];

			if ( end instanceof Array ) {

				_object[ property ] = _interpolationFunction( end, value );

			} else {

				_object[ property ] = start + ( end - start ) * value;

			}

		}

		if ( _onUpdateCallback !== null ) {

			_onUpdateCallback.call( _object, value );

		}

		if ( elapsed == 1 ) {

			if ( _onCompleteCallback !== null ) {

				_onCompleteCallback.call( _object );

			}

			for ( var i = 0, l = _chainedTweens.length; i < l; i ++ ) {

				_chainedTweens[ i ].start( time );

			}

			return false;

		}

		return true;

	};

};

TWEEN.Easing = {

	Linear: {

		None: function ( k ) {

			return k;

		}

	},

	Quadratic: {

		In: function ( k ) {

			return k * k;

		},

		Out: function ( k ) {

			return k * ( 2 - k );

		},

		InOut: function ( k ) {

			if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
			return - 0.5 * ( --k * ( k - 2 ) - 1 );

		}

	},

	Cubic: {

		In: function ( k ) {

			return k * k * k;

		},

		Out: function ( k ) {

			return --k * k * k + 1;

		},

		InOut: function ( k ) {

			if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
			return 0.5 * ( ( k -= 2 ) * k * k + 2 );

		}

	},

	Quartic: {

		In: function ( k ) {

			return k * k * k * k;

		},

		Out: function ( k ) {

			return 1 - ( --k * k * k * k );

		},

		InOut: function ( k ) {

			if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
			return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );

		}

	},

	Quintic: {

		In: function ( k ) {

			return k * k * k * k * k;

		},

		Out: function ( k ) {

			return --k * k * k * k * k + 1;

		},

		InOut: function ( k ) {

			if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
			return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );

		}

	},

	Sinusoidal: {

		In: function ( k ) {

			return 1 - Math.cos( k * Math.PI / 2 );

		},

		Out: function ( k ) {

			return Math.sin( k * Math.PI / 2 );

		},

		InOut: function ( k ) {

			return 0.5 * ( 1 - Math.cos( Math.PI * k ) );

		}

	},

	Exponential: {

		In: function ( k ) {

			return k === 0 ? 0 : Math.pow( 1024, k - 1 );

		},

		Out: function ( k ) {

			return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );

		},

		InOut: function ( k ) {

			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
			return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );

		}

	},

	Circular: {

		In: function ( k ) {

			return 1 - Math.sqrt( 1 - k * k );

		},

		Out: function ( k ) {

			return Math.sqrt( 1 - ( --k * k ) );

		},

		InOut: function ( k ) {

			if ( ( k *= 2 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
			return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);

		}

	},

	Elastic: {

		In: function ( k ) {

			var s, a = 0.1, p = 0.4;
			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( !a || a < 1 ) { a = 1; s = p / 4; }
			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
			return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );

		},

		Out: function ( k ) {

			var s, a = 0.1, p = 0.4;
			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( !a || a < 1 ) { a = 1; s = p / 4; }
			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
			return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

		},

		InOut: function ( k ) {

			var s, a = 0.1, p = 0.4;
			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( !a || a < 1 ) { a = 1; s = p / 4; }
			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
			if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
			return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;

		}

	},

	Back: {

		In: function ( k ) {

			var s = 1.70158;
			return k * k * ( ( s + 1 ) * k - s );

		},

		Out: function ( k ) {

			var s = 1.70158;
			return --k * k * ( ( s + 1 ) * k + s ) + 1;

		},

		InOut: function ( k ) {

			var s = 1.70158 * 1.525;
			if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
			return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );

		}

	},

	Bounce: {

		In: function ( k ) {

			return 1 - TWEEN.Easing.Bounce.Out( 1 - k );

		},

		Out: function ( k ) {

			if ( k < ( 1 / 2.75 ) ) {

				return 7.5625 * k * k;

			} else if ( k < ( 2 / 2.75 ) ) {

				return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;

			} else if ( k < ( 2.5 / 2.75 ) ) {

				return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;

			} else {

				return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;

			}

		},

		InOut: function ( k ) {

			if ( k < 0.5 ) return TWEEN.Easing.Bounce.In( k * 2 ) * 0.5;
			return TWEEN.Easing.Bounce.Out( k * 2 - 1 ) * 0.5 + 0.5;

		}

	}

};

TWEEN.Interpolation = {

	Linear: function ( v, k ) {

		var m = v.length - 1, f = m * k, i = Math.floor( f ), fn = TWEEN.Interpolation.Utils.Linear;

		if ( k < 0 ) return fn( v[ 0 ], v[ 1 ], f );
		if ( k > 1 ) return fn( v[ m ], v[ m - 1 ], m - f );

		return fn( v[ i ], v[ i + 1 > m ? m : i + 1 ], f - i );

	},

	Bezier: function ( v, k ) {

		var b = 0, n = v.length - 1, pw = Math.pow, bn = TWEEN.Interpolation.Utils.Bernstein, i;

		for ( i = 0; i <= n; i++ ) {
			b += pw( 1 - k, n - i ) * pw( k, i ) * v[ i ] * bn( n, i );
		}

		return b;

	},

	CatmullRom: function ( v, k ) {

		var m = v.length - 1, f = m * k, i = Math.floor( f ), fn = TWEEN.Interpolation.Utils.CatmullRom;

		if ( v[ 0 ] === v[ m ] ) {

			if ( k < 0 ) i = Math.floor( f = m * ( 1 + k ) );

			return fn( v[ ( i - 1 + m ) % m ], v[ i ], v[ ( i + 1 ) % m ], v[ ( i + 2 ) % m ], f - i );

		} else {

			if ( k < 0 ) return v[ 0 ] - ( fn( v[ 0 ], v[ 0 ], v[ 1 ], v[ 1 ], -f ) - v[ 0 ] );
			if ( k > 1 ) return v[ m ] - ( fn( v[ m ], v[ m ], v[ m - 1 ], v[ m - 1 ], f - m ) - v[ m ] );

			return fn( v[ i ? i - 1 : 0 ], v[ i ], v[ m < i + 1 ? m : i + 1 ], v[ m < i + 2 ? m : i + 2 ], f - i );

		}

	},

	Utils: {

		Linear: function ( p0, p1, t ) {

			return ( p1 - p0 ) * t + p0;

		},

		Bernstein: function ( n , i ) {

			var fc = TWEEN.Interpolation.Utils.Factorial;
			return fc( n ) / fc( i ) / fc( n - i );

		},

		Factorial: ( function () {

			var a = [ 1 ];

			return function ( n ) {

				var s = 1, i;
				if ( a[ n ] ) return a[ n ];
				for ( i = n; i > 1; i-- ) s *= i;
				return a[ n ] = s;

			};

		} )(),

		CatmullRom: function ( p0, p1, p2, p3, t ) {

			var v0 = ( p2 - p0 ) * 0.5, v1 = ( p3 - p1 ) * 0.5, t2 = t * t, t3 = t * t2;
			return ( 2 * p1 - 2 * p2 + v0 + v1 ) * t3 + ( - 3 * p1 + 3 * p2 - 2 * v0 - v1 ) * t2 + v0 * t + p1;

		}

	}

};

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

/** @namespace */
var THREEx	= THREEx 		|| {};

// TODO http://29a.ch/2011/9/11/uploading-from-html5-canvas-to-imgur-data-uri
// able to upload your screenshot without running servers

// forced closure
(function(){

	/**
	 * Take a screenshot of a renderer
	 * - require WebGLRenderer to have "preserveDrawingBuffer: true" to be set
	 * - TODO is it possible to check if this variable is set ? if so check it
	 *   and make advice in the console.log
	 *   - maybe with direct access to the gl context...
	 * 
	 * @param {Object} renderer to use
	 * @param {String} mimetype of the output image. default to "image/png"
	 * @param {String} dataUrl of the image
	*/
	var toDataURL	= function(renderer, mimetype)
	{
		mimetype	= mimetype	|| "image/jpeg";
		var dataUrl	= renderer.domElement.toDataURL(mimetype);
		return dataUrl;
	}

	/**
	 * resize an image to another resolution while preserving aspect
	 *
	 * @param {String} srcUrl the url of the image to resize
	 * @param {Number} dstWidth the destination width of the image
	 * @param {Number} dstHeight the destination height of the image
	 * @param {Number} callback the callback to notify once completed with callback(newImageUrl)
	*/
	var aspectResize	= function(srcUrl, dstW, dstH, mimetype, callback){
		mimetype	= mimetype || "image/jpeg";
		// to compute the width/height while keeping aspect
		var cpuScaleAspect	= function(maxW, maxH, curW, curH){
			var ratio	= curH / curW;
			if( curW >= maxW && ratio <= 1 ){ 
				curW	= maxW;
				curH	= maxW * ratio;
			}else if(curH >= maxH){
				curH	= maxH;
				curW	= maxH / ratio;
			}
			return { width: curW, height: curH };
		}
		// callback once the image is loaded
		var onLoad	= function(){
			// init the canvas
			var canvas	= document.createElement('canvas');
			canvas.width	= dstW;	canvas.height	= dstH;
			var ctx		= canvas.getContext('2d');

			// TODO is this needed
			ctx.fillStyle	= "black";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			// scale the image while preserving the aspect
			var scaled	= cpuScaleAspect(canvas.width, canvas.height, image.width, image.height);

			// actually draw the image on canvas
			var offsetX	= (canvas.width  - scaled.width )/2;
			var offsetY	= (canvas.height - scaled.height)/2;
			ctx.drawImage(image, offsetX, offsetY, scaled.width, scaled.height);

			// dump the canvas to an URL		

			var newDataUrl	= canvas.toDataURL(mimetype);
			// notify the url to the caller
			callback && callback(newDataUrl)
		}.bind(this);

		// Create new Image object
		var image 	= new Image();
		image.onload	= onLoad;
		image.src	= srcUrl;
	}
	

	// Super cooked function: THREEx.Screenshot.bindKey(renderer)
	// and you are done to get screenshot on your demo

	/**
	 * Bind a key to renderer screenshot
	*/
	var bindKey	= function(renderer, opts){
		// handle parameters
		opts		= opts		|| {};
		var charCode	= opts.charCode	|| 'p'.charCodeAt(0);
		var width	= opts.width;
		var height	= opts.height;
		var callback	= opts.callback	|| function(url){
			window.open(url, "name-"+Math.random());
		};

		// callback to handle keypress
		var onKeyPress	= function(event){
			// return now if the KeyPress isnt for the proper charCode
			if( event.which !== charCode )	return;
			// get the renderer output
			var dataUrl	= this.toDataURL(renderer);

			if( width === undefined && height === undefined ){
				callback( dataUrl )
			}else{
				// resize it and notify the callback
				// * resize == async so if callback is a window open, it triggers the pop blocker
				this.aspectResize(dataUrl, width, height, callback);				
			}
		}.bind(this);

		// listen to keypress
		// NOTE: for firefox it seems mandatory to listen to document directly
		document.addEventListener('keypress', onKeyPress, false);

		return {
			unbind	: function(){
				document.removeEventListener('keypress', onKeyPress, false);
			}
		};
	};



	// export it	
	THREEx.Screenshot	= {
		toDataURL	: toDataURL,
		bindKey		: bindKey,
		aspectResize  : aspectResize
	};
})();


// This THREEx helper makes it easy to handle the fullscreen API
// * it hides the prefix for each browser
// * it hides the little discrepencies of the various vendor API
// * at the time of this writing (nov 2011) it is available in 
//   [firefox nightly](http://blog.pearce.org.nz/2011/11/firefoxs-html-full-screen-api-enabled.html),
//   [webkit nightly](http://peter.sh/2011/01/javascript-full-screen-api-navigation-timing-and-repeating-css-gradients/) and
//   [chrome stable](http://updates.html5rocks.com/2011/10/Let-Your-Content-Do-the-Talking-Fullscreen-API).

// 
// # Code

//

/** @namespace */
var THREEx		= THREEx 		|| {};
THREEx.FullScreen	= THREEx.FullScreen	|| {};

/**
 * test if it is possible to have fullscreen
 * 
 * @returns {Boolean} true if fullscreen API is available, false otherwise
*/
THREEx.FullScreen.available	= function()
{
	return this._hasWebkitFullScreen || this._hasMozFullScreen;
}

/**
 * test if fullscreen is currently activated
 * 
 * @returns {Boolean} true if fullscreen is currently activated, false otherwise
*/
THREEx.FullScreen.activated	= function()
{
	if( this._hasWebkitFullScreen ){
		return document.webkitIsFullScreen;
	}else if( this._hasMozFullScreen ){
		return document.mozFullScreen;
	}else{
		console.assert(false);
	}
}

/**
 * Request fullscreen on a given element
 * @param {DomElement} element to make fullscreen. optional. default to document.body
*/
THREEx.FullScreen.request	= function(element)
{
	element	= element	|| document.body;
	if( this._hasWebkitFullScreen ){
		element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	}else if( this._hasMozFullScreen ){
		element.mozRequestFullScreen();
	}else{
		console.assert(false);
	}
}

/**
 * Cancel fullscreen
*/
THREEx.FullScreen.cancel	= function()
{
	if( this._hasWebkitFullScreen ){
		document.webkitCancelFullScreen();
	}else if( this._hasMozFullScreen ){
		document.mozCancelFullScreen();
	}else{
		console.assert(false);
	}
}


// internal functions to know which fullscreen API implementation is available
THREEx.FullScreen._hasWebkitFullScreen	= 'webkitCancelFullScreen' in document	? true : false;	
THREEx.FullScreen._hasMozFullScreen	= 'mozCancelFullScreen' in document	? true : false;	

/**
 * Bind a key to renderer screenshot
*/
THREEx.FullScreen.bindKey	= function(opts){
	opts		= opts		|| {};
	var charCode	= opts.charCode	|| 'f'.charCodeAt(0);
	var dblclick	= opts.dblclick !== undefined ? opts.dblclick : false;
	var element	= opts.element

	var toggle	= function(){
		if( THREEx.FullScreen.activated() ){
			THREEx.FullScreen.cancel();
		}else{
			THREEx.FullScreen.request(element);
		}		
	}

	// callback to handle keypress
	var onKeyPress	= function(event){
		// return now if the KeyPress isnt for the proper charCode
		if( event.which !== charCode )	return;
		// toggle fullscreen
		toggle();
	}.bind(this);

	// listen to keypress
	// NOTE: for firefox it seems mandatory to listen to document directly
	document.addEventListener('keypress', onKeyPress, false);
	// listen to dblclick
	dblclick && document.addEventListener('dblclick', toggle, false);

	return {
		unbind	: function(){
			document.removeEventListener('keypress', onKeyPress, false);
			dblclick && document.removeEventListener('dblclick', toggle, false);
		}
	};
}