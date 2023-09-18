let row = null;


// 
function Submit() {
    let dataEntered = retrieveData();
    // console.log(dataEntered)
    let readData = readDataLocal(dataEntered);
    // console.log(readData);
    if (dataEntered == false) {
        msg.innerHTML = "Please enter data"
    } else {
        if (row == null) {
            insert(readData);
            msg.innerHTML = "Data Inserted Sucessfully!"
        } else {
            update();
            msg.innerHTML = "Data Updated Sucessfully!"
        }
    }
    // document.getElementById('form').reset();

}


let data = [];
function save_func() {

    // let first = document.getElementById("name1").value;
    // let last = document.getElementById("name2").value;

    // data.push(first);
    // data.push(last);
    // console.log(data)

    let obj = {
        name: "",
        phNum: "",
        email: "",
        

    }

    for (a in obj)
    // for (a=0; a<obj.length; a++) 
    {
        // obj[a] = document.getElementById(a).value;
        obj[a] = document.getElementById(a).value;

        console.log("a is ",a)
    }
    // let txt = "";
    // for (let x in obj) {
    //     obj[x] = document.getElementById(x).value;
    //     console.log(obj[x])
    //     txt = obj[x] + " "; 
    //     console.log(txt)
        arr = Object.values(obj)
    //     // console.log(obj);
        data.push(arr);
        console.log(data)
    // }

    }

    let demo = save_func();

    function DownLoad(demo) {

        // txt File 

        // // convert data into string 
        // // let data_string = JSON.stringify(data);
        // let data_string = JSON.stringify(data);

        // // creating file 
        // let file = new Blob([data_string], { type: "text" })
        // // create anchor 
        // let anchor = document.createElement("a");
        // anchor.href = URL.createObjectURL(file);
        // // www.something.com/.extension (ex.photo.png)

        // anchor.download = "save.txt"
        // anchor.click();


        // CSV File 

        //define the heading for each row of the data

        var csv = 'NAME,PHONE NUMBER,EMAIL,JOB,EXP\n';

        //merge the data with CSV

        data.forEach(function (row) {
            console.log(row)
            csv += row.join(',');
            csv += "\n";

        });



        //display the created CSV data on the web browser

        document.write(csv);
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        //provide the name for the CSV file to be downloaded
        hiddenElement.download = 'USER_DATA.csv';
        hiddenElement.click();




    }




// --------------------------------------------------------------------------------------------------------------------

    // Create 
    // Retrieving Data from Form
    function retrieveData() {
        let name1 = document.getElementById("name").value;
        let phNum = document.getElementById("phNum").value;
        let email = document.getElementById("email").value;
        

        let arr = [name1, phNum, email];
        // Includes search the data in arr 
        if (arr.includes("")) {
            return false
        } else {
            return arr;
        };



    }


    // Read 
    function readDataLocal(dataEntered) {
        // storing in local storage 
        // localStorage.setItem(key,value)
        let n = localStorage.setItem("Name", dataEntered[0])
        let p = localStorage.setItem("Phone", dataEntered[1])
        let e = localStorage.setItem("Email", dataEntered[2])
        


        // getting values from local to table
        console.log("This is me")
        let n1 = localStorage.getItem("Name", n)
        let p1 = localStorage.getItem("Phone", p)
        let e1 = localStorage.getItem("Email", e)
    

        let arr = [n1, p1, e1];
        return arr

    }



    // function GetCellValues() {
    //     let table = document.getElementById('table');
    //     for (let r = 0, n = table.rows.length; r < n; r++) {
    //         for (let c = 0, m = table.rows[r].cells.length; c < m; c++) {
    //             // alert(table.rows[r].cells[c].innerHTML);
    //             // console.log(table.rows[r].cells[c].innerHTML)
    //             valuee = table.rows[r].cells[c].innerHTML
    //             // return valuee

    //         }
    //         let data_String = JSON.stringify(valuee);

    //         let file = new Blob([data_String], { type: "text" });
    //         let anchor = document.createElement("a");
    //         anchor.href = URL.createObjectURL(file);
    //         anchor.download = "save.txt";
    //         anchor.click();


    //         // Requiring fs module in which
    // // writeFile function is defined.
    // const fs = require('fs')

    // // Data which will write in a file.
    // let data = "Learning how to write in a file."

    // // Write data in 'Output.txt' .
    // fs.writeFile('Output.txt', data, (err) => {

    //     // In case of a error throw err.
    //     if (err) throw err;
    // })
    //     }

    // }






    // Insert
    function insert(readData) {
        // using inserRow to add the data in row of table
        let row = table.insertRow();
        console.log(row)
        // but we need cell to add data 
        // let cell1 = row.insertCell(0);
        // let cell2 = row.insertCell(1);
        // let cell3 = row.insertCell(2);
        // let cell4 = row.insertCell(3);
        // let cell5 = row.insertCell(4);

        // cell1.innerHTML = readData[0];
        // cell2.innerHTML = readData[1];
        // cell3.innerHTML = readData[2];
        // cell4.innerHTML = readData[3];
        // cell5.innerHTML = readData[4];

        // --------OR-------------
        row.insertCell(0).innerHTML = readData[0];
        row.insertCell(1).innerHTML = readData[1];
        row.insertCell(2).innerHTML = readData[2];
       
        row.insertCell(3).innerHTML = `<button onclick= edit(this)>Edit</button>
    <button onclick=remove(this)>Delete</button>`

    };


    // Edit 
    // td can be any name it is just a parameter
    function edit(td) {
        // td is used to fetch the row
        // this letiable is destroy once this function is over so that reason we have redefine it 
        row = td.parentElement.parentElement;
        // get back to parent element of td is tr,after tr is table goes on.
        document.getElementById('name').value = row.cells[0].innerHTML;
        document.getElementById('phNum').value = row.cells[1].innerHTML;
        document.getElementById('email').value = row.cells[2].innerHTML;
       

    }


    // Update
    function update() {
        row.cells[0].innerHTML = document.getElementById('name').value;
        row.cells[1].innerHTML = document.getElementById('phNum').value;
        row.cells[2].innerHTML = document.getElementById('email').value;
     
        row = null;
    }



    // Delete 
    function remove(td) {
        // table row of row 
        let ans = confirm("are you sure want to delete ?")
        if (ans == true) {
            row = td.parentElement.parentElement;
            // document.getElementById('table').remove(row.rowIndex) 
            // remove all the table that why we using deleteRow
            document.getElementById('table').deleteRow(row.rowIndex)
        }

    }


