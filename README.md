## Create bot

- Create telegram account
- Call @BotFather: to get API access 'token'.
- Set commands:
    1. /newbot - answer all questions until it will create bot with your specified name.
    2. /setprivacy - bot will be able receive messages.
    3. /setjoingroups - bot will be able to add to group.



### Building A Telegram Bot With NodeJS

https://codingwithmanny.medium.com/building-a-telegram-bot-with-nodejs-46660f05b42f


## Wappsto

Goto wappsto.com and find your developed application

Wappsto application token:
`https://wappsto.com/services/extsync/request/xxx-wapsto-token-xxx`


### Set Webhook to Telegram

Webhook can be set using curl:
`curl
https://api.telegram.org/bot'xxx-telegram-bot-token-xxx'/setWebhook?url=https://wappsto.com/services/extsync/request/xxx-wappsto-token-xxx`

Response
`{"ok":true,"result":true,"description":"Webhook is set"}`


