import * as environment from '../config/environment.json';
import {PLATFORM} from 'aurelia-pal';
import 'flatpickr/dist/flatpickr.min.css';
import 'multiple-select-modified/src/multiple-select.css';
import 'multiple-select-modified/src/multiple-select.js';
import '@slickgrid-universal/common/dist/styles/css/slickgrid-theme-bootstrap.css';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));


    aurelia.use.plugin(PLATFORM.moduleName('aurelia-slickgrid'), config => {
      // change any of the default global options
      //config.options.gridMenu.iconCssClass = 'fa fa-bars';
    });
  

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
