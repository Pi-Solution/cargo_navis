<?php
        class Delete extends Database{
            
            private $table_name;
            private $index_name;
            private $stmt;

            public function set_data($data){
                $this->table_name = $data["table_name"];
                $this->index_name = $data["index_name"];
            }
            public function prepare_delete(){

                $this->set_db_parametars();
                $this->stmt = $this->connect()->prepare("DELETE FROM $this->table_name WHERE $this->index_name = ?");
                //echo "DELETE FROM $this->table_name WHERE $this->index_name = ?";
            }
            public function delete_data($index){
                $this->stmt->execute([$index]);
                return 104;
            }
            public function __destruct(){
                $this->stmt = null;
            }
        }
        