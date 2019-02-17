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
				<div id="con_child_provajder_table">
					
				</div>
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
				<table class="container_table">
					<tr>
						<th style="width: 45%">Provajder</th>
						<th style="width: 45%">Dogovorena cijena</th>
						<th style="width: 10%"></th> 
					</tr>
				</table>
				<div class="container_table_content">
					<table id="con_child_provajder_table_child">
					</table>
				</div>
			</div>
			<div id="negotiated_price_right">
				<table class="container_table">
					<tr>
						<th>Broj Kontejnera</th>
						<th>Vrsta Kontejnera</th>
					</tr>
				</table>
				<div class="container_table_content">
					<table id="container_table_content_child">

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


	<?php
	//forma za dodavanje novih poslova
	include "HTML/forms/add_job.php";
	//forma za dodavanje ulaznih faktura
	include "HTML/forms/ulaz.php";
	//forma za dodavanje izlaznoh faktura
	include "HTML/forms/izlaz.php";
	?>

	<script type="text/javascript" src="javascript/script.js"></script>
</body>
</html>