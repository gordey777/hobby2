<?php /* Template Name: Home page */
get_header(); ?>


    <div class="field-main-slider block" style="overflow: hidden;">
      <div id="insideslider_mod" class="outer-slide" style="width: 1920px; height: 500px">
        <div class="loading">
          <div class="bg-loading"></div>
          <div class="icon-loading"></div>
        </div>

        <div data-u="slides" style="width: 1920px; height: 500px">
                              <?php if( have_rows('product_slider') ): ?>
          <?php while ( have_rows('product_slider') ) : the_row(); ?>
          <div class="field-main-slider_1">

               <a href="<?php the_sub_field('product_link'); ?>">
                      <?php $image = get_sub_field('product_image');
                      if( !empty($image) ): ?>
                      <img class="front-baner" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                      <?php endif; ?>
                      </a>
                    </div>
                  <?php  endwhile;
                  else : ?>
              <?php endif; ?>
            </div>









        <div data-u="navigator">
          <div data-u="prototype"></div>
        </div>
      </div>
    </div>
    <div class="columns-container">
      <div id="columns" class="container">
        <div id="slider_row" class="row"></div>
        <div id="center_column" class="center_column ">
          <div class="clearfix">
            <div class="home-banner row">
              <div class="banner-home col-sm-4 col-md-4 col-xs-12">
                <div class="hover_banner_img banner_1">
                  <a href="#"> <img alt="" src="<?php echo get_template_directory_uri(); ?>/img/banner-home-1.jpg"> </a>
                </div>
              </div>
              <div class="banner-home col-sm-4 col-md-4 col-xs-12">
                <div class="hover_banner_img banner_2">
                  <a href="#"> <img alt="" src="<?php echo get_template_directory_uri(); ?>/img/banner-home-2.jpg"> </a>
                </div>
              </div>
              <div class="banner-home col-sm-4 col-md-4 col-xs-12">
                <div class="hover_banner_img banner_4">
                  <a href="#"> <img alt="" src="<?php echo get_template_directory_uri(); ?>/img/banner-home-4.jpg"> </a>
                </div>
              </div>
            </div>
            <div id="fieldtabproductsisotope" class="block title_center horizontal_mode">
              <div class="row">
                <div class="title_block title_font">
                  <div class="title_text">
                    <ul class="fieldtabproductsisotope-filters tabs">
                      <li class="fieldtabproductsisotope-filter title_font">
                        <a href="#" data-filter="fatured-products" class="active"> <span class="text">Fatured products</span> </a>
                      </li>
                      <li class="fieldtabproductsisotope-filter title_font">
                        <a href="#" data-filter="onsale" class=""> <span class="text">Onsale</span> </a>
                      </li>
                      <li class="fieldtabproductsisotope-filter title_font">
                        <a href="#" data-filter="bestseller" class=""> <span class="text">Bestseller</span> </a>
                      </li>
                    </ul> <em class="logo-circle"><i class="circle"></i></em></div>
                </div>
                <div class="fieldtabproductsisotope-products">
                  <ul class="isotope-grid">
                    <li class="col-product-iso isotope-item item fatured-products bestseller">
                      <div class="item-wrapper">
                        <div class="item-inner">
                          <div class="left-block">
                            <a class="product_img" href="#" title=""> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/dog-beautiful(1).jpg" alt="Dog Beautiful" title="Dog Beautiful" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/dog-beautiful(2).jpg" height="216" width="216" alt=""> </span> </a> <span class="new">New</span> <span class="sale">Sale</span>
                            <div class="button-container">
                              <div class="box-button-cart">
                                <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="1" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                              </div>
                              <div class="box-button-quick-view">
                                <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                              </div>
                              <div class="box-button-wishlist splist">
                                <a class="title_font addToWishlist wishlistProd_1" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;1&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                              </div>
                              <div class="box-button-compare">
                                <a class="btn btn-theme add_to_compare" href="#" data-id-product="1"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                              </div>
                            </div>
                          </div>
                          <div class="right-block">
                            <h5 class="sub_title_font"> <a class="product-name" href="#" title="Dog Beautiful"> Dog Beautiful </a></h5>
                            <div class="price-rating">
                              <div class="content_price"> <span class="price product-price"> $16.51 </span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-product-iso isotope-item item fatured-products bestseller">
                      <div class="item-wrapper">
                        <div class="item-inner">
                          <div class="left-block">
                            <a class="product_img" href="#" title=""> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/dog-and-cat.jpg" alt="Dog and Cat" title="Dog and Cat" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/dog-and-cat(1).jpg" height="216" width="216" alt=""> </span> </a> <span class="new">New</span>
                            <div class="button-container">
                              <div class="box-button-cart">
                                <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="2" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                              </div>
                              <div class="box-button-quick-view">
                                <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                              </div>
                              <div class="box-button-wishlist splist">
                                <a class="title_font addToWishlist wishlistProd_2" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;2&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                              </div>
                              <div class="box-button-compare">
                                <a class="btn btn-theme add_to_compare" href="#" data-id-product="2"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                              </div>
                            </div>
                          </div>
                          <div class="right-block">
                            <h5 class="sub_title_font"> <a class="product-name" href="#" title="Dog and Cat"> Dog and Cat </a></h5>
                            <div class="price-rating">
                              <div class="content_price"> <span class="price product-price"> $27.00 </span></div>
                              <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                                <div class="star_content clearfix" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <meta itemprop="worstRating" content="0">
                                  <meta itemprop="ratingValue" content="5">
                                  <meta itemprop="bestRating" content="5">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-product-iso isotope-item item fatured-products bestseller">
                      <div class="item-wrapper">
                        <div class="item-inner">
                          <div class="left-block">
                            <a class="product_img" href="#" title=""> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/cute-cat.jpg" alt="Cute Cat" title="Cute Cat" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/cute-cat(1).jpg" height="216" width="216" alt=""> </span> </a> <span class="new">New</span> <span class="sale">Sale</span>
                            <div class="button-container">
                              <div class="box-button-cart">
                                <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="3" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                              </div>
                              <div class="box-button-quick-view">
                                <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                              </div>
                              <div class="box-button-wishlist splist">
                                <a class="title_font addToWishlist wishlistProd_3" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;3&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                              </div>
                              <div class="box-button-compare">
                                <a class="btn btn-theme add_to_compare" href="#" data-id-product="3"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                              </div>
                            </div>
                          </div>
                          <div class="right-block">
                            <h5 class="sub_title_font"> <a class="product-name" href="#" title="Cute Cat"> Cute Cat </a></h5>
                            <div class="price-rating">
                              <div class="content_price"> <span class="price product-price"> $26.00 </span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-product-iso isotope-item item fatured-products">
                      <div class="item-wrapper">
                        <div class="item-inner">
                          <div class="left-block">
                            <a class="product_img" href="#" title=""> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/love-bird.jpg" alt="Love Bird" title="Love Bird" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/love-bird(1).jpg" height="216" width="216" alt=""> </span> </a> <span class="new">New</span>
                            <div class="button-container">
                              <div class="box-button-cart">
                                <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="4" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                              </div>
                              <div class="box-button-quick-view">
                                <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                              </div>
                              <div class="box-button-wishlist splist">
                                <a class="title_font addToWishlist wishlistProd_4" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;4&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                              </div>
                              <div class="box-button-compare">
                                <a class="btn btn-theme add_to_compare" href="#" data-id-product="4"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                              </div>
                            </div>
                          </div>
                          <div class="right-block">
                            <h5 class="sub_title_font"> <a class="product-name" href="#" title="Love Bird"> Love Bird </a></h5>
                            <div class="price-rating">
                              <div class="content_price"> <span class="price product-price"> $50.99 </span></div>
                              <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                                <div class="star_content clearfix" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <meta itemprop="worstRating" content="0">
                                  <meta itemprop="ratingValue" content="5">
                                  <meta itemprop="bestRating" content="5">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-product-iso isotope-item item fatured-products bestseller">
                      <div class="item-wrapper">
                        <div class="item-inner">
                          <div class="left-block">
                            <a class="product_img" href="#" title=""> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/bird-beautiful.jpg" alt="Bird Beautiful" title="Bird Beautiful" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/bird-beautiful(1).jpg" height="216" width="216" alt=""> </span> </a> <span class="new">New</span>
                            <div class="button-container">
                              <div class="box-button-cart">
                                <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="5" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                              </div>
                              <div class="box-button-quick-view">
                                <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                              </div>
                              <div class="box-button-wishlist splist">
                                <a class="title_font addToWishlist wishlistProd_5" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;5&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                              </div>
                              <div class="box-button-compare">
                                <a class="btn btn-theme add_to_compare" href="#" data-id-product="5"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                              </div>
                            </div>
                          </div>
                          <div class="right-block">
                            <h5 class="sub_title_font"> <a class="product-name" href="#" title="Bird Beautiful"> Bird Beautiful </a></h5>
                            <div class="price-rating">
                              <div class="content_price"> <span class="price product-price"> $30.51 </span></div>
                              <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                                <div class="star_content clearfix" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <meta itemprop="worstRating" content="0">
                                  <meta itemprop="ratingValue" content="5">
                                  <meta itemprop="bestRating" content="5">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-product-iso isotope-item item fatured-products bestseller">
                      <div class="item-wrapper">
                        <div class="item-inner">
                          <div class="left-block">
                            <a class="product_img" href="#" title=""> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/cute-cat-love.jpg" alt="Cute Cat Love" title="Cute Cat Love" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/cute-cat-love(1).jpg" height="216" width="216" alt=""> </span> </a> <span class="new">New</span>
                            <div class="button-container">
                              <div class="box-button-cart">
                                <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="7" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                              </div>
                              <div class="box-button-quick-view">
                                <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                              </div>
                              <div class="box-button-wishlist splist">
                                <a class="title_font addToWishlist wishlistProd_7" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;7&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                              </div>
                              <div class="box-button-compare">
                                <a class="btn btn-theme add_to_compare" href="#" data-id-product="7"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                              </div>
                            </div>
                          </div>
                          <div class="right-block">
                            <h5 class="sub_title_font"> <a class="product-name" href="#" title="Cute Cat Love"> Cute Cat Love </a></h5>
                            <div class="price-rating">
                              <div class="content_price"> <span class="price product-price"> $20.50 </span></div>
                              <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                                <div class="star_content clearfix" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <meta itemprop="worstRating" content="0">
                                  <meta itemprop="ratingValue" content="5">
                                  <meta itemprop="bestRating" content="5">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-product-iso isotope-item item fatured-products">
                      <div class="item-wrapper">
                        <div class="item-inner">
                          <div class="left-block">
                            <a class="product_img" href="#" title="Pilot Jacket"> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/macaw-parrot.jpg" alt="Pilot Jacket" title="Pilot Jacket" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/macaw-parrot(1).jpg" height="216" width="216" alt="Pilot Jacket"> </span> </a> <span class="new">New</span>
                            <div class="button-container">
                              <div class="box-button-cart">
                                <a class="ajax_add_to_cart_button btn" href="#"> <i class="icon-shopping-cart"></i> <span>Out stock</span> </a>
                              </div>
                              <div class="box-button-quick-view">
                                <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                              </div>
                              <div class="box-button-wishlist splist">
                                <a class="title_font addToWishlist wishlistProd_8" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;8&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                              </div>
                              <div class="box-button-compare">
                                <a class="btn btn-theme add_to_compare" href="#" data-id-product="8"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                              </div>
                            </div>
                          </div>
                          <div class="right-block">
                            <h5 class="sub_title_font"> <a class="product-name" href="#" title="Macaw Parrot"> Macaw Parrot </a></h5>
                            <div class="price-rating">
                              <div class="content_price"> <span class="price product-price"> $60.00 </span></div>
                              <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                                <div class="star_content clearfix" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star"></div>
                                  <meta itemprop="worstRating" content="0">
                                  <meta itemprop="ratingValue" content="4">
                                  <meta itemprop="bestRating" content="5">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-product-iso isotope-item item fatured-products">
                      <div class="item-wrapper">
                        <div class="item-inner">
                          <div class="left-block">
                            <a class="product_img" href="#" title=""> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/black-cat.jpg" alt="Black Cat" title="Black Cat" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/black-cat(1).jpg" height="216" width="216" alt=""> </span> </a> <span class="new">New</span>
                            <div class="button-container">
                              <div class="box-button-cart">
                                <a class="ajax_add_to_cart_button btn" href="#"> <i class="icon-shopping-cart"></i> <span>Customize</span> </a>
                              </div>
                              <div class="box-button-quick-view">
                                <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                              </div>
                              <div class="box-button-wishlist splist">
                                <a class="title_font addToWishlist wishlistProd_10" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;10&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                              </div>
                              <div class="box-button-compare">
                                <a class="btn btn-theme add_to_compare" href="#" data-id-product="10"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                              </div>
                            </div>
                          </div>
                          <div class="right-block">
                            <h5 class="sub_title_font"> <a class="product-name" href="#" title="Black Cat"> Black Cat </a></h5>
                            <div class="price-rating">
                              <div class="content_price"> <span class="price product-price"> $50.99 </span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-product-iso isotope-item item fatured-products">
                      <div class="item-wrapper">
                        <div class="item-inner">
                          <div class="left-block">
                            <a class="product_img" href="#" title="Cockatoo"> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/cockatoo.jpg" alt="Cockatoo" title="Cockatoo" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/cockatoo(1).jpg" height="216" width="216" alt="Cockatoo"> </span> </a> <span class="new">New</span>
                            <div class="button-container">
                              <div class="box-button-cart">
                                <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="11" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                              </div>
                              <div class="box-button-quick-view">
                                <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                              </div>
                              <div class="box-button-wishlist splist">
                                <a class="title_font addToWishlist wishlistProd_11" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;11&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                              </div>
                              <div class="box-button-compare">
                                <a class="btn btn-theme add_to_compare" href="#" data-id-product="11"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                              </div>
                            </div>
                          </div>
                          <div class="right-block">
                            <h5 class="sub_title_font"> <a class="product-name" href="#" title="Cockatoo"> Cockatoo </a></h5>
                            <div class="price-rating">
                              <div class="content_price"> <span class="price product-price"> $20.50 </span></div>
                              <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                                <div class="star_content clearfix" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <meta itemprop="worstRating" content="0">
                                  <meta itemprop="ratingValue" content="5">
                                  <meta itemprop="bestRating" content="5">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-product-iso isotope-item item fatured-products">
                      <div class="item-wrapper">
                        <div class="item-inner">
                          <div class="left-block">
                            <a class="product_img" href="#" title="Swallow"> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/swallow.jpg" alt="Swallow" title="Swallow" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/swallow(1).jpg" height="216" width="216" alt="Swallow"> </span> </a> <span class="new">New</span> <span class="sale">Sale</span>
                            <div class="button-container">
                              <div class="box-button-cart">
                                <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="12" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                              </div>
                              <div class="box-button-quick-view">
                                <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                              </div>
                              <div class="box-button-wishlist splist">
                                <a class="title_font addToWishlist wishlistProd_12" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;12&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                              </div>
                              <div class="box-button-compare">
                                <a class="btn btn-theme add_to_compare" href="#" data-id-product="12"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                              </div>
                            </div>
                          </div>
                          <div class="right-block">
                            <h5 class="sub_title_font"> <a class="product-name" href="#" title="Swallow"> Swallow </a></h5>
                            <div class="price-rating">
                              <div class="content_price"> <span class="price product-price"> $20.50 </span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-product-iso isotope-item item onsale">
                      <div class="item-wrapper">
                        <div class="item-inner">
                          <div class="left-block">
                            <a class="product_img" href="#" title="Framed-Sleeve Tops"> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/parrot-beautiful.jpg" alt="Framed-Sleeve Tops" title="Framed-Sleeve Tops" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/parrot-beautiful(1).jpg" height="216" width="216" alt="Framed-Sleeve Tops"> </span> </a> <span class="new">New</span>
                            <div class="button-container">
                              <div class="box-button-cart">
                                <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="9" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                              </div>
                              <div class="box-button-quick-view">
                                <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                              </div>
                              <div class="box-button-wishlist splist">
                                <a class="title_font addToWishlist wishlistProd_9" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;9&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                              </div>
                              <div class="box-button-compare">
                                <a class="btn btn-theme add_to_compare" href="#" data-id-product="9"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                              </div>
                            </div>
                          </div>
                          <div class="right-block">
                            <h5 class="sub_title_font"> <a class="product-name" href="#" title="Parrot Beautiful"> Parrot Beautiful </a></h5>
                            <div class="price-rating">
                              <div class="content_price"> <span class="price product-price"> $80.00 </span> <span class="old-price product-price"> $100.00 </span> <span class="price-percent-reduction">-20%</span></div>
                              <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                                <div class="star_content clearfix" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <meta itemprop="worstRating" content="0">
                                  <meta itemprop="ratingValue" content="5">
                                  <meta itemprop="bestRating" content="5">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="col-product-iso isotope-item item onsale bestseller">
                      <div class="item-wrapper">
                        <div class="item-inner">
                          <div class="left-block">
                            <a class="product_img" href="#" title=""> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/baby-cat.jpg" alt="Baby Cat" title="Baby Cat" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/baby-cat(1).jpg" height="216" width="216" alt=""> </span> </a> <span class="new">New</span> <span class="sale">Sale</span>
                            <div class="button-container">
                              <div class="box-button-cart">
                                <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="6" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                              </div>
                              <div class="box-button-quick-view">
                                <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                              </div>
                              <div class="box-button-wishlist splist">
                                <a class="title_font addToWishlist wishlistProd_6" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;6&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                              </div>
                              <div class="box-button-compare">
                                <a class="btn btn-theme add_to_compare" href="#" data-id-product="6"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                              </div>
                            </div>
                          </div>
                          <div class="right-block">
                            <h5 class="sub_title_font"> <a class="product-name" href="#" title="Baby Cat"> Baby Cat </a></h5>
                            <div class="price-rating">
                              <div class="content_price"> <span class="price product-price"> $24.40 </span> <span class="old-price product-price"> $30.50 </span> <span class="price-percent-reduction">-20%</span></div>
                              <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                                <div class="star_content clearfix" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <div class="star star_on"></div>
                                  <meta itemprop="worstRating" content="0">
                                  <meta itemprop="ratingValue" content="5">
                                  <meta itemprop="bestRating" content="5">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="isotope-item item grid-sizer"></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="testimonial">
              <div class="block block_testimonials" style="background: url(<?php echo get_template_directory_uri(); ?>/img/background_1.jpg?052604 ) top left no-repeat; background-attachment: fixed; background-blend-mode: screen; background-clip: border-box; background-color: rgba(0, 0, 0, 0); background-size:cover; background-origin: padding-box; background-repeat: no-repeat;">>
                <div id="testimonials_block_right">
                  <div class="title">
                    <h4 class="title_font title_text">What client says</h4></div>
                  <div id="wrapper" class="block_content">
                    <div id="slide-panel">
                      <div id="slide">
                        <div class="main-block">
                          <div class="show-info">
                            <div class="content_test_top">
                              <p class="des_testimonial">Aliquam quis risus viverra, ornare ipsum vitae, congue tellus. Vestibulum nunc lorem, scelerisque a tristique non, accumsan ornare eros. Nullam sapien metus, volutpat dictum. Praesent tellus felis, aliquet id augue at, tincidunt vestibulum leo.</p>
                            </div>
                            <div class="media">
                              <div class="media-content">
                                <a class="fancybox-media" href="#"> <img src="<?php echo get_template_directory_uri(); ?>/img/630-client-3.png" alt="Image Testimonial"> </a>
                              </div>
                              <div class="content_test">
                                <p class="des_namepost title_font">Jane Doe</p>
                                <p class="des_company">Online Marketer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="main-block">
                          <div class="show-info">
                            <div class="content_test_top">
                              <p class="des_testimonial">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie augue magna. Pellentesque felis lorem, pulvinar sed eros non, sagittis consequat urna.</p>
                            </div>
                            <div class="media">
                              <div class="media-content">
                                <a class="fancybox-media" href="#"> <img src="<?php echo get_template_directory_uri(); ?>/img/993-client-6.png" alt="Image Testimonial"> </a>
                              </div>
                              <div class="content_test">
                                <p class="des_namepost title_font">Cornelius Reeves</p>
                                <p class="des_company">Project Manager</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="main-block">
                          <div class="show-info">
                            <div class="content_test_top">
                              <p class="des_testimonial">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div class="media">
                              <div class="media-content">
                                <a class="fancybox-media" href="#"> <img src="<?php echo get_template_directory_uri(); ?>/img/58-client-8.png" alt="Image Testimonial"> </a>
                              </div>
                              <div class="content_test">
                                <p class="des_namepost title_font">Jochen Rechsteiner</p>
                                <p class="des_company">Stylish Manager</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="bx-controls-direction">
                        <a class="prev bx-prev" href="#"></a>
                        <a class="next bx-next" href="#"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="field_newproductslider" class="block title_center horizontal_mode">
              <h4 class="title_block title_font"> <span class="title_text"> <a href="#" title="NEW ARRIVALS"> NEW ARRIVALS </a> <em class="logo-circle"><i class="circle"></i></em> </span></h4>
              <div class="row">
                <div id="new_products" class="carousel-grid owl-carousel">
                  <div class="item first">
                    <div class="item-inner">
                      <div class="left-block">
                        <a class="product_img" href="#" title="Bengal Cat"> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/bengal-cat.jpg" alt="Bengal Cat" title="Bengal Cat" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/bengal-cat(1).jpg" height="216" width="216" alt="Bengal Cat"> </span> </a> <span class="new">New</span>
                        <div class="button-container">
                          <div class="box-button-cart">
                            <a class="ajax_add_to_cart_button btn" href="#"> <i class="icon-shopping-cart"></i> <span>Out stock</span> </a>
                          </div>
                          <div class="box-button-quick-view">
                            <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                          </div>
                          <div class="box-button-wishlist splist">
                            <a class="title_font addToWishlist wishlistProd_17" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;17&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                          </div>
                          <div class="box-button-compare">
                            <a class="btn btn-theme add_to_compare title_font" href="#" data-id-product="17" data-product-cover="<?php echo get_template_directory_uri(); ?>/img/bengal-cat.jpg" data-product-name="Bengal Cat"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                          </div>
                        </div>
                      </div>
                      <div class="right-block">
                        <h5 class="sub_title_font"> <a class="product-name" href="#" title="Bengal Cat"> Bengal Cat </a></h5>
                        <div class="price-rating">
                          <div class="content_price"> <span class="price product-price"> $20.50 </span></div>
                          <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                            <div class="star_content clearfix" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <meta itemprop="worstRating" content="0">
                              <meta itemprop="ratingValue" content="5">
                              <meta itemprop="bestRating" content="5">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="item-inner">
                      <div class="left-block">
                        <a class="product_img" href="#" title="Beagle"> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/beagle.jpg" alt="Beagle" title="Beagle" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/beagle(1).jpg" height="216" width="216" alt="Beagle"> </span> </a> <span class="new">New</span>
                        <div class="button-container">
                          <div class="box-button-cart">
                            <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="16" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                          </div>
                          <div class="box-button-quick-view">
                            <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                          </div>
                          <div class="box-button-wishlist splist">
                            <a class="title_font addToWishlist wishlistProd_16" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;16&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                          </div>
                          <div class="box-button-compare">
                            <a class="btn btn-theme add_to_compare title_font" href="#" data-id-product="16" data-product-cover="<?php echo get_template_directory_uri(); ?>/img/beagle.jpg" data-product-name="Beagle"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                          </div>
                        </div>
                      </div>
                      <div class="right-block">
                        <h5 class="sub_title_font"> <a class="product-name" href="#" title="Beagle"> Beagle </a></h5>
                        <div class="price-rating">
                          <div class="content_price"> <span class="price product-price"> $20.50 </span></div>
                          <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                            <div class="star_content clearfix" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <meta itemprop="worstRating" content="0">
                              <meta itemprop="ratingValue" content="5">
                              <meta itemprop="bestRating" content="5">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="item-inner">
                      <div class="left-block">
                        <a class="product_img" href="#" title="Cuckoos"> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/cuckoos.jpg" alt="Cuckoos" title="Cuckoos" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/cuckoos(1).jpg" height="216" width="216" alt="Cuckoos"> </span> </a> <span class="new">New</span>
                        <div class="button-container">
                          <div class="box-button-cart">
                            <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="13" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                          </div>
                          <div class="box-button-quick-view">
                            <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                          </div>
                          <div class="box-button-wishlist splist">
                            <a class="title_font addToWishlist wishlistProd_13" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;13&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                          </div>
                          <div class="box-button-compare">
                            <a class="btn btn-theme add_to_compare title_font" href="#" data-id-product="13" data-product-cover="<?php echo get_template_directory_uri(); ?>/img/cuckoos.jpg" data-product-name="Cuckoos"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                          </div>
                        </div>
                      </div>
                      <div class="right-block">
                        <h5 class="sub_title_font"> <a class="product-name" href="#" title="Cuckoos"> Cuckoos </a></h5>
                        <div class="price-rating">
                          <div class="content_price"> <span class="price product-price"> $20.50 </span></div>
                          <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                            <div class="star_content clearfix" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <meta itemprop="worstRating" content="0">
                              <meta itemprop="ratingValue" content="5">
                              <meta itemprop="bestRating" content="5">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="item-inner">
                      <div class="left-block">
                        <a class="product_img" href="#" title="Swallow"> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/swallow.jpg" alt="Swallow" title="Swallow" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/swallow(1).jpg" height="216" width="216" alt="Swallow"> </span> </a> <span class="new">New</span> <span class="sale">Sale</span>
                        <div class="button-container">
                          <div class="box-button-cart">
                            <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="12" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                          </div>
                          <div class="box-button-quick-view">
                            <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                          </div>
                          <div class="box-button-wishlist splist">
                            <a class="title_font addToWishlist wishlistProd_12" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;12&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                          </div>
                          <div class="box-button-compare">
                            <a class="btn btn-theme add_to_compare title_font" href="#" data-id-product="12" data-product-cover="<?php echo get_template_directory_uri(); ?>/img/swallow.jpg" data-product-name="Swallow"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                          </div>
                        </div>
                      </div>
                      <div class="right-block">
                        <h5 class="sub_title_font"> <a class="product-name" href="#" title="Swallow"> Swallow </a></h5>
                        <div class="price-rating">
                          <div class="content_price"> <span class="price product-price"> $20.50 </span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="item-inner">
                      <div class="left-block">
                        <a class="product_img" href="#" title="Cockatoo"> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/cockatoo.jpg" alt="Cockatoo" title="Cockatoo" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/cockatoo(1).jpg" height="216" width="216" alt="Cockatoo"> </span> </a> <span class="new">New</span>
                        <div class="button-container">
                          <div class="box-button-cart">
                            <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="11" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                          </div>
                          <div class="box-button-quick-view">
                            <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                          </div>
                          <div class="box-button-wishlist splist">
                            <a class="title_font addToWishlist wishlistProd_11" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;11&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                          </div>
                          <div class="box-button-compare">
                            <a class="btn btn-theme add_to_compare title_font" href="#" data-id-product="11" data-product-cover="<?php echo get_template_directory_uri(); ?>/img/cockatoo.jpg" data-product-name="Cockatoo"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                          </div>
                        </div>
                      </div>
                      <div class="right-block">
                        <h5 class="sub_title_font"> <a class="product-name" href="#" title="Cockatoo"> Cockatoo </a></h5>
                        <div class="price-rating">
                          <div class="content_price"> <span class="price product-price"> $20.50 </span></div>
                          <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                            <div class="star_content clearfix" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <meta itemprop="worstRating" content="0">
                              <meta itemprop="ratingValue" content="5">
                              <meta itemprop="bestRating" content="5">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="item-inner">
                      <div class="left-block">
                        <a class="product_img" href="#" title=""> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/black-cat.jpg" alt="Black Cat" title="Black Cat" height="216" width="216"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/black-cat(1).jpg" height="216" width="216" alt=""> </span> </a> <span class="new">New</span>
                        <div class="button-container">
                          <div class="box-button-cart">
                            <a class="ajax_add_to_cart_button btn" href="#"> <i class="icon-shopping-cart"></i> <span>Customize</span> </a>
                          </div>
                          <div class="box-button-quick-view">
                            <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                          </div>
                          <div class="box-button-wishlist splist">
                            <a class="title_font addToWishlist wishlistProd_10" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;10&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                          </div>
                          <div class="box-button-compare">
                            <a class="btn btn-theme add_to_compare title_font" href="#" data-id-product="10" data-product-cover="<?php echo get_template_directory_uri(); ?>/img/black-cat.jpg" data-product-name="Black Cat"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                          </div>
                        </div>
                      </div>
                      <div class="right-block">
                        <h5 class="sub_title_font"> <a class="product-name" href="#" title="Black Cat"> Black Cat </a></h5>
                        <div class="price-rating">
                          <div class="content_price"> <span class="price product-price"> $50.99 </span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="special_block_right" class="block title_center horizontal_mode">
              <h4 class="title_block title_font"> <span class="title_text"> <a href="#" title="HOT DEALS"> HOT DEALS </a> <em class="logo-circle"><i class="circle"></i></em> </span></h4>
              <div class="row">
                <div id="special_products" class="carousel-grid owl-carousel block_content">
                  <div class="item first">
                    <div class="item-inner">
                      <div class="left-block">
                        <a class="product_img" href="#" title="Framed-Sleeve Tops"> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/parrot-beautiful(2).jpg" alt="Framed-Sleeve Tops" title="Framed-Sleeve Tops" height="285" width="285"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/parrot-beautiful(3).jpg" height="285" width="285" alt="Framed-Sleeve Tops"> </span> </a>
                        <div class="button-container">
                          <div class="box-button-cart">
                            <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="9" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                          </div>
                          <div class="box-button-quick-view">
                            <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                          </div>
                          <div class="box-button-wishlist splist">
                            <a class="title_font addToWishlist wishlistProd_9" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;9&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                          </div>
                          <div class="box-button-compare">
                            <a class="btn btn-theme add_to_compare" href="#" data-id-product="9"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                          </div>
                        </div>
                      </div>
                      <div class="right-block">
                        <h5 class="sub_title_font"> <a class="product-name" href="#" title="Parrot Beautiful"> Parrot Beautiful </a></h5>
                        <div class="price-rating">
                          <div class="content_price"> <span class="price product-price"> $80.00 </span> <span class="old-price product-price"> $100.00 </span> <span class="price-percent-reduction">-20%</span></div>
                          <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                            <div class="star_content clearfix" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <meta itemprop="worstRating" content="0">
                              <meta itemprop="ratingValue" content="5">
                              <meta itemprop="bestRating" content="5">
                            </div>
                          </div>
                        </div>
                        <p class="product-desc"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut...</p> <span class="item-countdown"> <span class="bg_tranp"></span> <span class="item-countdown-time" data-time="2018-09-11 00:00:00"></span> </span>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="item-inner">
                      <div class="left-block">
                        <a class="product_img" href="#" title=""> <span class="hover-image"><img class="replace-2x" src="<?php echo get_template_directory_uri(); ?>/img/baby-cat(2).jpg" alt="Baby Cat" title="Baby Cat" height="285" width="285"></span> <span class="img_root"> <img src="<?php echo get_template_directory_uri(); ?>/img/baby-cat(3).jpg" height="285" width="285" alt=""> </span> </a>
                        <div class="button-container">
                          <div class="box-button-cart">
                            <a class="ajax_add_to_cart_button btn caption-add-to-cart" href="#" rel="nofollow" data-id-product="6" data-minimal_quantity="1"> <i class="icon-shopping-cart"></i> <span>Add to cart</span> </a>
                          </div>
                          <div class="box-button-quick-view">
                            <a class="quick-view" href="#" rel="#"> <i class="icon-eye-open"></i> <span>Quick view</span> </a>
                          </div>
                          <div class="box-button-wishlist splist">
                            <a class="title_font addToWishlist wishlistProd_6" href="#" rel="nofollow" onclick="WishlistCart(&#39;wishlist_block_list&#39;, &#39;add&#39;, &#39;6&#39;, false, 1); return false;"> <i class="icon-heart"></i> <span>Add to wishlist</span> </a>
                          </div>
                          <div class="box-button-compare">
                            <a class="btn btn-theme add_to_compare" href="#" data-id-product="6"> <i class="icon-pluss"></i> <span>Add to compare</span> </a>
                          </div>
                        </div>
                      </div>
                      <div class="right-block">
                        <h5 class="sub_title_font"> <a class="product-name" href="#" title="Baby Cat"> Baby Cat </a></h5>
                        <div class="price-rating">
                          <div class="content_price"> <span class="price product-price"> $24.40 </span> <span class="old-price product-price"> $30.50 </span> <span class="price-percent-reduction">-20%</span></div>
                          <div class="comments_note" itemtype="http://schema.org/Offer" itemscope="">
                            <div class="star_content clearfix" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <div class="star star_on"></div>
                              <meta itemprop="worstRating" content="0">
                              <meta itemprop="ratingValue" content="5">
                              <meta itemprop="bestRating" content="5">
                            </div>
                          </div>
                        </div>
                        <p class="product-desc"> Sleeveless knee-length chiffon dress. V-neckline with elastic under the bust lining.</p> <span class="item-countdown"> <span class="bg_tranp"></span> <span class="item-countdown-time" data-time="2018-08-11 00:00:00"></span> </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content">
            <div class="hover_banner_img1 banner_3 block">
              <a href="#"> <img alt="" src="<?php echo get_template_directory_uri(); ?>/img/banner-home-3.jpg"> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="smart-blog-home-post block title_center horizontal_mode">
      <div class="container">
        <h2 class="title_block title_font"> <a class="title_text" href="#">From the blog</a> <em class="logo-circle"><i class="circle"></i></em></h2>
        <div class="row">
          <div id="smart-blog-custom" class="sdsblog-box-content grid carousel-grid owl-carousel">
            <div class="item sds_blog_post">
              <div class="news_module_image_holder">
                <div class="inline-block_relative">
                  <div class="right_blog_home">
                    <div class="content">
                      <h3 class="sds_post_title title_font"><a href="#">Bibendum Auctor</a></h3>
                      <p class="date_added">Feb 17, 2016</p>
                      <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At Nulla id...</p>
                    </div> <a href="#" class="r_more">read more</a></div>
                  <div class="image_holder_wrap hover_banner_img">
                    <a href="#"><img alt="Bibendum Auctor" class="feat_img_small" src="<?php echo get_template_directory_uri(); ?>/img/5-home-default.jpg"></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item sds_blog_post">
              <div class="news_module_image_holder">
                <div class="inline-block_relative">
                  <div class="right_blog_home">
                    <div class="content">
                      <h3 class="sds_post_title title_font"><a href="#">Bibendum Auctor</a></h3>
                      <p class="date_added">Feb 17, 2016</p>
                      <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At Nulla id...</p>
                    </div> <a href="#" class="r_more">read more</a></div>
                  <div class="image_holder_wrap hover_banner_img">
                    <a href="#"><img alt="Bibendum Auctor" class="feat_img_small" src="<?php echo get_template_directory_uri(); ?>/img/4-home-default.jpg"></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item sds_blog_post">
              <div class="news_module_image_holder">
                <div class="inline-block_relative">
                  <div class="right_blog_home">
                    <div class="content">
                      <h3 class="sds_post_title title_font"><a href="#">Summer Entertaining</a></h3>
                      <p class="date_added">Feb 17, 2016</p>
                      <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At Nulla id...</p>
                    </div> <a href="#" class="r_more">read more</a></div>
                  <div class="image_holder_wrap hover_banner_img">
                    <a href="#"><img alt="Summer Entertaining" class="feat_img_small" src="<?php echo get_template_directory_uri(); ?>/img/3-home-default.jpg"></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item sds_blog_post">
              <div class="news_module_image_holder">
                <div class="inline-block_relative">
                  <div class="right_blog_home">
                    <div class="content">
                      <h3 class="sds_post_title title_font"><a href="#">Accumsan Ipsum</a></h3>
                      <p class="date_added">Feb 17, 2016</p>
                      <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At Nulla id...</p>
                    </div> <a href="#" class="r_more">read more</a></div>
                  <div class="image_holder_wrap hover_banner_img">
                    <a href="#"><img alt="Accumsan Ipsum" class="feat_img_small" src="<?php echo get_template_directory_uri(); ?>/img/2-home-default.jpg"></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item sds_blog_post">
              <div class="news_module_image_holder">
                <div class="inline-block_relative">
                  <div class="right_blog_home">
                    <div class="content">
                      <h3 class="sds_post_title title_font"><a href="#">Vulputate Cursus</a></h3>
                      <p class="date_added">Feb 17, 2016</p>
                      <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At Nulla id...</p>
                    </div> <a href="#" class="r_more">read more</a></div>
                  <div class="image_holder_wrap hover_banner_img">
                    <a href="#"><img alt="Vulputate Cursus" class="feat_img_small" src="<?php echo get_template_directory_uri(); ?>/img/1-home-default.jpg"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Brands-block-slider">
      <div class="container">
        <div id="fieldbrandslider" class="block title_center horizontal_mode">
          <h4 class="title_block title_font"> <a class="title_text" href="#">Our brands</a> <em class="logo-circle"><i class="circle"></i></em></h4>
          <div class="row">
            <div id="fieldbrandslider-manufacturers" class="grid carousel-grid owl-carousel">
              <div class="item">
                <a class="img-wrapper" href="#" title="Manufacture 1"> <img class="img-responsive" src="<?php echo get_template_directory_uri(); ?>/img/2-field_manufacture.jpg" width="210" height="62" alt="Manufacture 1"> </a>
              </div>
              <div class="item">
                <a class="img-wrapper" href="#" title="Manufacture 2"> <img class="img-responsive" src="<?php echo get_template_directory_uri(); ?>/img/3-field_manufacture.jpg" width="210" height="62" alt="Manufacture 2"> </a>
              </div>
              <div class="item">
                <a class="img-wrapper" href="#" title="Manufacture 3"> <img class="img-responsive" src="<?php echo get_template_directory_uri(); ?>/img/4-field_manufacture.jpg" width="210" height="62" alt="Manufacture 3"> </a>
              </div>
              <div class="item">
                <a class="img-wrapper" href="#" title="Manufacture 4"> <img class="img-responsive" src="<?php echo get_template_directory_uri(); ?>/img/5-field_manufacture.jpg" width="210" height="62" alt="Manufacture 4"> </a>
              </div>
              <div class="item">
                <a class="img-wrapper" href="#" title="Manufacture 5"> <img class="img-responsive" src="<?php echo get_template_directory_uri(); ?>/img/6-field_manufacture.jpg" width="210" height="62" alt="Manufacture 5"> </a>
              </div>
              <div class="item">
                <a class="img-wrapper" href="#" title="Manufacture 6"> <img class="img-responsive" src="<?php echo get_template_directory_uri(); ?>/img/7-field_manufacture.jpg" width="210" height="62" alt="Manufacture 6"> </a>
              </div>
              <div class="item">
                <a class="img-wrapper" href="#" title="Manufacture 8"> <img class="img-responsive" src="<?php echo get_template_directory_uri(); ?>/img/8-field_manufacture.jpg" width="210" height="62" alt="Manufacture 8"> </a>
              </div>
              <div class="item">
                <a class="img-wrapper" href="#" title="Manufacture 9"> <img class="img-responsive" src="<?php echo get_template_directory_uri(); ?>/img/9-field_manufacture.jpg" width="210" height="62" alt="Manufacture 9"> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-container">
      <div id="footer">

<?php get_footer(); ?>
