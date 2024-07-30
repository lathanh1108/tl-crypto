import 'dotenv/config';
import { Telegraf } from "telegraf";

const token = process.env.TELEGRAM_TOKEN;
const bot = new Telegraf(token);

bot.start((ctx) => {
    const keyboard = [
        {
            text: 'Welcome!!',
            callback_data: 'greet'
        }
    ]
    // ctx.reply("Welcome to my bot!");
    return ctx.reply('Choose option: ', {
        reply_markup: {
            inline_keyboard: keyboard
        }
    })
});
bot.help((ctx) => {
    ctx.reply("Send me a msg")
});

bot.action('greet', (ctx) => {
    return ctx.reply('Welcome to TL Bot')
});

bot.on("message", async (ctx) => {
    const msg = ctx.update.message.text;

    ctx.reply(msg)
})

bot.launch();