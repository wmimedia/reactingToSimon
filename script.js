var simon = {
    "greenButton": {
        "id": 0,
        response: function(){
            $('#soundGreen')[0].play();
            $('.green').css('background-color', '#1aff1a')
            setTimeout(function(){
                $('.green').css('background-color', '#00cc00')
            }, 400)
        }
    },
    "redButton": {
        "id": 1,
        response: function(){
            $('#soundRed')[0].play();
            $('.red').css('background-color', '#ff1a1a')
            setTimeout(function(){
                $('.red').css('background-color', '#cc0000')
            }, 400)
        }
    },
    "yellowButton": {
        "id": 2,
        response: function(){
            $('#soundYellow')[0].play();
            $('.yellow').css('background-color', '#ffff1a')
            setTimeout(function(){
                $('.yellow').css('background-color', '#cccc00')
            }, 400)
        }
    },
    "blueButton": {
        "id": 3,
        response: function(){
            $('#soundBlue')[0].play();
            $('.blue').css('background-color', '#1a1aff')
            setTimeout(function(){
                $('.blue').css('background-color', '#000099')
            }, 400)
        }
    },
    "brain": {
        "userMoveSet":[],
        "simonMoveSet":[],
        simonSays: function(){
            var theMove = Math.floor(Math.random() * (4 - 1)) + 1;
            simon.brain.simonMoveSet.push(theMove)
            console.log('starting the loop')
            for(i=0;i<this.simonMoveSet.length;i++){
                (function(i){
                    setTimeout(function(){
                        if(simon.brain.simonMoveSet[i]==0){
                            simon.greenButton.response();
                        }else if (simon.brain.simonMoveSet[i]==1){
                            simon.redButton.response();
                        }else if (simon.brain.simonMoveSet[i]==2) {
                            simon.yellowButton.response();
                        }else{
                            simon.blueButton.response();
                        }
                    }, 1000 * i);
                }(i));
            }
        },
        simonChecksMoves: function(){
            var counter = (simon.brain.userMoveSet.length) - 1
            if(simon.brain.userMoveSet[counter] == simon.brain.simonMoveSet[counter]){
                return true;
            }else{
                return false;
            }
        },
        simonChecksLength: function(){
            if(simon.brain.userMoveSet.length == simon.brain.simonMoveSet.length) {
                return true
            }else{
                return false
            }
        },
        simonIsMad: function() {
            simon.brain.userMoveSet = []
            simon.brain.simonMoveSet = []
            alert('Restart! You missed the pattern!')
        },
        clearUser: function() {
            simon.brain.userMoveSet = []
        }
    }
}
$(document).ready(function() {
    $('.green').on('click', function(event) {
        simon.greenButton.response()
        simon.brain.userMoveSet.push(simon.greenButton.id)
        if(simon.brain.simonChecksMoves() && simon.brain.simonChecksLength()){
            simon.brain.clearUser()
            setTimeout(function(){
                simon.brain.simonSays();
            }, 1100)
        }else if(simon.brain.simonChecksMoves() && !simon.brain.simonChecksLength()){
            console.log('keepgoing')
        }else{
            simon.brain.simonIsMad()
        }
    });
    $('.red').on('click', function(event) {
        simon.redButton.response()
        simon.brain.userMoveSet.push(simon.redButton.id)
        if(simon.brain.simonChecksMoves() && simon.brain.simonChecksLength()){
            simon.brain.clearUser()
            setTimeout(function(){
                simon.brain.simonSays();
            }, 1100)
        }else if(simon.brain.simonChecksMoves() && !simon.brain.simonChecksLength()){
            console.log('keepgoing')
        }else{
            simon.brain.simonIsMad()
        }
    });
    $('.yellow').on('click',function(event) {
        simon.yellowButton.response()
        simon.brain.userMoveSet.push(simon.yellowButton.id)
        if(simon.brain.simonChecksMoves() && simon.brain.simonChecksLength()){
            simon.brain.clearUser()
            setTimeout(function(){
                simon.brain.simonSays();
            }, 1100)
        }else if(simon.brain.simonChecksMoves() && !simon.brain.simonChecksLength()){
            console.log('keepgoing')
        }else{
            simon.brain.simonIsMad()
        }
    });
    $('.blue').on('click', function(event) {
        simon.blueButton.response()
        simon.brain.userMoveSet.push(simon.blueButton.id)
        if(simon.brain.simonChecksMoves() && simon.brain.simonChecksLength()){
            simon.brain.clearUser()
            setTimeout(function(){
                simon.brain.simonSays();
            }, 1100)
        }else if(simon.brain.simonChecksMoves() && !simon.brain.simonChecksLength()){
            console.log('keepgoing')
        }else{
            simon.brain.simonIsMad()
        }
    });
    $('.start').on('click', function(event) {
        event.preventDefault();
        simon.brain.simonSays();
    });
});

//logic still fucked a bit. also simonsays is being called again for some reason even after simonIsMad is called.




//keepgoing is triggered, but because true has not been evaluated simon is mad is called. we need to break it down so that we're returning mad simon on the counter, but allowing the user to keep playing if the lengths are not the correct size
