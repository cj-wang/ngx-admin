import { Module } from '@nestjs/common';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { join } from 'path';

const BROWSER_DIR = join(process.cwd(), 'dist/browser');
applyDomino(global, join(BROWSER_DIR, 'index.html'));

global['Event'] = null;
global['window']['screen'] = {};
global['location'] = {};
global['CKEDITOR'] = {
  version: '',
  on: () => {},
  getUrl: () => {},
  domReady: () => {},
  fireOnce: () => {},
  fire: () => {},
  _: {},
};

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: BROWSER_DIR,
      bundle: require('../server/main'),
      liveReload: true
    })
  ]
})
export class ApplicationModule {}
