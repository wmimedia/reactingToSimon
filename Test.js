var simon = {
    "greenButton": {
        "id": 0,
        response: function(){
            $('#soundGreen')[0].play();
            $('.green').css('background-color', '#1aff1a')
            setTimeout(function(){
                $('.green').css('background-color', '#00cc00')
            }, 200)
        }
    },
    "redButton": {
        "id": 1,
        response: function(){
            $('#soundRed')[0].play();
            $('.red').css('background-color', '#ff1a1a')
            setTimeout(function(){
                $('.red').css('background-color', '#cc0000')
            }, 200)
        }
    },
    "yellowButton": {
        "id": 2,
        response: function(){
            $('#soundYellow')[0].play();
            $('.yellow').css('background-color', '#ffff1a')
            setTimeout(function(){
                $('.yellow').css('background-color', '#cccc00')
            }, 200)
        }
    },
    "blueButton": {
        "id": 3,
        response: function(){
            $('#soundBlue')[0].play();
            $('.blue').css('background-color', '#1a1aff')
            setTimeout(function(){
                $('.blue').css('background-color', '#000099')
            }, 200)
        }
    },
    "brain": {
        "userMoveSet":[],
        "simonMoveSet":[],
        simonWillFlash: function(){
            $('.green').css('background-color', '#1aff1a')
            setTimeout(function(){
                $('.green').css('background-color', '#00cc00')
            }, 200)
            $('.red').css('background-color', '#ff1a1a')
            setTimeout(function(){
                $('.red').css('background-color', '#cc0000')
            }, 200)
            $('.yellow').css('background-color', '#ffff1a')
            setTimeout(function(){
                $('.yellow').css('background-color', '#cccc00')
            }, 200)
            $('.blue').css('background-color', '#1a1aff')
            setTimeout(function(){
                $('.blue').css('background-color', '#000099')
            }, 200)
        },
        simonIsPretty: function(){
            simon.brain.simonWillFlash()
            setTimeout(function(){
                simon.brain.simonWillFlash()
            },1000)
            setTimeout(function(){
                simon.brain.simonWillFlash()
            },2000)
            setTimeout(function(){
                simon.brain.simonWillFlash()
            },3000)
            setTimeout(function(){
                simon.brain.simonWillFlash()
            },4000)
        },
        simonSays: function(){
            var theMove = Math.floor(Math.random() * (4 - 1)) + 1;
            simon.brain.simonMoveSet.push(theMove)
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
                    }, 400 * i);
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
            simon.brain.simonIsPretty()
            $('#endSound')[0].play()
            setTimeout(function(){
                alert('What have you done?! Simon is SO MAD! Click Start to redeem yourself')
            }, 3000)
        },
        clearUser: function() {
            simon.brain.userMoveSet = []
        }
    }
}
$(document).ready(function() {
    $('.green').on('click', function(event) {
        if (simon.brain.simonMoveSet.length != 0){
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
        }else{
            simon.greenButton.response()
        }
    });
    $('.red').on('click', function(event) {
        if(simon.brain.simonMoveSet.length != 0){
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
        }else{
            simon.redButton.response()
        }
    });
    $('.yellow').on('click',function(event) {
        if(simon.brain.simonMoveSet.length != 0){
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
        }else{
            simon.yellowButton.response()
        }
    });
    $('.blue').on('click', function(event) {
        if(simon.brain.simonMoveSet.length != 0){
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
        }else{
            simon.blueButton.response()
        }
    });
    $('.start').on('click', function(event) {
        event.preventDefault();
        $('#startUpSound')[0].play()
        simon.brain.simonIsPretty()
        setTimeout(function(){
            simon.brain.simonSays();
        }, 5500)
    });
});
