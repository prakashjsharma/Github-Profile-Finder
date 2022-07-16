class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Show Profile while searching
    showProfile(user) {
        console.log(user)
        this.profile.innerHTML =
            '<div class="card card-body mb-3"><div class="row"><div class="col-md-3"><img class="img-fluid mb-2" src="' + user.avatar_url + '"><a href="' + user.html_url + '" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a></div><div class="col-md-9"><span class="badge badge-primary bg-primary">Public Repos : ' + user.public_repos + '</span><span class="badge badge-secondary bg-secondary">Public Gists : ' + user.public_gists + '</span><span class="badge badge-success bg-success">Public Followers : ' + user.Followers + '</span><span class="badge badge-info bg-info">Public Following : ' + user.Following + '</span><br><br><ul class="list-group"><li class="list-group-item">Name : ' + user.login + '</li><li class="list-group-item">Company : ' + user.Company + '</li><li class="list-group-item">Website/Blog : ' + user.blog + '</li><li class="list-group-item">Location : ' + user.location + '</li><li class="list-group-item">Member Since : ' + user.created_at + '</li></ul></div></div></div><h3 class="page-heading mb-3">Latest Repos</h3><div id="repos"></div>';
    }

    // Show alert msg
    showAlert(message, className) {
        // Clear any remaining alert
        this.clearAlert();

        // create div
        const div = document.createElement('div');
        // Add Classes
        div.className = className;
        // Add Text
        div.appendChild(document.createTextNode(message))
        // Get Parent
        const container = document.querySelector('.searchContainer');
        // Get Searchbox
        const search = document.querySelector('.search');
        // Insert alert div
        container.insertBefore(div, search)

        // Timeout after three sec for alert to disapplear
        setTimeout(() => {
            this.clearAlert();
        }, 1000)
    }


    // ClearAlert
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear Profile when search input is empty
    clearProfile() {
        this.profile.innerHTML = "";
    }


    // Show Repos
    showRepos(repos) {
        console.log(repos)
        let output = '';

        repos.forEach(function(repos){
            output += '<div class="card card-body mb-2"><div class="row"><div class="col-md-6"><a href="'+ repos.html_url +'" target="_blank">'+repos.name+'</a></div><div class="col-md-6"><span class="badge badge-primary bg-primary">Stars : ' + repos.stargazers_count + '</span><span class="badge badge-secondary bg-secondary">Watchers : ' + repos.watchers_count + '</span><span class="badge badge-success bg-success">Forks : ' + repos.forks_count + '</span></div></div></div>';

        });

        // Output Repos
        document.getElementById('repos').innerHTML = output;
    }
}


