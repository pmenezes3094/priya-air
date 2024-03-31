<?php
/*
 * Template Name: front-page
 */
get_header();
?>

<?php
if ( have_posts() ) :
    while ( have_posts() ) : the_post();
    get_template_part( 'template-parts/content', 'content-part' );

    $custom_post_type_args = array(
        'post_type'      => 'case-study', 
        'posts_per_page' => 3, 
    );
    $custom_post_type_query = new WP_Query( $custom_post_type_args );
    if ( $custom_post_type_query->have_posts() ) :
        while ( $custom_post_type_query->have_posts() ) : $custom_post_type_query->the_post();
            get_template_part( 'template-parts/content', 'custom-post-type-card' );
        endwhile;
        wp_reset_postdata(); 
    endif;
    get_template_part( 'template-parts/content', 'content-part' );
    endwhile;
endif;
?>

<?php get_footer(); ?>
