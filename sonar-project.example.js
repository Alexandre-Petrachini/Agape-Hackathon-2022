import sonarqubeScanner from "sonarqube-scanner";

sonarqubeScanner(
  {
    serverUrl: "http://localhost:9000",
    token: "[YOUR_SONAR_TOKEN]",
    options: {
      "sonar.sources": "./src",
      "sonar.login": "admin",
      "sonar.password": "[YOUR_NEW_PASSWORD]",
      "sonar.projectKey": "[PROJECTKEY]",
      "sonar.tests": "./src",
      "sonar.test.inclusions": "**/*.test.*",
      "sonar.test.exclusions": "./node_modules, ./.vscode, ./scannerwork",
      "sonar.typescript.lcov.reportPaths": "./coverage/lcov.info",
      "sonar.testExecutionReportPaths": "./reports/test-report.xml",
    },
  },
  () => { },
);