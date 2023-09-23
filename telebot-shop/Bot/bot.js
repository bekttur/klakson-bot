const { Telegraf } = require("telegraf");
const TOKEN = "5976006612:AAG5HDewIVeITnwe45xjUTVaX2tBdvLhTwQ";
const bot = new Telegraf(TOKEN);

const web_link = "https://647b16094cd976692e0817d4--tourmaline-narwhal-cd74b6.netlify.app/";

console.log("start");
bot.start((ctx) => {
  const userId = ctx.from.id;

  // console.log(ctx.from.id);

  ctx.reply(`Добро пожаловать, ${ctx.from.first_name}.
    
Нажмите на кнопку ниже, чтобы открыть меню!`, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🗂️ Меню", web_app: { url: "https://64e782653995fe271981071e--dazzling-sfogliatella-23ec9b.netlify.app/" } }],
      ]
    }
  });



  
});


bot.launch();



// bot.start((ctx) =>
//   ctx.reply("Welcome", {
//     reply_markup: {
//       keyboard: [[{ text: "Menu", web_app: { url: web_link } }]],
//     },
//   })
// );


