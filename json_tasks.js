"use strict"
fetch("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(response => response.json())
    .then(data => {
        let h1 = document.createElement("h1");
        h1.innerText = `Welcome to the website of ${data.squadName}!`;
        document.body.appendChild(h1);

        let p = document.createElement("p");
        p.innerText = `We were formed in ${data.formed} in ${data.homeTown} and we are currently
                        ${data.active ? "" : "not"} protecting the citizens. You can find us at ${data.secretBase}.`;
        document.body.appendChild(p);

        let p2 = document.createElement("p");
        p2.innerText = `Here are our current members:`;
        document.body.appendChild(p2);

        let ul = document.createElement("ul");
        ul.id = "members";
        document.body.appendChild(ul);
        for (let member of data.members) {
            let li = document.createElement("li");
            li.innerText = member.name;
            document.getElementById("members").appendChild(li);

            for (let property in member) {
                console.log(member[property]);
            }
            
        }
    });
