const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const OpenAI = require('openai')

dotenv.config()

const app = express()
const port = 3000

const openai = new OpenAI();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/chat', async (req, res) => {
  const { prompt, system } = req.body;

  const completion = await openai.chat.completions.create({
    messages: [
        {"role": "system", "content": system },
        {"role": "user", "content": prompt },
    ],
    model: "gpt-3.5-turbo",
  });

  const response = {
    message: completion.choices[0].message.content,
    usage: completion.usage
  }

  res.send(JSON.stringify(response));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})