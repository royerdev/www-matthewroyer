export default defineEventHandler((event) => {
  if (process.env.NODE_ENV === 'production') {
    const maxAge = 3600 // 1 hour
    appendHeader(event, 'Cache-Control', `max-age=${maxAge}, must-revalidate`)
  }
})
