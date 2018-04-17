//import {$,jQuery} from 'jquery';
$( document ).ready(function() {

	$( "#rue" ).css( "border", "3px solid red" );

	// Card to article transition
	$( "#game_card_01" ).click(function(that) {
		$( "#game_cards" ).css("display", "none");
		$.get("html/game1.html", function(data){
			console.log(data);
		    $( "#game_article_01" ).html(data);
		}, "html");
	  	$( "#game_article_01" ).css( "display", "block");

	});
});