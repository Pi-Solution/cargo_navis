<div class="form_in_form" id="container_form">
	<div class="form_header"></div>
		<div class="form_content" id="form_container_content">	
			<div class="containers_info">
				<div class="containers_info_child">	
					<textarea class="containers_id"></textarea>
				</div>
				<div class="container_right">
					<div class="container_header">
						<div class="container_header_child">
							<p>Vrsta Kontejnera</p>
						</div>
					</div>
					<div class="container_type">
						<select id="select_container_type" class="select_container_type">
							<option>20DV</option>
							<option>20HC</option>
							<option>40DV</option>
							<option>40HC</option>
							<option>40PW</option>
							<option>45HC</option>
							<option>45HCPW</option>
							<option>20RF</option>
							<option>20RFHC</option>
							<option>40RF</option>
							<option>40RFHC</option>
							<option>45RF</option>
							<option>40 Flat rack container</option>
							<option>40 High Cube reefer con</option>
							<option>40 High Cube container</option>
							<option>40 Open Top container</option>
							<option>45 High Cube container</option>
							<option>20OT Open Top</option>
							<option>40OT Open Top</option>
							<option>20HT Hard Top</option>
							<option>40HT Hard Top</option>
							<option>20FR Flat Rack</option>
							<option>40FR Flat Rack</option>
							<option>20PF Platform</option>
							<option>40PF Platform</option>
							<option>Bulk Containers</option>
							<option>Vertical Containers</option>
							<option>TANK IMO 0</option>
							<option>TANK IMO 1</option>
							<option>TANK IMO 2</option>
							<option>TANK IMO 5</option>
							<option>SWAP Body TANK</option>
							<option>Food grade TANK</option>
							<option>Reefer TANK</option>
							<option>Gas TANK</option>
							<option>Silo TANK</option>
							<option>Waste skip offshore</option>
							<option>Offshore Basket</option>
							<option>Offshore TANK container</option>
							<option>Mini offshore</option>
							<option>Special offshore</option>
							<option>Offshore galvanized box</option>
							<option>Office containers</option>
							<option>Sanitary Containers</option>
							<option>Carrier</option>
							<option>Termoking</option>
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="form_buttons">
		<button type="button" id="con_back_button" onclick="show_form('container_form'); show_form('form_provajder'); call_from_form2 = false"><-</button>
		<button type="button" id="con_add_new_text_a_button" onclick="add_con_textbox();">Dodaj još kontejnera</button>
		<button type="button" id="con_save_button" onclick="get_user_input3();">Sačuvaj</button>
		<button type="button" class="form_exit" onclick="show_form('add_job_form'); show_form('container_form'); reset_all_forms(); what_to_run(0); call_from_form = false;">x</button>
	</div>
</div>