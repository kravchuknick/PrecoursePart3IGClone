

const users = [
    {
        username: "jsmith",
        password: "dogs99"
    },
    {
        username: "jrubio",
        password: "monkey99"
    },
    {
        username: "nkrav",
        password: "sam88"
    }
]

// user types in username and password
    // when log in button is clicked, search through the users array to find the username and password match
        // if there is no match, return string that user doesn't exist
        // if there is a match, return string login successful and take to user feed



function handleLogin(e) {
    e.preventDefault();
// what did the user type
// does the user exist
    const usernameInput = document.querySelector('#username-input');
    const passwordInput = document.querySelector('#password-input');
    if (usernameInput.value === "" || passwordInput.value === ""){
        alert("Username and Password are required")
        return
    }
    const foundUser = users.find((name) => {
        return name.username === usernameInput.value;
    })
    if(foundUser === null){
        alert("User not found.")
        return
    }
    if(passwordInput.value !== foundUser.password){
        alert("Invalid password.")
        return
    }
    localStorage.setItem('username',usernameInput.value)
    usernameInput.value = '';
    passwordInput.value = '';
    window.location.href='feed.html'
}


document.querySelector(".login-btn").addEventListener('click',handleLogin)


