class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  //   show user  showProfile
  showProfile(user) {
    this.profile.innerHTML = `
          <div class="card card-body">
              <div class="row">
                  <div class="col-md-3">
                      <img class="img-fluid mb-2" src="${user.avatar_url}">
                      <a href="${user.html_url} target="_blank" class="btn btn-block btn-primary">View Profile</a>
                  </div>
                  <div class="col-md-9">
                      <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                      <span class="badge badge-primary">Public Gist: ${user.public_gists}</span>
                      <span class="badge badge-success">Followers: ${user.followers}</span>
                      <span class="badge badge-primary">Following: ${user.following}</span>
                      <br><br>
                      <ul class="list-group">
                          <li class="list-group-item">Company: ${user.company}</li>
                          <li class="list-group-item">Blog: ${user.blog}</li>
                          <li class="list-group-item">Location: ${user.location}</li>
                          <li class="list-group-item">Member since: ${user.created_at}</li>
                      </ul>
                  </div>
              </div>
          </div>
          <h3 class="page-heading mb-3">Latest Repos</h3>
          <div id="repos"></div>
      `;
  }
  // show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach(function (repo) {
      output += `
     <div class="card card-body mb-2">
     <div class="row">
       <div class="col-md-6">
         <a href="${repo.html_url}" target="_blank">${repo.name}</a>
       </div>
       <div class="col-md-6">
         <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
         <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
         <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
       </div>
     </div>
   </div>
     `;
    });
    // output Repos
    document.getElementById('repos').innerHTML = output;
  }
  // show Alert message
  showAlert(message, className) {
    // clear any remaining alerts
    this.clearAlert();
    // clreate div
    const div = document.createElement('div');
    // add className
    div.className = className;
    // add Text
    div.append(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.searchcontainer');
    // ger search box
    const search = document.querySelector('.search');
    // insert Alert
    container.insertBefore(div, search);
    //  timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000)
  }
  // clear Alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  // clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }



}