function otter36_bottom_plate_extrude_3_outline_fn(){
    return new CSG.Path2D([[174.7899329,-88.7371456],[142.1988534,-102.3564802]]).appendArc([140.97,-104.2018346],{"radius":2,"clockwise":false,"large":false}).appendPoint([140.97,-162.188045]).appendArc([142.5805196,-164.1497547],{"radius":2,"clockwise":false,"large":false}).appendPoint([221.4650307,-179.8115922]).appendArc([221.8299036,-179.9210193],{"radius":2,"clockwise":true,"large":false}).appendPoint([265.7058186,-197.7897533]).appendArc([268.1922228,-196.9374707],{"radius":2,"clockwise":false,"large":false}).appendPoint([278.3956841,-179.2645573]).appendArc([278.6386217,-177.9492465],{"radius":2,"clockwise":false,"large":false}).appendPoint([266.7429035,-103.4389558]).appendArc([264.9669225,-101.7641922],{"radius":2,"clockwise":false,"large":false}).appendPoint([228.6038481,-98.1278848]).appendArc([228.2045173,-98.0462106],{"radius":2,"clockwise":true,"large":false}).appendPoint([198.3121578,-88.6740998]).appendArc([197.7138196,-88.5825],{"radius":2,"clockwise":false,"large":false}).appendPoint([175.5610795,-88.5825]).appendArc([174.7899329,-88.7371456],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}




                function otter36_bottom_case_case_fn() {
                    

                // creating part 0 of case otter36_bottom_case
                let otter36_bottom_case__part_0 = otter36_bottom_plate_extrude_3_outline_fn();

                // make sure that rotations are relative
                let otter36_bottom_case__part_0_bounds = otter36_bottom_case__part_0.getBounds();
                let otter36_bottom_case__part_0_x = otter36_bottom_case__part_0_bounds[0].x + (otter36_bottom_case__part_0_bounds[1].x - otter36_bottom_case__part_0_bounds[0].x) / 2
                let otter36_bottom_case__part_0_y = otter36_bottom_case__part_0_bounds[0].y + (otter36_bottom_case__part_0_bounds[1].y - otter36_bottom_case__part_0_bounds[0].y) / 2
                otter36_bottom_case__part_0 = translate([-otter36_bottom_case__part_0_x, -otter36_bottom_case__part_0_y, 0], otter36_bottom_case__part_0);
                otter36_bottom_case__part_0 = rotate([0,0,0], otter36_bottom_case__part_0);
                otter36_bottom_case__part_0 = translate([otter36_bottom_case__part_0_x, otter36_bottom_case__part_0_y, 0], otter36_bottom_case__part_0);

                otter36_bottom_case__part_0 = translate([0,0,0], otter36_bottom_case__part_0);
                let result = otter36_bottom_case__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return otter36_bottom_case_case_fn();
            }

        