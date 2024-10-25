import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";
import { registerApplication, start } from "single-spa";

import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => import(/* webpackIgnore: true */ name),
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});

applications.forEach(registerApplication);


  
layoutEngine.activate();
start();
