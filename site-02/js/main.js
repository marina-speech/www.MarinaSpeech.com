$(function() {
	$('#header-ru').load('header-ru.html');
});

$(function() {
	$('#header-en').load('header-en.html');
});

$(function() {
	$('#footer-ru').load('footer-ru.html');
});

$(function() {
	$('#footer-en').load('footer-en.html');
});

//

var a_phone_number = '+1-224-678-1608';
var a_phone_url = 'tel:' + a_phone_number;

var a_skype_address = 'Marina.Narubin';
var a_skype_url = 'skype:' + a_skype_address;

var a_email_address = 'Marina.Narubin@gmail.com';
var a_email_subject = 'MarinaSpeech Consultation';
var a_email_message = 'Please call us back at ...';
var a_email_url = 'mailto:' + a_email_address + '?' + "subject="
		+ encodeURI(a_email_subject) + '&' + 'body='
		+ encodeURI(a_email_message);

var a_online_url = 'https://docs.google.com/forms/d/1MLcNg3Z7TQT8i-xvqYq-jYmCljkxvLSgIxPnR6uanaM/viewform';
