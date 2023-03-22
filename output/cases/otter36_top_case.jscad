function otter36_top_plate_extrude_2_outline_fn(){
    return new CSG.Path2D([[174.7899329,-88.7371456],[142.1988534,-102.3564802]]).appendArc([140.97,-104.2018346],{"radius":2,"clockwise":false,"large":false}).appendPoint([140.97,-162.188045]).appendArc([142.5805196,-164.1497547],{"radius":2,"clockwise":false,"large":false}).appendPoint([221.4650307,-179.8115922]).appendArc([221.8299036,-179.9210193],{"radius":2,"clockwise":true,"large":false}).appendPoint([265.7058186,-197.7897533]).appendArc([268.1922228,-196.9374707],{"radius":2,"clockwise":false,"large":false}).appendPoint([278.3956841,-179.2645573]).appendArc([278.6386217,-177.9492465],{"radius":2,"clockwise":false,"large":false}).appendPoint([278.3115418,-175.9005416]).appendPoint([242.6875,-161.925]).appendPoint([242.6875,-99.53625]).appendPoint([228.6038481,-98.1278848]).appendArc([228.2045173,-98.0462106],{"radius":2,"clockwise":true,"large":false}).appendPoint([198.3121578,-88.6740998]).appendArc([197.7138196,-88.5825],{"radius":2,"clockwise":false,"large":false}).appendPoint([175.5610795,-88.5825]).appendArc([174.7899329,-88.7371456],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[235.1258398,-178.232544],[248.2815364,-183.020826]]).appendPoint([253.0698184,-169.8651294]).appendPoint([239.9141218,-165.0768474]).appendPoint([235.1258398,-178.232544]).close().innerToCAG()
.union(
    new CSG.Path2D([[253.5746503,-185.3958489],[265.6990059,-192.3958489]]).appendPoint([272.6990059,-180.2714933]).appendPoint([260.5746503,-173.2714933]).appendPoint([253.5746503,-185.3958489]).close().innerToCAG()
).union(
    new CSG.Path2D([[215.5283085,-174.270617],[229.315617,-176.7016915]]).appendPoint([231.7466915,-162.914383]).appendPoint([217.959383,-160.4833085]).appendPoint([215.5283085,-174.270617]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.4,-116.5375],[235.4,-116.5375]]).appendPoint([235.4,-102.5375]).appendPoint([221.4,-102.5375]).appendPoint([221.4,-116.5375]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.4,-135.5875],[235.4,-135.5875]]).appendPoint([235.4,-121.5875]).appendPoint([221.4,-121.5875]).appendPoint([221.4,-135.5875]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.4,-154.6375],[235.4,-154.6375]]).appendPoint([235.4,-140.6375]).appendPoint([221.4,-140.6375]).appendPoint([221.4,-154.6375]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.4,-114.6325],[216.4,-114.6325]]).appendPoint([216.4,-100.6325]).appendPoint([202.4,-100.6325]).appendPoint([202.4,-114.6325]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.4,-133.6825],[216.4,-133.6825]]).appendPoint([216.4,-119.6825]).appendPoint([202.4,-119.6825]).appendPoint([202.4,-133.6825]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.4,-152.7325],[216.4,-152.7325]]).appendPoint([216.4,-138.7325]).appendPoint([202.4,-138.7325]).appendPoint([202.4,-152.7325]).close().innerToCAG()
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
)).extrude({ offset: [0, 0, 2] });
}




                function otter36_top_case_case_fn() {
                    

                // creating part 0 of case otter36_top_case
                let otter36_top_case__part_0 = otter36_top_plate_extrude_2_outline_fn();

                // make sure that rotations are relative
                let otter36_top_case__part_0_bounds = otter36_top_case__part_0.getBounds();
                let otter36_top_case__part_0_x = otter36_top_case__part_0_bounds[0].x + (otter36_top_case__part_0_bounds[1].x - otter36_top_case__part_0_bounds[0].x) / 2
                let otter36_top_case__part_0_y = otter36_top_case__part_0_bounds[0].y + (otter36_top_case__part_0_bounds[1].y - otter36_top_case__part_0_bounds[0].y) / 2
                otter36_top_case__part_0 = translate([-otter36_top_case__part_0_x, -otter36_top_case__part_0_y, 0], otter36_top_case__part_0);
                otter36_top_case__part_0 = rotate([0,0,0], otter36_top_case__part_0);
                otter36_top_case__part_0 = translate([otter36_top_case__part_0_x, otter36_top_case__part_0_y, 0], otter36_top_case__part_0);

                otter36_top_case__part_0 = translate([0,0,0], otter36_top_case__part_0);
                let result = otter36_top_case__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return otter36_top_case_case_fn();
            }

        