<template>

    <div class="header">
      <div class="header-values">
        <ul>
            <li>Мероприятия </li>
            <li>Достижения </li>
            <li style="padding-left: 50%;">Войти</li>
        </ul>
    </div>
  </div>

    <p class="koka">Все события происходящие в Богудонии</p>

    <div class="event-container">
      <img src="./assets/pic.png">
      <p>Почистить море хз</p>
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
        const apiKey = 'https://api-maps.yandex.ru/v3/?apikey=044fa8a4-b8a1-4bb0-bedc-4c36c7d24df0&lang=ru_RU'; 
        
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

    @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital@1&display=swap');
    *{
        padding: 0;
        margin: 0;
        font-family: 'Anonymous Pro', monospace;
    }

    .header-values{
      padding: 0 0 0 7%;

  }
  .header-values ul{
    list-style-type: none;
    display: flex;
    align-items: center;
  }
  .header-values li{
    font-size: 17px;
    margin-right: 5%;
  }
.koka{
  padding: 5% 0 0 0;
  text-align: center;
  font-size:20px ;
}
.event-container{
  padding: 5% 0 0 7%;
}
  .map-container{
    padding: 100px 0 0 100px;
  }
  </style>
  