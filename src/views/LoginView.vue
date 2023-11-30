<template >
 <q-layout view="hHr LpR lFf">
    <div>
       <div class="img">
        <img src="img/wave.png" style="height: 120vh;">
        <img src="img/Siswa stelk.png" style="height: 100vh; top: 2vh; position: absolute;">
        <img src="img/STELK LOGO.png" style="height: 20vh; top: 2vh; position: absolute; left: 80%;" >
       </div>
    <q-card class="my-card">
        <img src="img/Sehati.png" class="absolute-center" style="width:80px; top:0;">
      <q-card-section class="q-pt-xl">
        <q-input v-model="text" type="text" label="Username" />
        <q-input v-model="pw" type="password" label="Password" />
        <q-btn color="red" label="Masuk" @click="onClick" style="margin-top: 20px; width: 100%;" to="/home" />
        <h6 class="text-center">Power By SMK Telkom</h6>
      </q-card-section>
    </q-card>
    </div>
 </q-layout>
</template>
<style>

.my-card{
    width: 250px;
    left: 70%;
    bottom: 35vh;
    position: absolute;
}
</style>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>