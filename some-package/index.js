import { SecretsManager } from  '@aws-sdk/client-secrets-manager'

export const secretsManager = new SecretsManager({ region: 'us-west-2' });
