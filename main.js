function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-_9RRm-yjq/model.json',modelready);
}
function modelready(){
    classifier.classify(gotresults);
}
function gotresults(error,results){
    if (error) {
        console.error(error);
    }else{
        console.log(results);
        red = Math.floor(Math.random()*255)+1;
        blue = Math.floor(Math.random()*255)+1;
        green = Math.floor(Math.random()*255)+1;
        document.getElementById("eti_ans").innerHTML = "escucho: " + results[0].label;
        document.getElementById("eti_precision").innerHTML = "precision: " + (results[0].confidence*100).toFixed(1) + "%";
        document.getElementById("eti_ans").style.color ="rgb("+ red + ","+ green +"," + blue +")";
        document.getElementById("eti_precision").style.color = "rgb("+ red + ","+ green +"," + blue +")";
        a1 = document.getElementById("verde");
        a2 = document.getElementById("azul");
        a3 = document.getElementById("rojo");
        a4 = document.getElementById("chaparro");
        if (results[0].label == "mesa") {
            a1.src = 'aliens-01.gif';
            a2.src = 'aliens-02.png';
            a3.src = 'aliens-03.png';
            a4.src = 'aliens-04.png';
        }else if(results[0].label =="papel bone"){
            a1.src = 'alien-01.png';
            a2.src = 'aliens-02.gif';
            a3.src = 'aliens-03.png';
            a4.src = 'aliens-04.png';
        }else if(results[0].label == "aplausos"){
            a1.src = 'alien-01.png';
            a2.src = 'aliens-02.png';
            a3.src = 'aliens-03.gif';
            a4.src = 'aliens-04.png';
        }else{
            a1.src = 'alien-01.png';
            a2.src = 'aliens-02.png';
            a3.src = 'aliens-03.png';
            a4.src = 'aliens-04.gif';
        }
    }
}