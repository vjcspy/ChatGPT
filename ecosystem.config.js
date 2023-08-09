module.exports = {
  apps: [
    {
      name: 'chatGPT-proxy',
      script: './index.js',
      instances: '2',
      instance_var: 'INSTANCE_ID',
      exec_mode: 'cluster',
      env: {
      },
    },
  ],
};
