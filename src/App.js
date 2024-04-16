//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import 
{ BrowserRouter,
   Routes,
    Route,
  } from "react-router-dom";

const App =()=>{
  const c="shivu";
 const pagesize=5;
 const apiKey='f540b434aa9a4518b32fbce69ba1b639'
 const [progress,setProgress]=useState(0);
 

 
  

    return (
      <div>
        <>
        <BrowserRouter>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
       
      />
        <Routes>
        <Route exact path="/general" element={<News apiKey={apiKey}setProgress={setProgress} key={'general'}pageSize={pagesize}   country={'in'} category='general'/>}/>
        <Route exact path="/" element={<News apiKey={apiKey}setProgress={setProgress} key={'general'}pageSize={pagesize}   country={'in'} category='general'/>}/>
        <Route exact path="/science" element={<News apiKey={apiKey}setProgress={setProgress} key={'science'}pageSize={pagesize}   country={'in'} category='science'/>}/>
        <Route exact path="/business" element={<News apiKey={apiKey}setProgress={setProgress} key={'business'}pageSize={pagesize}   country={'in'} category='business'/>}/>
        <Route exact  path="/sports" element={<News apiKey={apiKey}setProgress={setProgress} key={'sports'}pageSize={pagesize}   country={'in'} category='sports'/>}/>
        <Route exact path="/entertainment" element={<News apiKey={apiKey}setProgress={setProgress} key={'entertainment'}pageSize={pagesize}   country={'in'} category='entertainment'/>}/>
        <Route exact path="/health" element={<News apiKey={apiKey}setProgress={setProgress} key={'health'}pageSize={pagesize}   country={'in'} category='health'/>}/>
        <Route  exact path="/technology" element={<News apiKey={apiKey}setProgress={setProgress} key={'technology'}pageSize={pagesize}   country={'in'} category='technology'/>}/>
          
      </Routes>
        
        </BrowserRouter>
        </>
      </div>
    )
  }

export default App;