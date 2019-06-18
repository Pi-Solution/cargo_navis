<div id="form_ulazne_fakture">
    <div class="fuf-bg"></div>
    <div class="fuf-container">
        <div class="fuf-text">
            <h3>Dodaj ulaznu fakturu</h3>
            <p>Unesite podatke za ulaznu fakturu</p>
        </div>
        <div class="fuf-input_container">
            <div class="fuf-input_con">
                <div class="fuf-input-text">
                    <div class="fuf-it-align1">
                        <p>Provajder:</p>
                    </div>
                </div>
                <select class="fuf-input" id="fuf-provajder" onchange="save_id_provajdera_ulazna_f();">
                    <option>Izaberi</option>
                </select>
            </div>
            
            <div class="fuf-input_con fuf-ic2">
                <div class="fuf-input-text">
                    <div class="fuf-it-align1">
                        <p>Broj Fakture:</p>
                    </div>
                </div>
                <input id="fuf-broj_ulazne" type="text" class="fuf-input" style="text-transform:uppercase">
            </div>

            <div class="fuf-input_con fuf-ic3">
                <div class="fuf-input-text">
                    <div class="fuf-it-align1">
                        <p>Datum Fakture:</p>
                    </div>
                    <div class="fuf-it-align2">
                            <p>Valuta Fakture:</p>
                        </div>
                </div>
                <input id="fuf-datum_fakture" type="date" class="fuf-input_left" style="text-transform:uppercase">
                <input id="fuf-valuta_fakture" type="date" class="fuf-input_right" style="text-transform:uppercase">
            </div>
            <div class="fuf-input_con fuf-ic4">
                <div class="fuf-input-text">
                    <div class="fuf-it-align1">
                        <p>Valuta Plaćanja:</p>
                    </div>
                    <div class="fuf-it-align2">
                            <p>Kurs:</p>
                        </div>
                </div>
                <select id="fuf-valuta" class="fuf-input_left" onchange="fakture_chose_valuta(this.value)">
                    <option>KM</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
                <input id="fuf-kurs" type="number" class="fuf-input_right fuf-disabled" style="text-transform:uppercase" disabled oninput="kurs = this.value">
            </div>
            <div class="fuf-input_con fuf-ic5">
                <div class="fuf-input-text">
                    <div class="fuf-it-align1">
                        <p>Iznos:</p>
                    </div>
                    <div class="fuf-it-align2">
                            <p>Iznos Domaća Valuta:</p>
                        </div>
                </div>
                <input id="fuf-s_val" type="number" class="fuf-input_left fuf-disabled" oninput="form_ulazne_fakture_calculate_kurs(true, this.value)" disabled>
                <input id="fuf-domaca_valuta" type="number" class="fuf-input_right" style="text-transform:uppercase" oninput="form_ulazne_fakture_calculate_kurs(false, this.value)">
            </div>

        </div>
        <div class="fuf-buttons">
            <button class="fuf-button fuf-b_left" onclick="show_form_ulazne_fakture(); reset_form_ulazne_fakture();">Otkaži</button>
            <button class="fuf-button fuf-b_right" onclick="save_form_ulazne_fakture();">Sačuvaj</button>
        </div>
    </div>
</div>