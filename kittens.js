"use strict"

document.getElementById("kittenForm").addEventListener("submit", function (event) {
    // to avoid using default form method = GET = appending data to action URL
    event.preventDefault();

    // in this case, this means element that triggered the event = kittenForm
    console.log(this);
    const newKitten = {
        name: this.kittenName.value,
        age: this.kittenAge.value < 0 ? 0 : this.kittenAge.value,
        breed: this.kittenBreed.value,
        cuteness: this.kittenCuteness.value < 0 ? 0 : this.kittenCuteness.value
    }
    console.log(newKitten);

    axios.post("http://localhost:4494/kitten/create", newKitten)
        .then(response => {
            console.log(response);
            viewAllKittens();
        })
        .catch(error => console.error(error));
});

let viewAllKittens = () => {
    axios.get("http://localhost:4494/kitten/getAll")
        .then(response => {
            const kittenView = document.getElementById("kittenView");
            // restore legend for fieldset
            kittenView.innerHTML = kittenView.getElementsByTagName("legend")[0].outerHTML;
            for (let kitten of response.data) {
                console.log(kitten.id);
                let kittenP = document.createElement("p");
                kittenP.innerText = `Name: ${kitten.name}\nAge:${kitten.age}
                                     Breed:${kitten.breed}\nCuteness:${kitten.cuteness}`;
                kittenView.prepend(kittenP);
            }
        })
        .catch(error => console.error(error));
}
// show all kittens on load
viewAllKittens();

/* Notes:
age < 0 ? 0 : age
reset using loop and wipe all input children of form - no need button type reset in html does this for you
*/
