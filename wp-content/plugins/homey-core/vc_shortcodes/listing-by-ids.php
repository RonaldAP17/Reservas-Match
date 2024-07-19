<?php
if( !function_exists('homey_listing_by_ids') ) {
    function homey_listing_by_ids($atts, $content = null)
    {

        extract(shortcode_atts(array(
            'listing_style' => '',
            'listing_ids' => '',
            'columns' => ''
        ), $atts));

        ob_start();

        global $template_args;

        $template_args = array( 'listing-item-view' => 'item-grid-view' );
        
        if ( $listing_style == 'list' || $listing_style == 'list-v2' ) {
            $template_args = array( 'listing-item-view' => 'item-list-view' );
        } elseif ( $listing_style == 'card' ) {
            $template_args = array( 'listing-item-view' => 'item-card-view' );
        }

        $ids_array = explode(',', $listing_ids);

        if($columns == '2cols') {
            $column_class = 'col-sm-6';
        } else {
            $column_class = 'col-sm-4';
        }

        $args = array(
            'post_type' => 'listing',
            'post__in' => $ids_array,
            'post_status' => 'publish'
        );
        //do the query
        $the_query = New WP_Query($args);
        ?>

        <div class="module-wrap property-module-by-id property-module-by-id-<?php esc_attr_e($columns);?>">
            <div class="listing-wrap which-layout-<?php echo $listing_style;?> <?php if(str_contains($listing_style, '2')){ echo 'item-'.grid_list_or_card($listing_style, 1).'-view'; } ?> item-<?php esc_attr_e($listing_style);?>-view">
                    <?php
                    if ($the_query->have_posts()) :
                        while ($the_query->have_posts()) : $the_query->the_post();

                            echo '<div class="'.$column_class.'">';
                            if($listing_style == 'card') {
                                get_template_part('template-parts/listing/listing-card', '', $template_args);
                            }elseif($listing_style == 'grid-v2' || $listing_style == 'list-v2') {
                                get_template_part('template-parts/listing/listing-item-v2', '', $template_args);
                            } else {
                                get_template_part('template-parts/listing/listing-item', '', $template_args);
                            }
                            echo '</div>';

                        endwhile;
                        Homey_Query::loop_reset_postdata();
                    else:
                        get_template_part('template-parts/listing/listing', 'none');
                    endif;
                    ?>
            </div><!-- grid-listing-page -->
        </div>

        <?php
        $result = ob_get_contents();
        ob_end_clean();
        return $result;

    }

    add_shortcode('homey-listing-by-ids', 'homey_listing_by_ids');
}
?>
