nosex=0;
nosey=0;
diffrence=0;
rightwristx=0;
leftwristx=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(450,450);
    canvas.position(560,150);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#03fcb1');
    document.getElementById("square_side").innerHTML="The width and height of the square will be:"+diffrence+"px";
    fill('#07eef2');
    stroke('#def207');
    square(nosex,nosey,diffrence);
}
function modelLoaded(){
    console.log('pose net is initialized');
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex= "+nosex+"nosey= "+nosey);

    leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    diffrence=floor(leftwristx-rightwristx);
    console.log("leftwristx= "+leftwristx+"rightwristx= "+rightwristx+"diffrence= "+diffrence);
}
}