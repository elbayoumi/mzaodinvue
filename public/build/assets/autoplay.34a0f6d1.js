import{g as S}from"./pagination.b8efc09a.js";function k(x){let{swiper:e,extendParams:B,on:s,emit:r,params:l}=x;e.autoplay={running:!1,paused:!1,timeLeft:0},B({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let y,E,L=l&&l.autoplay?l.autoplay.delay:3e3,g=l&&l.autoplay?l.autoplay.delay:3e3,n,f=new Date().getTime(),b,v,p,h,w,o,D;function O(t){!e||e.destroyed||!e.wrapperEl||t.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",O),!D&&u())}const M=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?b=!0:b&&(g=n,b=!1);const t=e.autoplay.paused?n:f+g-new Date().getTime();e.autoplay.timeLeft=t,r("autoplayTimeLeft",t,t/L),E=requestAnimationFrame(()=>{M()})},C=()=>{let t;return e.virtual&&e.params.virtual.enabled?t=e.slides.filter(a=>a.classList.contains("swiper-slide-active"))[0]:t=e.slides[e.activeIndex],t?parseInt(t.getAttribute("data-swiper-autoplay"),10):void 0},T=t=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(E),M();let i=typeof t>"u"?e.params.autoplay.delay:t;L=e.params.autoplay.delay,g=e.params.autoplay.delay;const a=C();!Number.isNaN(a)&&a>0&&typeof t>"u"&&(i=a,L=a,g=a),n=i;const c=e.params.speed,N=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(c,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,c,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(c,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,c,!0,!0),r("autoplay")),e.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{T()})))};return i>0?(clearTimeout(y),y=setTimeout(()=>{N()},i)):requestAnimationFrame(()=>{N()}),i},A=()=>{f=new Date().getTime(),e.autoplay.running=!0,T(),r("autoplayStart")},m=()=>{e.autoplay.running=!1,clearTimeout(y),cancelAnimationFrame(E),r("autoplayStop")},d=(t,i)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(y),t||(o=!0);const a=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",O):u()};if(e.autoplay.paused=!0,i){w&&(n=e.params.autoplay.delay),w=!1,a();return}n=(n||e.params.autoplay.delay)-(new Date().getTime()-f),!(e.isEnd&&n<0&&!e.params.loop)&&(n<0&&(n=0),a())},u=()=>{e.isEnd&&n<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(f=new Date().getTime(),o?(o=!1,T(n)):T(),e.autoplay.paused=!1,r("autoplayResume"))},I=()=>{if(e.destroyed||!e.autoplay.running)return;const t=S();t.visibilityState==="hidden"&&(o=!0,d(!0)),t.visibilityState==="visible"&&u()},P=t=>{t.pointerType==="mouse"&&(o=!0,D=!0,!(e.animating||e.autoplay.paused)&&d(!0))},F=t=>{t.pointerType==="mouse"&&(D=!1,e.autoplay.paused&&u())},q=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",P),e.el.addEventListener("pointerleave",F))},R=()=>{e.el.removeEventListener("pointerenter",P),e.el.removeEventListener("pointerleave",F)},_=()=>{S().addEventListener("visibilitychange",I)},j=()=>{S().removeEventListener("visibilitychange",I)};s("init",()=>{e.params.autoplay.enabled&&(q(),_(),A())}),s("destroy",()=>{R(),j(),e.autoplay.running&&m()}),s("_freeModeStaticRelease",()=>{(p||o)&&u()}),s("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?m():d(!0,!0)}),s("beforeTransitionStart",(t,i,a)=>{e.destroyed||!e.autoplay.running||(a||!e.params.autoplay.disableOnInteraction?d(!0,!0):m())}),s("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){m();return}v=!0,p=!1,o=!1,h=setTimeout(()=>{o=!0,p=!0,d(!0)},200)}}),s("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(h),clearTimeout(y),e.params.autoplay.disableOnInteraction){p=!1,v=!1;return}p&&e.params.cssMode&&u(),p=!1,v=!1}}),s("slideChange",()=>{e.destroyed||!e.autoplay.running||(w=!0)}),Object.assign(e.autoplay,{start:A,stop:m,pause:d,resume:u})}export{k as A};
