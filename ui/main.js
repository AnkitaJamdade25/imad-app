console.log('Loaded!');

var img = document.getElementById('mainimg');
img.onClick = function(){
    
    document.getElementById('maindiv').innerHTML = 'This content magically changed!';
    
};