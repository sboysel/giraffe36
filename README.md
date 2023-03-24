# giraffe36

![](https://img.shields.io/badge/version-v0.0.1-blue)

A 36 key split board. Inspired largely by Ferris Sweep / sweep36, draculad, and samoklava.

![pcb front render](img/giraffe36_pcb_front_small.jpg?raw=true)

## Goals

- simplicity
- declarative design (ergogen)
- 5x3+3 wired split
- MX hotswap
- diodeless
- lowered thumb cluster comfortable to my hands
- to learn PCB design!

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

## Fabrication notes

1. Generate unrouted PCBs with ergogen
2. Route in KiCad
  - default track widths
  - add teardrops (defaults)
  - round tracks (defaults)
3. Ground layer
  - front and back copper layer
  - draw polygon outside edge cuts
  - make sure net class GND is selected
  - hatched fill, 45 degree orientation
  - fill all zones at least one final time once all tracks have been routed
4. Export gerbers
