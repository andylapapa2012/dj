song="";
leftWristX=0;
leftWristY=0;
rightWistX=0;
rigthWistY=0;
scoreRigthWrist=0;
scoreLeftWrist=0;

function preload()
{
    song=loadSound("music.mp3");
}
function setup()
{
    canvas= createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();


    poseNet_=mL5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet se ha inicializando');
}

function gotPoses(result)
{
    if(results.length>0)
    { 
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWistX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;



    }
}
function draw()
{
image(video,0,0,600,500);
Fill("#FF0000");
stroke("#FF0000");
if(scoreRigthWrist>0.2)
{
    
}
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}