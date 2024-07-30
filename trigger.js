import schedule from "node-schedule";
import main from "./main.js";

const date = new Date();

const job = schedule.scheduleJob(date, () => {
    main();;
});