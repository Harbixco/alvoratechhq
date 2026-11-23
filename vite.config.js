import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import trackHandler from './api/track.js'
import extractHandler from './api/extract.js'
import dispatchHandler from './api/dispatch.js'

const apiHandlers = {
  '/api/track': trackHandler,
  '/api/extract': extractHandler,
  '/api/dispatch': dispatchHandler,
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  for (const [key, value] of Object.entries(env)) {
    if (!process.env[key]) {
      process.env[key] = value
    }
  }

  return {
    plugins: [
      react(),
      {
        name: 'api-dev-server-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (!req.url || !req.url.startsWith('/api/')) {
              return next()
            }

            const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost:5173'}`)
            const pathname = urlObj.pathname
            const targetHandler = apiHandlers[pathname]

            if (!targetHandler) {
              return next()
            }

            req.query = Object.fromEntries(urlObj.searchParams.entries())

            const mockRes = {
              setHeader: (k, v) => res.setHeader(k, v),
              status: (code) => {
                res.statusCode = code
                return mockRes
              },
              json: (data) => {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(data))
              },
              send: (data) => res.end(data),
              end: (data) => res.end(data),
              redirect: (statusOrUrl, url) => {
                if (typeof statusOrUrl === 'number') {
                  res.statusCode = statusOrUrl
                  res.setHeader('Location', url)
                } else {
                  res.statusCode = 302
                  res.setHeader('Location', statusOrUrl)
                }
                res.end()
              },
            }

            if (req.method === 'GET' || req.method === 'OPTIONS' || req.method === 'HEAD') {
              req.body = {}
              try {
                await targetHandler(req, mockRes)
              } catch (err) {
                console.error(`API Error on ${pathname}:`, err)
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ success: false, error: err.message }))
              }
              return
            }

            let body = ''
            req.on('data', (chunk) => {
              body += chunk
            })
            req.on('end', async () => {
              try {
                req.body = JSON.parse(body || '{}')
              } catch {
                req.body = {}
              }
              try {
                await targetHandler(req, mockRes)
              } catch (err) {
                console.error(`API Error on ${pathname}:`, err)
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ success: false, error: err.message }))
              }
            })
          })
        },
      },
    ],
    base: '/',
    assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.PNG', '**/*.WEBP'],
  }
})
