Handlebars.registerPartial('imagesSlider', `
    <div class="slider-pro" id="my-slider">
        <div class="sp-slides">
            {{#each images}}
                <div class="sp-slide">
                    <img class="sp-image" src="{{src}}"/>
                </div>
            {{/each}}
        </div>
    </div>
`);

var spotDetailsTemplate = Handlebars.compile(`
    <div id="content">
        <div class="siteNotice"></div>
        <h1 class="firstHeading" class="firstHeading">{{title}}</h1>
        <div class="bodyContent">
            <p>{{description}}</p>
             {{#if images}}
                 {{> imagesSlider}}
             {{/if}}
             {{#if videos}}
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/0GtArVAawng" frameborder="0" allowfullscreen></iframe>
             {{/if}}
        </div>
    </div>`);

function initMap() {
    var munich = {lat: 48.1548256, lng: 11.4017521};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: munich
    });

    $.ajax('spots').then(function(spots) {
        spots.map(function(spot) {
            var spotDetails = spotDetailsTemplate({
                title: spot.title,
                description: spot.description,
                images: _.map(spot.images, (src) => { return { src: src }; })
            });

             var infowindow = new google.maps.InfoWindow({
                  content: spotDetails,
                  maxWidth: 400
             });

             var marker = new google.maps.Marker({
                position: spot.position,
                map: map,
                title: spot.title
             });

             marker.addListener('click', function() {
                infowindow.open(map, marker);
                $('#my-slider').sliderPro();
             });
        });
    });
}