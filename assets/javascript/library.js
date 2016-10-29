$(document).ready(function() {
    console.log("ready!");


    var random = '';
    var guess = [];
    var wins = 0;
    var loses = 0;
    var result = 0; // sum of all the guesses

    function playGame() {

        guess = new Array(4);
        for (var i = 0; i < guess.length; i++) {
            guess[i] = 1 + Math.floor((Math.random() * 12));
            console.log(guess[i]);
        };

        console.log('this is the guess' + guess);
        random = 18 + Math.floor((Math.random() * 120));
        console.log(random);



        //    for (var i = 0; i < guess.length; i++) {
        // 	    var b= $('<button>');
        // 	    b.html(randomCrystalNumber[i]);
        // 	    b.addClass('btn btn-sq btn-default');
        // 	    b.attr('data-let', randomCrystalNumber[i]);
        // 	    console.log(b);
        // };

        // $('.btn-default').on('click', function() {
        //         for (var i = 0; i < guess.length; i++) {

        //             var button = guess[i];

        //             console.log('this button:' + button);

        //             // button.addClass('btn btn-sq btn-default');
        //             // button.attr('data-let', guess[i]);

        //         };
        //         result += guess[i];
        //         console.log('result:' + result);

        // });

        //     $('btn-default').text($(this).data('let'));

        //     $('#score').html('Your score:' + result);

        // });



        $('#goalNum').html('Your goal:' + ' ' + random);


        $('#crystal-1').on('click', function() {
            // blueCrytal = randomCrystalNumber[0];
            // console.log(blueCrytal);
            // var button = guess[0];
            // console.log(button);
            $('#expression').html('');
            result += guess[0];
            console.log(result);
            $('#score').html('Your score:' + ' ' + result);

            if (random === result) {
                wins++;
                $('#expression').html('You Win!');
                $('#userWins').html('Wins:' + ' ' + wins);
                reset();

                // random = 0;
                // $('#goal').html('Your goal:' + ' ' + random);
                // result = 0;
                // $('#score').html('Your score:' + ' ' + result);



            } else if (result > random) {
                loses++;
                $('#expression').html('You lose!');
                $('#userLoses').html('Loses:' + ' ' + loses);
                reset();

                // random = 0;
                // $('#goal').html('Your goal:' + ' ' + random);
                // result = 0;
                // $('#score').html('Your score:' + ' ' + result);



            }

        });

        $('#crystal-2').on('click', function() {
            // blueCrytal = randomCrystalNumber[0];
            // console.log(blueCrytal);
            // var button = guess[1];
            // console.log(button);
            $('#expression').html('');
            result += guess[1];
            console.log(result);
            $('#score').html('Your score:' + ' ' + result);

            if (random === result) {
                wins++;
                $('#expression').html('You Win!');
                $('#userWins').html('Wins:' + ' ' + wins);
                reset();
                // random = 0;
                // $('#goal').html('Your goal:' + ' ' + random);
                // result === 0;
                // $('#score').html('Your score:' + ' ' + result);
                // playGame();


            } else if (result > random) {
                loses++;
                $('#expression').html('You lose!');
                $('#userLoses').html('Loses:' + ' ' + loses);
                reset();

                // random = 0;
                // $('#goal').html('Your goal:' + ' ' + random);
                // result === 0;
                // $('#score').html('Your score:' + ' ' + result);
                // playGame();
            }

        });

        $('#crystal-3').on('click', function() {
            // blueCrytal = randomCrystalNumber[0];
            // console.log(blueCrytal);
            // var button = guess[2];
            // console.log(button);
            $('#expression').html('');
            result += guess[2];
            console.log(result);
            $('#score').html('Your score:' + ' ' + result);

            if (random === result) {
                wins++;
                $('#expression').html('You Win!');
                $('#userWins').html('Wins:' + ' ' + wins);
                reset();

                // random = 0;
                // $('#goal').html('Your goal:' + ' ' + random);
                // result = 0;
                // $('#score').html('Your score:' + ' ' + result);
                // playGame();


            } else if (result > random) {
                loses++;
                $('#expression').html('You lose!');
                $('#userLoses').html('Loses:' + ' ' + loses);
                reset();

                // guess = new Array(0);
                // random = 0;
                // $('#goal').html('Your goal:' + ' ' + random);
                // result = 0;
                // $('#score').html('Your score:' + ' ' + result);
                // playGame();
            }

        });

        $('#crystal-4').on('click', function() {
            // blueCrytal = randomCrystalNumber[0];
            // console.log(blueCrytal);
            // var button = guess[3];
            // console.log(button);
            $('#expression').html('');
            result += guess[3];
            console.log(result);
            $('#score').html('Your score:' + ' ' + result);

            if (random === result) {
                wins++;
                $('#expression').html('You Win!');
                $('#userWins').html('Wins:' + ' ' + wins);
                reset();

                // random = 0;
                // $('#goal').html('Your goal:' + ' ' + random);
                // result = 0;
                // $('#score').html('Your score:' + ' ' + result);
                // playGame();


            } else if (result > random) {
                loses++;
                $('#expression').html('You lose!');
                $('#userLoses').html('Loses:' + ' ' + loses);
                reset();

                // guess = new Array(0);
                // random = 0;
                // $('#goal').html('Your goal:' + ' ' + random);
                // result = 0;
                // $('#score').html('Your score:' + ' ' + result);
                // playGame();
            }

        });

        function reset() {
            random = 0;
            $('#goal').html('Your goal:' + ' ' + random);
            result = 0;
            $('#score').html('Your score:' + ' ' + result);
            playGame();

        }








        // if (loses++ || wins++) {
        // 	random;
        // 	guess;
        // 	result = 0;
        // }else{ };

    };
    playGame();

    // function checkWinsOrLoses() {


    // };
    // checkWinsOrLoses();

});