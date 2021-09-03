import {Pos, ResourceType} from "./general";

export interface CityResource{
    type:ResourceType,
    amount:number,
    price:number
}

export interface City {
    id:string
    pos:Pos
    name:string
    population:number
    resources:CityResource[]
}