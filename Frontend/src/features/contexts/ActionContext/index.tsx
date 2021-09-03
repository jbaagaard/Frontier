import {createContext, ReactNode, useState} from "react";

type ActionType = "TownOnHover"

export interface ActionContextValues {
    actions:ActionType[]
    addAction:(action:ActionType)=>void
    removeAction:(action:ActionType)=>void
}

export const ActionContext = createContext<ActionContextValues>(null!);

export interface ActionProviderProps {
    children?:ReactNode
}

export function ActionProvider({children}:ActionProviderProps) {
    const [actions,setActions] = useState<ActionType[]>([])

    const values:ActionContextValues = {
        actions:actions,
        addAction:(action:ActionType)=>{setActions([...actions,action])},
        removeAction:((action:ActionType) => {setActions(actions.filter(a=>a!==action))})
    }
    return (
        <ActionContext.Provider value={values}>
            {children}
        </ActionContext.Provider>
    )
}