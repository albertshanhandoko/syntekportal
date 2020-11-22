function buildTable1(){
var db = firebase.firestore();
    db.collection("database").doc("employeeinfo")
    .onSnapshot(function(doc) {
var myArray = doc.data().latest;
$('#search-input').on('keyup',function()
	{
	var value = $(this).val()
    console.log('Value:',value)
    var data = searchTable(value, myArray)
    buildTable(data)
    })

$('th').on('click', function(){
        var column = $(this).data('colEMPLOYEE_NAME')
        var order = $(this).data('order')
        var text = $(this).html()
        text = text.substring(0, text.length - 1);
        
        
        
        if (order == 'desc'){
           myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
           $(this).data("order","asc");
           text += '&#9660'
        }else{
           myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
           $(this).data("order","desc");
           text += '&#9650'
        }
   
       $(this).html(text)
       buildTable(myArray)
       })
 
buildTable(myArray)

});
function searchTable(value, data)
{
    var searchby =document.getElementById("SEARCHBY").value;
    var filteredData=[]
    console.log(searchby)
    if(searchby=="DIVISI")
    {
    for (var i = 0; i<data.length;i++)
        {
    	value=value.toLowerCase()

        var name = data[i].DIVISI.toLowerCase()
        
        if(name.includes(value))
            {
        filteredData.push(data[i])
            }
        }
    }
    else if(searchby=="EMPLOYEENAME")
    {
    for (var i = 0; i<data.length;i++)
        {
    	value=value.toLowerCase()

        var name = data[i].EMPLOYEENAME.toLowerCase()
        
        if(name.includes(value))
            {
        filteredData.push(data[i])
            }
        }
    }
    else if(searchby=="POSITION")
    {
    for (var i = 0; i<data.length;i++)
        {
    	value=value.toLowerCase()

        var name = data[i].POSITION.toLowerCase()
        
        if(name.includes(value))
            {
        filteredData.push(data[i])
            }
        }
    }
    else if(searchby=="FUNGSI")
    {
    for (var i = 0; i<data.length;i++)
        {
    	value=value.toLowerCase()

        var name = data[i].FUNGSI.toLowerCase()
        
        if(name.includes(value))
            {
        filteredData.push(data[i])
            }
        }
    }
    else if(searchby=="LEVEL")
    {
    for (var i = 0; i<data.length;i++)
        {
    	value=value.toLowerCase()

        var name = data[i].LEVEL.toLowerCase()
        
        if(name.includes(value))
            {
        filteredData.push(data[i])
            }
        }
    }
    else if(searchby=="TEMPATLAHIR")
    {
    for (var i = 0; i<data.length;i++)
        {
    	value=value.toLowerCase()

        var name = data[i].TEMPATLAHIR.toLowerCase()
        
        if(name.includes(value))
            {
        filteredData.push(data[i])
            }
        }
    }
    else if(searchby=="JENIS_KELAMIN")
    {
    for (var i = 0; i<data.length;i++)
        {
    	value=value.toLowerCase()

        var name = data[i].JENIS_KELAMIN.toLowerCase()
        
        if(name.includes(value))
            {
        filteredData.push(data[i])
            }
        }
    }
        return filteredData
}
     
function buildTable(data)
{
    var table = document.getElementById('myTable')
    totaldata = data.length
    console.log(data.length)
    table.innerHTML = ''
    for (var i = 0; i < 10; i++){
        var colNO= `NO-${i}`
        var colSN= `SN-${i}`
        var colEMPLOYEE_NAME= `EMPLOYEE_NAME-${i}`
        var colDIVISI= `DIVISI-${i}`
        var colPOSITION= `POSITION-${i}`
        var colFUNGSI= `FUNGSI-${i}`
        var colLEVEL= `LEVEL-${i}`
        var colPLACE_OF_BIRTH= `PLACE_OF_BIRTH-${i}`
        var colJENIS_KELAMIN= `JENIS_KELAMIN-${i}`
        var colALAMAT= `ALAMAT-${i}`
        var colNO_TLP= `NO_TLP-${i}`
        var colEmail= `Email-${i}`
    var row = `<tr>
    <td>${data[i].NO}</td>
    <td>${data[i].SN}</td>
    <td>${data[i].EMPLOYEENAME}</td>
    <td>${data[i].DIVISI}</td>
    <td>${data[i].POSITION}</td>
    <td>${data[i].FUNGSI}</td>
    <td>${data[i].LEVEL}</td>
    <td>${data[i].TEMPATLAHIR}</td>
    <td>${data[i].JENIS_KELAMIN}</td>
    <td>${data[i].ALAMAT}</td>
    <td>${data[i].HP}</td>
    <td>${data[i].EMAIL}</td>
                   </tr>`
        table.innerHTML += row
    }
}
}
function buildTable2(){
    var db = firebase.firestore();
        db.collection("database").doc("employeeinfo")
        .onSnapshot(function(doc) {
    var myArray = doc.data().latest;
    $('#search-input').on('keyup',function()
        {
        var value = $(this).val()
        console.log('Value:',value)
        var data = searchTable(value, myArray)
        buildTable(data)
        })
    
    $('th').on('click', function(){
            var column = $(this).data('colEMPLOYEE_NAME')
            var order = $(this).data('order')
            var text = $(this).html()
            text = text.substring(0, text.length - 1);
            
            
            
            if (order == 'desc'){
               myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
               $(this).data("order","asc");
               text += '&#9660'
            }else{
               myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
               $(this).data("order","desc");
               text += '&#9650'
            }
       
           $(this).html(text)
           buildTable(myArray)
           })
     
    buildTable(myArray)
    
    });
    function searchTable(value, data)
    {
        var filteredData=[]
        for (var i = 0; i<data.length;i++)
        {
            value=value.toLowerCase()
    
            var name = data[i].EMPLOYEE_NAME.toLowerCase()
            
            if(name.includes(value))
            {
            filteredData.push(data[i])
            }
        }
            return filteredData
    }
         
    function buildTable(data)
    {
        var table = document.getElementById('myTable')
        table.innerHTML = ''
        for (var i = 10; i < 20; i++){
                var colNO= `NO-${i}`
                var colSN= `SN-${i}`
                var colEMPLOYEE_NAME= `EMPLOYEE_NAME-${i}`
                var colDIVISI= `DIVISI-${i}`
                var colPOSITION= `POSITION-${i}`
                var colFUNGSI= `FUNGSI-${i}`
                var colLEVEL= `LEVEL-${i}`
                var colPLACE_OF_BIRTH= `PLACE_OF_BIRTH-${i}`
                var colJENIS_KELAMIN= `JENIS_KELAMIN-${i}`
                var colALAMAT= `ALAMAT-${i}`
                var colNO_TLP= `NO_TLP-${i}`
                var colEmail= `Email-${i}`
            var row = `<tr>
            <td>${data[i].NO}</td>
            <td>${data[i].SN}</td>
            <td>${data[i].EMPLOYEENAME}</td>
            <td>${data[i].DIVISI}</td>
            <td>${data[i].POSITION}</td>
            <td>${data[i].FUNGSI}</td>
            <td>${data[i].LEVEL}</td>
            <td>${data[i].TEMPATLAHIR}</td>
            <td>${data[i].JENIS_KELAMIN}</td>
            <td>${data[i].ALAMAT}</td>
            <td>${data[i].HP}</td>
            <td>${data[i].EMAIL}</td>
                       </tr>`
            table.innerHTML += row
        }
    }
}
function buildTable3(){
    var db = firebase.firestore();
        db.collection("database").doc("employeeinfo")
        .onSnapshot(function(doc) {
    var myArray = doc.data().latest;
    $('#search-input').on('keyup',function()
        {
        var value = $(this).val()
        console.log('Value:',value)
        var data = searchTable(value, myArray)
        buildTable(data)
        })
    
    $('th').on('click', function(){
            var column = $(this).data('colEMPLOYEE_NAME')
            var order = $(this).data('order')
            var text = $(this).html()
            text = text.substring(0, text.length - 1);
            
            
            
            if (order == 'desc'){
               myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
               $(this).data("order","asc");
               text += '&#9660'
            }else{
               myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
               $(this).data("order","desc");
               text += '&#9650'
            }
       
           $(this).html(text)
           buildTable(myArray)
           })
     
    buildTable(myArray)
    
    });
    function searchTable(value, data)
    {
        var filteredData=[]
        for (var i = 0; i<data.length;i++)
        {
            value=value.toLowerCase()
    
            var name = data[i].EMPLOYEE_NAME.toLowerCase()
            
            if(name.includes(value))
            {
            filteredData.push(data[i])
            }
        }
            return filteredData
    }
         
    function buildTable(data)
    {
        var table = document.getElementById('myTable')
        table.innerHTML = ''
        for (var i = 20; i < 30; i++){
            var colNO= `NO-${i}`
            var colSN= `SN-${i}`
            var colEMPLOYEE_NAME= `EMPLOYEE_NAME-${i}`
            var colDIVISI= `DIVISI-${i}`
            var colPOSITION= `POSITION-${i}`
            var colFUNGSI= `FUNGSI-${i}`
            var colLEVEL= `LEVEL-${i}`
            var colPLACE_OF_BIRTH= `PLACE_OF_BIRTH-${i}`
            var colJENIS_KELAMIN= `JENIS_KELAMIN-${i}`
            var colALAMAT= `ALAMAT-${i}`
            var colNO_TLP= `NO_TLP-${i}`
            var colEmail= `Email-${i}`
        var row = `<tr>
        <td>${data[i].NO}</td>
        <td>${data[i].SN}</td>
        <td>${data[i].EMPLOYEENAME}</td>
        <td>${data[i].DIVISI}</td>
        <td>${data[i].POSITION}</td>
        <td>${data[i].FUNGSI}</td>
        <td>${data[i].LEVEL}</td>
        <td>${data[i].TEMPATLAHIR}</td>
        <td>${data[i].JENIS_KELAMIN}</td>
        <td>${data[i].ALAMAT}</td>
        <td>${data[i].HP}</td>
        <td>${data[i].EMAIL}</td>
                       </tr>`
            table.innerHTML += row
        }
    }
}
function buildTable4(){
    var db = firebase.firestore();
        db.collection("database").doc("employeeinfo")
        .onSnapshot(function(doc) {
    var myArray = doc.data().latest;
    $('#search-input').on('keyup',function()
        {
        var value = $(this).val()
        console.log('Value:',value)
        var data = searchTable(value, myArray)
        buildTable(data)
        })
    
    $('th').on('click', function(){
            var column = $(this).data('colEMPLOYEE_NAME')
            var order = $(this).data('order')
            var text = $(this).html()
            text = text.substring(0, text.length - 1);
            
            
            
            if (order == 'desc'){
               myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
               $(this).data("order","asc");
               text += '&#9660'
            }else{
               myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
               $(this).data("order","desc");
               text += '&#9650'
            }
       
           $(this).html(text)
           buildTable(myArray)
           })
     
    buildTable(myArray)
    
    });
    function searchTable(value, data)
    {
        var filteredData=[]
        for (var i = 0; i<data.length;i++)
        {
            value=value.toLowerCase()
    
            var name = data[i].EMPLOYEE_NAME.toLowerCase()
            
            if(name.includes(value))
            {
            filteredData.push(data[i])
            }
        }
            return filteredData
    }
         
    function buildTable(data)
    {
        var table = document.getElementById('myTable')
        table.innerHTML = ''
        for (var i = 30; i < 40; i++){
            var colNO= `NO-${i}`
            var colSN= `SN-${i}`
            var colEMPLOYEE_NAME= `EMPLOYEE_NAME-${i}`
            var colDIVISI= `DIVISI-${i}`
            var colPOSITION= `POSITION-${i}`
            var colFUNGSI= `FUNGSI-${i}`
            var colLEVEL= `LEVEL-${i}`
            var colPLACE_OF_BIRTH= `PLACE_OF_BIRTH-${i}`
            var colJENIS_KELAMIN= `JENIS_KELAMIN-${i}`
            var colALAMAT= `ALAMAT-${i}`
            var colNO_TLP= `NO_TLP-${i}`
            var colEmail= `Email-${i}`
        var row = `<tr>
        <td>${data[i].NO}</td>
        <td>${data[i].SN}</td>
        <td>${data[i].EMPLOYEENAME}</td>
        <td>${data[i].DIVISI}</td>
        <td>${data[i].POSITION}</td>
        <td>${data[i].FUNGSI}</td>
        <td>${data[i].LEVEL}</td>
        <td>${data[i].TEMPATLAHIR}</td>
        <td>${data[i].JENIS_KELAMIN}</td>
        <td>${data[i].ALAMAT}</td>
        <td>${data[i].HP}</td>
        <td>${data[i].EMAIL}</td>
                       </tr>`
            table.innerHTML += row
        }
    }
}
function buildTable5(){
    var db = firebase.firestore();
        db.collection("database").doc("employeeinfo")
        .onSnapshot(function(doc) {
    var myArray = doc.data().latest;
    $('#search-input').on('keyup',function()
        {
        var value = $(this).val()
        console.log('Value:',value)
        var data = searchTable(value, myArray)
        buildTable(data)
        })
    
    $('th').on('click', function(){
            var column = $(this).data('colEMPLOYEE_NAME')
            var order = $(this).data('order')
            var text = $(this).html()
            text = text.substring(0, text.length - 1);
            
            
            
            if (order == 'desc'){
               myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
               $(this).data("order","asc");
               text += '&#9660'
            }else{
               myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
               $(this).data("order","desc");
               text += '&#9650'
            }
       
           $(this).html(text)
           buildTable(myArray)
           })
     
    buildTable(myArray)
    
    });
    function searchTable(value, data)
    {
        var filteredData=[]
        for (var i = 0; i<data.length;i++)
        {
            value=value.toLowerCase()
    
            var name = data[i].EMPLOYEE_NAME.toLowerCase()
            
            if(name.includes(value))
            {
            filteredData.push(data[i])
            }
        }
            return filteredData
    }
         
    function buildTable(data)
    {
        var table = document.getElementById('myTable')
        table.innerHTML = ''
        for (var i = 40; i < data.length; i++){
            var colNO= `NO-${i}`
            var colSN= `SN-${i}`
            var colEMPLOYEE_NAME= `EMPLOYEE_NAME-${i}`
            var colDIVISI= `DIVISI-${i}`
            var colPOSITION= `POSITION-${i}`
            var colFUNGSI= `FUNGSI-${i}`
            var colLEVEL= `LEVEL-${i}`
            var colPLACE_OF_BIRTH= `PLACE_OF_BIRTH-${i}`
            var colJENIS_KELAMIN= `JENIS_KELAMIN-${i}`
            var colALAMAT= `ALAMAT-${i}`
            var colNO_TLP= `NO_TLP-${i}`
            var colEmail= `Email-${i}`
        var row = `<tr>
        <td>${data[i].NO}</td>
        <td>${data[i].SN}</td>
        <td>${data[i].EMPLOYEENAME}</td>
        <td>${data[i].DIVISI}</td>
        <td>${data[i].POSITION}</td>
        <td>${data[i].FUNGSI}</td>
        <td>${data[i].LEVEL}</td>
        <td>${data[i].TEMPATLAHIR}</td>
        <td>${data[i].JENIS_KELAMIN}</td>
        <td>${data[i].ALAMAT}</td>
        <td>${data[i].HP}</td>
        <td>${data[i].EMAIL}</td>
                       </tr>`
            table.innerHTML += row
        }
    }
}


