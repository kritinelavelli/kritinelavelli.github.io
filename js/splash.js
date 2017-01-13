jQuery(document).ready(function($){
 
if (sessionStorage.getItem('advertOnce') !== 'true') {
$('body').append('<div id="blackscreen"></div>    <div id="buffer"></div> <div id = "kgram"> <div id="outershape1"> <div id="shape1"></div> </div> <div id="outershape2"> <div id="shape2"></div> </div> <div id="outerparallelogram1"> <div id="parallelogram1"></div> </div> <div id="outerparallelogram2"> <div id="parallelogram2"></div> </div> <div id="outerright1"> <div id="right1"></div> </div> <div id="outerright2"> <div id="right2"></div> </div> <div id="outertrapezium"> <div id="trapezium"></div> </div> <div id="outerisosceles"> <div id="isosceles"></div> </div> </div>')
$('body').fadeIn('slow', function(){});
sessionStorage.setItem('advertOnce','true');
}
});