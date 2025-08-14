var arr = [];
var srt=false;
var sron=false;
var swin=false;
var port = null;
var srp=document.getElementsByClassName('seport');
var inser=document.getElementsByClassName('seportin');
var json= JSON.parse(sessionStorage.getItem('datajson'));
var serar=[""];
var idar=[];
var serp1, serp2,serp3,autsub;
var sjs=document.createElement('script');
sjs.src="math.js";
document.head.appendChild(sjs);
// chrome.serial.disconnect(connectionId, onDisconnect);
if(srp.length>0){
chrome.serial.getDevices(function(ports) {
  
    
  for (let port of ports) {
        if (port.vendorId) {
           
           serar.push(port.path);
           
             
            }
            
        }
        for(var i=0;i<srp.length;i++){
         
          srp[i].style.width="50px";
          for(var j=0;j<serar.length;j++){
            
           var option=document.createElement('option');
                    option.text = serar[j];
                    option.value = serar[j];
                    option.id='optext';
                    srp[i].add(option);
                  }
        }     
    
});
}
var lpd;
var onConnect = function(connectionInfo) {
  lpd = connectionInfo.connectionId;
  
 idar.push(connectionInfo.connectionId);
}
if(document.getElementById('serport1')){
  document.getElementById('serport1').addEventListener('change', function() {
    serp1=document.getElementById('serport1').value;
    chrome.serial.connect(document.getElementById('serport1').value, {bitrate: 9600}, onConnect);
    chrome.serial.onReceive.addListener(onReceiveCallback1);
  });
  
}
if(document.getElementById('serport2')){
  document.getElementById('serport2').addEventListener('change', function() {
    serp2=document.getElementById('serport2').value;
    chrome.serial.connect(document.getElementById('serport2').value, {bitrate: 9600}, onConnect);
  chrome.serial.onReceive.addListener(onReceiveCallback2);
  });
}
if(document.getElementById('serport3')){
  document.getElementById('serport3').addEventListener('change', function() {
    serp3=document.getElementById('serport3').value;
    chrome.serial.connect(document.getElementById('serport3').value, {bitrate: 9600}, onConnect);
  chrome.serial.onReceive.addListener(onReceiveCallback3);
  });
}
var onReceiveCallback1 = function(info) {     
        var str = arrayBufferToString(info.data);
        for(var i=0;i<inser.length;i++){
          inser[i].value=str.split(inser[0].id)[i];
        }
     
    };
    var onReceiveCallback2 = function(info) {     
      var str = arrayBufferToString(info.data);
      document.getElementById('serportin2').value=str;
   
  };
  var onReceiveCallback3 = function(info) {     
    var str = arrayBufferToString(info.data);
    document.getElementById('serportin3').value=str;
 
};
    function arrayBufferToString(buffer){
      var arr = new Uint8Array(buffer);
      var str = String.fromCharCode.apply(String, arr);
      if(/[\u0080-\uffff]/.test(str)){
          throw new Error("this string seems to contain (still encoded) multibytes");
      }
      return str;
  }
 $.ajax({
  type: 'HEAD',
  url: 'ck.php',
  success: function(){
   sron=true;
  },
  error: function() {
  
  }
});
window.onbeforeunload = function(){
  if(srt==false && sron==true ){
    return 'Are you sure you want to leave?';
  }  
  if(swin ==true){
     return 'Are you sure you want to leave?';
  }  
  if(idar.length>0){
    for(var o=0;o<idar.length;o++){
     
     chrome.serial.disconnect(idar[o],onDisconnect);
     chrome.serial.flush(idar[o]);
    } 
  } 
};  
function sen(data,json,files=null){
   


$.ajax({
url: 'ck.php',
type: 'post',
data: data,
processData: false,
contentType: false,
success: function(response){

srt=true;
alert('Sent');
},error: function (request, status, error) {
Promise.all([
fetch('http://localhost:3000/json', {
method: 'POST',
body: json,
headers: { 'Content-Type': 'application/json' }
}),
fetch('http://localhost:3000/files', {
method: 'POST',
body: files,
headers: { }
}).then((response) => {
  if(response.status ==200){
   swin=false;
  }
}),
])

.then()
.then()
.catch(err => console.log(err)) ;

}
});  

}
const formElement = document.querySelector('form#forms')

