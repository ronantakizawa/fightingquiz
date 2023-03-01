import React, { useState, useEffect} from 'react';
import "./setup.css";
import Questions from "./Questions"

export const score= [25,25,25,25,25]

function Quiz(props){
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

    const getAns = (input) =>{
        var elements = document.getElementsByName(input);
        for(var i=0;i<elements.length;i++)
        {
            if(elements[i].checked)
                return elements[i].value;
        }
    }



    const openGraph = (event) =>{
            for(var i=1;i<21;i++)
            {
                var points = getAns("Q"+i);
                if(points===undefined)
                {
                    alert("Complete All Questions")
                    return;
                }
                var index = points.substring(0,1);
                var num=points.substring(1,2);
                if(num==="-"){
                    score[index]=score[index]-parseInt(points.substring(2,3));
                }
                else{
                    score[index]=score[index]+parseInt(num);
                }
            }
            props.parentCallback("Graph");
            event.preventDefault();
            score.forEach((item, index)=>{
                console.log(index, item)
                }) 
            }

        
    

    return(
        <div data-testid="fader" className={fadeProp.fade}>
                <Questions></Questions>
                <div className="wrap">
                <form action="">
                    <div className="buttons">
                    <button className="submit"
                    onClick={openGraph}
                    >Submit</button>
                </div>
                </form>
                </div>
        </div>
    ) 



}

export default Quiz;