import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { BundleRenderer, createBundleRenderer } from 'vue-server-renderer';
import { join } from 'path';

const RESOURCES_PATH = join(process.cwd(), '../resources');
const SERVER_BUNDLE_PATH = join(
  process.cwd(),
  '../resources/vue-ssr-server-bundle',
);

@Injectable()
export class AppService {
  public async getSSRHTML(): Promise<BundleRenderer> {
    const template = readFileSync(
      join(RESOURCES_PATH, '/index-ssr.html'),
      'utf-8',
    );

    const ssrBundle = await import(SERVER_BUNDLE_PATH);
    const renderer = createBundleRenderer(ssrBundle, {
      template,
    });

    return renderer;
  }
}
