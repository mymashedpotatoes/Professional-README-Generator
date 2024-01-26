
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GNU General Public License":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "BSD 3-Clause 'New' or 'Revised' License":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "BSD 2-Clause 'Simplified' License":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "Creative Commons Zero v1.0 Universal":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse Public License 2.0":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    case "GNU General Public License v2.0":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    case "None":
      return "";
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "GNU General Public License":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT License":
      return "(https://opensource.org/licenses/MIT)";
    case "BSD 3-Clause 'New' or 'Revised' License":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case "BSD 2-Clause 'Simplified' License":
      return "(https://opensource.org/licenses/BSD-2-Clause)";
    case "Boost Software License 1.0":
      return "(https://www.boost.org/LICENSE_1_0.txt)";
    case "Creative Commons Zero v1.0 Universal":
      return "(http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse Public License 2.0":
      return "(https://opensource.org/licenses/EPL-1.0)";
    case "GNU General Public License v2.0":
      return "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "Mozilla Public License 2.0":
      return "(https://opensource.org/licenses/MPL-2.0)";
    case "The Unlicense":
      return "(http://unlicense.org/)";
    case "None":
      return "";
  }
}


function renderLicenseSection(license) {
  if (license !== "None") {
    return (
   `Copyright @ ${license}. All rights reserved.

    Licensed under ${license}.`
    )
  } else {
    return ""
  }
}


function generateMarkdown(data) {
  return `# ${data.title}


  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#install)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contribute)
  - [Tests](#tests)

  <a name="install"></a>
  ## Installation
  ${data.install}

  <a name="usage"></a>
  ## Usage
  ${data.useage}

  <a name="license"></a>
  ## License
  ${data.license}

  ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}
  

  <a name="contribute"></a>
  ## Contributing
  ${data.contribution}

  <a name="tests"></a>
  ## Tests
  ${data.test}

  ## Questions
  Contact me with any questions :
  My GitHub : <a>https://github.com/${data.github}</a>
  My Email : ${data.email}
`;
}

module.exports = generateMarkdown;
