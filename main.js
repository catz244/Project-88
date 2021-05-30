var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

blockImage_width = 30;
blockImage_height = 40;

player_object = "";
blockImage_object = "";

function player_update() {
    fabric.Image.fromURL(
        "player.png",
        function (Img) {
            player_object = Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(130);
            player_object.set({
                top: player_y, left: player_x
            });
            canvas.add(player_object);
        }
    );
}

function new_image(get_image) {
    fabric.Image.fromURL(
        get_image,
        function (Img) {
            blockImage_object = Img;
            blockImage_object.scaleToWidth(blockImage_width);
            blockImage_object.scaleToHeight(blockImage_height);
            blockImage_object.set({
                top: player_y, left: player_x
            });
            canvas.add(blockImage_object);
        }
    );
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log("we reached");
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift key are pressed");
        blockImage_width = blockImage_width + 10;
        blockImage_height = blockImage_height + 10;
        document.getElementById("current_width").innerHTML = blockImage_width;
        document.getElementById("current_height").innerHTML = blockImage_height;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift key are pressed");
        blockImage_width = blockImage_width - 10;
        blockImage_height = blockImage_height - 10;
        document.getElementById("current_width").innerHTML = blockImage_width;
        document.getElementById("current_height").innerHTML = blockImage_height;
    }


    if (keyPressed == '70') { 
        new_image('hulk_face.png');
        console.log("f"); 
    }

    if (keyPressed == '66') { 
        new_image('ironman_body.png');
        console.log("b"); 
    }
    
    if (keyPressed == '76') { 
        new_image('spiderman_legs.png');
        console.log("l"); 
    }

    if (keyPressed == '82') { 
        new_image('thor_right_hand.png');
        console.log("r"); 
    }

    if (keyPressed == '72') { 
        new_image('captain_america_left_hand.png');
        console.log("h"); 
    }

    if (keyPressed == '38') { 
        up(); 
        console.log("up"); 
    }

    if (keyPressed == '40') { 
        down(); 
        console.log("down"); 
    }

    if (keyPressed == '37') { 
        left(); 
        console.log("left"); 
    }

    if (keyPressed == '39') { 
        right(); 
        console.log("right"); 
    }
}

function up(){
    if (player_y >=0){
       player_y = player_y - blockImage_height;
       console.log("blockImage_height = " + blockImage_height);
       console.log("When up arrow is pressed X = " + player_x + "Y = " + player_y);
       canvas.remove(player_object);
       player_update();
    }
}

function down(){
    if (player_y <=500){
       player_y = player_y + blockImage_height;
       console.log("blockImage_height = " + blockImage_height);
       console.log("When down arrow is pressed X = " + player_x + "Y = " + player_y);
       canvas.remove(player_object);
       player_update();
    }
}

function right(){
    if (player_x <=600){
       player_x = player_x + blockImage_width;
       console.log("blockImage_width = " + blockImage_width);
       console.log("When right arrow is pressed X = " + player_x + "Y = " + player_y);
       canvas.remove(player_object);
       player_update();
    }
}

function left(){
    if (player_x >=0){
       player_x = player_x - blockImage_width;
       console.log("blockImage_width = " + blockImage_width);
       console.log("When left arrow is pressed X = " + player_x + "Y = " + player_y);
       canvas.remove(player_object);
       player_update();
    }
}

