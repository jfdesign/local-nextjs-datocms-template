module.exports = {
  reactStrictMode: true,
}


module.exports = {

  publicRuntimeConfig: {
    API_URL: process.env.NEXT_DATOCMS_API_TOKEN,
    API_Search: process.env.NEXT_DATOCMS_API_TOKEN_SEARCH,
    Trigger_ID: process.env.NEXT_DATOCMS_API_TOKEN_TRIGGERID,
  },

}