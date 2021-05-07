function createRow(name, data) {
    var row = document.createElement("tr");
    let th = document.createElement("th");
    
    th.innerHTML = data["channel"][name];
    th.classList.add("titledata")
    row.appendChild(th);
    let td = document.createElement("td");
    
    td.innerHTML = data["feeds"][1][name];
    td.classList.add("numberdata")
    row.appendChild(td);
    document.querySelector(".medicalArray").appendChild(row);
}

window.addEventListener("DOMContentLoaded", (event) => {

    window.setInterval(function () {
        var tmp = document.getElementById("medicalArray");

        tmp.querySelectorAll('*').forEach(n => n.remove());
        var req = new Request("https://api.thingspeak.com/channels/1367624/feeds.json?results=2&fbclid=IwAR1SAKYhJYXDZCWCsHF7fRxEbwssXceaXibo1QHk8KPTH4x0sKG2cQvD1-w");
        fetch(req).then(function(response) {
            response.json().then(data => {
                for (let x = 1; x < 4 ; x++) {
                    var tmp = "field" + x;
                    createRow(tmp, data);
                }
            })
        });
    }, 5000);
});

