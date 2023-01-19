

import { GoogleAuthProvider, TwitterAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { FirebaseAuth, FirebaseRTD } from './config';

import { set, ref, get } from 'firebase/database';

const googleProvider    = new GoogleAuthProvider();
const twitterProvider   = new TwitterAuthProvider();
const facebookProvider  = new FacebookAuthProvider();
const gitHubProvider    = new GithubAuthProvider();


//Registro e inicio de sesion personalizado

export const signInWithEmail = async({ email, password }) =>{

    try {
    
        const result = await signInWithEmailAndPassword( FirebaseAuth, email, password  );
        const { displayName, uid } = result.user;

        return {
            ok: true, displayName, uid 
        }
    } catch ( err ) {
        return { ok: false, errorMessage: err.message };
    }
}


export const createUserWithEmail = async( { displayName, email, password }) =>{

    try {

        const result = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid } = result.user;


        //Actualizando / creando displayName en Firebase

        await updateProfile( FirebaseAuth.currentUser,{
            displayName
        });

        return{
            ok: true, displayName, email, password, uid
        }

    } catch ( err ) {
        return { ok: false, errorMessage: err.message };
    }
}


// Redes sociales
export const signInWithGoogle = async() =>{
    
    return await signInWithProvider( googleProvider );
}

export const signInWithTwitter = async() =>{
    
    return await signInWithProvider( twitterProvider );
}

export const signInWithFacebook = async() =>{
    
    return await signInWithProvider( facebookProvider );
}

export const signInWithGitHub = async() =>{
    
    return await signInWithProvider( gitHubProvider );
}


const signInWithProvider = async ( provider ) =>{
    try{
        
        const result                        = await signInWithPopup( FirebaseAuth, provider);
        const { displayName, uid, email }   = result.user;


        return {
            ok: true, 
            displayName, uid, email
        }

    } catch( err ){

        const errorMessage = err.message;
        
        return {
            ok: false,
            errorMessage
        }
    }
}


export const logOutFirebase = async() =>{
    return await FirebaseAuth.signOut();
}


export const addTodoByUser = ( uid, data ) => {

    
    const reference = ref( FirebaseRTD, "users/" + uid + "/" );
    set( reference, data );
}


export const getTodosByUser = async ( uid ) =>{

    const distanceRef = ref( FirebaseRTD, "users/" + uid + "/");

    const snapshot = await get( distanceRef );
    const user = snapshot.val();
    return user;
}