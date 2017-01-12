function ScoreUI(el,range,start) {

    //ScoreCounter object
    let scoreCounter = new ScoreCounter(el,range,start);

    Display();

    //Catch input element
    let $input = el.querySelector('input.value');


    //Set EventListener to parent Node
    el.addEventListener("click", function(e){
        if(e.target.matches('button.up')){
            scoreCounter.Up();
        }else if(e.target.matches('button.down')){
            scoreCounter.Down();
        }else if(e.target.matches('button.get')) {
            scoreCounter.value();
        }else if(e.target.matches('button.set')) {
            scoreCounter.value(parseInt($input.value,10));
        }else if(e.target.matches('button.reset')) {
            scoreCounter.reset();
        }else if(e.target.matches('button.remove')){
            scoreCounter.removeCounter();
        }
        Display();
    });

    //Function used to display numbers in proper form
    function Display(){
        el.querySelector(".counter").innerHTML = scoreCounter.addZeros(scoreCounter.getScore(), range);
    }
}

function createCounter(){

    let div = document.createElement('div');
    let childLen = document.body.children.length;
    div.id = "score-" + (childLen-3);
    div.innerHTML =
        '<h1>SCORE: <span class="counter"></span></h1>'+
        '<form onsubmit="return false;"> ' +
        '<button  class="up">Up</button> ' +
        '<button class="down">Down</button> ' +
        '<button class="get">Get</button> ' +
        '<input class="value" type="number" min="0"> ' +
        '<button class="set">Set</button> ' +
        '<button class="reset">Reset</button> ' +
        '<button class="remove">Remove Counter</button>'+
        '</form>';


    document.body.appendChild(div);
    return div;
}
