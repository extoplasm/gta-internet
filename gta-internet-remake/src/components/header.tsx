import './header.css'

interface Props {
    preview: string;
    currentpage: string;
}

export default function header({ preview, currentpage }: Props) {
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
                <div id="history-button"></div>
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