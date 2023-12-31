import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";


require("dotenv").config();

// const { EmailClient, KnownEmailSendStatus } = require("@azure/communication-email");
import { EmailClient, KnownEmailSendStatus } from "@azure/communication-email";

const connectionString = process.env.EmailConnectionSettings;
const senderAddress = process.env.SenderAddress;
const recipientAddress = process.env.recipientAddress; // "bob.h.yuan@gmail.com"
const ccRecipientAddress = process.env.ccReceipt; // ""



export async function apply(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    
    const emailClient = new EmailClient(connectionString);

    context.log(`Http function processed request for url "${request.url}"`);

    const POLLER_WAIT_TIME = 10

    const data = await request.text();
    context.log('data',data);


    const message = {
        senderAddress: senderAddress, 
        content: {
          subject: "Rental Application",
          plainText: data, // mailContent, // "This email message is sent from Azure Communication Services Email using the JavaScript SDK.",
        },
        recipients: {
          to: [
            {
              address: recipientAddress, // "bob.h.yuan@gmail.com",
              displayName: "Property Manager",
            },
          ],
          bcc: [
            {
              address: ccRecipientAddress,
              displayName: "Property Manager Assistant",
            }            
          ]
        },
      };

    
    // Send the email
    try {
        context.log("Sending email...");        

        const poller = await emailClient.beginSend(message);

        if (!poller.getOperationState().isStarted) {
            context.log("Poller was not started. Please run the sample again.");
            throw "Poller was not started."
        }

        let timeElapsed = 0;
        context.log('time elapsed',timeElapsed)

        while(!poller.isDone()) {
            poller.poll();
            context.log("Email send polling in progress");

            await new Promise(resolve => setTimeout(resolve, POLLER_WAIT_TIME * 1000));
            timeElapsed += 10;

            if(timeElapsed > 18 * POLLER_WAIT_TIME) {
                throw "Polling timed out.";
            }
        }

        if(poller.getResult().status === KnownEmailSendStatus.Succeeded) {
            context.log(`Successfully sent the email (operation id: ${poller.getResult().id})`);
        }
        else {
            throw poller.getResult().error;
        }
    } catch (e) {
        context.log(`Error sending: ${e}`);
    }

    context.log(`Received: ${data}`);
    
    return { 
        status: 201,
        jsonBody: `Hello, ${data}!` 
    };
};

app.http('apply', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: apply
});
