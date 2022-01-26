function add(){
  document.getElementById("error").innerHTML=" "

    let name = document.getElementById("name").value; 
    
    if(name == 0){
        document.getElementById("error").innerHTML =  "Please enter some value!"        
    }else{
        let box = document.getElementById('box');
        let li = document.createElement("li");
        li.textContent = name;
        
        box.appendChild(li);
        
        let del = document.createElement('a');
        del.textContent = 'Delete'
        del.href = "javascript:void(0)"
        
        li.appendChild(del);
    }
    
    document.getElementById("name").value=""
    
}

  let btn = document.querySelector('ol');
btn.addEventListener('click',function(e){
    let box = document.getElementById('box');
    let li = e.target.parentNode;
    box.removeChild(li);
});
