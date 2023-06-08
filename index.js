const right = document.querySelector('.right')
const content = right.querySelector('.content')
right.addEventListener('mouseover', function () {
  content.style.display = 'block'
})
right.addEventListener('mouseleave', function () {
  content.style.display = 'none'
})

new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
})
