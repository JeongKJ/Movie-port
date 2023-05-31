import Movie1 from '../img/3.jpg'
import Movie2 from '../img/Mermaid.jpg'
import Movie3 from '../img/Madmax.jpg'
import Movie4 from '../img/galaxy.jpg'
import Movie5 from '../img/Mario.jpg'
import Movie6 from '../img/10year.jpg'
// import Movie7 from '../img/Dully.jpg'
import Movie8 from '../img/Deadbody.jpg'
import Movie9 from '../img/zzang9.jpg'
import Modal from './Modal'
import { useState } from 'react'

const img1 = Movie1;
const img2 = Movie2;
const img3 = Movie3;
const img4 = Movie4;
const img5 = Movie5;
const img6 = Movie6;
// const img7 = Movie7;
const img8 = Movie8;
const img9 = Movie9;

export default function Image(){
    
    const [movie,setMovie] = useState('');
    const [toggle,setTtoggle] = useState(false);
    const [title, setTitle] = useState('');
    return(
    <>
        <ul>
            <li onClick={()=>{
                setMovie(Movie1);
                    setTtoggle(!false)
                    setTitle('범죄도시');
            }}>
                <img src={img1} alt='1번영화'></img>
            </li>
            <li onClick={()=>{
                setMovie(Movie2);
                    setTtoggle(!false)
                    setTitle('인어공주');
            }}>
                <img src={img2} alt='2번영화'></img>
            </li>
            <li onClick={()=>{
                setMovie(Movie3);
                    setTtoggle(!false)
                    setTitle('분노의 질주');
            }}>
                <img src={img3} alt='3번영화'></img>
            </li>
            <li onClick={()=>{
                setMovie(Movie4);
                    setTtoggle(!false)
                    setTitle('가디언즈 오브 갤럭시3');
            }}>
                <img src={img4} alt='4번영화'></img>
            </li>
            <li onClick={()=>{
                setMovie(Movie5);
                    setTtoggle(!false)
                    setTitle('Super Mario');
            }}>
                <img src={img5} alt='5번영화'></img>
            </li>
            <li onClick={()=>{
                setMovie(Movie6);
                    setTtoggle(!false)
                    setTitle('남은인생 10년');
            }}>
                <img src={img6} alt='6번영화'></img>
            </li>
            {/* <li>
                <img src={img7} alt='7번영화'></img>
            </li> */}
            <li onClick={()=>{
                setMovie(Movie8);
                    setTtoggle(!false)
                    setTitle('메리마이 데드바디');
            }}>
                <img src={img8} alt='8번영화'></img>
            </li>
            <li onClick={()=>{
                setMovie(Movie9);
                    setTtoggle(!false)
                    setTitle('짱구는 못말려 극장판');
            }}>
                <img src={img9} alt='9번영화'></img>
            </li>
        </ul>
            <Modal movie={movie} toggle={toggle} title={title} />
        </>
    )
}