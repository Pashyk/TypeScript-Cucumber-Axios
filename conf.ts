import * as path from "path";
import { browser, Config } from "protractor";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../features/*.feature'],
    cucumberOpts: {
        require: ['./steps/*.js']      
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'swapi.co',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox', 'headless'],
        },
        ignoreSynchronization: true,
        SELENIUM_PROMISE_MANAGER: false,
        suites: {},
    },
};
