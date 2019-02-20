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
						</div>
						<input type="text" name="ime_provajdera" class="prov_input_place" placeholder="Ime Provajdera">
						<input type="number" name="dogovorena_cijena" class="prov_input_place2" id="p_right" placeholder="Dogovorena cijena">
					</div>
				';
			$v = $v + 12.5;
			}
		?>
	</div>
	<div class="form_buttons">
		<button type="button" id="prov_back_button" class="save_button" onclick="show_form('form_provajder')"><-</button>
		<button type="button" id="prov_save_button" class="save_button" onclick="get_user_input2();">Dalje -></button>
		<button type="button" class="form_exit" onclick="show_form('add_job_form'); show_form('form_provajder');">x</button>
	</div>
</div>