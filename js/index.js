function type() {
    $('#title').typeIt({
            speed: 100,
            autoStart: true
        }).tiType('Aneesh Ashutosh<span class="emphasis">.</span>')
        .tiPause(1000)
        .tiSettings({ speed: 200 })
        .tiDelete()
        .tiPause(800)
        .tiSettings({ speed: 100 })

        .tiType('Designer<span class="emphasis">.</span>')
        .tiPause(1000)
        .tiSettings({ speed: 200 })
        .tiDelete()
        .tiPause(800)
        .tiSettings({ speed: 100 })

        .tiType('Developer<span class="emphasis">.</span>')
        .tiPause(1000)
        .tiSettings({ speed: 200 })
        .tiDelete()
        .tiPause(800)
        .tiSettings({ speed: 100 })

        .tiType('Entrepreneur<span class="emphasis">.</span>')
        .tiPause(1000)
        .tiSettings({ speed: 200 })
        .tiDelete()
        .tiPause(800)
        .tiSettings({ speed: 100 })

        .tiType('Aneesh Ashutosh<span class="emphasis">.</span>');
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