export default {
  viewHistoricalData: (browser) => {
    browser
      .execute(() => $('.workspace [rv-on-click=closeAll]').click())
      .moveToElement('.resources', 0, 0)
      .pause(1000)
      .click('.resources > a')
      .click('.resources > ul > li:nth-child(3)')
      .waitForElementPresent('.historical-data-dialog')
      .moveToElement('div.historical-data-dialog', 0, 0)
      .pause(1000)
      .click('.historical-data-dialog .instrumnet-dropdown')
      .click('.historical-data-dialog .instrumnet-dropdown > ul > li:last-of-type')
      .click('.historical-data-dialog .instrumnet-dropdown > ul > li:last-of-type > div')
      .waitForCSSProperty('.historical-data-dialog .instrumnet-dropdown > ul > li:last-of-type > ul', 'display', 'block')
      .click('.historical-data-dialog .instrumnet-dropdown > ul > li:last-of-type > ul > li:last-of-type')
      .click('.historical-data-dialog .instrumnet-dropdown > ul > li:last-of-type > ul > li:last-of-type > div')
      .waitForCSSProperty('.historical-data-dialog .instrumnet-dropdown > ul > li:last-of-type > ul > li:last-of-type > ul', 'display', 'block')
      .click('.historical-data-dialog .instrumnet-dropdown > ul > li:last-of-type > ul > li:last-of-type > ul > li:first-of-type')
      .click('.historical-data-dialog .instrumnet-dropdown > ul > li:last-of-type > ul > li:last-of-type > ul > li:first-of-type > div')
      .waitForSeriesPresent('.historical-data-dialog .webtrader-charts-chart-window-contianer .chart-view .chartSubContainer', 'Bear Market Index')
      .assert.containsText('.historical-data-dialog .chart-view .chartSubContainerHeader .instrument_name strong', 'Bear Market Index')
  }
}
