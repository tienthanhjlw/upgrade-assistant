import fs from 'fs';
import path from 'path';

export function getCurrentAngularVersion() {
    try {
        const cwd = process.cwd();
        const packageJsonPath = path.resolve(cwd, 'package.json');

        // Read the package.json file
        const packageJson = fs.readFileSync(packageJsonPath, 'utf-8');

        // Parse JSON
        const packageData = JSON.parse(packageJson);

        // Extract Angular version
        const angularVersion = packageData.dependencies['@angular/core'] || packageData.devDependencies['@angular/core'];

        return angularVersion;
    } catch (error) {
        console.error('An error occurred while getting the Angular version:', error);
        return null;
    }
}