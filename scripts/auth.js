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
        
            const modal = document.getElementById('modal-signup')
            M.Modal.getInstance(modal).close()
        
        
            signupForm.reset()
    })
    .catch(e => console.error(e))

})

// logout
const logout = document.getElementById('logout')

logout.addEventListener('click', (e) => {
    e.preventDefault()

    auth.signOut()
        .then(() => {
            console.log('user logged out')
        })
})