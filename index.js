firebase.auth().onAuthStateChanged(function(user)
{
  if (user)
  {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    const user = firebase.auth().currentUser;
    var email_id = user.email;
   // var db = firebase.firestore();
   // db.collection("database").doc(email_id)
   // .onSnapshot(function(doc) {
    //    console.log("Current data: ", doc.data().agama_last);
   // });
   var nama = email_id.replace('@syntek.co.id','');
   document.getElementById("user_para_dashboard").innerHTML = "Good Morning,"+nama;

   var storageRef=firebase.storage().ref('images/'+email_id);
   storageRef.getDownloadURL().then(function(url) {
     var img = document.getElementById('pasfoto');
     var img1 = document.getElementById('pasfoto1');
     img.src = url;
     img1.src =url;
   }).catch(function(error) {
     // Handle any errors
   });



    if(user != null){
    
      document.getElementById("user_para").innerHTML = email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";


  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
function logout()
{
  firebase.auth().signOut();
}
function dashboard_page()
{
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("employeeinformation").style.display = "none";
    document.getElementById("dashboard_attendance").style.display = "none";
    document.getElementById("attendance").style.display = "none";
    document.getElementById("dashboard_timeoff").style.display = "none";
    document.getElementById("timeoff").style.display = "none";
    document.getElementById("dashboard_overtime").style.display = "none";
    document.getElementById("overtime").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("registeremployee").style.display = "none";
    document.getElementById("approval_overtime").style.display = "none";
    document.getElementById("approval_timeoff").style.display = "none";
    document.getElementById("approval_attendance").style.display = "none";

}
function employeeinformation_page()
{
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("employeeinformation").style.display = "block";
  document.getElementById("dashboard_attendance").style.display = "none";
  document.getElementById("attendance").style.display = "none";
  document.getElementById("dashboard_timeoff").style.display = "none";
  document.getElementById("timeoff").style.display = "none";
  document.getElementById("dashboard_overtime").style.display = "none";
  document.getElementById("overtime").style.display = "none";
  document.getElementById("profile").style.display = "none";
  document.getElementById("registeremployee").style.display = "none";
  document.getElementById("approval_overtime").style.display = "none";
  document.getElementById("approval_timeoff").style.display = "none";
  document.getElementById("approval_attendance").style.display = "none";
}
function attendance_page()
{
    const user = firebase.auth().currentUser;
    var email_id = user.email;
    if (email_id==="admin_synkrona@syntek.co.id" || email_id==="admin_operational@syntek.co.id" || email_id==="admin_energy@syntek.co.id" || email_id==="admin_control@syntek.co.id"|| email_id==="admin_syntekportal@syntek.co.id")
    {
      document.getElementById("dashboard").style.display = "none";
      document.getElementById("employeeinformation").style.display = "none";
      document.getElementById("dashboard_attendance").style.display = "block";
      document.getElementById("attendance").style.display = "none";
      document.getElementById("dashboard_timeoff").style.display = "none";
      document.getElementById("timeoff").style.display = "none";
      document.getElementById("dashboard_overtime").style.display = "none";
      document.getElementById("overtime").style.display = "none";
      document.getElementById("profile").style.display = "none";
      document.getElementById("registeremployee").style.display = "none";
      document.getElementById("approval_overtime").style.display = "none";
      document.getElementById("approval_timeoff").style.display = "none";
      document.getElementById("approval_attendance").style.display = "none";
    }
    else{
      document.getElementById("dashboard").style.display = "none";
      document.getElementById("employeeinformation").style.display = "none";
      document.getElementById("dashboard_attendance").style.display = "none";
      document.getElementById("attendance").style.display = "block";
      document.getElementById("dashboard_timeoff").style.display = "none";
      document.getElementById("timeoff").style.display = "none";
      document.getElementById("dashboard_overtime").style.display = "none";
      document.getElementById("overtime").style.display = "none";
      document.getElementById("profile").style.display = "none";
      document.getElementById("registeremployee").style.display = "none";
      document.getElementById("approval_overtime").style.display = "none";
      document.getElementById("approval_timeoff").style.display = "none";
      document.getElementById("approval_attendance").style.display = "none";
    }
}
function timeoff_page()
{
  const user = firebase.auth().currentUser;
  var email_id = user.email;
  if (email_id==="admin_synkrona@syntek.co.id" || email_id==="admin_operational@syntek.co.id" || email_id==="admin_energy@syntek.co.id" || email_id==="admin_control@syntek.co.id")
  {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("employeeinformation").style.display = "none";
    document.getElementById("dashboard_attendance").style.display = "none";
    document.getElementById("attendance").style.display = "none";
    document.getElementById("dashboard_timeoff").style.display = "block";
    document.getElementById("timeoff").style.display = "none";
    document.getElementById("dashboard_overtime").style.display = "none";
    document.getElementById("overtime").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("registeremployee").style.display = "none";
    document.getElementById("approval_overtime").style.display = "none";
    document.getElementById("approval_timeoff").style.display = "none";
    document.getElementById("approval_attendance").style.display = "none";
  }
  else{
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("employeeinformation").style.display = "none";
    document.getElementById("dashboard_attendance").style.display = "none";
    document.getElementById("attendance").style.display = "none";
    document.getElementById("dashboard_timeoff").style.display = "none";
    document.getElementById("timeoff").style.display = "block";
    document.getElementById("dashboard_overtime").style.display = "none";
    document.getElementById("overtime").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("registeremployee").style.display = "none";
    document.getElementById("approval_overtime").style.display = "none";
    document.getElementById("approval_timeoff").style.display = "none";
    document.getElementById("approval_attendance").style.display = "none";
  }
}
function overtime_page()
{
  const user = firebase.auth().currentUser;
  var email_id = user.email;
  if (email_id==="admin_synkrona@syntek.co.id" || email_id==="admin_operational@syntek.co.id" || email_id==="admin_energy@syntek.co.id" || email_id==="admin_control@syntek.co.id")
  {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("employeeinformation").style.display = "none";
    document.getElementById("dashboard_attendance").style.display = "none";
    document.getElementById("attendance").style.display = "none";
    document.getElementById("dashboard_timeoff").style.display = "none";
    document.getElementById("timeoff").style.display = "none";
    document.getElementById("dashboard_overtime").style.display = "block";
    document.getElementById("overtime").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("registeremployee").style.display = "none";
    document.getElementById("approval_overtime").style.display = "none";
    document.getElementById("approval_timeoff").style.display = "none";
    document.getElementById("approval_attendance").style.display = "none";
  }
  else{
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("employeeinformation").style.display = "none";
    document.getElementById("dashboard_attendance").style.display = "none";
    document.getElementById("attendance").style.display = "none";
    document.getElementById("dashboard_timeoff").style.display = "none";
    document.getElementById("timeoff").style.display = "none";
    document.getElementById("dashboard_overtime").style.display = "none";
    document.getElementById("overtime").style.display = "block";
    document.getElementById("profile").style.display = "none";
    document.getElementById("registeremployee").style.display = "none";
    document.getElementById("approval_overtime").style.display = "none";
    document.getElementById("approval_timeoff").style.display = "none";
    document.getElementById("approval_attendance").style.display = "none";
  }
}
function profile_page()
{
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("employeeinformation").style.display = "none";
  document.getElementById("dashboard_attendance").style.display = "none";
  document.getElementById("attendance").style.display = "none";
  document.getElementById("dashboard_timeoff").style.display = "none";
  document.getElementById("timeoff").style.display = "none";
  document.getElementById("dashboard_overtime").style.display = "none";
  document.getElementById("overtime").style.display = "none";
  document.getElementById("profile").style.display = "block";
  document.getElementById("registeremployee").style.display = "none";
  document.getElementById("approval_overtime").style.display = "none";
  document.getElementById("approval_timeoff").style.display = "none";
  document.getElementById("approval_attendance").style.display = "none";

    var db = firebase.firestore();
    const user = firebase.auth().currentUser;
    var email_id = user.email;
    db.collection("database_employee").where("EMAIL","==",email_id)
    .get()
    .then(function(querySnapshot) 
    {
    querySnapshot.forEach(function(doc) 
      {
    console.log(doc.data().BPJSTK);
    document.getElementById("sn").value =doc.data().SN;
    document.getElementById("email").value =doc.data().EMAIL;
    document.getElementById("employeename").value =doc.data().EMPLOYEENAME;
    document.getElementById("alamat").value =doc.data().ALAMAT;
    document.getElementById("ktp").value =doc.data().KTP;
    document.getElementById("tempatlahir").value =doc.data().TEMPATLAHIR;
    document.getElementById("kk").value =doc.data().KK;
    document.getElementById("jurusan").value =doc.data().JURUSAN;
    document.getElementById("hp").value =doc.data().HP;
    document.getElementById("level").value =doc.data().LEVEL;
    document.getElementById("universitasterakhir").value =doc.data().UNIVERSITASTERAKHIR;
    document.getElementById("tier").value =doc.data().TIER;
    document.getElementById("jeniskelamin").value =doc.data().GENDER;
    document.getElementById("statuspernikahan").value =doc.data().STATUSPERNIKAHAN;
    document.getElementById("golongandarah").value =doc.data().GOLONGANDARAH;
    document.getElementById("status2").value =doc.data().STATUS2;
    document.getElementById("division").value =doc.data().DIVISION;
    document.getElementById("position").value =doc.data().POSITION;
    document.getElementById("fungsi").value =doc.data().FUNGSI;
    //document.getElementById("employementstatus").value =doc.data().EMPLOYMENTSTATUS;
    document.getElementById("joindate").value =doc.data().JOINDATE;
    document.getElementById("approvalline").value =doc.data().APPROVALLINE;
    document.getElementById("basicsalary").value =doc.data().SALARY;
    document.getElementById("npwp").value =doc.data().NPWP;
    document.getElementById("namarekening").value =doc.data().NAMAREKENING;
    document.getElementById("namabank").value =doc.data().NAMABANK;
    document.getElementById("rekening").value =doc.data().REKENING;
    document.getElementById("bpjskes").value =doc.data().BPJSKES;
    document.getElementById("bpjstk").value =doc.data().BPJSTK;
    document.getElementById("overtime").value =doc.data().OVERTIME;
      });
    })

















}
function registernewemployee_page()
{
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("employeeinformation").style.display = "none";
  document.getElementById("dashboard_attendance").style.display = "none";
  document.getElementById("attendance").style.display = "none";
  document.getElementById("dashboard_timeoff").style.display = "none";
  document.getElementById("timeoff").style.display = "none";
  document.getElementById("dashboard_overtime").style.display = "none";
  document.getElementById("overtime").style.display = "none";
  document.getElementById("profile").style.display = "none";
  document.getElementById("registeremployee").style.display = "block";
  document.getElementById("approval_overtime").style.display = "none";
  document.getElementById("approval_timeoff").style.display = "none";
  document.getElementById("approval_attendance").style.display = "none";
}
function submitregister()
{
  const user = firebase.auth().currentUser;
  var employee_iddb= document.getElementById("employee_id").value;
  var email_addressdb= document.getElementById("email_address").value;
  var first_namedb= document.getElementById("first_name").value;
  var last_namedb= document.getElementById("last_name").value;
  var no_ktpdb= document.getElementById("no_ktp").value;
  var alamatdb= document.getElementById("alamat").value;
  var no_kkdb= document.getElementById("no_kk").value;
  var no_telepondb= document.getElementById("no_telepon").value;
  var no_hpdb= document.getElementById("no_hp").value;
  var first_workdb= document.getElementById("first_work").value;
  var pendidikan_terakhirdb= document.getElementById("pendidikan_terakhir").value;
  var jurusandb= document.getElementById("jurusan").value;
  var genderdb= document.getElementById("gender").value;
  var level_pendidikandb= document.getElementById("level_pendidikan").value;
  var golongan_darahdb= document.getElementById("golongan_darah").value;
  var status_pernikahandb= document.getElementById("status_pernikahan").value;
  var agamadb= document.getElementById("agama").value;
  var divisiondb= document.getElementById("division").value;
  var job_positiondb= document.getElementById("job_position").value;
  var perusahaan_terdaftardb= document.getElementById("perusahaan_terdaftar").value;
  var employment_statusdb= document.getElementById("employment_status").value;
  var job_leveldb= document.getElementById("job_level").value;
  var position_namedb= document.getElementById("position_name").value;
  var join_datedb= document.getElementById("join_date").value;
  var approval_linedb= document.getElementById("approval_line").value;
  var basic_salarydb= document.getElementById("basic_salary").value;
  var npwpdb= document.getElementById("npwp").value;
  var ptkp_statusdb= document.getElementById("ptkp_status").value;
  var status_wajibpajakdb= document.getElementById("status_wajibpajak").value;
  var nama_rekeningdb= document.getElementById("nama_rekening").value;
  var no_rekeningdb= document.getElementById("no_rekening").value;
  var nama_bankdb= document.getElementById("nama_bank").value;
  var bpjs_ketenagakerjaandb= document.getElementById("bpjs_ketenagakerjaan").value;
  var bpjs_kesehatandb= document.getElementById("bpjs_kesehatan").value;
  var overtimedb= document.getElementById("overtime_input").value;
  
  var db = firebase.firestore();
  db.collection("database").doc(email_addressdb).set({
    employee_id_last:employee_iddb,
    email_address_last:email_addressdb,
    first_name_last:first_namedb,
    last_name_last:last_namedb,
    no_ktp_last:no_ktpdb,
    alamat_last:alamatdb,
    no_kk_last:no_kkdb,
    no_telepon_last:no_telepondb,
    no_hp_last:no_hpdb,
    first_work_last:first_workdb,
    pendidikan_terakhir_last:pendidikan_terakhirdb,
    jurusan_last:jurusandb,
    gender_last:genderdb,
    level_pendidikan_last:level_pendidikandb,
    golongan_darah_last:golongan_darahdb,
    status_pernikahan_last:status_pernikahandb,
    agama_last:agamadb,
    division_last:divisiondb,
    job_position_last:job_positiondb,
    perusahaan_terdaftar_last:perusahaan_terdaftardb,
    employment_status_last:employment_statusdb,
    job_level_last:job_leveldb,
    position_name_last:position_namedb,
    join_date_last:join_datedb,
    approval_line_last:approval_linedb,
    basic_salary_last:basic_salarydb,
    npwp_last:npwpdb,
    ptkp_status_last:ptkp_statusdb,
    status_wajibpajak_last:status_wajibpajakdb,
    nama_rekening_last:nama_rekeningdb,
    no_rekening_last:no_rekeningdb,
    nama_bank_last:nama_bankdb,
    bpjs_ketenagakerjaan_last:bpjs_ketenagakerjaandb,
    bpjs_kesehatan_last:bpjs_kesehatandb,
    overtime_last:overtimedb
  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
}

