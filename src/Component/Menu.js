import React, { useState, useEffect } from 'react';
import '../Style/Menu.css';
import '../Style/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
AOS.init();
function Menu() {
  const [navOpen, setNavOpen] = useState(false);
  const [data, setData] = useState([]);
const [imgLogo, setImgLogo] = useState([])
  const { path } = useParams();
  console.log("ID from route parameter:", path);
  const openNav = () => {
    setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/newpage`);
        if (response.data && response.data.length > 0) {
          setData(response.data);
          console.log("add", response.data);
        } else {
          setData(null); // If no data, set data to null
        }
      } catch (error) {
        console.log(`Error getting data from backend: ${error}`);
      }
    };

    fetchData();
    fetchLogo();
  }, []);
  const fetchLogo = async () => {
    try {
      const response = await axios.get("http://localhost:8080/logo");
      const data = response.data;
      setImgLogo(data);
      console.log("logo",imgLogo)
      console.log("data",data)
    } catch (error) {
      console.log(`Error getting data from frontend: ${error}`);
    }
  };


  return (
    <>
      <div class="container-fluid  main_nav ">
        <div class="row">
          {imgLogo.map((img) =>(
            <div class="col col_logo ps-5">
              <img src={`http://localhost:8080/`+ img.logo} class="img-fluid mt-3 logo" alt="logo" id='logo_height'  />
            </div>
          ))}
          {/* <div class="col col_logo ps-5">
            <img src={`http://localhost:8080/`+ imgLogo.logo} class="img-fluid mt-3 logo" alt="logo" />
          </div> */}
          <div class="col">
            <div id="myNav" className={`overlay ${navOpen ? 'open' : ''}`}>
              <img src={require("../images/cross.png")} class="img-fluid mt-3 logo" className="closebtn" onClick={closeNav} alt="..." />
              <div className={data.length > 4 ? 'style-for-more-than-three-nav' : 'overlay-content menu-animation'}>
                {data.map((item, index) => (
                  <div key={index} className="link-item">
                    {item.path ? (
                      <Link to={`${item.path}`} style={{ fontSize: "60px", color: "#fff" }}>
                        {item.nav}
                      </Link>
                    ) : (
                      <Link style={{ fontSize: "60px" }}>{item.nav}</Link>
                    )}
                  </div>
                ))}
              </div>

            </div>

            <span style={{ fontSize: "30px", cursor: "pointer", color: "#fff" }} className='icon_menu' onClick={openNav}>&#9776;</span>
          </div>
        </div>
      </div>

    </>
  );
}

export default Menu;
