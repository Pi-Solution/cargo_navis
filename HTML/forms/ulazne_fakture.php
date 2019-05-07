<div class="universal_form_div" id="form_ulazne_fakture">
	<div class="form_back_ground"></div>
	<div class="form">
		<div class="form_header">
			<div class="form_header_al">
				<h3>DODAJ ULAZNU FAKTURU</h3>
			</div>
		</div>
		

		<div class="form_content">
			<div class="form_fakture_lines">
				<div class="form_fakture_l_header">
					<div class="form_f_l_h_al">
						<p>Provajder:</p>
					</div>
				</div>
				<div class="fakture_lines_input">
					<div class="fakture_l_i_middle">
						<input type="text" name="form_provajder" class="fakture_l_i_child" id="form_ul_provajder" data-ac_index="2">
					</div>
				</div>
			</div>
			<div class="form_fakture_lines" style="top: 17%;">
				<div class="form_fakture_l_header">
					<div class="form_f_l_h_al">
						<p>Broj Fakture:</p>
					</div>
				</div>
				<div class="fakture_lines_input">
					<div class="fakture_l_i_middle">
						<input type="text" name="Broj_fakture" class="fakture_l_i_child" id="ul_f_broj_fakture">
					</div>
				</div>
			</div>
			<div class="form_fakture_lines" style="top: 33%;">
				<div class="form_fakture_l_header">
					<div class="form_f_l_h_al">
						<p>Datum Fakture:</p>
					</div>
				</div>
				<div class="fakture_lines_input">
					<div class="fakture_l_i_middle">
						<input type="date" name="ul_f_datum" class="fakture_l_i_child" id="ul_f_f_datum">
					</div>
				</div>
			</div>
			<div class="form_fakture_lines" style="top: 49%;">
				<div class="form_fakture_l_header">
					<div class="form_f_l_h_al">
						<p>Valuta placanja:</p>
					</div>
				</div>
				<div class="fakture_lines_input faktura_valuta">
					<div class="fakture_l_i_middle">
						<select class="fakture_l_i_child fakture_select" onchange="fakture_chose_valuta(this.value)" id="form_ulf_valuta">
							<option>KM</option>
							<option>EUR</option>
							<option>USD</option>
						</select>
					</div>
				</div>
				<div class="fakture_lines_input faktura_valuta faktura_right">
					<div class="fakture_l_i_middle">
						<input type="number" name="kurs" class="fakture_l_i_child" placeholder="Kurs" id="uf_kurs" disabled style="background-color: gray;" oninput="change_kurs(this.value)">
					</div>
				</div>
			</div>

			<div class="form_fakture_lines" style="top: 65%;">
				<div class="form_fakture_l_header">
					<div class="form_f_l_h_al">
						<p>Iznos:</p>
					</div>
				</div>
				<div class="fakture_lines_input faktura_valuta">
					<div class="fakture_l_i_middle">
						<input type="number" name="i_s_val" class="fakture_l_i_child fakture_select" placeholder="Strana Valuta" id="uf_s_val" disabled style="background-color: gray;" oninput="ul_f_calculator(true, this.value)">
					</div>
				</div>
				<div class="fakture_lines_input faktura_valuta faktura_right">
					<div class="fakture_l_i_middle">
						<input type="number" name="i_d_val" class="fakture_l_i_child" placeholder="Domaca Valuta" oninput="ul_f_calculator(false, this.value)" id="uf_domaca_valuta">
					</div>
				</div>
			</div>
		</div>



		<div class="form_buttons">
			<div class="form_buttons_child">
				<button class="form_nalozi_buttons" onclick="show_form(3); reset_ul_faktura()"><strong>Nazad</strong></button>
				<button class="form_nalozi_buttons f_n_b_r" onclick="save_ul_faktura()"><strong>Sačuvaj</strong></button>
			</div>
		</div>
	</div>
</div>