#!/usr/bin/python

import random
from time import sleep

t = 0
n = 0
paths = 0

above= [
    'brow',
    'mist',
    'shape',
    'layer',
    'the crag',
    'stone',
    'forest',
    'height'
];

below = [
    'flow',
    'basin',
    'shape',
    'vein',
    'rippling',
    'stone',
    'cove',
    'rock'
];

trans= [
    'command',
    'pace',
    'roam',
    'trail',
    'frame',
    'sweep',
    'exercise',
    'range'
];

imper = [
    'track',
    'shade',
    'translate',
    'stamp',
    'progress through',
    'direct',
    'run',
    'enter'
];

intrans = [
    'linger',
    'dwell',
    'rest',
    'relax',
    'hold',
    'dream',
    'hum'
];

s = ['s', ''];

texture = [
    'rough',
    'fine'
];

def rand_range(max: int = 0) -> int:
    return int(random.random() * (max + 1))

def choose(array: list = []) -> str:
    return array[rand_range(len(array) - 1)];

def path() -> str:
    p = rand_range(1)
    words = choose(above)
    if words == 'forest' and rand_range(3) == 1:
        words = f'monkeys {choose(trans)}'
    else:
        words += f'{s[p]} {choose(trans)}{s[(p + 1) % 2]}'
    words += f' the {choose(below)}{choose(s)}.'
    return words

def site() -> str:
    words = ''
    if rand_range(2) == 1:
        words += choose(above)
    else:
        words += choose(below)
    words += f's {choose(intrans)}.'
    return words

def cave() -> str:
    adjs=[
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
    ]

    target = 1 + rand_range(3)

    while len(adjs) > target:
        item = random.choice(adjs)
        adjs.remove(item)

    words = f"\u00a0\u00a0{choose(imper)} the {' '.join(adjs)}\u2014"

    return words

def do_line() -> None:
    global t
    global n
    global paths

    if n == 0:
        text = ' '
    elif n == 1:
        paths = 2 + rand_range(2)
        text = path()
    elif n < paths:
        text = site()
    elif n == paths:
        text = path()
    elif n == paths + 1:
        text = ' '
    elif n == paths + 2:
        text = cave()
    else:
        text = ' '
        n = 0
    n += 1

    if text:
        text = text.capitalize()
        print(text)

def poem() -> None:
    while True:
        do_line()
        sleep(1)

poem()
