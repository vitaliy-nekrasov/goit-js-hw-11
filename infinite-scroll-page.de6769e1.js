!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=s);var a=s("bpxeT"),u=s("2TvXO"),c=s("8H72y"),o=s("3PHHA"),i=s("h6c0i"),l=s("5IjG7"),f=new(0,c.default),p={formEl:document.querySelector(".search-form"),galleryEl:document.querySelector(".gallery")},d=p.galleryEl,h=!0;function y(){return(y=e(a)(e(u).mark((function t(n){var r,s,a,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.preventDefault(),e.next=4,H();case 4:if(e.sent,f.query=n.currentTarget.elements.searchQuery.value.trim(),""!==f.query){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,f.resetPage();case 10:return e.sent,e.next=13,g();case 13:return e.sent,e.next=16,f.getPictures(f.query);case 16:return r=e.sent,e.next=19,r.data.hits;case 19:return s=e.sent,e.next=22,r.data.totalHits;case 22:if(a=e.sent,i.Notify.info("Hooray! We found ".concat(a," images.")),0!==s.length){e.next=26;break}return e.abrupt("return",i.Notify.failure("Sorry, there are no images matching your search query. Please try again."));case 26:return e.next=28,(0,o.default)(s);case 28:return c=e.sent,e.next=31,x(c);case 31:return e.sent,e.next=34,document.querySelector(".img:last-child");case 34:if(l=e.sent,!(h=!0)){e.next=41;break}return e.next=39,k(l);case 39:e.sent,h=!1;case 41:return s.length<39&&L.unobserve(l),e.next=44,w();case 44:return e.sent,e.next=47,S();case 47:e.sent,e.next=53;break;case 50:e.prev=50,e.t0=e.catch(0),console.log(e.t0);case 53:case"end":return e.stop()}}),t,null,[[0,50]])})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=e(a)(e(u).mark((function t(n){return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.insertAdjacentHTML("beforeend",n);case 2:t.sent,new(e(l))(".gallery a").on("show.simplelightbox");case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return m.apply(this,arguments)}function m(){return(m=e(a)(e(u).mark((function t(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.innerHTML="";case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function w(){return b.apply(this,arguments)}function b(){return(b=e(a)(e(u).mark((function t(){var n,r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.querySelector("body").firstElementChild.getBoundingClientRect(),r=n.height,e.next=3,window.scrollBy({top:r,behavior:"smooth"});case 3:e.sent;case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function q(){return(q=e(a)(e(u).mark((function t(){var n,r,s,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H();case 3:return e.sent,e.next=6,f.getPictures(f.query);case 6:return n=e.sent,e.next=9,n.data.hits;case 9:return r=e.sent,e.next=12,(0,o.default)(r);case 12:return s=e.sent,e.next=15,x(s);case 15:return e.sent,e.next=18,document.querySelector(".img:last-child");case 18:return a=e.sent,h=!0,e.next=22,S();case 22:e.sent,h&&(k(a),h=!1),r.length<39&&(i.Notify.warning("We're sorry, but you've reached the end of search results."),L.unobserve(a)),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(0),console.log(e.t0);case 30:case"end":return e.stop()}}),t,null,[[0,27]])})))).apply(this,arguments)}function k(e){return E.apply(this,arguments)}function E(){return(E=e(a)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L.observe(n);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}p.formEl.addEventListener("submit",(function(e){return y.apply(this,arguments)}));var L=new IntersectionObserver((function(e,t){var n=e[0];n.isIntersecting&&(!function(){q.apply(this,arguments)}(),t.unobserve(n.target))}),{}),T=document.querySelector(".mask");function H(){T.classList.remove("hide")}function S(){T.classList.add("hide")}window.addEventListener("DOMContentLoaded",(function(){T.classList.add("hide")}))}();
//# sourceMappingURL=infinite-scroll-page.de6769e1.js.map
