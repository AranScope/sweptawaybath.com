const axios = require('axios')

exports.handler = async function(event, context) {
  // this is secret too, your frontend won't see this
  const { FACEBOOK_API_KEY } = process.env
  const URL = `https://graph.facebook.com/v7.0/300577559972619/ratings?fields=created_time%2Chas_rating%2Chas_review%2Creview_text%2Crating%2Crecommendation_type%2Creviewer&limit=10&access_token=${FACEBOOK_API_KEY}`

  try {
    const { data } = await axios.get(URL)
    // refer to axios docs for other methods if you need them
    // for example if you want to POST data:
    //    axios.post('/user', { firstName: 'Fred' })
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data })
    }
  }
}
