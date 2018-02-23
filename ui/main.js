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

//List should changed when name is input

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
    //Create a request
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                
                //Take some action
                //Capture the names of lists and render on page
                 var names = request.responseText;
                 names = JSON.parse(names);
                 var list = '';
    
                 for(var i=0 ; i<names.length ; i++){
                 list += '<li>' + names[i] + '</li>';
         }
    
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
        
    };
    
    //Make a request to the server
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://ankitajamdade25.imad.hasura-app.io/submit-name?name='+ name,true);
    request.send(null);
    

};


