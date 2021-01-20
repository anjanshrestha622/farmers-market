// data layer set garya
import React , { createContext,useContext,useReducer } from "react";


// yo datat layer ho 
export const StateContext= createContext();

// provider banayo 

export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// component vitra yesari use hunxa
 export  const useStateValue =() => useContext(StateContext);