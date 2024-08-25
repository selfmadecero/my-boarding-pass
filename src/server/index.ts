import { App } from '@slack/bolt';
import express from 'express';
import * as admin from 'firebase-admin';
import serviceAccount from '../../path/to/your/firebase-service-account.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const expressApp = express();

app.message('hello', async ({ message, say }) => {
  await say(`안녕하세요, <@${message.user}>님!`);
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();

expressApp.use(express.static('public'));
expressApp.listen(8080, () => console.log('Web app is running on port 8080'));
