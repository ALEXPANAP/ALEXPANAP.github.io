   var users = 0;
   var kwh = 0;
   function round(value, decimals) {
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
 }
   function updateValues() {
      firebase.database().ref('kwh').once('value', (snapshot) => {
      kwh = snapshot.val();
      document.getElementById("johNNy").innerHTML = round(kwh,3) +" KWH";
      document.getElementById("joHnny").innerHTML = "$"+round(kwh*.12, 2);
      console.log(kwh);
    });

    firebase.database().ref('users').once('value', (snapshot) => {
      users = snapshot.val();
      console.log(users);
      document.getElementById("imagod").innerHTML = users +" people";
    });
   }
   firebase.database().ref('kwh').on('value', function(snapshot) {
      updateValues();
   });   

   firebase.database().ref('users').on('value', function(snapshot) {
      updateValues();
   });  
   

   function addUser(hours) {
    firebase.database().ref('kwh').set(kwh + hours);
    firebase.database().ref("users").set(++users);
  }

  updateValues();
  
