import React, { useEffect, useState } from 'react'
import intro from '../Videos/intro.mp4'
import '../Style/Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Menu from './Menu';
import AboutUs from './AboutUs';
import Cases from './Cases';
import Test from './Test';
import Services from './Services';
import Partner from './Partner';
import Footer from './Footer';
import axios from 'axios'
// ..
AOS.init();
function Home() {
    const [add, setAdd] = useState([]);
    const [footer, setFooter] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/home");
                const data = response.data;
                setAdd(data);
            } catch (error) {
                console.log(`Error getting Blog from frontend: ${error}`);
            }
        };

        fetchData();
        const fetchFooter = async () => {
            try {
                const response = await axios.get("http://localhost:8080/footerhome");
                const data = response.data;
                setFooter(data);
            } catch (error) {
                console.log(`Error getting Blog from frontend: ${error}`);
            }
        };

        fetchFooter();
    }, []);
    const allowedImageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const allowedVideoExtensions = ['mp4', 'mov', 'avi', 'mkv'];
    return (
        <>
            <div className='video-container'>
                <Menu />
                <div>


                    {add.map((data) => (
                        <div>
                            {/* <video autoPlay muted loop className='video_play'>
                                <source src={`http://localhost:8080/` + data.video} type="video/mp4" />
                            </video> */}
                            {allowedImageExtensions.includes(data.video.split('.').pop().toLowerCase()) ? (
                                <div className='image-container'>
                                    <img
                                        src={`http://localhost:8080/` + data.video}
                                        alt={`Contact Video`}
                                        className='img_home'
                                    />
                                </div>
                            ) : allowedVideoExtensions.includes(data.video.split('.').pop().toLowerCase()) ? (
                                <video autoPlay muted loop className='video_play'>
                                    <source src={`http://localhost:8080/` + data.video} type="video/mp4" />
                                </video>
                            ) : null}
                            <div className='video-overlay'></div> {/* for background gray above the video */}

                            <div className='title_video ps-4'>
                                <p className='text_title'>{data.title}</p>

                            </div>
                            <div className='box_intro'>
                                <div className='intro_parag'>
                                    <p className='subtitle'>{data.subtitle}</p>
                                    <p className='paragraph_intro'>
                                        {data.content}

                                    </p>

                                </div>
                            </div>
                            </div>
                    ))}
                            <div className='contact_video'>
                    {footer.map((footericon)=>(
                                <img src={`http://localhost:8080/` + footericon.socialmedia} className='contact_icon ' alt="..." height={"17%"} width={"23%"} />
                                
                                ))}
                                </div>
                   






                </div>
            </div>
            <div className='whiteSpace'>

            </div>
            <AboutUs />
            <div className='whiteSpace'>

            </div>
            <Cases />
            <div className='whiteSpace'>

            </div>
            <Services />
            <div className='whiteSpace'>

            </div>
            <Partner />
            <div className='whiteSpace'>
            </div>
            <Footer />
        </>

    )
}

export default Home