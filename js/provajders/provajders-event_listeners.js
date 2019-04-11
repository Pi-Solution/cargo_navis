function provajder_events(){
	var div = document.getElementsByClassName("provajderi_collums")

	for(let i = 0; i < div.length; i++){
		div[i].addEventListener("mouseenter", function(){
			show_notes_div(true, i);
		});
		div[i].addEventListener("mouseleave", function(){
			show_notes_div(false);
		});
	}
}