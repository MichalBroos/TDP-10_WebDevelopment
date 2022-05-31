"use strict"
fetch("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(response => response.json())
    .then(data => {
        let h1 = document.createElement("h1");
        h1.innerText = `Welcome to the website of ${data.squadName}!`;
        document.body.appendChild(h1);

        let p = document.createElement("p");
        p.innerText = `We were formed in ${data.formed} in ${data.homeTown} and we are currently
                        ${data.active ? "" : "not"} protecting the citizens.`;
        document.body.appendChild(p);
    });