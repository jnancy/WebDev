<?php
    $data = $_POST['username'] . '-' . $_POST['field2'] . "\n";
    $ret = file_put_contents('formdata.txt', $data, FILE_APPEND | LOCK_EX);
    if($ret === false) {
        die('There was an error writing this file');
    }
    else {
        echo "$ret bytes written to file";
    }
  ?>
