function ScoreCounter(el,range,start){

        let score=start;

        function addZeros(nr, n){
            return Array(n-String(nr).length+1).join('0')+nr;
        }

        function setLimit(input,len){

           return input.toString().length <= len;
        }

        function getScore(){
          return score;
        }

        function value(newScore){
            if(typeof newScore === 'number' && newScore > 0 && setLimit(newScore,range) == true){
                score = newScore;
            }else{
                alert("Counter value: " + score);
            }
        }

        function Up(){
            score++;
            if(setLimit(score,range) == false){
               score--;
            }
        }

        function Down(){
            score--;
            if(score < 0){
                alert("Sorry, cannot go lower than zero");
                score =0;
            }

        }

        function reset(){
            score = 0;
        }

        function removeCounter(){
            return el.parentNode.removeChild(el);
        }

        return{
            value: value,
            Up: Up,
            Down: Down,
            reset: reset,
            getScore:getScore,
            addZeros:addZeros,
            setLimit:setLimit,
            removeCounter:removeCounter
        };
}

function createCounter(){

    let div = document.createElement('div');
    let childLen = document.body.children.length;
    div.id = "score-" + (childLen-3);
    div.innerHTML =
        '<h1>' + 'Score ' + (childLen-3) + ':' + ' <span class="counter"></span></h1>'+
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





