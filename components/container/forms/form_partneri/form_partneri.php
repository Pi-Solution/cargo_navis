<div id="form_partneri">
    <div id="fp-bg"></div>
    <div id="fp-container">
        <div id="fp-arrow"></div>
        <div class="pf-text">
            <h3>Dodaj Partnera</h3>
            <p>Ovdje možete dodati novog partnera</p>
        </div>
        <div class="fp-input_container">

            <div class="fp_input_main_con">
                <div class="fp_input_header">
                    <div class="fp_input_header_all">
                        <p>Ime partnera<p>
                    </div>
                </div>
                <div class="fp-input_field_div">
                    <input type="text" name="fp-ime_partnera" id="fp-ime_partnera" class="fp-input"/>
                </div>
            </div>

            <div class="fp_input_main_con fp-2">
                <div class="fp_input_header">
                    <div class="fp_input_header_all">
                        <p>Država<p>
                    </div>
                    <div class="fp_input_header_all fp-rigth-all">
                        <p>Grad<p>
                    </div>
                </div>
                <div class="fp-input_field_div-left">
                    <input type="text" name="fp-drzava" id="fp-drzava" class="fp-input"/>
                </div>
                <div class="fp-input_field_div-right">
                    <input type="text" name="fp-grad" id="fp-grad" class="fp-input"/>
                </div>
            </div>
            <div class="fp_input_main_con fp-3">
                <div class="fp_input_header">
                    <div class="fp_input_header_all">
                        <p>Adresa<p>
                    </div>
                    <div class="fp_input_header_all fp-rigth-all">
                        <p>Broj Telefona<p>
                    </div>
                </div>
                <div class="fp-input_field_div-left">
                    <input type="text" name="adresa" id="fp-adresa" class="fp-input"/>
                </div>
                <div class="fp-input_field_div-right">
                    <input type="text" name="broj_telefona" id="fp-broj_telefona" class="fp-input"/>
                </div>
            </div>

            <div class="fp_input_main_con fp-4">
                <div class="fp_input_header">
                    <div class="fp_input_header_all">
                        <p>Tip Suradnje<p>
                    </div>
                </div>
                <div class="fp-input_field_div">
                    <select class="fp-input" id="fp-tip_suradnje">
                        <option>Komitent</option>
                        <option>Provajder</option>
                        <option>Komitent i Provajder</option>
                    </select>
                </div>
            </div>
        </div>  
        <div class="fp-buttons_con">
            <button class="fp-buttons fpb-left" onclick="show_partneri(); reset_partneri_form();">Otkaži</button>
            <button class="fp-buttons fpb-right" onclick="save_partneri_form_data();">Sačuvaj</button>
        </div>
    </div>
</div>