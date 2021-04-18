function change(){
    border();
    background();
}

function border(){
    let dummy = document.getElementById("dummy");
    let r = document.getElementById("borderRed").value;
    let g = document.getElementById("borderGreen").value;
    let b = document.getElementById("borderBlue").value;
    let hash = "#";
    let px = "px";
    let width = document.getElementById("borderWidth").value;
    color = hash.concat(r,g,b);
    border = width.concat(px, " solid ", color);
    dummy.style.border = border;
}

function background(){
    let dummy = document.getElementById("dummy");
    let r = document.getElementById("bgRed").value;
    let g = document.getElementById("bgGreen").value;
    let b = document.getElementById("bgBlue").value;
    let hash = "#";
    let px = "px";
    color = hash.concat(r,g,b);
    dummy.style.backgroundColor = color;
}