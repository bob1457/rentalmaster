import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function apply(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const data = await request.text();
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
