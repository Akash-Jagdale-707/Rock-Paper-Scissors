function rpsgame(yourchoice) {
   console.log(yourchoice);
   var humanchoice, botchoice;

    humanchoice = yourchoice.id;

    botchoice = numbertochoice(randomrpsint());
    console.log('Computer Choice: ', botchoice);

    results = decidewinner(humanchoice, botchoice);
    console.log(results);

    message = finalmessage(results);
    console.log(message)

    rpsfrontend(yourchoice.id, botchoice, message);
}

function randomrpsint() {
    return Math.floor(Math.random() * 3);
}

function numbertochoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decidewinner(yourchoice, computerchoice) {
    var rpsdatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'scissors': 0, 'rock': 1, 'paper': 0.5},
        'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1}
    };

    var yourscore = rpsdatabase[yourchoice][computerchoice];
    var computerscore  = rpsdatabase[computerchoice][yourchoice];

    return [yourscore, computerscore];
}

function finalmessage([yourscore, computerscore]) {
    if (yourscore === 0) {
        return {'message': 'You Lost!', 'color': 'red'}; 
    }
    else if (yourscore === 0.5) {
        return {'message': 'Its A Tie', 'color': 'yellow'};
    }
    else {
        return {'message': 'You Won!', 'color': 'green'};
    }
}

function rpsfrontend(humanimagechoice, botimagechoice, finalmessage) {
    var imagetodatadase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');

    humandiv.innerHTML = "<img src = '" + imagetodatadase[humanimagechoice] + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233,1);'>"
    messagediv.innerHTML = "<h1 style='color: " + finalmessage['color'] + "; font-size: 60px; pading: 30px; '>" + finalmessage ['message'] + "</h1>"
    botdiv.innerHTML = "<img src = '" + imagetodatadase[botimagechoice] + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24,1);'>"

    document.getElementById('cell-images').appendChild(humandiv);
    document.getElementById('cell-images').appendChild(messagediv);
    document.getElementById('cell-images').appendChild(botdiv);
}