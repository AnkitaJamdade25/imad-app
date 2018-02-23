console.log('Loaded!');

var btn = document.getElementById('button');
btn.onclick = function(){
    //alert('clicked');
    
    //Create a request
    var request = new XMLHttpRequest();
    
    
    request.onreadystatechange = function(){
        
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                
                //Take some action
                var counter = request.responseText;
                var changeText = document.getElementById('count');
                changeText.innerHTML = counter.toString();
            }
        }
        
    };
    
    //Make a request
    request.open('GET','http://ankitajamdade25.imad.hasura-app.io/counter',true);
    request.send(null);
    
};