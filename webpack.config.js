const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "checkout",
  // O componente AppHeader está sendo exposto em shell/Header.
  // A Aplicação que consome o AppHeader de shell o fará dessa forma: import Header from 'shell/Header';

  exposes: {
    "./routes": "./src/app/app-routing.module.ts",
    // Adjusted line:
    //"./Component": "./src/app/checkout/checkout.component.ts",
    "./Footer": "./src/app/header/footer.component.ts",
    //"./Module": "./src/app/checkout/checkout.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
