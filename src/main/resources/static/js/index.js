$('#getUsers').on('click', () => {
    const baseUrl = 'http://localhost:8080/';
    const apiUrl = baseUrl + 'user/all'

    $.ajax({
        type: "get",
        url: apiUrl,
        dataType: "text",
    }).done((data) => {
        var users = JSON.parse(data)
        console.log(users)

        const userListDOM = document.getElementById('userList')     
        users.map((user) => {
            var tr = document.createElement('tr')
            var idDOM = document.createElement('td')
            var nameDOM = document.createElement('td')
            var emailDOM = document.createElement('td')

            idDOM.append(user.id)
            nameDOM.append(user.name)
            emailDOM.append(user.email)

            tr.appendChild(idDOM)
            tr.appendChild(nameDOM)
            tr.appendChild(emailDOM)
            userListDOM.appendChild(tr)
        })
    });
})