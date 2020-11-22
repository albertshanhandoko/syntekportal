function buildtableapprovalovertime(mail)
{
  var nama = mail.replace('@syntek.co.id','');
  var nama2 = nama.replace('@gmail.com','');
  document.getElementById("approval_overtime_heading").innerHTML = "Approval Overtime "+nama2;
  document.getElementById("approval_overtime").style.display = "block";
  document.getElementById("dashboard_overtime").style.display = "none";
   var db = firebase.firestore();
   var table = document.getElementById('approval_overtime_table')
   table.innerHTML = ''
   db.collection("overtime"+mail).where("overtime_status","==","Pending")
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
            cell1.innerHTML = doc.data().submit_date;
            cell2.innerHTML = doc.data().overtime_date;
            cell3.innerHTML = doc.data().overtime_starttime;
            cell4.innerHTML = doc.data().overtime_endtime;
            cell5.innerHTML = doc.data().overtime_note;
            cell6.innerHTML = doc.data().overtime_status;
            cell7.innerHTML = '<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'" onclick="decreasependingapprovalovertime(this.id)"><p style="margin-bottom: 0" id="approval_'+doc.data().submit_date+'" onclick="overtimeapproval(this.id)">Accept</p></button>';
            cell8.innerHTML ='<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'" onclick="decreasependingapprovalovertime(this.id);decreasemonthlyovertime(this.id)"><p style="margin-bottom: 0" id="denial_'+doc.data().submit_date+'" onclick="overtimedenial(this.id)">Reject</p></button>';                                
                      });
                  })
                  .catch(function(error) {
                      console.log("Error getting documents: ", error);
                     });
      db.collection("overtime"+mail).where("overtime_status","==","Approved")
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
                                           });
                                       })
                                       .catch(function(error) {
                                           console.log("Error getting documents: ", error);
                                       });
   db.collection("overtime"+mail).where("overtime_status","==","Rejected")
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

function overtimeapproval(clicked_id)
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
             //console.log(myArray[i]);
             db.collection("overtime"+myArray[i]).doc(appid).update({
               overtime_status:"Approved"
               
               })

            }

       });
       
       
}
function overtimedenial(clicked_id)
{
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
               db.collection("overtime"+myArray[i]).doc(appid).update({
                 overtime_status:"Rejected"
                 
                 })
                 
              }
         });
         //alert("Successfully Rejected! \n Please press Refresh Button");
 }

}

function decreasependingapprovalovertime(mail)
{
        var db = firebase.firestore();
        db.collection("overtimedashboard").doc(mail).update({
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
          buildtableapprovalovertime(mail)
}

function decreasemonthlyovertime(mail)
{
        var db = firebase.firestore();
        db.collection("overtimedashboard").doc(mail).update({
            overtimethismonth:firebase.firestore.FieldValue.increment(-1),
            })
            
          .then(function() {
            //alert("Successfully submited! \n Please press Refresh Button");
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
          //alert("Successfully Approved! \n Please press Refresh Button");

}

function buildtabledashboardovertime()
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
            var table = document.getElementById('dashboard_overtime_table')
            table.innerHTML = ''
            db.collection("overtimedashboard").doc(myArray[i]).get().then((doc)=>
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
            cell2.innerHTML = '<p style="margin-bottom: 0">'+doc.data().overtimethismonth+' Days</p>';
            cell3.innerHTML = '<p style="margin-bottom: 0; font-weight:'+style+'; font-size:'+size+'; color:'+color+' ">'+doc.data().approvalpending+'</p>';
            cell4.innerHTML = '<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'" onclick="buildtableapprovalovertime(this.id)"><p style="margin-bottom: 0">Approval</p></button>';
             });
            }
          })
}     