<?php
$filename = "count.json";
$inp = file_get_contents($filename);
$tempArray = json_decode($inp,true);


if(isset($_POST['post1'])){
    $i = $tempArray['linux_amd64'] +1;
    $tempArray['linux_amd64'] = $i ;
  
    if ( file_put_contents($filename, json_encode($tempArray)))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";

}
if(isset($_POST['post2'])){
    $i = $tempArray['linux_amd64lite'] +1;
    $tempArray['linux_amd64lite'] = $i ;
  
    if ( file_put_contents($filename, json_encode($tempArray)))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";

}
if(isset($_POST['post3'])){
    $i = $tempArray['win_x64'] +1;
    $tempArray['win_x64'] = $i ;
  
    if ( file_put_contents($filename, json_encode($tempArray)))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";

}
if(isset($_POST['post4'])){
    $i = $tempArray['win_x64lite'] +1;
    $tempArray['win_x64lite'] = $i ;
  
    if ( file_put_contents($filename, json_encode($tempArray)))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";

}
if(isset($_POST['post5'])){
    $i = $tempArray['win_x86'] +1;
    $tempArray['win_x86'] = $i ;
  
    if ( file_put_contents($filename, json_encode($tempArray)))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";

}
if(isset($_POST['post6'])){
    $i = $tempArray['win_x86lite'] +1;
    $tempArray['win_x86lite'] = $i ;
  
    if ( file_put_contents($filename, json_encode($tempArray)))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";

}
if(isset($_POST['post7'])){
    $i = $tempArray['win_arm64'] +1;
    $tempArray['win_arm64'] = $i ;
  
    if ( file_put_contents($filename, json_encode($tempArray)))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";

}
if(isset($_POST['post8'])){
    $i = $tempArray['win_arm64lite'] +1;
    $tempArray['win_arm64lite'] = $i ;
  
    if ( file_put_contents($filename, json_encode($tempArray)))
    echo "JSON file created successfully...";
else 
    echo "Oops! Error creating json file...";

}
?>