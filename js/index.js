function type() {
    $('#title').typeIt({
            speed: 100,
            autoStart: true
        }).tiType('Wine Up<span class="emphasis">.</span>');
}

function wine_quality() {

}

// Sliders
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();

type();
