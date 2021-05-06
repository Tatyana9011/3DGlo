(()=>{"use strict";const e=function(){var e,t,n,r=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),a=document.querySelector("#timer-seconds"),c=function(e){return e<10?"0"+e:e},l=(e=(new Date("21 july 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60),{timeRemaining:e,hours:Math.floor(e/60/60)%24,minutes:n,seconds:t});return l.timeRemaining>0?(r.textContent=c(l.hours),o.textContent=c(l.minutes),a.textContent=c(l.seconds)):(r.textContent="00",o.textContent="00",a.textContent="00"),l};function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n=void 0;const r=function(e){var t=document.getElementById(e),n=document.createElement("div");n.style.cssText="font-size: 2rem;   color: blue;",t.addEventListener("submit",(function(e){e.preventDefault(),t.append(n);var r=t.querySelector('button[type="submit"]');r.insertAdjacentHTML("afterbegin","\n      <img alt='preloder' src=".concat("./../images/preloder/preloader.svg",">"));var o,a=new FormData(t),c={};a.forEach((function(e,t){c[t]=e})),(o=c,fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).then((function(e){if(200!==e.status)throw new Error("status network not 200");r.textContent="Оставить заявку!",n.textContent="Спасибо! Мы скоро с вами свяжемся!",t.reset()})).catch((function(e){r.textContent="Оставить заявку!",n.textContent="Что то пошло не так...",console.error(e)}))}))};var o,a,c,l,i,u,s,m,d,v,f,p,y,h,g;e().timeRemaining>=0?o=setInterval(e,1e3):clearInterval(o),g=document.querySelector("menu"),document.addEventListener("click",(function(e){var t=e.target;t.classList.contains("close-btn")||t.closest(".menu")?g.classList.toggle("active-menu"):t.closest("menu")&&!t.closest("li")||g.classList.remove("active-menu")})),function(){var e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-content");n.style.top="",n.style.left="";var r,o=0,a=0,c=!1,l=function(t){cancelAnimationFrame(t),e.style.display="none",o=0,a=0,n.style.top="",n.style.left=""},i=function t(){var c=(document.body.clientWidth-500)/2,i=document.body.clientHeight/2;o<c&&a<i?(o+=10,a+=1,n.style.top=a+"px",n.style.left=o+"px",r=requestAnimationFrame(t)):(l(r),e.style.display="inline-block")};t.forEach((function(t){t.addEventListener("click",(function(){!c&&document.documentElement.clientWidth>768?(c=!0,r=requestAnimationFrame(i),e.style.display="inline-block"):e.style.display="inline-block"}))})),e.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?(c=!1,l(r)):(t=t.closest(".popup-content"))||(c=!1,l(r))}))}(),function(){var e,n=function(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,c=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw c}}}}(document.querySelectorAll("a[href]"));try{var r=function(){var t=e.value;t.addEventListener("click",(function(e){e.preventDefault();var n=t.getAttribute("href");if("#"!==n){var r=document.querySelector(n);null!==r&&r.scrollIntoView({behavior:"smooth",block:"start"})}}))};for(n.s();!(e=n.n()).done;)r()}catch(e){n.e(e)}finally{n.f()}}(),p=document.querySelector(".service-header"),y=p.querySelectorAll(".service-header-tab"),h=document.querySelectorAll(".service-tab"),p.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&y.forEach((function(e,n){e===t&&function(e){for(var t=0;t<h.length;t++)e===t?(y[t].classList.add("active"),h[t].classList.remove("d-none")):(y[t].classList.remove("active"),h[t].classList.add("d-none"))}(n)}))})),function(){var e,t=0,n=document.querySelector(".portfolio-content"),r=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");!function(){for(var e=[],t=0;t<r.length;t++)e[t]=document.createElement("li"),e[t].classList.add("dot"),o.append(e[t])}();var a=document.querySelectorAll(".dot"),c=function(e,t,n){e[t].classList.remove(n)},l=function(e,t,n){e[t].classList.add(n)},i=function(){c(r,t,"portfolio-item-active"),c(a,t,"dot-active"),++t>=r.length&&(t=0),l(r,t,"portfolio-item-active"),l(a,t,"dot-active")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(i,t)};n.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches(".portfolio-btn, .dot")&&(c(r,t,"portfolio-item-active"),c(a,t,"dot-active"),n.matches("#arrow-right")?t++:n.matches("#arrow-left")?t--:n.matches(".dot")&&a.forEach((function(e,r){e===n&&(t=r)})),t>=r.length&&(t=0),t<0&&(t=r.length-1),l(r,t,"portfolio-item-active"),l(a,t,"dot-active"))})),n.addEventListener("mouseover",(function(t){t.target.matches(".portfolio-btn, .dot")&&clearInterval(e)})),n.addEventListener("mouseout",(function(e){e.target.matches(".portfolio-btn, .dot")&&u(1e3)})),u(1e3)}(),document.querySelectorAll(".command__photo").forEach((function(e){var t=function(){var t=e.src,n=e.dataset.img;e.src=n,e.dataset.img=t};e.addEventListener("mouseover",t),e.addEventListener("mouseout",t)})),a=document.querySelectorAll(".calc-item"),c=document.querySelector(".mess"),l=document.querySelectorAll("#form1-name, #form2-name, #form3-name"),i=document.querySelectorAll('input[type="email"]'),u=document.querySelectorAll('input[type="tel"]'),s=document.querySelectorAll("input"),m=function(e,t){e.value=t.target.value.replace(/[а-яё,\s]/,"").replace(/[_]{2,}/,"_").replace(/[.]{2,}/,".").replace(/[@]{2,}/,"@").replace(/[-]{2,}/,"-")},d=function(e,t){e.value=t.target.value.replace(/[^0-9+]/,""),e.value=t.target.value.replace(/[+]{2,}/,"+")},v=function(e,t){e.value=t.target.value.replace(/[^а-яё ]/gi,"")},f=function(e,t){t.target.matches(".calc-type")||(e.value=t.target.value.replace(/\D/g,""))},a.forEach((function(e){return e.addEventListener("input",f.bind(n,e))})),c.addEventListener("input",function(e,t){e.value=t.target.value.replace(/[^!а-яё 0-9.,-?]/gi,"")}.bind(n,c)),l.forEach((function(e){return e.addEventListener("input",v.bind(n,e))})),u.forEach((function(e){return e.addEventListener("input",d.bind(n,e))})),i.forEach((function(e){return e.addEventListener("input",m.bind(n,e))})),s.forEach((function(e){e.addEventListener("blur",(function(t){var n=t.target;n.matches(".mess")&&function(e,t){e.value=t.value.trim().replace(/\s{2,}/," ").replace(/[-]{2,}/,"-").replace(/^[ |-]/,"")}(e,n),n.matches("#form1-name, #form2-name, #form3-name")&&function(e,t){e.value=t.value.trim().replace(/\s{2,}/," ").replace(/[-]{2,}/,"-").replace(/^[ |-]/,"").replace(/^[а-я]/,(function(e){return e.toUpperCase()}))}(e,n),n.matches('input[type="email"]')&&(n.value.match(/^\w+([-._!~*']?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)?e.value=n.value:(e.value=n.value.replace(n.value,""),alert("Введите валидное значение"))),n.matches('input[type="tel"]')&&(n.value.match(/\+?[78]([- ()]*\d){10}/)?e.value=n.value:(e.value=n.value.replace(n.value,""),alert("Введите валидное значение")))}))})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),o=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),c=document.getElementById("total"),l=function(e){var t,n,r=0;n?(n=!1,cancelAnimationFrame(t)):(t=requestAnimationFrame((function n(){t=requestAnimationFrame(n),Math.floor(e)>r?(r+=5,c.textContent="",c.textContent+="".concat(r)):cancelAnimationFrame(t)})),n=!0)},i=function(){var t=1,c=1,i=n.options[n.selectedIndex].value,u=+r.value;o.value>1&&(t+=(o.value-1)/10),a.value&&a.value<5?c*=2:a.value&&a.value<10&&(c*=1.5),i&&u&&l(e*i*u*t*c)};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&i()}))}(100),r("form1"),r("form2"),r("form3")})();