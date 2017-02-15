$(document).ready(function() {
  $("form#FormSurvey").submit(function(event) {
    event.preventDefault();//include this

    var name = $("#labelname").val();//careful with parenthesis
    $(".OPname").text(name);//mistake: said span=OPname

    var food = $("#food").val();
    $(".OPfood").text(food);

    var music = $("input:radio[name=music]:checked").val();
    $(".OPmusic").text(music);

    var birthdate = $("#birthdate").val();
    $(".OPbirthdate").text(birthdate);

    var color = $("#color").val();
    $(".OPcolor").text(color);

    $("#output").show();
  });
});//also these
