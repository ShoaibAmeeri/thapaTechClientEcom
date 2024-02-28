import React, { useState } from "react";
import './about.css'
import Analytics from "../../components/Analytics";
import { useAuth } from "../../store/auth";



function About() {

  

  const {user} = useAuth() 



  return (
    <>

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
          <p>Welcome {user ? user.userData.username : "" } to our website</p>
            <p>We are the World Best IT Company</p>
            <h1>Why Choose Us</h1>
           

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto vero aut eos facilis similique magnam fugit temporibus
              laborum ipsum commodi?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto vero aut eos facilis similique magnam fugit temporibus
              laborum ipsum commodi?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto vero aut eos facilis similique magnam fugit temporibus
              laborum ipsum commodi?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto vero aut eos facilis similique magnam fugit temporibus
              laborum ipsum commodi?
            </p>
          
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>

          {/* hero images  */}  
          <div className="hero-image">
            <img
              src="/images/about.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>
        </div>
      </section>

      <Analytics/>
    </>
  );
}

export default About;
