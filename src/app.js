import { PLATFORM} from 'aurelia-pal';

export class App {
  message = 'Hello World!';
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.options.root = '/';

    config.map([
      {
        route: ['', 'example2'],
        name: 'example2',
        moduleId: PLATFORM.moduleName('./example2'),
        nav: true,
        title: 'example2',
        settings: {icon: 'icon-user'},
        auth: true
      }    
    ]);

    config.mapUnknownRoutes('not-found');

    this.router = router;
  }

}
