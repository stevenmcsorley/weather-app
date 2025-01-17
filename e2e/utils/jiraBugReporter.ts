import fs from "fs";

import colors from "colors";

colors.enable();

const JIRA_PROJECT_KEY = "YOUR_PROJECT_KEY";
const JIRA_ISSUE_TYPE = "Bug";
const JIRA_API_URL =
  "https://your-jira-instance.atlassian.net/rest/api/3/issue/";

export function createJiraTicket(error: any) {
  const summary = `Error in test: ${error.message}`;
  const description = `
    Error message: ${error.message}
    // Error stack: ${error.stack}
  `;

  const requestBody = {
    fields: {
      project: {
        key: JIRA_PROJECT_KEY,
      },
      summary: summary,
      issuetype: {
        name: JIRA_ISSUE_TYPE,
      },
      description: description,
    },
  };

  const bugDetails = {
    summary,
    description,
    timestamp: new Date().toISOString(),
  };

  const fileName = `./bugs/jira-bug-${Date.now()}.json`;

  fs.writeFile(fileName, JSON.stringify(bugDetails), (err) => {
    if (err) {
      console.error("Error writing JIRA bug details to file:", err);
    } else {
      console.log(
        colors.yellow(`JIRA bug details written to file: ${fileName}`)
      );
    }
  });
}
