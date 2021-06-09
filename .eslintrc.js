module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', '@vue/airbnb'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        //

        indent: ['error', 4],
        semi: ['error', 'never'],
        'linebreak-style': ['error', 'windows'],
        // 配合 GIT
        'import/extensions': ['error', 'always'],
        // import 檔案 我要看到副檔名才知道是 import 什麼吧
        'vue/no-multiple-template-root': ['off'],
        // 不要管我要不要只有一個 root 在 component 中
        'object-curly-newline': ['off'],
        // 這個是 不要管我是否要把 object 多行或一行
        // 我想要多就多，少就少，看的舒服就好
        'padded-blocks': ['off'], // 這個是 function 不要有無空一行的規則
    },
}
