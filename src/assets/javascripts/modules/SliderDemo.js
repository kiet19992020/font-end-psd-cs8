const internals = {
  /**
   * Variable
   */
  $this: $('.mod-slider'),
  /**
   * Function
   */
  addSlick() {
    this.$this.find('.slider').slick({
      rows: 0,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button class="rounded-circle slide-btn-left icomoon icon-arrow-thin-left"></button>',
      nextArrow: '<button class="rounded-circle slide-btn-right icomoon icon-arrow-thin-right"></button>',
      speed: 300,
      responsive: [

        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
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

const SliderDemo = (() => {
  if (internals.$this.length) {
    internals.addSlick()
  }
})()
export default SliderDemo

