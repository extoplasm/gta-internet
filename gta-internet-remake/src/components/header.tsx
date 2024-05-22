import './header.css'
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

interface History {
    id: number;
    name: string;
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
                    <div id="back-arrow-button"></div>
                    <div id="forward-arrow-button"></div>
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
                            {history.map(p => (
                                <div key={p.id}>
                                    <button onClick={() => {
                                        setHistory([
                                            ...history, 
                                            { id: history.slice(-1)[0] ? history.slice(-1)[0].id + 1 : 1, name: p.name }
                                        ])}}>
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
                        placeholder={history.slice(-1)[0] ? history.slice(-1)[0].name : 'www.eyefind.info'}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button id="search-submit" 
                        onClick={() => {
                            if(searchQuery.trim()) {
                                setHistory([...history, {name: `www.eyefind.info/search+${searchQuery}`, id: history.slice(-1)[0] ? history.slice(-1)[0].id + 1 : 1}])
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