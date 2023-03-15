# Pre conditions:
- Download Android Studio with the android SDK.
- Set up your environment variables for ANDROID_HOME, JAVA_HOME, and add the android tools and platform-tools to your path

- Nodejs (Any recent version). (https://nodejs.org/en/download/)

- AndroidStudio (Any recent version).

-Appium Server GUI

- Download the repo

- You can use any IDE you prefer to work with Typescript, a recomended one is Visual Studio Code.

After your environment has the proper setup, remember to create simulator/emulators for the tests to run.

# Into the Project root folder.
Run all of this commands in the project folder:

npm -install -g appium
npm install webdriverio
npm --save-dev i fibers 
npm i --save-dev @wdio/allure-reporter
npm i --save-dev @wdio/appium-service
npm i --save-dev @wdio/cli
npm i --save-dev @wdio/local-runner
npm i --save-dev @wdio/mocha-framework
npm i --save-dev @wdio/spec-reporter
npm i --save-dev chromedriver
npm i --save-dev ts-node
npm i --save-dev tsconfig-paths
npm i --save-dev typescript
npm i --save-dev wdio-chromedriver-service
npm i --save-dev wdio-wait-for
npm install --save-dev @tsconfig/node18
npm i --save-dev fetch

# Before running.

Add the .apk file to the folder "./app" and rename it with this name:
"dataDex.apk"

In src folder, search config folder and open the wdio.poke.conf.js and wdio.smoke.poke.conf.js. In this location, set in capabilities of Appium the name of virtual device that you are use in the deviceName capability

# To Run the tests.
1) Open a new terminal and run the specific command for the test suite you want to run

2) To run an specific test run:

```npm run poke -- --spec ./test/dataDex/FORDER_OF_TEST/NAME.OF.TEST.YOU.WANT.RUN.spec.ts```

for example:
```npm run poke -- --spec ./test/dataDex/home/select.two.pokemon.spec.ts```


3) To run smoke test:

```npm run smoke.poke```

4) If test does not run check the path of "poke" or "smoke.poke" in package.json.

