<?php

echo '<footer>';
echo '<section class="bg-accent-secondary" style="padding-top:50px;padding-bottom:25px;">';
echo '<div class="container">';
echo '<div class="row justify-content-center">';

echo '<div class="col-lg-6 text-center" style="">';
echo do_shortcode('[button href="tel:+1' . globalPhone() . '" class="white"]' . globalPhone() . '[/button]');
echo do_shortcode('[button href="/contact/" class="white"]Contact Now[/button]');
echo '</div>';
echo '</div>';
echo '</div>';

echo '<hr style="margin:40px auto !important;border-color:#f7f7f7;">';

echo '<div class="container">';
echo '<div class="row">';

echo '<div class="col-lg-5 col-md-6 text-white">';
echo '<a href="' . home_url() . '">';
echo '<div style="width:205px;fill:white;">';
echo logoSVG();
echo '</div>';
echo '</a>';

echo '<small class="">' . companyAbout() . '</small>';

echo '</div>';
echo '<div class="col-lg-4 col-md-6 text-white">';
echo '<p><strong>Expert Witness And Analytic Services</strong></p>';

echo '<small class="">' . expertWitness() . '</small>';

echo '</div>';

// // echo '<div class="col-lg-3 text-white">';
// // echo '<strong>About</strong>';
// // echo '<p class="">' . companyAbout() . '</p>';

// // echo '</div>';
// echo '<div class="col-lg-3 text-white">';
// echo '<p><strong>Client Resources</strong></p>';
// echo '<p>';
// wp_nav_menu(array(
//     'menu' => 'footer',
//     'menu_class'=>'menu list-unstyled text-white text-uppercase mt-0'
// ));
// echo '</p>';


// echo '</div>';

echo '</div>';
echo '</div>';
echo '</section>';

echo '<section class="pt-5 bg-accent">';
echo '<div class="container">';
echo '<div class="row justify-content-center">';
echo '<div class="col-12">';



echo '</div>';
echo '<div class="col-12 text-center text-white">';

// echo get_template_part('partials/si');

echo '<div class="text-gray-1 pt-4">';

// the_field('website_message','options');

echo '</div>';
echo '</div>';
echo '</div>';
echo '</div>';
echo '</section>';
echo '<div class="text-center bg-light" style="padding:15px 0px;">';
    echo '<div class="d-flex justify-content-center align-items-center">';
        echo '<small class=""><a href="https://latinowebstudio.com/" target="_blank" rel="noopener noreferrer" title="Web Design, Web Development & SEO done by Latino Web Studio in Denver, CO" style="" class="">Web Design, Web Development & SEO in Denver, CO</a> done by Latino Web Studio</small>';
    echo '</div>';
echo '</div>';
echo '</footer>';

echo '<div id="servicesMenuModal" class="modal" style="opacity:1;">';
//   <!-- Modal content -->
echo '<div class="modal-content" style="background:var(--light);border:none;width:90%;max-width: 1120px;padding:0px;height:0px;transition:all .5s ease-in-out;">';
// echo '<span class="close">&times;</span>';

echo '<div class="row" style="padding:20px;">';
echo '<div class="col-lg-6">';
echo '<p><strong>Forensic Electrical,Telecom, &amp; Wireless Engineering</strong></p>';

wp_nav_menu(array(
    'menu' => 'Forensic Electrical, Telecom, & Wireless Engineering',
    'menu_class'=>'menu list-unstyled mb-0'
));

echo '</div>';
echo '<div class="col-lg-6">';
echo '<p><strong>Applied Research &amp; Analytics</strong></p>';

wp_nav_menu(array(
    'menu' => 'Applied Research & Analytics',
    'menu_class'=>'menu list-unstyled mb-0'
));

echo '</div>';
echo '</div>';

echo '</div>';
echo '</div>';

echo codeFooter();
// if(get_field('footer', 'options')) { the_field('footer', 'options'); }
// if(get_field('footer_code')) { the_field('footer_code'); }

wp_footer();

echo '</body>';
echo '</html>';
?>