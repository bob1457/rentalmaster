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
exports.httpApi = void 0;
const functions_1 = require("@azure/functions");
function httpApi(request, context) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
exports.httpApi = httpApi;
;
functions_1.app.http('all', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: httpApi
});
//# sourceMappingURL=httpApi.js.map