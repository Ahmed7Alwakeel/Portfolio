

$("i").click(function () {
  $('.s').toggleClass('slide');
  $('.fa-bars').toggleClass('fa-times');

});





function repeat() {

  for (var k = 0; k < 5; k++) {


    for (var i = 1; i <= 12; i++) {
      document.getElementsByClassName("row")[0].innerHTML += 
      "<div class='col-lg-3 col-md-6 col-sm-6  overflow-hidden position-relative itemmain'>"
        + "<img class='w-100 h-100' src=img/" + i + ".jpg></img>"+"<p>ahmed alwakeel</p>"
        + "<div class='item d-flex flex-column justify-content-center align-items-center'>"
        +"<h3>Flowe Skin</h3>" 
        +"<h5>portfolio,Tree</h5>" 
        +"</div>" 
        +"</div> "
        
    }
  }
}