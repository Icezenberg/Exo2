
    $(function () {
        $('#charger').click(function () {
            $.ajax({
                type: 'GET',
                url: 'http://127.0.0.1:3040/liste',
                success: function (donnees) {
                    console.log(donnees);


                    // parcourir un tableau avec for
                    for (var i = 0, c = donnees.length; i < c; i++) {
                        // console.log(donnees[i].name.first)
                        $('#r').append('<li class="list-group-item">Name : ' + donnees[i].name.first + ' ' + donnees[i].name.last + '</li>');
                    }
                },
                error: function () {
                    // gérer les message d'erreur qui s'affiche systématiquement 
                    // alert('La requête n\'a pas abouti');
                }

            });
            // fonction pour effacer la liste
            $('#effacer').click(function () {

                $("#r").empty();             // removes children

                console.log('effacer')


                });

            // });
            //
            $(document).ready(function () {
                $.ajax({
                    type: 'GET',
                    url: 'http://127.0.0.1:3040/liste',
                    success: function (donnees) {
                        console.log(donnees);
                        // $('#r').html('<li>first : ' + donnees.first + '</li>');

                        // $('#r').append('<li>last : ' + donnees.last + '</li>');


                        // parcourir un tableau avec for
                        for (var i = 0, c = donnees.length; i < c; i++) {
                            // console.log(donnees[i].name.first)
                            $('#r').append('<li class="list-group-item">Name : ' + donnees[i].name.first + ' ' + donnees[i].name.last + '</li>');
                        }

                    },
                    error: function () {

                        alert('La requête n\'a pas abouti');
                    }

                });
    
            });

                  //

        })
    });



