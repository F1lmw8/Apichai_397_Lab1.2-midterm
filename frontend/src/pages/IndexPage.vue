<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Quasar + Express App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-md">
        <div class="text-h4 q-mb-md">Full-Stack Demo</div>

        <div v-if="loading" class="text-center">
          <q-spinner color="primary" size="3em" />
          <p>Loading API data...</p>
        </div>

        <div v-else class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <q-card>
              <q-card-section class="bg-teal text-white">
                <div class="text-h6">Git Info</div>
              </q-card-section>
              <q-card-section>
                <div class="text-weight-bold">{{ apiData.git?.title }}</div>
                <div>{{ apiData.git?.detail }}</div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-md-6">
            <q-card>
              <q-card-section class="bg-orange text-white">
                <div class="text-h6">Docker Info</div>
              </q-card-section>
              <q-card-section>
                <div class="text-weight-bold">{{ apiData.docker?.title }}</div>
                <div>{{ apiData.docker?.detail }}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const apiData = ref({})
const loading = ref(true)

const fetchData = async () => {
  loading.value = true
  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
    console.log('Fetching from:', apiUrl + '/api/demo')
    const response = await axios.get(`${apiUrl}/api/demo`)
    apiData.value = response.data
  } catch (error) {
    console.error('API Error:', error)
    apiData.value = {
      git: { title: 'Error', detail: 'Failed to load data' },
      docker: { title: 'Error', detail: 'Failed to load data' }
    }
  } finally {
    loading.value = false
  }
}

onMounted(fetchData)
</script>
