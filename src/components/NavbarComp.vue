<template>
    <div class="q-pa-md">
      <q-layout view="hHr LpR lFf" class="lt-xs">
        <q-header elevated class="bg-white" >
          <q-toolbar>
            <q-toolbar-title>
                <img src="img/STELK LOGO.png" style="height: 60px;" >

            </q-toolbar-title>
              <div class="dropdown">
            <router-link to="/ja" class='rout'>JALUR PENDAFTARAN<q-icon name="expand_more"/></router-link>
            <div class="dropdown-content">
              <router-link to="/">About Me</router-link>
              <router-link to="/">Skill</router-link>
            </div>
          </div>
          <div class="dropdown">
            <router-link to="/ja" class='rout'>JADWAL<q-icon name="expand_more"/></router-link>
            <div class="dropdown-content">
              <router-link to="/">Web Sekolah</router-link>
              <router-link to="/">Web Ecommers</router-link>
            </div>
          </div>
          <div class="dropdown">
            <router-link to="/ja" class='rout'>PROFIL JURUSAN<q-icon name="expand_more"/></router-link>
            <div class="dropdown-content">
              <router-link to="/">Web Sekolah</router-link>
              <router-link to="/">Web Ecommers</router-link>
            </div>
          </div>
          <router-link to="/login" class="rout">LOGIN</router-link>
          </q-toolbar>
        </q-header>
    
      </q-layout>
    </div>
  </template>
<style>
.q-layout{
  font-family: Poppins,sans-serif;
}
.dropdown 
{
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.rout{
  text-decoration: none; 
  color: black; 
  margin-right: 6px;
}
.rout:hover{
  color: red;
}
.dropdown-content 
{
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: 20%;
}
.dropdown-content a 
{
  color:black;
  padding: 10px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover 
{
  color: red;
}
.dropdown:hover .dropdown-content 
{
  display: block;
} 
</style>
