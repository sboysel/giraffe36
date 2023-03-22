function giraffe36_top_plate_extrude_2_outline_fn(){
    return new CSG.Path2D([[242.6875,-96.108705],[191.198643,-88.6974558]]).appendArc([189.605737,-88.7245991],{"radius":5,"clockwise":false,"large":false}).appendPoint([164.3199497,-93.2483993]).appendArc([163.2738356,-93.5563641],{"radius":5,"clockwise":false,"large":false}).appendPoint([144.043333,-101.5866376]).appendArc([140.97,-106.2005247],{"radius":5,"clockwise":false,"large":false}).appendPoint([140.97,-160.108404]).appendArc([144.5350394,-164.8980687],{"radius":5,"clockwise":false,"large":false}).appendPoint([209.5521762,-184.3768902]).appendArc([210.7785621,-184.9336793],{"radius":5,"clockwise":true,"large":false}).appendPoint([248.2577161,-208.4980419]).appendArc([254.7492848,-207.4791045],{"radius":5,"clockwise":false,"large":false}).appendPoint([267.2692629,-192.5583756]).appendArc([268.3645721,-190.2041701],{"radius":5,"clockwise":false,"large":false}).appendPoint([242.6875,-159.54375]).appendPoint([242.6875,-96.108705]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[205.1405107,-178.0149573],[218.2962073,-182.8032393]]).appendPoint([223.0844893,-169.6475427]).appendPoint([209.9287927,-164.8592607]).appendPoint([205.1405107,-178.0149573]).close().innerToCAG()
.union(
    new CSG.Path2D([[223.75233,-185.3197693],[235.8766856,-192.3197693]]).appendPoint([242.8766856,-180.1954137]).appendPoint([230.75233,-173.1954137]).appendPoint([223.75233,-185.3197693]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.4,-114.15625],[235.4,-114.15625]]).appendPoint([235.4,-100.15625]).appendPoint([221.4,-100.15625]).appendPoint([221.4,-114.15625]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.4,-133.20625],[235.4,-133.20625]]).appendPoint([235.4,-119.20625]).appendPoint([221.4,-119.20625]).appendPoint([221.4,-133.20625]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.4,-152.25625],[235.4,-152.25625]]).appendPoint([235.4,-138.25625]).appendPoint([221.4,-138.25625]).appendPoint([221.4,-152.25625]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.4,-111.775],[216.4,-111.775]]).appendPoint([216.4,-97.775]).appendPoint([202.4,-97.775]).appendPoint([202.4,-111.775]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.4,-130.825],[216.4,-130.825]]).appendPoint([216.4,-116.825]).appendPoint([202.4,-116.825]).appendPoint([202.4,-130.825]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.4,-149.875],[216.4,-149.875]]).appendPoint([216.4,-135.875]).appendPoint([202.4,-135.875]).appendPoint([202.4,-149.875]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.4,-107.0125],[197.4,-107.0125]]).appendPoint([197.4,-93.0125]).appendPoint([183.4,-93.0125]).appendPoint([183.4,-107.0125]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.4,-126.0625],[197.4,-126.0625]]).appendPoint([197.4,-112.0625]).appendPoint([183.4,-112.0625]).appendPoint([183.4,-126.0625]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.4,-145.1125],[197.4,-145.1125]]).appendPoint([197.4,-131.1125]).appendPoint([183.4,-131.1125]).appendPoint([183.4,-145.1125]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.4,-111.775],[178.4,-111.775]]).appendPoint([178.4,-97.775]).appendPoint([164.4,-97.775]).appendPoint([164.4,-111.775]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.4,-130.825],[178.4,-130.825]]).appendPoint([178.4,-116.825]).appendPoint([164.4,-116.825]).appendPoint([164.4,-130.825]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.4,-149.875],[178.4,-149.875]]).appendPoint([178.4,-135.875]).appendPoint([164.4,-135.875]).appendPoint([164.4,-149.875]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.4,-121.3],[159.4,-121.3]]).appendPoint([159.4,-107.3]).appendPoint([145.4,-107.3]).appendPoint([145.4,-121.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.4,-140.35],[159.4,-140.35]]).appendPoint([159.4,-126.35]).appendPoint([145.4,-126.35]).appendPoint([145.4,-140.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.4,-159.4],[159.4,-159.4]]).appendPoint([159.4,-145.4]).appendPoint([145.4,-145.4]).appendPoint([145.4,-159.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[240.6769668,-195.5778498],[251.401589,-204.5768764]]).appendPoint([260.4006156,-193.8522542]).appendPoint([249.6759934,-184.8532276]).appendPoint([240.6769668,-195.5778498]).close().innerToCAG()
)).extrude({ offset: [0, 0, 2] });
}




                function giraffe36_top_case_case_fn() {
                    

                // creating part 0 of case giraffe36_top_case
                let giraffe36_top_case__part_0 = giraffe36_top_plate_extrude_2_outline_fn();

                // make sure that rotations are relative
                let giraffe36_top_case__part_0_bounds = giraffe36_top_case__part_0.getBounds();
                let giraffe36_top_case__part_0_x = giraffe36_top_case__part_0_bounds[0].x + (giraffe36_top_case__part_0_bounds[1].x - giraffe36_top_case__part_0_bounds[0].x) / 2
                let giraffe36_top_case__part_0_y = giraffe36_top_case__part_0_bounds[0].y + (giraffe36_top_case__part_0_bounds[1].y - giraffe36_top_case__part_0_bounds[0].y) / 2
                giraffe36_top_case__part_0 = translate([-giraffe36_top_case__part_0_x, -giraffe36_top_case__part_0_y, 0], giraffe36_top_case__part_0);
                giraffe36_top_case__part_0 = rotate([0,0,0], giraffe36_top_case__part_0);
                giraffe36_top_case__part_0 = translate([giraffe36_top_case__part_0_x, giraffe36_top_case__part_0_y, 0], giraffe36_top_case__part_0);

                giraffe36_top_case__part_0 = translate([0,0,0], giraffe36_top_case__part_0);
                let result = giraffe36_top_case__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return giraffe36_top_case_case_fn();
            }

        