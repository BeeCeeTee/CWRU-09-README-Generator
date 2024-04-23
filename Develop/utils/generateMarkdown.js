// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(data) {
  if (data.license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (data.license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (data.license === "GNU GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (data.license === "Mozilla Public 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  if (data.license === "BSD 3-Clause") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else {
    return ``
  }
}

// Function that returns the license link
function renderLicenseLink(data) {
  if (data.license === "MIT") {
    return `[MIT License](https://opensource.org/licenses/MIT)`
  }
  if (data.license === "Apache 2.0") {
    return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
  }
  if (data.license === "GNU GPL v3") {
    return `[GNU GPL v3 License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  if (data.license === "Mozilla Public 2.0") {
    return `[Mozilla Public 2.0 License](https://opensource.org/licenses/MPL-2.0)`
  }
  if (data.license === "BSD 3-Clause") {
    return `[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else {
    return ``
  }
}

// Function that returns the license section of README
function renderLicenseSection(data) {
  if (data.license === "MIT" || data.license === "Apache 2.0" || data.license === "GNU GPL v3" || data.license === "Mozilla Public 2.0" || data.license === "BSD 3-Clause") {
    const badge = renderLicenseBadge(data);
    const link = renderLicenseLink(data);
    return `## License   ${badge}
  This project is covered under the ${data.license} License. For more information, visit ${link}.
     
  ([Back to Top](#table-of-contents))
     `
  }
  else {
    return ``
  }
}

function renderLicenseToC(data) {
  if (data.license === "MIT" || data.license === "Apache 2.0" || data.license === "GNU GPL v3" || data.license === "Mozilla Public 2.0" || data.license === "BSD 3-Clause") {
    return `1. [License](#license)`
  }
  else {
    return ``
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data);
  const licenseBadge = renderLicenseBadge(data);
  const licenseToC = renderLicenseToC(data);
  return `${licenseBadge}

  # <p align="center">${data.title}

  ## Description  
  ${data.descrip}

  ## Table of Contents
  1. [Installation](#installation)
  1. [Usage](#usage)
  ${licenseToC}
  1. [Contributing](#contributing)
  1. [Tests](#tests)
  1. [Questions](#questions)

  ## Installation
  ${data.install}
     
  ([Back to Top](#table-of-contents))
     
  ## Usage
  ${data.usage}
     
  ([Back to Top](#table-of-contents))
     
  ${licenseSection}
  ## Contributing
  ${data.contrib}
     
  ([Back to Top](#table-of-contents))
     
  ## Tests
  ${data.tests}
     
  ([Back to Top](#table-of-contents))
     
  ## Questions
  If you have any questions, feel free to contact me on GitHub at [${data.github}](https://www.github.com/${data.github}) or via email at ${data.email}
     
  ([Back to Top](#table-of-contents))
     
`;
}

module.exports = generateMarkdown;
