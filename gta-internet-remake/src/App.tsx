import { useState } from 'react'
import './App.css'
import Header from './components/header';

interface History {
  id: number;
  name: string;
  current: boolean
}


export default function App() {
  const [pageHistory, setPageHistory] = useState<History[]>([{id: 1, name: 'www.eyefind.info', current: true}])

  const addNewPage = (page : string) => {
    const newCurrent = { id: pageHistory[0] ? pageHistory[0].id + 1 : 1, name: page, current: true }

    const updatedHistory = pageHistory.map(p => ({
      ...p,
      current: false,
    }));

    setPageHistory([newCurrent, ...updatedHistory])
    console.log(pageHistory, newCurrent )
  }

  const changeCurrentPage = (page: History) => {
    const updatedHistory = pageHistory.map(p => ({
      ...p,
      current: (page ===p),
    }));

    setPageHistory(updatedHistory)
    console.log(pageHistory, page)
  }
  
  return (
    <>
      <Header 
        preview="--- EYEFIND... it's like a series of tubes ---"
        pageHistory={pageHistory}
        addNewPage = {addNewPage}
        changeCurrentPage = {changeCurrentPage}
      />

      <button onClick={() => {addNewPage('www.eyefind.info')}}>go www.eyefind.info</button>

      <br />

      <button onClick={() => {addNewPage('www.toeshoeusa.com')}}>go to www.toeshoeusa.com</button>
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
        { pageHistory.filter(p => p.current === true)[0].name }
      </div>
    </>
  );
}

