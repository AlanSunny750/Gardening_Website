let url = 'http://localhost:5400';

const Register = () => {

    const data = {
        Name: document.querySelector('.Name').value,
        LastName: document.querySelector('.LastName').value,
        Email: document.querySelector('.Email').value,
        Password: document.querySelector('.Password').value
    }

    if(data.Password == document.querySelector('.ConfirmPass').value) {
    
    fetch(url + '/signup.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(info => {
       
    if(info == "0") {
        alert('An account with this email already exists!')
    } 
    else if(info == "3") {
        window.location.href = url + '/login.html'
    }
    
})
.catch(error => console.log('Error: ' + error))
document.getElementsByTagName('input').value = '';

} else {
    alert('The entered passwords does not match!')
}

}


const Login = () => {
    
    const loginInfo = {
        Email: document.querySelector('.LoginEmail').value,
        Pass: document.querySelector('.LoginPassword').value
    }


    fetch(url + '/login.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
    }).then(response => response.text())
    .then(data => {
        if(data == "1") {
            alert('Incorrect email')
        } else if(data == "2") {
            alert('Incorrect password')
        } else if(data == "4") {
            window.location.href = url + '/client.html'
        }
    })
    .catch(err => console.log(err))
}