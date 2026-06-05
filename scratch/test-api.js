async function testApi() {
  console.log('Fetching from local dev API /api/emails...')
  try {
    const res = await fetch('http://localhost:3030/api/emails')
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    console.log('API Response:', data)
  } catch (error) {
    console.error('API Fetch failed:', error)
  }
}

testApi()