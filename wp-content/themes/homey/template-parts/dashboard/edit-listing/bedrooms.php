<?php 
global $homey_prefix, $homey_local, $listing_data;
$accomodation = get_post_meta($listing_data->ID, $homey_prefix.'accomodation', true);
$class = '';
if(isset($_GET['tab']) && $_GET['tab'] == 'bedrooms') {
    $class = 'in active';
}
?>

<div id="bedrooms-tab" class="tab-pane fade <?php echo esc_attr($class); ?>">
    <div class="block-title visible-xs">
        <h3 class="title">Participantes de la cancha</h3>
    </div>
    <div class="block-body">
        <div id="more_bedrooms_main">
            <?php 
            $count = 0;
            if(!empty($accomodation)) {
                foreach($accomodation as $acc):
                ?>
                    <div class="more_rooms_wrap">
                        <div class="row">
                            <div class="col-sm-6 col-xs-12">
                                <div class="form-group">
                                    <label for="acc_bedroom_name"> Canchas disponibles </label>
                                    <input type="text" name="homey_accomodation[<?php echo intval($count); ?>][acc_bedroom_name]" value="<?php echo sanitize_text_field( $acc['acc_bedroom_name'] ); ?>" class="form-control" placeholder="<?php echo esc_attr(homey_option('ad_acc_bedroom_name_plac')); ?>">
                                </div>
                            </div>
                            <div class="col-sm-6 col-xs-12">
                                <div class="form-group">
                                    <label for="acc_guests"> Cantidad de jugadores disponibles </label>
                                    <input type="text" name="homey_accomodation[<?php echo intval($count); ?>][acc_guests]" value="<?php echo sanitize_text_field( $acc['acc_guests'] ); ?>" class="form-control" placeholder="<?php echo esc_attr(homey_option('ad_acc_guests_plac')); ?>">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                        </div>
                        <div class="row">
                        </div>
                        <hr>
                    </div>
             <?php  $count++;
                endforeach; 
            } ?>
        </div>
    </div>
</div>