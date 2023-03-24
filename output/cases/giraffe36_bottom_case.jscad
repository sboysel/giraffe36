function giraffe36_bottom_plate_extrude_3_outline_fn(){
    return new CSG.Path2D([[267.7233338,-188.6463605],[266.558521,-103.7990415]]).appendArc([262.2815581,-98.9201621],{"radius":5,"clockwise":false,"large":false}).appendPoint([198.379377,-89.5874857]).appendArc([197.6568111,-89.535],{"radius":5,"clockwise":false,"large":false}).appendPoint([174.3411915,-89.535]).appendArc([172.2667086,-89.9856571],{"radius":5,"clockwise":false,"large":false}).appendPoint([144.8480171,-102.4884754]).appendArc([141.9225,-107.0378183],{"radius":5,"clockwise":false,"large":false}).appendPoint([141.9225,-159.1686177]).appendArc([145.471854,-163.9535551],{"radius":5,"clockwise":false,"large":false}).appendPoint([209.8936957,-183.4842795]).appendArc([211.0920063,-184.0285768],{"radius":5,"clockwise":true,"large":false}).appendPoint([248.144444,-207.1737378]).appendArc([254.6236229,-206.1470357],{"radius":5,"clockwise":false,"large":false}).appendPoint([266.554027,-191.9289336]).appendArc([267.7233338,-188.6463605],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
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

        