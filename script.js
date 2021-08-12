function back() {
    var num = document.getElementById("input").value;
    num=num.substr(0,num.length-1);
     document.getElementById('input').value=num;
    // var remove = num.value;
    // remove = remove.slice(0, -1);
    // num.value = remove;
}
