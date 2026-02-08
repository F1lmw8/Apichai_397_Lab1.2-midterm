<template>
  <q-page padding>
    <div class="text-h4 q-mb-md">
      Advanced Full-Stack Demo (Quasar + Express)
    </div>

    <!-- Git Workflow -->
    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Git Workflow</div>
        <q-list bordered separator class="q-mt-sm">
          <q-item v-for="(step, index) in gitSteps" :key="index">
            <q-item-section avatar>
              <q-badge>{{ index + 1 }}</q-badge>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ step.title }}</q-item-label>
              <q-item-label caption>{{ step.detail }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <!-- Docker Concepts -->
    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Docker Concepts</div>
        <q-list bordered separator class="q-mt-sm">
          <q-item v-for="(item, index) in dockerItems" :key="index">
            <q-item-section>
              <q-item-label>{{ item.title }}</q-item-label>
              <q-item-label caption>{{ item.detail }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <!-- New: API Data from Backend -->
    <q-card>
      <q-card-section>
        <div class="text-h6">Data from Backend API</div>
        <div v-if="loading" class="flex flex-center q-pa-md">
          <q-spinner color="primary" size="2em" />
        </div>
        <q-list v-else bordered separator class="q-mt-sm">
          <q-item>
            <q-item-section>
              <q-item-label>Advanced Git</q-item-label>
              <q-item-label caption>{{ apiData.git?.detail }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>Advanced Docker</q-item-label>
              <q-item-label caption>{{ apiData.docker?.detail }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <div class="q-mt-md">
          <q-btn v-if="!loading" color="primary" label="Refresh Data" @click="fetchData" />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const gitSteps = [
  { title: 'Create Feature Branch', detail: 'สร้าง branch ใหม่จาก main เสมอ' },
  { title: 'Conventional Commits', detail: 'ใช้รูปแบบ feat: หรือ chore: เพื่อสื่อความหมาย' },
  { title: 'Push and PR', detail: 'Push ขึ้น GitHub และเปิด Pull Request เพื่อรีวิว' }
];

const dockerItems = [
  { title: 'Multi-stage Build', detail: 'ช่วยลดขนาด Image ให้เล็กลง' },
  { title: 'Healthcheck', detail: 'ตรวจสอบความพร้อมของ Container' },
  { title: 'Docker Compose', detail: 'จัดการหลาย Service พร้อมกัน' }
];

const apiData = ref({ git: {}, docker: {} });
const loading = ref(true);

const fetchData = async () => {
  loading.value = true;
  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    const response = await axios.get(`${apiUrl}/api/demo`);
    apiData.value = response.data;
  } catch (error) {
    console.error('API Error:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchData);
</script>
