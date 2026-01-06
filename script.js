const btn = document.getElementById('btn')
 const textBtn = btn.textContent = 'dont click me'
console.log(textBtn)
const img = document.getElementById('img')
const newSrc = img.src = 'img//img2.jpeg'
console.log(newSrc)
const link = document.getElementById('link')
const linkHref = link.href = 'https://www.google.com'
console.log(linkHref)
const linkImg = document.getElementById('link__img')
const altText = linkImg.alt = 'this is an image'
console.log(altText)
const list = document.getElementById('list')
const listItem0 = document.getElementById('list__item')
const newText0 = listItem0.textContent = 'item zero'
console.log(newText0)