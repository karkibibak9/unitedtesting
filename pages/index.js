import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import Facilty from '../components/faculty'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment>
      <main className='hero_section'>
        <div className="hero-container mb-5">
          <h3>Star Family Friendly Hotel</h3>



          <button type="button" className="btn btn-outline-secondary btn-lg my-3" data-toggle="modal" data-target="#myModal">
            Book A Room
          </button>

        </div>
      </main>
      <section className='two_halves_content'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 d-flex align-items-center ">
              <div className="fist_content d-flex align-items-center  mb-3 mb-md-0">

                <div>
                  <h2 className=''>Find the perfect hotel near by you</h2>
                  <p>
                  <li className='fs-2'>Coffee Shop</li>
                  <li className='fs-2'>Bar & Restaurant</li>
                  <li className='fs-2'>Rooms</li>
                  <li className='fs-2'>Meeting Halls</li>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officia nihil odit blanditiis repellendus eligendi, tempora consequuntur sint officiis exercitationem aut rem inventore quod, obcaecati, illum a laborum ducimus incidunt! */}
                  </p>
                </div>
              </div>


            </div>
            <div className="col-12 col-md-7">
              <div className="about_thumb d-flex">
                <div className="img_1">
                  <img src="./img/foods.jpg" className='img-fluid img-thumbnail rounded-0 border-0 p-0' height='250' alt="" />
                </div>
                <div className="img_2">
                  <img src="img/foods2.jpg" className='img-fluid img-thumbnail rounded-0 border-0 p-0' height='250' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='our_accommodations'>
        <div className="container">
          <div className="heading text-center">
            <h2 className=' text-wrap'>Our Accommodations</h2>
          </div>
          <div className="rooms_here">
            <div className="single_rooms">
              <div className="room_thumb">
                <img src="https://i.imgur.com/JVGd1IL.jpg" alt="" height={400} width={400} />
                <div className="room_heading d-flex justify-content-between align-items-center">
                  <div className="room_heading_inner">
                    {/* <span>From $250/night</span> */}
                    <h3>Super-Delux Room</h3>
                  </div>
                  <a href="./rooms" className="line-button">book now</a>
                </div>
              </div>
            </div>
            <div className="single_rooms">
              <div className="room_thumb">
                <img src="https://i.imgur.com/aYrwHsr.jpg" alt="" height={400}/>
                <div className="room_heading d-flex justify-content-between align-items-center">
                  <div className="room_heading_inner">
                    {/* <span>From $250/night</span> */}
                    <h3>Deluxe Room</h3>
                  </div>
                  <a href="./rooms" className="line-button">book now</a>
                </div>
              </div>
            </div>
            <div className="single_rooms">
              <div className="room_thumb">
                <img src="https://i.imgur.com/Sqk98dG.jpg" alt="" />
                <div className="room_heading d-flex justify-content-between align-items-center">
                  <div className="room_heading_inner">
                    {/* <span>From $250/night</span> */}
                    <h3>Family Rooms</h3>
                  </div>
                  <a href="./rooms" className="line-button">book now</a>
                </div>
              </div>
            </div>
            <div className="single_rooms">
              <div className="room_thumb">
                <img src="https://i.imgur.com/1zF8E5x.jpg" alt="" />
                <div className="room_heading d-flex justify-content-between align-items-center">
                  <div className="room_heading_inner">
                    {/* <span>From $250/night</span> */}
                    <h3>Couple Room</h3>
                  </div>
                  <a href="./rooms" className="line-button">book now</a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
      <div className="video_area video_bg overlay">
        <div className="video_area_inner text-center">
          <span>Hotel United Inn</span>
          <h3>Relax and Enjoy your <br />
            Vacation </h3>
          <a href="https://fb.watch/b2jJYMmHWL/" className="video_btn popup-video">
            <i className="fa fa-play"></i>
          </a>
        </div>
      </div>
      <Facilty/>
    </Fragment>
  )
}
