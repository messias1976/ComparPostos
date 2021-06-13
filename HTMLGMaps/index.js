// The following example creates five accessible and
// focusable markers.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: -23.012164182599054, lng: -46.76729770637179 },
    });
    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const tourStops = [
      [{ lat: -23.012164182599054, lng: -46.76729770637179 }, "Minha Localização"],
      [{ lat: -23.028402375986214,lng: -46.74902657467561 },"Posto Morro Azul - Gasolina 510  - Alcooul 420  - Diesel 350"],
      [{ lat: -22.995427323344607, lng:-46.84830660125615 }, "Posto Shell - Gasolina 500  - Alcooul 410 - Diesel 350"],
      [{ lat: -22.97386665115416,lng: -46.77070786647239 }, "Posto Moenda - Gasolina 550   - Alcooul 430  -  Diesel- 380"],
     
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
    // Create the markers.
    tourStops.forEach(([position, title, preco], i) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${i + 1}. ${title}`,
        label: `${i + 1}`,
        preco: `${i + 1}`,
        optimized: true,
      });
      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      });
    });
  }
