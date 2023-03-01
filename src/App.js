import './App.css';
import React from "react";
import Graph from "./Components/Graph"
import Main from "./Components/Main"
import Quiz from "./Components/Quiz"

const footer = {
  float:"right",
  fontSize:"10px",
  position: "fixed",
  bottom: 0
}

function App() {

  //Controls whether fade animation will start
  var [data,setData] = React.useState(false);
  var [dataQuiz,setDataQuiz] = React.useState(true);
  var [dataGraph,setDataGraph] = React.useState(true);

  //Controls what page is shown
  const [showMain, setShowMain] = React.useState(true);
  const [showQuiz,setShowQuiz] = React.useState(false);
  const [showGraph,setShowGraph]= React.useState(false);

  const handleCallback = (childData) =>{

    if(childData==="Quiz")
    {
      setData(true);
      setTimeout(() => setShowMain(false), 2000);
      setTimeout(() => setShowQuiz(true), 2000);
      setDataQuiz(false);
    }
    else if(childData==="Graph"){
      setDataQuiz(true);
      setTimeout(() => setShowQuiz(false), 2000);
      setTimeout(() => setShowGraph(true), 2000);
      setDataGraph(false);

    }


  }

  return (
    <><div>

      {showMain ? <Main

        parentCallback={handleCallback}
        data={data} /> : null}
      {showQuiz ? <Quiz
        parentCallback={handleCallback}
        data={dataQuiz} /> : null}
      {showGraph ? <Graph
        parentCallback={handleCallback}
        data={dataGraph} /> : null}

    </div>
    <footer style={footer}>*This app will not track or store any client data</footer>
    </>

  );
}

export default App;
