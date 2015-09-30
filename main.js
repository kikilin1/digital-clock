$(document).ready(function(){
    var screenHeight = $(window).height();
    $("body").css("height", screenHeight);
    var padding = ((screenHeight-8)/2-64)/2;
    $("#top-left").css("padding", padding);
    console.log(padding);
    
    
    function displayTimeTL(){
        var currentTime = new Date();
        var ampm = "am";
        var hours = currentTime.getHours();
        if (hours > 12){
            hours = hours-12;
            ampm = "pm";
        }
        var minutes = currentTime.getMinutes();
        if (minutes < 10) minutes = "0"+minutes;
        var seconds = currentTime.getSeconds();
        if (seconds < 10) seconds = "0"+seconds;
        $("#top-left").html(hours+":"+minutes+":"+seconds+""+ampm);
    }
    setInterval(function(){
    displayTimeTL();
        
    },200);
});
    