class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `<div class="card card-body mb-3">
                                <div class="row">
                                  <div class="col-md-3">
                                    <img src = "${user.avatar_url}" class = "img-fluid mb-2">
                                    <a href = "${user.html_url}" class = "btn btn-primary btn-block mb-4" target="_blank">Visit Profile</a>
                                  </div>
                                  <div class="col-md-9">
                                    <span class = "badge badge-primary mb-1">Public Repos: ${user.public_repos}</span>
                                    <span class = "badge badge-secondary mb-1">Public Gists: ${user.public_gists}</span>
                                    <span class = "badge badge-success mb-1">Followers: ${user.followers}</span>
                                    <span class = "badge badge-info mb-1">Following: ${user.following}</span>
                                    <br><br>
                                    <ul class="list-group">
                                      <li class="list-group-item">Company: ${user.company}</li>
                                      <li class="list-group-item">Website/Blog: ${user.blog}</li>
                                      <li class="list-group-item">Location: ${user.location}</li>
                                      <li class="list-group-item">Member Since: ${user.created_at}</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <h3 class="page-heading mb-3">Latest Repos</h3>
                              <div id="repos"></div>
                              `;
  }

  showRepos(repos) {
    let output = "";
    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href = "${repo.html_url} target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class = "badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class = "badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class = "badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output Repos
    document.getElementById("repos").innerHTML = output;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showAlert(message, className) {
    // Clear Remaining Alerts
    this.clearAlert();

    // Create Alert Div
    const messageDiv = document.createElement("div");

    // Append in div
    messageDiv.append(document.createTextNode(message));

    // Add classes to div
    messageDiv.className = className;

    // Parent of div
    const parent = document.querySelector(".searchContainer");

    // insert before this div
    const cardDiv = document.querySelector(".search");

    // Insert our alert
    parent.insertBefore(messageDiv, cardDiv);

    // Display alert only for 3 seconds
    setTimeout(() => this.clearAlert(), 3000);
  }

  clearAlert() {
    const alertDiv = document.querySelector(".alert");
    if (alertDiv) {
      alertDiv.remove();
    }
  }
}
