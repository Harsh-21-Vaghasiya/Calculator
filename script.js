function back() {
    var num = document.getElementById("input").value;
    num=num.substr(0,num.length-1);
     document.getElementById('input').value=num;
    // var remove = num.value;
    // remove = remove.slice(0, -1);
    // num.value = remove;
}
function clar(){
    var num=document.getElementById('input').value;
    var len=num.length;
    num=num.substr(0,num.length-len);
    document.getElementById('input').value=num;
return false;
}