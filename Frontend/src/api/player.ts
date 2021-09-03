import {Player} from "../models/player";
import {City, CityResource} from "../models/city";

export async function getPlayer():Promise<Player>{
    return {
        name:"John Doe",
        pos: {x:895,y:600},
        inventory: {gold: 250, resources: []},
        party: {members:[]},
        vessel:0
    }
}

export async function getCities():Promise<City[]>{
    return [
        {
            id:"0",
            pos:{x:895,y:600},
            name:"Venzor",
            population: 5000,
            resources:randomRecourses()

        },
        {
            id:"1",
            pos:{x:840,y:595},
            name:"Night River",
            population: 7000,
            resources:randomRecourses()

        },{
            id:"2",
            pos:{x:800,y:575},
            name:"Shifving",
            population: 11000,
            resources:randomRecourses()

        },{
            id:"3",
            pos:{x:860,y:560},
            name:"Hisbert",
            population: 17000,
            resources:randomRecourses()

        },{
            id:"4",
            pos:{x:900,y:560},
            name:"Treyvale",
            population: 4500,
            resources:randomRecourses()

        },{
            id:"5",
            pos:{x:925,y:635},
            name:"Braishire",
            population: 550,
            resources:randomRecourses()

        }
    ]
}



export function randomRecourses():CityResource[]{
    return [
        {
            type:"grain",
            amount:100,
            price:24 * ((Math.random()/0.5)+0.75)
        },{
            type:"cloth",
            amount:100,
            price:40* ((Math.random()/0.5)+0.75)
        },{
            type:"coal",
            amount:100,
            price:91* ((Math.random()/0.5)+0.75)
        },{
            type:"spices",
            amount:100,
            price:136* ((Math.random()/0.5)+0.75)
        },{
            type:"timber",
            amount:100,
            price:174* ((Math.random()/0.5)+0.75)
        },{
            type:"stone",
            amount:100,
            price:220* ((Math.random()/0.5)+0.75)
        },{
            type:"iron",
            amount:100,
            price:321* ((Math.random()/0.5)+0.75)
        },{
            type:"bronze",
            amount:100,
            price:1500* ((Math.random()/0.5)+0.75)
        },{
            type:"silver",
            amount:100,
            price:3700* ((Math.random()/0.5)+0.75)
        },
    ]
}