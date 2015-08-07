$( document ).ready(function(){
	$.get("../html/header.html", function(data) {
		$("body").prepend(data);
	});
	$.get("../html/footer.html", function(data) {
		$("body").append(data);
	});
});
