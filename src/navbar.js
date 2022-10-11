import React from "react";
import axios from "axios";

function Navbar2() {

function load(){
var r=document.getElementById("root2");
  axios.get('contact.txt')
  .then(res => {
    var p = res.data;
    //console.log(p);
    r.innerHTML=res.data;
  })
  .catch(error => console.log(error));

  
}

  return (
    <div class="animation">
 
<nav class = "navbar navbar-expand-lg navbar-dark heads " id="hite">




        <a class = "navbar-brand" id="logo">Conversion Tool</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
       
     
        <ul class = "navbar-nav ms-auto">
            <li class = "nav-item">
                <a class="lin" role="button" href=".">Home</a>
 
                
 
            </li>
            <li class = "nav-item">
                <a class="lin">About</a>
            </li>
            <li class = "nav-item ">
                <a class="lin" onClick={load}>Contact</a>
            </li>
 
        </ul>
        </div>
    </nav>
 

</div>
  );
}

export default Navbar2;
