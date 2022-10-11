import React from 'react'
import axios from 'axios'

export default function Content() {

    function ch(){

    
    var a=document.getElementById("selunit").value;
    var b=document.getElementById("un");
    var r=document.getElementById("r2");
b.innerHTML=a;
var c=a+".txt";
axios.get(c)
    .then(res => {
      var p = res.data;
      console.log(p);
      r.innerHTML=p;
    })
    .catch(error => console.log(error));
    };
    


    function convertl(){
        var a=document.getElementById("selunit2").value;
    var b=document.getElementById("selunit3").value;
    var c=document.getElementById("in").value;
    var r=document.getElementById("res");
    var d=b-a;
    d=Math.pow(10,d);
    c=d*c;
    r.innerHTML="Result : "
    r.innerHTML+=c;
    }

    function convertt(){
        var a=document.getElementById("selunit2").value;
        var b=document.getElementById("selunit3").value;
        var c=document.getElementById("in").value;
        var r=document.getElementById("res");
        var C;
        if(a!=b && a=='F'){
C=(5/9)*(c-32);
        }
        if(a!=b && a=='C'){
            C=(9*c+(160))/5;
        }
        if(a===b){
C=c;
        }
        C=C.toFixed(2);
        r.innerHTML="Result : ";
        r.innerHTML+=C;
        r.innerHTML+="° ";
        r.innerHTML+=b;
    }

    function typ(C){
        var d;
        if(C<=18.4){
            d=" (Underweight)";
        }
        else if(C>=18.5 && C<=24.9){
            d=" (Normal)";
        }
        else if(C>=25){
            d=" (Overweight)";
        }
        else if(C>=40){
            d=" (Obese)";
        }
        return d;
    }


    function callb(){
        var a=document.getElementById("in").value;
        var b=document.getElementById("in2").value;
        var c=document.getElementById("in3").value;
        var r=document.getElementById("res");
        var C;
        C=(a*12);
        C+=parseInt(b);
        C=C*C;
        C=c/C;
        C=C*703;
        C=C.toFixed(2);
        
        var d=typ(C);
        
        r.innerHTML="Result : ";
        r.innerHTML+=C;

        r.innerHTML+=d;
    }

    function calkg(){
        var a=document.getElementById("in").value;
        var c=document.getElementById("in3").value;
        var r=document.getElementById("res");
        var C;
        C=a/100;
        C=C*C;
        C=c/C;
        C=C.toFixed(2);
        
        var d=typ(C);
        
        r.innerHTML="Result : ";
        r.innerHTML+=C;

        r.innerHTML+=d;
    }



  return (
    <div id="root2">
    <div class="row" align="center">
<div class="col-lg-6 lside">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
<h1>CONVERT ANY UNIT</h1>
<br></br>
    <br></br>
    <br></br>
<select class="form-select sel" id="selunit" onChange={ch} >
          <option value="Length" selected>Length</option>
          <option value="Temperature">Temperature</option>
          <option value="Weight">Weight</option>
          <option value="BMI">BMI</option>
        </select>
</div>

<div class="col-lg-6"><br></br><br></br>
<h1 id="un">Length</h1>
<br></br>
<div id="r2">
<select class="form-select sel" id="selunit2" >
          <option value="3" selected>Meter(m)</option>
          <option value="5">Centimeter(cm)</option>
          <option value="6">Millimeter(mm)</option>
          <option value="0">Kilometer(km)</option>
        </select>
        &nbsp;
        <br></br>
        <input type="number" class="sel" id="in"></input>

        <br></br>
        <br></br>
        <h2>To</h2>

        <br></br>
        <select class="form-select sel" id="selunit3" >
          <option value="3" >Meter(m)</option>
          <option value="5" name="cm" selected>Centimeter(cm)</option>
          <option value="6">Millimeter(mm)</option>
          <option value="0" >Kilometer(km)</option>
        </select>

        <br></br>
        <button class="btn btn-primary" onClick={convertl}>Convert</button>
<br></br><br></br>

<h1 id="res"></h1>

</div>

</div>









    </div>
    </div>
  )
}
