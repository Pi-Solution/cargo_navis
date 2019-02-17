<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Cargo Navis</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body onload="load_data();">
	<div class="nav_bar">
		<div id="poslovi">
			<div class="text_holder">
				<h3 class="nav_bar_text">POSLOVI</h3>
			</div>
		</div>
		<div id="banke">
			<div class="text_holder">
				<h3>RAČUNI BANKE</h3>
			</div>
			<a href="bank.php"></a>
		</div>
	</div>
	<div id="main_table">
		<table id="main_table_header">
			<tr>
				<th width="15%">ID</th>
				<th width="40%">Komitent</th>
				<th width="40%">Datum ponude</th>
			</tr>
		</table>
		<div id="main_table_container">
			<table id="main_table_container_child">
				
			</table>
		</div>
	</div>
	<div id="container">
		<div id="basic_info">
			<h2>Osnovne informacije</h2>
		</div>
		<div id="container_child">
			<div id="con_child_left">
				<p style="float: left;">Paritet:</p>
				<p style="float: right;" id="paritet">n/a</p>
				<div style="clear:both;"></div>
				<p style="float: left;">B/L:</p>
				<p style="float: right;" id="bl">n/a</p>
			</div>
			<div id="con_child_right">
				<div id="con_child_provajder">
					<p>Provajder:</p>
				</div>
				<div id="con_child_provajder_table">
					<table id="con_child_provajder_table_child">
						<tr>
							<td>n/a</td>
						</tr>
						<tr>
							<td>n/a</td>
						</tr>
						<tr>
							<td>n/a</td>
						</tr>
						<tr>
							<td>n/a</td>
						</tr>		
					</table>
				</div>
				<!--
				<p style="float: left;">Broj Kontejnera:</p>
				<p style="float: right;" id="con_numb">n/a</p>
				<div style="clear:both;"></div>
				<p style="float: left;">Kolicina Kontejnera:</p>
				<p style="float: right;" id="con_amount">n/a</p>
				<div style="clear:both;"></div>
				<p style="float: left;">Vrsta Kontejnera:</p>
				<p style="float: right;" id="con_type">n/a</p>
				-->
			</div>
		</div>
		<div id="bay">
			<div id="from_bay">
				<p style="float: left;">Luka Polazak:</p>
				<p style="float: right;" id="port_from">n/a</p>
				<div style="clear:both;"></div>
				<p style="float: left;">Datum Isplovljavanja:</p>
				<p style="float: right;" id="port_from_date">n/a</p>
			</div>
			<img id="arrow" src="img/icons/long-arrow-pointing-to-the-right.png">
			<div id="to_bay">
				<p style="float: left;">Luka Dolaska:</p>
				<p style="float: right;" id="port_to">n/a</p>
				<div style="clear:both;"></div>
				<p style="float: left;">Datum Uplovljavanja:</p>
				<p style="float: right;" id="port_to_date">n/a</p>
			</div>	
		</div>
		<div id="negotiated_price">
			<div id="negotiated_price_left">
				<p style="float: left;">Dogovorena cijena ulaz:</p>
				<p style="float: right;" id="neg_price_in_p">n/a</p>
				<div style="clear:both;"></div>
				<p style="float: left;">Dogovorena cijena izlaz:</p>
				<p style="float: right;" id="neg_price_out_pp">n/a</p>
				<div style="clear:both;"></div>
				<p style="float: left;">Kolicina Kontejnera:</p>
				<p style="float: right;" id="con_amount">n/a</p>
			</div>
			<div id="negotiated_price_right">
				<table id="container_table">
					<tr>
						<th>Broj Kontejnera</th>
						<th>Vrsta Kontejnera</th>
					</tr>
				</table>
				<div id="container_table_content">
					<table id="container_table_content_child">
						<tr>
							<td>n/a</td>
							<td>n/a</td>
						</tr>
						<tr>
							<td>n/a</td>
							<td>n/a</td>
						</tr>
						<tr>
							<td>n/a</td>
							<td>n/a</td>
						</tr>
						<tr>
							<td>n/a</td>
							<td>n/a</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<div id="in_out_content">
			<div id="in_f">
				<button id="in_f_button" onclick="show_form('ulaz_fartura_forma');"><strong>DODAJ ULAZNU FAKTURU</strong></button>
				<!--
				<div class="in_f1">
					<div class="in_out_header">
						<div class="in_out_header_child">
							<h3 style="text-align: center;">Ulaz Fakture</h3>
						</div>
					</div>
					<div class="in_out_content_child">
						<p style="float: left;">Broj Fakture:</p>
						<p style="float: right;">n/a</p>
						<div style="clear:both;"></div>

						<p style="float: left;">Datum Fakture:</p>
						<p style="float: right;">n/a</p>
						<div style="clear:both;"></div>

						<p style="float: left;">Valuta Placanja:</p>
						<p style="float: right;">n/a</p>
						<div style="clear:both;"></div>

						<p style="float: left;">Iznos (EUR/USD):</p>
						<p style="float: right;">n/a</p>
						<div style="clear:both;"></div>

						<p style="float: left;">Iznos (KM):</p>
						<p style="float: right;">n/a</p>

						<button class="fakture_button">DODAJ FAKTURU</button>
					</div>
				</div>
				-->
			</div>
			<div id="out_f">
				<button id="out_f_button" onclick="show_form('izlazna_fartura_forma');"><strong>DODAJ IZLAZNU FAKTURU</strong></button>
				<!--
				<div class="out_f1">
					<div class="in_out_header">
						<button class="in_f_left" onclick="arrow_in_fakture(false, 'out_f1');"><</button>
						<button class="in_f_right" onclick="arrow_in_fakture(true, 'out_f1')">></button>
						<div class="in_out_header_child">
							<h3 style="text-align: center;">Izlaz Fakture</h3>
						</div>
					</div>
					<div class="in_out_content_child">
						<p style="float: left;">Broj Fakture:</p>
						<p style="float: right;">n/a</p>
						<div style="clear:both;"></div>

						<p style="float: left;">Datum Fakture:</p>
						<p style="float: right;">n/a</p>
						<div style="clear:both;"></div>

						<p style="float: left;">Iznos (KM):</p>
						<p style="float: right;">n/a</p>
						<div style="clear:both;"></div>

						<p style="float: left;">RUC(KM):</p>
						<p style="float: right;">n/a</p>
						<div style="clear:both;"></div>

						<p style="float: left;">RUC(%):</p>
						<p style="float: right;">n/a</p>

						<button class="fakture_button">DODAJ FAKTURU</button>
					</div>
				</div>
				-->
			</div>
		</div>
	</div>
	<!--/////////////////////buttons for main screen//////////////////////-->
	<div id="button_tab">
		<button id="tab_button1" onclick="show_form('add_job_form')">+ DODAJ NOVU PONUDU</button>
		<button id="ulazi">ULAZI</button>
		<button id="izlazi">IZLAZI</button>

		<button class="tab_buttons" style="left: 59.6%">DOGOVORENI POSAO</button>
		<button class="tab_buttons" style="left: 72.4%">DUGME2</button>
		<button class="tab_buttons" style="left: 85.2%">DUGME3</button>
	</div>
