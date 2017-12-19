var yourWins= 0;
var yourLosses= 0;
var addition=0;
var total= Math.floor((Math.random() * 100) + 19);

var crystalA = Math.floor((Math.random() * 12) + 1);
var crystalB = Math.floor((Math.random() * 12) + 1);
var crystalC = Math.floor((Math.random() * 12) + 1);
var crystalD = Math.floor((Math.random() * 12) + 1);



var updateAddition = function () {
    $('.addition').empty();
    $('.addition').append(addition);

    $('#yourWins').empty();
    $('#yourWins').append(yourWins);

    $('#yourLosses').empty();
    $('#yourLosses').append(yourLosses);
}


// restart game
    var restart = function (){
        addition = 0;
        total = Math.floor((Math.random() * 100) + 19);

        $('.total').empty();
        $('.total').append(total);

        var crystalA = Math.floor((Math.random() * 12) + 1);
        var crystalB = Math.floor((Math.random() * 12) + 1);
        var crystalC = Math.floor((Math.random() * 12) + 1);
        var crystalD = Math.floor((Math.random() * 12) + 1);
        updateAddition();
    }	


var game = function (){
    if (addition == total) {
        yourWins = yourWins + 1;
        alert("Winner!");
        restart();
    } else if (addition > total) {
        yourLosses = yourLosses + 1;
        alert("Loser!");
        restart();
    } else {
        updateAddition();
    }
}

$('.total').append(total);
$('.addition').append(addition);

$( document ).ready(function() {
    $('crystalA').click(function(){
        addition = addition + crystalA;
        game();
    })

    $('crystalB').click(function(){
        addition = addition + crystalB;
        game();
    })

    $('crystalC').click(function(){
        addition = addition + crystalC;
        game();
    })

    $('crystalD').click(function(){
        addition = addition + crystalD;
        game();
    })
});
