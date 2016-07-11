var simon = {
    Button: function(id,audio,colorClass,color,colorOne) {
        var self = this;
        this.id = id,
        this.audo = audio,
        this.colorClass = colorClass,
        this.color = color,
        this.colorOne = colorOne,
        this.response = function(){
            $(this.audio)[0].play();
            $(this.colorClass).css('background-color', this.color)
            setTimeout(function(){
                $(self.colorClass).css('background-color', self.colorOne)
            }, 200)
        }
    },
    "brain": {
        "userMoveSet":[],
        "simonMoveSet":[],
        simonSays: function(){
            var theMove = Math.floor(Math.random() * (4 - 1)) + 1;
            simon.brain.simonMoveSet.push(theMove)
            $("h2").html(function(){
                roundCounter = simon.brain.simonMoveSet.length
                return "Round: " + roundCounter;
            })
            for(i=0;i<this.simonMoveSet.length;i++){
                (function(i){
                    setTimeout(function(){
                        if(simon.brain.simonMoveSet[i]==0){
                            greenButton.response();
                        }else if (simon.brain.simonMoveSet[i]==1){
                            redButton.response();
                        }else if (simon.brain.simonMoveSet[i]==2) {
                            yellowButton.response();
                        }else{
                            blueButton.response();
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
            $('#endSound')[0].play()
            setTimeout(function(){
                alert('What have you done?! Simon is SO MAD! You got ' + roundCounter + ' rounds Click Start to redeem yourself')
            }, 3200)
        }
    }
}
var greenButton = new simon.Button(0,'#soundGreen','.greenButton','#1aff1a','#00cc00')
var redButton = new simon.Button (1,'#soundRed','.redButton','#ff1a1a','#cc0000')
var yellowButton = new simon.Button(2,'#soundYellow','.yellowButton','#ffff1a','#cccc00')
var blueButton = new simon.Button(3,'#soundBlue','.blueButton','#1a1aff','#000099')
var buttons = [greenButton, redButton, yellowButton, blueButton]
$(document).ready(function() {
    buttons.forEach(function(button) {
        $(button.colorClass).on('click', function(event) {
            if(simon.brain.simonMoveSet.length != 0){
                button.response();
                simon.brain.userMoveSet.push(button.id)
                if(simon.brain.simonChecksMoves() && simon.brain.simonChecksLength()){
                    simon.brain.userMoveSet = []
                    setTimeout(function(){
                        simon.brain.simonSays();
                    }, 1100)
                }else if(simon.brain.simonChecksMoves() && !simon.brain.simonChecksLength()){
                }else{
                    simon.brain.simonIsMad()
                }
            }else{
                button.response()
            }
        });
    })
    $('.start').on('click', function(event) {
        event.preventDefault();
        $("h2").html('Round: 0')
        $('#startUpSound')[0].play()
        setTimeout(function(){
            simon.brain.simonSays();
        }, 5500)
    })
})
