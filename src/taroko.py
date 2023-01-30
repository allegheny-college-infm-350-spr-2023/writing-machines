#!/usr/bin/env Python
#
# Taroko Gorge
# A one-page Python program to generate an unbounded poem
#
# Nick Montfort
#  8 January 2009, Taroko Gorge National Park, Taiwan and Eva Air Flight 28
#
# x() splits a string into a list c() is just random. choice()
# f() picks a fresh value from a list p() prints a line and pauses
# cave() -- walking through the tunnels carved in the mountains
# path() -- walking along outdoors, seeing what is above (a) and below (b)
# site() -- stopping at a platform or viewing area

import time,random,sys
def x(s): return s.split(',')
def c(l): return random.choice(l)
a=x('brow,mist,shape,layer,the crag,stone,forest,height')
b=x('flow,basin,shape,vein,rippling,stone,cove,rock')

def f(v):
    l=globals()[v]
    i=c(l[:-1])
    l.remove(i)
    globals()[v]=l+[i]
    return i

def p(s=''):
    print(s.capitalize())
    sys.stdout.flush()
    time.sleep(1.2)

def cave():
    j=['encompassing',c(x('rough,fine'))]+\
    x('sinuous,straight,objective,arched,cool,clear,dim,dri ven')
    t=c([1,2,3,4])
    while len(j)>t:
        j.remove(c(j))
    v=' '+c(x('track,shade,translate,stamp,progress through,direct,run,enter'))
    return v+' the '+' '.join(j)

def path():
    v=c(x('command,pace,roam,trail,frame,sweep,exercise,range'))
    u=f('a')
    if c([0,1]):
        if u[0]=='f':
            u=c([u,u,'monkey'])
        h=u+'s '+v
    else:
        h=u+' '+v+'s'
    return h+' the '+f('b')+c(x(',s'))

def site():
    return f(c(x('a,b')))+'s '+c(x('linger,dwell,rest,relax,hold,dream,hum'))

p()
while True:
    p(path()+'.')
    m=c([0]*6+[1,2])
    for n in range(0,m):
        p(site()+'.')
    p(path()+'.')
    p()
    p(cave()+' -- ')
    p()
