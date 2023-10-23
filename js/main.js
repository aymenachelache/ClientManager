

let MyClients = JSON.parse(window.localStorage.getItem("MyClients")) ? JSON.parse(window.localStorage.getItem("MyClients")) : [];
let MyCustomers = JSON.parse(window.localStorage.getItem("MyCustomers")) ? JSON.parse(window.localStorage.getItem("MyCustomers")) : [];
let MyStudents = JSON.parse(window.localStorage.getItem("MyStudents")) ? JSON.parse(window.localStorage.getItem("MyStudents")) : [];
let MyUsers = JSON.parse(window.localStorage.getItem("MyUsers")) ? JSON.parse(window.localStorage.getItem("MyUsers")) : [];
let MyProducts = JSON.parse(window.localStorage.getItem("MyProducts")) ? JSON.parse(window.localStorage.getItem("MyProducts")) : [];
let MyStoreOne = JSON.parse(window.localStorage.getItem("MyStoreOne")) ? JSON.parse(window.localStorage.getItem("MyStoreOne")) : [];
let MyStoreTwo = JSON.parse(window.localStorage.getItem("MyStoreTwo")) ? JSON.parse(window.localStorage.getItem("MyStoreTwo")) : [];


let buttonAddOne = document.querySelector("#firstButton");

let SubTitleClicker;

buttonAddOne.addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.querySelector("#firstName");
    let link = document.querySelector("#firstLink");
    let error = document.querySelector(".error p");
    if (name.value !== "" && link.value !== "") {
        error.classList.add("hidden");
        if (SubTitleClicker === "My Clients") {
            MyClients.push({
                name: name.value,
                link: link.value,
            });
        } else if (SubTitleClicker === "My Customers") {
            MyCustomers.push({
                name: name.value,
                link: link.value,
            });
        } else if (SubTitleClicker === "My Students") {
            MyStudents.push({
                name: name.value,
                link: link.value,
            });
        } else if (SubTitleClicker === "Users") {
            MyUsers.push({
                name: name.value,
                link: link.value,
            });
        } else if (SubTitleClicker === "Products") {
            MyProducts.push({
                name: name.value,
                link: link.value,
            });
        } else if (SubTitleClicker === "Store One") {
            MyStoreOne.push({
                name: name.value,
                link: link.value,
            });
        } else if (SubTitleClicker === "Store Two") {
            MyStoreTwo.push({
                name: name.value,
                link: link.value,
            });
        }
        addData(SubTitleClicker);
        name.value = "";
        link.value = "";

        name.click();
        handleDelete();
    } else {
        error.classList.remove("hidden");
    }
});


// Function Add Data To LocalStorage
function addData(nameData) {
    if (nameData === "My Clients") {
        window.localStorage.setItem("MyClients", JSON.stringify(MyClients));
        addToTable(nameData);
    } else if (nameData === "My Customers") {
        window.localStorage.setItem("MyCustomers", JSON.stringify(MyCustomers));
        addToTable(nameData);
    } else if (nameData === "My Students") {
        window.localStorage.setItem("MyStudents", JSON.stringify(MyStudents));
        addToTable(nameData);
    } else if (nameData === "Users") {
        window.localStorage.setItem("MyUsers", JSON.stringify(MyUsers));
        addToTable(nameData);
    } else if (nameData === "Products") {
        window.localStorage.setItem("MyProducts", JSON.stringify(MyProducts));
        addToTable(nameData);
    } else if (nameData === "Store One") {
        window.localStorage.setItem("MyStoreOne", JSON.stringify(MyStoreOne));
        addToTable(nameData);
    } else if (nameData === "Store Two") {
        window.localStorage.setItem("MyStoreTwo", JSON.stringify(MyStoreTwo));
        addToTable(nameData);
    } else {
        addToTable("");
    }
}

