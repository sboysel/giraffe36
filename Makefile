all: output/pcbs/otter36_pcb.kicad_pcb \
	output/cases/otter36_bottom_plate.jscad \
	output/cases/otter36_top_plate.jscad \
	output/cases/otter36_bottom_case.jscad \
	output/cases/otter36_bottom_case.stl \
	output/cases/otter36_top_case.jscad \
	output/cases/otter36_top_case.stl \
	output/pcbs/otter36_pcb_front.jpg \
	output/pcbs/otter36_pcb_back.jpg \
	img/otter36_pcb_front_small.jpg

output/cases/otter36_bottom_plate.jscad: output/pcbs/otter36_pcb.kicad_pcb
output/cases/otter36_top_plate.jscad: output/pcbs/otter36_pcb.kicad_pcb
output/cases/otter36_case.jscad: output/pcbs/otter36_pcb.kicad_pcb

output/pcbs/otter36_pcb.kicad_pcb: otter36.yaml
	npm run gen

output/cases/otter36_bottom_case.stl: output/cases/otter36_bottom_case.jscad
	openjscad $< -of stl

output/cases/otter36_top_case.stl: output/cases/otter36_top_case.jscad
	openjscad $< -of stl

output/pcbs/otter36_pcb_front.jpg: output/pcbs/otter36_pcb.kicad_pcb 
	pcbdraw plot \
		--side front \
		--style oshpark-purple \
		$< $@
	mkdir -p img 
	cp $@ img/$(notdir $@)

output/pcbs/otter36_pcb_back.jpg: output/pcbs/otter36_pcb.kicad_pcb
	pcbdraw plot \
		--side back \
		--style oshpark-purple \
		$< $@
	mkdir -p img 
	cp $@ img/$(notdir $@)

img/otter36_pcb_front_small.jpg: output/pcbs/otter36_pcb_front.jpg
	mkdir -p img
	convert $< -resize 25% $@

# output/pcbs/otter36_pcb_front.svg: output/pcbs/otter36_pcb.kicad_pcb 
# 	kicad-cli pcb export svg -l '*' -o $@ $<

# output/pcbs/otter36_pcb_front.pdf: output/pcbs/otter36_pcb.kicad_pcb 
# 	kicad-cli pcb export pdf -l '*' -o $@ $<

clean:
	rm -rf output/pcbs/otter36_pcb.kicad_pcb \
		output/cases/otter36_bottom_plate.jscad \
		output/cases/otter36_top_plate.jscad \
		output/cases/otter36_bottom_case.jscad \
		output/cases/otter36_bottom_case.stl \
		output/cases/otter36_top_case.jscad \
		output/cases/otter36_top_case.stl \
		output/pcbs/otter36_pcb_front.jpg \
		output/pcbs/otter36_pcb_back.jpg \
		img/otter36_pcb_front_small.jpg
