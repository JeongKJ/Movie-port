import { useState,useCallback,useEffect} from 'react';
import Check from './Check';
import cgv from '../img/1Z2T8KXUWW_7.jpg'
import {BiDownArrow} from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';

const cgvimg = cgv;
const btn = [1, 2, 3, 4, 5]
export default function List({  reservetime, toggle, place, list, movie, icon2, title, lastId, onAdd }) {
    const [open,setOpen] = useState(false);
    const [click, setClick] = useState(false);
    const [number, setNumber] = useState('');
    const [datalist, setDataList] = useState([]);
    const [search, setSearch] = useState('1');
    const [sort, setSort] = useState('movieName');
    const [query, setQeury] = useState('');

    const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response=>response.json())
    .then(data =>setDataList(data))
  }, [])
    useEffect(fetchData, [fetchData])
    
    if (toggle === false) {
        return null;
    }
    else {
        document.querySelector('#imgwrap>h3').style.display ='none'
        document.querySelector('#imgwrap>ul').style.display ='none'
        document.querySelector('#secondpage>.secondwrap').style.display ='none'
        const filterList = datalist.filter(item => {
            return (
                item.movieName.toLowerCase().includes(query.toLocaleLowerCase()) ||
                item.cinemaName.toLowerCase().includes(query.toLocaleLowerCase())
            )
        }).sort((a, b) => {
            return (
            a[sort].toLowerCase()<b[sort].toLowerCase() ? -1 : 1
        )})
        return (
            <div id="thirdpage">
                <div id='thirdwrap'>
            <ul>
                <li><img src={movie} alt=""></img></li>
                <li><img src={cgvimg} alt=""></img></li>
                <li><img src={icon2} alt=''></img></li>
                </ul>
                <ul>
                    <li>
                        <dfn>영화명</dfn>
                         <span> {title}</span>
                    </li>
                    <li>
                        <dfn>극장명</dfn>
                         <span> {place}</span>
                    </li>
                    <li>
                        <dfn>영화시간</dfn> 
                         <span> {list}</span>
                    </li>
                    <li>
                        <dfn>인원수</dfn> 
                            <span>
                                {btn.map((item, index) => {
                                    return (
                                        <button type='button' key={index} onClick={() => {
                                            setClick(index)
                                            setNumber(item)
                                            setOpen(!false);
                                        }
                                        }
                                            className={click === index ? 'clicked' : ''}>{item}</button>
                                    )
                                })}
                         </span>
                    </li>
                    </ul>
                    
                </div>
                <div id="lastpage">
                <div id='check'>
                <input type="text" placeholder="검색창" value={query} onChange={(e)=>setQeury(e.target.value)}></input>
                        <button type="button" onClick={() =>    
                        {
                            if (search === '1') {
                                document.querySelector('#check>ul').style.display = 'block'
                                setSearch('2');
                            }
                            else if (search === '2') {
                                document.querySelector('#check>ul').style.display = 'none';
                                setSearch('1');
                            }
                        }
                        }><BiDownArrow /></button>
                <ul>
                    <li onClick={()=>setSort('movieName')}>영화명</li>
                            <li onClick={() => setSort('cinemaName')}>극장명</li>
                            <li onClick={()=>setSort('movieDate')}>날짜순</li>
                        </ul>
                        <p onClick={() => {
                            window.location.reload();
                        }}><FaHome color='#fff'size='30px' />  Home</p>
                   </div>
                <ul>
                    {filterList.map((item) => {
                        return (
                            <li key={item.id} item={item}>
                                <figure>
                                    <img src={item.moviePoster} alt={item.title}></img>
                                    <figcaption>{item.movieName}</figcaption>
                                </figure>
                                <dl>
                                    <dfn>극장명</dfn>
                                    <dd>{item.cinemaName}</dd>
                                    <dfn>날짜</dfn>
                                    <dd>{item.movieDate}</dd>
                                        <dfn>시간</dfn>
                                        <dd>{item.movieTime}</dd>
                                    <dfn>인원수</dfn>
                                    <dd>{item.personNumber}명</dd>
                                </dl>
                            </li>
                        )
                    })}
                </ul>
            </div>
                <Check
                    onAdd={data => setDataList([...datalist, data])}
                    lastId={datalist.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}
                    reservetime={reservetime}
                    number={number} title={title} place={place} list={list} open={open} cgvimg={cgvimg} movie={movie} click={click} />
                </div>
            )
        }
}