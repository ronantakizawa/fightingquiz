import React, { useState, useEffect} from 'react';
import "./setup.css";
import {score} from "./Quiz"
import Pentagon from "./Pentagon"
import { numToVal,weaknesslink} from './functions';


const title = {
  display:"grid",
  placeItems:"center",
  textAlign:"center",
  fontSize:"3vw",
  fontWeight: "bold",
  padding:"30px"

}

const subtitle = {
  display:"grid",
  placeItems:"center",
  fontSize:"23px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  paddingLeft:"10px",
  textDecoration:"none"

}
const text = {
  fontSize:"23px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  paddingLeft:"10px",
  textDecoration:"none"
    
 }

function Graph(props) {
  const numToValMax = (max) =>{
    switch(max){
      case 0:
        strongestTrait="POWER";
        emoji=	[ '	\uD83D\uDCAA' ];
        sport="Wrestling, Taekwondo, Aikido"
        description="POWER types rely on the strength and mass, and beat opponents through physical dominance."
        break;
      case 1:
        strongestTrait="SPEED";
        emoji=		['\uD83D\uDCA8'];
        sport="Boxing, Kick Boxing, Karate"
        description="SPEED types rely on their quickness to hit, and beat opponents using defense."
        break;
      case 2:
        strongestTrait="STAMINA";
        emoji=	['\uD83C\uDFC3'];
        sport="Boxing, Muay Thai, Sambo"
        description="STAMINA types rely on their ability to stay strong throughout fights, and beat opponents using time."
        break;
      case 3:
          strongestTrait="IQ";
          emoji=	['\uD83E\uDDE0'];
          sport="Jiujitsu, MMA, Judo"
          description="IQ types rely on their experience with martial arts, and beat opponents using strategy."
          break;
      case 4:
          strongestTrait="EQ";
          emoji=	['\uD83E\uDDD8'];
          sport="Jiujitsu,BJJ,Krav Maga"
          description="EQ types rely on their resilience, and beat opponents through mental toughness"
          break;
  
      default:
        strongestTrait="Power";
        emoji=	[ '	\uD83D\uDCAA' ];
        sport="Wrestling, Taekwondo, Aikido"
        break;
  
    }

  }
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
}, [fadeProp]);

const getSecond=(max)=>{
  var second=0;
  for(var i=0;i<score.length;i++){
    if(score[i]>second && score[i]!==score[max])
      second=score[i];
  }
  return second;

}



  var max=score.indexOf(Math.max(...score));
  var strongestTrait;
  var emoji;
  var sport;
  var description;
  numToValMax(max);
  var secondNumber=score.indexOf(getSecond(max))
  var second=numToVal(secondNumber);
  var smallestNumber=score.indexOf(Math.min(...score));
  if(max===smallestNumber){
    strongestTrait="BALANCED"
    second="N/A"
    emoji=['\u2696\uFE0F'];
    sport="Boxing, Karate, Wrestling"
    smallestNumber=5;
  }
  var min = numToVal(smallestNumber);
  
  return (
    <>
    <div data-testid="fader" className={fadeProp.fade}>
    <p style={title}>Results: You are a {strongestTrait} {emoji} type fighter</p>
    <p style={subtitle}>{description}</p>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Pentagon></Pentagon>
    <div style={{float:"right",paddingLeft:"20px",paddingBottom:"80px"}}>
    <p style={text}> &#x2022; Strongest trait: {strongestTrait} </p>
    <p style={text}> &#x2022; Second Strongest trait: {second} </p>
    <p style={text}> &#x2022; Ideal fighting style: {sport} </p>
    <p style={text}> &#x2022; Weakness: {min} </p>
    <a href={weaknesslink} target="_blank" style={text} rel="noreferrer"> &#x2022; How to improve your weakness &#11013;</a>

    </div>

    </div>
    </div>
    </>
  );
}

export default Graph;
