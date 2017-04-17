Handlebars.registerPartial('imagesSlider', `
    <div class="slider-pro" id="my-slider">
        <div class="sp-slides">
            {{#each images}}
                <div class="sp-slide">
                    <img class="sp-image" src="{{url}}"/>
                </div>
            {{/each}}
        </div>
    </div>
`);

Handlebars.registerPartial('videos',`
        {{#each videos}}
            <iframe width="336" height="189"
                src="https://www.youtube.com/embed/gyLMVySui6k" frameborder="0" allowfullscreen></iframe>
        {{/each}}` )

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
                  {{> videos}}
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
                images: _.map(spot.images, (url) => { return { url: url }; }),
                videos: _.map(spot.videos, (url) => { return { url: url }; })
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