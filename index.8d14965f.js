!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=s);var a=s("bpxeT"),u=s("2TvXO"),c=s("8H72y"),o=s("3PHHA"),i=s("h6c0i"),l=s("5IjG7"),f=new(0,c.default),p={formEl:document.querySelector(".search-form"),galleryEl:document.querySelector(".gallery"),loadMoreBtnEl:document.querySelector(".load-more")},d=p.galleryEl,h=p.loadMoreBtnEl;function x(){return(x=e(a)(e(u).mark((function t(n){var r,s,a,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.preventDefault(),e.next=4,B();case 4:if(e.sent,f.query=n.currentTarget.elements.searchQuery.value.trim(),""!==f.query){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,f.resetPage();case 10:return e.sent,e.next=13,q();case 13:return e.sent,e.next=16,w();case 16:return e.sent,e.next=19,f.getPictures(f.query);case 19:return r=e.sent,e.next=22,r.data.hits;case 22:return s=e.sent,e.next=25,r.data.totalHits;case 25:if(a=e.sent,i.Notify.info("Hooray! We found ".concat(a," images.")),0!==s.length){e.next=29;break}return e.abrupt("return",i.Notify.failure("Sorry, there are no images matching your search query. Please try again."));case 29:if(!(s.length<39)){e.next=35;break}return e.next=32,q();case 32:e.sent,e.next=38;break;case 35:return e.next=37,b();case 37:e.sent;case 38:return e.next=40,(0,o.default)(s);case 40:return c=e.sent,e.next=43,v(c);case 43:return e.sent,e.next=46,L();case 46:return e.sent,e.next=49,C();case 49:e.sent,e.next=55;break;case 52:e.prev=52,e.t0=e.catch(0),console.log(e.t0);case 55:case"end":return e.stop()}}),t,null,[[0,52]])})))).apply(this,arguments)}function y(){return(y=e(a)(e(u).mark((function t(){var n,r,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B();case 3:return e.sent,e.next=6,q();case 6:return e.sent,e.next=9,f.getPictures(f.query);case 9:return n=e.sent,e.next=12,n.data.hits;case 12:return r=e.sent,e.next=15,(0,o.default)(r);case 15:return s=e.sent,e.next=18,v(s);case 18:return e.sent,e.next=21,H();case 21:return e.sent,e.next=24,b();case 24:return e.sent,e.next=27,C();case 27:if(e.sent,!(r.length<39)){e.next=33;break}return i.Notify.warning("We're sorry, but you've reached the end of search results."),e.next=32,q();case 32:e.sent;case 33:e.next=38;break;case 35:e.prev=35,e.t0=e.catch(0),console.log(e.t0);case 38:case"end":return e.stop()}}),t,null,[[0,35]])})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=e(a)(e(u).mark((function t(n){return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.insertAdjacentHTML("beforeend",n);case 2:t.sent,new(e(l))(".gallery a").on("show.simplelightbox");case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return g.apply(this,arguments)}function g(){return(g=e(a)(e(u).mark((function t(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.innerHTML="";case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function b(){return k.apply(this,arguments)}function k(){return(k=e(a)(e(u).mark((function t(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.classList.add("show");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function q(){return E.apply(this,arguments)}function E(){return(E=e(a)(e(u).mark((function t(){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.classList.remove("show");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function L(){return T.apply(this,arguments)}function T(){return(T=e(a)(e(u).mark((function t(){var n,r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.querySelector("body").firstElementChild.getBoundingClientRect(),r=n.height,e.next=3,window.scrollBy({top:r,behavior:"smooth"});case 3:e.sent;case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function H(){return M.apply(this,arguments)}function M(){return(M=e(a)(e(u).mark((function t(){var n,r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.querySelector(".gallery").firstElementChild.getBoundingClientRect(),r=n.height,e.next=3,window.scrollBy({top:2*r,behavior:"smooth"});case 3:e.sent;case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}p.formEl.addEventListener("submit",(function(e){return x.apply(this,arguments)})),h.addEventListener("click",(function(){return y.apply(this,arguments)}));var S=document.querySelector(".mask");function B(){S.classList.remove("hide")}function C(){setTimeout((function(){S.classList.add("hide")}),700)}window.addEventListener("DOMContentLoaded",(function(){setTimeout((function(){S.classList.add("hide")}),700)}))}();
//# sourceMappingURL=index.8d14965f.js.map
