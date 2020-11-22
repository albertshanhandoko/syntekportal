function buildtableapprovaltimeoff(mail)
{
  var nama = mail.replace('@syntek.co.id','');
  var nama2 = nama.replace('@gmail.com','');
  document.getElementById("approval_timeoff_heading").innerHTML = "Approval Timeoff "+nama2;
  document.getElementById("approval_timeoff").style.display = "block";
  document.getElementById("dashboard_timeoff").style.display = "none";
  var db = firebase.firestore();
              var table = document.getElementById('approval_timeoff_table')
              table.innerHTML = ''
              db.collection("timeoff"+mail).where("timeoff_status","==","Pending")
                  .get()
                  .then(function(querySnapshot) {
                      querySnapshot.forEach(function(doc) {
                        var row1 = table.insertRow();
                        var cell1 = row1.insertCell(0);
                        var cell2 = row1.insertCell(1);  
                        var cell3 = row1.insertCell(2);
                        var cell4 = row1.insertCell(3);  
                        var cell5 = row1.insertCell(4);
                        var cell6 = row1.insertCell(5);   
                        var cell7 = row1.insertCell(6);
                        var cell8 = row1.insertCell(7);    
                        var cell9 = row1.insertCell(8); 
                        cell1.innerHTML = doc.data().email
                        cell2.innerHTML = doc.data().timeoff_jeniscuti;
                        cell3.innerHTML = doc.data().submit_date;
                        cell4.innerHTML = doc.data().timeoff_starttime;
                        cell5.innerHTML = doc.data().timeoff_periodecuti;
                        cell6.innerHTML = doc.data().timeoff_notes;
                        cell7.innerHTML = doc.data().timeoff_status;
            cell8.innerHTML = '<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'" onclick="decreasependingapprovaltimeoff(this.id)"><p style="margin-bottom: 0" id="approval_'+doc.data().submit_date+'" onclick="timeoffapproval(this.id)">Accept</p></button>';
            cell9.innerHTML ='<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'" onclick="decreasependingapprovaltimeoff(this.id);decreasemonthlytimeoff(this.id)"><p style="margin-bottom: 0" id="denial_'+doc.data().submit_date+'" onclick="timeoffdenial(this.id)">Reject</p></button>';                                
                      });
                  })
                  .catch(function(error) {
                      console.log("Error getting documents: ", error);
        });
        db.collection("timeoff"+mail).where("timeoff_status","==","Approved")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
               var row1 = table.insertRow();
               var cell1 = row1.insertCell(0);
               var cell2 = row1.insertCell(1);  
               var cell3 = row1.insertCell(2);
               var cell4 = row1.insertCell(3);  
               var cell5 = row1.insertCell(4);
               var cell6 = row1.insertCell(5);   
               var cell7 = row1.insertCell(6);
               var cell8 = row1.insertCell(7);    
               cell1.innerHTML = doc.data().email
               cell2.innerHTML = doc.data().timeoff_jeniscuti;
               cell3.innerHTML = doc.data().submit_date;
               cell4.innerHTML = doc.data().timeoff_starttime;
               cell5.innerHTML = doc.data().timeoff_periodecuti;
               cell6.innerHTML = doc.data().timeoff_notes;
               cell7.innerHTML = doc.data().timeoff_status;
 // cell8.innerHTML = '<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'" onclick="decreasependingapproval(this.id)"><p style="margin-bottom: 0" id="approval_'+doc.data().submit_date+'" onclick="timeoffapproval(this.id)">Accept</p></button>';
  //cell9.innerHTML ='<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'" onclick="decreasependingapproval(this.id);decreasemonthly(this.id)"><p style="margin-bottom: 0" id="denial_'+doc.data().submit_date+'" onclick="timeoffdenial(this.id)">Reject</p></button>';                                
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
});
db.collection("timeoff"+mail).where("timeoff_status","==","Rejected")
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      var row1 = table.insertRow();
      var cell1 = row1.insertCell(0);
      var cell2 = row1.insertCell(1);  
      var cell3 = row1.insertCell(2);
      var cell4 = row1.insertCell(3);  
      var cell5 = row1.insertCell(4);
      var cell6 = row1.insertCell(5);   
      var cell7 = row1.insertCell(6);
      var cell8 = row1.insertCell(7);    
      cell1.innerHTML = doc.data().email
      cell2.innerHTML = doc.data().timeoff_jeniscuti;
      cell3.innerHTML = doc.data().submit_date;
      cell4.innerHTML = doc.data().timeoff_starttime;
      cell5.innerHTML = doc.data().timeoff_periodecuti;
      cell6.innerHTML = doc.data().timeoff_notes;
      cell7.innerHTML = doc.data().timeoff_status;
