<div class="ulaz_fartura_forma" id="ulaz_fartura_forma">
		<div class="ul_f_background"></div>
		<div class="ul_f_container">
			<div class="ul_f_header"></div>
			<div class="ul_f_content">
				<div class="ul_faktura">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Broj Fakture:</p>
						</div>
					</div>
					<input type="text" name="broj_fakture_ulaz" class="fakture_ulaz" id="broj_fakture_ulaz" placeholder="Broj Fakture" style="text-transform: uppercase;">
				</div>
				<!--------------->
				<div class="ul_faktura" id="ul_f_2">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Datum Fakture:</p>
						</div>
					</div>
					<input type="date" name="datum_fakture_ulaz" class="fakture_ulaz" id="datum_fakture_ulaz">
				</div>
				<!--------------->
				<div class="ul_faktura" id="ul_f_3">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Iznos u stranoj valuti:</p>
						</div>
					</div>
					<input type="number" name="broj_fakture_ulaz" class="fakture_ulaz" id="iznos_s_fakture_ulaz">
					<select id="valuta_fakture_izlaz">
						<option>EUR</option>
						<option>USD</option>
					</select>
				</div>
				<!--------------->
				<div class="ul_faktura" id="ul_f_4">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Iznos u domacoj valuti:</p>
						</div>
					</div>
					<input type="number" name="broj_fakture_ulaz" class="fakture_ulaz" id="iznos_domaca_valuta">
				</div>
				<div id="ul_f_form_buttons" class="form_buttons">
					<button type="button" class="save_button" id="ul_f_save_button" onclick="ulaz_faktura();"
					.>Sacuvaj</button>
					<button type="button" class="form_exit" id="ul_f_form_exit" onclick="show_form('ulaz_fartura_forma');">x</button>
				</div>
			</div>
		</div>
	</div>