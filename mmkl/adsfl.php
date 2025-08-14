<?php

  
  $raw_data = file_get_contents('adsfl.json');

  
  $data = json_decode($raw_data, true);

  
  echo json_encode($data); 

?>


