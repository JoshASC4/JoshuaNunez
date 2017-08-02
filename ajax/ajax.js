$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  } 
}).done(function(data){
    var userFirstName = data.results[0].name.first;
    var userLastName = data.results[0].name.last;
    var state = data.results[1].location.state;
    $("body").append("<h2> First: " + userFirstName + "</h2>");
  $("body").append("<h2> Last: " + userLastName + "</h2>");
  $("body").append("<h2> State: " + state +  "</h2>");
  

});