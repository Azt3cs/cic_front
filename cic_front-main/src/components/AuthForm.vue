<template>
  <div>
    <input type="text" v-model="login" placeholder="Логин">
    <input type="password" v-model="password" placeholder="Пароль">
    <button @click="loginUser">Войти</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: ''
    };
  },
  methods: {// В вашем скрипте компонента
    async loginUser() {
      const response = await this.$http.get(`http://localhost:3030/api/login?login=${this.login}&password=${this.password}`);
      const token = response.data.token;

      const verifyResponse = await this.$http.get(`http://localhost:3030/api/verify?token=${token}`);
      localStorage.setItem('user', JSON.stringify(verifyResponse.data));

      console.log(verifyResponse.data);

      this.$router.push('/'); // Переход на главную страницу
    }
  }
}
</script>

<style scoped>
.authorisation {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-wrapper {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px; /* Adjust the width as needed */
}

.authorisation__form {
  display: flex;
  flex-direction: column;
}

.authorisation__title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>