//cell8.innerHTML = '<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'" onclick="decreasependingapproval(this.id)"><p style="margin-bottom: 0" id="approval_'+doc.data().submit_date+'" onclick="timeoffapproval(this.id)">Accept</p></button>';
//cell9.innerHTML ='<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'" onclick="decreasependingapproval(this.id);decreasemonthly(this.id)"><p style="margin-bottom: 0" id="denial_'+doc.data().submit_date+'" onclick="timeoffdenial(this.id)">Reject</p></button>';                                
    });
})
.catch(function(error) {
    console.log("Error getting documents: ", error);
});
}     
          
function timeoffapproval(clicked_id)
  {
      var appid = clicked_id.replace('approval_','');
      console.log(appid);
      const user = firebase.auth().currentUser;
      var db = firebase.firestore();
      db.collection("approval").doc("control").get().then(function(doc) 
          {
            var myArray = doc.data().email;
            for (var i = 0; i < myArray.length; i++)
               {
                console.log(myArray[i]);
                db.collection("timeoff"+myArray[i]).doc(appid).update({
                  timeoff_status:"Approved"
                  })
                  
               }
          });
          alert("Successfully Approved! \n Please press Refresh Button");
}

function timeoffdenial(clicked_id)
  {
      var appid = clicked_id.replace('denial_','');
      console.log(appid);
      const user = firebase.auth().currentUser;
      var db = firebase.firestore();
      db.collection("approval").doc("control").get().then(function(doc) 
          {
            var myArray = doc.data().email;
            for (var i = 0; i < myArray.length; i++)
               {
                console.log(myArray[i]);
                db.collection("timeoff"+myArray[i]).doc(appid).update({
                  timeoff_status:"Rejected"
                  
                  })
                  
               }
          });
          alert("Successfully Rejected! \n Please press Refresh Button");
}

function decreasependingapprovaltimeoff(mail)
  {
          var db = firebase.firestore();
          db.collection("timeoffdashboard").doc(mail).update({
              approvalpending:firebase.firestore.FieldValue.increment(-1),
              })
              
            .then(function() {
              //alert("Successfully submited! \n Please press Refresh Button");
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
            alert("Successfully Approved! \n Please press Refresh Button");
            buildtableapprovaltimeoff(mail)
}
 
function decreasemonthlytimeoff(mail)
  {
          var db = firebase.firestore();
          db.collection("timeoffdashboard").doc(mail).update({
              
              timeoffleft:firebase.firestore.FieldValue.increment(1),
              })
              
            .then(function() {
              //alert("Successfully submited! \n Please press Refresh Button");
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
                       
}

function buildtabledashboardtimeoff()
  {

    const user = firebase.auth().currentUser;
    var email_id = user.email;
    var division;
    if (email_id==="admin_control@syntek.co.id")
    {
      division = "control"
    }
    else if (email_id==="admin_synkrona@syntek.co.id")
    {
      division = "synkrona"
    }
    else if (email_id==="admin_operational@syntek.co.id")
    {
      division = "operational"
    }
    else if (email_id==="admin_energy@syntek.co.id")
    {
      division = "energy"
    }
    else if (email_id==="admin_sales@syntek.co.id")
    {
      division = "sales"
    }
      var db = firebase.firestore();
      db.collection("approval").doc(division).get().then(function(doc) 
          {
          var myArray = doc.data().email;
          for (var i = 0; i < myArray.length; i++)
               {
              var table = document.getElementById('dashboard_timeoff_table')
              table.innerHTML = ''
              db.collection("timeoffdashboard").doc(myArray[i]).get().then((doc)=>
              {
                var nama = doc.data().email.replace('@syntek.co.id','');
                var nama2 = nama.replace('@gmail.com','');
                var style;
                if (doc.data().approvalpending>0)
                {
                  style="bold";
                  size="30px";
                  color="red";
                }
                else{
                  style="normal";
                  size="20px";
                  color="black";
                }
              var row1 = table.insertRow();
              var cell1 = row1.insertCell(0);
              var cell2 = row1.insertCell(1);  
              var cell3 = row1.insertCell(2);
              var cell4 = row1.insertCell(3);
              cell1.innerHTML = nama2; 
              cell2.innerHTML = '<p style="margin-bottom: 0">'+doc.data().timeoffleft+' Days</p>';
              cell3.innerHTML = '<p style="margin-bottom: 0; font-weight:'+style+'; font-size:'+size+'; color:'+color+' ">'+doc.data().approvalpending+'</p>';
              cell4.innerHTML = '<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'" onclick="buildtableapprovaltimeoff(this.id)"><p style="margin-bottom: 0">Approval</p></button>';
               });
              }
            })
}     