// jQuery(document).ready(function() {
//
//   $("h1").click(function() {
//     alert("This is a header.");
//   });
//
//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });
//
//   $("img").click(function() {
//     alert("This is a header.");
//   });
// });



// $(document).ready(function() {
//   $("p").click(function() {
//     $(".initially-hidden").toggle();
//     $(".initially-showing").toggle();
//     $(".image-hidden").fadeToggle();
//   });
// });


$(document).ready(function() {

  $("button#dark").click(function() {
    // $(".green-background").css("background-color", "#144c00");
    // $(".green-background").css("color", "white");
    $("body").addClass("darktheme");
    // $(".red-background").css("background-color", "#4c0300");
    // $(".red-background").css("color", "white");


    //change the above to adding a css class on body as opposed to changing the contents of the yellow-background rule

});


  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass("darktheme");
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  // $("button#dark").click(function() {
  //   $("body").removeClass();
  //   $("body").addClass("black-background");
  // });

  $("button#light").click(function() {
    $("body").removeClass();
  });


});
