let previousBird;
const solovey = document.querySelector('.solovey');
const drozd = document.querySelector('.drozd');
const malinovka = document.querySelector('.malinovka');
const javoronok = document.querySelector('.javoronok');
const slavka = document.querySelector('.slavka');
const main = document.querySelector('main');
const allBirds = document.querySelectorAll('.li-item');
const logo = document.querySelector('.logo');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const audio = document.querySelector('.audio');


solovey.addEventListener('click', () => {
    main.style.backgroundImage = 'url("assets/img/solovey.jpg")';
    audio.src = 'assets/audio/solovey.mp3'
    audio.play();
    changeColor(solovey);
    play.classList.add('none');
    pause.classList.remove('none');
});

drozd.addEventListener('click', () => {
    main.style.backgroundImage = 'url("assets/img/drozd.jpg")';
    audio.src = 'assets/audio/drozd.mp3'
    audio.play();
    changeColor(drozd);
    play.classList.add('none');
    pause.classList.remove('none');
});

malinovka.addEventListener('click', () => {
    main.style.backgroundImage = 'url("assets/img/zarynka.jpg")';
    audio.src = 'assets/audio/zarynka.mp3'
    audio.play();
    changeColor(malinovka);
    play.classList.add('none');
    pause.classList.remove('none');
});

javoronok.addEventListener('click', () => {
    main.style.backgroundImage = 'url("assets/img/javoronok.jpg")';
    audio.src = 'assets/audio/javoronok.mp3'
    audio.play();
    changeColor(javoronok);
    play.classList.add('none');
    pause.classList.remove('none');
});

slavka.addEventListener('click', () => {
    main.style.backgroundImage = 'url("assets/img/slavka.jpg")';
    audio.src = 'assets/audio/slavka.mp3'
    audio.play();
    changeColor(slavka);
    play.classList.add('none');
    pause.classList.remove('none');
});

logo.addEventListener('click', () => {
    main.style.backgroundImage = 'url("assets/img/forest.jpg")';
    audio.src = 'assets/audio/forest.mp3'
    audio.play();
    changeColor(logo);
    play.classList.add('none');
    pause.classList.remove('none');
});

play.addEventListener('click', () => {
    play.classList.add('none');
    pause.classList.remove('none');
    playAudio();
});

pause.addEventListener('click', () => {
    play.classList.remove('none');
    pause.classList.add('none');
    pauseAudio();
});


function changeColor(currentBird) {
    if (previousBird) {
        previousBird.style.color = 'rgb(255, 255, 255)';
    }
    currentBird.style.color = 'rgb(252, 176, 113)';
    previousBird = currentBird;
}

function playAudio(audioElement) {
    audio.currentTime = 0;
    audio.play();
}

function pauseAudio(audioElement) {
    audio.pause();
}