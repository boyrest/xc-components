import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'xc-components',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  extraBabelPlugins: [
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }],
    [
      'babel-plugin-import',
      { libraryName: '@formily/antd', libraryDirectory: 'lib', style: true },
      'formilyAntd',
    ],
  ],
  // more config: https://d.umijs.org/config
});
