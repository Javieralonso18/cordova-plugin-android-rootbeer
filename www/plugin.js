var exec;

try {
  exec = require('cordova/exec');
} catch (error) {
  console.log('Cordova exec not found');

  exec = function exec(cb, err, PLUGIN_NAME, RootCheck, args) {
    console.log('Invoked RootCheck:' + RootCheck);
    cb();
  };
}

var PLUGIN_NAME = 'cdvRootBeer';
var cdvRootBeer = {
  isRooted: function isRooted(cb, err) {
    exec(cb, err, PLUGIN_NAME, 'isRooted', []);
  },
  isRootedWithoutBusyBoxCheck: function isRootedWithoutBusyBoxCheck(cb, err) {
    exec(cb, err, PLUGIN_NAME, 'isRootedWithoutBusyBoxCheck', []);
  },
  isSelinuxFlagInEnabled: function isSelinuxFlagInEnabled(cb, err) {
    exec(cb, err, PLUGIN_NAME, 'isSelinuxFlagInEnabled', []);
  },
  detectRootManagementApps: function detectRootManagementApps(cb, err) {
    exec(cb, err, PLUGIN_NAME, 'detectRootManagementApps', []);
  },
  detectPotentiallyDangerousApps: function detectPotentiallyDangerousApps(cb, err) {
    exec(cb, err, PLUGIN_NAME, 'detectPotentiallyDangerousApps', []);
  },
  detectTestKeys: function detectTestKeys(cb, err) {
    exec(cb, err, PLUGIN_NAME, 'detectTestKeys', []);
  },
  detectRootCloakingApps: function detectRootCloakingApps(cb, err) {
    exec(cb, err, PLUGIN_NAME, 'detectRootCloakingApps', []);
  },
  checkForBusyBoxBinary: function checkForBusyBoxBinary(cb, err) {
    exec(cb, err, PLUGIN_NAME, 'checkForBusyBoxBinary', []);
  },
  checkForSuBinary: function checkForSuBinary(cb, err) {
    exec(cb, err, PLUGIN_NAME, 'checkForSuBinary', []);
  },
  checkSuExists: function checkSuExists(cb, err) {
    exec(cb, err, PLUGIN_NAME, 'checkSuExists', []);
  },
  checkForRWPaths: function checkForRWPaths(cb, err) {
    exec(cb, err, PLUGIN_NAME, 'checkForRWPaths', []);
  },
  checkForDangerousProps: function checkForDangerousProps(cb, err) {
    exec(cb, err, PLUGIN_NAME, 'checkForDangerousProps', []);
  },
  checkForRootNative: function checkForRootNative(cb, err) {
    exec(cb, err, PLUGIN_NAME, 'checkForRootNative', []);
  },
  checkForMagiskBinary: function checkForMagiskBinary(cb, err) {
    exec(cb, err, PLUGIN_NAME, 'checkForMagiskBinary', []);
  }
};
module.exports = cdvRootBeer;
