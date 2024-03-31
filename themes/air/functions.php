<?php

if ( ! function_exists( 'air_setup' ) ) :
	function air() {
		add_theme_support( 'post-thumbnails' );
		register_nav_menus(
            array(
              'header' => __('Display this menu in the header', 'air'),
              'footer' => __('Display this menu in the footer', 'air'),
            )
        );
        add_theme_support('title-tag');
		add_theme_support( 'post-formats', array( 'aside', 'gallery', 'quote', 'image', 'video' ) );
        wp_enqueue_script( 'custom-script', get_template_directory_uri() . '/js/script.js', array( 'jquery' ), '1.0', true );
	}
endif;
add_action( 'after_setup_theme', 'air' );

function svg_mime_types( $mimes ) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter( 'upload_mimes', 'svg_mime_types' );

function wpse_341512_enqueue_styles() { wp_enqueue_style('my-style', get_stylesheet_uri()); } add_action('wp_enqueue_scripts', 'wpse_341512_enqueue_styles');
