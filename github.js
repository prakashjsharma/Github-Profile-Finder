class Github{
    constructor(){
        this.client_id = '9a0f7148af83c4f047b7';
        this.client_secret = '677f6c12833e84b1e7a9feeef897a02bf4953694';
        this.repos_count = 100;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profilename = await fetch('https://api.github.com/users/'+user+'?client_id='+this.client_id+'?client_secret='+this.client_secret+'');
        const reposname = await fetch('https://api.github.com/users/'+user+'/repos?per_page='+this.repos_count+'&sort='+this.repos_sort+'&client_id='+this.client_id+'?client_secret='+this.client_secret+'');
        const profile = await profilename.json();
        const repos = await reposname.json();
        return {
            profile,
            repos
        }
    }
}