
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function fun() {
    let inputPswd = document.getElementById("validate")
                            .value;
    let correctPswd = "1763";
    if (inputPswd === correctPswd) {
        document.getElementById("container")
            .style.display = "block";
        document.getElementById("pswd")
            .style.display = "none";
    } else {
        alert("Incorrect password!");
    }
}
