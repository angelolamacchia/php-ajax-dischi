<?php
    require __DIR__. '/database.php';

    //metodo prof
    //tramite questa chiamata get ottengo la lista degli autori
    // if (!empty($_GET['listAuthor'])) {

    //     $listAuthor = $_GET['listAuthor'];

    //     $authors = [];

    //     //se listAuthor è vero allora popolo l'array authors
    //     if ($listAuthor == true) {

    //         foreach($database as $album) {
    //             //scorro nel database, controllo che l'autore non ci sia
    //             //e popolo l'array authors
    //             if (!in_array($album['author'], $listAuthor)) {
    //                 $authors[] = $album['author'];
    //             }

    //         }
    //     }
    //     //ottengo gli autori in formato json
    //     echo json_encode($authors);

    // } else {
    //     //se non faccio la chiamata get ottengo tutto il database
    //     header('Content-Type: application/json');

    //     echo json_encode($database);
    // }

    //metodo mio
    $getAuthor = $_GET['getAuthor'];
    $albums = [];
    
    //se getAuthor è vuoto mi restituisce l'intero database
    if (empty($getAuthor)) {
        header('Content-Type: application/json');
        echo json_encode($database);
    } 
    //se getAuthor è all mi restituisce gli autori
    else if ($getAuthor == 'all') {
        foreach ($database as $album) {
            if (!in_array($album['author'], $authors)) {
                $albums[] = $album['author'];
            }
        }
        echo json_encode($albums);
    } 
    
    //se getAuthor è il nome di un autore mi restituisce l'autore
    foreach ($database as $album) {
        if ($getAuthor == $album['author']) {
            echo json_encode([$album]);
        }
    }
    

    

    
    

    

    
?>