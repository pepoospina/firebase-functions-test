/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest(async (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  const functionResponse = await fetch(
    "http://127.0.0.1:5001/sensenets-9ef26/us-central1/byeWorld"
  );
  response.send(
    "Hello from Firebase!" + JSON.stringify(await functionResponse.text())
  );
});

export const byeWorld = onRequest((request, response) => {
  logger.info("Bye logs!", { structuredData: true });
  response.send("Bye from Firebase!");
});
