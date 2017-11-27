export default {
  horizontalLine: (browser) => {
    browser
      //disable hover tooltip on chart
      .execute(() => $('div[role="dialog"]:last-of-type .chartTypeOverlay .row .cell:contains("Crosshair")').click())
      //Open draw pop-up
      .click('div[role=\'dialog\'] .webtrader-dialog .chartOptions_button span.drawButton')
      .assert.visible('div[role=\'dialog\'] .webtrader-dialog .drawingToolOverlay')
      .execute(() => $('div[role="dialog"] .webtrader-dialog span[data-balloon="Horizontal line"] img').click())
      .waitForElementPresent('.cssPopup')
      // Draw horizontal line
      .execute(() => $('.cssPopup + .lean_overlay_buttonpane > div:last-of-type').click())
      .assert.elementNotPresent('.cssPopup')
      .moveToElement('div[role=\'dialog\'] .webtrader-dialog .chartSubContainer svg', 90, 150)
      .mouseButtonClick('left')
      .waitForElementPresent('div[role=\'dialog\'] .webtrader-dialog .chartSubContainer svg .highcharts-plot-lines-0 path')
      //Remove horizontal line from chart
      .moveToElement('div[role=\'dialog\'] .webtrader-dialog .chartSubContainer', 90, 150)
      .triggerDblClick('div[role=\'dialog\'] .webtrader-dialog .chartSubContainer svg .highcharts-plot-lines-0 path')
      .moveToElement('div[role=\'dialog\'] .webtrader-dialog .chartSubContainer', -50, -50)
      .assert.elementNotPresent('div[role=\'dialog\'] .webtrader-dialog .chartSubContainer svg .highcharts-plot-lines-0 path')
  },
  verticalLine: (browser) => {
    browser
      //Open draw pop-up
      .click('div[role=\'dialog\'] .webtrader-dialog .chartOptions_button span.drawButton')
      .assert.visible('div[role=\'dialog\'] .webtrader-dialog .drawingToolOverlay')
      .execute('$(\'div[role="dialog"] .webtrader-dialog span[data-balloon="Vertical line"] img\').click()')
      .waitForElementPresent('.cssPopup')
      // Draw Vertical line
      .execute("$('.cssPopup + .lean_overlay_buttonpane > div:last-of-type').click()")
      .assert.elementNotPresent('.cssPopup')
      .moveToElement('div[role=\'dialog\'] .webtrader-dialog .chartSubContainer svg', 190, 200)
      .mouseButtonClick('left')
      .assert.elementPresent('div[role=\'dialog\'] .webtrader-dialog .chartSubContainer svg .highcharts-plot-lines-0 path')
      //Remove Vertical line from chart
      .moveToElement('div[role=\'dialog\'] .webtrader-dialog .chartSubContainer', 190, 200)
      .triggerDblClick('div[role=\'dialog\'] .webtrader-dialog .chartSubContainer svg .highcharts-plot-lines-0 path')
      .moveToElement('div[role=\'dialog\'] .webtrader-dialog .chartSubContainer', -50, -50)
      .assert.elementNotPresent('div[role=\'dialog\'] .webtrader-dialog .chartSubContainer svg .highcharts-plot-lines-0 path')
  }
}
