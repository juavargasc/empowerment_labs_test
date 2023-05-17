"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamodbService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const AWS = require("aws-sdk");
const data_1 = require("./data");
let DynamodbService = class DynamodbService {
    constructor(configService) {
        this.configService = configService;
    }
    seed() {
        AWS.config.update({
            accessKeyId: this.configService.get('ACCESS_KEY_ID'),
            secretAccessKey: this.configService.get('SECRET_ACCESS_KEY'),
            region: this.configService.get('REGION'),
        });
        const docClient = new AWS.DynamoDB();
        if (data_1.datasource[0].tags) {
            data_1.datasource.forEach((obj) => {
                const tags = obj.tags.join('|').replace(/ /g, '_');
                delete obj.tags;
                const Item = {
                    id: { S: obj.id },
                    name: { S: obj.name },
                    tags: { S: tags },
                    type: { S: obj.type },
                    createdAt: { S: obj.createdAt }
                };
                const params = {
                    TableName: process.env.TABLE,
                    Item: Item
                };
                (async () => {
                    try {
                        await docClient.putItem(params).promise();
                    }
                    catch (error) {
                        console.log(error);
                    }
                })();
            });
        }
        return 'finish';
    }
    async scanTable(params) {
        let items = [];
        let lastEvaluatedKey = null;
        AWS.config.update({
            accessKeyId: process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY,
            region: process.env.REGION,
        });
        const DB = new AWS.DynamoDB;
        do {
            const response = await DB.scan(params).promise();
            items = [...items, ...response.Items];
            lastEvaluatedKey = response.LastEvaluatedKey;
        } while (lastEvaluatedKey);
        return items;
    }
};
DynamodbService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], DynamodbService);
exports.DynamodbService = DynamodbService;
//# sourceMappingURL=dynamodb.service.js.map