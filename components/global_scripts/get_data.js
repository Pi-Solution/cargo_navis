var s_data = new Object();
//select data from db
function set_select_database_par(){
    var data = {
        select: {
            collums: '*',  //deside what collums you want to select
            table_name: "poslovi",			//table name
            join_columm_name: "id_partneri",
            //where_collum_name: 'id',		//WHERE collum name
            // where_operation: 1,				// [1 = '='], [2 = '<'], [3 = '>'], [4 = '<='], [5 = '>=']
            // where: '63'						//WHERE collum value
            table_name2: "partneri",         //second table for join
            join_columm_name2: "id_partneri"
        }
    }
    get_data(data);
}

function get_data(to_server){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText)
            $server_response = JSON.parse(this.responseText);
            //console.log($server_response);
            if($server_response.select.message == 101){
                //save data to global var
                s_data.nalozi = $server_response.select.data
                //outprint data to main table
                outprint_table_data();
                //get partneri from db
                get_partneri();
            }
        }
    };
    //send data
    xhttp.open("POST", "../data/controller.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(to_server));
}
function get_partneri(){
    var data = {
        select: {
            collums: '*',  //deside what collums you want to select
            table_name: "partneri",			//table name
            //where_collum_name: 'id',		//WHERE collum name
            // where_operation: 1,				// [1 = '='], [2 = '<'], [3 = '>'], [4 = '<='], [5 = '>=']
            // where: '63'						//WHERE collum value
        }
    }
    get_partneri_aj(data);
}
function get_partneri_aj(to_server){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText)
            $server_response = JSON.parse(this.responseText);
            //console.log($server_response);
            if($server_response.select.message == 101){
                //save data to global var
                s_data.partneri = $server_response.select.data;
                //add partneri to nalozi form 
                dodaj_komitente();
                //add partneri to provajderi form 
                dodaj_provajdere();
                //add provajdere to ulazne fakture form
                dodaj_ulazne_fakture_provajdere();
            }
        }
    };
    //send data
    xhttp.open("POST", "../data/controller.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(to_server));
}