$(document).ready(function(){

    var linksOpen = Cookies.get('links-open');
    if ( linksOpen && linksOpen == "new" ) {
	$("#window-same").removeClass("selected");
	$("#window-new").addClass("selected");
	aTags("new");
    }

    $("#window-same").on( "click", function() {
	$("#window-same").addClass("selected");
	$("#window-new").removeClass("selected");
	aTags("same");
    });

    $("#window-new").on( "click", function() {
	$("#window-same").removeClass("selected");
	$("#window-new").addClass("selected");
	aTags("new");
    });
    
});

function aTags(linksOpen) {
    if (linksOpen == "new") {
	$("a").not(".nav a").not(".table-of-contents a").not(".image a").attr("target","_blank");
    } else {
	$("a").not(".nav a").not(".table-of-contents a").not(".image a").removeAttr("target");
    }
    Cookies.set('links-open', linksOpen, { expires: 1000 });
}
