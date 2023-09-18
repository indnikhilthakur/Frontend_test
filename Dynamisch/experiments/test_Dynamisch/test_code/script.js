// alert("hello")

// curd  create delete , read ,delete 
// global variable
var row = null;

function Submit() {
	// alert("this is submit button")
	console.log("hello")
	let dataenter = retrievedata();
	let readdata = readingdatafromlocalstroage(dataenter);
	if (dataenter == false) {
		msg.innerHTML = "please enter data"
	}
	else {
		if (row == null) {
			insert(readdata);
			msg.innerHTML = "Data entered"
		}
		else {
			update();
			msg.innerHTML = "Data updated"
		}
	}


}
// create 
// retrieveing data from form

function retrievedata() {
	let studentname = document.getElementById('studentname').value;
	let rollno = document.getElementById('rollno').value;
	let subject = document.getElementById('subject').value;
	let marks = document.getElementById('marks').value;

	let arr = [studentname, rollno, subject, marks];
	if (arr.includes("")) {
		return false
	}
	else {
		return (arr);
	}



}
// data in local storage
function readingdatafromlocalstroage(dataenter) {
	// storing data in local Storage
	let sn = localStorage.setItem("Studentname", dataenter[0]);
	let rn = localStorage.setItem("rollno", dataenter[1]);
	let sub = localStorage.setItem("subject", dataenter[2]);
	let mk = localStorage.setItem("marks", dataenter[3]);


	// getting values  from local to table
	let sn1 = localStorage.getItem("Studentname", sn);
	let rn1 = localStorage.getItem("rollno", rn);
	let sub1 = localStorage.getItem("subject", sub);
	let mk1 = localStorage.getItem("marks", mk);

	let arr1 = [sn1, rn1, sub1, mk1]
	return arr1

}
// insert 
function insert(readdata) {
	var row = table.insertRow();
	row.insertCell(0).innerHTML = readdata[0];
	row.insertCell(1).innerHTML = readdata[1];
	row.insertCell(2).innerHTML = readdata[2];
	row.insertCell(3).innerHTML = readdata[3];
	row.insertCell(4).innerHTML = `<button onclick=edit(this)>edit</button>
	<button onclick="remove(this)">delete</button>`;
	// let cell1=row.insertCell(0);
	// let cell2=row.insertCell(1);
	// let cell3=row.insertCell(2);
	// let cell4=row.insertCell(3);

	// cell1.innerHTML=readdata[0];
	// cell2.innerHTML=readdata[1];
	// cell3.innerHTML=readdata[2];
	// cell4.innerHTML=readdata[3];
}

// edit 

function edit(td) {
	row = td.parentElement.parentElement;
	document.getElementById('studentname').value = row.cells[0].innerHTML;
	document.getElementById('rollno').value = row.cells[1].innerHTML;
	document.getElementById('subject').value = row.cells[2].innerHTML;
	document.getElementById('marks').value = row.cells[3].innerHTML;
}
// Update 
function update() {
	row.cells[0].innerHTML = document.getElementById('studentname').value;
	row.cells[1].innerHTML = document.getElementById('rollno').value;
	row.cells[2].innerHTML = document.getElementById('subject').value;
	row.cells[3].innerHTML = document.getElementById('marks').value;
	row = null;

}
// delete
function remove(td) {
	var ans = confirm("are you sure u want to delete this record")
	if (ans == true) {
		row = td.parentElement.parentElement;
		document.getElementById('table').deleteRow(row.rowIndex)
	}

}

// read
// data in localStorage
function GetCellValues() {

	let table = document.getElementById('table');

	for (let r = 0, n = table.rows.length; r < n; r++) {

		for (let c = 0, m = table.rows[r].cells.length; c < m; c++) {

			// alert(table.rows[r].cells[c].innerHTML);

			// console.log(table.rows[r].cells[c].innerHTML)

			valuez = table.rows[r].cells[c].innerHTML

			// return valuez

			let data_String = JSON.stringify(valuez);



			let file = new Blob([data_String], { type: "text" });

			let anchor = document.createElement("a");

			anchor.href = URL.createObjectURL(file);

			anchor.download = "save.txt";

			anchor.click();



		}


	}
	function save_func(){

        var studentname = document.getElementById("studentname").value;

        var rollno= document.getElementById("rollno").value;



        var data = [];

        data.push(studentname);

        data.push(rollno)



        var data_string = JSON.stringify(data);



        var file = new Blob([data_string],{type:"text"});



        var anchor = document.createElement("a");

        anchor.href = URL.createObjectURL(file);

        anchor.download = "save.txt";

        anchor.click();



    } ;


}
