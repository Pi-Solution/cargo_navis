<!DOCTYPE html>
<html>
    <head>
        <title>Cargo Navis</title>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="main.css">
        <link rel="stylesheet" type="text/css" href="nav_bar/nav_bar.css">
        <link rel="stylesheet" type="text/css" href="container/container.css">
        
        <link rel="stylesheet" type="text/css" href="container/button_tab/button_tab.css">
        
        <link rel="stylesheet" type="text/css" href="container/table/table.css">
        <link rel="stylesheet" type="text/css" href="container/forms/nalozi_form/nalozi_form.css">
        <link rel="stylesheet" type="text/css" href="container/forms/form_partneri/form_partneri.css">
        <link rel="stylesheet" type="text/css" href="container/ulazne_i_izlazne_fakture_po_poslu/uif.css">
        <link rel="stylesheet" type="text/css" href="container/nalozi_notes/nalozi_notes.css">

        <link rel="stylesheet" type="text/css" href="container/forms/form_ulazne_fakture/form_ulazne_fakture.css">
        <link rel="stylesheet" type="text/css" href="container/forms/form_izlazne_fakture/f_izlazne_fakture.css">
        <link rel="stylesheet" type="text/css" href="container/nalozi_container/nalozi_container.css">
        <link rel="stylesheet" type="text/css" href="container/forms/form_provajderi_po_poslu/provajderi_form.css">
        <link rel="stylesheet" type="text/css" href="container/forms/form_update/update.css">
        <link rel="stylesheet" type="text/css" href="container/forms/form_kontejneri/form_kontejneri.css">
    </head>
    <body onload="set_select_database_par();">
        <?php
            //navigation bar
            include "nav_bar/nav_bar.php";
            //container
            include "container/container.php";
            //button tab
            include "container/button_tab/button_tab.php";
            
            
            //nalozi form
            include "container/forms/nalozi_form/nalozi_form.php";
            //provajderi
            include "container/forms/form_provajderi_po_poslu/provajderi_form.php";
            //kontnejneri form
            include "container/forms/form_kontejneri/form_kontejneri.php";
            //ulazne fakture
            include "container/forms/form_ulazne_fakture/form_ulazne_fakture.php";
            //ulazne fakture
            include "container/forms/form_izlazne_fakture/f_izlazne_fakture.php";
            //update form
            include "container/forms/form_update/update.php";
            //partneri form
            include "container/forms/form_partneri/form_partneri.php";
        ?>
        <script type="text/javascript" src="global_scripts/get_data.js"></script>
        <script type="text/javascript" src="global_scripts/main.js"></script>
        <script type="text/javascript" src="container/forms/nalozi_form/nalozi_form.js"></script>   
        <script type="text/javascript" src="container/nalozi_container/nalozi_container.js"></script>
        <script type="text/javascript" src="container/nalozi_notes/nalozi_notes.js"></script>
        <script type="text/javascript" src="container/ulazne_i_izlazne_fakture_po_poslu/uif.js"></script>
        <script type="text/javascript" src="container/forms/form_partneri/form_partneri.js"></script>  
        <script type="text/javascript" src="container/forms/form_provajderi_po_poslu/provajderi_form.js"></script>
        <script type="text/javascript" src="container/forms/form_kontejneri/form_kontejneri.js"></script>
        <script type="text/javascript" src="container/forms/form_ulazne_fakture/form_ulazne_fakture.js"></script>
        <script type="text/javascript" src="container/forms/form_izlazne_fakture/f_izlazne_fakture.js"></script>
        <script type="text/javascript" src="container/forms/form_update/update.js"></script>
    </body>
</html>