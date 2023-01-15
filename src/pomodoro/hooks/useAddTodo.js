import { getToolbarUtilityClass } from '@mui/material';
import React, { useEffect, useState } from 'react'

import { useSelector } from "react-redux";
import { addTodoByUser, getTodosByUser } from "../../firebase"


// const escribirTodosFirebase = async ( uid, data ) =>{

//     const dataAntigua = await getTodosByUser(uid);
        
//     const id = Object.values( dataAntigua ).length;
//     console.log( id )
        
//     addTodoByUser( uid, data );
// }

// const obtenerTodosFirebase = ( uid ) =>{
//     getTodosByUser( uid );
// }

export const useAddTodo = ( ) => {

    const { uid }           = useSelector( state => state.auth );
    const [ data, setData ] = useState([]);
    

    useEffect(() => {
        async function getData(){
            
            const info = await getTodosByUser( uid );
            
            if( info !== null ) setData( info )
            else setData( [] )
        }

        getData();
    }, [ [] ] )


    const  agregarTodo = ( newTodo ) =>{
        
        

        let nuevaData;
        ( data !== null ) ? nuevaData = data : nuevaData = [];

        nuevaData.push( newTodo )

        
        addTodoByUser( uid, nuevaData );

        if( nuevaData === null ) setData( [] )
        else setData( nuevaData ) 
    }
    

    const eliminarTodo = ( key = 0 ) =>{
        let nuevaData = [];

        ( data !== null ) ? nuevaData = data: nuevaData = [];
        const datosEliminados = nuevaData.splice( key, 1) 

        addTodoByUser( uid, nuevaData )  ;

        if( nuevaData === [] ) setData([]);
        else setData( nuevaData );
    }

    return {
        data        ,
        agregarTodo ,
        eliminarTodo
    }
}
