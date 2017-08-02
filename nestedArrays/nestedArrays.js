$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    //console.log(data);
  }
}).done(function(data){
    handleData(data);


});
$.ajax({
  url: 'https://restcountries.eu/rest/v2/all',
  dataType: 'json',
  success: function(data) {
    //console.log(data);
  }
}).done(function(data){
    //handleTheData(data);
    $("body").append("<h1>" + data.results[0].name + "</h1>");
    

});


var handleData = function(data){
    var pic= data.results[0].picture.medium 
    $("body").append("<h2> Name: " + data.results[0].name.title + "." + " " + data.results[0].name.first + " " + data.results[0].name.last + "</h2>");
    $("body").append("<h2>" + data.results[0].location.nat + "</h2>");
    $("body").prepend("<img src=" + pic + ">");
    


}
