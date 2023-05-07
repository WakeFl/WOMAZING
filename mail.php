<?php
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $tel = htmlspecialchars($_POST['phoneNumber']);
    $source = getenv('HTTP_REFERER');
    $subject = 'Тема письма клиенту';
    $message = "Текст письма:
        <br><br>
        Имя: $name<br>
        E-mail: $email<br>
        Телефон: $tel<br>
        Источник (ссылка): $source
    ";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-type: text/html; charset=utf-8\r\n";
    
    $success = mail("admin@yoursite.com", $subject, $message, $headers);

   

    $date=date("d.m.y"); 
    $time=date("H:i"); 

    $f = fopen("leads.xls", "a+");
    fwrite($f," <tr>");    
    fwrite($f," <td>$email</td> <td>$name</td> <td>$tel</td>");   
    fwrite($f," <td>$source</td>");    
    fwrite($f," </tr>");  
    fwrite($f,"\n ");    
    fclose($f);
?>