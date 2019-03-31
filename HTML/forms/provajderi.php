<div class="universal_form_div" id="form_provajder">
	<div class="form_back_ground"></div>
	<div class="form">
		<div class="form_header">
			<div class="form_header_al">
				<h3>Dodaj Provajdere</h3>
			</div>
		</div>
			<div class="form_content">
				<?php
				$top = 1;
				for ($i=0; $i < 6 ; $i++) { 
					echo '
					<div class="form_content_lines" style="top:'.$top.'%">
						<div class="form_con_l_header">
							<div class="form_con_l_header_al">
								<p><strong>Ime provajdera:</strong></p>
								<p><strong>Cijena:</strong></p>
								<p><strong>Valuta:</strong></p>
							</div>
						</div>
						<input type="text" name="Ime provajdera" class="fom_prov_name form_provajder_name">
						<input type="number" name="Dogovorena Cijena" class="fom_prov_price form_provajder_price">
						<div class="form_select">
							<select class="form_prov_valuta form_provajder_valuta">
								<option>KM</option>
								<option>EUR</option>
								<option>USD</option>
							</select>
						</div>
					</div>
					';
					$top = $top + 16;
				}
				?>
				
			</div>
		<div class="form_buttons">
			<div class="form_buttons_child">
				<button class="provajder_buttons" onclick="show_form(1); reset_provajder_form()">Otkazi</button>
				<button class="provajder_buttons p_b_right" onclick="save_provajders();">Sačuvaj</button>
			</div>
		</div>
	</div>
</div>