import './header.css'
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faCaretDown, faCaretLeft, faCaretRight, faHouse, faXmark } from '@fortawesome/free-solid-svg-icons'

interface History {
    id: number;
    name: string;
    current: boolean;
}

interface Props {
    preview: string;
    currentPageIndex: number;
    pageHistory: Array<History>;
    addNewPage: Function;
    changeCurrentPage: Function;
}

export default function header({ preview, currentPageIndex, pageHistory, addNewPage, changeCurrentPage}: Props) {
    const [searchQuery, setSearchQuery] = useState('')
    const dropdownRef = useRef<any>()
    return (
        <>
        <div className="header-component">
            <div className="title">
                {preview ? preview : <br/>}
            </div>
            <div className="navbar">
                <div className="navigation-buttons">
                    <button className="back-arrow-button" 
                    disabled={!pageHistory[currentPageIndex + 1]}
                    onClick={() => {
                        changeCurrentPage(pageHistory[currentPageIndex + 1] || pageHistory[currentPageIndex]) // if next page exists switch otherwise stay
                    }
                    }>
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </button>
                    <button className="forward-arrow-button" 
                    disabled={!pageHistory[currentPageIndex - 1]}
                    onClick={() => {
                        changeCurrentPage(pageHistory[currentPageIndex - 1] || pageHistory[currentPageIndex]) // if next page exists switch otherwise stay
                    }
                    }>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </button>
                </div>
                <button className="home-button" onClick={()=> {
                    addNewPage('www.eyefind.info')
                }}>
                    <FontAwesomeIcon icon={faHouse} />
                </button>
                <div className="history-button">
                    <button className="button-icon" onClick={()=>{
                        if (dropdownRef.current.style.display === "block") { dropdownRef.current.style.display = "none" } else { dropdownRef.current.style.display = "block"; } 
                        // if already open close otherwise open
                    }}>
                        <FontAwesomeIcon icon={faClock} />
                        <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    <div className="dropdown-container">
                        <div className="dropdown" ref={dropdownRef}>
                        {pageHistory
                            .filter((_p,_) => (_ < 10)) // so as to not flood the viewers screen
                            .map((p,_) => (
                                <div key={p.id}>
                                    <button onClick={() => {
                                    changeCurrentPage(p)
                                    }}>
                                        {p.name}
                                    </button>
                                    <br />
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <div className="search-bar">
                    <input 
                        className="search-field" 
                        type="text"
                        autoComplete="off"
                        value={searchQuery}
                        placeholder={pageHistory[currentPageIndex].name}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter') { // apparently there's no search icon LOL
                                if(searchQuery.trim()) {
                                    addNewPage(searchQuery)
                                    setSearchQuery('')
                                }
                            }
                        }}
                    />
                    <button className="close-window"> 
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}