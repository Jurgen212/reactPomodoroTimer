import React, { useState } from 'react'

export const useShowOptions = () => {

    const [ cambioBoton, setCambioBoton ] = useState( true )
    const [ botonStop , setBotonStop    ] = useState( 'none' )
    const [ botonStart, setBotonStart   ] = useState(  'flex' )

    const cambioVisibilidadBoton = () =>{
        
        if( cambioBoton ){

            setBotonStop('flex')
            setBotonStart('none')
            setCambioBoton( false )
        }
        else{

            setBotonStop('none')
            setBotonStart('flex')
            setCambioBoton( true )
        }
    }

  return {
    botonStop,
    botonStart,
    cambioVisibilidadBoton
  }


}
