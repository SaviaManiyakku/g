noseX=0;
noseY=0;
diffrence=0;
leftWristX=0;
rightWristX=0;

function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(559, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is loaded');
}

function gotPoses(results){
if(results.leangth > 0)
{
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX =" + noseX + "noseY =" + noseY);

    leftWristX = result[0].pose.leftWrist.x;
    rightWristX = result[0].pose.rightWrist.x;
    diffrence = floor(leftWristX - rightWristX);
    console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "diffrence =" +diffrence);
}
}

function draw(){
 background('#9677a6')  ;
 
 fill("#877991");
 stroke("48414d");
 square(noseX, noseY, diffrence);
 document.getElementById("square_side").innerHTML = "Width and Height of a Sqaure will be = " + diffrence+ "px";
}