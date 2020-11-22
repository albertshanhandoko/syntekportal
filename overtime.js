function buildtableovertime(){
    const user = firebase.auth().currentUser;
    var email_id = user.email;
    var db = firebase.firestore();
    var table = document.getElementById('overtimetable')
    table.innerHTML = ''
    db.collection("overtime"+email_id).where("overtime_status","==","Pending")
    .get()
    .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    console.log(doc.data().overtime_note);
    var row1 = table.insertRow();
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);  
    var cell3 = row1.insertCell(2);
    var cell4 = row1.insertCell(3);  
    var cell5 = row1.insertCell(4);
    var cell6 = row1.insertCell(5);    
    var cell7 = row1.insertCell(6);
    cell1.innerHTML = doc.data().submit_date;
    cell2.innerHTML = doc.data().overtime_date;
    cell3.innerHTML = doc.data().overtime_starttime;
    cell4.innerHTML = doc.data().overtime_endtime;
    cell5.innerHTML = doc.data().overtime_note;
    cell6.innerHTML = doc.data().overtime_status;
                cell7.innerHTML = '<button id="'+email_id+'" onclick="decreasependingapprovalovertime1(this.id)"><p style="margin-bottom: 0" id="approval_'+doc.data().submit_date+'" onclick="cancel_overtime(this.id)">Cancel</p></button>';
                //cell10.innerHTML = '<p style="color:blue" id="denial_'+doc.data().submit_date+'" onclick="overtimedenial(this.id)"><u>Reject</u></p>';                                
                          });
                      })
                      .catch(function(error) {
                          console.log("Error getting documents: ", error);
                      });
    db.collection("overtime"+email_id).where("overtime_status","==","Approved")
    .get()
    .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    console.log(doc.data().overtime_note);
    var row1 = table.insertRow();
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);  
    var cell3 = row1.insertCell(2);
    var cell4 = row1.insertCell(3);  
    var cell5 = row1.insertCell(4);
    var cell6 = row1.insertCell(5);    
    var cell7 = row1.insertCell(6);
    cell1.innerHTML = doc.data().submit_date;
    cell2.innerHTML = doc.data().overtime_date;
    cell3.innerHTML = doc.data().overtime_starttime;
    cell4.innerHTML = doc.data().overtime_endtime;
    cell5.innerHTML = doc.data().overtime_note;
    cell6.innerHTML = doc.data().overtime_status;
                //cell8.innerHTML = '<p style="color:blue" id="approval_'+doc.data().submit_date+'" onclick="cancel_overtime(this.id)"><u>Cancel</u></p>';
                //cell10.innerHTML = '<p style="color:blue" id="denial_'+doc.data().submit_date+'" onclick="overtimedenial(this.id)"><u>Reject</u></p>';                                
                          });
                      })
                      .catch(function(error) {
                          console.log("Error getting documents: ", error);
                      });
    db.collection("overtime"+email_id).where("overtime_status","==","Rejected")
    .get()
    .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    console.log(doc.data().overtime_note);
    var row1 = table.insertRow();
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);  
    var cell3 = row1.insertCell(2);
    var cell4 = row1.insertCell(3);  
    var cell5 = row1.insertCell(4);
    var cell6 = row1.insertCell(5);    
    var cell7 = row1.insertCell(6);
    cell1.innerHTML = doc.data().submit_date;
    cell2.innerHTML = doc.data().overtime_date;
    cell3.innerHTML = doc.data().overtime_starttime;
    cell4.innerHTML = doc.data().overtime_endtime;
    cell5.innerHTML = doc.data().overtime_note;
    cell6.innerHTML = doc.data().overtime_status;
                //cell8.innerHTML = '<p style="color:blue" id="approval_'+doc.data().submit_date+'" onclick="cancel_overtime(this.id)"><u>Cancel</u></p>';
                //cell10.innerHTML = '<p style="color:blue" id="denial_'+doc.data().submit_date+'" onclick="overtimedenial(this.id)"><u>Reject</u></p>';                                
                          });
                      })
                      .catch(function(error) {
                          console.log("Error getting documents: ", error);
                      });
    
    
    }
    
function submitovertime()
  {
    const user = firebase.auth().currentUser;
    var email_id = user.email;
    var overtimedate= document.getElementById("overtimedate").value;
    var overtimestarttime= document.getElementById("overtimestarttime").value;
    var overtimeendtime= document.getElementById("overtimeendtime").value;
    var overtimenote= document.getElementById("overtimenote").value;
    var overtimestatus= "Pending";
   
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
          db.collection("overtime"+email_id).doc(time).set({
              email:email_id,
              submit_id:a,
              submit_date:time,
              overtime_date:overtimedate,
              overtime_starttime:overtimestarttime,
              overtime_endtime:overtimeendtime,
              overtime_note:overtimenote,
              overtime_status:overtimestatus
              })
              
            .then(function() {
              alert("Successfully submited! \n Please press Refresh Button");
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
            buildtableovertime()
  }

function cancel_overtime(clicked_id)
    {   
        var appid = clicked_id.replace('approval_','');
        console.log(appid);
        const user = firebase.auth().currentUser;
        var email_id = user.email;
        var db = firebase.firestore();
        db.collection("overtime"+email_id).doc(appid).delete().then(function() {
          alert("Successfully deleted! \n Please press Refresh Button");
          console.log("Document successfully deleted!, ");
      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
      
  
    }

function increasependingapprovalovertime()
    {
      const user = firebase.auth().currentUser;
      var email_id = user.email;
      var db = firebase.firestore();
            db.collection("overtimedashboard").doc(email_id).update({
                approvalpending: firebase.firestore.FieldValue.increment(1),
                email: email_id,
                overtimethismonth:firebase.firestore.FieldValue.increment(1)
                })
                
              .then(function() {
                console.log("Document successfully written!");
              })
              .catch(function(error) {
                console.error("Error writing document: ", error);
              });
              
    }
function decreasependingapprovalovertime1(mail)
      {
              var db = firebase.firestore();
              db.collection("overtimedashboard").doc(mail).update({
                  approvalpending:firebase.firestore.FieldValue.increment(-1),
                  email: mail,
                  overtimethismonth:firebase.firestore.FieldValue.increment(-1)
                  })
                  
                .then(function() {
                  //alert("Successfully submited! \n Please press Refresh Button");
                  console.log("Document successfully written!");
                })
                .catch(function(error) {
                  console.error("Error writing document: ", error);
                });
      }
     