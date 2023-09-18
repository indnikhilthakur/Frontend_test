let row = null;
// let msg = document.getElementById("msg")
// console.log(msg)

function submit(){
    let dataEntered = retriveData();
    console.log(dataEntered)

    let readData = readDataLocal(dataEntered);
    // console.log(readData)

    if(dataEntered == false){
        msg.innerHTML = "Please enter data"
    }
    else{
        if(row == null){
            insert(readData);
            msg.innerHTML = "Date inserted succsessfully"
        }
        else{
            update();
            msg.innerHTML = "Date updated successfully"
        }
    }
    // document.getElementById('form').reset();
}


let data = [];
function funcSave(){
    let obj = {
        title: "",
        description: "",
        date: "",
    }

    for(a in obj){
        obj[a] = document.getElementById(a).value;
        console.log("item is ", a)
    }

    arr = Object.values(obj)
    console.log(obj)
    data.push(arr)
    console.log(data)
}



let demo = funcSave();
function downloadCsv(demo){
    var csv = 'Title, Details, Date\n'

    // data is stoted into csv

    data.forEach(function (row){
        console.log(row)
        csv += row.join(',')
        csv += "\n"

      
})
    document.write(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    //provide the name for the CSV file to be downloaded
    hiddenElement.download = 'USER_DATA.csv';
    hiddenElement.click();  


}


// --------------------------------------------------------------------------

// create 
function retriveData(){
    titleSelect = document.getElementById("title").value;
    descriptionSelect = document.getElementById("description").value;
    dateSelect = document.getElementById("date").value;

    let arr = [titleSelect, descriptionSelect, dateSelect];

    if(arr.includes("")){
        return false;
    }
    else{
        return arr;
    };
}

// read date in localStorage
function readDataLocal(dataEntered){
    // stiring single input element in localS0torage
    // localStorage.setItem(key, value)
    let setTitle = localStorage.setItem("title", dataEntered[0])
    let setDescription = localStorage.setItem("discription", dataEntered[1])
    let setDate =localStorage.setItem("date", dataEntered[2])
    
    //get values from localStorage to table
    let getTitle = localStorage.getItem("title", setTitle)
    let getDescription = localStorage.getItem("description", setDescription)
    let getDate = localStorage.getItem("date", setDate)

    let arr = [getTitle, getDescription, getDate];
    return arr;

}

//insert date in table row
function insert(readData){
    // using insert data in row of table
    let row = table.insertRow();
    console.log(row)

    row.insertCell(0).innerHTML = readData[0];
    row.incertCell(1).innerHTML = readData[1];
    row.incertCell(2).innerHTML = readData[2];
    row.incertCell(3).innerHTML = "<button onclick=edit(this)>Edit</button><button onclick= remove(this)>delete</button>"
    // row.incertCell(4).innerHTML = readData[3]
    
}


// edit entery
function edit(td){
    // inserting new row into table
    row =td.parentElement.parentElement;
    // selecting parent element table
    document.getElementById("title").value = row.cells[0].innerHTML;
    document.getElementById("description").value = row.cells[1].innerHTML;
    document.getElementById("date").value = row.cells[2].innerHTML;
}

// update entry
function update(){
    row.cells[0].innerHTML = document.getElementById("title").value;
    row.cells[1].innerHTML = document.getElementById("description").value;
    row.cells[2].innerHTML = document.getElementById("date").value;
    row = null;
}

// update Entry
function remove(td){
    let remAns = conferm("do you want to delete this entry?")
    if(remAns == true){
        row = td.parentElement.parentElement;
        // for clear table or all entries inside table
        document.getElementById("table").deleteRow(row.rowIndex)
    }
}