module.exports = function (facebookConfigProvider) {
  facebookConfigProvider.setAppId(window.fbappid);
  facebookConfigProvider.setLanguage('en-US');
  facebookConfigProvider.setDebug(false);

  // When autoInit is setted to false you need to initialize
  // the facebookConfig service manually inside a run block.
  facebookConfigProvider.autoInit(true);

  // Same: developers.facebook.com/docs/javascript/reference/FB.init/
  facebookConfigProvider.setOptions({
    status: true
  });
}
