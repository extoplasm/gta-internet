import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

interface History {
    id: number;
    name: string;
}

interface Props {
    preview: string;
    currentpage: string;
    history: Array<History>;
}

export default function header({ preview, currentpage, history }: Props) {
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
                    <div id="dropdown">
                        <ul>
                            {history.map(p => (
                                <p key={p.id}>{p.name}</p>
                            ))}
                        </ul>
                    </div>
                </div>
                <div id="search-bar">
                    <div id="text-field">
                        {currentpage}
                    </div>
                    <div id="clear-text-button">
                        
                    </div>
                </div>
            </div>
        </>
    );
}