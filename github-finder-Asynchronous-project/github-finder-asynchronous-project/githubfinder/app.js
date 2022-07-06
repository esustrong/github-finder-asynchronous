// Init Github
const github = new GitHub;
// Init UI
const ui = new UI;
// search input
const searchUser = document.getElementById('searchUser');
// search input event listner
searchUser.addEventListener('keyup',
  (e) => {
    // get inpu text
    const userText = e.target.value;

    if (userText !== '') {
      // make http call
      github.getUser(userText)
        .then(data => {
          if (data.profile.message === 'Not Found') {
            // show alert
            ui.showAlert('user not found', 'alert alert-danger');

          } else {
            // show profile
            ui.showProfile(data.profile);
            // show Repos
            ui.showRepos(data.repos);
          }
        })



    } else {
      // clear profile
      ui.clearProfile();


    }
  }); 