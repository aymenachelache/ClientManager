

let MyClients = JSON.parse(window.localStorage.getItem("MyClients")) ? JSON.parse(window.localStorage.getItem("MyClients")) : [];

addClientToTable();
handleDelete();
handleEdit();
let buttonAddOne = document.querySelector("#firstButton");

buttonAddOne.addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.querySelector("#firstName");
    let link = document.querySelector("#firstLink");
    let error = document.querySelector(".error p");
    if (name.value !== "" && link.value !== "") {
        error.classList.add("hidden");
        MyClients.push({
            name: name.value,
            link: link.value,
        });
        addData();
        name.value = "";
        link.value = "";

        name.click();
        
        
    } else {
        error.classList.remove("hidden");
    }
    
});


// Function Add Data To LocalStorage
function addData() {
    window.localStorage.setItem("MyClients", JSON.stringify(MyClients));
    addClientToTable();
}

// Add Client To Table
function addClientToTable() {
    let bodyOne = document.querySelector(".body-one");
    bodyOne.innerHTML = "";
    let i=1;
    MyClients.forEach((client) => {
        let tr = `
        <tr>
            <td>${i++}</td>
            <td class="name">${client.name}</td>
            <td class="link">${client.link}</td>
            <td>
                <i class="fa fa-user-edit icon edit"></i>
                <i class="fa fa-trash icon remove"></i>
                <a href="${client.link}" target="_blank"><button class="btn">${client.name}</button></a>
            </td>
        </tr>
        `;
        bodyOne.innerHTML += tr;
        handleDelete();
        handleEdit();
    });
}

// Function Delete Client
function handleDelete() {
    let removes = document.querySelectorAll(".remove");

    removes.forEach((remove) => {
        remove.addEventListener('click', (e) => {
            let clientDelete = Array.from(e.target.parentElement.parentElement.children)[1].innerHTML;
            MyClients.forEach((client, key) => {
                MyClients = MyClients.filter((client) => client.name !== clientDelete)
                addData();

            })
        });
    })
}

/************************ Edit Client ************************/

let background =  document.querySelector(".bg-grey");
let editBox =  document.querySelector(".edit-box");

function handleEdit() {
    let edites = document.querySelectorAll(".edit");

    edites.forEach((edit) => {
        edit.addEventListener('click', (e) => {
            // let clientDelete = Array.from(e.target.parentElement.parentElement.children)[1].innerHTML;
            // MyClients.forEach((client, key) => {
            //     MyClients = MyClients.filter((client) => client.name !== clientDelete)
            //     addData();
            // })
            let clientEditName = Array.from(e.target.parentElement.parentElement.children)[1].innerHTML;
            let clientEditLink = Array.from(e.target.parentElement.parentElement.children)[2].innerHTML;
            let key;
            MyClients.map((client ,index) => client.name === clientEditName ? key=index : "");

            background.classList.remove("d-none");
            editBox.classList.remove("d-none");

            let editNameInput =  document.querySelector("#editName");
            let editLinkInput =  document.querySelector("#editLink");
            let editButtonInput =  document.querySelector("#editButton");


            editNameInput.value = clientEditName;
            editLinkInput.value = clientEditLink;

            editBox.addEventListener('click', () => {
                MyClients[key].name = editNameInput.value;
                MyClients[key].link = editLinkInput.value;
                addData();
            });
            
        });
    })
}

// Close Edit Page
let close = document.querySelector(".close");

close.addEventListener('click', () => {
    background.classList.add("d-none");
    editBox.classList.add("d-none");
});