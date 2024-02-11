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
        <p>Название:{{ event.name }}</p>
        <p>Описание:{{ event.description }}</p>
        <p>Время проведения:{{ event.time_spending }}</p>
        <p>Место провидения:{{ event.coordinates }}</p>
        <p>Статус: {{ event.status ? 'Активно' : 'Прошло' }}</p>
        <p><button @click="registerEvent(event.id)">Записаться на мероприятие</button></p>
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
      loading: true,
      error: null,
      userId: JSON.parse(localStorage.getItem('user')).id, // Получаем ID пользователя из localStorage
    };
  },
  mounted() {
    this.fetchEventData();
  },
  methods: {
    fetchEventData() {
      axios.get(`${api}/api/event/get`)
          .then(response => {
            this.responseData = response.data;
            this.loading = false;
            console.log(this.responseData);
          })
          .catch(error => {
            console.error(error);
            this.error = 'Произошла ошибка при загрузке данных';
            this.loading = false;
          });
    },
    registerEvent(eventId) {
      axios.post(`${api}/api/event/registerEvent`, {
        userId: 3,
        eventId: eventId,
      })
          .then(response => {
            console.log(response.data);
            alert('Вы успешно записались на мероприятие!');
            // Можно добавить какую-то обработку после успешной записи
          })
          .catch(error => {
            console.error(error);
            alert('Произошла ошибка при записи на мероприятие');
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
</style>
