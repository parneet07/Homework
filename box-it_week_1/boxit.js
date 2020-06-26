let input = process.argv[2]
let string = "─"

function drawborder(){
    let border = string.repeat(input.length)
    return border;
}
function topline(){0
    console.log("┌"+drawborder()+"┐");
    return drawbars()   
}
function middleline(){
    console.log("├"+topline()+"┤");
    return"|"+input+"|"
}
function bottomline(){
    console.log( "└"+middleline()+"┘");
}
function drawbars(){
    return"|"+input+"|"
}
console.log(bottomline());

