import './header.css'
import { useState } from 'react';
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
                    <div id="button-icon">
                        <FontAwesomeIcon icon={faClock} />
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <div id="dropdown"> {/* make this actually drop down */}
                        <ul>
                            {history.map(p => (
                                <li key={p.id}>{p.name}</li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
                <div id="search-bar">
                    <input 
                        id="search-field" 
                        type="text" 
                        value={searchQuery}
                        placeholder={history.slice(-1)[0] ? history.slice(-1)[0].name : 'www.eyefind.info/error'}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button id="search-submit" 
                        onClick={() => {
                            if(searchQuery.trim()) {
                                setHistory([...history, {name: searchQuery, id: history.slice(-1)[0] ? history.slice(-1)[0].id + 1 : 1}])
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