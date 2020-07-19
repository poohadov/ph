// var map1;
// var map2;
// var map3;
// var map4;
// var map5;
// var map6;
// var map7;
// var map8;

var root;
//var lib;

function getExportRoot(Root){
    root = Root;
    fixNames(root);
    for(var cnt = 1; cnt<=8; cnt++){
        eval('root.allMap_mc.map' + cnt + '_btn.addEventListener("mousedown", showBoard)');
    }

}

function fixNames(obj){
    for(key in obj){
        if(key.slice(0,3) == "btn"){
            obj[key].name = key;
        }
        if(obj[key] instanceof createjs.MovieClip && key!= "parent"){
            obj[key].name = key;
            fixNames(obj[key]);
        }
    }
}

function showBoard(event){
    eval('root.allMap_mc.gotoAndStop("'+ event.currentTarget.name.charAt(3) + '")');
    eval('root.allMap_mc.exit' + event.currentTarget.name.charAt(3) + '_btn.addEventListener("click", backToTheMap)');
}

 function backToTheMap(event){
    root.allMap_mc.gotoAndStop("normal");
 }
