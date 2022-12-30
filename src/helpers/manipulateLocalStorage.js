

export const saveDataLocalStorage = ( name ="not-defined", data={} ) =>{
    localStorage.setItem(name, JSON.stringify( data ) );
}

export const getDataLocalStorage = ( name = "not-defined") =>{
    return JSON.parse( localStorage.getItem( name ) );
}