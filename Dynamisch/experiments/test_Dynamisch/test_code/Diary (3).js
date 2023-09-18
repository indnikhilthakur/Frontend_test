console.log("hello");

inpdata = []

isEdit = false;
editindex = 0;

function clearvalue() {
    inpdata[editindex].title = document.getElementById('title').value ='';
    inpdata[editindex].description = document.getElementById('description').value = '';
    inpdata[editindex].date = document.getElementById('date').value = '';
}

function validation(){

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;

    if(title == ""){
        console.log("title if ");
        document.getElementById('titleerr').innerHTML = "Please Enter Title";
        return false;
    }else{
        document.getElementById('titleerr').innerHTML = "";
        console.log("title else");
    }

    if (description == "") {
        document.getElementById('descriptionerr').innerHTML = "Please Enter Description";
        console.log("description if ");
        return false;
    } else {
        document.getElementById('descriptionerr').innerHTML = "";
        console.log("description else ");
    }

    if (date == "") {
        document.getElementById('dateerr').innerHTML = "Please Enter Date";
        console.log("date if ");
        return false;
    } else {
        document.getElementById('dateerr').innerHTML = "";
        console.log("date else ");
    }
    return true;
}

function perform(){

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    validation();

    if (!isEdit) {

        inpdata.push({
            'title': title,
            'description': description,
            'date': date
        })
        console.log(inpdata);
    } else {
        console.log('Im in else sstsnt ');
        inpdata[editindex].title = document.getElementById('title').value;
        inpdata[editindex].description = document.getElementById('description').value;
        inpdata[editindex].date = document.getElementById('date').value;
        isEdit = false;
    }

    localStorage.setItem("dairydata", JSON.stringify(inpdata));
    dairyTable(inpdata);
    clearvalue();
}

$(document).ready(function () {
    inpdata = JSON.parse(localStorage.getItem("dairydata")) ? JSON.parse(localStorage.getItem("dairydata")) : [];
    dairyTable(inpdata);
});

function dairyTable(printdata) {
    document.getElementById('formdata').innerHTML = "";

    for (let i = 0; i < printdata.length; i++) {
        document.getElementById('formdata').innerHTML +=
            `<tr>
         <td>${printdata[i].title}</td>
         <td>${printdata[i].description}</td>
         <td>${printdata[i].date}</td>
         <td><a onClick="edit(${i})">Edit </a></td> 
         <td><a onClick="delet(${i})"> Delete </a></td>
        </tr>`
    }
}

function edit(index) {
    console.log("index in delet : ", index);

    document.getElementById('title').value = inpdata[index].title;
    document.getElementById('description').value = inpdata[index].description;
    document.getElementById('date').value = inpdata[index].date;

    isEdit = true;
    editindex = index;
}

function delet(index) {
    console.log("index in delet : ", index);

    inpdata.splice(index, 1);
    localStorage.setItem('dairydata', JSON.stringify(inpdata));
    dairyTable(inpdata);

}
