let string = "";
let val = document.querySelectorAll('.buttons');
let other = document.querySelectorAll('.material-icons');
function back() {
    document.getElementById('inpv').value = string;
    string = string.substring(0, (string.length - 1));
    document.querySelector('input').value = string;
}
let percent = () => {

}

const icon = document.getElementById('BackSpace');
icon.value = 8842;
Array.from(val).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "backspace") {
            document.getElementById('inpv').value = string;
            string = string.substring(0, (string.length - 1));
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "%") {
            string = (string / 100);
            document.querySelector('input').value = string;
        }
        else {
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})