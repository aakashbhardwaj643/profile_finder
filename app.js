// Instantiate Github Object
const github = new Github();

// Instantiate UI object
const ui = new UI();

// Search Input
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const findUser = e.target.value;

  if (findUser !== "") {
    github.getUsers(findUser).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show Alert in UI - User Not Found
        ui.showAlert("User is not found", "alert alert-danger");
      } else {
        // Send Profile Data to UI
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Field
    ui.clearProfile();
  }
});
