var change_id = true;
function darktheam() {
    const change1 = document.body.querySelector(".container");
    const change2 = document.body.querySelector("main");
    if (change_id == true) {
        change_id = false;
        change1.style.backgroundColor = "black";
        change2.style.backgroundColor = "white";
        document.getElementById('key1').style.color = "white";
        document.getElementById('key2').style.color = "white";
        document.getElementById('key3').style.color = "white";
        document.getElementById('key4').style.color = "white";
        document.getElementById('key5').style.color = "white";
        document.getElementById('key6').style.color = "white";
        document.getElementById('key7').style.color = "white";
        document.getElementById('key8').style.color = "white";
        document.getElementById('key9').style.color = "white";
        document.getElementById('key0').style.color = "white";
        document.getElementById('keydot').style.color = "white";
        document.getElementById('keylg').style.color = "white";
        document.querySelector('input').style.color = "white";
        document.querySelector('input').style.backgroundColor = "black";
    }
    else if (change_id == false) {
        change_id = true;
        change1.style.backgroundColor = "white";
        change2.style.backgroundColor = "black";
        document.getElementById('key1').style.color = "black";
        document.getElementById('key2').style.color = "black";
        document.getElementById('key3').style.color = "black";
        document.getElementById('key4').style.color = "black";
        document.getElementById('key5').style.color = "black";
        document.getElementById('key6').style.color = "black";
        document.getElementById('key7').style.color = "black";
        document.getElementById('key8').style.color = "black";
        document.getElementById('key9').style.color = "black";
        document.getElementById('key0').style.color = "black";
        document.getElementById('keydot').style.color = "black";
        document.getElementById('keylg').style.color = "black";
        document.querySelector('input').style.color = "black";
        document.querySelector('input').style.backgroundColor = "white";
    }
}