function buildtableattendance(){
const user = firebase.auth().currentUser;
var email_id = user.email;
var db = firebase.firestore();
var table = document.getElementById('attendancetable')
table.innerHTML = ''
db.collection("attendance"+email_id).where("attendance_status","==","Pending")
.get()
.then(function(querySnapshot) {
querySnapshot.forEach(function(doc) {
console.log(doc.data().attendance_note);
            var row1 = table.insertRow();
            var cell1 = row1.insertCell(0);
            var cell2 = row1.insertCell(1);  
            var cell3 = row1.insertCell(2);
            var cell4 = row1.insertCell(3);  
            var cell5 = row1.insertCell(4);
            var cell6 = row1.insertCell(5);    
            var cell7 = row1.insertCell(6);
            var cell8 = row1.insertCell(7);
            cell1.innerHTML = doc.data().submit_date;
            cell2.innerHTML = doc.data().effective_date;
            cell3.innerHTML = doc.data().checkin_time;
            cell4.innerHTML = doc.data().checkout_time;
            cell5.innerHTML = doc.data().lokasi_kerja;
            cell6.innerHTML = doc.data().attendance_note;
	          cell7.innerHTML = doc.data().attendance_status;
            cell8.innerHTML = '<button id="'+email_id+'" onclick="decreasependingapproval1(this.id)"><p style="margin-bottom: 0" id="approval_'+doc.data().submit_date+'" onclick="cancel_attendance(this.id)">Cancel</p></button>';
            //cell10.innerHTML = '<p style="color:blue" id="denial_'+doc.data().submit_date+'" onclick="attendancedenial(this.id)"><u>Reject</u></p>';                                
                      });
                  })
                  .catch(function(error) {
                      console.log("Error getting documents: ", error);
                  });
db.collection("attendance"+email_id).where("attendance_status","==","Approved")
.get()
.then(function(querySnapshot) {
querySnapshot.forEach(function(doc) {
console.log(doc.data().attendance_note);
            var row1 = table.insertRow();
            var cell1 = row1.insertCell(0);
            var cell2 = row1.insertCell(1);  
            var cell3 = row1.insertCell(2);
            var cell4 = row1.insertCell(3);  
            var cell5 = row1.insertCell(4);
            var cell6 = row1.insertCell(5);    
            var cell7 = row1.insertCell(6);
            //var cell8 = row1.insertCell(7);
            cell1.innerHTML = doc.data().submit_date;
            cell2.innerHTML = doc.data().effective_date;
            cell3.innerHTML = doc.data().checkin_time;
            cell4.innerHTML = doc.data().checkout_time;
            cell5.innerHTML = doc.data().lokasi_kerja;
            cell6.innerHTML = doc.data().attendance_note;
	          cell7.innerHTML = doc.data().attendance_status;
            //cell8.innerHTML = '<p style="color:blue" id="approval_'+doc.data().submit_date+'" onclick="cancel_attendance(this.id)"><u>Cancel</u></p>';
            //cell10.innerHTML = '<p style="color:blue" id="denial_'+doc.data().submit_date+'" onclick="attendancedenial(this.id)"><u>Reject</u></p>';                                
                      });
                  })
                  .catch(function(error) {
                      console.log("Error getting documents: ", error);
                  });
db.collection("attendance"+email_id).where("attendance_status","==","Rejected")
.get()
.then(function(querySnapshot) {
querySnapshot.forEach(function(doc) {
console.log(doc.data().attendance_note);
            var row1 = table.insertRow();
            var cell1 = row1.insertCell(0);
            var cell2 = row1.insertCell(1);  
            var cell3 = row1.insertCell(2);
            var cell4 = row1.insertCell(3);  
            var cell5 = row1.insertCell(4);
            var cell6 = row1.insertCell(5);    
            var cell7 = row1.insertCell(6);
            //var cell8 = row1.insertCell(7);
            cell1.innerHTML = doc.data().submit_date;
            cell2.innerHTML = doc.data().effective_date;
            cell3.innerHTML = doc.data().checkin_time;
            cell4.innerHTML = doc.data().checkout_time;
            cell5.innerHTML = doc.data().lokasi_kerja;
            cell6.innerHTML = doc.data().attendance_note;
	          cell7.innerHTML = doc.data().attendance_status;
            //cell8.innerHTML = '<p style="color:blue" id="approval_'+doc.data().submit_date+'" onclick="cancel_attendance(this.id)"><u>Cancel</u></p>';
            //cell10.innerHTML = '<p style="color:blue" id="denial_'+doc.data().submit_date+'" onclick="attendancedenial(this.id)"><u>Reject</u></p>';                                
                      });
                  })
                  .catch(function(error) {
                      console.log("Error getting documents: ", error);
                  });


}

function submitattendance()
{
  const user = firebase.auth().currentUser;
  var email_id = user.email;
  var effectivedate= document.getElementById("effectivedate").value;
  var checkintime= document.getElementById("checkintime").value;
  var checkouttime= document.getElementById("checkouttime").value;
  var attendancenote= document.getElementById("attendancenote").value;
  var attendancelokasikerja= document.getElementById("attendancelokasikerja").value;
  var attendancestatus= "Pending";
 
  var a = new Date();
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  var db = firebase.firestore();
        db.collection("attendance"+email_id).doc(time).set({
            email:email_id,
            submit_id:a,
            submit_date:time,
            effective_date:effectivedate,
            checkin_time:checkintime,
            checkout_time:checkouttime,
            lokasi_kerja:attendancelokasikerja,
            attendance_note:attendancenote,
            attendance_status:attendancestatus
            })
            
          .then(function() {
            alert("Successfully submited! \n Please press Refresh Button");
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
          buildtableattendance()
}

function cancel_attendance(clicked_id)
  {   
      var appid = clicked_id.replace('approval_','');
      console.log(appid);
      const user = firebase.auth().currentUser;
      var email_id = user.email;
      var db = firebase.firestore();
      db.collection("attendance"+email_id).doc(appid).delete().then(function() {
        alert("Successfully deleted! \n Please press Refresh Button");
        console.log("Document successfully deleted!, ");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    

}

function increasependingapprovalattendance()
{
  const user = firebase.auth().currentUser;
  var email_id = user.email;
  var db = firebase.firestore();
        db.collection("attendancedashboard").doc(email_id).update({
            approvalpending: firebase.firestore.FieldValue.increment(1),
            email: email_id,
            })
            
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
          
}
function decreasependingapproval1(mail)
  {
          var db = firebase.firestore();
          db.collection("attendancedashboard").doc(mail).update({
              approvalpending:firebase.firestore.FieldValue.increment(-1),
              email: mail,
              attendancethismonth:firebase.firestore.FieldValue.increment(-1)
              })
              
            .then(function() {
              //alert("Successfully submited! \n Please press Refresh Button");
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
  }
 