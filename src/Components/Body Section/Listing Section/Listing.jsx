import React from 'react'
import './Listing.css'
import {AiFillHeart} from 'react-icons/ai';
import {BsArrowRightShort} from 'react-icons/bs';


import img4 from '../../../Assets/img4.png'
import img5 from '../../../Assets/img5.png'
import img6 from '../../../Assets/img6.png'
import img7 from '../../../Assets/img7.png'
import img8 from '../../../Assets/img8.png'

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All<BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img4} alt='Image Name' />
          <h3>Annual Vince</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img5} alt='Image Name' />
          <h3>Coffee Plant</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img6} alt='Image Name' />
          <h3>Button Fern</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img7} alt='Image Name' />
          <h3>Spider Plan</h3>
        </div>


      </div>


      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
          See All<BsArrowRightShort className='icon'/>
        </button>
          </div>

          <div className="card flex">
          <div className="users">
            <img src={img8} alt="User Image" />
            <img src={img8} alt="User Image" />
            <img src={img8} alt="User Image" />
            <img src={img8} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
              14.556 Plant Sold <br />
              <small>
                21 Sellers <span className='date'>7 Days</span>
                </small>  
              </span>
             </div>  
          </div>
        </div>


        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
          See All<BsArrowRightShort className='icon'/>
        </button>
          </div>

          <div className="card flex">
          <div className="users">
            <img src={img8} alt="User Image" />
            <img src={img8} alt="User Image" />
            <img src={img8} alt="User Image" />
            <img src={img8} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
              14.556 Plant Sold <br />
              <small>
                21 Sellers <span className='date'>7 Days</span>
                </small>  
              </span>
             </div>  
          </div>
        </div>
      </div>
      </div>
  )
}

export default Listing