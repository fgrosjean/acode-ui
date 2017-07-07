'use babel';

let version = atom.getVersion();

if (parseFloat(version) > 1.18) {
  require('electron').remote.getCurrentWindow({webPreferences: { experimentalFeatures: true }}).setVibrancy('light');
  document.documentElement.classList.add('acode-vibrancy');
}
