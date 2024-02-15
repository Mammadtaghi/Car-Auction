import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import { useNavigate } from 'react-router-dom';

function ErrorPage() {

    const navigate = useNavigate()

    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>ErrorPage</title>
            </Helmet>
            <div id={style.ErrorPage}>
                <h1 className={style.error}>404</h1>
                <h2 className={style.message}>The page cannot be found.</h2>
                <p className={style.info}>{"Sorry! The page you were looking for could not be found."} {"Try searching for it or browse through our website."}</p>
                <button onClick={()=>navigate("/")} className={`BorderButton ${style.toHome}`}>Back to Home</button>
                
                {/* <marquee onMouseOver={(e)=>e.target.stop()} onMouseOut={(e)=>e.target.start()} loop="infinite" behaviour="sliding" direction="right">fdafdgadg</marquee> */}
            </div>
        </>
    )
}

export default ErrorPage