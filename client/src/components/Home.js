import React from "react"
import profile from "../assets/cupid-pic.jpg"

function Home () {
    return( 
        <section id="Homepage">
      <div className="row">
         <div className="twelve columns main-col">
         {/* <img src={profile} className="Profile"></img> */}
            <h2>Welcome to Cupid's Blind Date!</h2>
            <p>
            'Make the first move...',</p>
            <p> 'Over 1,000 singles on Cupid...'</p>
            <p> 'Find men...'</p>
            <p> 'Find women...'</p>
            <p> 'or Find both?...,</p>
            <p> 'Sign up or Login to browse!',</p>
            <div className="row">
            
                  
               </div>
            </div>
         </div>
         <div id="imgcontainer"><img src={profile} className="Profile"></img></div>

   </section>
  );
}

export default Home;