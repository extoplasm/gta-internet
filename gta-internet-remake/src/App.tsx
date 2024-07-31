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

const getOriginPage = (page : string) => {
  let match = page.match(/^[^\/]+/); // match up to the first / to get whichever page we need
  return match ? match[0] : '';
}

const getQueryString = (page: string) => {
  let match = page.match(/[^/]*\/([^+]*)/); // capture after first / and before + (eyefind.info/search+"query") to return search only
  return match ? match[1] : '';
}

export default function App() {
  const [pageHistory, setPageHistory] = useState<History[]>([{id: 1, name: 'www.eyefind.info', preview: pageData['www.eyefind.info'].preview, current: true}])

  const addNewPage = (page : string) => {
    // @ts-expect-error 
    const pageName = getQueryString(page) ? (!(pageData[getOriginPage(page)].childrenPreviews[getQueryString(page)] === undefined) ? page : 'www.eyefind.info/error') : (pageData[page] ? page : 'www.eyefind.info/error') 
    // ^ if there is a query string, make sure childpreview is not null before setting page otherwise check if page exists before setting page
    // @ts-expect-error
    const pagePreview = getQueryString(pageName) ? pageData[getOriginPage(pageName)].childrenPreviews[getQueryString(pageName)] : pageData[getOriginPage(pageName)].preview
    const newCurrent = { id: pageHistory[0] ? pageHistory[0].id + 1 : 1, name: pageName, preview: pagePreview, current: true }; // init new page

    const updatedHistory = pageHistory.map(p => ({
      ...p,
      current: false,
    })); // make previous history all false

    setPageHistory([newCurrent, ...updatedHistory])
  }

  const changeCurrentPage = (page: History) => {
    const updatedHistory = pageHistory.map(p => { // loop through pageHistory
      if (p === page) { // if page is the page we want
        return { ...p, current: true } // set updatedHistory with p.current as true
      }
      return {...p, current: false } // else p.current is false
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

