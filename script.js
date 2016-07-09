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
        "simonChecks": {
            counter:[],
            verify: function(){
                if(simon.brain.userMoveSet[counter] !== simon.brain.simonMoveSet[counter]){
                    return false;
                }else{
                    return true;
                }
            }
        },
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
        //if(runsimonchecks verify else simonIsMad)
        simon.brain.clearUser()
        setTimeout(function(){
            simon.brain.simonSays();
        }, 1100)
    });
    $('.red').on('click', function(event) {
        simon.redButton.response()
        simon.brain.userMoveSet.push(simon.redButton.id)
        //if(runsimonchecks verify else simonIsMad)
        simon.brain.clearUser()
        setTimeout(function(){
            simon.brain.simonSays();
        }, 1100)
    });
    $('.yellow').on('click',function(event) {
        simon.yellowButton.response()
        simon.brain.userMoveSet.push(simon.yellowButton.id)
        //if(runsimonchecks verify else simonIsMad)
        simon.brain.clearUser()
        setTimeout(function(){
            simon.brain.simonSays();
        }, 1100)
    });
    $('.blue').on('click', function(event) {
        simon.blueButton.response()
        simon.brain.userMoveSet.push(simon.blueButton.id)
        //if(runsimonchecks verify else simonIsMad)
        simon.brain.clearUser()
        setTimeout(function(){
            simon.brain.simonSays();
        }, 1100)
    });
    $('.start').on('click', function(event) {
        event.preventDefault();
        simon.brain.simonSays();
    });
});
//Verified simon knows works need to see why it's not being called
//not actually calling simonIsMad within the if statment so there is no stop
//be creative and figure out where to call it
//might have to include elseif logic within dom ready
//pretty sure green button has the right logic now
//Logic is still wrong but closer will have a go at it tomorrow morning.


//Another bug comes when you're inaccurate. Even if you miss a key, if the user array length doesnt match simon length  yet you get a pass and consolelog tells you to keep going
//simon checks is also bugged because it only returns a boolean for the last itteration of the for loop

//to do tomorrow - resolve the two bugs listed above and fix the logic for checking against the simon moveset =) You got this! Good First Days Work!

/*******--------> THIS MOTHER FUCKING ONE possible logic solution - make a counter var that increments whenever (rgby) are clicked. take that counter variable(first would be 0)  and use it as the position to check userMovesSet and simonMoveSet. This way we can run a check for equality on every click!!*/
