// commenting out either of these imports resolves the issue. 

import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { SecretsManager } from '@aws-sdk/client-secrets-manager'

new DynamoDBClient()
new SecretsManager();