jQuery(function($) {
  "use strict";
  /* ---------------------------------------------------------------------- */
  /* --------------------------- 17 - Google prettyMaps --------------------*/
  /* ---------------------------------------------------------------------- */
  $('#contact-map').prettyMaps({
	  address: 'Carnes en Quito D´carnes Cool, Rita Lecumberry, Quito, Ecuador',
	  image: 'images/map-icon.png',
	  hue: '#661a1b',
	  saturation: -40,
	  zoom: 18,
	  panControl: true,
	  zoomControl: true,
	  mapTypeControl: true,
	  scaleControl: true,
	  streetViewControl: true,
	  overviewMapControl: true,
	  scrollwheel: false
  });
});
