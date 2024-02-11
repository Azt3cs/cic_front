<template>

 <div class="glav-div-abot">
    <TheHeader></TheHeader>
     <div class="text">
           <p>Введите название мероприятия</p>
       </div>
       <div class="description-events">
        <p>Описание</p>
      </div>
               <div class="date-time">
                <p class="pdate">Дата:</p>
                <p class="pdate">Время:</p>
                </div>
   <div class="bonus">
    <p class="pdate">Награда</p>
   </div>
   <div class="botton">
    <p>Создать ероприятие</p>
   </div>
    </div>
   
   </template>
   <script>
import TheHeader from './TheHeader.vue';
export default{
    components:{TheHeader}
}
</script>
   <style scoped>
   
   *{
           padding: 0;
           margin: 0;
           font-family: 'Anonymous Pro', monospace;
       }

     .text{
       padding-top: 5%;
       font-size: 20px ;
       text-align: center;
     }
     .description-events{
      position: absolute;
       padding: 3% 0 0 10%;
       width: 30%;
       display: flex;
       border: 1px solid #548A2F;
       border-radius: 15px;
       height: 50%;
       left: 5%;
       top: 20%;
     }
     .date-time{
      position: absolute;
      left: 50%;
      border-radius: 15px;
      border: 1px solid #548A2F;
      width: 20%;
      height: 5%;
      top: 20%;
     }
     .glav-div-abot{
    width: 100%;
    height: 1500px;
      position: relative;
    background-color: rgba(241, 243, 249, 1);
     }
     .pdate{
      padding: 2.5% 0 0 5%;
     }
     .bonus{
      position: absolute;
      border-radius: 15px;
      border: 1px solid #548A2F;
      width: 20%;
      height: 5%;
      left: 50%;
      top: 28%;
     }
     .botton{
      position: absolute;
      border:1px solid #548A2F;
      width: 15%;
      height: 7%;
      border-radius: 15px;
      left: 52.5%;
      top: 50%;
      padding: 2% 0% 0% 0% ;
      text-align: center;
      background-color:#548A2F33;
     }
   </style>