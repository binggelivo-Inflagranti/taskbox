/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/components/**/*.stories.js'],
  staticDirs: ['../public'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },

  core: {
    disableTelemetry: true,
  },

  docs: {
    autodocs: true
  }
}
export default config
