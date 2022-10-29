window.onload = function() {
    const email1 = document.getElementById("email");
    const me = document.body.getElementsByClassName("message")[0];
    var t = document.body.getElementsByTagName("form")[0];
    t.addEventListener("submit", function(event) {
        let msg = [];
        console.log(email1.value);
        if (email1.value === "" || email1.value == null || 
        !email1.value === /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ) {
            msg.push("Please enter a valid email address.");
            
        } else {
            msg.push("Thank you! Your email address" + " " + email1.value + " " +
            "has been added to our mailing list!");
        }

        if (msg.length > 0) {
            event.preventDefault();
            me.innerText = msg.join(", ");            
        } else {
            event.preventDefault();
            me.innerText = msg.join(", ");
        }
        
    });
    
}



