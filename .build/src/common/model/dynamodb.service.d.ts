import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
export declare class DynamodbService {
    private configService;
    constructor(configService: ConfigService);
    seed(): string;
    scanTable(params: AWS.DynamoDB.Types.ScanInput): Promise<any[]>;
}