<!--  /////////////////////// windows for forms and other ////////////////////// -->

	<!--  /////////////////////// add new job form ////////////////////// -->
	<div id="add_job_form">
		<div id="job_background">	
		</div>
		<div id="job_form">
			<div id="form_header">
			</div>
			<form id="form_content">
				<!--             -->
				<div class="div_input">
					<div class="div_input_h_p">
						<div class="div_input_h_p_child">
							<p>Komitent:</p>
						</div>
						<div class="div_input_h_p_child" id="inp_par">
							<p>Paritet:</p>
						</div>
					</div>
					<div class="div_input_c">
						<input type="text" name="paritet" class="div_input_c_i" autocomplete="off" placeholder="Komitent" id="komitent">
						<select class="paritet_form" id="paritet_form">
							<option>DAB</option>
							<option>FOB</option>
							<option>CIF</option>
						</select>
					</div>
				</div>
				<!--             -->
				<div class="div_input" id="inp_bl">
					<div class="div_input_h_p">
						<div class="div_input_h_p_child">
							<p>B/L:</p>
						</div>
					</div>
					<div class="div_input_c">
						<input type="text" name="bl" class="div_input_c_i" autocomplete="off" placeholder="B/L" id="bl_form">
					</div>
				</div>
				<!--             -->
				<div class="div_input" id="inp_port_from">
					<div class="div_input_h_p">
						<div class="div_input_h_p_child">
							<p>Luka Polazak:</p>
						</div>
						<div class="div_input_h_p_child" id="port_from_date_p">
							<p>Datum Polaska:</p>
						</div>
					</div>
					<div class="div_input_c">
						<input type="text" name="port_from" class="div_input_c_i" autocomplete="off" placeholder="Luka Polazak" id="port_from_form">
						<input type="date" name="port_from_date" id="port_from_date_form">
					</div>
				</div>
				<!--             -->
				<div class="div_input" id="inp_port_to">
					<div class="div_input_h_p">
						<div class="div_input_h_p_child">
							<p>Luka Dolaska:</p>
						</div>
						<div class="div_input_h_p_child" id="port_to_date_p">
							<p>Datum Dolaska:</p>
						</div>
					</div>
					<div class="div_input_c">
						<input type="text" name="port_to" class="div_input_c_i" autocomplete="off" placeholder="Luka Polazak" id="port_to_form">
						<input type="date" name="port_to_date" id="port_to_date_form">
					</div>
				</div>
				<!--             -->
				<div class="div_input" id="neg_prices">
					<div class="div_input_h_p">
						<div class="div_input_h_p_child">
							<p>Dogovorena Cijena Ulaz:</p>
						</div>
						<div class="div_input_h_p_child" id="neg_price_out_p">
							<p>Dogovorena Cijena Izlaz:</p>
						</div>
					</div>
					<div class="div_input_c">
						<input type="number" name="neg_price_in" class="div_input_c_i" autocomplete="off" placeholder="Cijena Ulaz" id="neg_price_in">
						<input type="number" name="port_to" class="div_input_c_i" autocomplete="off" placeholder="Cijena Izlaz" id="neg_price_out">
					</div>
				</div>
				<!--             -->
				<div id="form_buttons" class="form_buttons">
					<button type="button" class="save_button" id="save_button" onclick="send_form_data();">Sacuvaj</button>
					<button type="button" class="form_exit" id="form_exit" onclick="show_form('add_job_form')">x</button>
				</div>
			</form>
		</div>
	</div>

	<!--///////////////////////Forma za ulazne fakture////////////////////////-->
	<div class="ulaz_fartura_forma" id="ulaz_fartura_forma">
		<div class="ul_f_background"></div>
		<div class="ul_f_container">
			<div class="ul_f_header"></div>
			<div class="ul_f_content">
				<div class="ul_faktura">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Broj Fakture:</p>
						</div>
					</div>
					<input type="text" name="broj_fakture_ulaz" class="fakture_ulaz" id="broj_fakture_ulaz" placeholder="Broj Fakture" style="text-transform: uppercase;">
				</div>
				<!--------------->
				<div class="ul_faktura" id="ul_f_2">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Datum Fakture:</p>
						</div>
					</div>
					<input type="date" name="datum_fakture_ulaz" class="fakture_ulaz" id="datum_fakture_ulaz">
				</div>
				<!--------------->
				<div class="ul_faktura" id="ul_f_3">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Iznos u stranoj valuti:</p>
						</div>
					</div>
					<input type="number" name="broj_fakture_ulaz" class="fakture_ulaz" id="iznos_s_fakture_ulaz">
					<select id="valuta_fakture_izlaz">
						<option>EUR</option>
						<option>USD</option>
					</select>
				</div>
				<!--------------->
				<div class="ul_faktura" id="ul_f_4">
					<div class="fakture_ulaz_header">
						<div class="fakture_ulaz_header_child">
							<p>Iznos u domacoj valuti:</p>
						</div>
					</div>
					<input type="number" name="broj_fakture_ulaz" class="fakture_ulaz" id="iznos_domaca_valuta">
				</div>
				<div id="ul_f_form_buttons" class="form_buttons">
					<button type="button" class="save_button" id="ul_f_save_button" onclick="ulaz_faktura();"
					.>Sacuvaj</button>
					<button type="button" class="form_exit" id="ul_f_form_exit" onclick="show_form('ulaz_fartura_forma');">x</button>
				</div>
			</div>
		</div>
	</div>
	<!---///////////////////////////faktura izlaz///////////////////////-->
	<div class="ulaz_fartura_forma" id="izlazna_fartura_forma">
		<div class="ul_f_background"></div>
		<div class="ul_f_container">
			<div class="ul_f_header"></div>
			<div class="ul_f_content">
				<div class="ul_faktura">
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
	<!--
		<div id="provajderi_div" class="provajderi_div">
					<?php
					/*
					$b = 0;
					for ($i=1; $i < 8 ; $i++) { 
						echo '
						<!--             -->
						<div class="div_input" style="top:' . $b .'%;">
							<div class="div_input_h_p">
								<div class="div_input_h_p_child">
									<p>Provajder ' . $i . ':</p>
								</div>
							</div>
							<div class="div_input_c">
								<input type="text" name="provajder" class="div_input_c_i_p" autocomplete="off" placeholder="Provajder ' . $i . '"  id="provajder'. $i . '">
							</div>
						</div>
						';

						$b = $b + 12.5;
					}
					*/
					?>
					<button type="button" id="provajderi_save" onclick="get_provajders();">Sacuvaj</button>
					<button type="button" id="provajderi_otkazi" onclick="show_provajderi();">Otkazi</button>
				</div>
				<div id="container_amount_div">
					<div id="container_amount_div_child">
						
					</div>
					<div id="container_amount_div_buttons">
						<button type="button" class="container_button" id="container_save" onclick="get_containers();">Sacuvaj</button>
						<button type="button" class="container_button" id="container_otkazi" onclick="show_containers();" style="right: 0px; border-left: 1px solid white;">Otkazi</button>
					</div>
				</div>
	-->
	<script type="text/javascript" src="javascript/script.js"></script>
</body>
</html>