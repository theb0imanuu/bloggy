function handleRouteChange() {
  const hash = window.location.hash || '#home';

  if (hash.startsWith('#post/')) {
    const slug = hash.split('/')[1];
    renderPost(slug);
  } else if (hash === '#archive') {
    renderArchive();
  } else if (hash === '#contact') {
    renderContact();
  } else {
    renderHome();
  }
}

window.addEventListener('hashchange', handleRouteChange);
window.addEventListener('DOMContentLoaded', handleRouteChange);