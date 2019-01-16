/**
 * ESLint 规则 - React
 *
 * 包含部分 ESLint 规则，以及部分 eslint-plugin-react 规则
 * 使用 babel-eslint 作为解析器
 *
 */
module.exports = {
    "env": { //此项指定环境，下面的配置指定为浏览器环境等
        "browser": true, //browser 全局变量。
        "commonjs": true, //CommonJS 全局变量和 CommonJS 作用域 (仅为使用 Browserify/WebPack 写的只支持浏览器的代码)。
        "es6": true, //支持除了modules所有 ECMAScript 6 特性。
        "node": true //- Node.js 全局变量和 Node.js 作用域。
    },
    "extends": "eslint:recommended", //使用 "extends": "eslint:recommended" 来启用推荐的规则，报告一些常见的问题
    // 当访问未定义的变量时，no-undef 规则将发出警告。如果你想在一个文件里使用全局变量，推荐你定义这些全局变量，这样 ESLint 就不会发出警告了。
    // 这里填入你的项目需要的全局变量，指定全局变量。
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    "globals": { //使用globals指出你要使用的全局变量。设置每个变量等于true允许变量被重写，或 false不允许被重写。false可以改变对象中的方法和属性,不能重新赋值
        "$": true,
        "App": false,
        "getApp": false,
        "process": false,
        "__dirname": false,
        "document": false,
        "navigator": false,
        "window": false,
        "node": false,
        "server": false,
        "require": true,
        "import": false,
        "this": true,
        "swan": false,
        "console": false,
        "Page": false,
        "Component": false,
        "getCurrentPages": false
    },
    "parserOptions": { //此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
        "ecmaFeatures": { //这是个对象，表示你想使用的额外的语言特性:
            "jsx": true
        },
        "sourceType": "module", //指定来源的类型，有两种”script”或”module”（如果你的代码是 ECMAScript 模块)。babel-eslint 解析器源代码存在的位置是通过script引入还是module加载
        "ecmaVersion": 6 // ECMAScript 版本 指定版本，不是最低或最高，可以用使用年份命名的版本号，指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）
    },
    "rules": { //rules中的值0、1、2分别表示不开启检查、警告、错误
        "for-direction": 2,   //强制 “for” 循环中更新子句的计数器朝着正确的方向移动
        "getter-return": 2,   //强制 getter 函数中出现 return 语句,
        "no-await-in-loop": 2,    //禁止在循环中出现 await
        "no-compare-neg-zero": 2, //禁止与 -0 进行比较
        "no-cond-assign": 2,  //禁止条件表达式中出现赋值操作符
        "no-console": 1,  //禁用 console
        "no-constant-condition": 2,   //禁止在条件中使用常量表达式
        "no-debugger": 2, //禁用 debugger
        "no-dupe-args": 2,    //禁止 function 定义中出现重名参数
        "no-dupe-keys": 2,    //禁止对象字面量中出现重复的 key
        "no-duplicate-case": 2,   //禁止出现重复的 case 标签 ,switch中的case标签不能重复
        "no-empty": 2,    //禁止出现空语句块
        "no-empty-character-class": 2,    //禁止在正则表达式中使用空字符集
        "no-ex-assign": 2,    //禁止对 catch 子句的参数重新赋值
        "no-extra-boolean-cast": 2,   //禁止不必要的布尔转换
        "no-extra-parens": 2, //禁止不必要的括号
        "no-extra-semi": 2,   //禁止不必要的分号
        "no-func-assign": 2,  //禁止对 function 声明重新赋值
        "no-inner-declarations": 2,   //禁止在嵌套的块中出现变量声明或 function 声明
        "no-invalid-regexp": 2,   //禁止 RegExp 构造函数中存在无效的正则表达式字符串
        "no-irregular-whitespace": 2, //禁止在字符串和注释之外不规则的空白 "skipStrings": true (默认) 允许在字符串字面量中出现任何空白字符,"skipComments": true 允许在注释中出现任何空白字符,"skipRegExps": true 允许在正则表达式中出现任何空白字符,"skipTemplates": true 允许在模板字面量中出现任何空白字符
        "no-obj-calls": 2,    //禁止把全局对象作为函数调用
        "no-prototype-builtins": 0,   //禁止直接调用 Object.prototypes 的内置属性
        "no-regex-spaces": 2, //禁止正则表达式字面量中出现多个空格
        "no-sparse-arrays": 1,    //禁用稀疏数组[1,,2,,,21]
        "no-template-curly-in-string": 2, //禁止在常规字符串中出现模板字面量占位符语法
        "no-unexpected-multiline": 2, //禁止出现令人困惑的多行表达式
        "no-unreachable": 2,  //禁止在return、throw、continue 和 break 语句之后出现不可达代码
        "no-unsafe-finally": 2,   //禁止在 finally 语句块中出现控制流语句
        "no-unsafe-negation": 2,  //禁止对关系运算符的左操作数使用否定操作符
        "use-isnan": 2,   //要求使用 isNaN() 检查 NaN
        "valid-jsdoc": 1, //强制使用有效的 JSDoc 注释
        "valid-typeof": 2,    //强制 typeof 表达式与有效的字符串进行比较

        "comma-dangle": [2, "never"], // 要求或禁止末尾逗号：不允许逗号
        "indent": [2, 4], // JavaScript代码强制使用一致的缩进：4格缩进
        "linebreak-style": [2, "unix"], //默认 强制使用Unix行结尾：\n对于LF。
        "quotes": [2, "single"], //单引号
        "no-var": 1, //要求使用 let 或 const 而不是 var
        "semi": 2, //强制使用分号
        "no-trailing-spaces": 2, //一行结束后面有空格就发出警告
        "eol-last": 0, //文件以单一的换行符结束（就是代码结尾处，要来个空格，相当于加一行，） 文件结尾需要去空一行
        "no-unused-vars": [2, { "vars": "all", "args": "all" }], //不能有声明后未被使用的变量或参数
        "no-underscore-dangle": 2, //标识符不能以_开头或结尾
        "no-alert": 2, //禁止使用alert confirm prompt
        "no-lone-blocks": 2, //禁止不必要的嵌套块
        "no-class-assign": 2, //禁止给类赋值
        "no-const-assign": 2, //禁止修改const声明的变量
        "no-delete-var": 2, //不能对var声明的变量使用delete操作符
        "no-invalid-this": 1, //禁止无效的this，只能用在构造器，类，对象字面量
        "no-redeclare": 2, //禁止重复声明变量
        "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
        "no-this-before-super": 2, //在调用super()之前不能使用this或super
        "no-undef": 2, //禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        "no-use-before-define": 2, //未定义前不能使用
        "camelcase": 2, //强制驼峰法命名 "properties": "always" (默认) 强制属性名称为驼峰风格，"properties": "never" 不检查属性名称 
        //warning
        //var my_favorite_color = "#112C85";
        //not warning
        // var myFavoriteColor   = "#112C85";
        // var _myFavoriteColor  = "#112C85";
        // var myFavoriteColor_  = "#112C85";
        // var MY_FAVORITE_COLOR = "#112C85";
        "eqeqeq": 2, //要求使用 === 和 !==
        "no-mixed-spaces-and-tabs": 2, //禁止混用tab和空格
        "prefer-arrow-callback": 0, //比较喜欢箭头回调
        "arrow-parens": 0, //箭头函数用小括号括起来
        "arrow-spacing": 2, //强制箭头函数的箭头前后使用一致的空格
        "no-shadow-restricted-names": 2,//禁止对一些关键字或者保留字进行赋值操作，比如NaN、Infinity、undefined、eval、arguments等。
        "no-sequences": 2,//不要使用逗号操作符，详见官网
        "no-self-compare": 2,//不要和自身作比较
        "no-proto": 2,//不要使用__proto__
        "no-new-wrappers": 2,//当定义字符串、数字、布尔值就不要使用构造 函数了，String、Number、Boolean 
        "no-new-require": 2,//禁止把require方法和new操作符一起使用。
        "no-new-object": 2,//不要通过new Object（），来定义对象
        "new-parens": 2,//在使用构造函数时候，函数调用的圆括号不能够省略
        "new-cap": [2, { "newIsCap": true, "capIsNew": false }],//构造函数首字母大写
        "no-eval": 2,//禁止使用eval函数
    }
};

