nose_x=0;
nose_y=0;
function preload(){
img=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
    canvas=createCanvas(500,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(500,500)
    video.hide()
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",gotposes)
}

function draw(){
    image(video,0,0,500,500)
    image(img,nose_x-20,nose_y-10,50,50)
    
}

function modelloaded(){
    console.log("THIS MODEL HAS BEN LOADED") 
}

function gotposes(results){
    if (results.length>0) {
        console.log(results)
        nose_x=results[0].pose.nose.x
        nose_y=results[0].pose.nose.y
    }

    
}
