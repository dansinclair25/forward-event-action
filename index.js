const core = require('@actions/core')
const postToSmee = require('./post')

async function run () {
  try {
    await postToSmee()
  } catch (err) {
    core.setFailed(err)
  }
}

run()
