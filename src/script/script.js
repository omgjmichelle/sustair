

// Elements for sensor readings
const humElement = document.getElementById("hum");
const pm10Element = document.getElementById("pm10");
const pm25Element = document.getElementById("pm25");
const tempElement = document.getElementById("temp");
const presElement = document.getElementById("pres");

const user = 'bmesdsens@gmail.com';
// MANAGE LOGIN/LOGOUT UI
const setupUI = (user) => {
  if (user) {
    //toggle UI elements

    // get user UID to get data from database
    var uid = user.uid;
    console.log(uid);

    // Database paths (with user UID)
    var dbPathHum = 'UsersData/aw17J6t15kP88RrcG6XirxPH63Z2/humidity';
    var dbPathPm10 = 'UsersData/aw17J6t15kP88RrcG6XirxPH63Z2/pm10';
    var dbPathPm25 = 'UsersData/aw17J6t15kP88RrcG6XirxPH63Z2/pm25';
    var dbPathPres = 'UsersData/aw17J6t15kP88RrcG6XirxPH63Z2/pressure';
    var dbPathTemp = 'UsersData/aw17J6t15kP88RrcG6XirxPH63Z2/temperature';

    // Database references
    var dbRefHum = firebase.database().ref().child(dbPathHum);
    var dbRefPm10 = firebase.database().ref().child(dbPathPm10);
    var dbRefPm25 = firebase.database().ref().child(dbPathPm25);
    var dbRefPres = firebase.database().ref().child(dbPathPres);
    var dbRefTemp = firebase.database().ref().child(dbPathTemp);
    // Update page with new readings
    

    dbRefHum.on('value', snap => {
      humElement.innerText = Number(snap.val()).toFixed(2);
    });

    dbRefPm10.on('value', snap => {
      pm10Element.innerText = Number(snap.val()).toFixed(2);
    });
    
    dbRefPm25.on('value', snap => {
      pm25Element.innerText = Number(snap.val()).toFixed(2);
    });

    dbRefPres.on('value', snap => {
      presElement.innerText = Number(snap.val()).toFixed(2);
    });
    dbRefTemp.on('value', snap => {
      tempElement.innerText = Number(snap.val()).toFixed(2);
    });

    

  // if user is logged out
  } else{
    // toggle UI elements
    loginElement.style.display = 'block';
    authBarElement.style.display ='none';
    userDetailsElement.style.display ='none';
    contentElement.style.display = 'none';
  }
}