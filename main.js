function soundClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/t5-K6EUUv/model.json",modelLoaded);
    }
    function modelLoaded(){
    classifier.classify(gotResults);
    }
    function gotResults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        random_num_R = Math.floor(Math.random()*255)+1 
        random_num_G = Math.floor(Math.random()*255)+1
        random_num_B = Math.floor(Math.random()*255)+1
        document.getElementById("result_label").innerHTML = "I Can Hear-" + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy" + (results[0].confidence*100).toFixed(2) + "%"; 
        document.getElementById("result_label").style.color = "rgb(" + random_num_R +random_num_G + random_num_B + ")";
        document.getElementById("result_label").style.color = "rgb(" + random_num_R +random_num_G + random_num_B + ")";
        img1 = document.getElementById("img")
        if(results[0].label == "Meowing"){
          img1.src = "Cat.png";   
        }
        else if(results[0].label == "Barking"){
          img1.src = "dog.jpg";    
        }
        else if(results[0].label == "Roaring"){
          img1.src = "lion.png";  
        }  
        else if(results_[0].label == "Slithering"){
          img1.src = "snake.png";   
        }
        else {
          img1.src = "Ear.png";   
        }
    }
    }