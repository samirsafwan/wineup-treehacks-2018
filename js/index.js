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
$('input[type=range]').wrap("<div class='range'></div>");
var i = 1;

$('.range').each(function() {
  var n = this.getElementsByTagName('input')[0].value;
  var x = (n / 100) * (this.getElementsByTagName('input')[0].offsetWidth - 8) - 12;
  this.id = 'range' + i;
  if (this.getElementsByTagName('input')[0].value == 0) {
    this.className = "range"
  } else {
    this.className = "range rangeM"
  }
  this.innerHTML += "<style>#" + this.id + " input[type=range]::-webkit-slider-runnable-track {background:linear-gradient(to right, #ff6666 0%, #8b0000 " + n + "%, #515151 " + n + "%)} #" + this.id + ":hover input[type=range]:before{content:'" + n + "'!important;left: " + x + "px;} #" + this.id + ":hover input[type=range]:after{left: " + x + "px}</style>";
  i++
});

$('input[type=range]').on("input", function() {
  var a = this.value;
  var p = (a / 100) * (this.offsetWidth - 8) - 12;
  if (a == 0) {
    this.parentNode.className = "range"
  } else {
    this.parentNode.className = "range rangeM"
  }
  this.parentNode.getElementsByTagName('style')[0].innerHTML += "#" + this.parentNode.id + " input[type=range]::-webkit-slider-runnable-track {background:linear-gradient(to right, #ff6666 0%, #8b0000 " + a + "%, #515151 " + a + "%)} #" + this.parentNode.id + ":hover input[type=range]:before{content:'" + a + "'!important;left: " + p + "px;} #" + this.parentNode.id + ":hover input[type=range]:after{left: " + p + "px}";
})

type();