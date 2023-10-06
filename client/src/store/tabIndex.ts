import {createContext} from 'react'

export const defaultTabIndex = 'home'

export const reducerTabIndex = (_, action) => {
    switch(action.type){
        case 'change':
            return action.payload
        default:
            throw new Error()
    }
}

export const TabIndexContext = createContext({tabIndex: defaultTabIndex, dispatch: (_props: {type: string, payload: string}) => {}})
