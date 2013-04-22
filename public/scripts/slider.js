//---------------------------------
//ADD Slider JS
//---------------------------------

//var socket = io.connect('http://localhost:8080');


$(document).ready(function(){
	$("#button").click(function() {
    // Socket emit  ('my event' ,"chunk") 
    // emit to the node server
    socket.emit('browser button' ,"Button clicked");
    
})
    $( "#slider" ).slider({
    range: "min",
    value: 1, //slider bug if start with '0' (goes to -1 as a value)
    min: 1,
    max: 10,
    slide: function( event, ui ) {
    $( "#value" ).val( "unit :" + ui.value );
    //OK 
    //socket.emit('my event2' ,"slider");
    socket.emit('browser slider' ,ui.value);

    }
    });
    //Value at the firts instance of the slider function
    $( "#value" ).val( "unit :" + $( "#slider" ).slider( "value" ) );
});
