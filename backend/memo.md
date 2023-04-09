apiのcurl
```shell
curl -X POST "https://api.openai.com/v1/engines/davinci-codex/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "prompt": "Translate the following English text to French: \"Hello, how are you?\"",
    "max_tokens": 20,
    "n": 1,
    "stop": null,
    "temperature": 0.7
}'

```