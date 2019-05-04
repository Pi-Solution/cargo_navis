<div class="universal_form_div" id="form_nalozi">
	<div class="form_back_ground"></div>
	<div class="form">
		<div class="form_header">
			<div class="form_header_al">
				<h3>DODAJ NOVI NALOG</h3>
			</div>
		</div>



		<div class="form_content">
			<div class="form_lines" style="top: 1%">
				<div class="form_lines_header">
					<div class="f_l_h_left">
						<div class="lines_h_al">
							<p><strong>Komitent</strong></p>
						</div>
					</div>
					<div class="f_l_h_right">
						<div class="lines_h_al">
							<p><strong>Paritet</strong></p>
						</div>
					</div>
				</div>
				<div class="form_lines_content">
					<div class="f_l_left">
						<div class="f_l_left_child">
							<input type="text" name="komitent" id="nalozi_komitent" data-ac_index="0">
						</div>
					</div>
					<div class="f_l_rigth">
						<div class="f_l_left_child">
							<select id="nalozi_paritet">
								<option>DAP</option>
								<option>FOB</option>
								<option>CIF</option>
								<option>CFR</option>
								<option>FAS</option>
								<option>EXW</option>
								<option>FCA</option>
								<option>CPI</option>
								<option>CIP</option>
								<option>DAT</option>
								<option>DDP</option>
								<option>drum</option>	
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="form_lines" style="top: 17%">
				<div class="form_lines_header">
					<div class="f_l_h_left">
						<div class="lines_h_al">
							<p><strong>B/L</strong></p>
						</div>
					</div>
					<div class="f_l_h_right">
						<div class="lines_h_al">
							<p><strong>B/L broj</strong></p>
						</div>
					</div>
				</div>
				<div class="form_lines_content">
					<div class="f_l_left">
						<div class="f_l_left_child">
							<input type="text" name="bl" id="nalozi_bl">
						</div>
					</div>
					<div class="f_l_rigth">
						<div class="f_l_left_child">
							<input type="number" name="bl2" id="nalozi_bl2">
						</div>
					</div>
				</div>
			</div>
			<div class="form_lines" style="top: 33%">
				<div class="form_lines_header">
					<div class="f_l_h_left">
						<div class="lines_h_al">
							<p><strong>Luka Polaska</strong></p>
						</div>
					</div>
					<div class="f_l_h_right">
						<div class="lines_h_al">
							<p><strong>Datum Polaska</strong></p>
						</div>
					</div>
				</div>
				<div class="form_lines_content">
					<div class="f_l_left">
						<div class="f_l_left_child">
							<input type="text" name="luka_polaska" id="nalozi_luka_p">
						</div>
					</div>
					<div class="f_l_rigth">
						<div class="f_l_left_child">
							<input type="date" name="datum_polaska" id="nalozi_luka_p_d">
						</div>
					</div>
				</div>
			</div>
			<div class="form_lines" style="top: 49%">
				<div class="form_lines_header">
					<div class="f_l_h_left">
						<div class="lines_h_al">
							<p><strong>Luka Dolaska</strong></p>
						</div>
					</div>
					<div class="f_l_h_right">
						<div class="lines_h_al">
							<p><strong>Datum Dolaska</strong></p>
						</div>
					</div>
				</div>
				<div class="form_lines_content">
					<div class="f_l_left">
						<div class="f_l_left_child">
							<input type="text" name="luka_dolaska" id="nalozi_luka_d">
						</div>
					</div>
					<div class="f_l_rigth">
						<div class="f_l_left_child">
							<input type="date" name="datum_dolaska" id="nalozi_luka_d_d">
						</div>
					</div>
				</div>
			</div>
		</div>




		<div class="form_buttons">
			<div class="form_buttons_child">
				<button class="form_nalozi_buttons" onclick="show_form(0); reset_naloz_form()"><strong>Nazad</strong></button>
				<button class="form_nalozi_buttons f_n_b_r" onclick="nalozi_form();"><strong>Sačuvaj</strong></button>
			</div>
		</div>
	</div>
</div>