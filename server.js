const express = require('express')
const axios = require('axios')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()
app.use(cors()) // Allow frontend requests

app.get('/api/apod', async (req, res) => {
  try {
    const response = await axios.get('https://api.nasa.gov/planetary/apod', {
      params: { api_key: process.env.NASA_API_KEY },
    })
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch APOD data' })
  }
})

const PORT = process.env.PORT || 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
