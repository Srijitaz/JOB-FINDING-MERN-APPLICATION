import React from 'react'
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import {SiTesla} from "react-icons/si"
const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Google",
      location: "Infantry Rd, Bangalore",
      openPositions: 25,
      icon: <FaGoogle />,
    },
    {
      id: 2,
      title: "Microsoft",
      location: "1 Microsoft Way, Redmond, WA, USA",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 3,
      title: "Tesla",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 10,
      icon: <SiTesla />,
    },
  ];
  return (
    <>
      <div className="companies">
        <div className="container">
          <h1>TOP COMPANIES </h1>
          <div className="banner">
            {
              companies.map(element=>{
                return(
                  <div className="card" key={element.id} >
                    <div className="content">
                      <div className="icon">{element.icon}</div>
                      <div className="text">
                        <p>{element.title}</p>
                        <p>{element.location}</p>
                      </div>
                    </div>
                    <button>Open Positions {element.openPositions}</button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularCompanies
