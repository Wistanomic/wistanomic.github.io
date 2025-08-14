var l =[];
var head ;
var obhgl={};
var queryString ;

window.addEventListener('load', function() {
  head =JSON.parse(sessionStorage.getItem('headerjson'));
    queryString = sessionStorage.getItem("edit").split("&")[0];
    data=JSON.parse(sessionStorage.getItem("datajson"));
    l=data;        
    dtt();
    formElement.addEventListener("submit", handler);
    
});
function loading(){
  var dv = document.createElement('div');
  dv.id="loading";
  dv.style.display="flex";
  var lbl = document.createElement('label');
  lbl.id="lload";  
  lbl.innerHTML="Loading..."
  dv.appendChild(lbl);
  document.body.appendChild(dv);
  
}
function dtt(){
  head =JSON.parse(sessionStorage.getItem('headerjson'));
    queryString = sessionStorage.getItem("edit").split("&")[0];
    data=JSON.parse(sessionStorage.getItem("datajson"));
    l=data; 

  var dv = document.createElement('div');
  dv.style.width="30%";
  dv.id="divex";
  dv.style.height="50%";            
  dv.style.overflow="auto";
   var elements = document.querySelector('form#forms');
   for(i=0;i<Object.keys(head[0]).length;i++){

    var lbl=document.createElement('label');
    var chk=document.createElement('input');
    var lbl2=document.createElement('label');
    var br =document.createElement('br');
    var br2 =document.createElement('br');
    
    lbl.innerHTML=Object.keys(l[queryString])[i] +":";
    lbl2.innerHTML=Object.values(l[queryString])[i];
 
  chk.className="chg";
  chk.type="checkbox";
  lbl.style.fontWeight="bold";
  dv.appendChild(lbl);
  dv.appendChild(br);
  dv.appendChild(chk);
  dv.appendChild(lbl2);
  dv.appendChild(br2);
    }
    document.getElementById('bod').appendChild(dv);

   
}
function markhgl(){
  $.ajax({
    url: "lmhgl.php",
type: 'GET',
cache: false,
    beforeSend: function(xhr){
      if (xhr.overrideMimeType)
      {
        xhr.overrideMimeType("application/json");
      }
    },
    dataType: 'json',
    data: null,
    success:  function(data, textStatus, request) {
      obhgl=data;
    },error: function (request, status, error) {
      $.ajax({
        url: "hgl.json",
   type: 'GET',
cache: false,
        beforeSend: function(xhr){
          if (xhr.overrideMimeType)
          {
            xhr.overrideMimeType("application/json");
          }
        },
        dataType: 'json',
        data: null,
        success:  function(data, textStatus, request) {
          obhgl=data;
        }
      }); 
    }});
}
var arr = [];  

function sendhgl(data,form){  
  $.ajax({
  url: 'onhg.php',
  type: 'post',
  data: data,
  processData: false,
  contentType: false,
  success: function(response){
  
  
  
  },error: function (request, status, error) {
  
      
  fetch('http://localhost:3000/hgl', {
  method: 'POST',
  body: form ,
  headers: { 'Content-Type': 'application/json' }
  })
  .then()
  .then()
  .catch(err => console.log(err)) ;
  
  }
  });  

  }
  function sendhgl2(data,form){  
    $.ajax({
    url: 'onhg.php',
    type: 'post',
    data: data,
    processData: false,
    contentType: false,
    success: function(response){
    
    
    
    },error: function (request, status, error) {
    
        
    fetch('http://localhost:3000/hgl2', {
    method: 'POST',
    body: form ,
    headers: { 'Content-Type': 'application/json' }
    })
    .then()
    .then()
    .catch(err => console.log(err)) ;
    
    }
    });  
  
    }
var arhg={};
function markhgl2(){
 
 
  $.ajax({
    url: "lhgl.php",
type: 'GET',
cache: false,
    beforeSend: function(xhr){
      if (xhr.overrideMimeType)
      {
        xhr.overrideMimeType("application/json");
      }
    },
    dataType: 'json',
    data: null,
    success:  function(data, textStatus, request) {       
     
      arhg=data;                       
    },error: function (request, status, error) {
$.ajax({
       url: "minhgl.json",
  type: 'GET',
cache: false,
       beforeSend: function(xhr){
         if (xhr.overrideMimeType)
         {
           xhr.overrideMimeType("application/json");
         }
       },
       dataType: 'json',
       data: null,
       success:  function(data, textStatus, request) {
   
         arhg=data;
                       
      
      }
     });  
    }});
    } 
function dltnum(data,no){  
  $.ajax({
  url: 'ck.php',
  type: 'post',
  data: data,
  processData: false,
  contentType: false,
  success: function(response){
  
  
  
  },error: function (request, status, error) {
  
      
  fetch('http://localhost:3000/deletear', {
  method: 'POST',
  body: JSON.stringify({nume:no}) ,
  headers: { 'Content-Type': 'application/json' }
  })
  .then()
  .then()
  .catch(err => console.log(err)) ;
  
  }
  });  

  }

function sen(data,json,no,files=null){
  
$.ajax({
url: 'ck.php',
type: 'post',
data: data,
processData: false,
contentType: false,
success: function(response){

  alert("Edited");    
  if(location.search.split('&')[1]=="mintab"){
    window.location.replace("../../tableminmaster.html");
  }
  else if(location.search.split('&')[1]=="ontbm"){
    window.location.replace("./tablemaster.html");
  }
  else if(location.search.split('&')[1]=="onmintab"){
    window.location.replace("./tableminmasterol.html");
  }
  else{
    window.location.replace("../../tablemaster.html");
  }

},error: function (request, status, error) {
Promise.all([
    
fetch('http://localhost:3000/editjson', {
method: 'POST',
body: JSON.stringify([json,no]) ,
headers: { 'Content-Type': 'application/json' }
}),
fetch('http://localhost:3000/files', {
method: 'POST',
body: files,
headers: {}
}).then((response) => {
  

  if(response.status ==200){
    
    alert("Edited");    
    if(location.search.split('&')[1]=="mintab"){
      window.location.replace("../../tableminmaster.html");
    }
    else if(location.search.split('&')[1]=="ontbm"){
      window.location.replace("./tablemaster.html");
    }
    else if(location.search.split('&')[1]=="onmintab"){
      window.location.replace("./tableminmasterol.html");
    }
    else{
      window.location.replace("../../tablemaster.html");
    }
 openset();
  
}
}),

])

.then()
.then()

.catch(err => console.log(err)) ;

}
});  

}
function openset(){
  fetch('http://localhost:3000/openset', {
    method: 'POST',
body: "",
headers: { 'Content-Type': 'application/json' }
})
}
const formElement = document.querySelector('form#forms')

// convert the form to JSON
var formData = new FormData()
        var fileform = new FormData();
const getFormJSON = (form) => {
  const data = new FormData(form);
  return Array.from(data.keys()).reduce((result, key) => {
    if (result[key]) {
      result[key] = data.getAll(key)
      return result
    }
    result[key] = data.get(key);
    return result;
  }, {});
};


const handler = (event) => {
  head =JSON.parse(sessionStorage.getItem('headerjson'));
    queryString = sessionStorage.getItem("edit").split("&")[0];
    data=JSON.parse(sessionStorage.getItem("datajson"));
    l=data; 
  event.preventDefault();
  const valid = formElement.reportValidity();
  var num = sessionStorage.getItem("edit").split('&')[0];
  var clch=document.getElementsByClassName('chg');
  var flc=false;
    var elements = document.querySelector('form#forms');
  if (valid) {
    
    for(var i=0;i<clch.length;i++){
      if(clch[i].checked==true){
        l[queryString][Object.keys(l[queryString])[i]]=elements[i].value;
    
      }

    }
    // const result = getFormJSON(formElement);
     const result = l[queryString];
     
    var Id=0;
    var SubmitTime=0;
    const filef = document.querySelectorAll('[type=file]');
    if(!filef){
    
    // handle one, multiple or no files uploaded
   
    const output = {
      ...Id,
      ...SubmitTime,
      ...result
    }
    
    var ot=JSON.stringify(output);
    
    formData.append('user3',JSON.stringify([ot,num]));
    l[num]=output; 
    sessionStorage.setItem('datajson',JSON.stringify(l));
    // sen(formData,output,num);
    formData = new FormData()
    alert("Edited");
    if(location.search.split('&')[1]=="mintab"){
      window.location.replace("../../tableminmaster.html");
    }
    else if(sessionStorage.getItem('edit').split('&')[1]=="ontbm"){
      var myCustomData = "tblms";
    var evnt= new CustomEvent('myEvent', { detail: myCustomData })
    window.parent.document.dispatchEvent(evnt)
    }
    else if(location.search.split('&')[1]=="onmintab"){
      window.location.replace("./tableminmasterol.html");
    }
    else{
      window.location.replace("../../tablemaster.html");
    }
  openset();
    
    }
    else{
    
       
       
       
     
      
        
      
        const reader = new FileReader();
       
    // convert the checkbox to a boolean
    var output={};
    
    for(var i=0;i<clch.length;i++){
      if(clch[i].checked==true){
      
      if(elements[i].type=="file"){
        flc=true;
        var fname={};
        Array.from(filef).forEach(function(el) {
          
          var lls=[];
          lls=el.className;
        
          

          for (let i = 0; i < lls.length; i++) {
            
            var ss =el.files;
            var kk=[];
            var phpf=[];
                
            for (let t = 0; t < ss.length; t++) {
               
               kk.push(ss[t].name);
               phpf.push(ss[t]);
               formData.append('files[]', ss[t]);    
               fileform.append('files[]', ss[t]);
               
            }
            fname[lls]=kk;
            
          }
          
      });
         output = {
          ...Id,
          ...SubmitTime,
        ...result,
        ...fname
      }
      
      }
      else{
        output = {
          ...Id,
          ...SubmitTime,
          ...result
        }
      }
      }

    }
    
    
    var ot=JSON.stringify(output);
    
      formData.append('user3',JSON.stringify([ot,num]));
     
      l[num]=output;  
    sessionStorage.setItem('datajson',JSON.stringify(l));
     console.log('kkk')
  
    //  sen(formData,ot,num,fileform);
     
    formData = new FormData()
    fileform = new FormData()
if(flc==false){
  alert("Edited");    
  if(location.search.split('&')[1]=="mintab"){
    window.location.replace("../../tableminmaster.html");
  }
  else if(sessionStorage.getItem('edit').split('&')[1]=="ontbm"){
    var myCustomData = "tblms";
    var evnt= new CustomEvent('myEvent', { detail: myCustomData })
    window.parent.document.dispatchEvent(evnt)
  }
  else if(location.search.split('&')[1]=="onmintab"){
    window.location.replace("./tableminmasterol.html");
  }
  else{
    window.location.replace("../../tablemaster.html");
  }
openset();
}
else{
  loading();
}


    }

    
    
   
  }
}
var dltbtn=document.getElementById("delete");
var indx = location.search.split('&')[0];
var cancelbtn=document.getElementById("cancel");
// dltbtn.addEventListener("click", function () {
//   var formD = new FormData();
//   var formsen = new FormData();
//   var formsen2 = new FormData();
//   formD.append('user5',JSON.stringify({nume:~~indx}));
//   dltnum(formD,indx);
  
//   var dkey=Object.keys(obhgl);
//   for(s=0;s<dkey.length;s++){
    
//      if(~~dkey[s]>=(~~indx+1)){       
//       if(~~dkey[s]==(~~indx+1)){
//       delete obhgl[dkey[s]];
     
//      }
//      else{
//       obhgl[~~dkey[s]-1] = obhgl[dkey[s]];   
//   delete obhgl[dkey[s]];
// }
//      }

//     }
//     formsen.append('user3',JSON.stringify(obhgl));
//     sendhgl(JSON.stringify(obhgl),formsen);

//     var dkey=Object.keys(arhg);       
//     for(s=0;s<dkey.length;s++){     
//        if(~~dkey[s]>=(~~button.id)){
//         if(~~dkey[s]==(~~button.id)){                           
//      delete arhg[button.id];      
//        }
//        else{        
//          arhg[~~dkey[s]-1] = arhg[dkey[s]];      
//     delete arhg[dkey[s]];    
//   }
//        }  
//       }
//       formsen2.append('user4',JSON.stringify(arhg));

//        sendhgl2(JSON.stringify(arhg),formsen2);
// formD= new FormData();
// formsen= new FormData();
// formsen2= new FormData();
//     alert("Deleted");
//     if(location.search.split('&')[1]=="mintab"){
//       window.location.replace("../../tableminmaster.html");
//     }
//     else if(location.search.split('&')[1]=="ontbm"){
//       window.location.replace("./tablemaster.html");
//     }
//     else if(location.search.split('&')[1]=="onmintab"){
//       window.location.replace("./tableminmasterol.html");
//     }
//     else{
//       window.location.replace("../../tablemaster.html");
//     }
//  openset();
// });
cancelbtn.addEventListener("click", function () {
  
  if(location.search.split('&')[1]=="mintab"){
    window.location.replace("../../tableminmaster.html");
  }
  else if(sessionStorage.getItem("edit").split('&')[1]=="ontbm"){
    // window.location.replace("./tablemaster.html");
    var myCustomData = "tblms";
    var evnt= new CustomEvent('myEvent', { detail: myCustomData })
    window.parent.document.dispatchEvent(evnt)
  }
  else if(location.search.split('&')[1]=="onmintab"){
    window.location.replace("./tableminmasterol.html");
  }
  else{
    window.location.replace("../../tablemaster.html");
  }
  openset();

});
window.onerror = function(error, url, line) {
  alert(error+' URL:'+url+' L:'+line);
};