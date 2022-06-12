var mySwiper = new Swiper('.swiper', {
  // direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay: true, //自动切换
  speed: 800,
  autoplay: {
    delay: 3000, //自动切换的时间间隔，单位ms
    disableOnInteraction: false //用户操作swiper之后，是否禁止autoplay
  },
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: "fade"
})