
let values = 0;
//fisrt
document.getElementById("first-card").addEventListener("click",function(){
    
   values += 1;
    const  triangleTitle = document.getElementById("Triangle").innerText;
    const firstInputb = document.getElementById("first-inputb").value;
    const firstInputh= document.getElementById("first-inputh").value;

        if (
            firstInputb == "" ||
            firstInputh == "" ||
          
            firstInputb <= 0 ||
            firstInputh <= 0
          ) {
            return alert("please enter any valid number");
          }
		  
		  
		  
		    if (isNaN(firstInputb)){
            alert ("invalid amount" );
            return;
        }

        if (isNaN( firstInputh)){
            alert ("invalid amount" );
            return;
        }
		  
		  

          let total = 0.5 * parseInt(firstInputb) * parseInt(firstInputh);
          total = total.toFixed(2);
          const Unit  = "cm²";
          //   show the data using function
          displayData(triangleTitle, Unit ,  total);
          //   disabled button using function
          disabledButton("first-card");
    
});




//sec




document.getElementById("sec-card").addEventListener("click",function(){
    
    values += 1;
     const rectangleTitle = document.getElementById(" Rectangle").innerText;
     const  sInputw = document.getElementById("s-inputw").value;
     const sInputl= document.getElementById("s-inputl").value;
 

     //viladition
         if (
            sInputw == "" ||
            sInputl == "" ||
             sInputw <= 0 ||
             sInputl <= 0
           ) 
           {
             return alert("please enter any valid number");
           }


           if (isNaN(sInputw)){
            alert ("invalid amount" );
            return;
        }

        if (isNaN(sInputl)){
            alert ("invalid amount" );
            return;
        }
        

 
           let total = parseInt( sInputw ) * parseInt( sInputl);
           total =  total.toFixed(2);


           const Unit  = " cm²";
           //   show the data using function
           displayData(rectangleTitle, Unit ,  total);
           //   disabled button using function
           disabledButton("sec-card");
     
 });
 



//three

document.getElementById("third-card").addEventListener("click",function(){
    
    values += 1;
     const parallelogramTitle = document.getElementById("Parallelogram").innerText;
     const  sInputws = document.getElementById("T-inputb").value;
     const sInputls= document.getElementById("T-inputh").value;
 
         if (
            
            sInputws == "" ||
            sInputls == "" ||
             sInputws <= 0 ||
             sInputls <= 0
           ) 
           
           {
             return alert("please enter any valid number");
           }


           
           
            if (isNaN(  sInputws ))
            {
            alert ("invalid amount" );
            return;
        }

            
            if (isNaN( sInputls )){
            alert ("invalid amount" );
            return;
        }
        
 
           let total = parseInt( sInputws ) * parseInt( sInputls);
           total =  total.toFixed(2);


           const Unit  = " cm²";
           //   show the data using function
           displayData(parallelogramTitle, Unit ,  total);
           //   disabled button using function
           disabledButton("third-card");
     
 });



 
//four
 document.getElementById("four").addEventListener("click",function(){
    
    values += 1;
     const  rhombusTitle = document.getElementById("Rhombus").innerText;
     const finputdA = document.getElementById("F-inputda").value;
    
     const finputdB  = document.getElementById("F-inputldb").value;
 
         if (
            finputdA== "" ||
            finputdB  == "" ||
           
             finputdA <= 0 ||
             finputdB <= 0
           ) {
             return alert("please enter any valid number");
           }


           
    
           if (isNaN(finputdA )){
            alert ("invalid amount" );
            return;
        }

        if (isNaN(finputdB)){
            alert ("invalid amount" );
            return;
        }
        
 
           let total = 0.5 * parseInt(finputdA) * parseInt(finputdB);
           total = total.toFixed(2);
           const Unit  = " cm²";
           //   show the data using function
     displayData(rhombusTitle, Unit ,  total);
           //   disabled button using function
           disabledButton("four");
     
 });





//five

document.getElementById("five").addEventListener("click",function(){
    
   values += 1;
    const  pentagonTitle = document.getElementById("pentagon").innerText;

    const fiveinputP = document.getElementById("Five-inputp") .value;
    const fiveinputB = document.getElementById("Five-inputb").value;

        if (
            fiveinputP  == "" ||
            fiveinputB  == "" ||
          
            fiveinputP <= 0 ||
            fiveinputB <= 0
          ) {
            return alert("please enter any valid number");
          }


          if (isNaN(fiveinputP )){
            alert ("invalid amount" );
            return;
        }

        if (isNaN( fiveinputB) ){
            alert ("invalid amount" );
            return;
        }
        


          let total = 0.5 * parseInt( fiveinputP) * parseInt(fiveinputB );
          total = total.toFixed(2);
          const Unit  = " cm²";
          //   show the data using function
          displayData( pentagonTitle , Unit ,  total);
          //   disabled button using function
          disabledButton("five");
    
});


//six

document.getElementById("Six-card").addEventListener("click",function(){
    
    values += 1;
     const ellipseTitle = document.getElementById("Ellipse").innerText;
     const sixinputA  = document.getElementById("six-inputa").value;
     const sixinputB = document.getElementById("six-inputb").value;
 
         if (sixinputA == "" ||sixinputB   == "" ||sixinputA <= 0 ||sixinputB <= 0 

           ) {
             return alert("please enter any valid number");
           }



           if (isNaN(sixinputA )){
            alert ("invalid amount" );
            return;
        }

        if (isNaN( sixinputB)){
            alert ("invalid amount" );
            return;
        }
        
        
 
           let total = 3.1436 * parseInt( sixinputA) * parseInt(sixinputB);
           total =  total.toFixed(2);
        

           const Unit  = " cm²";
           //   show the data using function
     
     displayData(ellipseTitle, Unit ,  total);
           //   disabled button using function
           disabledButton("Six-card");

     

     
 });
 






// common function to disable button
function disabledButton(id) {
    document.getElementById(id).setAttribute("disabled", true);
 
  }



// common function to display data
function displayData(nameOfv,Unit,Total) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${values}</td>
      <td>${nameOfv}</td>
      <td>${Total}</td>
      <td>${Unit}</td>
      <td>

      <button class="btn btn-sm btn-red-500">convert to  </button>
      </td>
      
    `;
    container.appendChild(tr);
    document.getElementById("total-product").innerText = values;
  }
  



// call for question
  document.getElementById("Get-started").addEventListener("click",function(){

    window.location.href = 'New folder/que.html';


  });

// random color
  function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
  document.addEventListener("mouseover", function(){
    document.body.style.backgroundColor = randomColor();
  });
  
  document.querySelector('random').addEventListener('mouseover', event => {
        event.target.style.fill = randomColor();
  });





 