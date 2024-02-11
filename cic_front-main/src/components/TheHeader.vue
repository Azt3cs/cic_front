<template>
  <div class="header">
    <div class="header-values">
      <ul>
          <li><router-link to="/">Мероприятия </router-link></li>
        <li><router-link to="/Achivments">Достижения</router-link> </li>
        <li><router-link to="/myachivment">Мои достижения</router-link></li>
        <li><router-link to="/createevent">Создать мероприятие</router-link></li>
        <li style="padding-left: 50%"><router-link to="/auth">Войти</router-link></li>
      </ul>
  </div>
  </div>
</template>

<script>
export default{

}
</script>

<style>
  *{
      padding: 0;
      margin: 0;
      font-family: 'Montserrat', sans-serif;
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
  font-size: 24px;
  margin-right: 5%;
  margin-top: 23px;
  color: white;
}
.header{
  background: rgba(84, 138, 47, 1);
  height: 75px;
  width: 100%;


}
</style>