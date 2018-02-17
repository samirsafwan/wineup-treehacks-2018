function type() {
    $('#title').typeIt({
            speed: 100,
            autoStart: true
        }).tiType('Wine Up<span class="emphasis">.</span>')
        .tiPause(1000)
        .tiSettings({ speed: 200 })
}

type();