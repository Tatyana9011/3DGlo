(()=>{"use strict";const e=function(){var e,t,n,o=document.querySelector("#timer-hours"),r=document.querySelector("#timer-minutes"),a=document.querySelector("#timer-seconds"),c=function(e){return e<10?"0"+e:e},i=(e=(new Date("21 july 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60),{timeRemaining:e,hours:Math.floor(e/60/60)%24,minutes:n,seconds:t});return i.timeRemaining>0?(o.textContent=c(i.hours),r.textContent=c(i.minutes),a.textContent=c(i.seconds)):(o.textContent="00",r.textContent="00",a.textContent="00"),i};function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var n=void 0;const o=function(e){var t=document.getElementById(e),n=document.createElement("div");n.style.cssText="font-size: 2rem;   color: blue;",t.addEventListener("submit",(function(e){e.preventDefault(),t.append(n);var o=t.querySelector('button[type="submit"]');o.insertAdjacentHTML("afterbegin","\n      <img alt='preloder' src=".concat("./../images/preloder/preloader.svg",">"));var r,a=new FormData(t),c={};a.forEach((function(e,t){c[t]=e})),(r=c,fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).then((function(e){if(200!==e.status)throw new Error("status network not 200");o.textContent="Оставить заявку!",n.textContent="Спасибо! Мы скоро с вами свяжемся!"})).catch((function(e){o.textContent="Оставить заявку!",n.textContent="Что то пошло не так...",console.error(e)})).then((function(){setTimeout((function(){n.textContent="",n.remove(),t.reset()}),5e3)}))}))};var r,a,c,i,l,u,s,d,m,f,v,p,y,h,g,b;e().timeRemaining>=0?r=setInterval(e,1e3):clearInterval(r),b=document.querySelector("menu"),document.addEventListener("click",(function(e){var t=e.target;t.classList.contains("close-btn")||t.closest(".menu")?b.classList.toggle("active-menu"):t.closest("menu")&&!t.closest("li")||b.classList.remove("active-menu")})),function(){var e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-content");n.style.top="",n.style.left="";var o,r=0,a=0,c=!1,i=function(t){cancelAnimationFrame(t),e.style.display="none",r=0,a=0,n.style.top="",n.style.left=""},l=function t(){r<38&&a<10?(r+=3,a+=1,n.style.top=a+"%",n.style.left=r+"%",o=requestAnimationFrame(t)):(i(o),e.style.display="inline-block")};t.forEach((function(t){t.addEventListener("click",(function(){!c&&document.documentElement.clientWidth>768?(c=!0,o=requestAnimationFrame(l),e.style.display="inline-block"):e.style.display="inline-block"}))})),e.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?(c=!1,i(o)):(t=t.closest(".popup-content"))||(c=!1,i(o))}))}(),function(){var e,n=function(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,l=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return i=e.done,e},e:function(e){l=!0,c=e},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw c}}}}(document.querySelectorAll("a[href]"));try{var o=function(){var t=e.value;t.addEventListener("click",(function(e){e.preventDefault();var n=t.getAttribute("href");if("#"!==n){var o=document.querySelector(n);null!==o&&o.scrollIntoView({behavior:"smooth",block:"start"})}}))};for(n.s();!(e=n.n()).done;)o()}catch(e){n.e(e)}finally{n.f()}}(),y=document.querySelector(".service-header"),h=y.querySelectorAll(".service-header-tab"),g=document.querySelectorAll(".service-tab"),y.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&h.forEach((function(e,n){e===t&&function(e){for(var t=0;t<g.length;t++)e===t?(h[t].classList.add("active"),g[t].classList.remove("d-none")):(h[t].classList.remove("active"),g[t].classList.add("d-none"))}(n)}))})),function(){var e,t=0,n=document.querySelector(".portfolio-content"),o=document.querySelectorAll(".portfolio-item"),r=document.querySelector(".portfolio-dots");!function(){for(var e=[],t=0;t<o.length;t++)e[t]=document.createElement("li"),e[t].classList.add("dot"),r.append(e[t])}();var a=document.querySelectorAll(".dot");a[0].classList.add("dot-active");var c=function(e,t,n){e[t].classList.remove(n)},i=function(e,t,n){e[t].classList.add(n)},l=function(){c(o,t,"portfolio-item-active"),c(a,t,"dot-active"),++t>=o.length&&(t=0),i(o,t,"portfolio-item-active"),i(a,t,"dot-active")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(l,t)};n.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches(".portfolio-btn, .dot")&&(c(o,t,"portfolio-item-active"),c(a,t,"dot-active"),n.matches("#arrow-right")?t++:n.matches("#arrow-left")?t--:n.matches(".dot")&&a.forEach((function(e,o){e===n&&(t=o)})),t>=o.length&&(t=0),t<0&&(t=o.length-1),i(o,t,"portfolio-item-active"),i(a,t,"dot-active"))})),n.addEventListener("mouseover",(function(t){t.target.matches(".portfolio-btn, .dot")&&clearInterval(e)})),n.addEventListener("mouseout",(function(e){e.target.matches(".portfolio-btn, .dot")&&u(1e3)})),u(1e3)}(),document.querySelectorAll(".command__photo").forEach((function(e){var t=function(){var t=e.src,n=e.dataset.img;e.src=n,e.dataset.img=t};e.addEventListener("mouseover",t),e.addEventListener("mouseout",t)})),a=document.querySelectorAll(".calc-item"),c=document.querySelector(".mess"),i=document.querySelectorAll("#form1-name, #form2-name, #form3-name"),l=document.querySelectorAll('input[type="email"]'),u=document.querySelectorAll('input[type="tel"]'),s=document.querySelectorAll("input"),d=function(e,t){e.setAttribute("required","true"),e.value=t.target.value.replace(/[а-яё,\s]/,"").replace(/[_]{2,}/,"_").replace(/[.]{2,}/,".").replace(/[@]{2,}/,"@").replace(/[-]{2,}/,"-")},m=function(e,t){e.value=t.target.value.replace(/[^0-9+]/,""),e.value=t.target.value.replace(/[+]{2,}/,"+")},f=function(e,t){e.value=t.target.value.replace(/[^а-яё ]/gi,"")},v=function(e,t){t.target.matches(".calc-type")||(e.value=t.target.value.replace(/\D/g,""))},p=function(e,t,n){n?(t.value=e.value,t.style.cssText="border: none;"):t.style.cssText="border: 2px solid red !important;"},a.forEach((function(e){return e.addEventListener("input",v.bind(n,e))})),c.addEventListener("input",function(e,t){e.value=t.target.value.replace(/[^!а-яё 0-9.,-?]/gi,"")}.bind(n,c)),i.forEach((function(e){return e.addEventListener("input",f.bind(n,e))})),u.forEach((function(e){return e.addEventListener("input",m.bind(n,e))})),l.forEach((function(e){return e.addEventListener("input",d.bind(n,e))})),s.forEach((function(e){e.addEventListener("blur",(function(t){var n=t.target;n.matches(".mess")&&(function(e,t){e.value=t.value.trim().replace(/\s{2,}/," ").replace(/[-]{2,}/,"-").replace(/^[ |-]/,"")}(e,n),p(n,e,""!==n.value)),n.matches("#form1-name, #form2-name, #form3-name")&&(function(e,t){var n=t.value.trim().replace(/\s{2,}/," ").replace(/^[ |-]/,"").replace(/[-]{2,}/,"-").split(" ");e.value=function(e){for(var t=[],n=0;n<e.length;n++)""!==e[n]&&(t[n]=e[n][0].toUpperCase()+e[n].slice(1).toLowerCase());return t}(n).join(" ")}(e,n),p(n,e,""!==n.value)),n.matches('input[type="email"]')&&p(n,e,n.value.match(/^\w+([-._!~*']?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)),n.matches('input[type="tel"]')&&p(n,e,n.value.match(/\+?[78]([- ()]*\d){10}/))}))})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),c=document.getElementById("total"),i=function(e){var t,n,o=0;n?(n=!1,cancelAnimationFrame(t)):(t=requestAnimationFrame((function n(){t=requestAnimationFrame(n),Math.floor(e)>o?(o+=10,c.textContent="",c.textContent+="".concat(o)):(cancelAnimationFrame(t),c.textContent=Math.floor(e))})),n=!0)},l=function(){var t=1,c=1,l=n.options[n.selectedIndex].value,u=+o.value;r.value>1&&(t+=(r.value-1)/10),a.value&&a.value<5?c*=2:a.value&&a.value<10?c*=1.5:c*=1,l&&u&&i(e*l*u*t*c)};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&l()}))}(100),o("form1"),o("form2"),o("form3")})();