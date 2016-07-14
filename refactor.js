var simon = {
    Button: function(id,html,colorClass,color,colorOne) {
        var self = this;
        this.id = id,
        this.html = html,
        this.colorClass = colorClass,
        this.color = color,
        this.colorOne = colorOne,
        this.response = function(){
            $(this.html)[0].play();
            $(this.colorClass).css('background-color', this.color)
            setTimeout(function(){
                $(self.colorClass).css('background-color', self.colorOne)
            }, 200)
        }
    },
    brain: {
        "userMoveSet":[],
        "simonMoveSet":[],
        "simonSpeed":[400],
        simonSays: function(){
            simon.brain.simonMoveSet.push(Math.floor(Math.random() * 4))
            $(".round").html(function(){
                return "Round: " + simon.brain.simonMoveSet.length;
            })
            for(i=0;i<this.simonMoveSet.length;i++){
                (function(i){
                    setTimeout(function(){
                        buttons.forEach(function(button) {
                            if(button.id == simon.brain.simonMoveSet[i]){
                                button.response()
                            }
                        })
                    }, simon.brain.simonSpeed[0] * i);
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
        simonChecksMoveLength: function(){
            if(simon.brain.userMoveSet.length == simon.brain.simonMoveSet.length) {
                return true
            }else{
                return false
            }
        },
        simonIsMad: function() {
            clearInterval(timer)
            localStorage.setItem('score', simon.brain.simonMoveSet.length)
            localStorage.setItem('time', counter)
            $('#endSound')[0].play()
            setTimeout(function(){
                var name = prompt('What have you done?! Simon is SO MAD! You had ' + simon.brain.simonMoveSet.length + ' rounds scored. Enter your name for glory')
                localStorage.setItem('name', name)
                simon.brain.simonMoveSet = []
                var dataSet=['name','score','time']
                $('td').remove()
                dataSet.forEach(function(data){
                    $('#entries').append("<td>" + localStorage.getItem(data) + "</td>")
                })
            }, 2200)
        },
    }
}
var greenButton = new simon.Button(0,'#soundGreen','.greenButton','#1aff1a','#007000')
var redButton = new simon.Button (1,'#soundRed','.redButton','#ff1a1a','#b30000')
var yellowButton = new simon.Button(2,'#soundYellow','.yellowButton','#ffff1a','#b3b300')
var blueButton = new simon.Button(3,'#soundBlue','.blueButton','#3333ff','#000080')
buttons = [greenButton, redButton, yellowButton, blueButton]
$(document).ready(function() {
    $('.userName').html(localStorage.getItem('name'))
    $('.userScore').html(localStorage.getItem('score'))
    $('.userTime').html(localStorage.getItem('time'))
    buttons.forEach(function(button) {
        $(button.colorClass).on('click', function(event) {
            if(simon.brain.simonMoveSet.length != 0){
                button.response();
                simon.brain.userMoveSet.push(button.id)
                if(simon.brain.simonChecksMoves() && simon.brain.simonChecksMoveLength()){
                    simon.brain.userMoveSet = []
                    setTimeout(function(){
                        simon.brain.simonSays();
                    }, 1100)
                }else if(simon.brain.simonChecksMoves() && !simon.brain.simonChecksMoveLength()){
                }else{
                    simon.brain.simonIsMad()
                }
            }else{
                button.response()
            }
        });
    })
    $('.start').on('click', function(event) {
        simon.brain.userMoveSet = []
        simon.brain.simonMoveSet = []
        $(".round").html('Round: 0')
        $('#startUpSound')[0].play()
        buttons.forEach(function(button) {
            button.response()
        })
        setTimeout(function(){
            simon.brain.simonSays();
            counter= 1
            timer = setInterval(function(){
                 $('.time').html('Time: ' + counter++)
            },1000)
        }, 4800)
    })
    $('.insane').on('click', function(event) {
        simon.brain.userMoveSet = []
        simon.brain.simonMoveSet = []
        simon.brain.simonSpeed[0] = 180
    });
})
