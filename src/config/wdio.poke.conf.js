const { config } = require("./wdio.conf");
const { join } = require('path');

// ============
// Specs
// ============
config.specs = ["./test/dataDex/*/*.ts"];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: "Android",
    deviceName: "POKE API 30",
    platformVersion: "12",
    automationName: "UiAutomator2",
    app: join(process.cwd(), "/app/dataDex.apk"),
    autoGrantPermissions: true,
    fullReset: true,
    appWaitActivity: "com.talzz.datadex.activities.onboarding.OnboardingActivity",
  },
];

exports.config = config;