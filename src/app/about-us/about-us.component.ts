import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `
    <!-- Hero Section --->
    <section class="hero is-dark is-bold is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title has-text-weight-bold">
            ABOUT US
          </h1>
        </div>
      </div>
    </section>
    
    <div class="columns">
      <div class="column is-one-third">
        <figure class="image is-square">
          <img class ="justin">
        </figure>
      </div>
      
      <div class="column is-two-thirds">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum tortor eget feugiat condimentum. Aenean ultricies sollicitudin suscipit. Fusce porttitor turpis lacus, non faucibus odio aliquam quis. Nunc ornare lectus vitae laoreet accumsan. 
        Suspendisse in neque eu nulla mattis aliquet ut id nulla. Nunc fermentum est sem, non bibendum nibh consectetur quis. Vestibulum molestie dolor pharetra metus malesuada, quis blandit odio eleifend. Fusce dignissim ultricies est nec tincidunt.
        <div></div> 
        Fusce lobortis odio neque. Nullam nec felis dolor. Vestibulum aliquet ultrices luctus. Ut sit amet nulla mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sed purus in sem pretium pulvinar 
        sed et ipsum. Duis porttitor luctus nulla vel commodo.
      </div>
    </div>

    <h1 class="title has-text-centered">Our Values</h1>
    <div></div>

    <div class="columns is-centered" style="padding: 2rem">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Value 1</p>
                <p class="subtitle is-6">Suspendisse pharetra ante vehicula malesuada elementum. Sed aliquet elit risus, hendrerit imperdiet ligula aliquet at.</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec turpis lacus, congue non ipsum id, vestibulum auctor nunc. 
              Vivamus mattis mi vel nunc mollis rutrum. Etiam auctor tortor sed 
              leo tincidunt egestas. Etiam in sem ante. Ut at massa erat. Quisque a dapibus magna. Nulla facilisi. 
              
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Value 2</p>
                <p class="subtitle is-6">Suspendisse pharetra ante vehicula malesuada elementum. Sed aliquet elit risus, hendrerit imperdiet ligula aliquet at.</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.

            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Value 3</p>
                <p class="subtitle is-6">Suspendisse pharetra ante vehicula malesuada elementum.</p>
              </div>
            </div>

            <div class="content">
              Vivamus ante dolor, porta ut turpis vitae, vehicula tempor risus. 
              Duis non luctus quam, eu mollis velit. Phasellus facilisis, felis quis volutpat mattis, 
              tortor ex blandit purus, eu pretium eros metus in ligula. Nunc et consectetur nunc, nec euismod massa. 
              Mauris elementum turpis orci, a elementum ante congue ac. 

            </div>
          </div>
        </div>
      </div>
    </div>

    <h1 class="title has-text-centered">Our Acomplishments</h1>
    <p class="has-text-centered">
      Vivamus ante dolor, porta ut turpis vitae, vehicula tempor risus.
      Duis non luctus quam, eu mollis velit. Phasellus facilisis, felis quis volutpat mattis,
      tortor ex blandit purus, eu pretium eros metus in ligula. Nunc et consectetur nunc, nec euismod massa.
      Mauris elementum turpis orci, a elementum ante congue ac.
    </p>

 <div >
   <iframe src="https://createaclickablemap.com/map.php?&id=99206&maplocation=false&online=true" width="1400" height="1025" style="border: none;"></iframe>
   <script class="is-centered">if (window.addEventListener){ window.addEventListener("message", function(event) { if(event.data.length >= 22) { if( event.data.substr(0, 22) == 
       "__MM-LOCATION.REDIRECT") location = event.data.substr(22); } }, false); } else if (window.attachEvent){ window.attachEvent("message", function(event) 
   { if( event.data.length >= 22) { if ( event.data.substr(0, 22) == "__MM-LOCATION.REDIRECT") location = event.data.substr(22); } }, false); } </script>
 </div>
  `,
  styles: [`
      .hero 
      {
        margin-bottom: 50px;
        background-image: url('/assets/dallas.jpeg') !important;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
      }
      .justin{
        background-image: url('/assets/justin.jfif')!important;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        
      }

      `]
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
