<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <link href="http://www.google-analytics.com/" rel="dns-prefetch"><!-- dns prefetch -->

  <!-- icons -->
  <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/all-styles.css" type="text/css" media="all">
  <!--[if lt IE 9]>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/html5shiv.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/selectivizr.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/respond.js"></script>
  <![endif]-->
  <!-- css + javascript -->
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>



<body id="index" class="index hide-left-column hide-right-column lang_en fullwidth">

  <div id="page">
    <div class="header-container">
      <header id="header">
        <div class="banner">
          <div class="container">
            <div class="row"></div>
          </div>
        </div>
        <div class="nav">
          <div class="container">
            <div class="row">
              <nav>
                <div id="mobile_links">
                  <div class="current selected"> <span class="cur-label"> <i class="icon-user"></i> My account</span></div>
                  <ul class="toogle_content header_link">
                    <li> <a class="link-myaccount" href="#" title="Account"><i class="icon-user"></i> Account</a></li>
                    <li> <a class="link-wishlist wishlist_block" href="#" title="My wishlist"><i class="icon-heart"></i> My wishlist</a></li>
                    <li> <a class="link-mycart" href="#" title="My cart"><i class="icon-shopping-cart"></i> My cart</a></li>
                    <li class="last"> <a class="link-login" href="#" title="Login" rel="nofollow"><i class="icon-lock"></i> Login</a></li>
                  </ul>
                </div>
                <div id="languages-block-top" class="languages-block">
                  <div class="current"> <img src="<?php echo get_template_directory_uri(); ?>/img/1.jpg" alt="en" width="16" height="11"> <span>English</span></div>
                  <ul id="first-languages" class="languages-block_ul toogle_content">
                    <li class="selected"> <span> <img src="<?php echo get_template_directory_uri(); ?>/img/1.jpg" alt="en" width="16" height="11"> <span>English</span> </span>
                    </li>
                    <li>
                      <a href="#" title="Français (French)" rel="alternate" hreflang="fr"> <img src="<?php echo get_template_directory_uri(); ?>/img/2.jpg" alt="fr" width="16" height="11"> <span>Français</span> </a>
                    </li>
                  </ul>
                </div>
                <div id="currencies-block-top">
                  <form id="setCurrency" action="#" method="post">
                    <div class="current">
                      <input type="hidden" name="id_currency" id="id_currency" value="">
                      <input type="hidden" name="SubmitCurrency" value=""> <span class="cur-label"></span> <strong>USD</strong></div>
                    <ul id="first-currencies" class="currencies_ul toogle_content">
                      <li class="selected"> <a href="javascript:setCurrency(1);" rel="nofollow" title="Dollar (USD)"> Dollar (USD) </a></li>
                      <li> <a href="javascript:setCurrency(2);" rel="nofollow" title="Euro (EUR)"> Euro (EUR) </a></li>
                    </ul>
                  </form>
                </div>
                <div class="welcome-text">
                  <p>Call +1-88-888-8888</p>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div class="header_bottom">
          <div class="container">
            <div class="row">
              <div id="header_logo" class="col-xs-12 col-sm-4 col-md-3">
                <a href="#" title="petshop_home1"> <img class="logo img-responsive" src="<?php echo get_template_directory_uri(); ?>/img/framework-1614-logo-1455781246.jpg" alt="home"> </a>
              </div>
              <div id="header_menu" class="visible-lg visible-md">
                <div class="container">
                  <div class="row">

                    <nav id="fieldmegamenu-main" class="fieldmegamenu">
                   <?php wpeHeadNav() ?>
                   <script>
                     $('ul.headnav>li').addClass('root menu-home');
                     $('ul.headnav>li>a').addClass('root-item no-description title title_font title-text');
                     $('ul.headnav>li>ul.sub-menu').addClass('menu-items col-md-12 col-xs-12');
                     $('ul.headnav>li>ul.sub-menu>li').addClass('depth-1 category menucol-1-5');
                     $('ul.headnav>li>ul.sub-menu>li>a').addClass('title title_font');
                     $('ul.headnav>li>ul.sub-menu>li>ul.sub-menu').addClass('submenu submenu-depth-2');
                     $('ul.headnav>li>ul.sub-menu>li>ul.sub-menu>li').addClass('depth-2 category');
                     $('ul.headnav>li>ul.sub-menu>li>ul.sub-menu>li>a').addClass('title');

                   </script>

                    </nav>
                  </div>
                </div>
              </div>
              <div class="shopping_cart_menu">
                <div class="ft_bg_hover shopping_cart"> <a href="#" title="View my shopping cart" rel="nofollow"><span class="ajax_cart_quantity">1</span> <span class="ajax_cart_product_txt">Item -</span> <span class="ajax_cart_product_txt_s unvisible">Items -</span> <span class="ajax_cart_total price"> $16.51 </span> <span class="ajax_cart_no_product unvisible">(empty)</span> </a>
                  <div class="cart_block block exclusive">
                    <div class="block_content">
                      <div class="cart_block_list">
                        <dl class="products">
                          <dt data-id="cart_block_product_1_1_0" class="first_item">
                            <a class="cart-images" href="#" title="Dog Beautiful"><img src="<?php echo get_template_directory_uri(); ?>/img/dog-beautiful.jpg" alt="Dog Beautiful"></a>
                            <div class="cart-info">
                              <div class="product-name"> <span class="quantity-formated"><span class="quantity">1</span>&nbsp;x&nbsp;</span><a class="cart_block_product_name" href="#" title="Dog Beautiful">Dog Beautiful</a></div>
                              <div class="product-atributes"> <a class="ft_color_hover" href="#" title="Product detail">S, Orange</a></div> <span class="price"> $16.51 </span></div> <span class="remove_link"> <a class="ajax_cart_block_remove_link ft_color_hover" href="#" rel="nofollow" title="remove this product from my cart">&nbsp;</a> </span></dt>
                          <dd data-id="cart_block_combination_of_1_1_0" class="first_item"></dd>
                        </dl>
                        <p class="cart_block_no_products unvisible"> No products</p>
                        <div class="cart-prices">
                          <div class="cart-prices-line first-line"> <span class="price cart_block_shipping_cost ajax_cart_shipping_cost"> $7.00 </span> <span> Shipping </span></div>
                          <div class="cart-prices-line last-line"> <span class="price cart_block_total ajax_block_cart_total">$23.51</span> <span>Total</span></div>
                        </div>
                        <p class="cart-buttons">
                          <a id="button_order_cart" class="ft_bg_default ft_bg_hover" href="#" title="Check out" rel="nofollow"> <span> Check out<i class="icon-chevron-right right"></i> </span> </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="layer_cart">
                <div class="clearfix">
                  <div class="layer_cart_product col-xs-12 col-md-6"> <span class="cross" title="Close window"></span>
                    <h2> <i class="icon-check"></i>Product successfully added to your shopping cart</h2>
                    <div class="product-image-container layer_cart_img"></div>
                    <div class="layer_cart_product_info"> <span id="layer_cart_product_title" class="product-name"></span> <span id="layer_cart_product_attributes"></span>
                      <div> <strong class="dark">Quantity</strong> <span id="layer_cart_product_quantity"></span></div>
                      <div> <strong class="dark">Total</strong> <span id="layer_cart_product_price"></span></div>
                    </div>
                  </div>
                  <div class="layer_cart_cart col-xs-12 col-md-6">
                    <h2> <span class="ajax_cart_product_txt_s unvisible"> There are <span class="ajax_cart_quantity">1</span> items in your cart. </span> <span class="ajax_cart_product_txt "> There is 1 item in your cart. </span></h2>
                    <div class="layer_cart_row"> <strong class="dark"> Total products </strong> <span class="ajax_block_products_total"> $16.51 </span></div>
                    <div class="layer_cart_row"> <strong class="dark"> Total shipping&nbsp; </strong> <span class="ajax_cart_shipping_cost"> $7.00 </span></div>
                    <div class="layer_cart_row"> <strong class="dark"> Total </strong> <span class="ajax_block_cart_total"> $23.51 </span></div>
                    <div class="button-container"> <span class="continue ft_bg_default ft_btn_default ft_bg_hover" title="Continue shopping"> <span> <i class="icon-chevron-left left"></i>Continue shopping </span> </span>
                      <a class="ft_bg_default ft_btn_default ft_bg_hover" href="#" title="Proceed to checkout" rel="nofollow"> <span> Proceed to checkout<i class="icon-chevron-right right"></i> </span> </a>
                    </div>
                  </div>
                </div>
                <div class="crossseling"></div>
              </div>
              <div class="layer_cart_overlay"></div>
              <div id="search_block_top">
                <div class="field-search"> <span id="click_show_searchbox" class="icon-search"></span>
                  <form method="get" action="#" id="searchbox">
                    <input type="hidden" name="controller" value="search">
                    <input type="hidden" name="orderby" value="position">
                    <input type="hidden" name="orderway" value="desc">
                    <input class="search_query form-control" type="text" id="search_query_top" name="search_query" value="Search...">
                    <button type="submit" name="submit_search" class="btn button-search"> <span class="icon-search"></span> </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div id="header_mobile_menu" class="navbar-inactive visible-sm visible-xs">
      <div class="container">
        <div class="fieldmm-nav col-sm-12 col-xs-12"> <span class="brand">Menu list</span> <span id="fieldmm-button"><i class="icon-reorder"></i></span>
          <nav id="fieldmegamenu-mobile" class="fieldmegamenu">
            <ul>
              <li class="root root-1 menu-home">
                <div class="root-item no-description">
                  <a href="#">
                    <div class="title title_font"><span class="title-text">Home</span></div>
                  </a>
                </div>
              </li>
              <li class="root root-7 menu-dogs">
                <div class="root-item no-description">
                  <a href="#">
                    <div class="title title_font"><span class="title-text">Dogs</span></div>
                  </a>
                </div>
                <ul class="menu-items col-md-12 col-xs-12">
                  <li class="menu-item menu-item-19 depth-1 category menucol-1-5 ">
                    <div class="title title_font"> <a href="#"> Collar Belt </a></div>
                    <ul class="submenu submenu-depth-2">
                      <li class="menu-item menu-item-27 depth-2 category ">
                        <div class="title"> <a href="#"> Cocktail </a></div>
                      </li>
                      <li class="menu-item menu-item-28 depth-2 category ">
                        <div class="title"> <a href="#"> Day </a></div>
                      </li>
                      <li class="menu-item menu-item-29 depth-2 category ">
                        <div class="title"> <a href="#"> Evening </a></div>
                      </li>
                      <li class="menu-item menu-item-30 depth-2 category ">
                        <div class="title"> <a href="#"> Sundresses </a></div>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item menu-item-20 depth-1 category menucol-1-5 ">
                    <div class="title title_font"> <a href="#"> Dresses </a></div>
                    <ul class="submenu submenu-depth-2">
                      <li class="menu-item menu-item-31 depth-2 category ">
                        <div class="title"> <a href="#"> Collar Belt </a></div>
                      </li>
                      <li class="menu-item menu-item-32 depth-2 category ">
                        <div class="title"> <a href="#"> Gloves </a></div>
                      </li>
                      <li class="menu-item menu-item-33 depth-2 category ">
                        <div class="title"> <a href="#"> Lifestyle </a></div>
                      </li>
                      <li class="menu-item menu-item-34 depth-2 category ">
                        <div class="title"> <a href="#"> Bras </a></div>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item menu-item-21 depth-1 category menucol-1-5 ">
                    <div class="title title_font"> <a href="#"> Top </a></div>
                    <ul class="submenu submenu-depth-2">
                      <li class="menu-item menu-item-35 depth-2 category ">
                        <div class="title"> <a href="#"> Cocktail </a></div>
                      </li>
                      <li class="menu-item menu-item-36 depth-2 category ">
                        <div class="title"> <a href="#"> Day </a></div>
                      </li>
                      <li class="menu-item menu-item-37 depth-2 category ">
                        <div class="title"> <a href="#"> Evening </a></div>
                      </li>
                      <li class="menu-item menu-item-38 depth-2 category ">
                        <div class="title"> <a href="#"> Sundresses </a></div>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item menu-item-26 depth-1 customcontent customcontent_women menucol-2-5 ">
                    <div class="normalized">
                      <div class="custom-menu-bottom">
                        <div class="menu-bottom col2">
                          <a href="#"><img src="<?php echo get_template_directory_uri(); ?>/img/megamenu-dog.jpg" alt="" width="427" height="138"></a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="root root-8 ">
                <div class="root-item no-description">
                  <a href="#">
                    <div class="title title_font"><span class="title-text">Cat</span></div>
                  </a>
                </div>
                <ul class="menu-items col-md-9 col-xs-12">
                  <li class="menu-item menu-item-51 depth-1 category menucol-1-4 ">
                    <div class="title title_font"> <a href="#"> Clothing </a></div>
                    <ul class="submenu submenu-depth-2">
                      <li class="menu-item menu-item-55 depth-2 category ">
                        <div class="title"> <a href="#"> CoJackets </a></div>
                      </li>
                      <li class="menu-item menu-item-56 depth-2 category ">
                        <div class="title"> <a href="#"> Raincoats </a></div>
                      </li>
                      <li class="menu-item menu-item-57 depth-2 category ">
                        <div class="title"> <a href="#"> Blazers </a></div>
                      </li>
                      <li class="menu-item menu-item-58 depth-2 category ">
                        <div class="title"> <a href="#"> Jackets </a></div>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item menu-item-52 depth-1 category menucol-1-4 ">
                    <div class="title title_font"> <a href="#"> Shoes </a></div>
                    <ul class="submenu submenu-depth-2">
                      <li class="menu-item menu-item-59 depth-2 category ">
                        <div class="title"> <a href="#"> Collar Belt </a></div>
                      </li>
                      <li class="menu-item menu-item-60 depth-2 category ">
                        <div class="title"> <a href="#"> Gloves </a></div>
                      </li>
                      <li class="menu-item menu-item-61 depth-2 category ">
                        <div class="title"> <a href="#"> Lifestyle </a></div>
                      </li>
                      <li class="menu-item menu-item-62 depth-2 category ">
                        <div class="title"> <a href="#"> Satchels </a></div>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item menu-item-53 depth-1 category menucol-1-4 ">
                    <div class="title title_font"> <a href="#"> Bags </a></div>
                    <ul class="submenu submenu-depth-2">
                      <li class="menu-item menu-item-63 depth-2 category ">
                        <div class="title"> <a href="#"> Toter </a></div>
                      </li>
                      <li class="menu-item menu-item-64 depth-2 category ">
                        <div class="title"> <a href="#"> Clutches </a></div>
                      </li>
                      <li class="menu-item menu-item-65 depth-2 category ">
                        <div class="title"> <a href="#"> Satchels </a></div>
                      </li>
                      <li class="menu-item menu-item-66 depth-2 category ">
                        <div class="title"> <a href="#"> Cross body </a></div>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item menu-item-54 depth-1 category menucol-1-4 ">
                    <div class="title title_font"> <a href="#"> Lingerie </a></div>
                    <ul class="submenu submenu-depth-2">
                      <li class="menu-item menu-item-70 depth-2 category ">
                        <div class="title"> <a href="#"> Lingerie </a></div>
                      </li>
                      <li class="menu-item menu-item-67 depth-2 category ">
                        <div class="title"> <a href="#"> Briefs </a></div>
                      </li>
                      <li class="menu-item menu-item-68 depth-2 category ">
                        <div class="title"> <a href="#"> Nightwear </a></div>
                      </li>
                      <li class="menu-item menu-item-69 depth-2 category ">
                        <div class="title"> <a href="#"> Shapewear </a></div>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item menu-item-71 depth-1 customcontent menucol-1-1 customcontent_men ">
                    <div class="normalized">
                      <div class="left_column_img ">
                        <a href="#"><img src="<?php echo get_template_directory_uri(); ?>/img/menu_col_1.jpg" alt="" width="840" height="138"></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="root root-9 menu-dress">
                <div class="root-item">
                  <a href="#">
                    <div class="title title_font"><span class="title-text">Dresses</span></div> <span class="description">NEW</span> </a>
                </div>
                <ul class="menu-items col-md-9 col-xs-12">
                  <li class="menu-item menu-item-72 depth-1 category menucol-1-4 ">
                    <div class="title title_font"> <a href="#"> Collar Belt </a></div>
                    <ul class="submenu submenu-depth-2">
                      <li class="menu-item menu-item-75 depth-2 category ">
                        <div class="title"> <a href="#"> Watch </a></div>
                      </li>
                      <li class="menu-item menu-item-76 depth-2 category ">
                        <div class="title"> <a href="#"> Bagshion </a></div>
                      </li>
                      <li class="menu-item menu-item-77 depth-2 category ">
                        <div class="title"> <a href="#"> Lingerie </a></div>
                      </li>
                      <li class="menu-item menu-item-78 depth-2 category ">
                        <div class="title"> <a href="#"> Shoes </a></div>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item menu-item-73 depth-1 category menucol-1-4 ">
                    <div class="title title_font"> <a href="#"> Footwear </a></div>
                    <ul class="submenu submenu-depth-2">
                      <li class="menu-item menu-item-79 depth-2 category ">
                        <div class="title"> <a href="#"> Rings </a></div>
                      </li>
                      <li class="menu-item menu-item-80 depth-2 category ">
                        <div class="title"> <a href="#"> Bands </a></div>
                      </li>
                      <li class="menu-item menu-item-81 depth-2 category ">
                        <div class="title"> <a href="#"> Diamond </a></div>
                      </li>
                      <li class="menu-item menu-item-82 depth-2 category ">
                        <div class="title"> <a href="#"> Silver Bands </a></div>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item menu-item-74 depth-1 category menucol-1-4 ">
                    <div class="title title_font"> <a href="#"> Kids fashion </a></div>
                    <ul class="submenu submenu-depth-2">
                      <li class="menu-item menu-item-83 depth-2 category ">
                        <div class="title"> <a href="#"> Shoes </a></div>
                      </li>
                      <li class="menu-item menu-item-84 depth-2 category ">
                        <div class="title"> <a href="#"> Casual Shoes </a></div>
                      </li>
                      <li class="menu-item menu-item-85 depth-2 category ">
                        <div class="title"> <a href="#"> Sprinutumn </a></div>
                      </li>
                      <li class="menu-item menu-item-86 depth-2 category ">
                        <div class="title"> <a href="#"> Winter </a></div>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item menu-item-101 depth-1 category ">
                    <div class="title title_font"> <a href="#"> Handbags </a></div>
                    <ul class="submenu submenu-depth-2">
                      <li class="menu-item menu-item-102 depth-2 category ">
                        <div class="title"> <a href="#"> Toter </a></div>
                      </li>
                      <li class="menu-item menu-item-103 depth-2 category ">
                        <div class="title"> <a href="#"> Clutches </a></div>
                      </li>
                      <li class="menu-item menu-item-104 depth-2 category ">
                        <div class="title"> <a href="#"> Satchels </a></div>
                      </li>
                      <li class="menu-item menu-item-105 depth-2 category ">
                        <div class="title"> <a href="#"> Cross body </a></div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="root root-15 menu-food">
                <div class="root-item no-description">
                  <a href="#">
                    <div class="title title_font"><span class="title-text">Food</span></div>
                  </a>
                </div>
              </li>
              <li class="root root-11 ">
                <div class="root-item no-description">
                  <a href="#">
                    <div class="title title_font"><span class="title-text">Blog</span></div>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
