import { createUserWithEmail, logOutFirebase, signInWithEmail, signInWithFacebook, signInWithGitHub, signInWithGoogle, signInWithTwitter } from "../../firebase/providers"
import { checkingCredentials, logout, login } from "./"


export const checkingAuthentication = () =>{
    return async( dispatch ) =>{
        
        dispatch( checkingCredentials() )
    }
}


export const startSocialMediaSingIn = ( provider ) =>{
    return async( dispatch ) =>{

        let result = null;
        dispatch( checkingCredentials() );

        
        if      ( provider === 'google')   result = await signInWithGoogle()    ;
        else if ( provider === 'twitter')  result = await signInWithTwitter()   ;
        else if ( provider === 'facebook') result = await signInWithFacebook()  ;
        else if ( provider === 'github' )  result = await signInWithGitHub()    ;

        const data = result; 
        if( !data.ok ) return dispatch( logout( data ) );

        dispatch( login( data ) );
    }
}


export const startCreateUserWithEmail = ({ email, password, displayName }) =>{
    return async( dispatch ) =>{
        dispatch( checkingCredentials() );

        const { ok, uid, errorMessage } = await createUserWithEmail({ displayName, email, password });

        
        if( !ok ) return dispatch( logout({ errorMessage }))

        dispatch( login({ uid, email, displayName }));
    }
}

export const startSingInWithEmail = ({ email, password }) =>{
    return async( dispatch ) =>{

        dispatch( checkingCredentials( ) );

        const { displayName, uid, errorMessage, ok } = await signInWithEmail({ email, password })
    
        if( !ok ) return  dispatch( logout( { errorMessage } ));

        dispatch( login({ uid, email, displayName }))
    }
}


export const startLogout = () =>{

    return async( dispatch ) =>{

        await logOutFirebase();
        dispatch( logout( { errorMessage: null } ) );
    }
}