/*


for (var i = 0; i < 10; i++){
			var colNO= `NO-${i}`
			var colSN= `SN-${i}`
			var colEMPLOYEE_NAME= `EMPLOYEE_NAME-${i}`
			var colDIVISI= `DIVISI-${i}`
			var colPOSITION= `POSITION-${i}`
			var colFUNGSI= `FUNGSI-${i}`
			var colLEVEL= `LEVEL-${i}`
			var colst_Work= `st_Work-${i}`
			var colNAMA_UNIVERSITAS_TERAKHIR= `NAMA_UNIVERSITAS_TERAKHIR-${i}`
			var colJURUSAN= `JURUSAN-${i}`
			var colLEVEL_= `LEVEL_-${i}`
			var colTIER= `TIER-${i}`
			var colJOIN_DATE= `JOIN_DATE-${i}`
			var colSTATUS_1= `STATUS_1-${i}`
			var colSTATUS_2= `STATUS_2-${i}`
			var colNO_KTP= `NO_KTP-${i}`
			var colNo_KK= `No_KK-${i}`
			var colNO_NPWP= `NO_NPWP-${i}`
			var colNO_BPJS_TK= `NO_BPJS_TK-${i}`
			var colNO_BPJS_KES= `NO_BPJS_KES-${i}`
			var colNO_REKENING= `NO_REKENING-${i}`
			var colNAMA_BANK= `NAMA_BANK-${i}`
			var colPLACE_OF_BIRTH= `PLACE_OF_BIRTH-${i}`
			var colDATE_OF_BIRTH= `DATE_OF_BIRTH-${i}`
			var colJENIS_KELAMIN= `JENIS_KELAMIN-${i}`
			var colALAMAT= `ALAMAT-${i}`
			var colNO_TLP= `NO_TLP-${i}`
			var colEmail= `Email-${i}`
        var row = `<tr>
					<td>${data[i].NO}</td>
					<td>${data[i].SN}</td>
					<td>${data[i].EMPLOYEENAME}</td>
					<td>${data[i].DIVISI}</td>
					<td>${data[i].POSITION}</td>
					<td>${data[i].FUNGSI}</td>
					<td>${data[i].LEVEL}</td>
					<td>${data[i].UNIVERSITASTERAKHIR}</td>
					<td>${data[i].JURUSAN}</td>
					<td>${data[i].LEVEL}</td>
					<td>${data[i].TIER}</td>
					<td>${data[i].STATUSPERNIKAHAN}</td>
					<td>${data[i].STATUS2}</td>
					<td>${data[i].KTP}</td>
					<td>${data[i].KK}</td>
					<td>${data[i].NPWP}</td>
					<td>${data[i].BPJSTK}</td>
					<td>${data[i].BPJSKES}</td>
					<td>${data[i].REKENING}</td>
					<td>${data[i].NAMABANK}</td>
					<td>${data[i].TEMPATLAHIR}</td>
					<td>${data[i].JENIS_KELAMIN}</td>
					<td>${data[i].ALAMAT}</td>
					<td>${data[i].HP}</td>
                    <td>${data[i].EMAIL}</td>
                    <td>${data[i].APPROVALLINE}</td>
                    <td>${data[i].OVERTIME}</td>
                    <td>${data[i].BASICSALARY}</td>
                   </tr>`
        table.innerHTML += row
    }


<th  data-colname="STATUS_2" data-order="desc">STATUS_2</th>
<th  data-colname="NO_KTP" data-order="desc">KTP</th>
<th  data-colname="No_KK" data-order="desc">KK</th>
<th  data-colname="NO_NPWP" data-order="desc">NPWP</th>
<th  data-colname="NO_BPJS_TK" data-order="desc">BPJS TK</th>
<th  data-colname="NO_BPJS_KES" data-order="desc">BPJS KES</th>
<th  data-colname="NO_REKENING" data-order="desc">REKENING</th>
<th  data-colname="NAMA_BANK" data-order="desc">NAMA BANK</th>
<th  data-colname="PLACE_OF_BIRTH" data-order="desc">TEMPAT LAHIR</th>
<th  data-colname="JENIS_KELAMIN" data-order="desc">JENIS_KELAMIN</th>
<th  data-colname="ALAMAT" data-order="desc" >ALAMAT</th>
<th  data-colname="NO_TLP" data-order="desc">HP</th>
<th  data-colname="Email" data-order="desc">EMAIL</th>
<th  data-colname="Approval_line" data-order="desc">APPROVAL LINE</th>
<th  data-colname="Overtime" data-order="desc">OVERTIME</th>
<th  data-colname="Basic_salary" data-order="desc">BASIC SALARY</th>


    */