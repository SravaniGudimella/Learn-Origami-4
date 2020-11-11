
var database;

function setup(){

  var firebaseConfig = {
    apiKey: "AIzaSyBTu5DODWMmHVA4FnWxv_m6e0OefdvWFX0",
    authDomain: "origami-comment.firebaseapp.com",
    databaseURL: "https://origami-comment.firebaseio.com",
    projectId: "origami-comment",
    storageBucket: "origami-comment.appspot.com",
    messagingSenderId: "763036471740",
    appId: "1:763036471740:web:cade5766c15880b0c05bb9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  database = firebase.database();

  var ref = database.ref('comments');
  ref.on('value', gotData, showError);
}

function gotData(data){

  var commentListings = selectAll('.commentListing');
  for(var i = 0; i < commentListings.length; i++){
    commentListings[i].remove();
  }

   var c = data.val();
   var keys = Object.keys(c);

   for(var i = 0; i < keys.length; i++ ){
     var k = keys[i];
     var name = c[k].Name;
     var email = c[k].Email;
     var comment = c[k].Comment;

     li = createElement('li','"' + comment + '" - written by ' + name);
     li.class('commentListing');
     li.parent('commentlist');
   }
}

function showError(){
   console.log("Error");
}




