var time_left = 3;
var cinterval;
 
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

$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });