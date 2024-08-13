const core = require('@actions/core')
const { context } = require('@actions/github')
const fetch = require('node-fetch')

module.exports = async function postToWebhook () {
  // Serialize payload object
  const payload = {
    ...context.payload
  }

  // Serialize headers
  const headers = {
    'X-GitHub-Event': process.env.GITHUB_EVENT_NAME,
    // Used to prevent duplication
    'X-GitHub-Delivery': process.env.GITHUB_RUN_ID
  }

  // Send the data to the webhook
  const url = core.getInput('webhook').trimEnd('/');
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  })

  core.info(`Done!`)
  core.setOutput('url', url)
}
