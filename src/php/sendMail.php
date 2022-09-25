<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require  "PHPMailer/src/Exception.php";
require  "PHPMailer/src/PHPMailer.php";
require  "PHPMailer/src/SMTP.php";

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;  
$mail->Username = 'levonbakunts3@gmail.com';
$mail->Password = 'mgls nccd usnn ggtn'; 
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->CharSet = "UTF-8"; 
$mail->IsHTML(true); 

$name = $_POST["name"]; 
$email = $_POST["email"]; 
$message = $_POST["message"]; 


$email_template = "template_mail.html";
$body = file_get_contents($email_template);
$body = str_replace('%name%', $name, $body); 
$body = str_replace('%email%', $email, $body); 
$body = str_replace('%message%', $message, $body);

$mail->addAddress("levonbakunts3@gmail.com");
$mail->setFrom($email);
$mail->Subject = 'Отправка из формы Sirius Logistics'; 
$mail->MsgHTML($body);


if (!$mail->send()) {
  $message = "Ошибка отправки";
} else {
  $message = "Данные отправлены!";
}


$response = ["message" => $message];


header('Content-type: application/json');
echo json_encode($response);

?>