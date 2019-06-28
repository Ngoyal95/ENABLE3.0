var time_left = 3;
var cinterval;

// Countdown & Redirect to Login
function time_dec(){
    time_left--;
    document.getElementById('countdown').innerHTML = time_left;
    if(time_left == 1){
        var originalstring = document.getElementById('countdown2').innerHTML;
        var newstring = originalstring.replace('seconds','second');
        document.getElementById('countdown2').innerHTML = newstring;
        window.location.href="/";
        clearInterval(cinterval);
    }
}
cinterval = setInterval('time_dec()', 1000);

// Animate click on Login Page
$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });

//  File input JS
 function bs_input_file() {
	$(".input-file").before(
		function() {
			if ( ! $(this).prev().hasClass('input-ghost') ) {
				var element = $("<input type='file' class='input-ghost' style='visibility:hidden; height:0'>");
				element.attr("name",$(this).attr("name"));
				element.change(function(){
					element.next(element).find('input').val((element.val()).split('\\').pop());
				});
				$(this).find("button.btn-choose").click(function(){
					element.click();
				});
				$(this).find("button.btn-reset").click(function(){
					element.val(null);
					$(this).parents(".input-file").find('input').val('');
				});
				$(this).find('input').css("cursor","pointer");
				$(this).find('input').mousedown(function() {
					$(this).parents('.input-file').prev().click();
					return false;
				});
				return element;
			}
		}
	);
}
$(function() {
	bs_input_file();
});

// Show active page on navbar
$('a[href="' + this.location.pathname + '"]').parents('li,ul').addClass('active');