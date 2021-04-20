var firebaseConfig = {
      apiKey: "AIzaSyA8Tx5ZI9dzmvhxol4W1OBi_Jfl-ore6MM",
      authDomain: "tic-tac-toe-1e2cf.firebaseapp.com",
      databaseURL: "https://tic-tac-toe-1e2cf.firebaseio.com",
      projectId: "tic-tac-toe-1e2cf",
      storageBucket: "tic-tac-toe-1e2cf.appspot.com",
      messagingSenderId: "530116596092",
      appId: "1:530116596092:web:26b5408c8594499276d4f9",
      measurementId: "G-LCRGM51E4D"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row= "<div class='room_name' id="+Room_names+" onclick'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
  document.getElementById("output").innerHTML += row;    //End code
      });});}
getData();user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 
function addRoom(){
      room_name = document.getElementById("room_name", room_name).value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"


      });
      localStorage.setItem("room_name", room_name);
      window.location ="kwitter_page.html";

      


}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}
user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
function send() { msg = document.getElementById("msg").value; firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 }); document.getElementById("msg").value = ""; }
