function pivotab(dl,mv,cvar,csum){
  var data =dl;
  var p=[];var d=[];var fn=[];var ls=[];
  
  
  const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
    // JS by default uses a crappy string compare.
    // (we use slice to clone the array so the
    // original array won't be modified)
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }
  
      function aef(dss,tn,ik){
          var mk =  dss.filter(function(item) {
              return item[tn] == ik;
            });
            return mk;
      }
          for(var i=0;i<data.length;i++){
              
                 p.push(data[i][mv]);
  
              
      }
      var uname=[...new Set(findDuplicates(p))];
      
           for(var j=0;j<uname.length;j++){
              d.push(aef(data,mv,uname[j]));
              
           }
       
        
           function sump(myNums){
              let sum = 0;
  
  // iterate over each item in the array
  for (let i = 0; i < myNums.length; i++ ) {
    sum += ~~myNums[i];
  }
  return sum;
           }
  
  
  
           
  for(var j=0;j<d.length;j++){
      var s=d[j];
      var obj={};
      obj[mv]=uname[j];
      for(var i=0;i<csum.length;i++){
        var result = s.map(a => a[csum[i]]);
        obj[csum[i]]=sump(result);
      }
      //  fn.push(obj);
  
      
  }
  for(var i=0;i<uname.length;i++){
     
      employees = data.filter(function (worker) {
          // return true for salary greater than eauals to 25000
          return worker[mv] == uname[i];
        });
          
        for (var j = 0; j < data.length; j++) {
          if (data[j][mv] == uname[i]) {
            data.splice(j, 1);
            j--;
          }
        }
       
  }
  
  
  var ps=[];
  
  
  if (cvar.length>0){
    for(var p=0;p<cvar.length;p++){
  for (var i = 0; i < d.length; i++) {
              
              var s =d[i];
              
              var ff=[];
              for(var j=0;j<s.length;j++){
                 ff.push(s[j][cvar[p]]);
             
              
            }
            var dod=[...new Set(ff)];
           
            for(var o=0;o<dod.length;o++){
                ps.push(aef(s,cvar[p],dod[o]));
            }
  
  }
  d=[];
 d=ps;
  ps=[];
  

}

ps=d;


}
else{
  ps=d;
  
}
  //
 
  cvar.splice(0, 0, mv);
  for(var j=0;j<ps.length;j++){
    var s=ps[j];
    var obj={};
    for(var v=0;v<cvar.length;v++){
     
      for(var t=0;t<ps[j].length;t++){
        obj[cvar[v]]=ps[j][t][cvar[v]];
      }
      
    
    }
    for(var i=0;i<csum.length;i++){
      var result = s.map(a => a[csum[i]]);
      obj[csum[i]]=sump(result);
    }
    fn.push(obj);
    
  }
  for (var j = 0; j < data.length; j++) {
    var obj ={};
    
    for(var v=0;v<cvar.length;v++){
      obj[cvar[v]]=data[j][cvar[v]];
      
    
    }
    for(var i=0;i<csum.length;i++){
      
      obj[csum[i]]=data[j][csum[i]];
    }
  
  fn.push(obj)
  }
 
  return fn;
  }