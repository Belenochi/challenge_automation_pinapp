exports.config= {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    runner: "local",
    sync: false,

    // =====================
    // ts-node Configurations
    // =====================

    autoCompileOpts: {
        autoCompile: true,
        // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
        // for all available options
        tsNodeOpts: {
            transpileOnly: true,
            project: './tsconfig.json'
        }
    },
    port: 4723,
    path:"/wd/hub",

    
    
    //
    // ===================
    // Test Configurations
    // ===================

    maxInstances: 1,
    logLevel: 'info',

    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },

    bail: 0,
    baseUrl: 'https://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    //=====================
    // Test runner services
    //=====================

    services: ['chromedriver'],
    appium:{
        command:'appium'
    },
    
    framework: 'mocha',

    reporters: [
        "spec",
        [
          "allure",
          {
            outputDir: "allure-results",
            //disableWebdriverStepsReporting: false,
            //disableWebdriverScreenshotsReporting: false,
          },
        ],
      ],

    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        //compilers: ["tsconfig-paths/register"],
        require: [
            'tsconfig-paths/register'
        ],
        ui: "bdd",
        timeout: 900000,
    },
    
    //
    // =====
    // Hooks
    // =====
    before: function (capabilities, specs) {
        //require('ts-node').register({ files: true })
        require("ts-node").register({ files: true, project: "./tsconfig.json" });
    },


    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    // onPrepare: function (config, capabilities) {
    // },
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    // before: function (capabilities, specs) {
    // },
    // beforeCommand: function (commandName, args) {
    // },
    // beforeSuite: function (suite) {
    // },
    // beforeTest: function (test, context) {
    // },
    // beforeHook: function (test, context) {
    // },
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    // afterTest: function(test, context, { error, result, duration, passed, retries }) {
    // },
    // afterSuite: function (suite) {
    // },
    // afterCommand: function (commandName, args, result, error) {
    // },
    // after: function (result, capabilities, specs) {
    // },
    // afterSession: function (config, capabilities, specs) {
    // },
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    // onReload: function(oldSessionId, newSessionId) {
    // }
}
