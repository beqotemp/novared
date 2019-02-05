import $ from "jquery";
$('.nav-social-media span').hover(function(){
	$(this).find(".personal-tooltip").fadeIn()
	$(this).parent().find(".fab").removeClass("fap-active")
	$(this).parent().find(".personal-tooltip").removeClass("active-tab-tooltip")
},function(){
	$(this).find(".personal-tooltip").fadeOut()
})