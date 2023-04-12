all: output/pcbs/giraffe36_pcb.kicad_pcb \
	output/pcbs/giraffe36_pcb_front.jpg \
	output/pcbs/giraffe36_pcb_back.jpg \
	img/giraffe36_pcb_front_small.jpg

output/pcbs/giraffe36_pcb.kicad_pcb: giraffe36.yaml
	npm run gen

output/pcbs/giraffe36_pcb_front.jpg: output/pcbs/giraffe36_pcb.kicad_pcb 
	pcbdraw plot \
		--side front \
		--style gatema-green \
		$< $@
	mkdir -p img 
	mv $@ img/$(notdir $@)

output/pcbs/giraffe36_pcb_back.jpg: output/pcbs/giraffe36_pcb.kicad_pcb
	pcbdraw plot \
		--side back \
		--style gatema-green \
		$< $@
	mkdir -p img 
	mv $@ img/$(notdir $@)

img/giraffe36_pcb_front_small.jpg: img/giraffe36_pcb_front.jpg
	mkdir -p img
	convert $< -resize 50% $@

clean:
	rm -rf output/pcbs/giraffe36_pcb.kicad_pcb \
		output/outlines/giraffe36_bottom_plate.dxf \
		img/giraffe36_pcb_front.jpg \
		img/giraffe36_pcb_back.jpg \
		img/giraffe36_pcb_front_small.jpg
