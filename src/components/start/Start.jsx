import './start.css'
import '../../components/styles.css'
import EnterImg from "../../img/startimg.jpeg"
import { Link } from 'react-router-dom'

function Start() {
 

  
  return (
    <div className='enter'>
        <img src={EnterImg} className='start-img' alt="" />
        <h1 >Welcome to My Interview Questions App</h1>
        <div className='button-container'>
          <Link to="/mix"><button className='enter-button' >Mix (80 Questions)</button></Link>
          <Link to="/html"><button className='enter-button'>HTML (50 Questions)</button></Link>
          <Link to="/css"><button className='enter-button'>CSS (50 Questions)</button></Link>
          <Link to="/js"><button className='enter-button'>JavaScript (200 Questions)</button></Link>
          <Link to="/react"><button className='enter-button'>React (96 Questions)</button></Link>
          <Link to="/nodejs"><button className='enter-button'>Nodejs (50 Questions)</button></Link>
          <Link to="/sql"><button className='enter-button'>SQL (50 Questions)</button></Link>
        </div>
    </div>
  )
}

export default Start
