import React, { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import "./setup.css";

const title = {
    display:"grid",
    placeItems:"center",
    textAlign:"center",
    fontSize:"6vw",
    fontWeight: "bold",
    position:"relative",
    bottom:"30px"

 }
 const subtitle = {
    display:"grid",
    placeItems:"center",
    textAlign:"center",
    fontSize:"3vw",
    position:"relative",
    bottom:"40px"
 }


 const button = {
    display:"flex",
    placeItems:"center",
    fontSize: "6vw",
    //overflow: "hidden",
    whiteSpace: "nowrap",
    opacity: "1",
    transition: "1s opacity",
    margin:"auto"
 };

function Main(props){

     const body = {

        homepageDisplay: props.data
    }    
    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out',
    });

    useEffect(() => {
        const timeout = setInterval(() => {
            if ( body.homepageDisplay === false ) {
                setFadeProp({
                    fade: 'fade-in'
                })
            } else {
                setFadeProp({
                    fade: 'fade-out'
                })
            }
        }, 300);

        return () => clearInterval(timeout)
    }, [fadeProp])

     const openQuiz = (event) =>{
        props.parentCallback("Quiz");
        event.preventDefault();
     }

    return(
        <div data-testid="fader" className={fadeProp.fade} style={{paddingTop:"250px"}}>
            <>
            <p style={title}>🥊 FIGHTING QUIZ 🥊</p>
            <p style={subtitle}>What kind of fighter are you?</p>
                <Button variant="danger fw-bold" 
                style={button}
                onClick={openQuiz}
                >  
                    START </Button>
            </>
        </div>
    ) 



}

export default Main;