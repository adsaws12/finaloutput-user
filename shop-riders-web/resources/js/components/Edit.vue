<template>
    <div class="col-md-8">
        <div class="card">
            <div class="card-header card-header-primary">
                <h4 class="card-title">Edit Shop</h4>
            </div>
            <div class="card-body">
                <form>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group">
                                <label class="bmd-label-floating">Email</label>
                                <input type="text" class="form-control" name="email" v-model="form.users.email">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group">
                                <label class="bmd-label-floating">Password</label>
                                <input type="password" class="form-control" name="email" v-model="form.users.password">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group">
                                <label class="bmd-label-floating">Name</label>
                                <input type="text" class="form-control" name="password" v-model="form.shops.name">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Description</label>
                                <div class="form-group">
                                    <label class="bmd-label-floating"> Please input your shop description.</label>
                                    <textarea class="form-control" rows="5" v-model="form.shops.description"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group">
                                <label class="bmd-label-floating">Contact Number</label>
                                <input type="number" class="form-control" name="contact" v-model="form.shops.contact">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group">
                                <label class="bmd-label-floating">Type of Service</label>
                                <select class="form-control" v-model="form.shops.service">
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
                                <select class="form-control" v-model="form.shops.start_time">
                                    <option v-for="time in opening_time">{{ time }}</option>
                                </select>
                                ~
                                <select class="form-control" v-model="form.shops.end_time">
                                    <option v-for="time in opening_time">{{ time }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group">
                                <label class="bmd-label-floating">Personel</label>
                                <input type="text" class="form-control" name="personel" v-model="form.shops.personel">
                            </div>
                            <div class="form-group">
                                <label class="bmd-label-floating">Price range for a car</label>
                                <input type="text" class="form-control" name="priceofcar" v-model="form.shops.priceofcar">
                            </div>
                            <div class="form-group">
                                <label class="bmd-label-floating">Price range for a motorcyle</label>
                                <input type="text" class="form-control" name="priceofmotor" v-model="form.shops.priceofmotor">
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
                                        <button @click="addMarker" class="btn btn-primary" type="button">Add</button>
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
                                            @dragend="updateCoordinates"
                                    ></gmap-marker>
                                </gmap-map>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary pull-left" @click="editShop">Submit</button>
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
                e.preventDefault();
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
             updateCoordinates(location) {
                const coordinates = {
                    lat: location.latLng.lat(),
                    lng: location.latLng.lng(),
                    };
                    this.form.dragMarkers.push(coordinates);
            },
            editShop(e) {
                e.preventDefault();
                axios.post('/admin/shop/edit/' + this.shopinfo.id, this.form)
                    .then(() => {
                        toastr.success('Successfully created');
                        setTimeout(() => {
                            location.href = '/admin/shops';
                        }, 1000);
                    })
                    .catch(error => {
                        toastr.success('Something went wrong');
                        setTimeout(() => {
                            location.href = '/admin/shop/edit/' + this.shopinfo.id;
                        }, 1000);
                    });

            }
        },
        mounted() {
            this.geolocate();
            this.form.users.email = this.shopinfo.user_info.email;
            this.form.users.id = this.shopinfo.user_info.id;
            this.form.shops.name = this.shopinfo.name;
            this.form.shops.description = this.shopinfo.description;
            this.form.shops.contact = this.shopinfo.contact;
            this.form.shops.service = this.shopinfo.service;
            this.form.shops.start_time = this.shopinfo.start_time;
            this.form.shops.end_time = this.shopinfo.end_time;
            this.form.shops.personel = this.shopinfo.personel;
            this.form.shops.priceofcar = this.shopinfo.priceofcar;
            this.form.shops.priceofmotor = this.shopinfo.priceofmotor;

            const markers = [];
            this.shopinfo.shop_markers.forEach(function (data) {
                let mark = {
                    lat: parseFloat(data.latitude),
                    lng: parseFloat(data.longitude)
                };
                markers.push(mark);
            });

            this.form.markers = markers;
            this.center = markers[0];
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
                    markers:     [],
                    users: {
                        email: null,
                        password: null,
                        id: null,
                    },
                    shops: {
                        name: null,
                        description: null,
                        start_time: null,
                        end_time: null,
                        service: null,
                        contact: null,
                        personel: null,
                        priceofcar: null,
                        priceofmotor: null,
                    }
                }
            }
        },
        props: {
            shopinfo: {
                type: Object,
                required: true
            }
        },
        computed: {
            google: gmapApi
        }
    }
</script>
