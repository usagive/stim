(function () {
  'use strict';
  function applyConfig() {
    var cfg = window.LANDER_CONFIG || {};
    if (cfg.pageTitle) document.title = cfg.pageTitle;
    document.querySelectorAll('[data-edit-text]').forEach(function(el) {
      var value = (cfg.text || {})[el.getAttribute('data-edit-text')];
      if (typeof value === 'string') el.textContent = value;
    });
    document.querySelectorAll('[data-config-link]').forEach(function(el) {
      var value = cfg[el.getAttribute('data-config-link')];
      if (typeof value === 'string' && /^https?:\/\//i.test(value)) {
        el.setAttribute('href', value);
        el.setAttribute('rel', 'noopener noreferrer');
      } else {
        el.removeAttribute('href');
        el.setAttribute('role', 'link');
        el.setAttribute('aria-disabled', 'true');
        el.addEventListener('click', function(e) { e.preventDefault(); });
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyConfig);
  else applyConfig();
})();
