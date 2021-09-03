import {Pos, ResourceType} from "./general";
import {VesselType} from "./Vessel";


export interface Player {
    name:string
    pos:Pos
    inventory:{
        gold:number
        resources:{
            type:ResourceType
            amount:number
            averageBuyPrice:number
        }[]
    }
    party:Party
    vessel:VesselType
}

export interface PartyMember {
    name:string;
    price:number;
    sellingSkill:number;
    proficiency:{
        type:ResourceType
        multiplier:number
    }[]
}

export interface Party {
    members:PartyMember[]
}