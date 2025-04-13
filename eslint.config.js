// eslint.config.js
export default [
    {
      files: ['*.js'], // Define que o ESLint vai verificar arquivos .js
      rules: {
        'semi': ['error', 'always'],  // Exige ponto e vírgula
        'quotes': ['error', 'single'], // Exige aspas simples
        // Adicione outras regras de lint conforme precisar
      },
    },
  ];