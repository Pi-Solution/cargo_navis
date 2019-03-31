function show_notes_div(control, note){
	x = document.getElementById("flying_div")
	var note_div = document.getElementById("fd-content_child2")
	//x = document.getElementById("form_nalozi")
	if(control == true){
		if (note === null || note.match(/^ *$/) !== null) {
			x.style.display = "none";
		}else {
			x.style.display = "block";
			note_div.innerHTML = `<p>${note}</p>`;
		}
	}else if(control == false){
		x.style.display = "none";
		console.log('no')
	}
}
function notes_div_position(event){
  var x = event.clientX;
  var y = event.clientY;
  var div_width = document.getElementById("flying_div").clientHeight / 2;

  //console.log(div_width)
  //console.log(x + "  " + y)
  document.getElementById("flying_div").style.top = y - div_width + 4 + 'px';
}