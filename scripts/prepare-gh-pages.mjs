import { cpSync } from 'node:fs';
import { resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
cpSync(resolve(projectRoot, 'docs', 'browser'), resolve(projectRoot, 'docs'), {
  recursive: true,
});