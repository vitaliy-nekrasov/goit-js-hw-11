!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a);var s=a("bpxeT"),u=a("2TvXO"),c=a("8H72y"),o=a("3PHHA"),i=a("h6c0i"),l=a("5IjG7"),f=new(0,c.default),p={formEl:document.querySelector(".search-form"),galleryEl:document.querySelector(".gallery")},d=p.galleryEl;function h(){return(h=e(s)(e(u).mark((function t(r){var n,a,s,c,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r.preventDefault(),f.query=r.currentTarget.elements.searchQuery.value.trim(),""!==f.query){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,f.resetPage();case 7:return e.sent,e.next=10,v();case 10:return e.sent,e.next=13,f.getPictures(f.query);case 13:return n=e.sent,e.next=16,n.data.hits;case 16:return a=e.sent,e.next=19,n.data.totalHits;case 19:if(s=e.sent,i.Notify.info("Hooray! We found ".concat(s," images.")),0!==a.length){e.next=23;break}return e.abrupt("return",i.Notify.failure("Sorry, there are no images matching your search query. Please try again."));case 23:return e.next=25,(0,o.default)(a);case 25:return c=e.sent,e.next=28,y(c);case 28:return e.sent,e.next=31,document.querySelector(".img:last-child");case 31:if(l=e.sent,!!0){e.next=38;break}return e.next=36,q(l);case 36:e.sent,!1;case 38:return a.length<39&&E.unobserve(l),e.next=41,m();case 41:e.sent,e.next=47;break;case 44:e.prev=44,e.t0=e.catch(0),console.log(e.t0);case 47:case"end":return e.stop()}}),t,null,[[0,44]])})))).apply(this,arguments)}function y(e){return x.apply(this,arguments)}function x(){return(x=e(s)(e(u).mark((function t(r){return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.insertAdjacentHTML("beforeend",r);case 2:t.sent,new(e(l))(".gallery a").on("show.simplelightbox");case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(){return g.apply(this,arguments)}function g(){return(g=e(s)(e(u).mark((function t(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.innerHTML="";case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function m(){return w.apply(this,arguments)}function w(){return(w=e(s)(e(u).mark((function t(){var r,n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.querySelector("body").firstElementChild.getBoundingClientRect(),n=r.height,e.next=3,window.scrollBy({top:n,behavior:"smooth"});case 3:e.sent;case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function b(){return(b=e(s)(e(u).mark((function t(){var r,n,a,s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.getPictures(f.query);case 3:return r=e.sent,e.next=6,r.data.hits;case 6:return n=e.sent,e.next=9,(0,o.default)(n);case 9:return a=e.sent,e.next=12,y(a);case 12:return e.sent,e.next=15,document.querySelector(".img:last-child");case 15:s=e.sent,!0&&(q(s),!1),n.length<39&&(i.Notify.warning("We're sorry, but you've reached the end of search results."),E.unobserve(s)),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}}),t,null,[[0,21]])})))).apply(this,arguments)}function q(e){return k.apply(this,arguments)}function k(){return(k=e(s)(e(u).mark((function t(r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E.observe(r);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}p.formEl.addEventListener("submit",(function(e){return h.apply(this,arguments)}));var E=new IntersectionObserver((function(e,t){var r=e[0];r.isIntersecting&&(!function(){b.apply(this,arguments)}(),t.unobserve(r.target))}),{})}();
//# sourceMappingURL=infinite-scroll-page.15a4e405.js.map
