function buildtableapprovalattendance(mail)
{
  var nama = mail.replace('@syntek.co.id','');
  var nama2 = nama.replace('@gmail.com','');
  document.getElementById("approval_attendance").style.display = "block";
  document.getElementById("dashboard_attendance").style.display = "none";
  document.getElementById("approval_attendance_heading").innerHTML = "Approval Attendance "+nama2;
  var db = firebase.firestore();
              var table = document.getElementById('approval_attendance_table')
              table.innerHTML = ''
              db.collection("attendance"+mail).where("attendance_status","==","Pending")
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
            var cell10 = row1.insertCell(9);
            cell1.innerHTML = doc.data().submit_date;
            cell2.innerHTML = doc.data().effective_date;
            cell3.innerHTML = doc.data().checkin_time;
            cell4.innerHTML = doc.data().checkout_time;
            cell5.innerHTML = doc.data().lokasi_kerja;
            cell6.innerHTML = doc.data().attendance_note;
            cell7.innerHTML = doc.data().attendance_status;
            cell8.innerHTML = '<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Approval</button><div class="modal fade" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Modal Header</h4></div><div class="modal-body"><div class="row"><label for="staticEmail" class="col-sm-2 col-form-label">Notes</label><textarea id="attendanceapprovalnote" style="min-width: 400px;min-height: 150px;"></textarea></div></div></div><div class="modal-footer"><button id="'+doc.data().email+'_'+doc.data().submit_date+'_'+doc.data().effective_date+'" onclick="decreasependingapproval(this.id);attendanceapproval(this.id);datecheck(this.id)" type="button" class="btn btn-default" data-dismiss="modal">Submit</button></div></div></div></div>';
            //cell8.innerHTML = '<button style="padding:0px 0px id="'+doc.data().email+'" onclick="decreasependingapproval(this.id)"><p style="margin-bottom: -1;margin-left:0;margin-right:0" id="approval_'+doc.data().submit_date+'" onclick="attendanceapproval(this.id)">Approved</p></button>';
            cell9.innerHTML ='<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'_'+doc.data().submit_date+'_'+doc.data().effective_date+'" onclick="decreasependingapproval(this.id);attendancedenial(this.id)"><p style="margin-bottom: 0">Reject</p></button>';                                
                      });
                  })
                  .catch(function(error) {
                      console.log("Error getting documents: ", error);
        });
        db.collection("attendance"+mail).where("attendance_status","==","Approved")
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
  var cell10 = row1.insertCell(9);
  cell1.innerHTML = doc.data().submit_date;
  cell2.innerHTML = doc.data().effective_date;
  cell3.innerHTML = doc.data().checkin_time;
  cell4.innerHTML = doc.data().checkout_time;
  cell5.innerHTML = doc.data().lokasi_kerja;
  cell6.innerHTML = doc.data().attendance_note;
  cell7.innerHTML = doc.data().attendance_status;
 // cell8.innerHTML = '<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'" onclick="decreasependingapproval(this.id)"><p style="margin-bottom: 0" id="approval_'+doc.data().submit_date+'" onclick="attendanceapproval(this.id)">Accept</p></button>';
  //cell9.innerHTML ='<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'" onclick="decreasependingapproval(this.id);decreasemonthly(this.id)"><p style="margin-bottom: 0" id="denial_'+doc.data().submit_date+'" onclick="attendancedenial(this.id)">Reject</p></button>';                                
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
});
db.collection("attendance"+mail).where("attendance_status","==","Rejected")
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
var cell10 = row1.insertCell(9);
cell1.innerHTML = doc.data().submit_date;
cell2.innerHTML = doc.data().effective_date;
cell3.innerHTML = doc.data().checkin_time;
cell4.innerHTML = doc.data().checkout_time;
cell5.innerHTML = doc.data().lokasi_kerja;
cell6.innerHTML = doc.data().attendance_note;
cell7.innerHTML = doc.data().attendance_status;
//cell8.innerHTML = '<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'" onclick="decreasependingapproval(this.id)"><p style="margin-bottom: 0" id="approval_'+doc.data().submit_date+'" onclick="attendanceapproval(this.id)">Accept</p></button>';
//cell9.innerHTML ='<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'" onclick="decreasependingapproval(this.id);decreasemonthly(this.id)"><p style="margin-bottom: 0" id="denial_'+doc.data().submit_date+'" onclick="attendancedenial(this.id)">Reject</p></button>';                                
    });
})
.catch(function(error) {
    console.log("Error getting documents: ", error);
});
}     
            
