// Hamburger
jQuery(document).ready(function($) {
    // Function to handle clicks outside the menu
    $(document).on('click', function(event) {
        // Check if the clicked element is not within the menu or the hamburger icon
        if (!$(event.target).closest('.collapse').length && !$(event.target).closest('#nav-icon3').length) {
            // Close the menu if it is open
            $('.collapse').removeClass('Show');
            // Remove the 'open' class from the hamburger icon
            $('#nav-icon3').removeClass('open');
        }
    });

    // Toggle the menu when the hamburger icon is clicked
    $("#nav-icon3").click(function() {
        $('.collapse').toggleClass('Show');
        $(this).toggleClass('open');
    });



    // Function to handle clicks outside the menu
    $(document).on('click', function(event) {
        // Check if the clicked element is not within the menu or the hamburger icon
        if (!$(event.target).closest('.collapse').length && !$(event.target).closest('#nav-icon3').length) {
            // Close the menu if it is open
            $('.collapse').removeClass('Show');
            // Remove the 'open' class from the hamburger icon
            $('#nav-icon3').removeClass('open');
        }

        else if (!$(event.target).closest('.d-collapse').length && !$(event.target).closest('#nav-icon2').length) {
            // Close the menu if it is open
            console.log('hi');
            $('.d-collapse').removeClass('Show');
            // Remove the 'open' class from the hamburger icon
            $('#nav-icon2').removeClass('open');
        }
    });

    $("#nav-icon2").click(function() {
        console.log('hi');
        $('.d-collapse').toggleClass('Show');
        $(this).toggleClass('open');
    });

    $('#varients .view-more').click(function() {
        // Select the first 3 hidden items and show them
        $('#varients .varient-content.hidden').slice(0, 3).removeClass('hidden').show();
        
        // If no more hidden items, hide the 'View More' button
        if ($('#varients .varient-content.hidden').length === 0) {
          $('#varients .view-more').hide();
        }
        $('#varients .view-less').show();
      });

      // Show less items
  $('#varients .view-less').click(function() {
    // Hide all items except the first 3
    $('#varients .varient-content').slice(3).addClass('hidden').hide();
    
    // Show the 'View More' button again
    $('#varients .view-more').show();
    $('#varients .view-less').hide();
  });



  $('#diesel .diesel-view-more').click(function() {
    // Select the first 3 hidden items and show them
    $('#diesel  .varient-content.hidden').slice(0, 2).removeClass('hidden').show();
    
    // If no more hidden items, hide the 'View More' button
    if ($('#diesel .varient-content.hidden').length === 0) {
      $('#diesel .diesel-view-more').hide();
    }
    $('#diesel .diesel-view-less').show();
  });

  // Show less items
$('#diesel .diesel-view-less').click(function() {
// Hide all items except the first 3
$('#diesel .varient-content').slice(2).addClass('hidden').hide();

// Show the 'View More' button again
$('#diesel .diesel-view-more').show();
$('#diesel .diesel-view-less').hide();
});


$('#petrol .petrol-view-more').click(function() {
    // Select the first 2 hidden items and show them
    $('#petrol .varient-content.hidden').slice(0, 2).removeClass('hidden').show();
    
    // If no more hidden items, hide the 'View More' button
    if ($('#petrol .varient-content.hidden').length === 0) {
      $('#petrol .petrol-view-more').hide();
    }
    $('#petrol .petrol-view-less').show();
  });

  // Show less items
$('#petrol .petrol-view-less').click(function() {
// Hide all items except the first 1
$('#petrol .varient-content').slice(2).addClass('hidden').hide();

// Show the 'View More' button again
$('#petrol .petrol-view-more').show();
$('#petrol .petrol-view-less').hide();
});


$('#automatic .automatic-view-more').click(function() {
    // Select the first 2 hidden items and show them
    $('#automatic .varient-content.hidden').slice(0, 1).removeClass('hidden').show();
    
    // If no more hidden items, hide the 'View More' button
    if ($('#automatic .varient-content.hidden').length === 0) {
      $('#automatic .automatic-view-more').hide();
    }
    $('#automatic .automatic-view-less').show();
  });

  // Show less items
$('#automatic .automatic-view-less').click(function() {
// Hide all items except the first 1
$('#automatic .varient-content').slice(1).addClass('hidden').hide();

// Show the 'View More' button again
$('#automatic .automatic-view-more').show();
$('#automatic .automatic-view-less').hide();
});



// expert advice
$('#exterior .view-more-advice-btn').click(function() {
    // Select the first 2 hidden items and show them
    $('#exterior .xuv-700-5.hidden').slice(0, 2).removeClass('hidden').show();
    
    // If no more hidden items, hide the 'View More' button
    if ($('#exterior .xuv-700-5.hidden').length === 0) {
      $('#exterior .view-more-advice-btn').hide();
    }
    $('#exterior .view-less-advice-btn').show();
  });

  // Show less items
$('#exterior .view-less-advice-btn').click(function() {
// Hide all items except the first 1
$('#exterior .xuv-700-5').slice(1).addClass('hidden').hide();

// Show the 'View More' button again
$('#exterior .view-more-advice-btn').show();
$('#exterior .view-less-advice-btn').hide();
});

$('.review .review-view-more').click(function() {
    // Select the first 2 hidden items and show them
    $('.review .user-review-wrapper .review-card.hidden').slice(0, 9).removeClass('hidden').show();
    
    // If no more hidden items, hide the 'View More' button
    if ($('.review-card.hidden').length === 0) {
      $('.review .review-view-more').hide();
    }
    $('.review .review-view-less').show();
  });

  // Show less items
$('.review .review-view-less').click(function() {
// Hide all items except the first 1
$('.review .review-card').slice(3).addClass('hidden').hide();

// Show the 'View More' button again
$('.review .review-view-more').show();
$('.review .review-view-less').hide();
});


if($('#owl-videos').length){
    $("#owl-videos").owlCarousel({
        nav: true,
        navText: ['', '<i class="fas fa-arrow-right"></i>'],
        autoplay: true,
        dots: false,
        items: 3,
        margin: 10,
        itemsDesktop: true,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,
        responsive:{
            0:{
               items: 1
           },
           600:{
               items:2,
               margin: 10
           },
           1025:{
               items:3,
                margin: 10,
                nav:true,

           }
        }
    });
}

$('.video-icon-wrapper').on('click', function() {
    var videoWrapper = $(this).closest('.video-card'); // Get the parent video card
    var iframe = videoWrapper.find('iframe'); // Find the iframe inside the video card
    
    // Check if it's a YouTube iframe
    if (iframe.length) {
        var videoSrc = iframe.attr('src');
        // Add autoplay to the iframe source if not already present
        var autoplaySrc = videoSrc.includes('?') ? videoSrc + "&autoplay=1" : videoSrc + "?autoplay=1";
        iframe.attr('src', autoplaySrc); // Update the iframe source to trigger autoplay
    }

    // Hide the video icon wrapper (play icon)
    $(this).hide();
});
 });

