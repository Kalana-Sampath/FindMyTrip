import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/video(1).mp4';

import { GrLocation } from 'react-icons/gr';
import { HiFilter } from "react-icons/hi";

import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  // React hook to add a scroll animation
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);



  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div data-aos="fade-up" className="textDiv">

          <span  data-aos-duration="2800" className="smallText">
            Our Pacakages
          </span>

          <h1 className="homeTitle">
            Search your Holiday
          </h1>

        </div>

        <div data-aos="fade-up" className="cardDiv grid">

          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here....' />
              <GrLocation className='icon' />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date"/>
            </div>
          </div>

          <div className="destinationInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className='icon'/>
            <span>MORE FILTERS</span> 
          </div>
        </div>

        <div  className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className='icon' />
            <AiOutlineInstagram className='icon' />
            <SiTripadvisor className='icon' />
          </div>
          <div  className="leftIcons">
            <BsListTask className='icon'/>
            <TbApps className='icon'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

