function giraffe36_top_plate_extrude_2_outline_fn(){
    return new CSG.Path2D([[237.925,-99.5547624],[200.2659855,-94.344675]]).appendArc([199.5807671,-94.2975],{"radius":5,"clockwise":false,"large":false}).appendPoint([181.4774463,-94.2975]).appendArc([180.2897952,-94.4405992],{"radius":5,"clockwise":false,"large":false}).appendPoint([145.7348489,-102.8902717]).appendArc([141.9225,-107.7471724],{"radius":5,"clockwise":false,"large":false}).appendPoint([141.9225,-159.4046567]).appendArc([145.176799,-164.0900092],{"radius":5,"clockwise":false,"large":false}).appendPoint([210.0485274,-188.2603676]).appendArc([210.96311,-188.7121765],{"radius":5,"clockwise":true,"large":false}).appendPoint([248.8703244,-212.5323986]).appendArc([255.3608302,-211.5127931],{"radius":5,"clockwise":false,"large":false}).appendPoint([266.5567604,-198.1700029]).appendPoint([237.925,-169.06875]).appendPoint([237.925,-99.5547624]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[205.1405107,-182.7774573],[218.2962073,-187.5657393]]).appendPoint([223.0844893,-174.4100427]).appendPoint([209.9287927,-169.6217607]).appendPoint([205.1405107,-182.7774573]).close().innerToCAG()
.union(
    new CSG.Path2D([[224.1647746,-190.3203943],[236.2891302,-197.3203943]]).appendPoint([243.2891302,-185.1960387]).appendPoint([231.1647746,-178.1960387]).appendPoint([224.1647746,-190.3203943]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.4,-118.91875],[235.4,-118.91875]]).appendPoint([235.4,-104.91875]).appendPoint([221.4,-104.91875]).appendPoint([221.4,-118.91875]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.4,-137.96875],[235.4,-137.96875]]).appendPoint([235.4,-123.96875]).appendPoint([221.4,-123.96875]).appendPoint([221.4,-137.96875]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.4,-157.01875],[235.4,-157.01875]]).appendPoint([235.4,-143.01875]).appendPoint([221.4,-143.01875]).appendPoint([221.4,-157.01875]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.4,-116.5375],[216.4,-116.5375]]).appendPoint([216.4,-102.5375]).appendPoint([202.4,-102.5375]).appendPoint([202.4,-116.5375]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.4,-135.5875],[216.4,-135.5875]]).appendPoint([216.4,-121.5875]).appendPoint([202.4,-121.5875]).appendPoint([202.4,-135.5875]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.4,-154.6375],[216.4,-154.6375]]).appendPoint([216.4,-140.6375]).appendPoint([202.4,-140.6375]).appendPoint([202.4,-154.6375]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.4,-111.775],[197.4,-111.775]]).appendPoint([197.4,-97.775]).appendPoint([183.4,-97.775]).appendPoint([183.4,-111.775]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.4,-130.825],[197.4,-130.825]]).appendPoint([197.4,-116.825]).appendPoint([183.4,-116.825]).appendPoint([183.4,-130.825]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.4,-149.875],[197.4,-149.875]]).appendPoint([197.4,-135.875]).appendPoint([183.4,-135.875]).appendPoint([183.4,-149.875]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.4,-116.5375],[178.4,-116.5375]]).appendPoint([178.4,-102.5375]).appendPoint([164.4,-102.5375]).appendPoint([164.4,-116.5375]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.4,-135.5875],[178.4,-135.5875]]).appendPoint([178.4,-121.5875]).appendPoint([164.4,-121.5875]).appendPoint([164.4,-135.5875]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.4,-154.6375],[178.4,-154.6375]]).appendPoint([178.4,-140.6375]).appendPoint([164.4,-140.6375]).appendPoint([164.4,-154.6375]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.4,-121.3],[159.4,-121.3]]).appendPoint([159.4,-107.3]).appendPoint([145.4,-107.3]).appendPoint([145.4,-121.3]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.4,-140.35],[159.4,-140.35]]).appendPoint([159.4,-126.35]).appendPoint([145.4,-126.35]).appendPoint([145.4,-140.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.4,-159.4],[159.4,-159.4]]).appendPoint([159.4,-145.4]).appendPoint([145.4,-145.4]).appendPoint([145.4,-159.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[241.4066241,-200.952605],[252.1312463,-209.9516316]]).appendPoint([261.1302729,-199.2270094]).appendPoint([250.4056507,-190.2279828]).appendPoint([241.4066241,-200.952605]).close().innerToCAG()
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

        