const pianoK = document.querySelectorAll('.piano-keys .key');

const slider = document.querySelector('.volume input');

const toggle = document.querySelector('.keys-p input');

let audio = new Audio("src/audios/a.wav");

let mapKeys = [];

const playSound = (key) => {
    audio.src = `src/audios/${key}.wav`;
    audio.play();

    const clicked = document.querySelector(`.piano-keys .key[data-key="${key}"]`);
    clicked.classList.add('active');
    setTimeout(() => {
        clicked.classList.remove('active');
    }, 100);
};

pianoK.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener('click', () => playSound(key.dataset.key));
    mapKeys.push(key.dataset.key);
});

document.addEventListener('keydown', (event) => {
    if(mapKeys.includes(event.key)){
        playSound(event.key);
    }
});

const handVolume = (e) => {
    audio.volume = e.target.value;
}

slider.addEventListener('input', handVolume);

const handToggle = () => {
    pianoK.forEach(key => key.classList.toggle("hide"));
}

toggle.addEventListener('click', handToggle);