<template>
    <div class="glav-div">
        <TheHeader></TheHeader>
        <div class="zag"><h3>Стаканчик за углом</h3></div>
        <div class="opisanie"><p>Описание</p></div>
    <div class="map-container">
      <div id="map"></div>
    </div>
    <div class="date">
        <p class="pdate">Дата:</p>
        <p class="pdate">Время:</p>
    </div>
    <div class="gift">
        <p>Награда</p>
    </div>
    <div class="ychastie">
        <p>Я пойду</p>
    </div>
    <div class="go">
        <p>Пойдет еще 3 человека...</p>
    </div>
  </div>  
</template>

<script>
import ymaps from 'ymaps';
import TheHeader from './TheHeader.vue';
  export default {
    components:{TheHeader},
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
<style>
.glav-div{
    position: relative;
    width: 100%;
    height: 1300px;
    background-color: #F1F3F9;
}
.zag{
    position: absolute;
    width: 10%;
    height: 5%;
    top: 10%;
    left: 45%;
}
.opisanie{
    position: absolute;
    width: 25%;
    height: 72%;
    left: 7.6%;
    top: 20%;
    border-radius: 15px;
    background-color: #F1F3F9;
    border: 1px solid #548A2F;
}
#map{
 position: absolute;
 width: 40%;
 height: 40%;
 top: 20%;
 left: 50%;
}
.date{
    position: absolute;
    width: 25%;
    top:60%;
    left: 50%;
    border-radius: 15px;
    border: 1px solid #548A2F;
}
.gift {
    position: absolute;
    width: 25%;
    top:70%;
    left: 50%;
    border-radius: 15px;
    border: 1px solid #548A2F;
    text-align: center;
    height: 2%;
}
.ychastie{
    position: absolute;
    width: 25%;
    top:75%;
    left: 50%;
    border-radius: 15px;
    background-color: #AEC2FF;
    text-align: center;
    border: 1px solid black;
    height: 2%;
}
.go {
    position: absolute;

    top:80%;
    left: 59%;
}
 
 .pdate{
  margin-left: 10px;
 }
</style>
