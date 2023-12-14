import React, { useState, useEffect } from 'react'
import '../Style/Footer.css'
import axios from 'axios';
function Footer() {
    const [add, setAdd] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/footer");
                const data = response.data;
                setAdd(data);
            } catch (error) {
                console.log(`Error getting Blog from frontend: ${error}`);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <hr className='line_footer' />
            <div class="container mt-5 mb-5">
                {add.map((data) => (
                    <div>
                        <div class="row">
                            <div class="col">
                                <p className='contact'>Phone:{data.phone}</p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p className='contact'>

                                    Email: {data.email}
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p className='contact'>
                                    Address: {data.address}

                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p className='contact'>
                                    {data.extraContact}

                                </p>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col">
                                <div className='contact_footer'>
                                    <img src={`http://localhost:8080/` + data.social1} className='contact_icon ' alt="..."  width={"20%"} />
                                    <img src={`http://localhost:8080/` + data.social2} className='contact_icon ' alt="..." width={"20%"}/>
                                    <img src={`http://localhost:8080/` + data.social3} className='contact_icon ' alt="..." width={"20%"}/>       </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Footer