// convert the form to JSON
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

// handle the form submission event, prevent default form behaviour, check validity, convert form to JSON
const handler = (event) => {
  event.preventDefault();
  const valid = formElement.reportValidity();
  json= JSON.parse(sessionStorage.getItem('datajson'));
  if (valid) {
    const result = getFormJSON(formElement);
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
    console.log(output)
    var ot=JSON.stringify(output);
    if(json.length<25){
    json.push(output);
  }
  else{
    alert("Reached the limit try the desktop version for free")
  }
    var ncl=JSON.parse(sessionStorage.getItem('tncmathjson'));
    if(ncl){
      newcl(ncl);
    }
    else{
    sessionStorage.setItem('datajson',JSON.stringify(json))
  // sen(formData,ot,fileform);
    }
    var formData = new FormData();
    formData.append('user',ot);
    sen(formData,ot);
    formData = new FormData();
    
    }
    else{
      var fname={};
      var formData = new FormData()
      var fileform = new FormData()
      var filele=[];
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
             filele.push(ss[t]);
          }
          fname[lls]=kk;
          
        }
        
    });
    
  // convert the checkbox to a boolean
  const output = {
    ...Id,
    ...SubmitTime,
    
    ...result,
    ...fname
  }
  
  var ot=JSON.stringify(output);
  
  
   
  
    formData.append('user',ot)
    if(filele.length>0){
      swin=true;
    }  
    
    if(json.length<25){
      json.push(output);
    }
    else{
      alert("Reached the limit try the desktop version for free")
    }
    var ncl=JSON.parse(sessionStorage.getItem('tncmathjson'));
    if(ncl){
      newcl(ncl);
    }
    else{
    sessionStorage.setItem('datajson',JSON.stringify(json))
  // sen(formData,ot,fileform);
    }
   formData = new FormData();
  fileform = new FormData();
  filele=[];
  }

    // use spread function, but override the keys we've made changes to
    
    
  }
  var myCustomData = "refr";
var event = new CustomEvent('myEvent', { detail: myCustomData })
window.parent.document.dispatchEvent(event)
  if(sessionStorage.getItem('realtime')){
    refr();
  }
  $("#forms")[0].reset();
  if(document.getElementById('atsub')){
    document.getElementById('atsub').checked=autsub;
  }
  if(document.getElementById('serport1')){
    document.getElementById('serport1').value=serp1;
  }
  if(document.getElementById('serport2')){
    document.getElementById('serport2').value=serp2;
  }
  if(document.getElementById('serport3')){  
    document.getElementById('serport3').value=serp3;    
  }
}
var onDisconnect = function(result) {
  if (result) {
    alert("Disconnected from the serial port");
  } else {
    console.log("Disconnect failed");
  }
}
formElement.addEventListener("submit", handler);
var myInterval;
if(document.getElementById('atsub')){
  document.getElementById('atsub').addEventListener("change", function () {
    
  if(document.getElementById('atsub').checked==true){
    autsub=true;
 myInterval= setInterval(function () {
   myTimer();
  }, 2000);
  }
  else{
    autsub=false;
    myStopFunction();
  }
});
function myTimer() {
 
  var ausub=false;
  for(var i=0;i<inser.length;i++){
  if(inser[i].value==""){
    
    ausub=true;
  }
  }
  if(ausub==false){
    $('#btnsubmit').trigger('click');
    
  }
  }
function myStopFunction() {
  clearInterval(myInterval);
}
  }