
    $(document).ready(function() {

      $("#owl-product-slider").owlCarousel({
          navigation : false,
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
          autoPlay:true,
          stopOnHover: true,
          loop: true,
          rewindSpeed: 1000,
          rewindNav: true,
      });

       $("#owl-brand-slider").owlCarousel({
          navigation : false,
          slideSpeed : 200,
          paginationSpeed : 500,
          singleItem:false,
          autoPlay:true,
          items:6,
          stopOnHover: true,
          loop: true,
          rewindSpeed: 1000,
          rewindNav: true,
          pagination: false,
      });

    });

