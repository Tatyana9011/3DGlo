(()=>{"use strict";const e=()=>{const e=document.querySelector("#timer-hours"),t=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds"),n=e=>e<10?"0"+e:e,c=(()=>{const e=(new Date("21 july 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),o=Math.floor(e/60%60);return{timeRemaining:e,hours:Math.floor(e/60/60)%24,minutes:o,seconds:t}})();return c.timeRemaining>0?(e.textContent=n(c.hours),t.textContent=n(c.minutes),o.textContent=n(c.seconds)):(e.textContent="00",t.textContent="00",o.textContent="00"),c},t=e=>{const t=document.getElementById(e),o=document.createElement("div");o.style.cssText="font-size: 2rem;   color: blue;",t.addEventListener("submit",(e=>{e.preventDefault(),t.append(o);const n=t.querySelector('button[type="submit"]');n.insertAdjacentHTML("afterbegin","\n      <img alt='preloder' src=./../images/preloder/preloader.svg>");const c=new FormData(t),l={};var r;c.forEach(((e,t)=>{l[t]=e})),(r=l,fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).then((e=>{if(200!==e.status)throw new Error("status network not 200");n.textContent="Оставить заявку!",o.textContent="Спасибо! Мы скоро с вами свяжемся!",t.reset()})).catch((e=>{n.textContent="Оставить заявку!",o.textContent="Что то пошло не так...",console.error(e)}))}))};let o;e().timeRemaining>=0?o=setInterval(e,1e3):clearInterval(o),(()=>{const e=document.querySelector("menu");document.addEventListener("click",(t=>{const o=t.target;o.classList.contains("close-btn")||o.closest(".menu")?e.classList.toggle("active-menu"):o.closest("menu")&&!o.closest("li")||e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-content");o.style.top="",o.style.left="";let n,c=0,l=0,r=!1;const a=t=>{cancelAnimationFrame(t),e.style.display="none",c=0,l=0,o.style.top="",o.style.left=""},s=()=>{const t=(document.body.clientWidth-500)/2,r=document.body.clientHeight/2;c<t&&l<r?(c+=10,l+=1,o.style.top=l+"px",o.style.left=c+"px",n=requestAnimationFrame(s)):(a(n),e.style.display="inline-block")};t.forEach((t=>{t.addEventListener("click",(()=>{!r&&document.documentElement.clientWidth>768?(r=!0,n=requestAnimationFrame(s),e.style.display="inline-block"):e.style.display="inline-block"}))})),e.addEventListener("click",(e=>{let t=e.target;t.classList.contains("popup-close")?(r=!1,a(n)):(t=t.closest(".popup-content"),t||(r=!1,a(n)))}))})(),(()=>{const e=document.querySelectorAll("a[href]");for(const t of e)t.addEventListener("click",(e=>{e.preventDefault();const o=t.getAttribute("href");if("#"!==o){const e=document.querySelector(o);null!==e&&e.scrollIntoView({behavior:"smooth",block:"start"})}}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let n=e.target;n=n.closest(".service-header-tab"),n&&t.forEach(((e,c)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(c)}))}))})(),(()=>{let e,t=0;const o=document.querySelector(".portfolio-content"),n=document.querySelectorAll(".portfolio-item"),c=document.querySelector(".portfolio-dots");(()=>{const e=[];for(let t=0;t<n.length;t++)e[t]=document.createElement("li"),e[t].classList.add("dot"),c.append(e[t])})();const l=document.querySelectorAll(".dot"),r=(e,t,o)=>{e[t].classList.remove(o)},a=(e,t,o)=>{e[t].classList.add(o)},s=()=>{r(n,t,"portfolio-item-active"),r(l,t,"dot-active"),t++,t>=n.length&&(t=0),a(n,t,"portfolio-item-active"),a(l,t,"dot-active")},i=(t=3e3)=>{e=setInterval(s,t)};o.addEventListener("click",(e=>{e.preventDefault();const o=e.target;o.matches(".portfolio-btn, .dot")&&(r(n,t,"portfolio-item-active"),r(l,t,"dot-active"),o.matches("#arrow-right")?t++:o.matches("#arrow-left")?t--:o.matches(".dot")&&l.forEach(((e,n)=>{e===o&&(t=n)})),t>=n.length&&(t=0),t<0&&(t=n.length-1),a(n,t,"portfolio-item-active"),a(l,t,"dot-active"))})),o.addEventListener("mouseover",(t=>{t.target.matches(".portfolio-btn, .dot")&&clearInterval(e)})),o.addEventListener("mouseout",(e=>{e.target.matches(".portfolio-btn, .dot")&&i(1e3)})),i(1e3)})(),document.querySelectorAll(".command__photo").forEach((e=>{const t=()=>{const t=e.src,o=e.dataset.img;e.src=o,e.dataset.img=t};e.addEventListener("mouseover",t),e.addEventListener("mouseout",t)})),(()=>{const e=document.querySelectorAll(".calc-item"),t=document.querySelector(".mess"),o=document.querySelectorAll("#form1-name, #form2-name, #form3-name"),n=document.querySelectorAll('input[type="email"]'),c=document.querySelectorAll('input[type="tel"]'),l=document.querySelectorAll("input"),r=(e,t)=>{e.value=t.target.value.replace(/[а-яё,\s]/,"").replace(/[_]{2,}/,"_").replace(/[.]{2,}/,".").replace(/[@]{2,}/,"@").replace(/[-]{2,}/,"-")},a=(e,t)=>{e.value=t.target.value.replace(/[^0-9+]/,""),e.value=t.target.value.replace(/[+]{2,}/,"+")},s=(e,t)=>{e.value=t.target.value.replace(/[^а-яё ]/gi,"")},i=(e,t)=>{t.target.matches(".calc-type")||(e.value=t.target.value.replace(/\D/g,""))};e.forEach((e=>e.addEventListener("input",i.bind(void 0,e)))),t.addEventListener("input",((e,t)=>{e.value=t.target.value.replace(/[^!а-яё 0-9.,-?]/gi,"")}).bind(void 0,t)),o.forEach((e=>e.addEventListener("input",s.bind(void 0,e)))),c.forEach((e=>e.addEventListener("input",a.bind(void 0,e)))),n.forEach((e=>e.addEventListener("input",r.bind(void 0,e)))),l.forEach((e=>{e.addEventListener("blur",(t=>{const o=t.target;o.matches(".mess")&&((e,t)=>{e.value=t.value.trim().replace(/\s{2,}/," ").replace(/[-]{2,}/,"-").replace(/^[ |-]/,"")})(e,o),o.matches("#form1-name, #form2-name, #form3-name")&&((e,t)=>{e.value=t.value.trim().replace(/\s{2,}/," ").replace(/[-]{2,}/,"-").replace(/^[ |-]/,"").replace(/^[а-я]/,(e=>e.toUpperCase()))})(e,o),o.matches('input[type="email"]')&&(o.value.match(/^\w+([-._!~*']?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)?e.value=o.value:(e.value=o.value.replace(o.value,""),alert("Введите валидное значение"))),o.matches('input[type="tel"]')&&(o.value.match(/\+?[78]([- ()]*\d){10}/)?e.value=o.value:(e.value=o.value.replace(o.value,""),alert("Введите валидное значение")))}))}))})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),l=document.querySelector(".calc-day"),r=document.getElementById("total");t.addEventListener("change",(t=>{const a=t.target;(a.matches("select")||a.matches("input"))&&(()=>{let t=0,a=1,s=1;const i=o.options[o.selectedIndex].value,u=+n.value;c.value>1&&(a+=(c.value-1)/10),l.value&&l.value<5?s*=2:l.value&&l.value<10&&(s*=1.5),i&&u&&(t=e*i*u*a*s,(e=>{let t,o=0;const n=()=>{t=requestAnimationFrame(n),Math.floor(e)>o?(o+=5,r.textContent="",r.textContent+=`${o}`):cancelAnimationFrame(t)};let c;c?(c=!1,cancelAnimationFrame(t)):(t=requestAnimationFrame(n),c=!0)})(t))})()}))})(100),t("form1"),t("form2"),t("form3")})();