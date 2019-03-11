<div class="ulaz_fartura_forma" id="izlazna_fartura_forma">
		<div class="ul_f_background"></div>
		<div class="ul_f_container">
			<div class="ul_f_header"></div>
			<div class="ul_f_content">
				<div class="ul_faktura" id="il_faktura">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Broj Fakture:</p>
						</div>
					</div>
					<input type="text" name="broj_fakture_ulaz" class="fakture_ulaz" id="broj_fakture_izlaz1" placeholder="Broj Fakture" style="text-transform: uppercase;">
				</div>
				<!--------------->
				<div class="ul_faktura" id="iz_f_2">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Datum Fakture:</p>
						</div>
					</div>
					<input type="date" name="broj_fakture_izlaz" class="fakture_ulaz" id="datum_fakture_izlaz">
				</div>
				<!--------------->
				<div class="ul_faktura" id="iz_f_3">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Iznos:</p>
						</div>
					</div>
					<input type="number" name="broj_fakture_ulaz" class="fakture_ulaz" id="iznos_izlaz">
				</div>
				<div id="ul_f_form_buttons" class="form_buttons">
					<button type="button" class="save_button" id="ul_f_save_button" onclick="izlaz_fakture();">Sacuvaj</button>
					<button type="button" class="form_exit" id="ul_f_form_exit" onclick="show_form('izlazna_fartura_forma');">x</button>
				</div>
			</div>
		</div>
	</div>