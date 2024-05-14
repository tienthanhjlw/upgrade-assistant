import inquirer from 'inquirer';
import execa from 'execa';
import commander from 'commander';
import { getCurrentAngularVersion } from './file';

console.log('Starting upgrade assistant');
getCurrentAngularVersion();