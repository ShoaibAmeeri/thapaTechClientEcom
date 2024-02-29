import React, { useEffect } from "react";
import { useAuth } from "../../store/auth";

function Services() {
  const {services} = useAuth() 
  // useEffect(async () => {
  //   
  // }, []);

  return (
    <section className="section-services">
      <div className="container">
        <div className="main-heading">services</div>
      </div>

      <div className="container grid grid-three-cols">
       {services.map((card,i)=>{
        const {price, descriptions, services, provider} = card
        return (
        <div className="card" key={i}>
          <div className="card-img">
            <img src="/images/design.png" alt="our services info" width="500" />
          </div>

          <div className="card-details">
            <div className="grid grid-two-cols">
              <p>{provider}</p>
              <p>{price}</p>
            </div>
            <h2>{services} </h2>
            <p>{descriptions}</p>
          </div>
        </div>)
       })}
       
      </div>
    </section> 
  );
}

export default Services;
