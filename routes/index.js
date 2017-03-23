var express = require('express');
var router = express.Router();

import { runVoiceCommand } from './../src/controllers/commands';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/voice-command', runVoiceCommand);

module.exports = router;
