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
      adaptiveHeight: true,
      prevArrow: '<button class="rounded-circle slide-btn-left icomoon icon-arrow-thin-left"></button>',
      nextArrow: '<button class="rounded-circle slide-btn-right icomoon icon-arrow-thin-right"></button>',
      centerPadding: '50px',
      speed: 300,
      // centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            adaptiveHeight: true,
            centerPadding: '50vw',
            variableWidth: true,
            respondTo: 'container'
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            variableWidth: true,
            adaptiveHeight: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            variableWidth: true,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
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

