// commenting out either of these imports resolves the issue. 

import { DynamoDBClient } from '@aws-sdk/client-dynamodb'

import { secretsManager } from 'some-package'

const client = new DynamoDBClient({})
secretsManager.foo();