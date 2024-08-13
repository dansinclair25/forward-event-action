<h3 align="center">Webhook Forward Action UPDATED!</h3>
<p align="center">Forwards webhooks for internal addresses for self hosted runners<p>

## Usage

```yaml
# .github/workflows/forward-event-action.yml
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: dansinclair25/forward-event-action-updated@v1.0.2
```


## Specifying the url

By default, this Action will post event payloads to the webhook url.

You can specify what channel you want to send to:

```yaml
steps:
  - uses: dansinclair25/forward-event-action-updated@v1.0.2
    with:
      webhook: http://localhost:6500/webhook/github
```
