ตัวอย่างนี้เพิ่มความซับซ้อนด้วย full-stack integration:
Version Control: ขยาย workflow ให้ครอบคลุมหลายส่วน (frontend + backend) ใน PR เดียว, ใช้ Conventional Commits สำหรับ features ใหญ่.
.gitignore / .dockerignore: ปรับให้เหมาะกับทั้งสองส่วน, persist logs แต่ ignore ใน Git.
Dockerfile: Multi-stage สำหรับทั้งคู่, เพิ่ม healthcheck ใน backend สำหรับ reliability.
Docker Usage: Compose สำหรับ orchestration, networks สำหรับ communication, volumes สำหรับ data persistence, env vars สำหรับ config.
Integration: Frontend เรียก backend จริง, error handling, CORS.

http://localhost:8080/longan_map.html