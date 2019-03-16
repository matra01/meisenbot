//var express = require('express')
//var bodyParser = require('body-parser')

//const axios = require('axios')

const TelegramBot = require('node-telegram-bot-api');
/* const token =  '0' ; */
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/bild/, (msg, match) => {
  let r = Math.random();
  console.log("random", r);
  bot.sendPhoto(msg.chat.id, photo='http://bischau.dynvpn.de/meisencam/meisencam.jpeg?'+r)
});

bot.onText(/\/temp/, (msg, match) => {
  let r = Math.random();
  console.log("random", r);
  bot.sendPhoto(msg.chat.id, photo='http://bischau.dynvpn.de/temperatur/temperatur.png?'+r)
});
