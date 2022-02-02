Webcam.set({
height : 280,
width :  350,
image_format: "png",
png_quality: 100 
});

Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = "<img id='captured_img' src='"+data_uri+"'>"    
})    
}

console.log("ml5", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/px1zwLsaS/model.json ",modelLoder );

function modelLoder(){
console.log("Model Loaded")
}

function check(){
img = document.getElementById("captured_img");
classifier.classify(img , gotResult);    
}


function gotResult(error, result){
if (error){
console.error(error)
} else {
console.log(result)
document.getElementById("result_span_name").innerHTML = result[0].label;
document.getElementById("result_span_accuracy").innerHTML = result[0].confidence.toFixed(2);
 
}
}    

