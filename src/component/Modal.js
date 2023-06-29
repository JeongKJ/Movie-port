import icon from '../img/number-2.png'
import icon2 from '../img/free-icon-number-3-8068125.png'
import { useState,useCallback,useEffect } from 'react';
import List from './List';

const plus = icon;
const plus2 = icon2;
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() +1;
let date = today.getDate();
let day = today.getDay();
let week = ['일','월','화','수','목','금','토'];
let dayname = week[day];
const hour = Math.ceil(Math.random() * 20);
const hour2 = Math.ceil(Math.random() * 10);
const hour3 = Math.ceil(Math.random() * 15);
const minute = Math.ceil(Math.random()*6)*5;
const minute2 = Math.ceil(Math.random()*6)*5;
const minute3 = Math.ceil(Math.random() * 6) * 5;
const reservetime = year + '년' + month + '월' + date + '일';
const data = [
    {
        hour: hour ,
        minute: minute
    },
    {
        hour: hour+2,
        minute: minute+25
    },
    {
        hour: hour  + 4,
        minute: minute
    },
            {
        hour: hour2 + 1,
        minute: minute2 + 15
    },
        {
        hour: hour2 + 3,
        minute: minute2 + 20
    },
            {
        hour: hour2 + 5,
        minute: minute2 + 5
    },
                {
        hour: hour2 + 7,
        minute: minute2 + 10
    }
]
const data2 = [
        {
        hour: hour2 + 1,
        minute: minute2 + 15
    },
        {
        hour: hour2 + 3,
        minute: minute2 + 20
    },
            {
        hour: hour2 + 5,
        minute: minute2 + 5
    },
                {
        hour: hour2 + 7,
        minute: minute2 + 10
    }
]
const data3 = [
    {
        hour:hour3,
        minute:minute3
    },
        {
        hour:hour3+2,
        minute:minute3+5
    },
            {
        hour:hour3+4,
        minute:minute3+25
    },
                {
        hour:hour3+6,
        minute:minute3+15
    },
]


export default function Modal({ movie, toggle, title }) {
    
    // const [click, setClick] = useState(false);
    const [secondtoggle, setSecondtoggle] = useState(false);
    const [list, setList] = useState('');
    const [place, setPlace] = useState('');

    // if(toggle===false){
    //     return null;
    // }
    // else{
        // document.querySelector('#imgwrap>ul').style.display = 'none';

        return(
            <div id="secondpage">
                <div className='secondwrap'>
            <h3>빠른예매</h3>
            <ul>
                <li><img src={movie} alt=""></img></li>
                <li><img src={plus} alt=""></img></li>
                <li><img src={plus2} alt=''></img></li>
            </ul>
            <h3>(오늘) {year}년 {month}월 {date}일 ({dayname})</h3>
            <ul>
                <li>
                    <span>
                        {dayname}
                        </span>
                        
                </li>
                <li>
                    {week[day+1]}
                </li>
                <li>
                    {week[day+2]}
                </li>
                <li>
                    {week[day+3]}
                </li>
                <li>
                    {week[day+4]}
                </li>
            </ul>
            <div className="place">
            <h4>강남</h4>
            <ul>
                {data.map((item, index) => {
                     return (
                         <li key={index} onClick={() => {
                             setSecondtoggle(!false)
                             setList(`${item.hour}시 ${item.minute}분`)
                             setPlace('강남')
                         }}>{item.hour}시 {item.minute}분</li>
                    )
                })}
            </ul>
            <h4>상암</h4>
            <ul>
                {data2.map((item, index) => {
                            return (
                                <li key={index} onClick={()=>{
                                    setSecondtoggle(!false)
                                    setList(`${item.hour}시 ${item.minute}분`)
                                    setPlace('상암')
                                }
                                }>{item.hour}시 {item.minute}분</li>
                            )
                        })}
            </ul>
            <h4>건대입구</h4>
            <ul>
                        {data3.map((item, index) => {
                            return (
                                <li key={index} onClick={()=>{
                                    setSecondtoggle(!false)
                                    setList(`${item.hour}시 ${item.minute}분`)
                                    setPlace('건대')
                                }}>{item.hour}시 {item.minute}분</li>
                   )
               })}
            </ul>
            <h4>불광</h4>
            <ul>
               {data.map((item, index) => {
                            return (
                                <li key={index} onClick={()=>{
                                    setSecondtoggle(!false)
                                    setList(`${item.hour}시 ${item.minute}분`)
                                    setPlace('불광')
                                }}>{item.hour}시 {item.minute}분</li>
                   )
               })}
            </ul>
                    </div>
                    </div>
                <List
                    toggle={secondtoggle}
                    list={list}
                    place={place}
                    movie={movie}
                    icon2={icon2}
                    title={title}
                    reservetime= {reservetime}
                    />
            </div>
            
        )
    }
    
// }