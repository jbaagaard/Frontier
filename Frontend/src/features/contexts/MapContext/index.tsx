import {createContext, ReactNode, useEffect, useState} from "react";
import {City} from "../../../models/city";
import {getCities} from "../../../api/player";


export interface MapContextValues {
    cities:City[]
    targetCity:City|undefined
    setTargetCity:(city:City|undefined)=>void
    scale:number
    setScale:(scale:number)=>void
}

export const MapContext = createContext<MapContextValues>(null!);

export interface MapProviderProps {
    children?:ReactNode
}

export function MapProvider({children}:MapProviderProps) {
    const [targetCity,setTargetCity] = useState<City|undefined>(undefined)
    const [scale,setScale] = useState<number>(5)
    const [cities,setCities] = useState<City[]>([])

    useEffect(()=>{
        (async ()=>{
            setCities(await getCities())
        })()
    },[])

    const values:MapContextValues = {
        targetCity:targetCity,
        setTargetCity:(city:City|undefined)=>{setTargetCity(city)},
        scale:scale,
        setScale:(scale:number)=>{setScale(scale)},
        cities:cities
    }
    return (
        <MapContext.Provider value={values}>
            {children}
        </MapContext.Provider>
    )
}