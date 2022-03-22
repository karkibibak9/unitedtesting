import React from 'react'

const footer = () => {
    return (
        <footer>
                <div className="footer-dark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3><a className='text-muted' href='https://g.page/hotel-united?share'>E - W Hwy, Lalbandi 45801, Sarlahi</a></h3>
                        <h3><a type="tel" href="tel:046501703">046-501703</a></h3>
                        <ul>
                            <li><a href="./rooms">Rooms</a></li>
                            <li><a href="./contact">Contact</a></li>
                            <li><a href="./about">About</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Hotel United Inn.</h3>
                        <p>Considering our past services and suggestion from our loyal costumers, we have come to a conclusion to improve our Food, Services and our Building. So after a good renovation and year long break from covid-19, we are reopening as HOTEL UNITED INN.</p>
                    </div>
                    <div className="col item social"> 
                            <a className="px-2" href="https://www.facebook.com/Hotel-United-Inn-101432741791780">
                                <i className="text-primary fab fa-facebook"></i>
                            </a>
                            <a className="px-2" href="https://www.instagram.com/hotelunitedinn/">
                                <i className="text-danger fab fa-instagram"></i>
                            </a></div>
                </div>
                <h3><p className="copyright">Hotel United Inn. © 2021</p></h3>
                <h3><p className="copyright">. All rights reserved. Created with
                    <span><i className="fa fa-heart pulse"></i>
                    </span>
                    <a href="https://www.amcgroupnepal.com.np/">by AMCITdep.
                    </a>
                    </p></h3>
                
            </div>
    </div>
        </footer>
    )
}

export default footer
