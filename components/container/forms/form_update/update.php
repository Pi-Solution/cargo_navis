<div class="change_nalozi_data" id="change_nalozi_data">
        <div class="cnd-bg"></div>
        <div class="cnd-content">
            <div class="cnd-header">
                <h3>Izmjeni nalog</h3>
            </div>
            <div class="cnd-text">
                <p>Ovim procesom mijenjate već upisane <br/> podatke unutar naloga!</p>
            </div>
            <div class="cnd-option">
                <div class="cnd-option_child">
                    <select class="cnd-select" id="cnd-select" onchange="change_input_type(this.value);">
                        <option>Paritet</option>
                        <option>B/L</option>
                        <option>B/L 2</option>
                        <option>Luka Polazak</option>
                        <option>Luka Dolazak</option>
                        <option>Datum Isplovljavanja</option>
                        <option>Datum Uplovljavanja</option>
                        <option>Datum Ponude</option>
                    </select>
                </div>
            </div>
            <div class="cnd-input">
                <div class="cnd-option_child" id="cnd-change_data_input">
                    <input type="text" name="bl" class="cnd-input_field" id="cnd-input">
                </div>
            </div>
            <button class="cnd-back_b" onclick="show_change_nalozi_data(); change_input_type('Komitent'); reset_change_nalozi_data();">Otkaži</button>
            <button class="cnd-save_b" onclick="save_changes_to_nalozi();">Sačuvaj</button>
        </div>
    </div>