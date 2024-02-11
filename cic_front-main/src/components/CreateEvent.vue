<template>
  <TheHeader/>
  <div>
    <div>
      <input type="text" v-model="name" placeholder="Название мероприятия">
    </div>
    <div>
      <textarea v-model="description" placeholder="Описание мероприятия"></textarea>
    </div>
    <div>
      <input type="date" v-model="time_spending" placeholder="Дата мероприятия">
    </div>
    <div>
      <input type="text" v-model="coordinates" placeholder="Место мероприятия">
    </div>
    <div>
      <input type="number" v-model="reward" placeholder="Вознаграждение">
    </div>
    <div>
      <button @click="sendEventData">Отправить</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {TheHeader},
  data() {
    return {
      name: '',
      description: '',
      time_spending: '',
      coordinates: '',
      reward: 0
    };
  },
  methods: {
    sendEventData() {
      const postData = {
        name: this.name,
        description: this.description,
        time_spending: this.time_spending,
        coordinates: this.coordinates,
        status: true,
        reward: this.reward
      };

      axios.post('http://localhost:3030/api/event/create', postData)
          .then(response => {
            console.log('Успешный ответ:', response.data);
          })
          .catch(error => {
            console.error('Ошибка:', error);
          });
    }
  }
};
</script>