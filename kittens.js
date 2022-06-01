"use strict"
// axios.get("http://localhost:4494/kitten/getAll")
//     .then(response => {
//         //
//     })
//     .catch(error => console.error(err));

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
});

/* Notes:
age < 0 ? 0 : age
reset using loop and wipe all input children of form - no need button type reset in html does this for you
*/
