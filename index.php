<!DOCTYPE html>
<html>
<head>
	<title>Cargo Navis</title>
	<meta charset="utf-8">
	<link rel="icon" href="images/logo/logo.png">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/navigation_bar.css">
	<link rel="stylesheet" type="text/css" href="css/table_nalozi.css">
	<link rel="stylesheet" type="text/css" href="css/content_main_info.css">
	<link rel="stylesheet" type="text/css" href="css/content1.css">
	<link rel="stylesheet" type="text/css" href="css/content2.css">
	<link rel="stylesheet" type="text/css" href="css/content3.css">
	<link rel="stylesheet" type="text/css" href="css/content4.css">
	<link rel="stylesheet" type="text/css" href="css/content_buttons.css">
	<link rel="stylesheet" type="text/css" href="css/forms/universal_form_div.css">
	<link rel="stylesheet" type="text/css" href="css/forms/form_nalozi.css">
	<link rel="stylesheet" type="text/css" href="css/forms/form_provajders.css">
	<link rel="stylesheet" type="text/css" href="css/forms/form_kontejneri.css">
	<link rel="stylesheet" type="text/css" href="css/forms/ulazne_izlazne_fakture.css">
	<link rel="stylesheet" type="text/css" href="css/forms/change_nalozi_data.css">
	<link rel="stylesheet" type="text/css" href="css/warning_screens/warning_delete.css">
	<link rel="stylesheet" type="text/css" href="css/forms/provajder_notes.css">
	<link rel="stylesheet" type="text/css" href="css/flying_div.css">
</head>
<body onload="get_data_controller(0); on_start();">
	<div class="navigation_bar"></div>
	<div id="main">
		<div id="table_nalozi">
			<div id="table_nalozi_child">
				<div id="nalozi_header">
					<table class="nalozi_table_header">
						<tr>
							<th width="10%">ID</th>
							<th width="45%">Komitent</th>
							<th width="45%">Datum Ponude</th>
						</tr>
					</table>
				</div>
				<div class="nalozi_content">
					<table class="nalozi_table_content" id="nalozi_table">
						<tr>
							<td width="10%">ID</td>
							<td width="45%">Komitent</td>
							<td width="45%">Datum Ponude</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<div class="nalozi_note">
			<div class="nalozi_note_parent">
				<div class="nalozi_note_header">
					<div class="nalozi_note_header_text">
						<p>Napomena:</p>
					</div>
					<button class="nalozi_note_button" onclick="save_job_note();">SAČUVAJ IZMJENU</button>
				</div>
				<textarea class="nalozi_note_text" id="job_note_text"></textarea>	
			</div>
		</div>
		<button id="nalozi_button" onclick="show_form(0)"><strong>+ DODAJ NOVI NALOG</strong></button>


		<div id="content">
			<div id="content_child">
				<div id="content_main_info_header">
					<div class="content_main_info_header_text_al">
						<p><strong>Osnovne Informacije</strong></p>
					</div>
				</div>
				<?php
				//include main info
				include "HTML/content_main_info.php";
				//include "provajderi" i "kontejneri"
				include "HTML/provajderi_i_kontejneri.php";
				//include "ulazne i izlane fakture"
				include "HTML/ulazne_i_izlazne_fakture.php";
				?>	
				<div id="content_main_info_footer">
					<button class="content_buttons content_provajders" onclick="show_form(1)">DODAJ PROVAJDERE</button>
					<button class="content_buttons content_containers" onclick="show_form(2);">DODAJ KONTEJNERE</button>
					<button class="content_buttons content_change" onclick="show_change_nalozi_data();">IZMJENI</button>
					<button class="content_buttons content_delete" onclick="show_delete_waning('jobs', current_nalog_id, 0);"><img src="images/icons/trash_w.svg" width="8%;"></button>
				</div>
			</div>
		</div>
	</div>
	<?php
		include "HTML/forms/nalozi.php";
		include "HTML/forms/provajderi.php";
		include "HTML/forms/kontejneri.php";
		include "HTML/forms/ulazne_fakture.php";
		include "HTML/forms/izlazne_fakture.php";
		include "HTML/warning_screens/warning_delete.php";
		include "HTML/forms/change_nalozi_data.php";
		include "HTML/forms/provajder_notes.php";
		include "HTML/flying_div.php";
	?>
	<script type="text/javascript" src="js/forms.js"></script>	
	<script type="text/javascript" src="js/main_variables.js"></script>
	<script type="text/javascript" src="js/get_data.js"></script>	
	<script type="text/javascript" src="js/print_to_screen.js"></script>
	<script type="text/javascript" src="js/warning_delete.js"></script>
	<script type="text/javascript" src="js/change_nalozi_data.js"></script>
	<script type="text/javascript" src="js/provajderi_notes.js"></script>
	<script type="text/javascript" src="js/show_notes_div.js"></script>
	<script type="text/javascript" src="js/provajders/provajders-event_listeners.js"></script>
	<script type="text/javascript" src="js/add_job_note.js"></script>
</body>
</html>