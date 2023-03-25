function giraffe36_bottom_plate_extrude_3_outline_fn(){
    return new CSG.Path2D([[268.4378742,-193.9989431],[266.5909702,-108.5095745]]).appendArc([262.3349286,-103.6730508],{"radius":5,"clockwise":false,"large":false}).appendPoint([200.2943241,-94.3529818]).appendArc([199.5515321,-94.2975],{"radius":5,"clockwise":false,"large":false}).appendPoint([181.4774463,-94.2975]).appendArc([180.2897952,-94.4405992],{"radius":5,"clockwise":false,"large":false}).appendPoint([145.7348489,-102.8902717]).appendArc([141.9225,-107.7471724],{"radius":5,"clockwise":false,"large":false}).appendPoint([141.9225,-159.4046567]).appendArc([145.176799,-164.0900092],{"radius":5,"clockwise":false,"large":false}).appendPoint([210.0485274,-188.2603676]).appendArc([210.96311,-188.7121765],{"radius":5,"clockwise":true,"large":false}).appendPoint([248.8703244,-212.5323986]).appendArc([255.3608302,-211.5127931],{"radius":5,"clockwise":false,"large":false}).appendPoint([267.2692628,-197.3208757]).appendArc([268.4378742,-193.9989431],{"radius":5,"clockwise":false,"large":false}).close().innerToCAG()
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

        