import {ResourceType} from "./general";

export enum VesselType {
    "none" ,
    "horse" ,
    "Cart" ,
    "wagon" ,
    "coveredWagon" ,
    "medivalTank" ,
    "Vanguard"
}




export interface Vessel{
    id:VesselType
    range:number
    capacity:number
    cost:{
        resource:ResourceType,
        amount:number
    }[]
}

export const vessels:Vessel[] = [
    {
        id:0,
        range:50,
        capacity:10,
        cost:[]
    }
]