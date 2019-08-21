$(function() {
  // $("input[type='text']").css("background", "red");
  // $("input:text").css("background", "red");
  // $("input:radio").css("margin", "30px");
  // $("input:checked").css("margin", "30px");

  // $("li:first").css("background", "red");
  // $("li:last").css("background", "red");
  // $("li:even").css("background", "red");
  // $("li:odd").css("background", "red");
  // $(".list li:nth-child(2)").css("background", "red");

  // $(".parent")
  //   .find("div")
  //   .css("background", "red");

  // $(".parent")
  //   .children("div")
  //   .css("background", "red");

  // $(".list li:eq(0)").css("background", "red");
  // $(".list").parents().eq(0).css("background", "red");

  // $(".parent").append('<div class="newDiv">My new div</div>');

  // $('<div class="newDiv">My new div</div>').appendTo($(".parent"));

  // $(".parent").prepend('<div class="newDiv">My new div</div>');

  // $(".parent").before('<div>Before div</div>');

  // $(".parent").after('<div>After div</div>');

  // $(".replaceMe").replaceWith("<div>Replace</div>");

  // $("<div>Replace</div>").replaceAll(".replaceMe, .replaceMeAgain");

  // $(".removeMe").remove();

  // $("ul li:eq(2)").remove();

  // $("ul").empty();

  // $("a").text("Some other text"); //Access or modify content

  // $("a").attr("href");

  // $("a").attr("style", "color:blue");

  // $("input").val();

  // $("input").prop("checked"); //For type="radio"

  // $(".element").hasClass("active"); //If contains a class or not

  // $(".element").addClass("active");

  // $(".element").removeClass("active");

  // $(".element").toggleClass("active notActive");

  // $(".element").width();

  // $(".element").css("width", "+=50px");

  // $(".element").height();

  // $(".element").css({
  //   "background-color": "red",
  //   "color": "blue"
  // });

  // $(".element").data("name");

  // $(".element").click(function(e) {
  //   console.log("Someone clicked me!!!");
  // });

  // $(".element").on("click", function(e) {
  //   console.log("Someone clicked me!!!");
  // });

  // $(".element").mouseenter(function() {
  //   console.log("Mouse enter");
  // });

  // $(".element").mouseleave(function() {
  //   console.log("Mouse leave");
  // });

  // $(".element").hover(
  //   function(e) {
  //     console.log("Mouse enter");
  //   },
  //   function(e) {
  //     console.log("Mouse leave");
  //   }
  // );

  // $(".element").mousedown(function() {
  //   console.log("click mouse down");
  // });

  // $(".element").mouseup(function() {
  //   console.log("click mouse up");
  // });

  // $(".element").mousemove(function() {
  //   console.log("moving it");
  // });

  // $(document).keydown(function(event) {
  //   var DOWN = 40;
  //   var RIGHT = 39;

  //   if (event.which === DOWN) {
  //     $(".element").css({ top: "+= 10px" });
  //   }
  //   if (event.which === RIGHT) {
  //     $(".element").css({ left: "+= 10px" });
  //   }
  // });

  // $(document).keyup(function(event) {

  // });

  // $(document).scroll(function() {
  //   console.log("Scrolling");
  // });

  // $(window).resize(function() {
  //   console.log("resize triggered");
  // });

  // $(document).on("click", ".block", function() {
  //   console.log("Clicked");
  // });

  // $(".element").append('<div class"block">My div</div>');

  // $("input").focusin(function() {
  //   console.log("Focus in");
  // });

  // $("input").focusout(function() {
  //   onsole.log("Focus out");
  // });

  // $("input").blur(function() {
  //   var value = $(this).val();

  //   if (value.length < 5) {
  //     $(this).addClass("error");
  //   } else {
  //     $(this).removeClass("error");
  //   }
  // });

  // $("form").submit(function(e) {
  //   e.preventDefault();
  // });

  // $('input[type="checkbox"]').change(function() {
  //   var checked = $(this).is(":checked");

  //   if (checked) {
  //     console.log($(this).val() + " is checked");
  //   } else {
  //     console.log($(this).val() + " is not checked");
  //   }
  // });

  // $(".hide").click(function() {
  //   $(".element").hide(2000, function() {
  //     alert("The transition is done");
  //   });
  // });

  // $(".hide, .show").click(function() {
  //   $(".element").toggle(2000, function() {
  //     alert("Done");
  //   });
  // });

  // $(".fadeIn").click(function() {
  //   $(".element").fadeIn(2000, function() {
  //     alert("Done");
  //   });
  // });

  // $(".fadeOut").click(function() {
  //   $(".element").fadeOut(2000, function() {
  //     alert("Done");
  //   });
  // });

  // $(".fadeIn, .fadeOut").click(function() {
  //   $(".element").fadeToggle("slow", function() {
  //     alert("Done");
  //   });
  // });

  // $(".fadeOut").click(function() {
  //   $(".element").fadeTo("slow", 0.33, function() {
  //     alert("Done");
  //   });
  // });

  // $(".slideUp").click(function() {
  //   $(".element").slideUp(2000, function() {
  //     alert("Done");
  //   });
  // });

  // $(".slideDown").click(function() {
  //   $(".element").slideDown(2000, function() {
  //     alert("Done");
  //   });
  // });

  // $(".slideUp, .slideDown").click(function() {
  //   $(".element").slideToggle("slow", function() {
  //     alert("Done");
  //   });
  // });

  // $(".element").click(function() {
  //   $(this).animate(
  //     {
  //       left: "200px",
  //       top: "50px"
  //     },
  //     2000, "swing"
  //   );
  // });

  // $(".element").hover(
  //   function() {
  //     $(this).stop().animate(
  //       {
  //         left: "200px"
  //       },
  //       "slow"
  //     );
  //   },
  //   function() {
  //     $(this).stop().animate(
  //       {
  //         left: "0px"
  //       },
  //       "slow"
  //     );
  //   }
  // );

  // $(".square.one").animate({ marginLeft: "+=400" }, 1000, function() {
  //   $(".square.two").animate({ marginLeft: "+=400" }, 1000, function() {
  //     $(".square.three").animate({ marginLeft: "+=400" }, 1000);
  //   });
  // });

  // $(".square.one").animate({ marginLeft: "+=400" }, 1000);
  // $(".square.two").delay(200).animate({ marginLeft: "+=400" }, 1000);
  // $(".square.three").delay(500).animate({ marginLeft: "+=400" }, 1000);

  // $.ajax("https://jsonplaceholder.typicode.com/posts", {
  //   method: "GET",
  //   error: function() {
  //     console.log("Something went wrong");
  //   },
  //   success: function(data) {
  //     console.log(data);
  //   }
  // });

  // var method = "POST";
  // var URL = "https://jsonplaceholder.typicode.com/users";
  // var json = JSON.stringify({ name: "James", lastname: "Jones" });

  // $.ajax(URL, {
  //   method: method,
  //   data: json,
  //   dataType: "json",
  //   contentType: "application/json",
  //   error: function() {
  //     console.log("Something went wrong");
  //   },
  //   success: function(data) {
  //     console.log(data);
  //   }
  // });
});
