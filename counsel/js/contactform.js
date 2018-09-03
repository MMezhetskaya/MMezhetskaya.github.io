jQuery(document).ready(function($) {

$("#ajax-contact-form").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "../contact.php",
data: str,
success: function(msg) {
if(msg == 'OK') {
result = '<div class="notification_ok"><span>Спасибо за обращение!</span> В ближайшее время менеджер ответит Вам.</div>';
$("#fields").hide();
} else {
result = msg;
}
$('#note').html(result);
}
});
return false;
});
});