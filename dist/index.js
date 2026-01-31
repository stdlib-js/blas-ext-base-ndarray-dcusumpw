"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=q(function(l,v){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),a=require('@stdlib/ndarray-base-stride/dist'),t=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),m=require('@stdlib/blas-ext-base-dcusumpw/dist').ndarray;function o(e){var r=e[0],i=e[1],s=c(e[2]);return m(d(r,0),s,u(r),a(r,0),t(r),u(i),a(i,0),t(i)),i}v.exports=o
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
