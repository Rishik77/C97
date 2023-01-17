

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDr4cYw8AvNQ2K1PB7Zzw5J33x1pQ4XMsI",
      authDomain: "twitter-c5825.firebaseapp.com",
      databaseURL: "https://twitter-c5825-default-rtdb.firebaseio.com",
      projectId: "twitter-c5825",
      storageBucket: "twitter-c5825.appspot.com",
      messagingSenderId: "1080021460012",
      appId: "1:1080021460012:web:fc7a4b5375e69244865d89"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message'>"+message+"</h4>";
      like_button = "<btn class='btn btn-warning' id=>"+ firebase_message_id+"value = "+like+"onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up>"+like+"</span></button><hr>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send(){

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({

            name:user_name,
            message:msg,
            like:0


      });
      document.getElementById("msg").value = "";
}

function updateLike(message_id){

console.log("Clicked on like button -"+  message_id);
button_id = message_id;
likes = document.getElementById("button.id").value;
updated_likes = Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
 like : updated_likes
})

}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace = "index.html";
}

