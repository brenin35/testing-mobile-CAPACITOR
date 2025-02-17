<script lang="ts">
	import type { Position } from '@capacitor/geolocation';
    import { Geolocation } from '@capacitor/geolocation';

    let loc:Position | null = $state(null)

    async function getCurrentPosition(){
        try {
            const res = await Geolocation.getCurrentPosition()
            loc = res
            console.log(res)
        } catch (error) {
            console.error(error)   
        }
    }
</script>

<div>
    <h1>Geolocation</h1>
    <p>Your location is:</p>
    <p>Latitude: {loc?.coords.latitude}</p>
    <p>Longitude: {loc?.coords.longitude}</p>

    <button onclick={getCurrentPosition}>
        Get Current Location
    </button>
</div>

<style>
    div {
        padding-top: 50px;
    }
</style>