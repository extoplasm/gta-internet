import { useState } from 'react'
import './App.css'
import Header from './components/header';

interface History {
  id: number;
  name: string;
}

export default function App() {
  const [pageHistory, setPageHistory] = useState(Array<History>)
  return (
    <>
      <Header 
        preview="--- EYEFIND... it's like a series of tubes ---"
        history={pageHistory}
        setHistory = {setPageHistory}
      />

      <button onClick={() => {
        setPageHistory(
          [
            ...pageHistory, 
            { id: pageHistory.slice(-1)[0] ? pageHistory.slice(-1)[0].id + 1 : 1, name: 'www.eyefind.info' }
          ]
        )
      }}>go to www.eyefind.info</button>

      <br />

      <button onClick={() => {
        setPageHistory(
          [
            ...pageHistory, 
            { id: pageHistory.slice(-1)[0] ? pageHistory.slice(-1)[0].id + 1 : 1, name: 'www.toeshoeusa.com' }
          ]
        )
      }}>go to www.toeshoeusa.com</button>
      <div id="page">
        {/*if (pageHistory.slice(-1)[0].name === 'whatever page') {
            <WhateverPage props/>
        } else {
            <EyefindError/>
        }
        
        btw these should look like this in the folder
        src/pages/whateverpage 
        src/pages/eyefind/error 

        and import these just up the top
        */}
      </div>
    </>
  );
}

