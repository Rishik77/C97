




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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' ># "+Room_names+"></div><hr>"
      
      });});}
getData();

function addRoom(){

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
       } )
}

function redirectToRoomName(name){
      console.log(name);
      location.getData("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

