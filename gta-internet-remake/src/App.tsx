import { useState } from 'react'
import './App.css'
import Header from './components/header';

interface History {
  id: number;
  name: string;
  backarrowed: boolean
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
            { id: pageHistory[0] ? pageHistory[0].id + 1 : 1, name: 'www.eyefind.info', backarrowed: false},
            ...pageHistory, 
          ]
        )
      }}>go to www.eyefind.info</button>

      <br />

      <button onClick={() => {
        setPageHistory(
          [
            { id: pageHistory[0] ? pageHistory[0].id + 1 : 1, name: 'www.toeshoeusa.com', backarrowed: false },
            ...pageHistory, 
          ]
        )
      }}>go to www.toeshoeusa.com</button>
      <div id="page">
        {/*if (pageHistory[0].name === 'whatever page') {
            <WhateverPage props/>
        } else {
            <EyefindError/>
        }
        
        btw these should look like this in the folder
        src/pages/whateverpage 
        src/pages/eyefind/error 

        and import these just up the top
        */}
        { pageHistory[0] ? pageHistory[0].name : "www.eyefind.info" }
      </div>
    </>
  );
}

