import { useState, useEffect } from 'react'

export default function Banner() {
    const [bannerIndex, setBannerIndex] = useState(1)
    const images = [
        "../../../../gta-internet/pages/toeshoesusa/main/toeshoesbanner1.png",
        "../../../../gta-internet/pages/toeshoesusa/main/toeshoesbanner2.png",
        "../../../../gta-internet/pages/toeshoesusa/main/toeshoesbanner3.png",
        "../../../../gta-internet/pages/toeshoesusa/main/toeshoesbanner4.png",
        "../../../../gta-internet/pages/toeshoesusa/main/toeshoesbanner5.png",
    ]
    
    useEffect(() => {
        const interval = setInterval(() => {
            setBannerIndex(prevIndex => (prevIndex % images.length) + 1);
        }, 2000);

        return () => clearInterval(interval); // cleanup interval on component unmount
      }, []);

    return (
        <>
            <img src={images[bannerIndex - 1]} alt={`banner ${bannerIndex}`} />
        </>
    );
};
