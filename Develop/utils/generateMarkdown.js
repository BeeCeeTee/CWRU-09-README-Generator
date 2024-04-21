// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === "GNU GPL v3") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  if (license === "Mozilla Public 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  if (license === "BSD 3-Clause") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT License](https://opensource.org/licenses/MIT)`
  }
  if (license === "Apache 2.0") {
    return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === "GNU GPL v3") {
    return `[GNU GPL v3 License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  if (license === "Mozilla Public 2.0") {
    return `[Mozilla Public 2.0 License](https://opensource.org/licenses/MPL-2.0)`
  }
  if (license === "BSD 3-Clause") {
    return `[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT" || "Apache 2.0" || "GNU GPL v3" || "Mozilla Public 2.0" || "BSD 3-Clause") {
    const badge = renderLicenseBadge();
    const link = renderLicenseLink();
    return `## License ${badge}
    This project is covered under the ${license} License. For more information, visit ${link}.`
  }
  else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection();
  return `# ${data.title}

  ## Description  
  ${data.descrip}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ${licenseSection}

  ## Contributing
  ${data.contrib}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, feel free to contact me on GitHub at [${data.github}](www.github.com/${data.github}) or via email at ${data.email}
`;
}

module.exports = generateMarkdown;
