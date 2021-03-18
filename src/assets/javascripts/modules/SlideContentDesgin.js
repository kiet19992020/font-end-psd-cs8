const internals = {
  /**
   * Variable
   */
  $this: $('.mod-content-design'),
  /**
   * Function
   */
  addSlick() {
    this.$this.find('.slider-design').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      prevArrow: '<button class="rounded-circle btn-design-left icomoon icon-arrow-thin-left"></button>',
      nextArrow: '<button class="rounded-circle btn-design-right icomoon icon-arrow-thin-right"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })
  }
}

const SlideContentDesgin = (() => {
  if (internals.$this.length) {
    internals.addSlick()
    console.log(111)
  }
})()
export default SlideContentDesgin

