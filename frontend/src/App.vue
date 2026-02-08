<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Midterm Exam
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <IndexPage />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import IndexPage from './pages/IndexPage.vue'
</script>
