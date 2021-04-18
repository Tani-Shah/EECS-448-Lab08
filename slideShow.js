function next(){
    let image = document.getElementById("image");
    if(image.src.substr(image.src.lastIndexOf('/')) == "/1.jpg"){
        image.src = "slideShow/2.jpg";
    }

    else if(image.src.substr(image.src.lastIndexOf('/')) == "/2.jpg"){
        image.src = "slideShow/3.jpg";
    }

    else if(image.src.substr(image.src.lastIndexOf('/')) == "/3.jpg"){
        image.src = "slideShow/4.jpg";
    }

    else if(image.src.substr(image.src.lastIndexOf('/')) == "/4.jpg"){
        image.src = "slideShow/5.jpg";
    }

    else if(image.src.substr(image.src.lastIndexOf('/')) == "/5.jpg"){
        image.src = "slideShow/6.jpg";
    }

    else if(image.src.substr(image.src.lastIndexOf('/')) == "/6.jpg"){
        image.src = "slideShow/1.jpg";
    }
    
}

function prev(){
    let image = document.getElementById("image");
    if(image.src.substr(image.src.lastIndexOf('/')) == "/1.jpg"){
        image.src = "slideShow/6.jpg";
    }

    else if(image.src.substr(image.src.lastIndexOf('/')) == "/2.jpg"){
        image.src = "slideShow/1.jpg";
    }

    else if(image.src.substr(image.src.lastIndexOf('/')) == "/3.jpg"){
        image.src = "slideShow/2.jpg";
    }

    else if(image.src.substr(image.src.lastIndexOf('/')) == "/4.jpg"){
        image.src = "slideShow/3.jpg";
    }

    else if(image.src.substr(image.src.lastIndexOf('/')) == "/5.jpg"){
        image.src = "slideShow/4.jpg";
    }

    else if(image.src.substr(image.src.lastIndexOf('/')) == "/6.jpg"){
        image.src = "slideShow/5.jpg";
    }
    
}