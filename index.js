let aud = new Audio()
aud.src = 'Freestyler.mp3'
aud.muted = true
aud.autoplay = true
function playMusic() {

    aud.play()
    aud.loop = true
    aud.muted = false

}
playMusic()