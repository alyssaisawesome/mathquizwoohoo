// Your web app's Firebase configuration

const firebaseConfig = {

      apiKey: "AIzaSyAMXt1W66Ta-8BQ4hb0q_XPQkSECMytI74",
    
      authDomain: "letstalkapp-5cf07.firebaseapp.com",
    
      databaseURL: "https://letstalkapp-5cf07-default-rtdb.firebaseio.com",
    
      projectId: "letstalkapp-5cf07",
    
      storageBucket: "letstalkapp-5cf07.appspot.com",
    
      messagingSenderId: "231883752781",
    
      appId: "1:231883752781:web:7792c176eed93046eee304"
    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addroom() {

     var room_name = document.getElementById("roomname").value;
     firebase.database().ref("/").child(room_name).update({

           purpose: "adding room"

     });

}

function logout() {

      window.location="index.html";

}