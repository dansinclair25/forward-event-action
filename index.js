const core = require('@actions/core')
const post = require('./post')

async function run () {
  try {
    await post()
  } catch (err) {
    core.setFailed(err)
  }
}

run()
