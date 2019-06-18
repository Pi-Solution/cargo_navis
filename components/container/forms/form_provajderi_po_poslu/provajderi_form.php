<div id="provajderi_form" id="provajderi_form">
    <div id="pf-bg"></div>
    <div id="pf-container">
        <div class="pf-header">
            <h3>Novi Provajder</h3>
            <p>Unesite novog provajdera za trenutni nalog</p>
        </div>
        <div class="pf-container">
            <div class="pf-input_con">
                <div class="pf-input_header">
                    <div class="pf-ih-align">
                        <p>Provajder</p>
                    </div>
                </div>
                <div class="pf-input_div">
                    <select class="pf-left_long" id="pf-provajder" onchange="save_id_provajdera();">
                        <option>option1</option>
                        <option>option1</option>
                        <option>option1</option>
                    </select>
                    <button class="pf-right_short" onclick="show_partneri();">+</button>
                </div>
            </div>
            <div class="pf-input_con pf-ic2">
                    <div class="pf-input_header">
                        <div class="pf-ih-align">
                            <p>Cijena</p>
                        </div>
                        <div class="pf-ih-align pf-ih-align-r">
                            <p>Valuta</p>
                        </div>
                    </div>
                    <div class="pf-input_div">
                        <input id="np-cijena" type="number" class="pf-left"/>
                        <select id="np-valuta" name="valuta" class="pf-right">
                            <option>KM</option>
                            <option>EUR</option>
                            <option>USD</option>
                        </select>
                    </div>
                </div>
            </div>
        <div class="pf-buttons">
            <button class="pf-bt_otkazi" onclick="show_provajderi_form(); reset_provajderi_form();">Otkaži</button>
            <button class="pf-button_right" onclick="save_provajderi_po_poslu();">Sačuvaj</button>
        </div>
    </div>
</div>