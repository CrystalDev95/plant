import React from 'react'
import './Sidebar.css'
import logo from '../../Assets/logo.png'
import { IoMdSpeedometer } from 'react-icons/io'
import { TbPlant } from 'react-icons/tb'
import { BsCreditCard2Front, BsQuestionCircle } from 'react-icons/bs'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar} from 'react-icons/md'


const Sidebar = () => {
  return (
    <div className="sideBar grid">
        <div className="logoDiv flex">
            <img src={logo} alt="Image Name" />
            <h2>Planti.</h2>
        </div>

        <div className="menuDiv">
            <h3 className="divTitle">
                퀵 메뉴
            </h3>

            <ul className="menuLists grid">
            <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <IoMdSpeedometer className='icon'/>
                        <span className="smallText">
                            대시보드
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <MdDeliveryDining className='icon'/>
                        <span className="smallText">
                            내 주문
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <MdOutlineExplore className='icon'/>
                        <span className="smallText">
                            구경하기
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <TbPlant className='icon'/>
                        <span className="smallText">
                            제품
                        </span>
                    </a>
                </li>
            </ul>
        </div>


        <div className="settingsDiv">
            <h3 className="divTitle">
                설정
            </h3>

            <ul className="menuLists grid">
            <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <AiOutlinePieChart className='icon'/>
                        <span className="smallText">
                            차트
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <BiTrendingUp className='icon'/>
                        <span className="smallText">
                            트렌드
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <MdOutlinePermContactCalendar className='icon'/>
                        <span className="smallText">
                            연락하기
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className='menuLink flex'>
                        <BsCreditCard2Front className='icon'/>
                        <span className="smallText">
                            결제
                        </span>
                    </a>
                </li>
            </ul>
        </div>

        <div className="sideBarCard">
            <BsQuestionCircle className='icon'/>
            <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>고객센터</h3>
                <p>도움이 필요하시면 연락해주세요</p>
                <button className="btn">고객센터로 가기</button>
            </div>
        </div>

    </div>
  )
}

export default Sidebar