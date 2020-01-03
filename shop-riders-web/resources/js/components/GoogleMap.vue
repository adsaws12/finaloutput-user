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
                                <label class="bmd-label-floating">Email</label>
                                <input type="text" class="form-control" name="email" v-model="form.email">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group">
                                <label class="bmd-label-floating">Password</label>
                                <input type="password" class="form-control" name="email" v-model="form.password">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group">
                                <label class="bmd-label-floating">Name</label>
                                <input type="text" class="form-control" name="password" v-model="form.name">
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
                        <div class="col-md-5">
                            <div class="form-group">
                                <label class="bmd-label-floating">Contact Number</label>
                                <input type="number" class="form-control" name="contact" v-model="form.contact">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group">
                                <label class="bmd-label-floating">Type of Service</label>
                                <select class="form-control" v-model="form.service">
                                    <option value="Vulcanizing">Vulcanizing</option>
                                    <option value="Repair">Repair</option>
                                    <option value="Vulcanizing and Repair">Vulcanizing and Repair</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group">
                                <label class="bmd-label-floating">Working Hour</label>
                                <select class="form-control" v-model="form.start_time">
                                    <option v-for="time in opening_time">{{ time }}</option>
                                </select>
                                ~
                                <select class="form-control" v-model="form.end_time">
                                    <option v-for="time in opening_time">{{ time }}</option>
                                </select>
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
                                </div>
                                <br>
                              <gmap-map
                                        :center="center"
                                        :zoom="15"
                                        style="width:95%;  height: 400px;"
                                >
                                    <gmap-marker
                                            :key="index"
                                            v-for="(m, index) in form.markers"
                                            :position="m"
                                            @click="center=m"
                                            :draggable="true"
                                    ></gmap-marker>
                                </gmap-map>
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
    import { gmapApi } from 'vue2-google-maps'

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
            const workingTime = [];

            for (let i = 0; i < 24; i++) {
                workingTime.push(String(i).padStart(2, '0') + ':00');
            }
            return {
                center:       {lat: 10.328142, lng: 123.9064438},
                places:       [],
                currentPlace: null,
                opening_time: workingTime,
                form:         {
                    name:        null,
                    description: null,
                    markers:     [],
                    email: null,
                    password: null,
                    start_time: null,
                    end_time: null
                }
            }
        },
        computed: {
            google: gmapApi
        }
    }
</script>
