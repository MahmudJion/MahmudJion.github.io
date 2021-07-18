<template>
  <div>
    <b-container>
      <div>
        <b-jumbotron header="Hello 👋" lead="">
          <b-navbar type="light" variant="warning">
            <h2>I'm Mahmud Hasan Jion,</h2>
          </b-navbar>
          <br />
          <p>
            A Software Engineer with more than two years of experience in
            software and web development. <br />I have completed my Bachelor in
            Computer Science & Engineering from American International
            University-Bangladesh (AIUB) and since then working as web developer
            and had some experience on building multi-vendors E-commerce
            platforms.
          </p>
          <h4>Currently working with</h4>
          <b-navbar type="light" variant="warning">
            <h3>
              PHP, Codeigniter, Vue.js/React, Javascript, Next/Nuxt and Node.js
            </h3>
          </b-navbar>
          <br />
          <div>
            <h4>Check my works and profile</h4>
              <ul class="ul">
                <li>
                  <a href="https://github.com/MahmudJion" style="text-decoration: none; color:#24292E" target="_blank">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mahmud-hasan-jion/" style="text-decoration: none; color:#0A66C2" target="_blank">Linkedin</a>
                </li>
                <li>
                  <a href="https://twitter.com/mahmudhasanjion" style="text-decoration: none; color:#1A91DA" target="_blank">Twitter</a>
                </li>
                <li>
                  <a href="https://stackoverflow.com/users/10030431/mahmud-hasan-jion" style="text-decoration: none; color:#F3862F" target="_blank">Stack Overflow</a>
                </li>
              </ul>
          </div>
        </b-jumbotron>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 8px;
  padding: 5vh 10vw;
  min-height: 80vh;
  display: flex;
  justify-content: right;
  align-items: center;
}
.ul {
  list-style-type: square;
}
</style>
