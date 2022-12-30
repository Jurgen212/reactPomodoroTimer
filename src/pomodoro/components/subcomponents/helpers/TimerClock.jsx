

import React, { useContext, useEffect, useState } from 'react'
import { ClockContext } from '../../../context/ClockContext';


const titulos = {
    tiempoEnfoque       : 'Tiempo de enfoque :)',
    tiempoDescanso      : 'Tomate unos minutos para descansar :p',
    tiempoDescansoLargo : 'Preparate algo de tomar que ya regresamos :D'
}

export const TimerClock = ({ corriendoTiempo }) => {

    const { minutos  } = useContext( ClockContext );


    //Los siguientes 3 estados vienen desde el ContextGlobal, permite conectar la configuracion con el actual relog
    const { minutosFocus, minutosDescanso, minutosDescansoLargo } = minutos;

    //Control sobre cuando se descansa y cuando se trabaja
    const [ numeroPomodoros, setNumeroPomodoros] = useState( 2 )


    //Los estados que visualmente se van a mostrar
    const [ minutosTemporizador, setMinutosTemporizador] = useState( )
    const [ segundos, setSegundos] = useState( 59 )
    
    const [ titulo, setTitulo ] = useState( titulos.tiempoEnfoque )


    //Cambiar entre descanso, trabajo y descansoLargo
  const cambiarModo = ()=>{

    //Cuando entramos en numeros pares, significa que estamos descansando, si pasa por un impar significa que esta estudiando y cada cuatro momentos de estudio, entra en el descanso largo que cae en el momento 8
    if( numeroPomodoros === 8 ){

      setTitulo( titulos.tiempoDescansoLargo )
      setMinutosTemporizador( minutosDescansoLargo )
      setNumeroPomodoros( 1 )
    }
    else if( ( numeroPomodoros % 2  ) === 0 ){

      setTitulo( titulos.tiempoDescanso )
      setMinutosTemporizador( minutosDescanso )
      setNumeroPomodoros( numeroPomodoros + 1 )
    }
    else{
      
      setTitulo( titulos.tiempoEnfoque )
      setMinutosTemporizador( minutosFocus )
      setNumeroPomodoros( numeroPomodoros + 1 )
    }
  }


  //Contar minutos hacia atras
  const reducirMinuto = () =>{

    if( minutosTemporizador !== 0 ){
      setSegundos( 59 )
      setMinutosTemporizador( minutosTemporizador - 1 );
    }else{
      cambiarModo()
    }
  }

  //Contar los segundos hacia atras
  const reducirSegundos = () =>{

    if( segundos !== 0 ){

      setTimeout(() => {
        setSegundos( segundos - 1 )  
      }, 1000 );
      
    }
    else{
      reducirMinuto();
    }
    
  }

    //Al cargar el componente, que reciba los datos que el usuario puso en las configuraciones, los cargados en el contexto
    //Se ejecuta cuando empieza el componente o al cambiar los segundos
    useEffect(() => {
      iniciarDetenerTimer()
    }, [[], segundos ])


    //Si esta corriendo el tiempo, entonces empieza el temporizador, de lo contrario se reestablecen los valores
  const iniciarDetenerTimer = () =>{

    if( corriendoTiempo ){
  
      reducirSegundos()
    }
    else if( !corriendoTiempo ){
      
      setTitulo( titulos.tiempoEnfoque )
      setMinutosTemporizador( minutosFocus - 1)
      setSegundos( 59 )
    }
  }




  return ( 
  <>
    <span className='title'>{ titulo }</span>
    <p className='clock'>{ minutosTemporizador } : { segundos }</p>
  </>
  )
}
