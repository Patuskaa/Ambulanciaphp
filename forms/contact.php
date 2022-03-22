<?php

if (isset_$POST['submit'])){
  // BENEFICIARIO
  $nomecompleto = $_POST['q1'];
  $subject = "Formulário";
  $mailFrom = $_POST['q20'];
  $message = "qualquer coisa";

  $mailTo = ""
  $headers = "De: ".$mailFrom;
  $txt = "Recebeu um email de ".$nomecompleto.".\n\n".$message;
 
 
  mail($mailTo, $subject, $txt, $headers);
  header ("Location: index.php?mailsend"); 
}
 
?>