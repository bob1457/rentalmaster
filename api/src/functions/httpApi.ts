import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function httpApi(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const properties = [
        {
            "id": 1,
            "title": "Central Apartment",
            "city": "New York",
            "street": "Times Square",
            "type": "apartment",
            "image": "https://images.unsplash.com/photo-1522050212171-61b01dd24579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
            "bedrooms": 3,
            "bathrooms": 2,
            "description": "Very nice apartment",
            "monthlyRent": 1200,
            "shared": false     
          },
          {
            "id": 2,
            "title": "Central Apartment 2",
            "city": "New York",
            "street": "Times Square",
            "type": "apartment",
            "image": "./assets/images/h-1.jpg",
            "bedrooms": 3,
            "bathrooms": 2,
            "description": "Very nice apartment",
            "monthlyRent": 1200,
            "shared": false
          },
          {
            "id": 3,
            "title": "Central Apartment 3",
            "city": "New York",
            "street": "Times Square",
            "type": "apartment",
            "image": "./assets/images/h-2.jpg",
            "bedrooms": 3,
            "bathrooms": 2,
            "description": "Very nice apartment",
            "monthlyRent": 1200,
            "shared": false
          },
          {
            "id": 4,
            "title": "Central Apartment 4",
            "city": "New York",
            "street": "Times Square",
            "type": "apartment",
            "image": "./assets/images/h-3.jpg",
            "bedrooms": 3,
            "bathrooms": 2,
            "description": "Very nice apartment",
            "monthlyRent": 1200,
            "shared": false
          }
    ];

    // const name = request.query.get('name') || await request.text() || 'world';

    return { jsonBody: properties };
};

app.http('httpApi', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: httpApi
});
