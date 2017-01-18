/*
Plugin Name: Async JavaScript for Wordpress

*/


function isChecked() {
	if (jQuery('#aj_enabled').prop('checked')) {
		jQuery('.aj_method').show();
	} else {
		jQuery('.aj_method').hide();
	}
}

/**
 *	functions and actions to load after document ready
 */
jQuery(document).ready(function() {
	isChecked();

	jQuery(document).on('click','#aj_enabled',function() {
		isChecked();
	});

	jQuery(document).on('click','.aj-upgrade-notice .notice-dismiss',function() {
	    jQuery.ajax({
	        url: aj.ajaxurl,
	        data: {
	            action: 'async_javascript_dismiss_upgrade'
	        }
	    });
	});
});