function attendanceapproval(clicked_id)
  {
      var d1 = clicked_id.split("_");
      console.log(d1[2]);
      const user = firebase.auth().currentUser;
      var db = firebase.firestore();
      db.collection("approval").doc("control").get().then(function(doc) 
          {
            var myArray = doc.data().email;
            for (var i = 0; i < myArray.length; i++)
               {
                //console.log(myArray[i]);
                db.collection("attendance"+myArray[i]).doc(d1[1]).update({
                  attendance_status:"Approved"
                  
                  })

               }
               buildtableapprovalattendance(d1[0])
          });
          alert("Successfully Approved! \n Please press Refresh Button");
          
          
}

function attendancedenial(clicked_id)
{
      var d1 = clicked_id.split("_");
      console.log(d1[1]);
      const user = firebase.auth().currentUser;
      var db = firebase.firestore();
      db.collection("approval").doc("control").get().then(function(doc) 
          {
            var myArray = doc.data().email;
            for (var i = 0; i < myArray.length; i++)
               {
                console.log(myArray[i]);
                db.collection("attendance"+myArray[i]).doc(d1[1]).update({
                  attendance_status:"Rejected"
                  
                  })
                  
               }
               buildtableapprovalattendance(d1[0])
          });
          alert("Successfully Rejected! \n Please press Refresh Button");
        

}

function decreasependingapproval(mail)
  {
          var d1 = mail.split("_");
          console.log(d1[0]);
          var db = firebase.firestore();
          db.collection("attendancedashboard").doc(d1[0]).update({
              approvalpending:firebase.firestore.FieldValue.increment(-1),
              })
              
            .then(function() {
              //alert("Successfully submited! \n Please press Refresh Button");
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });


}
 
function buildtabledashboardattendance()
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
    else if (email_id==="admin_syntekportal@syntek.co.id")
    {
      division = "admin"
    }
    console.log (division)
      var db = firebase.firestore();
      db.collection("approval").doc(division).get().then(function(doc) 
          {
          var myArray = doc.data().email;
          for (var i = 0; i < myArray.length; i++)
               {
              var table = document.getElementById('dashboard_attendance_table')
              table.innerHTML = ''
              db.collection("attendancedashboard").doc(myArray[i]).get().then((doc)=>
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
              var a = sortbyperiod();
              var row1 = table.insertRow();
              var cell1 = row1.insertCell(0);
              var cell2 = row1.insertCell(1);  
              var cell3 = row1.insertCell(2);
              var cell4 = row1.insertCell(3);
              var cell5 = row1.insertCell(4);
              cell1.innerHTML = nama2; 
              if(a=="Januari - Februari")
              {
                cell2.innerHTML = '<p style="margin-bottom: 0">'+doc.data().januarifebruari+' Days</p>';
              }
              if(a=="Februari - Maret")
              {
                cell2.innerHTML = '<p style="margin-bottom: 0">'+doc.data().februarimaret+' Days</p>';
              }
              if(a=="Maret - April")
              {
                cell2.innerHTML = '<p style="margin-bottom: 0">'+doc.data().maretapril+' Days</p>';
              }
              if(a=="April - Mei")
              {
                cell2.innerHTML = '<p style="margin-bottom: 0">'+doc.data().aprilmei+' Days</p>';
              }
              if(a=="Mei - Juni")
              {
                cell2.innerHTML = '<p style="margin-bottom: 0">'+doc.data().meijuni+' Days</p>';
              }
              if(a=="Juni - Juli")
              {
                cell2.innerHTML = '<p style="margin-bottom: 0">'+doc.data().junijuli+' Days</p>';
              }
              if(a=="Juli - Agustus")
              {
                cell2.innerHTML = '<p style="margin-bottom: 0">'+doc.data().juliagustus+' Days</p>';
              }
              if(a=="Agustus - September")
              {
                cell2.innerHTML = '<p style="margin-bottom: 0">'+doc.data().agustusseptember+' Days</p>';
              }
              if(a=="September - Oktober")
              {
                cell2.innerHTML = '<p style="margin-bottom: 0">'+doc.data().septemberoktober+' Days</p>';
              }
              if(a=="Oktober - November")
              {
                cell2.innerHTML = '<p style="margin-bottom: 0">'+doc.data().oktobernovember+' Days</p>';
              }
              if(a=="November - Desember")
              {
                cell2.innerHTML = '<p style="margin-bottom: 0">'+doc.data().novemberdesember+' Days</p>';
              }
              if(a=="Desember - Januari")
              {
                cell2.innerHTML = '<p style="margin-bottom: 0">'+doc.data().desemberjanuari+' Days</p>';
              }
              cell3.innerHTML = doc.data().divisi; 
              cell4.innerHTML = '<p style="margin-bottom: 0; font-weight:'+style+'; font-size:'+size+'; color:'+color+' ">'+doc.data().approvalpending+'</p>';
              cell5.innerHTML = '<button style="padding:1px 1px;cursor: pointer" id="'+doc.data().email+'" onclick="buildtableapprovalattendance(this.id)"><p style="margin-bottom: 0">Approval</p></button>';
               });
              }
            })
}     

