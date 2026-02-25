fetch('../package.json')
  .then(response => response.json())
  .then(data => {
    const versionElement = document.getElementById('versionBadge');
    versionElement.textContent = `Versión v${data.version}`;
  })
  .catch(() => {
    document.getElementById('versionBadge').textContent = 'Versión no disponible';
  });
