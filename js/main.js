let skorKen = 0;
let skorPlayer = 0;
let timeOut = '';

let ken = document.getElementById('ninja-ken');

let splashScreen = document.getElementsByClassName('splash')[0];
let startGame = document.getElementsByClassName('start')[0];
let displayScoreKen = document.getElementsByClassName('skor-ken')[0];
let displayScorePlayer = document.getElementsByClassName('skor-player')[0];

let reset = document.getElementById('reset');
let batu = document.getElementById('batu');
let gunting = document.getElementById('gunting');
let kertas = document.getElementById('kertas');

startGame.addEventListener('click', () => {
    splashScreen.style.top = '-120vh';
    splashScreen.style.transition = '.75s';
});

reset.addEventListener('click', () => {
    console.log('reset')

    if( confirm('ini akan memulai ulang permainan, anda yakin?') ) {
        skorKen = 0;
        skorPlayer = 0;
        displayScoreKen.innerHTML = skorKen;
        displayScorePlayer.innerHTML = skorPlayer;
    };
});

const janken = tangan => {
    let jariKen = Math.floor(Math.random() * 3);

    switch( jariKen ) {
        case 0:
            ken.style.backgroundImage = "url('images/ken-batu.png')";
            break;
        case 1:
            ken.style.backgroundImage = "url('images/ken-gunting.png')";
            break;
        default:
            ken.style.backgroundImage = "url('images/ken-kertas.png')";
            break;
    }

    ken.classList.remove('goyang');

    switch( tangan ) {
        case 0:
            if( jariKen === 0 ) {
                result('draw');
            } else if ( jariKen === 1 ) {
                result('player');
            } else {
                result('ken');
            }
            break;
        case 1:
            result('ken');
            if( jariKen === 0 ) {
            } else if ( jariKen === 1 ) {
                result('draw');
            } else {
                result('player');
            }
            break;

        default:
            if( jariKen === 0 ) {
                result('player');
            } else if ( jariKen === 1 ) {
                result('ken');
            } else {
                result('draw');
            }
            break;
    }
};

const result = who => {
    clearTimeout(timeOut);

    switch( who ) {
        case 'ken':
            skorKen++;
            displayScoreKen.innerHTML = skorKen;
            console.log('Ninja Ken Menang');
            break;
        case 'player':
            skorPlayer++;
            displayScorePlayer.innerHTML = skorPlayer;
            console.log('Anda Menang');
            break;
        default:
            console.log('seri');
            break;
    }

    timeOut = setTimeout(() => {
        ken.style.removeProperty('background-image');
        ken.classList.add('goyang');
    }, 3000);
}

batu.addEventListener('click', (e) => {
    // mencegah adanya double-click
    batu.classList.add('disabled');
    batu.disabled = true;
    janken(0);
    setTimeout(() => {
        batu.classList.remove('disabled');
        batu.disabled = false;
    }, 2000);
});

gunting.addEventListener('click', (e) => {
    // mencegah adanya double-click
    gunting.classList.add('disabled');
    gunting.disabled = true;
    janken(0);
    setTimeout(() => {
        gunting.classList.remove('disabled');
        gunting.disabled = false;
    }, 2000);
});

kertas.addEventListener('click', (e) => {
    // mencegah adanya double-click
    kertas.classList.add('disabled');
    kertas.disabled = true;
    janken(0);
    setTimeout(() => {
        kertas.classList.remove('disabled');
        kertas.disabled = false;
    }, 2000);
});