# giraffe36

![](https://img.shields.io/badge/version-v0.0.1-blue) 

![pcb front render](img/giraffe36_built_small.jpg?raw=true)

A 36 key split keyboard with "long-necked" thumb clusters. Wired, powered by Raspberry Pi Picos, diodeless. Inspirations include Ferris Sweep / sweep36, draculad, samoklava, piantor.

**Status:** 

## Goals

- simplicity
- declarative design ([ergogen](https://github.com/ergogen/ergogen) and specifically, [my fork](https://github.com/sboysel/ergogen))
- 5x3+3 wired split
- soldered MX to build plateless
- diodeless
- lowered thumb cluster comfortable to my hands
- to learn PCB design!

## Build

BOM

- 2x PCB (they are reversible, fabricated by JLCPCB)
- 2x Raspberry Pi Pico (I used [WeAct Studio Pi Picos](https://www.aliexpress.us/item/3256803521775546.html))
- 2x TRRS PJ-320A jack (4 pins)
- 36x MX switches

Be sure to use the `main` branch. Gerbers can be found in `output/pcbs/routed/`. Archives of the routed PCB and gerbers are located in `output/pcbs/routed/backups`. Firmware ([KMK](http://kmkfw.io/)) can be found in `firmware/kmk/`.

## Development 

Setup

```
git clone git@github.com:sboysel/giraffe36.git
python -m venv --system-site-packages ~/.venv/giraffe36
cd giraffe36
npm install
pip install -r requirements.txt
make
```

The `main` branch contains versions of the board that have been tested and are confirmed to be functional. The `dev` branch contains the latest progress on the next iteration.
