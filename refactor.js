var simon = {
    'responseMapping': {
        'buttons': [[0,'#soundGreen','.green','#1aff1a','#00cc00','200'],[1,'#soundRed','.red','#ff1a1a','#cc0000','200'],[2,'#soundYellow','.yellow','#ffff1a','#cccc00','200'],[3,'#soundBlue','.blue','#1a1aff','#000099','200']],
    },    
    createButton: function(id,html,colorClass,color,color1,timer){
        this.id = id,
        this.response = function(){
            $(html)[0].play();
            $(colorClass).css('background-color', color)
            setTimeout(function(){
                $('.green').css('background-color', color1)
            }, timer)
        }
    }
}
