"use strict"
// JSON 1
fetch("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(response => response.json())
    .then(data => {
        let h1 = document.createElement("h1");
        h1.innerText = `Welcome to the website of ${data.squadName}!`;
        document.body.appendChild(h1);

        function addP(text) {
            let p = document.createElement("p");
            p.innerText = text;
            document.body.appendChild(p);
        }
        
        addP(`We were formed in ${data.formed} in ${data.homeTown} and we are currently 
            ${data.active ? "" : "not"} protecting the citizens. You can find us at ${data.secretBase}.`);
        addP("Here are our current members:");

        let membersUl = document.createElement("ul");
        membersUl.id = "members";
        document.body.appendChild(membersUl);

        function createLi(text) {
            const li = document.createElement("li");
            li.innerText = text;
            return li;
        }

        for (let member of data.members) {
            let memberLi = createLi(member.name);
            memberLi.id = `${member.name}`.replaceAll(" ", "");
            // using Id just as an example, simply could use membersUl.append...
            document.getElementById("members").appendChild(memberLi);

            let memberInfoUl = document.createElement("ul");
            memberLi.appendChild(memberInfoUl);
            memberInfoUl.appendChild(createLi(`Age: ${member.age}`));
            memberInfoUl.appendChild(createLi(`Name: ${member.secretIdentity}`));
            memberInfoUl.appendChild(createLi(`Powers: ${member.powers.join(", ")}`));
        }
    });
