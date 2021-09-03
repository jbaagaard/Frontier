import {Pos} from "../../models/general";

export function calculateDistance(pos1:Pos,pos2:Pos){
    const a = pos1.x - pos2.x;
    const b = pos1.y - pos2.y;
    return Math.sqrt( a*a + b*b )
}