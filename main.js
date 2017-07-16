$(document).ready(function(){
jQuery.easing.easeOutBounce = function (x, t, b, c, d) {
if ((t/=d) < (1/2.75)) {
return c*(7.5625*t*t) + b;
} else if (t < (2/2.75)) {
return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
} else if (t < (2.5/2.75)) {
return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
} else {
return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
}
};
$('#chrome-ball').animate({bottom: 320},1000, 'easeOutBounce');
$('#chrome-ball').velocity({width: 70,  marginLeft: 80},800);
$('#chrome-ball').velocity({ translateY: 100, marginRight: 120 }, {duration: 800, easing: [ 0, 1, .58, 1 ]});
$('#chrome-ball').velocity({ translateY: 218, marginLeft:140},700);
$('#chrome-ball').velocity({marginLeft: 5});
});