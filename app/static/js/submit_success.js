// setTimeout(function(){window.location.href="/"},5000);

// function DelayRedirect() {
//     var seconds = 5;
//     var dvCountDown = document.getElementById("dvCountDown");
//     var lblCount = document.getElementById("lblCount");
//     dvCountDown.style.display = "block";
//     lblCount.innerHTML = seconds;
//     setInterval(function () {
//         seconds--;
//         lblCount.innerHTML = seconds;
//         if (seconds == 0) {
//             dvCountDown.style.display = "none";
//             window.location.href="/";
//         }
//     }, 5000);
// }

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