    
function sum(input) {
    // if (toString.call(input) !== "[object Array]")
    // return false;
    var total = 0;
    var s=[];
    if(Array.isArray(input)== true){
for(var j=0;j<input.length;j++){
var inid=input[j];
    for(var i=0;i<l.length;i++){
        s.push(l[i][inid]);
        
    }  

    
    for(var i=0;i<s.length;i++) {                 
        if(isNaN(s[i])) {
            continue;
        }
          
        total += Number(s[i]);
    }
}
    }

else{
    for(var i=0;i<l.length;i++){
        s.push(l[i][input]);
        
    }  

    
    for(var i=0;i<s.length;i++) {                 
        if(isNaN(s[i])) {
            continue;
        }
          
        total += Number(s[i]);
    }
}
    return total;
}
function product(input) {
   
    var s=[];
    for(var i=0;i<l.length;i++){
        s.push(l[i][input]);
        
    }  
    var total=1;
    var chk=0;
    for(var i=0;i<s.length;i++) {                 
        if(isNaN(s[i])){
            continue;
        }
      if(s[i]!==""){
        total *= Number(s[i]);
        chk += Number(s[i]);
    }
    
   
    }
    if(chk==0){
        total=0;
        return total;
    }
    else{
        return total;
    }
    
}
function prod(input) {
   
    var s=[];
    for(var i=0;i<l.length;i++){
        s.push(l[i][input]);
        
    }  
    var total=1;
    var chk=0;
    for(var i=0;i<s.length;i++) {                 
        if(isNaN(s[i])){
            continue;
        }
      if(s[i]!==""){
        total *= Number(s[i]);
        chk += Number(s[i]);
    }
    
   
    }
    if(chk==0){
        total=0;
        return total;
    }
    else{
        return total;
    }
    
}
function arl(input){

    return input; 
}

function newcl(input){
    
    var svfrm=[];
    var njson= json;
    var scd="./project/"+sessionStorage.getItem("project")+"/tncmath.json";
    $.ajax({
        url: "./project/"+sessionStorage.getItem("project")+"/tmath.json",
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
       svfrm=data;
       var nm,fm;
       var erar=[];
       for(var j=0;j<input.length;j++){
           nm=input[j]['name'];
               fm=input[j]['frm'];
               fm=fm.replaceAll('abs(', 'Math.abs(');
               fm=fm.replaceAll('√(', 'Math.sqrt(');
               fm=fm.replaceAll('sin(', 'Math.sin(');
               fm=fm.replaceAll('cos(', 'Math.cos(');
               fm=fm.replaceAll('log(', 'Math.log(');
               fm=fm.replaceAll('log10(', 'Math.log10(');
               fm=fm.replaceAll('tan(', 'Math.tan(');
               fm=fm.replaceAll('π', 'Math.PI');
               fm=fm.replaceAll("eulconst", 'Math.E');
              
               
               // fm=fm.replaceAll("3√(", 'Math.cbrt(');
               fm=fm.replaceAll("logb(", 'getBaseLog(');
               fm=fm.replaceAll("ln(", 'getBaseLog(Math.E,');
               // nm=nm.replaceAll("e", 'Math.E');
               fm=fm.replaceAll('^', '**');
               fm=fm.replaceAll('atan(', 'Math.atan(');
               fm=fm.replaceAll('asin(', 'Math.asin(');
               fm=fm.replaceAll('acos(', 'Math.acos(');
               fm=fm.replaceAll('atanh(', 'Math.atanh(');
               fm=fm.replaceAll('asinh(', 'Math.asinh(');
               fm=fm.replaceAll('acosh(', 'Math.acosh(');
               fm=fm.replaceAll('tanh(', 'Math.tanh(');
               fm=fm.replaceAll('sinh(', 'Math.sinh(');
               fm=fm.replaceAll('cosh(', 'Math.cosh(');
          try{     
       for(var i=0;i<njson.length;i++){
    
           for(var k=0;k<svfrm.length;k++){
            
               if(fm.includes(svfrm[k]["title"])){
                   var s=svfrm[k]["title"];
                   var f=svfrm[k]["frm"];
                   var reg = new RegExp(s, "g");
               fm = fm.replace(reg, f);
               
               }
          
           }
          
      
           njson[i][nm]=eval(fm);
         
           }
        }catch(e){
            alert(e)
     erar.push(nm);
        }
       }
       if (fs.existsSync(scd)) {
        
        fs.readFile(scd, (err, data)=> {
        data=JSON.parse(data);
      
        
        for(var i=0;i<data.length;i++){
            for(var a=0;a<erar.length;a++){
                if (data[i].name === erar[a]) {
                    data.splice(i,1);
                    break;
                 }
               
          }
        }        
        
fs.writeFileSync(scd, JSON.stringify(data));
        
        });
        
        }
    
       
       fs.writeFileSync(filepath, JSON.stringify(njson));
       
        },error: function (request, status, error) {
            var nm,fm;             
            var erar=[];  
       for(var j=0;j<input.length;j++){
           nm=input[j]['name'];
               fm=input[j]['frm'];
               fm=fm.replaceAll('abs(', 'Math.abs(');
        fm=fm.replaceAll('√(', 'Math.sqrt(');
        fm=fm.replaceAll('sin(', 'Math.sin(');
        fm=fm.replaceAll('cos(', 'Math.cos(');
        fm=fm.replaceAll('log(', 'Math.log(');
        fm=fm.replaceAll('log10(', 'Math.log10(');
        fm=fm.replaceAll('tan(', 'Math.tan(');
        fm=fm.replaceAll('π', 'Math.PI');
        fm=fm.replaceAll("eulconst", 'Math.E');
       
        
        // fm=fm.replaceAll("3√(", 'Math.cbrt(');
        fm=fm.replaceAll("logb(", 'getBaseLog(');
        fm=fm.replaceAll("ln(", 'getBaseLog(Math.E,');
        // nm=nm.replaceAll("e", 'Math.E');
        fm=fm.replaceAll('^', '**');
        fm=fm.replaceAll('atan(', 'Math.atan(');
        fm=fm.replaceAll('asin(', 'Math.asin(');
        fm=fm.replaceAll('acos(', 'Math.acos(');
        fm=fm.replaceAll('atanh(', 'Math.atanh(');
        fm=fm.replaceAll('asinh(', 'Math.asinh(');
        fm=fm.replaceAll('acosh(', 'Math.acosh(');
        fm=fm.replaceAll('tanh(', 'Math.tanh(');
        fm=fm.replaceAll('sinh(', 'Math.sinh(');
        fm=fm.replaceAll('cosh(', 'Math.cosh(');
               try{      
       for(var i=0;i<njson.length;i++){    
        
           njson[i][nm]=eval(fm);
       
           }
        }catch(e){            
     erar.push(nm);
        }
    }       
       if (fs.existsSync(scd)) {
        
        fs.readFile(scd, (err, data)=> {
        data=JSON.parse(data);
      
        
        for(var i=0;i<data.length;i++){
            for(var a=0;a<erar.length;a++){
                if (data[i].name === erar[a]) {
                    data.splice(i,1);
                    break;
                 }
               
          }
        }        
           fs.writeFileSync(scd, JSON.stringify(data));
        
        });
        
        }
           
        
       fs.writeFileSync(filepath, JSON.stringify(njson));
        }
    });
   

    

   return njson; 
}

function vr(input){
    var vrar=[];
    for(var i=0;i<json.length;i++){
        vrar.push(Number(json[i][input]));
    }
    
    return vrar;
}
function sumvr(input){
    var vrar=[];
    var total;
    for(var i=0;i<json.length;i++){
        var nn=Number(json[i][input]);
        
        if(i>0){
            var ln=Number(json[i-1][input]);
        total+=nn
       }
       else{
        total=nn;
       }
    
        vrar.push(total);
    }
    
    return vrar;
}
function prodvr(input){
    var vrar=[];
    var total=1;
    var chk=0;
    for(var i=0;i<json.length;i++){
        var nn=Number(json[i][input]);
        
        if(i>0){
            if(nn!=""){
        total*=nn
        chk +=nn;
    }
       }
       else{
        if(nn!=""){
        total=nn;
        chk=nn;
    }
       }
    if(chk==0){
        total=0;
    }
        vrar.push(total);
    }
    
    return vrar;
}
function idx(input,no){
    if(no=="last"){
        var vrar=Number(l[l.length-1][input]);
    }
    else{
        var vrar=Number(l[Number(no)][input]);
    }  
    return vrar;
}
function arlen(){    
 return l.length;
}

