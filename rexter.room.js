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

  user_name = localStorage.getItem("username");
  room_name = localStorage.getItem("room_name");

  function send(){
        msg = document.getElementById("msg").value ;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "" ;
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem(user_name);
    localStorage.removeItem(room_name);
    window.location = "index.html" ;
}