module.exports = {
  packagerConfig: {
//    icon: './icon'
  },
  rebuildConfig: {},
  makers: [
      /*
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
       */
    {
      name: '@rabbitholesyndrome/electron-forge-maker-portable',
      "config": {
        portable: {
          artifactName: "Flick.exe",
        },
        fileAssociations: {
          ext: 'exe',
          icon: 'icon.ico'
        }
      }
    }
  ],
};
