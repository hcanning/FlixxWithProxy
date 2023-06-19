require('dotenv').config()

exports.handler = async (event) => {
  const endpoint = event.path.replace('/api', '')

  const response = await fetch(
    `${process.env.TMDB_API_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  )
  const json = await response.json()

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(json),
  }
}
