import { createContext,useState } from "react";

export const GoogleContext = createContext();

const GoogleProvider = (props) =>{
    const [state, setState] = useState({
        user:{}
    })

    return(
        <>
        <GoogleContext.Provider value={{state, setState}}>
            {props.children}
        </GoogleContext.Provider>
        </>
    )
}

export default GoogleProvider;