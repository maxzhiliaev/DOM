const btn = document.getElementById('btn')
const input = document.getElementById('input')
btn.addEventListener('click', () => {
  btn.textContent = input.value || 'dont click me';
});
const img = document.getElementById('img')
const newSrc = img.src = 'img//img2.jpeg'
console.log(newSrc)
const link = document.getElementById('link')
const linkHref = link.href = 'https://www.google.com'
console.log(linkHref)
const linkImg = document.getElementById('link__img')
const altText = linkImg.alt = 'this is an image'
console.log(altText)
const list = document.getElementById('list');
const firstItem = list.firstElementChild;
firstItem.textContent = 'item zero';
