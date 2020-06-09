//I referenced a lot of this code from a project I did on Travery Media's Udemy Course Javascript From The Beginning booklist project which I adapted for use of pushing the reviews to the dom as this was out of my scope of knowledge. I did however write this javascript over and over again until I could write it without refering to the code from the project at all. The syntax may be similar as that project.

const reviewFunc = () => {
    //review constructor
    function Review(name, order, rating) {
        this.name = name;
        this.order = order;
        this.rating = rating;
    };
    //UI constructors
    function UI() {}

    //add review to dom
    ////create the tr element, insert cols and append
    ////clear fields
    //adding the push to page function to the UI prototype
    UI.prototype.pushToPage = (review) => {
        let tContent = document.querySelector("#table-content");
        let reviewRow = document.createElement("tr");


        if (name.value === "" || order.value === "" || rating.value === "") {
            alertUserIncomplete();
             setTimeout(hideAlert,1500)
        } else {
            reviewRow.innerHTML =
                `
            <td>${review.name}</td>
            <td>${review.order}</td>
            <td>${review.rating}</td>
            <td><a href="#" class="btn btn-danger btn-sm">X</a></td>
       `;

            tContent.appendChild(reviewRow);
            //clear the fields after a submit
            let name = document.querySelector("#name").value = "";
            let order = document.querySelector("#order").value = "";
           ;
            alertUserComplete();
            setTimeout(hideAlert,1500)

        };

    };

    //event listener and declaring the new objects
    //also preventing the default submit of the form as I want to push the data onto the dom
    document.querySelector("#input-form").addEventListener("submit", (e) => {
        let name = document.querySelector("#name").value;
        let order = document.querySelector("#order").value;
        let rating = document.querySelector("#rating").value;

        let review = new Review(name, order, rating);
        let ui = new UI();


        ui.pushToPage(review);
        e.preventDefault();
    });
    const alertUserIncomplete = () => {
        let alertMsgIncomplete = document.querySelector(".alert-msg");
        alertMsgIncomplete.innerHTML = `<h3 class="text-danger">Please Complete All Fields!</h3>`;
        //delete review 
        //save to the browswer
        //test if fields are filled

    }
    const alertUserComplete = () =>{
        let alertMsgComplete = document.querySelector(".alert-msg");
        alertMsgComplete.innerHTML = `<h3 class="text-success">Review Added!</h3>`;
    }
    const hideAlert = () =>{
        let alert = document.querySelector(".alert-msg");
        alert.textContent = " ";
    }
}
reviewFunc();