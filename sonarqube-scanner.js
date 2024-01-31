import scanner from 'sonarqube-scanner'

scanner(
  {
    serverUrl: 'http://localhost:9000',
    login: 'admin',
    password: 'admin',
    options: {
      'sonar.sources': './src',
      'sonar.eslint.reportPaths': 'eslint-report.json',
    },
  },
  () => process.exit(),
)
