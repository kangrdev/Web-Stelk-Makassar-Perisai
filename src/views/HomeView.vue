<template>
  <q-page-container>
   <div class="c">
    <img src="img/wave.png" style="height: 120vh; margin-top: 60px;">
      <img src="img/Siswa stelk.png" style="height: 90vh; top: 80px; position: absolute;">
      <div class="text-h4 text-bold absolute" style="left: 50%; top: 20px;  margin-top: 220px;">THE REAL INFORMATICS SCHOOL</div>
    <div class="text-p absolute" style="left: 55%; top: 20px;  margin-top: 270px;">Pelopor SMK bidang Teknologi Informasi dan Komunikasi di Indonesia.</div>
   </div>
   <div class="penda" style="margin-top: 20px;">
    <div class="text-h5 text-bold text-center">Jalur Pendaftaran</div>
    <div class="text-p text-center">Jalur Pendaftaran</div>
    <div class="row justify-between">
      <div>
        <div class="text-h5 text-bold" style="margin-left: 300px; margin-top: 10%;"> Jalur Prestasi Akademik</div>
         <div style="margin-left: 52%;">
          <p> <q-icon name="done" color="red" /> null</p>
          <p> <q-icon name="done" color="red" /> null</p>
          <p> <q-icon name="done" color="red"/> null</p>
          <p> <q-icon name="done" color="red"/> null</p>
          <p> <q-icon name="done" color="red" /> null</p>
          <p> <q-icon name="done" color="red"/> null</p>
         </div>
        </div>
      <img src="img/Ilustrasi1.png" style="margin-right: 20%; margin-top: 5%;">
    </div>
    <div class="row justify-between">
      <img src="img/Ilustrasi 2.png" style="margin-left: 300px; margin-top: 10%;">
      <div>
        <div class="text-h5 text-bold" style="margin-top: 40%; margin-right: 400px;"> Jalur Reguler</div>
        <div style="margin-right: 52%;">
          <p> <q-icon name="done" color="red" /> null</p>
          <p> <q-icon name="done" color="red" /> null</p>
          <p> <q-icon name="done" color="red"/> null</p>
          <p> <q-icon name="done" color="red"/> null</p>
          <p> <q-icon name="done" color="red" /> null</p>
          <p> <q-icon name="done" color="red"/> null</p>
         </div>
        </div>
    </div>
    <div class="x">
      <div class="text-h5 text-bold text-center" style="margin-top: 5%;">Jadwal PERISAI</div>
      <div class="text-p text-bold text-center text-gray-500">lorem epsum</div>
      <div class="col row justify-center" style="margin-top: 20px;">
        <q-card class="rela q-pa-md" style="width: 300px;margin-right: 30px;" >
          <q-card-section>
            <div class="text-h6 text-bold text-center">Jalur Prestasi</div>
            <div class="text-h6 text-bold text-center text-red-600 q-pa-md">Rp 3000</div>
            <q-separator />
            <div class=" text-bold text-center text-gray-400 q-pt-md">Jadwal Pendaftaran</div>
            <div class="text-h6 text-bold text-center text-red-600">1 Oktober 2022</div>
            <div class="text-h6 text-bold text-center text-red-600 q-pa-md">25 November 2022</div>
            <q-separator/>
            <div class=" text-bold text-center text-gray-400 q-pt-md">Ujian</div>
            <div class="text-h6 text-bold text-center text-red-600 q-pa-md">26 November 2022</div>
            <q-separator />
            <div class=" text-bold text-center text-gray-400 q-pt-md">Pengumuman</div>
            <div class="text-h6 text-bold text-center text-red-600 q-pa-md">29 November 2022</div>
          </q-card-section>
          <q-btn rounded color="red" class="absolute" label="Daftar" @click="onClick" style="left: 35%;" />
        </q-card>
        <q-card class="rela q-pa-md" style="width: 300px;margin-right: 30px;" >
          <q-card-section>
            <div class="text-h6 text-bold text-center">Jalur Prestasi</div>
            <div class="text-h6 text-bold text-center text-red-600 q-pa-md">Rp 3000</div>
            <q-separator />
            <div class=" text-bold text-center text-gray-400 q-pt-md">Jadwal Pendaftaran</div>
            <div class="text-h6 text-bold text-center text-red-600">1 Oktober 2022</div>
            <div class="text-h6 text-bold text-center text-red-600 q-pa-md">25 November 2022</div>
            <q-separator/>
            <div class=" text-bold text-center text-gray-400 q-pt-md">Ujian</div>
            <div class="text-h6 text-bold text-center text-red-600 q-pa-md">26 November 2022</div>
            <q-separator />
            <div class=" text-bold text-center text-gray-400 q-pt-md">Pengumuman</div>
            <div class="text-h6 text-bold text-center text-red-600 q-pa-md">29 November 2022</div>
          </q-card-section>
          <q-btn rounded color="red" class="absolute" label="Daftar" @click="onClick" style="left: 35%;" />
        </q-card>
        <q-card class="rela q-pa-md" style="width: 300px;margin-right: 30px;" >
          <q-card-section>
            <div class="text-h6 text-bold text-center">Jalur Prestasi</div>
            <div class="text-h6 text-bold text-center text-red-600 q-pa-md">Rp 3000</div>
            <q-separator />
            <div class=" text-bold text-center text-gray-400 q-pt-md">Jadwal Pendaftaran</div>
            <div class="text-h6 text-bold text-center text-red-600">1 Oktober 2022</div>
            <div class="text-h6 text-bold text-center text-red-600 q-pa-md">25 November 2022</div>
            <q-separator/>
            <div class=" text-bold text-center text-gray-400 q-pt-md">Ujian</div>
            <div class="text-h6 text-bold text-center text-red-600 q-pa-md">26 November 2022</div>
            <q-separator />
            <div class=" text-bold text-center text-gray-400 q-pt-md">Pengumuman</div>
            <div class="text-h6 text-bold text-center text-red-600 q-pa-md">29 November 2022</div>
          </q-card-section>
          <q-btn rounded color="red" class="absolute" label="Daftar" @click="onClick" style="left: 35%;" />
        </q-card>
      </div>
    </div>
    <div>
    </div>
   
    </div>
  </q-page-container>
 <q-page-container>
  <navbar-comp/>
  <FooterComp/>
 </q-page-container>

</template>

<script>
// @ is an alias to /src
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'


export default {
  name: 'HomeView',
  components: {
    NavbarComp,
    FooterComp,
  }
}
</script>