function searchtableattendance() 
{

  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchbyattendance").value;
  console.log(document.getElementById("searchbyattendance").value)
  filter = input.toUpperCase();
  table = document.getElementById('dashboard_attendance_table')
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) 
  {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) 
    {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) 
      {
        tr[i].style.display = "";
      } else 
      {
        tr[i].style.display = "none";
      }
    }       
  }
  console.log(sortbyperiod());
}

function sortbyperiod()
{
  var input = document.getElementById("sortbyperiodattendance").value;
return input
}

function datecheck(datecheck)
{
var d3 = datecheck.split("_");
var c = d3[2].split("-");
var db = firebase.firestore();
var check = new Date( c[0],parseInt(c[1])-1, c[2]);
var januari = new Date( 2021,0,21);  
var januari1 = new Date(2021,1,20 );
var februari = new Date( 2021,1,21);  
var februari1 = new Date(2021,2,20 );
var maret = new Date( 2021,2,21);  
var maret1 = new Date(2021,3,20 );
var april = new Date( 2021,3,21);  
var april1 = new Date(2021,4,20 );
var mei = new Date( 2021,4,21);  
var mei1 = new Date(2021,5,20 );
var juni = new Date( 2021,5,21);  
var juni1 = new Date(2021,6,20 );
var juli = new Date( 2021,6,21);  
var juli1 = new Date(2021,7,20 );
var agustus = new Date( 2021,7,21);  
var agustus1 = new Date(2021,8,20 );
var september = new Date( 2021,8,21);  
var september1 = new Date(2021,9,20 );
var oktober = new Date( 2021,9,21);  
var oktober1 = new Date(2021,10,20 );
var november = new Date(2021,10,21 );
var november1 = new Date( 2021,11,20);  
var desember = new Date(2021,11,21 );
var desember1 = new Date(2022,0,20 );
if ((check >= januari && check <= januari1 ))
  {
db.collection("attendancedashboard").doc(d3[0]).update
({
    januarifebruari:firebase.firestore.FieldValue.increment(1),

    })
    console.log("test");
  }
if ((check >= februari && check <= februari1 ))
  {
db.collection("attendancedashboard").doc(d3[0]).update
({
    februarimaret:firebase.firestore.FieldValue.increment(1),

    })
    console.log("test");
  }
if ((check >= maret && check <= maret1 ))
  {
db.collection("attendancedashboard").doc(d3[0]).update
({
    maretapril:firebase.firestore.FieldValue.increment(1),

    })
    console.log("test");
  }
if ((check >= april && check <= april1 ))
  {
db.collection("attendancedashboard").doc(d3[0]).update
({
    aprilmei:firebase.firestore.FieldValue.increment(1),

    })
    console.log("test");
  }
if ((check >= mei && check <= mei1 ))
  {
db.collection("attendancedashboard").doc(d3[0]).update
({
    meijuni:firebase.firestore.FieldValue.increment(1),

    })
    console.log("test");
  }
if ((check >= juni && check <= juni1 ))
  {
db.collection("attendancedashboard").doc(d3[0]).update
({
    junijuli:firebase.firestore.FieldValue.increment(1),

    })
    console.log("test");
  }
if ((check >= juli && check <= juli1 ))
  {
db.collection("attendancedashboard").doc(d3[0]).update
({
    juliagustus:firebase.firestore.FieldValue.increment(1),

    })
    console.log("test");
  }
if ((check >= agustus && check <= agustus1 ))
  {
db.collection("attendancedashboard").doc(d3[0]).update
({
    agustusseptember:firebase.firestore.FieldValue.increment(1),

    })
    console.log("test");
  }
if ((check >= september && check <= september1 ))
  {
db.collection("attendancedashboard").doc(d3[0]).update
({
    septemberoktober:firebase.firestore.FieldValue.increment(1),

    })
    console.log("test");
  }
if ((check >= oktober && check <= oktober1 ))
  {
db.collection("attendancedashboard").doc(d3[0]).update
({
    oktobernovember:firebase.firestore.FieldValue.increment(1),

    })
    console.log("test");
  }
if ((check >= november && check <= november1 ))
  {
db.collection("attendancedashboard").doc(d3[0]).update
({
    novemberdesember:firebase.firestore.FieldValue.increment(1),

    })
    console.log("test");
  }
if ((check >= desember && check <= desember1 ))
  {
db.collection("attendancedashboard").doc(d3[0]).update
({
    desemberjanuari:firebase.firestore.FieldValue.increment(1),

    })
    console.log("test");
  }

}