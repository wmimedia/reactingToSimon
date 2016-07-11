var simon = {
    'colorMapping' = {
        'greenButton': [0,'#soundGreen','.green','#1aff1a','#00cc00','200'],
        'redButton': [1,'#soundRed','.red','#ff1a1a','#cc0000','200'],
        'yellowButton':[2,'#soundYellow','.yellow','#ffff1a','#cccc00','200'],
        'blueButton': [3,'#soundBlue','.blue','#1a1aff','#000099','200']
    }
    //create response template mapped to the properties above
    createResponse = function() {
        "someButton": {
            "id": '0',
            response: function(){
                $('1')[0].play();
                $('2').css('background-color', '3')
                setTimeout(function(){
                    $('.blue').css('background-color', '4')
                }, '5')
            }
        },
    },
    "brain": {
        "userMoveSet":[],
        "simonMoveSet":[],
        //can call mapping properties 2,3,4,5 on this to condense
        simonWillFlash: function(){
            $('2').css('background-color', '3')
            setTimeout(function(){
                $('2').css('background-color', '4')
            }, '5')
        },
        //this can be reduced in a creative way figure out how to call a function at an interval
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
            $("h2").html(function(){
                var roundCounter = simon.brain.simonMoveSet.length
                return "Round: " + roundCounter;
            })
            for(i=0;i<this.simonMoveSet.length;i++){
                (function(i){
                    setTimeout(function(){
                        if(simon.brain.simonMoveSet[i]==0){
//have to figureout how to call these after new buttons created
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
            }, 4200)
        },
        clearUser: function() {
            simon.brain.userMoveSet = []
        },
        createButton: function(class){
            $(class).on('click', function(event) {
                if (simon.brain.simonMoveSet.length != 0){
                    simon + class+ Button.response()
                    simon.brain.userMoveSet.push(simon.greenButton.id)
                    if(simon.brain.simonChecksMoves() && simon.brain.simonChecksLength()){
                        simon.brain.clearUser()
                        setTimeout(function(){
                            simon.brain.simonSays();
                        }, 1100)
                    }else if(simon.brain.simonChecksMoves() && !simon.brain.simonChecksLength()){

                    }else{
                        simon.brain.simonIsMad()
                    }
                }else{
                    simon.greenButton.response()
                }
            });

        }
    }
}
$(document).ready(function() {
    majorButtons['.green','.red','.yellow','.blue']
    $('.start').on('click', function(event) {
        event.preventDefault();
        $('#startUpSound')[0].play()
        simon.brain.simonIsPretty()
        setTimeout(function(){
            simon.brain.simonSays();
        }, 5500)
    });
});
