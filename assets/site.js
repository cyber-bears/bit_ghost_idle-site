(function () {
  const config = window.BITGHOST_SITE_CONFIG || {};
  const legalName = config.legalName || "Cyber Bears";
  const supportEmail = config.supportEmail || "replace-with-your-support-email@example.com";
  const normalizedSupportEmail = supportEmail.trim().toLowerCase();
  const githubIssuesUrl = config.githubIssuesUrl || "";
  const appStoreUrl = config.appStoreUrl || "";
  const lastUpdated = config.lastUpdated || "";
  const needsEmailSetup =
    !normalizedSupportEmail ||
    normalizedSupportEmail.indexOf("replace-with-your-support-email") !== -1 ||
    normalizedSupportEmail.indexOf("example.com") !== -1 ||
    normalizedSupportEmail.indexOf("@") === -1;

  document.querySelectorAll("[data-app-name]").forEach((node) => {
    node.textContent = config.appName || "BitGhost";
  });

  document.querySelectorAll("[data-app-subtitle]").forEach((node) => {
    node.textContent = config.appSubtitle || "Restore the Phantom Grid.";
  });

  document.querySelectorAll("[data-legal-name]").forEach((node) => {
    node.textContent = legalName;
  });

  document.querySelectorAll("[data-support-email], [data-support-email-href]").forEach((node) => {
    if (node.tagName === "A") {
      node.setAttribute("href", "mailto:" + supportEmail);
    }
  });

  document.querySelectorAll("[data-support-email]").forEach((node) => {
    node.textContent = supportEmail;
  });

  document.querySelectorAll("[data-last-updated]").forEach((node) => {
    node.textContent = lastUpdated;
  });

  document.querySelectorAll("[data-issues-link]").forEach((node) => {
    if (!githubIssuesUrl) {
      node.remove();
      return;
    }
    node.setAttribute("href", githubIssuesUrl);
  });

  document.querySelectorAll("[data-app-store-link]").forEach((node) => {
    if (!appStoreUrl) {
      node.remove();
      return;
    }
    node.setAttribute("href", appStoreUrl);
  });

  document.querySelectorAll("[data-setup-banner]").forEach((node) => {
    node.hidden = !needsEmailSetup;
  });
})();
