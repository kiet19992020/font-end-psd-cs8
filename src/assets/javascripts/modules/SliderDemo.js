const internals = {
  /**
   * Variable
   */
  $this: $('.mod-slider'),
  /**
   * Function
   */
  addSlick(){
    this.$this.find('.slider').slick({
      rows: 0,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      prevArrow: '<button class="rounded-circle icomoon icon-arrow-thin-left"></button>',
      nextArrow: '<button class="rounded-circle icomoon icon-arrow-thin-right"></button>',
      centerPadding :'50px',
    })
  }
}

const SliderDemo = (() => {
  if (internals.$this.length) {
    internals.addSlick()
  }
})()
export default SliderDemo

