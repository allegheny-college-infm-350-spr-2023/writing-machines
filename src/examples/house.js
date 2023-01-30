/*
 *Original poem, Fortran - 1967 Alison Knowles
 */

const materials = [
    'shiny steel',
    'aluminum',
    'laser-cut mdf',
    'blinking leds'
];

const locations = [
    'among high mountains',
    'among other houses',
    'among small hills',
    'by a river',
    'by an abandoned lake',
    'by the sea',
    'in a cold, windy climate',
    'in a deserted airport',
    'in a deserted church',
    'in a deserted factory',
    'in a green, mossy terrain',
    'in a hot climate',
    'in a metropolis',
    'in a place with both heavy rain and bright sun',
    'in an overpopulated area',
    'in dense woods',
    'in heavy jungle undergrowth',
    'in japan',
    'in michigan',
    'in southern france',
    'inside a mountain',
    'on an island',
    'on the sea',
    'underwater'
];

const lights = [
    'all available lighting',
    'candles',
    'electricity',
    'natural light'
];

const inhabitants = [
    'all races of men represented wearing predominantly red clothing',
    'children and old people',
    'collectors of all types',
    'fishermen and families',
    'french and german speaking people',
    'friends',
    'friends and enemies',
    'horses and birds',
    'little boys',
    'lovers',
    'people from many walks of life',
    'people speaking many languages wearing little or no clothing',
    'people who eat a great deal',
    'people who enjoy eating together',
    'people who love to read',
    'people who sleep almost all the time',
    'people who sleep very little',
    'various birds and fish',
    'vegetarians',
    'very tall people'
];

const stanza_count = 7;

const random = arr => {
    return arr[Math.floor(arr.length * Math.random())];
}

const stanza = () => {
    console.log()
    console.log(`A house of ${random(materials)}`);
    console.log(`     ${random(locations)}`);
    console.log(`          using ${random(lights)}`);
    console.log(`               inhabited by ${random(inhabitants)}`);
}

const run = () => {
    for(let i = 0; i < stanza_count; i++) {
        stanza();
    }
}

run();