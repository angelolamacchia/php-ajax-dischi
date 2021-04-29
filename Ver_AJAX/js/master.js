var app = new Vue ({
    el: "#app",

    data: {
        songs: [],
        songsArtist: [],
        selected: '',
    },

    mounted() {
        axios
        //la chiamata get è dinamica
        .get(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/php-ajax-dischi/Ver_PHP/partials/server.php')
        // .get("http://localhost:8888/php-ajax-dischi/Ver_PHP/partials/server.php")
        .then( (result) => {
            // console.log(result.data);

            this.songs = result.data;

            // this.songs.forEach((element, index) => {

            //     //popolo l'array con i generi delle canzoni
            //     if (!this.songsArtist.includes(element.author)) {
            //         this.songsArtist.push(element.author);
            //     }; 
            // });
           
        }); 
        
    },

    methods: {
        orderSongs() {
            //funzione per ordinare le canzoni
            this.songs.sort( (a,b)=>(parseInt(a.year) < parseInt(b.year) ) ? -1:1);
        },

        getAuthors() {
            axios
            .get(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/php-ajax-dischi/Ver_PHP/partials/server.php?listAuthor=true')
            .then((result) => {
                console.log(result.data);

                this.songsArtist = result.data;
            });
        }


    }
});