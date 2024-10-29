#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PowerOfMathStack } from '../lib/PowerOfMathStack';

const app = new cdk.App();
new PowerOfMathStack(app, 'PowerOfMathStack', {

});