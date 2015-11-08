requirejs.config({
        paths: {
            'jquery': 'lib/jquery', //amd
            'jqueryUI':'lib/jquery-ui', //amd
            'date':'app/date', //amd
            'domReady': "lib/domReady", //amd
            'colorbox':'lib/jquery.colorbox' //no amd
        },
        shim:{
            'colorbox':{
                deps:['jquery'],
                exports:'colorbox'
            }
        }
    });

requirejs(['jquery','domReady!'],
    function   ($) {

     var str = "";
     for(var i=0;i<20;i++){
        str = str+"<div><span>A"+i+"</span><span>B"+i+"</span><span>C"+i+"</span><span>D"+i+"</span></div>";
     }
     
     $('#gridArea').html(str);
     
});

requirejs(['jquery','jqueryUI','date','colorbox','domReady!'],
    function   ($, UI,date,c) {
     $('#selectDate').val(date.getDate()).datepicker();
     $('#group1').colorbox();
     
     
});

