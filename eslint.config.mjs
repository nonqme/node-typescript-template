import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import nodePlugin from 'eslint-plugin-n';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  nodePlugin.configs['flat/recommended'],
  {
    rules: {
      'n/no-unpublished-import': [
        'error',
        {
          allowModules: ['globals', '@eslint/js', 'eslint-plugin-n', 'typescript-eslint'],
        },
      ],
    },
  },
];
