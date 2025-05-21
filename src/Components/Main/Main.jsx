import React, {useEffect} from 'react'
import './main.css'

// import icons
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

// Let me import the images so we do not have this error on the browser
import  img1 from '../../Assets/Citrus.jpg'
import  img2 from '../../Assets/Jetwing Blue.jpg'
import  img3 from '../../Assets/Hotel Riu.jpg'
import  img4 from '../../Assets/Mandara.jpg'
import  img5 from '../../Assets/Anantaya.jpg'
import  img6 from '../../Assets/Amaya Beach.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTilte: 'Citrus Hikaduwa',
    location: '400 Galle Road, Hikkaduwa 80240 Sri Lanka',
    grade: '4.1',
    fees: '$85',
    description: 'Embrace the vibrant charm of Hikkaduwa at Citrus Hikkaduwa, the perfect getaway for an unforgettable beach vacation. Nestled along the sun-kissed shores of southern Sri Lanka.our hotel provides the ideal base to explore the eclectic paradise of Hikkaduwa, its stunning beaches, and lively nightlife. Renowned for its shallow fringing reef, Hikkaduwa is a haven for water sports enthusiasts.'
  },
  
  // Image 2
  {
    id: 2,
    imgSrc: img2,
    destTilte: 'Jetwing Blue',
    location: 'Porutota Road, Negombo 11500 Sri Lanka',
    grade: '4.2',
    fees: '$30',
    description: 'Situated along the captivating golden shores of Negombo, Jetwing Blue offers its guests delightful experiences together with luxury accommodation, boasting the only 5 Star classification in the area. Located in the Negombo city, on a pristine stretch of beach, Jetwing Blue encapsulates the splendor of this exotic town while exploring its tantalizing seafood.'
  },
  
  // Image 3
  {
    id: 3,
    imgSrc: img3,
    destTilte: 'Hotel Riu Sri Lanka',
    location: 'Galle Road Ahungalla Beach, Ahungalla 80562 Sri Lanka',
    grade: '4.5',
    fees: '$41',
    description: 'The Hotel Riu Sri Lanka is located on a magnificent beach set against a stunning backdrop. This hotel in Ahungalla is the ideal place to enjoy an authentic vacation in Sri Lanka together with your family and friends and to discover the all-inclusive 24 hour a day service offered by RIU Hotels & Resorts.All of the services and amenities offered by Hotel Riu Sri Lanka.'
  },
  // Image 4
  {
    id: 4,
    imgSrc: img4,
    destTilte: 'Mandara Resort',
    location: '416 A, Mirissa 81740 Sri Lanka',
    grade: '4.3',
    fees: '$73',
    description: 'Mandara Resort at Mirissa Weligama, Overlooking famous Read Cliff Mountains and Mirissa Bay with a breathtaking view of the Indian Ocean, Mandara Resort lets you leave all worldly cares behind. The rooms are fully equipped with satellite TV, DVD player and home theater systems, safety lockers, AC, rooms with jacuzzi, rooms with private plunge pools. Swimming pool with fiber optic lighting, restaurant, bar and gymnasium with state of the art equipment to keep you fit, Wi-Fi facility.'
  },
  
  // Image 5
  {
    id: 5,
    imgSrc: img5,
    destTilte: 'Anantaya Resort',
    location: 'Coconut Cultivation Board Road Pasikudah, Kalkudah 30410 Sri Lanka',
    grade: '4.7',
    fees: '$91',
    description: 'Imagine a place where the gentle rays of the morning sun greet you each day along with the sweet serenade of waves eagerly rushing to shore. Outside your doorstep lies pure soft sand along an untouched stretch of beach, bordered by dazzling shades of blue. Innovative style meets barefoot island living at one of the most unique Pasikuda hotels along Sri Lanka’s East Coast',
  },

  // Image 6
   {
    id: 6,
    imgSrc: img6,
    destTilte: 'Amaya Beach',
    location: 'National Holiday Resort, Kalkudah 10120 Sri Lanka',
    grade: '4.4',
    fees: '$79',
    description: 'Located on the dreamy shores of the Indian Ocean in the East coast, the stunning Amaya Beach, is the pearl of the iconic Pasikudah bay. With 125 contemporarily furnished rooms and suites, this beach haven offers and idyllic environment to relax and recharge and is the perfect playground for the watersport enthusiasts.This luxurious resort offers a large swimming pool, water-sports activities and an award-winning spa and is 5.5 hours away from the Bandaranaike International airport.'
    },
  
]

const Main = () => {

  // React hook to add a scroll animation
    useEffect(() => {
      AOS.init({duration: 2000});
    }, []);



  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className='title'>
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
          {
            Data.map(({ id, imgSrc, destTilte, location, grade, fees, description }) => {
              return (
                <div key={id} className="singleDestination"  data-aos="fade-up">
                  <img className="imageDiv" src={imgSrc} alt={destTilte} />

                  <div className="cardInfo">
                    <h4 className='destTitle'>{destTilte}</h4>
                    <span className='continent flex'>
                      <HiOutlineLocationMarker className='icon' />
                      <span className='name'>{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade} <small>good</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>
                    
                    <button className='btn flex'>
                      DETAILS <HiOutlineClipboardCheck className='icon' />
                    </button> 
                  </div>
                </div>
              )
            })
          }
      </div>
    </section> 
  )
}

export default Main 