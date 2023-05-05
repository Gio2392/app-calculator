(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();function d(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function m(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(r){return typeof r}:m=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},m(e)}function f(e){d(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||m(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function b(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function L(e){d(1,arguments);var t=f(e);return t.setHours(0,0,0,0),t}var E=864e5;function M(e,t){d(2,arguments);var r=L(e),n=L(t),s=r.getTime()-b(r),a=n.getTime()-b(n);return Math.round((s-a)/E)}function p(e,t){d(2,arguments);var r=f(e),n=f(t),s=r.getFullYear()-n.getFullYear(),a=r.getMonth()-n.getMonth();return s*12+a}function I(e,t){d(2,arguments);var r=f(e),n=f(t);return r.getFullYear()-n.getFullYear()}const i=new Date,c=new Date().getDate(),h=new Date().getMonth(),u=new Date().getFullYear(),_=(e,t,r)=>{const n=new Date(e,t-1,r);let s="",a="",l="";return r<c?s=c%r:s=M(new Date(u,h,c),new Date(u,h-1,r)),h<t?(l=I(i,n)-1,r>c?a=p(i,new Date(u-1,t,c)):a=p(i,new Date(u-1,t,c))):(a=p(i,new Date(u,t,c)),l=I(i,n)),{differenceOfDays:s,differenceOfMonths:a,differenceOfYears:l}},D=document,O=D.querySelector(".result__value--days"),Y=D.querySelector(".result__value--months"),q=D.querySelector(".result__value--years"),B=e=>{console.log(e);const{differenceOfDays:t,differenceOfMonths:r,differenceOfYears:n}=e;O.textContent=t,Y.textContent=r,q.textContent=n},o=document,C=new Date().getFullYear(),F=()=>{const e=o.querySelector(".form-group"),t=o.querySelectorAll(".form-group input");let r={};const n={day:["This field is required","Must be a valid day","Must be a valid date"],month:["This field is required","Must be a valid month"],year:["This field is required","Must be in the past"]};v(t,n),v(t,n,1),v(t,n,2),o.addEventListener("submit",s=>{if(s.preventDefault(),T(t),A(),N(),V(),e.querySelectorAll("span.is-active").length>0)console.log("hay errores");else{t.forEach(g=>{const{value:S,name:w}=g;r={...r,[w]:parseInt(S)}});const{year:a,month:l,day:y}=r;if($(a,l,y)){console.log("la fecha es correcta");const g=_(a,l,y);B(g)}else P(t)}})},v=(e,t,r=0)=>{e.forEach(n=>{const s=o.createElement("SPAN");s.id=r===0?n.name:`${n.name}-${r}`,s.textContent=t[n.name][r],s.classList.add("error","none"),s.textContent!==""&&n.insertAdjacentElement("afterend",s)})},T=e=>{e.forEach(t=>{const r=t.value;r===""||r<=0?(o.getElementById(`${t.name}`).classList.add("is-active"),t.classList.add("input-error"),o.querySelector(`label[for="${t.name}Input"]`).classList.add("form__label--error")):(o.getElementById(`${t.name}`).classList.remove("is-active"),t.classList.remove("input-error"),o.querySelector(`label[for="${t.name}Input"]`).classList.remove("form__label--error"),o.getElementById("day-2").classList.remove("is-active"))})},A=()=>{const e=o.getElementById("dayInput");e.value>31?(o.getElementById("day-1").classList.add("is-active"),o.querySelector('label[for="dayInput"]').classList.add("form__label--error"),e.classList.add("input-error")):o.getElementById("day-1").classList.remove("is-active")},N=()=>{const e=o.getElementById("monthInput");e.value>12?(o.getElementById("month-1").classList.add("is-active"),o.querySelector('label[for="monthInput"]').classList.add("form__label--error"),e.classList.add("input-error")):o.getElementById("month-1").classList.remove("is-active")},V=()=>{const e=o.getElementById("yearInput");e.value>C?(o.getElementById("year-1").classList.add("is-active"),e.classList.add("input-error"),o.querySelector('label[for="yearInput"]').classList.add("form__label--error")):o.getElementById("year-1").classList.remove("is-active")},$=(e,t,r)=>{const n=new Date(e,t-1,r);return n.getFullYear()===e&&n.getMonth()===t-1&&n.getDate()===r},P=e=>{e.forEach(t=>{o.getElementById("day-2").classList.add("is-active"),t.classList.add("input-error"),o.querySelector(`label[for="${t.name}Input"]`).classList.add("form__label--error")})};document.addEventListener("DOMContentLoaded",()=>{F()});
