class Github {
  constructor() {
    this.client_id = "bb4447f5d7c597b9cfbc";
    this.client_secret = "2349cbe5834156ae63ee41d883cdc9f50b701f99";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUsers(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();

    return {
      profile: profileData,
      repos: reposData,
    };
  }
}
