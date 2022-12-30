import React from 'react'

import "./styles.css"

export const LoadingSpinner = () => {
  return (

    <div className="text-center">
        <div className="spinner-border text-dark" role="status" style = {{width: "9rem", height: "9rem"}}>
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}
