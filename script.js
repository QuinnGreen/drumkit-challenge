let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

document.addEventListener('keypress', (keyValue) => {
    // console.log(keyValue.keyCode)
    if (keyValue.keyCode == 97) 
        playBoom();

    else if (keyValue.keyCode == 115) 
    playClap();

    else if (keyValue.keyCode == 100) 
    playHihat();

    else if (keyValue.keyCode == 102) 
    playKick();

    else if (keyValue.keyCode == 103) 
    playOpenhat();

    else if (keyValue.keyCode == 104) 
    playRide();

    else if (keyValue.keyCode == 106) 
    playSnare();

    else if (keyValue.keyCode == 107) 
    playTink();

    else if (keyValue.keyCode == 108) 
    playTom();

})
// document.addEventListener('click', () => {

// })

const playBoom = () => {
    boom.play();
}

const playClap = () => {
    clap.play();
}

const playHihat = () => {
    hihat.play();
}

const playKick = () => {
    kick.play();
}

const playOpenhat = () => {
    openhat.play();
}

const playRide = () => {
    ride.play();
}

const playSnare = () => {
    snare.play();
}

const playTink = () => {
    tink.play();
}

const playTom = () => {
    tom.play();
}
