

var JaneDoe = document.querySelector("#changename");

function editProfile() {
    JaneDoe.innerText = "Jim Bo";
}


var requestCount = document.querySelector("#request_count");
var connectionCount = document.querySelector("#connection_count");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestCount.innerText--;
    connectionCount.innerText++;
}

function decline(id) {
    var element = document.querySelector(id);
    element.remove();
    requestCount.innerText--;
}


function viewmore(element) {
    element.innerText = 'This was just for practice. Wanted to try and remove the blue-underlined text after "View More" was clicked.'
}