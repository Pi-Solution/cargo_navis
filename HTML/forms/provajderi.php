<div class="universal_form_div" id="form_provajder">
	<div class="form_back_ground"></div>
	<div class="form" id="form_provajder_con">
		<div class="prv-header">
				<h3>Dodaj Provajdera</h3>
		</div>
		<div class="prv-text">
			<p>Ovdje možete dodati novog provajdera <br/> za odabrani nalog.</p>
		</div>
		<div class="prv-input_name">
			<div class="prv-option_child">
				<input type="text" name="prv-text_name" class="prv-text_name" id="form_provajder_name" placeholder="Ime Provajdera">
			</div>
		</div>
		<div class="prv-input_other">
			<div class="prv-option_child_other1">
				<input type="number" name="prv-text_price" class="prv-text_name" id="form_provajder_price" placeholder="Cijena">
			</div>
			<div class="prv-fake_background"></div>
			<div class="prv-option_child_other2">
				<select class="prv-input_option" id="form_provajder_valuta">
					<option>KM</option>
					<option>EUR</option>
					<option>USD</option>
				</select>
			</div>
		</div>

		<button class="prv-back_b" onclick="show_form(1); reset_provajder_form();">Otkaži</button>
		<button class="prv-save_b" onclick="save_provajders();">Sačuvaj</button>
	</div>
</div>