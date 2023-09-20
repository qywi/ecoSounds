const solovey = document.querySelector('.solovey');
const drozd = document.querySelector('.drozd');
const malinovka = document.querySelector('.malinovka');
const javoronok = document.querySelector('.javoronok');
const slavka = document.querySelector('.slavka');
const main = document.querySelector('main');
const allBirds = document.querySelectorAll('.li-item');
const logo = document.querySelector('.logo');

const audios = {
    solovey: document.getElementById('soloveyAudio'),
    drozd: document.getElementById('drozdAudio'),
    malinovka: document.getElementById('malinovkaAudio'),
    javoronok: document.getElementById('javoronokAudio'),
    slavka: document.getElementById('slavkaAudio'),
    logo: document.getElementById('logoAudio')
};

let previousBird = null;

solovey.addEventListener('click', () => {
    main.style.backgroundImage = 'url("assets/img/solovey.jpg")';
    playSound('solovey');
    changeColor(solovey);
});

drozd.addEventListener('click', () => {
    main.style.backgroundImage = 'url("assets/img/drozd.jpg")';
    playSound('drozd');
    changeColor(drozd);
});

malinovka.addEventListener('click', () => {
    main.style.backgroundImage = 'url("assets/img/zarynka.jpg")';
    playSound('malinovka');
    changeColor(malinovka);
});

javoronok.addEventListener('click', () => {
    main.style.backgroundImage = 'url("assets/img/javoronok.jpg")';
    playSound('javoronok');
    changeColor(javoronok);
});

slavka.addEventListener('click', () => {
    main.style.backgroundImage = 'url("assets/img/slavka.jpg")';
    playSound('slavka');
    changeColor(slavka);
});

logo.addEventListener('click', () => {
    main.style.backgroundImage = 'url("assets/img/forest.jpg")';
    playSound('logo');
    changeColor(logo);
});

function playSound(bird) {
    Object.values(audios).forEach(audio => audio.pause()); // Останавливаем все аудио
    audios[bird].currentTime = 0;
    audios[bird].play();
}

function changeColor(currentBird) {
    if (previousBird) {
        previousBird.style.color = 'rgb(255, 255, 255)';
    }
    currentBird.style.color = 'rgb(252, 176, 113)';
    previousBird = currentBird;
}