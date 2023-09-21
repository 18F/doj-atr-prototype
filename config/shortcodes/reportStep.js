// Usage: {% report_step "Step name", step_number, current_step %}

let reportStatus = function(reportStep, requestedStep) {
  if (reportStep == requestedStep) {
    return "current";
  } else if (reportStep < requestedStep) {
    return "complete";
  } else {
    return "incomplete";
  }
}

module.exports = (stepName, link, reportStep, requestedStep) => {
  let status = reportStatus(reportStep, requestedStep);
  return `
  <li class="usa-step-indicator__segment usa-step-indicator__segment--${status}">
    <a href="../${link}" class="report-step-nav">
      <span class="usa-step-indicator__segment-label">
        ${stepName} <span class="usa-sr-only">${status}</span>
      </span>
    </a>
  </li>
`;
}
