class GitHub {
  constructor() {
    // we need to set TOKEN on GitHUb To Work
    this.config = {
      headers: {
        // token YOUR_TOKEN_HERE put your TOKEN CODE HERE
        Authorization: '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 '
      }
    }
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
    )

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    )

    const profile = await profileResponse.json()

    const repos = await repoResponse.json()

    return {
      profile
      , repos
    }
  }

  //  GITHHUB WITH client ID and SECRET
  // constructor() {

  //   this.client_id = '880c73fc16473ac9375d';
  //   this.client_secret = 'b02f520997a7b64be3e7cb17e141f9aca8921234';
  //   this.repos_count = 5;
  //   this.repos_sort = `created:asc`;
  // }

  // async getUser(user) {
  //   const profileResponse = await fetch(`https://api.github.com/users/${user}
  //   ?client_id=${this.client_id}&client_secret=${this.client_secret}`);

  //   const repoResponse = await fetch(`https://api.github.com/users/${user}/repo?
  //   per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

  //   const profile = await profileResponse.json();
  //   const repos = await repoResponse.json();
  //   return {
  //     profile,
  //     repos

  //   }

  // }
  // async getUser(user) {
  //   const profileResponse = await fetch(
  //     `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
  //   )
  //   if (!profileResponse.ok) {
  //     throw Error(`No user found with name ${user}`)
  //   }

  //   const profile = await profileResponse.json()

  //   return {
  //     profile
  //   }
  // }



}