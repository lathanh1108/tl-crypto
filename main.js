import 'dotenv/config';
import { Telegraf } from "telegraf";

const token = process.env.TELEGRAM_TOKEN;
const bot = new Telegraf(token);

bot.start((ctx) => {
    ctx.reply("Welcome to my bot!");
});
bot.help((ctx) => {
    ctx.reply("Send me a msg")
});

bot.on("message", async (ctx) => {
    const msg = ctx.update.message.text;

    ctx.reply(msg)
})

bot.launch();