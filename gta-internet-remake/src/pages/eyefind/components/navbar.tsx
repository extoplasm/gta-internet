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
                        <img className="logo" src="../../eyefind-logo.png" alt="logo" />
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
                    <div className="media">
                        <FontAwesomeIcon icon={faMobileButton}/>
                        <p>MEDIA AND ENTERTAINMENT</p>
                    </div>
                    <div className="food">
                        <FontAwesomeIcon icon={faBurger}/>
                        <p>FOOD AND DRINK</p>
                    </div>
                    <div className="money">
                        <FontAwesomeIcon icon={faSackDollar}/>
                        <p>MONEY AND SERVICES</p>
                    </div>
                    <div className="travel">
                        <FontAwesomeIcon icon={faPlane}/>
                        <p>TRAVEL AND TRANSPORT</p>
                    </div>
                    <div className="fashion">
                        <FontAwesomeIcon icon={faBagShopping}/>
                        <p>FASHION AND HEALTH</p>
                    </div>
                </div>
            </div>  
        </>
    )
}