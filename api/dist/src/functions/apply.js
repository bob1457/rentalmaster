"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = void 0;
const functions_1 = require("@azure/functions");
require("dotenv").config();
// const { EmailClient, KnownEmailSendStatus } = require("@azure/communication-email");
const communication_email_1 = require("@azure/communication-email");
const connectionString = process.env.EmailConnectionSettings;
const senderAddress = process.env.SenderAddress;
const recipientAddress = "bob.h.yuan@gmail.com";
function apply(request, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const emailClient = new communication_email_1.EmailClient(connectionString);
        context.log(`Http function processed request for url "${request.url}"`);
        const POLLER_WAIT_TIME = 10;
        const data = yield request.text();
        context.log('data', data);
        const message = {
            senderAddress: senderAddress,
            content: {
                subject: "Welcome to Azure Communication Services Email",
                plainText: data, // mailContent, // "This email message is sent from Azure Communication Services Email using the JavaScript SDK.",
            },
            recipients: {
                to: [
                    {
                        address: recipientAddress,
                        displayName: "Customer Name",
                    },
                ],
            },
        };
        // Send the email
        try {
            context.log("Sending email...");
            const poller = yield emailClient.beginSend(message);
            if (!poller.getOperationState().isStarted) {
                context.log("Poller was not started. Please run the sample again.");
                throw "Poller was not started.";
            }
            let timeElapsed = 0;
            context.log('time elapsed', timeElapsed);
            while (!poller.isDone()) {
                poller.poll();
                context.log("Email send polling in progress");
                yield new Promise(resolve => setTimeout(resolve, POLLER_WAIT_TIME * 1000));
                timeElapsed += 10;
                if (timeElapsed > 18 * POLLER_WAIT_TIME) {
                    throw "Polling timed out.";
                }
            }
            if (poller.getResult().status === communication_email_1.KnownEmailSendStatus.Succeeded) {
                context.log(`Successfully sent the email (operation id: ${poller.getResult().id})`);
            }
            else {
                throw poller.getResult().error;
            }
        }
        catch (e) {
            context.log(`Error sending: ${e}`);
        }
        context.log(`Received: ${data}`);
        return {
            status: 201,
            jsonBody: `Hello, ${data}!`
        };
    });
}
exports.apply = apply;
;
functions_1.app.http('apply', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: apply
});
//# sourceMappingURL=apply.js.map