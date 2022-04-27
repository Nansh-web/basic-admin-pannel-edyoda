var url = 'https://adminpaneldata-edyoda-sourav.herokuapp.com/admin/data';


var tableBody = document.getElementById("t-body");

var infoWraps = document.getElementById("info-wrapper")

var inputElement = document.getElementById("search-box")

var userData = [];

$(function(){
    $.get(url, function (response) {
        userData = response
    var Res = response
    // var tableBody = document.getElementById("table-body")
    for(var i = 0; i < Res.length; i++){
        // if(i < 7){
        tableBody.innerHTML += `<tr id = "tr${Res[i].id}"
        onclick = "usersRowClicked('${Res[i].id}')"
        class="data-row ${ i == 2? `active` : ""}">
        <td class="column1">${Res[i].id}</td>
        <td class="column2">${Res[i].firstName}</td>
        <td class="column3">${Res[i].lastName}</td>
        <td class="column4">${Res[i].email}</td>
        <td class="column5">${Res[i].phone}</td>
        </tr>`

        if (i == 2) {
            infoWraps.innerHTML = ` <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>
            <div id= "${Res[i].id}" class="info-content">
                <div><b>User selected:</b> ${Res[i].firstName}  ${Res[i].lastName}</div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readonly>
                    ${Res[i].description}
                    </textarea>
                </div>
                <div><b>Address:</b>  ${Res[i].address.streetAddress}</div>
                <div><b>City:</b> ${Res[i].address.city}</div>
                <div><b>State:</b> ${Res[i].address.state}</div>
                <div><b>Zip:</b>  ${Res[i].address.zip}</div>
            </div>`
        // }
    }
     }})
})


function usersRowClicked(id) {
var activeFlashingUserDetails = userData.find( (user,i) => {
    if(user.id == id){
        return true
    }
})

var infoContentWrapperElement = document.getElementById("info-wrapper")

infoContentWrapperElement.innerHTML = `<h1>Details</h1>
<p>Click on a table item to get detailed information</p>
<div id= "content${activeFlashingUserDetails.id}" class="info-content">
    <div><b>User selected:</b> ${activeFlashingUserDetails.firstName}  ${activeFlashingUserDetails.lastName}</div>
    <div>
        <b>Description: </b>
        <textarea cols="50" rows="5" readonly>
        ${activeFlashingUserDetails.description}
        </textarea>
    </div>
    <div><b>Address:</b>  ${activeFlashingUserDetails.address.streetAddress}</div>
    <div><b>City:</b> ${activeFlashingUserDetails.address.city}</div>
    <div><b>State:</b> ${activeFlashingUserDetails.address.state}</div>
    <div><b>Zip:</b>  ${activeFlashingUserDetails.address.zip}</div>
</div>`

var prevActiveUser = document.getElementsByClassName("active")[0]
prevActiveUser.classList.remove("active")

    var activeFlashingUser = document.getElementById("tr" + id)
    activeFlashingUser.classList.add("active")
}


function alphabetsTyped(){
    var userFirstName = inputElement.value
var filteredUserRecords = userData.filter((user,i) => {
    if (user.firstName.toLowerCase().includes(userFirstName.toLowerCase()) || user.email.toLowerCase().includes(userFirstName.toLowerCase()) || user.phone.toLowerCase().includes(userFirstName.toLowerCase()) || user.lastName.toLowerCase().includes(userFirstName.toLowerCase()))  {
        return true
    }
})

tableBody.innerHTML = ``

var infoContentBox = document.getElementsByClassName("info-content")[0]

console.log(infoContentBox.id)

filteredUserRecords.map((user,i) => {
    // if( i < 7){
    tableBody.innerHTML += 
    `<tr id = "tr${user.id}"
        onclick = "usersRowClicked('${user.id}')"
        class="data-row  ${user.id == infoContentBox.id? `active` : ""}">
        <td class="column1">${user.id}</td>
        <td class="column2">${user.firstName}</td>
        <td class="column3">${user.lastName}</td>
        <td class="column4">${user.email}</td>
        <td class="column5">${user.phone}</td>
        </tr>`
    // }
})
}




{/* <h1>Details</h1>
<p>Click on a table item to get detailed information</p>
<div class="info-content">
    <div><b>User selected:</b> Marcellin Shrestha</div>
    <div>
        <b>Description: </b>
        <textarea cols="50" rows="5" readonly>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
        </textarea>
    </div>
    <div><b>Address:</b> 6480 Nec Ct</div>
    <div><b>City:</b> Dinwiddie</div>
    <div><b>State:</b> NV</div>
    <div><b>Zip:</b> 91295</div>
</div> */}







































/* <tr class="data-row active">
<td class="column1">654</td>
<td class="column2">Xiumei</td>
<td class="column3">Jongco</td>
<td class="column4">AKoprowski@vitae.ly</td>
<td class="column5">(773)391-2969</td>
</tr> */