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






