module.exports = {
  apps: [
    {
      name: "NODE_TEMPLATE",
      script: "server",

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      // args: 'one two',
      instances: 4,
      autorestart: true,
      watch: false,
      max_memory_restart: "200G",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  deploy: {
    production: {
      user: "node",
      host: "212.83.163.1",
      ref: "origin/master",
      repo: "https://github.com/davidchak/nodejs_express_vue.git",
      path: "/var/www/production",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production"
    }
  }
};