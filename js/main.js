var monitor = document.querySelector('.valuee');

document.querySelectorAll('.num').forEach(function(td) {
    td.addEventListener('click', function(e){
        var x = e.target.innerText;
        
        if(x === "C" ){
            monitor.value = ""
        }
        else if(x === "=") {
            monitor.value = eval(monitor.value)
        }else {
            monitor.value += x;        
        }
    })
})