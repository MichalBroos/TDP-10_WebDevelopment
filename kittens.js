"use strict"
axios.get("http://localhost:4494/kitten/getAll")
    .then(response => {
        //
    })
    .catch(error => console.error(err));

/* Notes:
age < 0 ? 0 : age
reset using loop and wipe all input children of form - no need button type reset in html does this for you
*/