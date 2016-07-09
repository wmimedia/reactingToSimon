$(document).ready(function() {
    console.log('iwork')

});


//simon object
    //greenButton
        //method//changecolor/playsound
        //property//UniqueID:0
    //redButton
        //method//changecolor/playsound
        //property//UniqueID:1
    //yellowButton
        //method//changecolor/playsound
        //property//UniqueID:2
    //blueButton
        //method//changecolor/playsound
        //property//UniqueID:3
    //brain
        //property//userMoveArray
        //property//simonMoveArray
        //method//simonSays()
                //call rng (0,1,2,3),
                //push rng to simonarray
                //have loop itterate over simon array and call the function associate with array value (can set interval so that it executes at certain rate)
    //roundCounter is equal to simonarray.length

//docReady
    //onClick(gryb)
        //callUniqeButtonObjectFuntion
        //push UniqueID to PlayerArray
        //if player array = simonarray(maybe sum the numbers?)
            //callSimonSays
        //else end the game
    //onClickStart
        //callSimonSays
