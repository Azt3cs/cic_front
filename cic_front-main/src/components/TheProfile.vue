<template>
    <div class="glav-div-profile">
        <TheHeader></TheHeader>
        <div class="user-card">
    <div class="img">
      <img src="./assets/9b260ebc584ef050a71150ec0822f365.png">
    </div>
    <p>Мой профиль</p>
    <p>ФИО:<br>Иванов Максимович Ромашкин</p>
    <div class="hr"></div>
    <p>e-mail<br>maksim@gmail.com</p>
    <div class="hr"></div>
    <div class="save"><p class="pdate">Сохранить</p></div>
  </div>

<div class="haracter">
    <p>Выши достижения:</p>
    <img src="8840a51241b1a5eedd048ed882546789.png" class="img2">
    <p class="titul">Новичек</p>
    <img src="e750cffc9efc2b9b6d3d6e44caaa0102.png" class="img2">
    <p class="titul">Для достижения уровня “Стажер”
посетите еще 2 мероприятия</p>
</div>
<div class="acc">
    <p>Выйти из акка</p>
    <p>Удалить акка</p>
</div>
    </div>

</template>
    <script>
     import TheHeader from './TheHeader.vue';
    export default {
        components:{TheHeader},
      name: 'MyComponent',
    }
    </script>
    <style>
    .glav-div-profile{
        position: relative;
        width: 100%;
    height: 1500px;
    background-color: rgba(241, 243, 249, 1);
    }
    .hr{
        width: 61.3%;
  height: 1px;
  background-color: black;
}
.user-card{
    position: absolute;
  width: 40%;
  height: 50%;
  left: 3%;
  top: 10%;
  
}
.img img{
  width: 61.3%;
}
.save{
    position: absolute;
    border: 1px solid #548A2F;
    background-color: #83BA5D;
    width: 30%;
    margin-left:   15%;
    border-radius: 85px;
    margin-top: 5%;
}
.pdate{
      padding: 6% 0 0 23%;
     }
.haracter{
        position: absolute;
        border: 1px solid #548A2F;
        width: 30%;
        margin-left:   50%;
        border-radius: 85px;
        margin-top: 5%;
        text-align: center;
        height: 25%;
     }
     .img2{
        position: relative;
        width: 50px;
        height: 50px;
        margin-right: 70%;
        margin-top: 5%;

     }
     .titul{
        position: relative;
        left: 25%;
        top: -12%;
        width: 50%;
     }
    .acc{
        width: 20%;
        height: 5%;
            position: absolute;
            left: 50%;
            top: 50%;
            padding: 02% 0% 0% 12%;
    }
    </style>