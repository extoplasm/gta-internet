import { useState } from 'react'
import './App.css'
import Header from './components/header';

let historyPageID = 0

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
        currentpage="www.eyefind.info"
        history={pageHistory}
      />
      <button onClick={() => {
        setPageHistory(
          [
            ...pageHistory, 
            { id: historyPageID++, name: 'www.eyefind.info' }
          ]
        )
      }}>go to eyefind.info</button>
    </>
  );
}

