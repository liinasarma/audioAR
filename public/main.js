let mic;

function setup(){

    createCanvas(200,80);

    mic = new p5.AudioIn();
    mic.start();
}
function draw(){
    background(0);
    let vol = mic.getLevel();
    console.log(vol);

}