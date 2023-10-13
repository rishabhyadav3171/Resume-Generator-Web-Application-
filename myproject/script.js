function addNewWEField(){
    // console.log("Rishabh Yadav")
let newNode = document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('weField');
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute('placeholder','Enter here');


let weOb=document.getElementById("we");
let weAddButtonOb=document.getElementById('weAddButton');

weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewSKField(){
    
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');
    
    
    let skOb=document.getElementById("sk");
    let skAddButtonOb=document.getElementById('skAddButton');
    
    skOb.insertBefore(newNode,skAddButtonOb); 

}
// skill
function addNewAQField(){
    
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');
    
    
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById('aqAddButton');
    
    aqOb.insertBefore(newNode,aqAddButtonOb); 

}


//genetating Function
function generateCV(){
   // console.log("Generate CV");

 
   let nameField = document.getElementById('nameField').value;
   let nameT1= document.getElementById('nameT1');
   nameT1.innerHTML=nameField;
   document.getElementById("nameT2").innerHTML=nameField;
   // Contact
   document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
   //address
   document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
   //email
   document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;
  //facebook
   document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
   //instagram
   document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
//    linkedIn
   document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
   //objectivce
   document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
   //work Experience
   let wes = document.getElementsByClassName('weField') 
   let str= ''
   for(let e of wes){
       str = str+`<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML=str;
    //acedamic qualification

   let aqs = document.getElementsByClassName('eqField') 
   let str1= ''
   for(let e of aqs){
       str1 = str1+`<li>${e.value}</li>`;
   }
   document.getElementById("aqT").innerHTML=str1;
   //   skill
   let sks = document.getElementsByClassName('skField') 
   let str2= ''
   for(let e of aqs){
       str2 = str2+`<li>${e.value}</li>`;
   }
   document.getElementById("skT").innerHTML=str2;

 

  
  //img templte--//////////////////////////////////////////
  

  /////////////////////////////////////////

   document.getElementById('cv-form').style.display="none";
   document.getElementById('cv-template').style.display="block";

}
 
const imageFileInput = document.getElementById('image-file');
const imagePreview = document.getElementById('image-preview');
const uploadButton = document.getElementById('upload-button');

imageFileInput.addEventListener('change', function() {
  const file = this.files[0];
  const reader = new FileReader();
  reader.addEventListener('load', function() {
    imagePreview.src = reader.result;
  });
  reader.readAsDataURL(file);
});

uploadButton.addEventListener('click', function() {
  const file = imageFileInput.files[0];
  const formData = new FormData();
  formData.append('image', file);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/upload-image');
  xhr.send(formData);
});

//PRINT cv
function printCV(){
//
window.print();

}