import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand ">
        <a class="navbar-item" href="http://localhost:4200/">
          <img src="/assets/TriSciProfessions Long.png" >
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" routerLink="about-us">
            About Us
          </a>

          <a class="navbar-item" routerLink="our-partners">
            Our Partners
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a  class="navbar-item" routerLink="current-projects">
                Current Projects
              </a>
              <a class="navbar-item">
                Events
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Our Team
              </a>
            </div>
          </div>
        </div>

        <div class="navbar">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-dark">
                <strong>Get Involved</strong>
              </a>
              <a class="button is-light">
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
