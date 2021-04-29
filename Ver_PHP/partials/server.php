<?php
    require __DIR__. '/database.php';

    //tramite questa chiamata get ottengo la lista degli autori
    if (!empty($_GET['listAuthor'])) {

        $listAuthor = $_GET['listAuthor'];

        $authors = [];

        //se listAuthor è vero allora popolo l'array authors
        if ($listAuthor == true) {

            foreach($database as $album) {
                //scorro nel database, controllo che l'autore non ci sia
                //e popolo l'array authors
                if (!in_array($album['author'], $listAuthor)) {
                    $authors[] = $album['author'];
                }

            }
        }
        //ottengo gli autori in formato json
        echo json_encode($authors);

    } else {
        //se non faccio la chiamata get ottengo tutto il database
        header('Content-Type: application/json');

        echo json_encode($database);
    }

    

    
?>