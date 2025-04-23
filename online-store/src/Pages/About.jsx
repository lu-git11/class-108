import { useState } from "react";
import "./About.css";
import { createRoot } from "react-dom/client";

function About(){
    let [showEmail, setEmail] = useState(false);

    function show(){
        setEmail(true);
    }

    return (
        <div className="about"> 
            <img src="/src/assets/react.svg" alt="" />
            <h2>Jeff Jeff</h2>
            { showEmail ? <h5>jeff@sdgku.com</h5> : null }
            
            <button onClick={show}>show email</button>
        </div>
    );
}

export default About;