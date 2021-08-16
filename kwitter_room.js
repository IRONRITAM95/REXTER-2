var firebaseConfig = {
      apiKey: "AIzaSyDHy4n4CJWQ-JAuPfg41yEK2dQYNR-9Gis",
      authDomain: "kwitter-b7cec.firebaseapp.com",
      databaseURL: "https://kwitter-b7cec-default-rtdb.firebaseio.com",
      projectId: "kwitter-b7cec",
      storageBucket: "kwitter-b7cec.appspot.com",
      messagingSenderId: "1040456331366",
      appId: "1:1040456331366:web:3279a5181b3b7d642d7da7",
      measurementId: "G-4HGGBMMFZZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    chat = localStorage.getItem("username");
    document.getElementById("welcome").innerHTML = "WELCOME "+ chat + " !!" ;

    function addRoom(){
      room_name = document.getElementById("room_name").value ;
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_chat.html" ;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adds room name"
      });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class='room_name' id="+Room_names+" onclick='RedirecttoRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function RedirecttoRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "rexter.room.html" ; 
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html" ;
}