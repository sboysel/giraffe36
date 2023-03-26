#!/usr/bin/bash

pcbdraw plot \
      --side front \
      --style oshpark-purple \
      output/pcbs/routed/giraffe36_pcb_routed.kicad_pcb output/pcbs/routed/giraffe36_pcb_routed_front.jpg

pcbdraw plot \
      --side back \
      --style oshpark-purple \
      output/pcbs/routed/giraffe36_pcb_routed.kicad_pcb output/pcbs/routed/giraffe36_pcb_routed_back.jpg
