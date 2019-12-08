<template>
    <div style="width:700px">
        <div>
            <h2>Search and add a pin</h2>
            <label>
                <gmap-autocomplete
                        @place_changed="setPlace">
                </gmap-autocomplete>
                <button @click="addMarker">Add</button>
            </label>
            <br/>

        </div>
        <br>
        <gmap-map
                :center="center"
                :zoom="17"
                style="width:100%;  height: 400px;"
        >
            <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    @click="center=m.position"
                    :draggable="true"
            ></gmap-marker>
        </gmap-map>
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
                    this.markers.push({position: marker});
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
        },
        mounted() {
            this.geolocate();
        },
        data() {
            return {
                center:       {lat: 10.328142, lng: 123.9064438},
                markers:      [],
                places:       [],
                currentPlace: null
            }
        },
        computed: {
            google: gmapApi
        }
    }
</script>
