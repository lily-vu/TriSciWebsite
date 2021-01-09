import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <section class="hero">
        <div class="hero-body">
          <div class="container ">
            <div class="columns is-8 is-variable ">
              <div class="column is-two-thirds has-text-left">
                <figure class="image is-3by1">
                  <img class ="logo">
                </figure>
                <h1 class="title is-3">Contact Us</h1>
                <p class="is-size-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi soluta
                  voluptate facere molestiae consequatur.</p>
                <div class="social-media">
                  <a href="https://facebook.com" target="_blank" class="button is-light is-large"><i
                      class="fa fa-facebook-square" aria-hidden="true"></i></a>
                  <a href="https://instagram.com" target="_blank" class="button is-light is-large"><i
                      class="fa fa-instagram" aria-hidden="true"></i></a>
                  <a href="https://twitter.com" target="_blank" class="button is-light is-large"><i
                      class="fa fa-twitter" aria-hidden="true"></i></a>
                </div>
              </div>
              <div class="column  has-text-left">
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input class="input is-small" type="text">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input class="input is-small" type="text">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea class="textarea is-small"></textarea>
                  </div>
                </div>
                <div class="control">
                  <button type="submit" class="button is-link is-fullwidth has-text-weight-medium is-small">Send
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </footer>
  `,
  styles: [`
        .logo
        {
          background-image: url('/assets/logoSmall.png') !important;
          background-repeat: no-repeat;
          background-size: cover;
        }
    `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
