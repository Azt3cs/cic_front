<template>
  <div>
    <TheHeader />
    <div v-if="loading">
      Loading...
    </div>
    <div v-if="error">
      Error: {{ error }}
    </div>
    <div v-if="responseData">
      <div class="event-container" v-for="event in responseData" :key="event.id">
        <img :src="event.icon" alt="">

        <p>Название:{{ event.name }}</p>
        <p>Награда:{{ event.reward }}</p>

      </div>
    </div>
  </div>
</template>
<script>
import TheHeader from './TheHeader.vue';
import axios from 'axios';
import { api } from '../utils';

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      responseData: null,
      loading: true, // Добавляем флаг загрузки данных
      error: null, // Добавляем переменную для хранения ошибок
    };
  },
  mounted() {
    this.fetchEventData();
  },
  methods: {
    fetchEventData() {
      axios.get(`${api}/api/achivments/get`)
          .then(response => {
            this.responseData = response.data;
            this.loading = false; // Устанавливаем флаг загрузки на false
            console.log(this.responseData);
          })
          .catch(error => {
            console.error(error);
            this.error = 'Произошла ошибка при загрузке данных';
            this.loading = false; // Устанавливаем флаг загрузки на false
          });
    }
  }
}
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital@1&display=swap');


.koka {
  padding: 5% 0 0 0;
  text-align: center;
  font-size: 20px;
}

.event-container {
  padding: 5% 0 0 7%;
}

.glaws-div-home {
  width: 100%;
  height: 1500px;
  background-color: rgb(236, 248, 240);
}
img{
  width: 100px;
  height: 100px;
  border-radius: 30px;
}
</style>
