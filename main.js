$(document).ready(function(){
    var screenHeight = $(window).height();
    $("body").css("height", screenHeight);
    var padding = ((screenHeight-8)/2-164)/2;
    console.log(padding);
    $("#top-left, #top-right, #bottom-left, #bottom-right").css("padding-top",padding);
    
  

    
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
        
        $("#top-left").html("Miami<br>"+hours+":"+minutes+":"+seconds+""+ampm);
        $("#top-right").html(hours+":"+minutes+":"+seconds+""+ampm);
        $("#bottom-left").html(hours+":"+minutes+":"+seconds+""+ampm);
        $("#bottom-right").html(hours+":"+minutes+":"+seconds+""+ampm);
  
    
        
    }
    setInterval(function(){
    displayTimeTL();
        
    },200);
    
    /*function getTimeString(hours,minutes, seconds){
        var ampm= "AM"
        if*/
});
    