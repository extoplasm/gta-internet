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
      }}>go to eyefind.info</button>
      <button onClick={() => {
        setPageHistory(
          [
            ...pageHistory, 
            { id: pageHistory.slice(-1)[0] ? pageHistory.slice(-1)[0].id + 1 : 1, name: 'www.sigma.com' }
          ]
        )
      }}>go to sigma.com</button>
    </>
  );
}

