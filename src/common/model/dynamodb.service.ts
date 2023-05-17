import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as AWS from 'aws-sdk'
import { datasource } from './data';



@Injectable()
export class DynamodbService {
  constructor(private configService: ConfigService) {}
  
  seed(): string {
    AWS.config.update({
      accessKeyId: this.configService.get<string>('ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get<string>('SECRET_ACCESS_KEY'),
      region: this.configService.get<string>('REGION'),
    });

    const docClient = new AWS.DynamoDB();
    if (datasource[0].tags) {
      datasource.forEach((obj) => {
        const tags = obj.tags.join('|').replace(/ /g,'_');
        delete obj.tags; 
        const Item = {
          id: {S: obj.id},
          name: {S: obj.name},
          tags: {S: tags},
          type: {S: obj.type},
          createdAt: {S: obj.createdAt}
        }
        const params = {
          TableName: process.env.TABLE,
          Item: Item
        };
        (async () => {
          try {
            await docClient.putItem(params).promise(); 
          } catch (error) {
            console.log(error)
          }
        })();
      })
    }
  
    return 'finish';
  }

  async scanTable (params: AWS.DynamoDB.Types.ScanInput) {
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

}
