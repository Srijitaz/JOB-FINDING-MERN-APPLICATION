import React from 'react'
import {FaUserPlus} from "react-icons/fa";
import {MdFindInPage} from "react-icons/md";
import {IoMdSend} from "react-icons/io"
const Works = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus/>
              <p>Create Account</p>
              <p>JobZee is a job providing platform that gives you a range of jobs that may suit you</p>
            </div>
            <div className="card">
              <MdFindInPage/>
              <p>Find a job/Post a job</p>
              <p>JobZee is a job providing platform that gives you a range of jobs that may suit you</p>
            </div>
            <div className="card">
              <IoMdSend/>
              <p>Create Account</p>
              <p>JobZee is a job providing platform that gives you a range of jobs that may suit you</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Works