function mean(input) {

    var total = 0, i,s=[];
    for(var i=0;i<l.length;i++){
        s.push(l[i][input]);
        
    } 
    for (i = 0; i < s.length; i += 1) {
        total += Number(s[i]);
    }
    return total / s.length;
}
function median(input) {
    
    var s=[];
    for(var i=0;i<l.length;i++){
        s.push(Number(l[i][input]));
        
    } 
    var median = 0, numsLen = s.length;
    s.sort();

    if (
        numsLen % 2 === 0 
    ) {
        median = (s[numsLen / 2 - 1] + s[numsLen / 2]) / 2;
    } else { 
        median = s[(numsLen - 1) / 2];
    }

    return median;
}
function mode(input) {
    var numbers=[];
    for(var i=0;i<l.length;i++){
        numbers.push(Number(l[i][input]));
        
    } 
    var modes = [], count = [], i, number, maxIndex = 0;

    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }

    return modes;
}
function range(input) {
    var numbers=[];
    for(var i=0;i<l.length;i++){
        numbers.push(Number(l[i][input]));
        
    } 
    numbers.sort();
    return numbers[numbers.length - 1]-numbers[0];
}
var svfrm=[];
$.ajax({
    url: "./project/"+sessionStorage.getItem("project")+"/"+"tmath.json",
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
   svfrm=data;
   
    }});
    function cal(nm){
     
        for(var j=0;j<svfrm.length;j++){
          
            if(nm.includes(svfrm[j]["title"])){
                var s=svfrm[j]["title"];
                var f=svfrm[j]["frm"];
                var reg = new RegExp(s, "g");
            nm = nm.replace(reg, f);
        
            }
        }
        
        nm=nm.replaceAll('abs(', 'Math.abs(');
        nm=nm.replaceAll('√(', 'Math.sqrt(');
        nm=nm.replaceAll('sin(', 'Math.sin(');
        nm=nm.replaceAll('cos(', 'Math.cos(');
        nm=nm.replaceAll('log(', 'Math.log(');
        nm=nm.replaceAll('log10(', 'Math.log10(');
        nm=nm.replaceAll('tan(', 'Math.tan(');
        nm=nm.replaceAll('π', 'Math.PI');
        nm=nm.replaceAll("eulconst", 'Math.E');
       
        
        // nm=nm.replaceAll("3√(", 'Math.cbrt(');
        nm=nm.replaceAll("logb(", 'getBaseLog(');
        nm=nm.replaceAll("ln(", 'getBaseLog(Math.E,');
        // nm=nm.replaceAll("e", 'Math.E');
        nm=nm.replaceAll('^', '**');
        nm=nm.replaceAll('atan(', 'Math.atan(');
        nm=nm.replaceAll('asin(', 'Math.asin(');
        nm=nm.replaceAll('acos(', 'Math.acos(');
        nm=nm.replaceAll('atanh(', 'Math.atanh(');
        nm=nm.replaceAll('asinh(', 'Math.asinh(');
        nm=nm.replaceAll('acosh(', 'Math.acosh(');
        nm=nm.replaceAll('tanh(', 'Math.tanh(');
        nm=nm.replaceAll('sinh(', 'Math.sinh(');
        nm=nm.replaceAll('cosh(', 'Math.cosh(');
        var fl= eval(nm);
        
        return fl;
        } 
window.onerror = function(error, url, line) {
    // alert(error+' URL:'+url+' L:'+line);
};