<div id="add_provajders_form" class="add_job_form">
	<div id="provajders_background" class="job_background">	
	</div>
	<div class="form_in_form" id="form_provajder">
		<div class="form_header">	
		</div>
		<div class="form_content">						
			<?php
				$v = 0;
				for($i = 0; $i < 7; $i++){
					echo '
						<div class="prov_input" style="top:'.$v.'%;">
							<div class="prov_header">
								<div class="prov_header_child">
									<p>Ime Provajdera</p>
								</div>
								<div class="prov_header_child" id="pr2_right">
									<p>Dogovorena Cijena</p>
								</div>
								<div class="prov_header_child" id="pr3_right">
									<p>Valuta</p>
								</div>
							</div>
							<!--
							<input type="text" name="ime_provajdera" class="prov_input_place" placeholder="Ime Provajdera">
							-->
							
							<div class="prov_input_place_position">
								<input type="text" name="ime_provajdera" id="provajder_forma" class="input_place prov_input_place" autocomplete="off" onfocus="load_autoComplete(`provajder_forma`, 1, `autocomplete_container_prov`)" oninput="load_autoComplete(`provajder_forma`, 1, `autocomplete_container_prov`)" onblur="hide_autoComplete(`autocomplete_container_prov`)" oninput="marked_element = 0" placeholder="Ime Provajdera">
								<div id="autocomplete_container_prov">
								</div>
							</div>
							

							<input type="number" name="dogovorena_cijena" class="prov_input_place2" id="p_right" placeholder="Dogovorena cijena">
							<select id="prov_valuta_select" class="prov_valuta_select">
								<option>KM</option>
								<option>EUR</option>
								<option>USD</option>
							</select>
						</div>
					';
				$v = $v + 12.5;
				}
			?>
		</div>
		<div class="form_buttons">
			<button type="button" id="prov_save_button" class="save_button" onclick="get_user_input2()">Sačuvaj</button>
			<button type="button" class="form_exit" onclick="show_form('add_provajders_form'); reset_provajders();">x</button>
		</div>
	</div>
</div>