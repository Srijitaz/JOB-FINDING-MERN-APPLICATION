import React from 'react'
import {FaSuitcase, FaBuilding, FaUsers, FaUserPlus} from 'react-icons/fa'
const HeroSec = () => {
  const details = [
    {
      id: 1,
      title: "2,30,450",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "97250",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "4,34,100",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "2,03,550",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h1>Find Job that you love</h1>
            <h1>your interests and skills</h1>
            <p>Welcome to the right page where you will find the job that suits you the most . Discover new jobs that justifies your capabilities</p>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {
            details.map(element=>{
              return(
                <div className="card" key={element.id}>
                  <div className="icon">{element.icon}</div>
                  <div className="content">
                    <p>{element.title}</p>
                    <p>{element.subTitle}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default HeroSec