// Add Client To Table
function addToTable(nameData) {
    let bodyOne = document.querySelector(".body-one");
    bodyOne.innerHTML = "";
    let i = 1;
    if (nameData === "My Clients") {
        LocalStorageLoop = MyClients;
    } else if (nameData === "My Customers") {
        LocalStorageLoop = MyCustomers;
    } else if (nameData === "My Students") {
        LocalStorageLoop = MyStudents;
    } else if (nameData === "Users") {
        LocalStorageLoop = MyUsers;
    } else if (nameData === "Products") {
        LocalStorageLoop = MyProducts;
    } else if (nameData === "Store One") {
        LocalStorageLoop = MyStoreOne;
    } else if (nameData === "Store Two") {
        LocalStorageLoop = MyStoreTwo;
    } else {
        LocalStorageLoop = [];
    }
    LocalStorageLoop.forEach((element) => {
        let tr = `
        <tr>
            <td>${i++}</td>
            <td class="name">${element.name}</td>
            <td class="link">${element.link}</td>
            <td>
                <i class="fa fa-user-edit icon edit"></i>
                <i class="fa fa-trash icon remove"></i>
                <a href="${element.link}" target="_blank"><button class="button">${element.name}</button></a>
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
            let elementDelete = Array.from(e.target.parentElement.parentElement.children)[1].innerHTML;
            if (SubTitleClicker === "My Clients") {
                MyClients.forEach((client, key) => {
                    MyClients = MyClients.filter((client) => client.name !== elementDelete)
                    addData(SubTitleClicker);
                })
            } else if (SubTitleClicker === "My Customers") {
                MyCustomers.forEach((custom, key) => {
                    MyCustomers = MyCustomers.filter((custom) => custom.name !== elementDelete)
                    addData(SubTitleClicker);
                })
            } else if (SubTitleClicker === "My Students") {
                MyStudents.forEach((student, key) => {
                    MyStudents = MyStudents.filter((student) => student.name !== elementDelete)
                    addData(SubTitleClicker);
                })
            } else if (SubTitleClicker === "Users") {
                MyUsers.forEach((user, key) => {
                    MyUsers = MyUsers.filter((user) => user.name !== elementDelete)
                    addData(SubTitleClicker);
                })
            } else if (SubTitleClicker === "Products") {
                MyProducts.forEach((product, key) => {
                    MyProducts = MyProducts.filter((product) => product.name !== elementDelete)
                    addData(SubTitleClicker);
                })
            } else if (SubTitleClicker === "Store One") {
                MyStoreOne.forEach((store, key) => {
                    MyStoreOne = MyStoreOne.filter((store) => store.name !== elementDelete)
                    addData(SubTitleClicker);
                })
            } else if (SubTitleClicker === "Store Two") {
                MyStoreTwo.forEach((store, key) => {
                    MyStoreTwo = MyStoreTwo.filter((store) => store.name !== elementDelete)
                    addData(SubTitleClicker);
                })
            }
        });
    })
}

/************************ Edit Client ************************/

let background = document.querySelector(".bg-grey");
let editBox = document.querySelector(".edit-box");

function handleEdit() {
    let edites = document.querySelectorAll(".edit");

    edites.forEach((edit) => {
        edit.addEventListener('click', (e) => {
            // let clientDelete = Array.from(e.target.parentElement.parentElement.children)[1].innerHTML;
            // MyClients.forEach((client, key) => {
            //     MyClients = MyClients.filter((client) => client.name !== clientDelete)
            //     addData();
            // })
            let EditName = Array.from(e.target.parentElement.parentElement.children)[1].innerHTML;
            let EditLink = Array.from(e.target.parentElement.parentElement.children)[2].innerHTML;
            let key;
            MyClients.map((client, index) => client.name === EditName ? key = index : "");

            background.classList.remove("d-none");
            editBox.classList.remove("d-none");

            let editNameInput = document.querySelector("#editName");
            let editLinkInput = document.querySelector("#editLink");
            let editButtonInput = document.querySelector("#editButton");


            editNameInput.value = EditName;
            editLinkInput.value = EditLink;

            editButtonInput.addEventListener('click', () => {
                if (SubTitleClicker === "My Clients") {
                    MyClients[key].name = editNameInput.value;
                    MyClients[key].link = editLinkInput.value;
                    

                } else if (SubTitleClicker === "My Customers") {
                    MyCustomers[key].name = editNameInput.value;
                    MyCustomers[key].link = editLinkInput.value;

                } else if (SubTitleClicker === "My Students") {
                    MyStudents[key].name = editNameInput.value;
                    MyStudents[key].link = editLinkInput.value;

                } else if (SubTitleClicker === "Users") {
                    MyUsers[key].name = editNameInput.value;
                    MyUsers[key].link = editLinkInput.value;

                } else if (SubTitleClicker === "Products") {
                    MyProducts[key].name = editNameInput.value;
                    MyProducts[key].link = editLinkInput.value;

                } else if (SubTitleClicker === "Store One") {
                    MyStoreOne[key].name = editNameInput.value;
                    MyStoreOne[key].link = editLinkInput.value;

                } else if (SubTitleClicker === "Store Two") {
                    MyStoreTwo[key].name = editNameInput.value;
                    MyStoreTwo[key].link = editLinkInput.value;

                }
                addData(SubTitleClicker);
                background.classList.add("d-none");
                editBox.classList.add("d-none");
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


/*********************** BootStrap SideBar ***********************/
/* global bootstrap: false */
(function () {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
})()


// Add To Sub Title Event Click
let subTitles = document.querySelectorAll(".sub-title");
subTitles.forEach((subTitle) => {
    subTitle.addEventListener("click", (e) => {
        document.querySelector(".title-var").innerHTML = e.target.getAttribute("data-parent");
        document.querySelector(".subtitle-var").innerHTML = e.target.innerHTML;
        document.querySelector(".right-cont").classList.remove("d-none");
        SubTitleClicker = e.target.innerHTML;
        addToTable(SubTitleClicker);

        handleDelete();
        handleEdit();
    });
})

