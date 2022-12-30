import React from 'react'
import '../pages/stylesAuth.css'

import { useDispatch  } from 'react-redux'
import { startSocialMediaSingIn } from '../../store/auth'


export const SocialMediaOptions = () => {


    const dispatch = useDispatch();
    const signInWithProvider = ( provider ) =>{
        dispatch( startSocialMediaSingIn( provider ))
    }
  return (
    <div>
            <button type="button" 
                    className="btn btn-secondary btn-floating mx-1"
                    onClick={() =>  signInWithProvider('facebook') }>

              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" 
                    className="btn btn-secondary btn-floating mx-1"
                    onClick={() =>  signInWithProvider('google') }>

              <i className="fab fa-google"></i>
            </button>

            <button type="button" 
                    className="btn btn-secondary btn-floating mx-1"
                    onClick={ () => signInWithProvider('twitter') }>
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" 
                    className="btn btn-secondary btn-floating mx-1"
                    onClick={ () =>  signInWithProvider('github') }>
              <i className="fab fa-github"></i>
            </button>
    </div>
  )
}
