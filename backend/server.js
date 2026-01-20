const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ensure logs directory exists
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Endpoint /api/user
app.get('/api/user', (req, res) => {
  res.json({
    name: "อภิไช โฉมทอง",
    studentId: "6604101397"
  });
});

// Endpoint /api/demo
app.get('/api/demo', (req, res) => {
  const logMessage = `Request at ${new Date().toISOString()}: ${req.ip}\n`;
  try {
    fs.appendFileSync(path.join(logsDir, 'access.log'), logMessage);
  } catch (err) {
    console.error('Error writing to log file:', err);
  }

  res.json({
    git: {
      title: 'Advanced Git Workflow',
      detail: 'Using branch protection on GitHub, code review in PR, and squash merge for clean history'
    },
    docker: {
      title: 'Advanced Docker',
      detail: 'Using multi-stage build, healthcheck in Dockerfile, and orchestration with Compose/Swarm'
    }
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
