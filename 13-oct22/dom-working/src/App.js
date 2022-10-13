import React,{useState,useCallback} from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph,setShowParagraph] = useState(false);
  const [allowToggle,setAllowToggle] = useState(false);
 
  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() =>{
    if(allowToggle){
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }  
  },[]);

  const allowToggleHandler = ()=>{
   setAllowToggle(true);
  };
  return (
    <div className="App">
      <h1>Hi there!</h1>
      <p>This is new!</p>
      <DemoOutput show={showParagraph}/>
      {/* {showParagraph && <p>This is new!</p>} */}
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
