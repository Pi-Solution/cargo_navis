var banke = [
	{
		name: "SBERBANK",
		style:{
			color: "#338a3e",
			font_color: "white",
			active_bg: "white",
			active_fc: "black"
		}
	},
	{
		name: "UniCredit",
		style:{
			color: "#f44336",
			font_color: "white",
			active_bg: "white",
			active_fc: "black"
		}
	},
	{
		name: "Raiffeisen",
		style:{
			color: "#fdd835",
			font_color: "black",
			active_bg: "white",
			active_fc: "black"
		}
	}
]
//Print Card with Bank names in navigation many
function print_bnb_cards(){
	//get nav bar id
	var nav_bar = document.getElementById("bank-nav_bar");
	//clear nav_bar
	nav_bar.innerHTML = "";
	//print Cards to nav_bar
	for(let i = 0; i < banke.length ;i++){
	 	nav_bar.innerHTML += `
	 		<div class="bnb-card" id="${banke[i].name}">
				<div class="bnb-text_all">
					<p>${banke[i].name}</p>
				</div>
			</div>

			<style type="text/css">
				#${banke[i].name}{
					top: ${8.8 * i}%;
					background: ${banke[i].style.color};
					border: 5px solid ${banke[i].style.color};
					color: ${banke[i].style.font_color};
				}
				#${banke[i].name}:active{
					background: ${banke[i].style.active_bg};
					color: ${banke[i].style.active_fc};
				}
			</style>
	 	`
	 } 
}
print_bnb_cards();