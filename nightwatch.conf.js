require('babel-core/register');

const SCREENSHOT_PATH = "./reports/screenshots/";
const BINPATH = './node_modules/nightwatch/bin/';

// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {

  "src_folders": [
    "tests"// Where you are storing your Nightwatch e2e tests
  ],

  "output_folder": "./reports", // reports (test outcome) output by nightwatch
  "page_objects_path": './pages',
  "custom_commands_path": './commands',
  //"test_workers": true,

  "test_settings": {
    "default": {

      "selenium": { // downloaded by selenium-download module (see readme)
        "start_process": true, // tells nightwatch to start/stop the selenium process
        "server_path": "./node_modules/nightwatch/bin/selenium.jar",
        "host": "127.0.0.1",
        "port": 4444, // standard selenium port
        "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
          "webdriver.chrome.driver": "./node_modules/nightwatch/bin/chromedriver"
        }
      },

      "filter": "tests/\*/\*.test.js",

      "screenshots": {
        "enabled": true, // if you want to keep screenshots
        "path": './reports/screenshots', // save screenshots here
        "on_failure": true
      },

      "globals": {
        "url": process.env.TEST_URL,
        "username": process.env.USER_EMAIL,
        "password": process.env.PASSWORD,
        "waitForConditionTimeout": 10000, // sometimes internet is slow so wait.
        "waitForConditionPollInterval": 500
      },

      "desiredCapabilities": { // use Chrome as the default browser for tests
        "browserName": "chrome",
        "acceptSslCerts": true,
        "javascriptEnabled": true, // turn off to test progressive enhancement
        "chromeOptions": {
          "args": [
            "window-size=1280,800"
          ]
        }
      }

    },
  }
}

/**
 * selenium-download does exactly what it's name suggests;
 * downloads (or updates) the version of Selenium (& chromedriver)
 * on your localhost where it will be used by Nightwatch.
 /the following code checks for the existence of `selenium.jar` before trying to run our tests.
 */

require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) { // got it?
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function (error) {
      if (error) throw new Error(error); // no point continuing so exit!
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});

module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;
