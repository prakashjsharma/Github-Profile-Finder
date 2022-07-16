// initializ github
const github = new Github();

// initialize UI
const ui = new UI;

// Search input
const searchuser = document.getElementById('searchUser');

// Search input event listener
searchuser.addEventListener('keyup', (e) => {
    // Get Inputtext
    const userText = e.target.value;
    // Make http call
    if(userText !== ''){
        github.getUser(userText)
        .then(data =>{
            if(data.profile.message === 'Not Found'){
                // Show alert
                ui.showAlert('User not found...!', 'alert alert-danger')
            }else{
                // Show Profile
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
            }
        })
    }else{
        // Clear Profile
        ui.clearProfile();
    }
});