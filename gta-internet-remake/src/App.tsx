import { useState } from 'react'
import './App.css'
import Header from './components/header';
import Page from './components/page';
import pageData from './assets/pagedata.json'

interface History {
  id: number;
  name: string;
  preview: string;
  current: boolean;
}


export default function App() {
  const [pageHistory, setPageHistory] = useState<History[]>([{id: 1, name: 'www.eyefind.info', preview: "--- EYEFIND... it's like a series of tubes ---", current: true}])

  const addNewPage = (page : string) => {
    // @ts-expect-error
    const pagePreview = pageData[page]?.preview || <br/>
    const newCurrent = { id: pageHistory[0] ? pageHistory[0].id + 1 : 1, name: page, preview: pagePreview, current: true };

    const updatedHistory = pageHistory.map(p => ({
      ...p,
      current: false,
    }));

    setPageHistory([newCurrent, ...updatedHistory])
  }

  const changeCurrentPage = (page: History) => {
    const updatedHistory = pageHistory.map(p => {
      if (p === page) {
        return { ...p, current: true }
      }
      return {...p, current: false }
    });

    setPageHistory(updatedHistory)
  }
  
  return (
    <>
      <Header 
        preview={pageHistory.filter(p => p.current === true)[0].preview}
        currentPageIndex={pageHistory.findIndex(p => p.current === true)}
        pageHistory={pageHistory}
        addNewPage = {addNewPage}
        changeCurrentPage = {changeCurrentPage}
      />
      <Page
        currentPage = {pageHistory[pageHistory.findIndex(p => p.current === true)].name}
        addNewPage = {addNewPage}
      />
    </>
  );
}

