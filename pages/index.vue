<template>
  <div class="main-container">
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-4">Hello 👋</h1>
        <div class="navbar-light bg-warning p-3 rounded mb-3">
          <h2>I'm Mahmud Hasan Jion,</h2>
        </div>
        <p>
          A Software Engineer with over three years of experience in
          software and web development. <br />
          I have completed my Master's in Software Engineering at the
          <a href="https://www.herts.ac.uk/" class="link" target="_blank">
            University of Hertfordshire
          </a>.
          I earned my Bachelor's in Computer Science & Engineering from
          <a href="https://www.aiub.edu/" class="link" target="_blank">
            American International University-Bangladesh (AIUB)
          </a>, and have since been working as a Web Developer with experience in building multi-vendor E-commerce platforms.
        </p>
        <h4>Currently working with</h4>
        <div class="navbar-light bg-warning p-3 rounded mb-3">
          <h3>
            PHP, CodeIgniter, Laravel, JavaScript, Vue.js, React, Next/Nuxt, Node.js, Ruby, and Python
          </h3>
        </div>
        <div>
          <h4>Check out my works and profiles</h4>
          <ul class="profile-links">
            <li>
              <a href="https://github.com/MahmudJion" class="link" target="_blank">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mahmud-hasan-jion/" class="link" target="_blank">LinkedIn</a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/10030431/mahmud-hasan-jion" class="link" target="_blank">Stack Overflow</a>
            </li>
            <li>
              <a href="https://scholar.google.com/citations?user=rvFKahIAAAAJ&hl=en" class="link" target="_blank">Google Scholar</a>
            </li>
            <li>
              <a href="https://herts.academia.edu/MahmudHasanJion" class="link" target="_blank">Academia.edu</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
  export default {}
  </script>

  <style>
  .main-container {
    margin: 8px;
    padding: 5vh 10vw;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-links {
    list-style-type: none;
    padding-left: 0;
  }

  .profile-links li {
    margin-bottom: 10px;
  }

  .link {
    text-decoration: none;
    color: inherit;
  }

  .link:hover {
    text-decoration: underline;
  }
  </style>
