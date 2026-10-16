import pluginVue from 'eslint-plugin-vue';
import stylistic from '@stylistic/eslint-plugin';
import { withVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';

export default withVueTs(
  pluginVue.configs['flat/strongly-recommended'],
  vueTsConfigs.recommendedTypeChecked,

  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/indent-binary-ops': ['error', 2],

      '@stylistic/semi': ['error', 'always'],
      '@stylistic/semi-spacing': ['error', { before: false, after: true }],

      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
    },
  },
);