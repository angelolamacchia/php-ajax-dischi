<?php include __DIR__. '/partials/database.php'; ?> <!--Aggiungo il DB prima dell'HTML-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Dischi</title>
</head>
<body>

    <div class="container-fluid" id="app">
        <header>
            <img src="img/Spotify_logo.png">
        </header>

        <main>
            <div class="row"> 
                <!--Includo la card in un ciclo per stampare tramite php-->
                <?php foreach($database as $album) { ?> 
                <div class="wrapper col-lg-3 col-md-6 col-sm-12">
                    <div class="card"> 
                        <img src="<?php echo $album['poster'] ?>">
                        <div class="song_title">
                            <?php echo $album['title'] ?>
                        </div> 
                        <div class="artist text_grey"><?php echo $album['author'] ?></div>
                        <div class="year text_grey"><?php echo $album['year'] ?></div>
                    </div>
                </div>
                <?php } ?>

            </div>
        </main>
    </div>
</body>
</html>