import React, { useContext } from 'react'
import { Context } from '../../main.jsx'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaYoutube, FaLinkedin} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
const Footer = () => {
  const {isAuthorized} = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow":"footerHide"}>
      <div>&copy; All Rights Reserved by Srijita</div>
      <div>
        <Link to ={"https://www.facebook.com/srijita.saha.31337/"} target="_blank"><FaFacebookF/></Link>
        <Link to ={"https://www.linkedin.com/in/srijita-saha-18571124b/"} target="_blank"><FaLinkedin/></Link>
        <Link to ={"https://www.youtube.com/@_itz_messed"} target="_blank"><FaYoutube/></Link>
        <Link to ={"https://www.instagram.com/_itz.messed_"} target="_blank"><RiInstagramFill/></Link>
      </div>
    </footer>
  )
}

export default Footer
