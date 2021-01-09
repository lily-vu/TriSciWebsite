import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <!-- Hero Section --->
    <section class="hero is-dark is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title has-text-weight-bold">
            TRI SCI PROFESSIONS
          </h1>
        </div>
      </div>
    </section>
    
    <!-- Introduction Section --->
    <body>
    <section class="section">
      <div class="container">
        <h1 class="title has-text-centered">Innovators. Professionals. Coaches.</h1>
        <div></div>
        <h2 class="subtitle has-text-centered">
          Tri Sci is the only company that can hire interns on the spot. 
          No more waiting. No more stress. We fit people directly into what 
          we know our corporate partners want most.
        </h2>
        <h2 class="subtitle has-text-centered">
          Why not join our fast growing customer base? Get in touch today to 
          learn more about the Tri Sci story.
        </h2>
        <div class="has-text-centered">
          <button class="button is-rounded"> Contact Us </button>
        </div>
        
      </div>
    </section>
    </body>
      
      <!-- Image section --->
      <section class="hero2 ">
      </section>
      
      <!-- Main Section --->
      <body>
      <section class="section">
        <div class="container">
          <h1 class="title has-text-centered">Our Mission</h1>
          <div></div>
          <h2 class="subtitle has-text-centered">
            Tri Sci's mission is to provide the best and most effective job opportunities 
            for the problem solvers of the world. This is especially during these difficult 
            times where job security is on everyone's mind. We are offering a new summer internship 
            program to prepare those wanting to join us with the skills that they need for the future.


          </h2>
        </div>
      </section>
      </body>
      
      <!--- Alumni Testimonies Section-->
        <section>
          <div class="columns is-centered" style="padding: 2rem">
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-square">
                    <img class = "soham">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Soham Mukhurjee</p>
                      <p class="subtitle is-6">@soham</p>
                    </div>
                  </div>

                  <div class="content">
                    Tri Sci is a good experience to start out when learning about 
                    STEM career paths. For my first year internship at the company, 
                    I worked with a great team to help design the company's website 
                    and learn about medical informatics.
                    
                    <a>@Soham-Mukhurjee</a>.
                    <a href="#">#WebDevelopment</a>
                    <a href="#">#Healthcare</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-square">
                    <img class="sophie">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Sophie Sun</p>
                      <p class="subtitle is-6">@sophie</p>
                    </div>
                  </div>

                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    <a>@sophie-s</a>.

                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-square">
                    <img class ="lily">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Lily Vu</p>
                      <p class="subtitle is-6">@lily</p>
                    </div>
                  </div>

                  <div class="content">
                    Tri sci is a land of opportunity! The founders are ambitious to help
                    and encourage us volunteers to go above and beyond. I've learned to take
                    initiative in the projects that they have given me, especially in making 
                    website!
                    <a>@lilyvu22</a>.
                    <a href="#">#WebDevelopment</a>
                    <a href="#">#Leadership</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  `,
  styles: [`
      .hero 
      {
        background-attachment: fixed;
        background-image: url('/assets/homepage.jpeg') !important;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .hero2
      {
        height: 500px;
        background-attachment: fixed;
        background-image: url('/assets/Team.jpeg') !important;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      
      .soham
      {
        background-image: url('/assets/soham.jfif') !important;
        background-repeat: no-repeat;
        background-size: cover;
      }
      
      .sophie
      {
        background-image: url('/assets/sophie.jfif') !important;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .lily
      {
        background-image: url('/assets/lily.jfif') !important;
        background-repeat: no-repeat;
        background-size: cover;
      }


  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
