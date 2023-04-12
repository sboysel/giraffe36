all: output/pcbs/giraffe36_pcb.kicad_pcb \
	output/cases/giraffe36_bottom_plate.jscad \
	output/cases/giraffe36_top_plate.jscad \
	output/cases/giraffe36_bottom_case.jscad \
	output/cases/giraffe36_bottom_case.stl \
	output/cases/giraffe36_top_case.jscad \
	output/cases/giraffe36_top_case.stl \
	output/pcbs/giraffe36_pcb_front.jpg \
	output/pcbs/giraffe36_pcb_back.jpg \
	img/giraffe36_pcb_front_small.jpg

output/cases/giraffe36_bottom_plate.jscad: output/pcbs/giraffe36_pcb.kicad_pcb
output/cases/giraffe36_top_plate.jscad: output/pcbs/giraffe36_pcb.kicad_pcb
output/cases/giraffe36_case.jscad: output/pcbs/giraffe36_pcb.kicad_pcb

output/pcbs/giraffe36_pcb.kicad_pcb: giraffe36.yaml
	npm run gen

output/cases/giraffe36_bottom_case.stl: output/cases/giraffe36_bottom_case.jscad
	npx @jscad/cli@1 $< -of stla -o $@

output/cases/giraffe36_top_case.stl: output/cases/giraffe36_top_case.jscad
	npx @jscad/cli@1 $< -of stla -o $@

output/pcbs/giraffe36_pcb_front.jpg: output/pcbs/giraffe36_pcb.kicad_pcb 
	pcbdraw plot \
		--side front \
		--style gatema-green \
		$< $@
	mkdir -p img 
	cp $@ img/$(notdir $@)

output/pcbs/giraffe36_pcb_back.jpg: output/pcbs/giraffe36_pcb.kicad_pcb
	pcbdraw plot \
		--side back \
		--style gatema-green \
		$< $@
	mkdir -p img 
	cp $@ img/$(notdir $@)

img/giraffe36_pcb_front_small.jpg: output/pcbs/giraffe36_pcb_front.jpg
	mkdir -p img
	convert $< -resize 50% $@

clean:
	rm -rf output/pcbs/giraffe36_pcb.kicad_pcb \
		output/cases/giraffe36_bottom_plate.jscad \
		output/cases/giraffe36_top_plate.jscad \
		output/cases/giraffe36_bottom_case.jscad \
		output/cases/giraffe36_bottom_case.stl \
		output/cases/giraffe36_top_case.jscad \
		output/cases/giraffe36_top_case.stl \
		output/pcbs/giraffe36_pcb_front.jpg \
		output/pcbs/giraffe36_pcb_back.jpg \
		img/giraffe36_pcb_front_small.jpg
