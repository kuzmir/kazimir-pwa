const path = require('path');
const Client = require('ftp-deploy');
const client = new Client();

const loginData = require('./deploy.json');

const config = {
  user: loginData.user,
  password: loginData.password,
  host: "ftp.arteverest.nazwa.pl",
  port: 21,
  localRoot: path.join(__dirname, '../dist'),
  remoteRoot: '/',
  include: ['**/*', '.htaccess'],
  deleteRemote: true
};

client.on('uploading', data => console.log('Starting upload: ', data.filename));
client.on('uploaded', data => console.log('Finished upload: ', data.filename));
client.on('log', data => console.log(data));

client.deploy(config)
  .then(response => console.log('finished:', response))
  .catch(error => console.log(error.message))
