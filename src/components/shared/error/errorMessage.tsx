import {useState} from 'react'

const errorMessage = (error:string) => {
    return (
        <>
            <div>
                <h1>Ops! Ocorreu um erro</h1>
            </div>
            <div>
                <p>{error}</p>
            </div>
        </>
    )
}