import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSun, faMobileButton, faBurger, faSackDollar, faPlane, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import pageData from '../../../assets/pagedata.json'

interface pageProps {
    addNewPage: Function;
}

const getRandomPage = (data : object) => {
    const pages = Object.keys(data);
    const randomIndex = Math.floor(Math.random() * pages.length)
    return pages[randomIndex]
}

const getCurrentDay = () => {
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    const curr = new Date;

    return days[curr.getDay()]
}

export default function Navbar({ addNewPage }: pageProps) {
    return (
        <>
            <div id="eyefind-navbar">
                <div className="banner">
                    <div className="info">
                        <img className="logo" src="../../pages/eyefind/eyefind-logo.png" alt="logo" />
                        <div className="weather">
                            <div className="weather-text">
                                <p>Rockford Hills</p>
                                <p>{getCurrentDay()}</p>
                            </div>
                            <div className="weather-icon">
                                <FontAwesomeIcon icon={faSun}/>
                            </div>
                        </div>
                    </div>
                    <div className="page-nav">
                        <div className="search-bar">
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            <input 
                                className="search-field" 
                                type="text"
                                autoComplete="off"
                                placeholder="Search Eyefind" 
                            />
                        </div>
                        <button className="random" onClick={() => 
                            addNewPage(getRandomPage(pageData))
                        }>
                            RANDOM
                        </button>
                    </div>
                </div>
                <div className="page-categories">
                    <button onClick={() => 
                        addNewPage('www.eyefind.info/search+media and entertainment')
                    }>
                        <FontAwesomeIcon icon={faMobileButton}/>
                        <p>MEDIA AND <br/> ENTERTAINMENT</p> 
                    </button>
                    <button onClick={() => 
                        addNewPage('www.eyefind.info/search+food and drink')
                    }>
                        <FontAwesomeIcon icon={faBurger}/>
                        <p>FOOD <br/> AND DRINK</p>
                    </button>
                    <button onClick={() => 
                        addNewPage('www.eyefind.info/search+money and services')
                    }>
                        <FontAwesomeIcon icon={faSackDollar}/>
                        <p>MONEY <br/> AND SERVICES</p> 
                    </button>
                    <button onClick={() => 
                        addNewPage('www.eyefind.info/search+travel and transport')
                    }>
                        <FontAwesomeIcon icon={faPlane}/>
                        <p>TRAVEL <br/> AND TRANSPORT</p>
                    </button>
                    <button onClick={() => 
                        addNewPage('www.eyefind.info/search+fashion and health')
                    }>
                        <FontAwesomeIcon icon={faBagShopping}/>
                        <p>FASHION <br/> AND HEALTH</p>
                    </button>
                </div>
            </div>  
        </>
    )
}