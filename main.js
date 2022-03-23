function setup() {
  video=createCapture(VIDEO);
  video.size(500, 500);
  canvas=createCanvas(350,350);
  canvas.center();
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function draw() {
  background("#b6f2ef");
}
function modelLoaded() {
  console.log("PoseNet is Initalized");
}
function gotPoses(results) {
  if (results.length > 0 ) {
    console.log(results);
  }
}