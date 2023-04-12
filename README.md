# giraffe36

![](https://img.shields.io/badge/version-v0.0.1-blue)

A 36 key split board. Inspirations: Ferris Sweep / sweep36, draculad, samoklava, piantor.

![pcb front render](img/giraffe36_built_small.jpg?raw=true)

## Goals

- simplicity
- declarative design (ergogen)
- 5x3+3 wired split
- MX hotswap
- diodeless
- lowered thumb cluster comfortable to my hands
- to learn PCB design!

## Build

- 2x PCB (they are reversible)
- 2x Pi Pico
- 2x TRRS jack
- 36x MX switches

Gerbers can be found in `output/pcbs/routed/`. Firmware can be found in `firmware/kmk/`.

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
