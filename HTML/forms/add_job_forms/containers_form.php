<div class="form_in_form" id="container_form">
	<div class="form_header"></div>
		<div class="form_content">	
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
							<option>20VD</option>
							<option>20HC</option>
							<option>40VD</option>
							<option>40HC</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	<div class="form_buttons">
		<button type="button" id="con_back_button" onclick="show_form('container_form'); show_form('form_provajder');"><-</button>
		<button type="button" id="con_add_new_text_a_button" onclick="">Dodaj još kontejnera</button>
		<button type="button" id="con_save_button" onclick="send_form_data();">Sačuvaj</button>
		<button type="button" class="form_exit" onclick="show_form('add_job_form'); show_form('container_form');">x</button>
	</div>
</div>