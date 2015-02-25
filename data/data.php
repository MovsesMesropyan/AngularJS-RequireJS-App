<?php
$mail_box = array(
	'{"Id": "1", "Type": "inbox", "Name": "Diana", "Title": "mail_inbox_1", "Date": "10.02.2015", "Content": "Diana`s email content"}',
	'{"Id": "2", "Type": "inbox", "Name": "George", "Title": "mail_inbox_2", "Date": "19.02.2015", "Content": "George`s email content"}',
	'{"Id": "3", "Type": "inbox", "Name": "Janny", "Title": "mail_inbox_3", "Date": "15.02.2015", "Content": "Janny`s email content"}',
	'{"Id": "4", "Type": "inbox", "Name": "Alex", "Title": "mail_inbox_4", "Date": "17.02.2015", "Content": "Alex`s email content"}',
	'{"Id": "5", "Type": "sent mail", "Name": "Jack", "Title": "sent_mail_1", "Date": "01.02.2015", "Content": "Jack`s email content"}',
	'{"Id": "6", "Type": "sent mail", "Name": "Mary", "Title": "sent_mail_2", "Date": "11.02.2015", "Content": "Mary`s email content"}',
	'{"Id": "7", "Type": "sent mail", "Name": "Anna", "Title": "sent_mail_3", "Date": "05.02.2015", "Content": "Anna`s email content"}',
	'{"Id": "8", "Type": "sent mail", "Name": "Katy", "Title": "sent_mail_4", "Date": "01.02.2015", "Content": "Katy`s email content"}',
	'{"Id": "9", "Type": "spam", "Name": "Kelly", "Title": "mail_spam_1", "Date": "24.02.2015", "Content": "Kelly`s email content"}',
	'{"Id": "10", "Type": "spam", "Name": "Jon", "Title": "mail_spam_2", "Date": "24.02.2015", "Content": "Jon`s email content"}',
	'{"Id": "11", "Type": "spam", "Name": "Bob", "Title": "mail_spam_3", "Date": "21.02.2015", "Content": "Bob`s email content"}',
	'{"Id": "12", "Type": "spam", "Name": "David", "Title": "mail_spam_4", "Date": "20.02.2015", "Content": "David`s email content"}'
	);
echo json_encode($mail_box);
?>