"use strict"
// JSON 1 (no error checking)
let task1 = () => {
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
}
// task1();

// JSON 2
let task2 = () => {
fetch("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json") // array of objects
    .then(response => response.json())
    .then(data => {
        let h1 = document.createElement("h1");
        h1.innerText = "King search";
        document.body.appendChild(h1);
        
        let searchBox = document.createElement("input");
        searchBox.type = "text";
        document.body.appendChild(searchBox);
        // add event listener for Enter
        
        let searchButton = document.createElement("button");
        searchButton.innerText = "Search";
        document.body.appendChild(searchButton);

        let resultsDiv = document.createElement("div");
        document.body.appendChild(resultsDiv);

        searchButton.addEventListener("click", () => {
            function printKing(king) {
                return `Name: ${king.nm}\nCountry: ${king.cty}\nHouse: ${king.hse}\nYears: ${king.yrs}`;
            }

            // clear previous results
            resultsDiv.innerHTML = "";
            let resultsCount = 0;

            let searchText = searchBox.value.toLowerCase();
            for (let king of data) {
                for (let key in king) {
                    if (king[key].toLowerCase().includes(searchText)) {
                        // pretty print king
                        resultsCount++;

                        let results = document.createElement("p");
                        results.innerText = printKing(king);//JSON.stringify(king);
                        resultsDiv.appendChild(results);

                        break;
                    }
                    // for year - split and check [0] and [2]
                    // add # of results counter
                }
            }
            let numOfResults = document.createElement("p");
            numOfResults.innerText = `Total number of results: ${resultsCount}`;
            resultsDiv.prepend(numOfResults);
        });
    });
}
task2();
