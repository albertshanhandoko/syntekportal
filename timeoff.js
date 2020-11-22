function buildtabletimeoff(){
    const user = firebase.auth().currentUser;
    var email_id = user.email;
    var db = firebase.firestore();
    var table = document.getElementById('timeofftable')
    table.innerHTML = ''
    db.collection("timeoff"+email_id).where("timeoff_status","==","Pending")
    .get()
    .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    console.log(doc.data().timeoff_note);
    var row1 = table.insertRow();
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);  
    var cell3 = row1.insertCell(2);
    var cell4 = row1.insertCell(3);  
    var cell5 = row1.insertCell(4);
    var cell6 = row1.insertCell(5);    
    var cell7 = row1.insertCell(6); 
    cell1.innerHTML = doc.data().timeoff_jeniscuti;
    cell2.innerHTML = doc.data().submit_date;
    cell3.innerHTML = doc.data().timeoff_starttime;
    cell4.innerHTML = doc.data().timeoff_periodecuti;
    cell5.innerHTML = doc.data().timeoff_notes;
    cell6.innerHTML = doc.data().timeoff_status;
                cell7.innerHTML = '<button id="'+email_id+'" onclick="decreasependingapprovaltimeoff1(this.id)"><p style="margin-bottom: 0" id="approval_'+doc.data().submit_date+'" onclick="cancel_timeoff(this.id)">Cancel</p></button>';
                //cell10.innerHTML = '<p style="color:blue" id="denial_'+doc.data().submit_date+'" onclick="timeoffdenial(this.id)"><u>Reject</u></p>';                                
                          });
                      })
                      .catch(function(error) {
                          console.log("Error getting documents: ", error);
                      });
    db.collection("timeoff"+email_id).where("timeoff_status","==","Approved")
    .get()
    .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    console.log(doc.data().timeoff_note);
    var row1 = table.insertRow();
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);  
    var cell3 = row1.insertCell(2);
    var cell4 = row1.insertCell(3);  
    var cell5 = row1.insertCell(4);
    var cell6 = row1.insertCell(5);    
    cell1.innerHTML = doc.data().timeoff_jeniscuti;
    cell2.innerHTML = doc.data().submit_date;
    cell3.innerHTML = doc.data().timeoff_starttime;
    cell4.innerHTML = doc.data().timeoff_periodecuti;
    cell5.innerHTML = doc.data().timeoff_notes;
    cell6.innerHTML = doc.data().timeoff_status;
                //cell8.innerHTML = '<p style="color:blue" id="approval_'+doc.data().submit_date+'" onclick="cancel_timeoff(this.id)"><u>Cancel</u></p>';
                //cell10.innerHTML = '<p style="color:blue" id="denial_'+doc.data().submit_date+'" onclick="timeoffdenial(this.id)"><u>Reject</u></p>';                                
                          });
                      })
                      .catch(function(error) {
                          console.log("Error getting documents: ", error);
                      });
    db.collection("timeoff"+email_id).where("timeoff_status","==","Rejected")
    .get()
    .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    console.log(doc.data().timeoff_note);
    var row1 = table.insertRow();
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);  
    var cell3 = row1.insertCell(2);
    var cell4 = row1.insertCell(3);  
    var cell5 = row1.insertCell(4);
    var cell6 = row1.insertCell(5);    
    cell1.innerHTML = doc.data().timeoff_jeniscuti;
    cell2.innerHTML = doc.data().submit_date;
    cell3.innerHTML = doc.data().timeoff_starttime;
    cell4.innerHTML = doc.data().timeoff_periodecuti;
    cell5.innerHTML = doc.data().timeoff_notes;
    cell6.innerHTML = doc.data().timeoff_status;
                //cell8.innerHTML = '<p style="color:blue" id="approval_'+doc.data().submit_date+'" onclick="cancel_timeoff(this.id)"><u>Cancel</u></p>';
                //cell10.innerHTML = '<p style="color:blue" id="denial_'+doc.data().submit_date+'" onclick="timeoffdenial(this.id)"><u>Reject</u></p>';                                
                          });
                      })
                      .catch(function(error) {
                          console.log("Error getting documents: ", error);
                      });
    
    
  }
    
function submittimeoff()
  {
    const user = firebase.auth().currentUser;
    var email_id = user.email;
    var timeoffjeniscuti= document.getElementById("timeoffjeniscuti").value;
    var starttime= document.getElementById("starttime").value;
    var timeoffperiodecuti= document.getElementById("timeoffperiodecuti").value;
    var timeoffnotes= document.getElementById("timeoffnotes").value;
    var timeoffstatus= "Pending";
   
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

          db.collection("timeoff"+email_id).doc(time).set({
              email:email_id,
              submit_id:a,
              submit_date:time,
              timeoff_jeniscuti:timeoffjeniscuti,
              timeoff_starttime:starttime,
              timeoff_periodecuti:timeoffperiodecuti,
              timeoff_notes:timeoffnotes,
              timeoff_status:timeoffstatus
              })
              
            .then(function() {
              alert("Successfully submited! \n Please press Refresh Button");
              //console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
            buildtabletimeoff()

  }
  
function cancel_timeoff(clicked_id)
    {   
        var appid = clicked_id.replace('approval_','');
        console.log(appid);
        const user = firebase.auth().currentUser;
        var email_id = user.email;
        var db = firebase.firestore();
        db.collection("timeoff"+email_id).doc(appid).delete().then(function() {
          alert("Successfully deleted! \n Please press Refresh Button");
          console.log("Document successfully deleted!, ");
      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
      
  
  }

function increasependingapprovaltimeoff()
  {
    const user = firebase.auth().currentUser;
    var email_id = user.email;
    var db = firebase.firestore();
          db.collection("timeoffdashboard").doc(email_id).update({
              approvalpending: firebase.firestore.FieldValue.increment(1),
              email: email_id,
              timeoffleft:firebase.firestore.FieldValue.increment(-1)
              })
              
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
            
  }

function decreasependingapprovaltimeoff1(mail)
    {
            var db = firebase.firestore();
            db.collection("timeoffdashboard").doc(mail).update({
                approvalpending:firebase.firestore.FieldValue.increment(-1),
                email: mail,
                })
                
              .then(function() {
                //alert("Successfully submited! \n Please press Refresh Button");
                console.log("Document successfully written!");
              })
              .catch(function(error) {
                console.error("Error writing document: ", error);
              });
  }
   