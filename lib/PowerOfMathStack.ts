import * as cdk from 'aws-cdk-lib';
import { App, Stack, StackProps } from 'aws-cdk-lib';
import * as amplify from 'aws-cdk-lib/aws-amplify';
import { Construct } from 'constructs';

export class PowerOfMathStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApp = new amplify.CfnApp(this, 'PowerOfMathApp2', {
      name: 'PowerOfMath2',
      description: 'Amplify app with no source control',
      environmentVariables: [
        { name: 'NODE_ENV', value: 'production' },
      ],
    });

    const mainBranch = new amplify.CfnBranch(this, 'MainBranch', {
      appId: amplifyApp.attrAppId,
      branchName: 'main',
    });

  }
}
