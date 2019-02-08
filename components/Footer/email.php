<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
	header('Access-Control-Allow-Headers: *');
    $input = json_decode(file_get_contents("php://input"), true);
	require_once('recaptchalib.php');
	$privatekey = "6LfTYnMUAAAAABW3WeC3yFb9nE8dz5jDmh2Ju2sc";
	$response = null;
	$reCaptcha = new ReCaptcha($privatekey);
	$response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $input["recaptcha"]
    );
  
		$to = "office@shareit.rs";
		$subject = "Contact form - Share IT";
		$txt = "From: ".$input["name"]." - ".$input["email"]."\nSubject: ".$input["subject"]."\n\nMessage: \n".$input["message"];
		$headers = "From: no-replay@shareit.rs";

		if (mail($to,$subject,$txt,$headers)){
			http_response_code(200);
		}
		else{
			http_response_code(500);
		}
	    
	  
?>