/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:['images.spoonacular.com','spoonacular.com']
  }
}

module.exports = nextConfig
