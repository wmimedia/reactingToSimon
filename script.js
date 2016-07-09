var simon = {
    "greenButton": {
        "id": 1,
        response: function(){
            $('.green').css('background-color', '#1aff1a')
            setTimeout(function(){
                $('.green').css('background-color', '#00cc00')
            }, 500)
        }
    },
    "redButton": {
        "id": 2,
        response: function(){
            $('.red').css('background-color', '#ff1a1a')
            setTimeout(function(){
                $('.red').css('background-color', '#cc0000')
            }, 500)
        }
    },
    "yellowButton": {
        "id": 3,
        response: function(){
            $('.yellow').css('background-color', '#ffff1a')
            setTimeout(function(){
                $('.yellow').css('background-color', '#cccc00')
            }, 500)
        }
    },
    "blueButton": {
        "id": 4,
        response: function(){
            $('.blue').css('background-color', '#1a1aff')
            setTimeout(function(){
                $('.blue').css('background-color', '#000099')
            }, 500)
        }
    },
    "brain": {
        "userMoveSet":[],
        "simonMoveSet":[],
        simonSays: function(){
            var theMove = Math.floor(Math.random() * (5 - 1)) + 1;
            simon.brain.simonMoveSet.push(theMove)
            for(i=0;i<this.simonMoveSet.length;i++){
                switch(this.simonMoveSet[i]){
                    case 1:
                        simon.greenButton.response();
                        break;
                    case 2:
                        simon.redbutton.response();
                        break;
                    case 3:
                        simon.yellowButton.response();
                        break;
                    case 4:
                        simon.blueButton.response();
                        break;
                }
            }
        }
    }
}
$(document).ready(function() {
    $('.green').on('click', function(event) {
        simon.greenButton.response()
    });
    $('.red').on('click', function(event) {
        simon.redButton.response()
    });
    $('.yellow').on('click',function(event) {
        simon.yellowButton.response()
    });
    $('.blue').on('click', function(event) {
        simon.blueButton.response();
    });

});
