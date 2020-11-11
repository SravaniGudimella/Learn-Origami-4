var database;

function add(){

    database = firebase.database();


    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var comment = document.getElementById("comment");
   
    var commentIndex = "comments/" + name.value;
        database.ref(commentIndex).set({           
            Comment: comment.value,
            Email: email.value,
            Name : name.value
    })

    alert("Thank You!!  Your Comments Are Precious To Me. Please Check Out The About Me Page.");
}




