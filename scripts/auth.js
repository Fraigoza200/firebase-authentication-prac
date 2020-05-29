// sign up 
const signupForm = document.getElementById('signup-form')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // get user info 
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    // sign up user 
    auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {
        console.log(cred)
    })
    .catch(e => console.error(e))

    
})