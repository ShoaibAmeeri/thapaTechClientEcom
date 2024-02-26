import { useState } from "react";
import "./auth.css"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../../store/auth";

const URL = "http://localhost:5000/api/auth/login"



function  Login() {
  const [user, setUser] = useState({
    email : "",
    password: ""
  })
  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value
    
    setUser({
      ...user,
      [name] : value
    })
  };

  
  const navigate = useNavigate()
  const {storeTokenInLS} = useAuth()
  const handleSubmit = async(e) => {
    e.preventDefault()
   
    const response = await fetch(URL, {
      method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(user)
    }) 
    if(response.ok){
      
      const res_data = await response.json()
      storeTokenInLS(res_data.token)


      setUser({email : "", password: ""})
      navigate("/")
    }
    else{
      alert("invalid credentials")
    }
    
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Login;
