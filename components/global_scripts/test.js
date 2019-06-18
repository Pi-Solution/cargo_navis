
//select data from db
function select_data(){
    var data = {
        /*
        select: {
            collums: 'id, ime_partnera, grad',  //deside what collums you want to select
            table_name: "partneri",			//table name
            // where_collum_name: 'id',		//WHERE collum name
            // where_operation: 1,				// [1 = '='], [2 = '<'], [3 = '>'], [4 = '<='], [5 = '>=']
            // where: '63'						//WHERE collum value
        },
        */
        select: {
            collums: 'id_komitenta, paritent, bl, bl2, luka_polazka, luka_dolaska, datum_polaska, datum_dolaska, napomena, datum_ponude',  //deside what collums you want to select
            table_name: "poslovi",			//table name
            // where_collum_name: 'id',		//WHERE collum name
            // where_operation: 1,				// [1 = '='], [2 = '<'], [3 = '>'], [4 = '<='], [5 = '>=']
            // where: '63'						//WHERE collum value
        }
    }
    send_to_server(data);
}
function test(){
    var data = {
        /*
        insert: {
            table_name: "partneri",
            data: [
                {
                    ime_partnera: "Petar",
                    grad: "Banja Luka",
                    adresa: "Cara Dusana",
                    broj_telefona: "063498420",
                    napomena: "bla bla bla",
                    tip_suradnje: 0
                }
            ]
        }
        */
       insert: {
            table_name: "poslovi",
            data: [
                {
                    id_komitenta: 6,
                    paritent: "DAP",
                    bl: "567567567567",
                    bl2: "HDJKFHKDJSHF",
                    luka_polazka: "Banja Luka",
                    luka_dolaska: "Hong Kong",
                    datum_polaska: "2019-04-06",
                    datum_dolaska: "2019-04-06",
                    napomena: "prvi posao samo proba",
                    datum_ponude: "2019-06-06"
                }
            ]
        }
    }
    send_to_server(data);
}
function send_to_server(to_server){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText)
            $server_response = JSON.parse(this.responseText);
            console.log($server_response);
		}
	};
	//send data
	xhttp.open("POST", "../data/controller.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(to_server));
}