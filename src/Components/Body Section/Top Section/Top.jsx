import React from 'react'
import './Top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { BsArrowRightShort } from 'react-icons/bs'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { TbMessageCircle } from 'react-icons/tb'

import img from '../../../Assets/img.png'
import img2 from '../../../Assets/img2.png'
import video2 from '../../../Assets/video2.mp4'

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
      <div className="title">
        <h1>수정님 환영합니다</h1>
        <p>안녕하세요 ^^ </p>
      </div>

      <div className="searchBar flex">
        <input type='text' placeholder='Search Dashboard' />
        <BiSearchAlt className='icon'/>
      </div>

      <div className="adminDiv flex">
        <TbMessageCircle className='icon'/>
        <MdOutlineNotificationsNone className='icon'/>
        <div className="adminImage">
          <img src={img} alt="Admin Image" />
        </div>
      </div>


      </div>


      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>나만의 특별한 식물을 찾아보세요</h1>
          <p>국내에서 빠르게 성장하고 있는 회사!</p>

          <div className="buttons flex">
            <div className="btn">더 알아보기</div>
            <div className="btn transparent">인기 아이템</div>
          </div>

          <div className="videoDiv">
            <video src={video2} autoPlay muted loop></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small> 
                </span>
              </div>

              <div className="flex">
                <span>
                This Month <br /> <small>175 Orders</small> 
                </span>
              </div>

              <span className='flex link'>
                Go to my orders <BsArrowRightShort className='icon' />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="Image Name" />
            </div>

            {/* <div className="sideBarCard">
                  <BsQuestionCircle className='icon'/>
                  <div className="cardContent">
                      <div className="circle1"></div>
                      <div className="circle2"></div>

                      <h3>고객센터</h3>
                      <p>도움이 필요하시면 연락해주세요</p>
                      <button className="btn">고객센터로 가기</button>
                  </div>
               </div> */}


          </div>
        </div>
      </div>
    </div>
  )
}

export default Top