const OIL_LAYER = '//*[@data-qa="oil-Layer"]';
const OIL_YES_BUTTON = '//*[@data-qa="oil-YesButton"]';
const OIL_NO_BUTTON = '//*[@data-qa="oil-NotNowButton"]';
const OIL_YES_SMALL_BUTTON = '//*[@data-qa="oil-small-YesButton"]';
const EVENT_NOTIFIER_DIV = '//*[@data-qa="event-notifier-div"]';

module.exports = {
  beforeEach: browser => {
     browser
      .url(browser.globals.launch_url_host1 + "end2end-tests/direct-integration-event-test.html")
      .deleteCookies();

    browser
      .url(browser.globals.launch_url_host1 + "end2end-tests/direct-integration-event-test.html")
      .useCss()
      .waitForElementVisible('body', 1000, false)
      .useXpath()
      .waitForElementVisible(OIL_LAYER, 2000, false);
  },

  'OIL Layer event sent after clicking yes, even after refresh' : function (browser) {
    browser
      .assert.cssClassPresent(EVENT_NOTIFIER_DIV, "event-notifier-hidden")
      .click(OIL_YES_BUTTON)
      .assert.cssClassNotPresent(EVENT_NOTIFIER_DIV, "event-notifier-hidden")
      .refresh()
      .useCss()
      .waitForElementVisible('body', 1000, false)
      .useXpath()
      .pause(500)
      .waitForElementNotPresent(OIL_LAYER, 500)
      .assert.cssClassNotPresent(EVENT_NOTIFIER_DIV, "event-notifier-hidden")
      .end();
  },
};