var simon = {
    "greenButton": {
        "id": 0,
        response: function(){
            $('.green').css('background-color', '#1aff1a')
            setTimeout(function(){
                $('.green').css('background-color', '#00cc00')
            }, 400)
        }
    },
    "redButton": {
        "id": 1,
        response: function(){
            $('.red').css('background-color', '#ff1a1a')
            setTimeout(function(){
                $('.red').css('background-color', '#cc0000')
            }, 400)
        }
    },
    "yellowButton": {
        "id": 2,
        response: function(){
            $('.yellow').css('background-color', '#ffff1a')
            setTimeout(function(){
                $('.yellow').css('background-color', '#cccc00')
            }, 400)
        }
    },
    "blueButton": {
        "id": 3,
        response: function(){
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
                    }, 1500 * i);
                }(i));
            }
        },
        simonKnows: function(userMoveSet,simonMoveSet){
            for(i=0;i<simon.brain.userMoveSet.length;i++){
                if(simon.brain.userMoveSet[i] !== simon.brain.simonMoveSet[i]){
                    return false;
                }
                return true;
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
        if(simon.brain.simonKnows()){
            simon.brain.clearUser()
            setTimeout(function(){
                simon.brain.simonSays()
            }, 2000)
        }else{
            simon.brain.simonIsMad()
        }
    });
    $('.red').on('click', function(event) {
        simon.redButton.response()
        simon.brain.userMoveSet.push(simon.redButton.id)
        if(simon.brain.simonKnows()){
            simon.brain.clearUser()
            setTimeout(function(){
                simon.brain.simonSays()
            }, 2000)
        }else{
            simon.brain.simonIsMad()
        }
    });
    $('.yellow').on('click',function(event) {
        simon.yellowButton.response()
        simon.brain.userMoveSet.push(simon.yellowButton.id)
        if(simon.brain.simonKnows()){
            simon.brain.clearUser()
            setTimeout(function(){
                simon.brain.simonSays()
            }, 2000)
        }else{
            simon.brain.simonIsMad()
        }
    });
    $('.blue').on('click', function(event) {
        simon.blueButton.response()
        simon.brain.userMoveSet.push(simon.blueButton.id)
        if(simon.brain.simonKnows()){
            simon.brain.clearUser()
            setTimeout(function(){
                simon.brain.simonSays()
            }, 2000)
        }else{
            simon.brain.simonIsMad()
        }
    });
    $('.start').on('click', function(event) {
        event.preventDefault();
        simon.brain.simonSays();
    });
});


//First Issue, for-loop is synchronous and setTimout is asynchronous. Sooooo our pattern is being executed at the exact same time(lights same time no pause).
//Solved issue http://stackoverflow.com/questions/11764714/applying-delay-between-iterations-of-javascript-for-loop - Review Saturday Morning -

//simonSays function works as expected. I click start to call function and it runs once. I click start again and it plays the original move followed by a second move. simonSays() is functionally correct

//timeouts are working - user input does not clear at the right spot
