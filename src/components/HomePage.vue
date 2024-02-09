<template>

    <div class="header-values">
        <ul>
            <li>dsd</li>
            <li>ddsds</li>
            <li>sdsdsd</li>
        </ul>
    </div>
    <div class="map-container">
      <div id="map" style="width: 500px; height: 400px"></div>
    </div>
  </template>
  
  <script>
  import ymaps from 'ymaps'
  export default {
    name: 'YandexMap',
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        const apiKey = 'https://api-maps.yandex.ru/v3/?apikey=044fa8a4-b8a1-4bb0-bedc-4c36c7d24df0&lang=ru_RU'; // Replace 'YOUR_API_KEY' with your actual API key
        
        // Use Yandex Maps API from global object
        ymaps
          .load(`https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=en_US`)
          .then(maps => {
            new maps.Map('map', {
              center: [-5.369326, 115.166023],
              zoom: 7
            });
          })
          .catch(error => {
            console.error('Failed to load Yandex Maps:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
    *{
        padding: 0;
        margin: 0;
    }
  .header-values ul{
    list-style-type: none;
    display: flex;
    align-items: center;
  }
  .header-values li{
    padding-right: 100px;
    font-size: 20px;
  }
  .header-values{
    padding-left: 1100px;
  }
  .map-container{
    padding-left: 100px;
  }
  </style>
  