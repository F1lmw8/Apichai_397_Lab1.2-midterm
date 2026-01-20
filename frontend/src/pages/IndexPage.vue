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
        <div class="row items-center justify-between q-mb-md">
          <div class="text-h4">Full-Stack Demo</div>
          <q-btn 
            color="indigo-7" 
            icon="open_in_new" 
            label="Open Full Page Map" 
            type="a" 
            href="/longan_map.html" 
            target="_blank"
            class="text-weight-bold"
          />
        </div>

        <!-- Embedded Map Section -->
        <div class="q-mb-md">
          <q-card bordered flat class="shadow-2">
            <q-card-section class="bg-indigo-6 text-white row items-center">
              <q-icon name="map" size="sm" class="q-mr-sm" />
              <div class="text-h6">Live Survey Map</div>
            </q-card-section>
            <q-card-section class="q-pa-none">
              <iframe 
                src="/longan_map.html" 
                style="width: 100%; height: 600px; border: none;"
                title="Longan Survey Map"
              ></iframe>
            </q-card-section>
          </q-card>
        </div>

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

        <div class="q-mt-md">
          <q-card>
             <q-card-section class="bg-purple text-white">
                <div class="text-h6">Learning Objectives Checklist (Lab 1.2)</div>
             </q-card-section>
             <q-card-section>
                <q-list bordered separator>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon name="check_circle" color="green" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bold">1. Version Control</q-item-label>
                      <q-item-label caption>Monorepo workflow (frontend+backend), Conventional Commits.</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar>
                      <q-icon name="check_circle" color="green" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bold">2. .gitignore / .dockerignore</q-item-label>
                      <q-item-label caption>Optimized for both stacks, log persistence handled correctly.</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar>
                      <q-icon name="check_circle" color="green" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bold">3. Dockerfile</q-item-label>
                      <q-item-label caption>Multi-stage builds for both, Backend Healthcheck implemented.</q-item-label>
                    </q-item-section>
                  </q-item>

                   <q-item>
                    <q-item-section avatar>
                      <q-icon name="check_circle" color="green" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bold">4. Docker Usage</q-item-label>
                      <q-item-label caption>Docker Compose orchestration, Networks, Volumes & Env vars.</q-item-label>
                    </q-item-section>
                  </q-item>

                   <q-item>
                    <q-item-section avatar>
                      <q-icon name="check_circle" color="green" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bold">5. Integration</q-item-label>
                      <q-item-label caption>Real API calls (Axios), Error handling & CORS enabled.</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
             </q-card-section>
          </q-card>
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
