import React, { useState } from "react";
//create your first component
const Home = () => {
    const [activeLight, setActiveLight] = useState ("Red");
    function handleClick(e) {
        e.preventDefault()
        if (activeLight == "Red"){
            setActiveLight("Yellow");
        }
        else if (activeLight == "Yellow"){
            setActiveLight("Green");
        }
        else {
            setActiveLight("Red")
        }
    }
    return (
        <div className="main">
            <div>
                <div className={activeLight === "Red" ? "Red Light Glow" : "Red Light"} onClick={() => setActiveLight ("Red")}></div>
                <div className={activeLight === "Yellow" ? " Yellow Light Glow " : "Yellow Light"} onClick={() => setActiveLight ("Yellow")}></div>
                <div className={activeLight === "Green" ? " Green Light Glow " : "Green Light"} onClick={() => setActiveLight ("Green")}></div>
            </div>
            <button onClick={(e) => handleClick (e)} className="btn">Button </button>
        </div>
    );
};
export default Home;