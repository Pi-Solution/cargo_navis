<div class="universal_form_div" id="form_izlazne_fakture">
	<div class="form_back_ground"></div>
	<div class="form">
		<div class="form_header">
			<div class="form_header_al">
				<h3>DODAJ IZLAZNU FAKTURU</h3>
			</div>
		</div>

		<div class="form_content">
			<div class="form_fakture_lines" style="top: 1%;">
				<div class="form_fakture_l_header">
					<div class="form_f_l_h_al">
						<p>Broj Fakture:</p>
					</div>
				</div>
				<div class="fakture_lines_input">
					<div class="fakture_l_i_middle">
						<input type="text" name="broj_iz_fakture" class="fakture_l_i_child" id="broj_iz_fakture_form">
					</div>
				</div>
			</div>
			<div class="form_fakture_lines" style="top: 17%;">
				<div class="form_fakture_l_header">
					<div class="form_f_l_h_al">
						<p>Datum Fakture:</p>
					</div>
				</div>
				<div class="fakture_lines_input">
					<div class="fakture_l_i_middle">
						<input type="date" name="form_provajder" class="fakture_l_i_child" id="datum_iz_f">
					</div>
				</div>
			</div>
			<div class="form_fakture_lines" style="top: 33%;">
				<div class="form_fakture_l_header">
					<div class="form_f_l_h_al">
						<p>Iznos:</p>
					</div>
				</div>
				<div class="fakture_lines_input">
					<div class="fakture_l_i_middle">
						<input type="number" name="form_provajder" class="fakture_l_i_child" id="iznos_iz_f_form">
					</div>
				</div>
			</div>
		</div>


		<div class="form_buttons">
			<div class="form_buttons_child">
				<button class="form_nalozi_buttons" onclick="show_form(4); reset_izlazne_fakture()"><strong>Nazad</strong></button>
				<button class="form_nalozi_buttons f_n_b_r" onclick="save_iz_faktura()"><strong>Sačuvaj</strong></button>
			</div>
		</div>
	</div>
</div>