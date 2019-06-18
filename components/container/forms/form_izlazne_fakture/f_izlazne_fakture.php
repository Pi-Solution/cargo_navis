<div id="form_izlazne_fakture">
    <div class="fuf-bg"></div>
    <div class="fuf-container">
        <div class="fuf-text">
            <h3>Dodaj Izlaznu Fakturu</h3>
            <p>Unesite podatke za ulaznu fakturu</p>
        </div>
        <div class="fuf-input_container">
            
            <div class="fuf-input_con fuf-ic2">
                <div class="fuf-input-text">
                    <div class="fuf-it-align1">
                        <p>Broj Fakture:</p>
                    </div>
                </div>
                <input id="fif-broj_izlazne" type="text" class="fuf-input" style="text-transform:uppercase">
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
                <input id="fif-datum_fakture" type="date" class="fuf-input_left" style="text-transform:uppercase">
                <input id="fif-valuta_fakture" type="date" class="fuf-input_right" style="text-transform:uppercase">
            </div>
            <div class="fuf-input_con fuf-ic4">
                <div class="fuf-input-text">
                    <div class="fuf-it-align1">
                        <p>Iznos:</p>
                    </div>
                </div>
                <input id="fif-domaca_valuta" type="number" class="fuf-input" style="text-transform:uppercase">
            </div>

        </div>
        <div class="fuf-buttons">
            <button class="fuf-button fuf-b_left" onclick="show_form_izlazne_fakture(); reset_form_izlazne_fakture();">Otkaži</button>
            <button class="fuf-button fuf-b_right" onclick="save_form_izlazne_fakture();">Sačuvaj</button>
        </div>
    </div>
</div>