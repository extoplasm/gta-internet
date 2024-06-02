import './header.css'
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faCaretDown, faHouse } from '@fortawesome/free-solid-svg-icons'

interface History {
    id: number;
    name: string;
    current: boolean;
}

interface Props {
    preview: string;
    pageHistory: Array<History>;
    addNewPage: Function;
    changeCurrentPage: Function;
}

export default function header({ preview, pageHistory, addNewPage, changeCurrentPage}: Props) {
    const [searchQuery, setSearchQuery] = useState('')
    const dropdownRef = useRef<any>()
    return (
        <>
            <div id="title">
                {preview}
            </div>
            <div id="navbar">
                <div id="navigation-buttons">
                    <button id="back-arrow-button" onClick={() => {
                        changeCurrentPage(pageHistory[pageHistory.indexOf(pageHistory.filter(p => p.current === true)[0]) + 1])
                    }
                    }>
                    daaaa 
                    </button>
                    <br />
                    <button id="forward-arrow-button" onClick={() => {
                        // change page current property
                    }
                    }>
                    d
                    </button>
                </div>
                <button id="home-button" onClick={()=> {
                    addNewPage('www.eyefind.info')
                }}>
                    <FontAwesomeIcon icon={faHouse} />
                </button>
                <div id="history-button">
                    <button id="button-icon" onClick={()=>{
                        if (dropdownRef.current.style.display === "block") { dropdownRef.current.style.display = "none" } else { dropdownRef.current.style.display = "block"; }
                    }}>
                        <FontAwesomeIcon icon={faClock} />
                        <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    <div id="dropdown-container">
                        <div id="dropdown" ref={dropdownRef}>
                            {pageHistory
                                .filter((_p,_) => (_ < 10)) // so as to not flood the viewers screen
                                .map((p,_) => (
                                <div key={p.id}>
                                    <button onClick={() => {
                                        // change page current property
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
                <div id="search-bar">
                    <input 
                        id="search-field" 
                        type="text" 
                        value={searchQuery}
                        placeholder={pageHistory[0] ? pageHistory[0].name : 'www.eyefind.info'}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button id="search-submit" 
                        onClick={() => {
                            if(searchQuery.trim()) {
                                addNewPage(`www.eyefind.info/search+${searchQuery}`)
                                setSearchQuery('')
                            }
                            }
                        }
                    > search
                        {/* search bar icon goes here (from fontawesome)*/}
                    </button>
                    <div id="close window"> 
                    {/* in game this closes the window, but here just do nothing, but make responsive as well*/}
                    </div>
                </div>
            </div>
        </>
    );
}