// generate-report.js
const reporter = require("multiple-cucumber-html-reporter");

reporter.generate({
  jsonDir: "reports/",
  reportPath: "reports/",
  openReportInBrowser: true,
  pageTitle: "Weather Test Report",
  reportName: "Weather Test Report",
  displayDuration: true,
  durationInMS: true,
  customData: {
    title: "Weather Test run information",
    data: [
      { label: "Project", value: "Weather" },
      { label: "Version", value: "1.0.0" },
      { label: "Environment", value: "staging" },
    ],
  },
});
