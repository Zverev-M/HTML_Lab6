let contacts = document.getElementById("contscts");
let contacts_button = document.getElementById("button");

contacts_button.onclick = function() {
    contacts.style.display = "relative";
}

window.onclick = function(event) {
    if (event.target == contacts) {
        contacts.style.display = "none";
    }
}