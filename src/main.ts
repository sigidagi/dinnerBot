import Wappsto = require('wappsto-wapp')
import axios from 'axios'
import * as config from './config.json';

//API https://www.themealdb.com/api.php?ref=apilist.fun
/**
 *
 */
const MEALDB = "https://www.themealdb.com/api/json/v1/1/"

// ================ WAPPSTO =======================
const NETWORK_NAME = "DinnerBot";

const TELEGRAM_URL = "https://api.telegram.org/bot";

interface ConfigData {
    token: string;
    chat_id: number;
}

// Load configuration from json file.

async function main() {
    console.log("");
    console.log("Starting background process...");

    let network : Wappsto.Network = await Wappsto.createNetwork({name: NETWORK_NAME});

    let device = await network.createDevice({
        name: 'DinnerPlate',
        description: 'Dinner service',
        protocol: 'JSON',
        communication: 'wapp',
        version: '1.0.0',
    });

    let telegramValue = await device.createStringValue({
    	name: 'Telegram',
	    permission: 'rw',
	    type: 'debug',
	    max: 4096,
    });

    // just for test.
    telegramValue.onControl((value, data, timestamp) => {
	    console.log(`${value.name} changed it's report value to ${data}`);

    });

    console.log("Ext sync token", Wappsto.extSyncToken);

    Wappsto.onWebHook( async (event: any) => {
        console.log("Got it!!");
        console.log("Web Hook event", event);

        const indata = JSON.parse(event);
        if (indata.message && indata.message.chat && Number(indata.message.chat.id) === config.chat_id) {

            // dummy data;
            const url = TELEGRAM_URL + config.token + "/sendMessage";
            let text = "Hello";

            let data = {
                text: "\n@__DinerBot__\n" + text,
                chat_id: config.chat_id,
                parse_mode: "Markdown",
            };
            console.log(`Post to Telegram, url: ${url}`);
            await axios.post(url, data);
        }
    });
}

// ----------------------------- START -------------------------
main();
