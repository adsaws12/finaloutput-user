<template>
    <div class="col-md-8">
        <div class="card">
            <div class="card-header card-header-primary">
                <h4 class="card-title">Add Shop</h4>
            </div>
            <div class="card-body">
                <form>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group">
                                <label class="bmd-label-floating">Name</label>
                                <input type="text" class="form-control" name="name" v-model="form.name">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Description</label>
                                <div class="form-group">
                                    <label class="bmd-label-floating"> Please input your shop description.</label>
                                    <textarea class="form-control" rows="5" v-model="form.description"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div style="width:700px">
                                <div>
                                    <h4 class="card-title">Search and add a pin</h4>
                                    <label>
                                        <gmap-autocomplete
                                                @place_changed="setPlace"
                                                class="form-control"
                                                style="width: 500px;"
                                        >
                                        </gmap-autocomplete>
                                        <button @click="addMarker" class="btn btn-primary" type="button">Add Marker</button>
                                    </label>
                                    <br/>

                                </div>
                                <br>
                              <div>
                               MAP AKONG E BUTANG DIARI
                              </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary pull-left" @click="addShop">Submit</button>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {gmapApi} from 'vue2-google-maps'

    export default {
        methods:  {
            setPlace(place) {
                this.currentPlace = place;
            },
            addMarker() {
                if (this.currentPlace) {
                    const marker = {
                        lat: this.currentPlace.geometry.location.lat(),
                        lng: this.currentPlace.geometry.location.lng()
                    };
                    this.form.markers.push(marker);
                    this.places.push(this.currentPlace);
                    this.center       = marker;
                    this.currentPlace = null;
                }
            },
            geolocate: function () {
                navigator.geolocation.getCurrentPosition(position => {
                    this.center = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                });
            },
            addShop(e) {
                e.preventDefault();
                axios.post('/admin/shop/add', this.form)
                    .then(() => {
                        toastr.success('Successfully created');
                        setTimeout(() => {
                            location.href = '/admin/shops';
                        }, 1000);
                    })
                    .catch(error => {
                        toastr.success('Something went wrong');
                        setTimeout(() => {
                            location.href = '/admin/shop/add';
                        }, 1000);
                    });

            }
        },
        mounted() {
            this.geolocate();
        },
        data() {
            return {
                center:       {lat: 10.328142, lng: 123.9064438},
                places:       [],
                currentPlace: null,
                form:         {
                    name:        null,
                    description: null,
                    markers:     []
                }
            }
        },
        computed: {
            google: gmapApi
        }
    }
</script>
