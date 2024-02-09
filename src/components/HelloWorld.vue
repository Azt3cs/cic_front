
<template>
    <div class="header-values">
      <ul>
        <li>алвдалв</li>
        <li>алвдалв</li>
        <li>алвдалв</li>
        <li>алвдалв</li>
      </ul>
    </div>

    <div>
    <yandex-map
      :coords="mapCenter"
      :zoom="mapZoom"
      style="width: 100%; height: 400px"
    ></yandex-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapCenter: [55.751574, 37.573856], // координаты центра карты
      mapZoom: 10, // уровень масштабирования карты
    };
  },
};
</script>
<style>
</style>
