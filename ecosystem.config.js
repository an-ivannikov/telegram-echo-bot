module.exports = {
  apps: [{
    name: 'TelegramJsonEchoBot',
    script: './bin/telegram-json-echo-bot',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],
};
