'use strict'

function onLogin() {
    var userTxt = document.querySelector('.input-username').value;
    var passtxt = document.querySelector('.input-pass').value;
    var elUsrMsg = document.querySelector('.wrong-pass');
    var userLogin = doLogin(userTxt, passtxt);

    if (userLogin === null) return elUsrMsg.classList.remove('hide');
    saveUser(userLogin);
    window.location.href = "secret-content.html";


}

function showUserName() {
    var lblName = document.querySelector('.user-name');
    var getitem = getIndexNameStorage()

    lblName.innerText += " " + getitem;

}


function onLogOut() {
    var indexName = getIndexNameStorage();
    localStorage.removeItem(indexName);
    window.location.href = "index.html";


}

function showAdminLink() {
    var elLink = document.querySelector('.admin-link')
    var name = getIndexNameStorage();
    var admin = isAdmin(name);
    if (admin) elLink.classList.remove('hide');


}

function getUsersToShow(filterBy) {

    sortByLogin();
    console.log('Setting Filter', filterBy);
    if (filterBy === 'Name') sortByName();
    if (filterBy === 'Last Login') sortByLogin();



    renderTable();

}


function renderTable() {

    var strHtml = '';
    strHtml += '<tr>';

    gUsers.forEach(function (name, i) {
        var name = gUsers[i].userName;
        strHtml += `<td  > ${name}
                      </td>`;

        strHtml += '</tr>';


    });

    var elTable = document.querySelector('.table');
    elTable.innerHTML = strHtml;
}
