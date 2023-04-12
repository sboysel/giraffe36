# Fabrication notes

(mostly for myself)

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
