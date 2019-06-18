<div id="nalozi_form">
    <div class="nf-bg"></div>
    <div class="nf-container">
        <div class="nf-header_and_para">
            <h3 class="nf-h3">Novi Nalog</h3>
            <p class="nf-p">Dole unesite podatke za novi nalog</p>
        </div>
        <div class="nf-form">
            <div class="nf-input_main_container">
                <div class="nf-input_header">
                    <div class="nf-header_align">
                        <h3>Komitent</h3>
                    </div>
                </div>
                <div class="nf-input_container">
                    <select class="nf-left_input-special" id="nf-komitenti" onchange="save_id_partnera();">
                    </select>
                    <button class="nf-rigth_input-special" onclick="show_partneri();">+</button>
                </div>
            </div>

            <div class="nf-input_main_container nfc-2">
                <div class="nf-input_header">
                    <div class="nf-header_align">
                        <h3>Paritet</h3>
                    </div>
                </div>
                <div class="nf-input_container">
                    <select class="nf-input" id="nf-paritet">
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
            </div>

            <div class="nf-input_main_container nfc-3">
                <div class="nf-input_header">
                    <div class="nf-header_align">
                        <h3>B/L</h3>
                    </div>
                </div>
                <div class="nf-input_header nf-h-right">
                        <div class="nf-header_align">
                            <h3>B/L 2</h3>
                        </div>
                    </div>
                <div class="nf-input_container">
                   <input id="nf-bl" type="text" name="bl" class="nf-left_input" style="text-transform:uppercase"/>  
                   <input id="nf-bl2" type="number" name="bl2" class="nf-right_input"/> 
                </div>
            </div>

            <div class="nf-input_main_container nfc-4">
                <div class="nf-input_header">
                    <div class="nf-header_align">
                        <h3>Luka Polaska</h3>
                    </div>
                </div>
                <div class="nf-input_header nf-h-right">
                        <div class="nf-header_align">
                            <h3>Datum Polaska</h3>
                        </div>
                    </div>
                <div class="nf-input_container">
                    <input id="nf-luka_polaska" type="text" name="luka_polaska" class="nf-left_input"/>  
                    <input id="nf-datum_polaska" type="date" name="datum_polaska" class="nf-right_input"/> 
                </div>
            </div>
            <div class="nf-input_main_container nfc-5">
                <div class="nf-input_header">
                    <div class="nf-header_align">
                        <h3>Luka Dolaska</h3>
                    </div>
                </div>
                <div class="nf-input_header nf-h-right">
                        <div class="nf-header_align">
                            <h3>Datum Dolaska</h3>
                        </div>
                    </div>
                <div class="nf-input_container">
                    <input id="nf-luka_dolaska" type="text" name="luka_dolaska" class="nf-left_input"/>  
                    <input id="nf-datum_dolaska" type="date" name="datum_dolaska" class="nf-right_input"/> 
                </div>
            </div>
            <div class="nf-input_main_container nfc-6">
                <div class="nf-input_header">
                    <div class="nf-header_align">
                        <h3>Datum Ponude</h3>
                    </div>
                </div>
                <div class="nf-input_container">
                    <input id="nf-datum_ponude" type="date" name="datum_posla" class="nf-input"/> 
                </div>
            </div>
        </div>
        <div class="nf-buttons_div">
            <button class="nf-button nf-b-otkazi" onclick="show_nalozi_form(); reset_nalozi_form();">Otkaži</button>
            <button class="nf-button nf-b-sacuvaj" onclick="save_nalog_to_db();" >Sačuvaj</button>
        </div>
    </div>
</div>