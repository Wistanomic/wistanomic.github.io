<?php
$filename = "count.json";
$inp = file_get_contents($filename);
$tempArray = json_decode($inp,true);


if(isset($_POST['post1'])){
    $i = $tempArray['pinasi_amd64'] +1;
    $tempArray['pinasi_amd64'] = $i ;
  
    if ( file_put_contents($filename, json_encode($tempArray)))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";

}

if(isset($_POST['post3'])){
    $i = $tempArray['pinasi_x64'] +1;
    $tempArray['pinasi_x64'] = $i ;
  
    if ( file_put_contents($filename, json_encode($tempArray)))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";

}

if(isset($_POST['post5'])){
    $i = $tempArray['pinasi_x86'] +1;
    $tempArray['pinasi_x86'] = $i ;
  
    if ( file_put_contents($filename, json_encode($tempArray)))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";

}
if(isset($_POST['post6'])){
    $i = $tempArray['pinasi_online'] +1;
    $tempArray['pinasi_online'] = $i ;
  
    if ( file_put_contents($filename, json_encode($tempArray)))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";

}

?>