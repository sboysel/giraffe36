function giraffe36_bottom_plate_extrude_3_outline_fn(){
    return new CSG.Path2D([[268.4378743,-189.236443],[266.5915397,-103.7734355]]).appendArc([262.3050592,-98.9324348],{"radius":5,"clockwise":false,"large":false}).appendPoint([191.198643,-88.6974558]).appendArc([189.605737,-88.7245991],{"radius":5,"clockwise":false,"large":false}).appendPoint([164.3199497,-93.2483993]).appendArc([163.2738356,-93.5563641],{"radius":5,"clockwise":false,"large":false}).appendPoint([144.043333,-101.5866376]).appendArc([140.97,-106.2005247],{"radius":5,"clockwise":false,"large":false}).appendPoint([140.97,-160.108404]).appendArc([144.5350394,-164.8980687],{"radius":5,"clockwise":false,"large":false}).appendPoint([209.5521762,-184.3768902]).appendArc([210.7785621,-184.9336793],{"radius":5,"clockwise":true,"large":false}).appendPoint([248.2577161,-208.4980419]).appendArc([254.7492848,-207.4791045],{"radius":5,"clockwise":false,"large":false}).appendPoint([267.2692629,-192.5583756]).appendArc([268.4378743,-189.236443],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}




                function giraffe36_bottom_case_case_fn() {
                    

                // creating part 0 of case giraffe36_bottom_case
                let giraffe36_bottom_case__part_0 = giraffe36_bottom_plate_extrude_3_outline_fn();

                // make sure that rotations are relative
                let giraffe36_bottom_case__part_0_bounds = giraffe36_bottom_case__part_0.getBounds();
                let giraffe36_bottom_case__part_0_x = giraffe36_bottom_case__part_0_bounds[0].x + (giraffe36_bottom_case__part_0_bounds[1].x - giraffe36_bottom_case__part_0_bounds[0].x) / 2
                let giraffe36_bottom_case__part_0_y = giraffe36_bottom_case__part_0_bounds[0].y + (giraffe36_bottom_case__part_0_bounds[1].y - giraffe36_bottom_case__part_0_bounds[0].y) / 2
                giraffe36_bottom_case__part_0 = translate([-giraffe36_bottom_case__part_0_x, -giraffe36_bottom_case__part_0_y, 0], giraffe36_bottom_case__part_0);
                giraffe36_bottom_case__part_0 = rotate([0,0,0], giraffe36_bottom_case__part_0);
                giraffe36_bottom_case__part_0 = translate([giraffe36_bottom_case__part_0_x, giraffe36_bottom_case__part_0_y, 0], giraffe36_bottom_case__part_0);

                giraffe36_bottom_case__part_0 = translate([0,0,0], giraffe36_bottom_case__part_0);
                let result = giraffe36_bottom_case__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return giraffe36_bottom_case_case_fn();
            }

        