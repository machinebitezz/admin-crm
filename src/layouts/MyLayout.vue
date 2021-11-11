<template>
  <q-layout view="lHh Lpr lff"> <!-- Be sure to play with the Layout demo on docs -->
    <!-- (Optional) The Header -->
    <q-layout-header>
      <q-toolbar id="c-toolbar"> <!-- Prefixo c-{item}: css customizado -->
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          CRM Admin
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-layout-drawer
      side="left"
      v-model="leftDrawer"
      id="c-drawer"
    >
      <!-- QScrollArea is optional -->
      <div class="full-height">
        <div class="q-pa-sm">
          <p class="menu-topo">CRM Admin</p>
        </div>

        <q-list class="c-list">
          <q-item
            active-class="c-page-active"
            clickable
            v-ripple
            to="/dashboard_v1"
          >
            <q-item-side>
              <q-icon color="white" name="dashboard" size="1.5em"/>
            </q-item-side>
            Dashboard v1
          </q-item>

          <q-item
            active-class="c-page-active"
            clickable
            v-ripple
            to="/dashboard_v2"
          >
            <q-item-side>
              <q-icon color="white" name="dashboard" size="1.5em"/>
            </q-item-side>
            Dashboard v2
          </q-item>
        </q-list>
      </div>
    </q-layout-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style>
.c-list { /* "override" da borda */
  border: none !important;
  border-top: 1px solid #696C6D !important;
  margin-top: 10px;
  padding: 7px;
}

.c-list .q-item {
  padding: 15px;
  border-radius: 10px;
  margin: 5px 0;
  transition: 250ms;
}

.c-page-active {
  background-color: #249124 !important;
}

.c-list .q-item:hover {
  background-color: #FFFFFF2C;
  transition: 250ms;
}

.menu-topo {
  padding-left: 5px;
  margin: 0;
  display: inline;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 300;
}

#c-toolbar {
  background: linear-gradient(90deg, #206A50, #153966) !important;
}

#c-drawer {
  color: #FFF;
  background-image: url(https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg) !important;
  background-size: cover;
}

#c-drawer .full-height {
  padding: 10px;
  background: #000000C4
}
</style>
