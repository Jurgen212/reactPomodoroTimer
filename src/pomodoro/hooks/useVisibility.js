import { useState } from "react"


export const useVisibility = () =>{

    const [ visibilityUser  , setVisibilityUser ] = useState( 'none' );
    const [ visibilityConfig, setVisibilityConfig ] = useState( 'none' );

    const activateVisibilityUser = () =>{

        setVisibilityUser( 'flex')
        setVisibilityConfig( 'none')
    }

    const activateVisibilityOptions = () =>{
        setVisibilityUser( 'none' )
        setVisibilityConfig( 'flex'  )
    }

    const closeOptions = () =>{

        setVisibilityUser   ( 'none')
        setVisibilityConfig ( 'none')
    }

    return {
        visibilityUser,
        visibilityConfig,
        activateVisibilityUser,
        activateVisibilityOptions,
        closeOptions
    }
}