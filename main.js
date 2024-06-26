function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier =  m15.soundClassifier('', modelReady);
}

function modelReady() {
classifier.classify(gotResults);
}

if (error) {
    console.error(error);
    }
     else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g= Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear' +  results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy -' + 
    (results[0].confidence * 100).toFixed(2)+"%"; 
    
    document.getElementById("result_label").style.color = "rgb("
    +random_number_r+", "+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb(" +random_number_r+", "+random_number_g+","+random_number_r+")";
    
    img= document.getElementById('Ear Hear'); 
    
    if (results[0].label == "Dog"){
        img.src= 'dog-barking.gif'
    }

    if (results[0].label == "Cat"){
        img.src= 'tenor (1).gif'
    }
    }