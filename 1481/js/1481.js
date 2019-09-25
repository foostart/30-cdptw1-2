function myFunction() {
    var x = $("#myTopnav");
    x.toggleClass("responsive");
}

$(".nav-item").click(function(){
	$(".nav-item").removeClass("show");
	$(this).addClass("show");
	
});
