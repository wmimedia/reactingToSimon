var simon = {
    "greenButton": {
        "id": 1,
        response: function(){
            $('.green').css('background-color', '#1aff1a')
            setTimeout(function(){
                $('.green').css('background-color', '#00cc00')
            }, 200)
        }
    },
    "redButton": {
        "id": 2,
        response: function(){
            $('.red').css('background-color', '#ff1a1a')
            setTimeout(function(){
                $('.red').css('background-color', '#cc0000')
            }, 200)
        }
    },
    "yellowButton": {
        "id": 3,
        response: function(){
            $('.yellow').css('background-color', '#ffff1a')
            setTimeout(function(){
                $('.yellow').css('background-color', '#cccc00')
            }, 200)
        }
    },
    "blueButton": {
        "id": 4,
        response: function(){
            $('.blue').css('background-color', '#1a1aff')
            setTimeout(function(){
                $('.blue').css('background-color', '#000099')
            }, 200)
        }
    },
    "brain": {
        "userMoveSet":[],
        "simonMoveSet":[],
        simonSays: function(){
            var theMove = Math.floor(Math.random() * (5 - 1)) + 1;
            simon.brain.simonMoveSet.push(theMove)
            var maxLoops = this.simonMoveSet.length
            var counter = 0
            (function next(counter, maxLoops){
                if(counter++ >= maxLoops) return;
                setTimeout(function(){

                    switch(this.simonMoveSet[counter]){
                    case 1:
                        simon.greenButton.response();
                        break;
                    case 2:
                        simon.redButton.response();
                        break;
                    case 3:
                        simon.yellowButton.response();
                        break;
                    case 4:
                        simon.blueButton.response();
                        break;
                    }
                    next(counter, maxLoops);
                }, 1500);
            })(0,maxLoops);
        }
    }
}
$(document).ready(function() {
    $('.green').on('click', function(event) {
        simon.greenButton.response()
        simon.brain.userMoveSet.push(simon.greenButton.id)

    });
    $('.red').on('click', function(event) {
        simon.redButton.response()
        simon.brain.userMoveSet.push(simon.redButton.id)
    });
    $('.yellow').on('click',function(event) {
        simon.yellowButton.response()
        simon.brain.userMoveSet.push(simon.yellowButton.id)
    });
    $('.blue').on('click', function(event) {
        simon.blueButton.response()
        simon.brain.userMoveSet.push(simon.blueButton.id)
    });
    $('.start').on('click', function(event) {
        event.preventDefault();
        simon.brain.simonSays();
    });
});


//First Issue, for-loop is synchronous and setTimout is asynchronous. Sooooo our pattern is being executed at the exact same time(lights same time no pause).
