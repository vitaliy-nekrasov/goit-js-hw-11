function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var o=i("6fOXY"),r=i("iF2Nc"),l=i("iQIUW"),s=i("fZKcF");const c=document.querySelector(".mask");function u(){c.classList.remove("hide")}function d(){setTimeout((()=>{c.classList.add("hide")}),700)}window.addEventListener("DOMContentLoaded",(function(){setTimeout((()=>{c.classList.add("hide")}),700)}));const f=new(0,o.default),{formEl:w,galleryEl:y,loadMoreBtnEl:h}={formEl:document.querySelector(".search-form"),galleryEl:document.querySelector(".gallery"),loadMoreBtnEl:document.querySelector(".load-more")};async function g(t){await y.insertAdjacentHTML("beforeend",t);new(e(s))(".gallery a").on("show.simplelightbox")}async function m(){return await h.classList.add("show")}async function p(){return await h.classList.remove("show")}w.addEventListener("submit",(async function(e){try{e.preventDefault();await u();if(f.query=e.currentTarget.elements.searchQuery.value.trim(),""===f.query)return;await f.resetPage(),await p(),await async function(){return await(y.innerHTML="")}();const t=await f.getPictures(f.query),a=await t.data.hits,n=await t.data.totalHits;if(l.Notify.info(`Hooray! We found ${n} images.`),0===a.length)return l.Notify.failure("Sorry, there are no images matching your search query. Please try again.");if(a.length<39){await p()}else{await m()}const i=await(0,r.default)(a);await g(i),await async function(){const{height:e}=document.querySelector("body").firstElementChild.getBoundingClientRect();await window.scrollBy({top:e,behavior:"smooth"})}(),await d()}catch(e){console.log(e)}})),h.addEventListener("click",(async function(){try{await u(),await p();const e=await f.getPictures(f.query),t=await e.data.hits,a=await(0,r.default)(t);await g(a),await async function(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();await window.scrollBy({top:2*e,behavior:"smooth"})}(),await m(),await d();if(t.length<39){l.Notify.warning("We're sorry, but you've reached the end of search results.");await p()}}catch(e){console.log(e)}}));
//# sourceMappingURL=index.a7a87bd1.js.map