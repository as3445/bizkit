
jQuery(document).ready(function(){

  jQuery.noConflict();

  jQuery('#main-nav').tinyNav({
	    header: 'Navigation' // Writing any title with this option triggers the header
  });

  jQuery( '.cycle-slideshow' ).cycle();

});
