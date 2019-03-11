<div id="change_data">
	<div id="change_data_bg"></div>
	<div id="change_data_form">
		<select id="change_data_select" onchange="get_data_change_data(this.value)">
			<option>Paritet</option>
			<option>BL</option>
			<option>BL text</option>
			<option>Luka Polazak</option>
			<option>Datum Isplovljavanja</option>
			<option>Luka Dolaska</option>
			<option>Datum Uplovljavanja</option>
		</select>
		<div id="change_data_form_window">
			<select name="change_data_input" id="cd_input" class="cd_input_text">
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
		<div id="change_data_buttons">
			<button id="change_data_back_button" class="change_data_buttons_child" onclick="show_form('change_data');"><img src="img/icons/back_w.svg" height="50%"></button>
			<button id="change_data_save_button" class="change_data_buttons_child" onclick="update_job()">SAČUVAJ</button>
		</div>
	</div>
</div>