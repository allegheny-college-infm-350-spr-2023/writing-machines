
var t=0;
var n=0;
var paths=0;

const above= [
    'brow',
    'mist',
    'shape',
    'layer',
    'the crag',
    'stone',
    'forest',
    'height'
];

const below= [
    'flow',
    'basin',
    'shape',
    'vein',
    'rippling',
    'stone',
    'cove',
    'rock'
];

const trans= [
    'command',
    'pace',
    'roam',
    'trail',
    'frame',
    'sweep',
    'exercise',
    'range'
];

const imper=[
    'track',
    'shade',
    'translate',
    'stamp',
    'progress through',
    'direct',
    'run',
    'enter'
];

const intrans = [
    'linger',
    'dwell',
    'rest',
    'relax',
    'hold',
    'dream',
    'hum'
];

const s = ['s'];

const texture = [
    'rough',
    'fine'
];

const rand_range = max => {
    return Math.floor(
        Math.random() * (max + 1)
    );
}

const choose = array => {
    return array[rand_range(array.length - 1 )];
}

const path = () => {
    var p = rand_range(1);
    var words = choose(above);
    if ((words == 'forest') && (rand_range(3) == 1)) {
        words = 'monkeys ' + choose(trans);
    } else {
        words+=s[p] + ' ' + choose(trans) + s[(p + 1) % 2];
    }
    words += ' the ' + choose(below) + choose(s) + '.';
    return words;
}

const site = () => {
    var words = '';
    if (rand_range(2) == 1) {
        words += choose(above);
    } else {
        words += choose(below);
    }
    words += 's ' + choose(intrans) + '.';
    return words;
}

const cave = () => {
    var adjs=[
        'encompassing',
        choose(texture),
        'sinuous',
        'straight',
        'objective',
        'arched',
        'cool',
        'clear',
        'dim',
        'driven'
    ];
    
    var target= 1 + rand_range(3);
    
    while (adjs.length > target) {
        adjs.splice(rand_range(adjs.length), 1);
    }
    
    var words = '\u00a0\u00a0' + choose(imper) + ' the ' + adjs.join(' ') + ' \u2014';
    
    return words;
}

function do_line() {
    var main=document.getElementById('main');
    if (t <= 25) {
        t+=1;
    } else {
        main.removeChild(document.getElementById('main').firstChild);
    }
    if (n === 0) {
        text=' ';
    } else if (n == 1) {
        paths = 2 + rand_range(2);
        text = path();
    } else if (n<paths) {
        text = site();
    } else if (n == paths) {
        text = path();
    } else if (n == paths+1) {
        text = ' ';
    } else if (n == paths+2) {
        text = cave();
    } else {
        text = ' ';
        n = 0;
    }
    n += 1;
    text = text.substring(0,1).toUpperCase()+text.substring(1,text.length);
    console.log(text);
}

function poem() {
    setInterval(do_line, 1200);
}