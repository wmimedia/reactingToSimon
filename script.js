var simon = {
    "greenButton": {
        "id": 1,
        response: function(){
            
        }
    },
    "redbutton": {
        "id": 2,
        response: function(){
            console.log('iworkred')
        }
    },
    "yellowButton": {
        "id": 3,
        response: function(){
            console.log('iworkyellow')
        }
    },
    "blueButton": {
        "id": 4,
        response: function(){
            console.log('iworkblue')
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

        },

    }
}





$(document).ready(function() {
    console.log('iwork')

});
