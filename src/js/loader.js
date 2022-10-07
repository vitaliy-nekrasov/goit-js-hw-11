export const maskEl = document.querySelector('.mask');

window.addEventListener('DOMContentLoaded', onWindowLoad);

export function onWindowLoad() {
  setTimeout(() => {
    maskEl.classList.add('hide');
  }, 700);
}

export function loaderShow() {
  maskEl.classList.remove('hide');
}

export function loaderHide() {
  setTimeout(() => {
    maskEl.classList.add('hide');
  }, 700);
}
