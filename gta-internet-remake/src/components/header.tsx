import './header.css'
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

interface History {
    id: number;
    name: string;
    backarrowed: boolean;
}

interface Props {
    preview: string;
    history: Array<History>;
    setHistory: Function;
}

export default function header({ preview, history, setHistory }: Props) {
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
                        if (history[1]) {
                            setHistory([
                                { name: history[1].name, id: history[0] ? history[0].id + 1 : 1, backarrowed: true },
                                ...history, 
                            ])
                        }
                    }
                    }>
                    daaaa 
                    </button>
                    <br />
                    <button id="forward-arrow-button" onClick={() => {
                        if (history[1].backarrowed) {
                            setHistory([
                                { name: history[1].name, id: history[0] ? history[0].id + 1 : 1, backarrowed: false },
                                ...history, 
                            ])
                        }
                    }
                    }>
                    d
                    </button>
                </div>
                <div id="home-button"></div>
                <div id="history-button">
                    <button id="button-icon" onClick={()=>{
                        if (dropdownRef.current.style.display === "block") { dropdownRef.current.style.display = "none" } else { dropdownRef.current.style.display = "block"; }
                    }}>
                        <FontAwesomeIcon icon={faClock} />
                        <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    <div id="dropdown-container"> {/* make this actually drop down */}
                        <div id="dropdown" ref={dropdownRef}>
                            {history
                                .filter((_p,_) => (_ < 10)) // so as to not flood the viewers screen
                                .map((p,_) => (
                                <div key={p.id}>
                                    <button onClick={() => {
                                        setHistory([
                                            { id: history[0] ? history[0].id + 1 : 1, name: p.name, backarrowed: false },
                                            ...history, 
                                        ])}}
                                    >
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
                        placeholder={history[0] ? history[0].name : 'www.eyefind.info'}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button id="search-submit" 
                        onClick={() => {
                            if(searchQuery.trim()) {
                                setHistory([
                                    {name: `www.eyefind.info/search+${searchQuery}`, id: history[0] ? history[0].id + 1 : 1, backarrowed: false},
                                    ...history, 
                                ])
                                setSearchQuery('')
                            }
                            }
                        }
                    > search
                        {/* search bar icon goes here (from fontawesome)*/}
                    </button>
                    <div id="close window"> 
                    {/* in game this closes the window, but here just do nothing */}
                    </div>
                </div>
            </div>
        </>
    );
}