### 直奔主题
利用js ast可以对你的源代码进行修改、优化，甚至可以打造自己的编译器。比如你看到这里用了var不顺眼，你可以分分钟改成let。
### 看我这个还不懂AST,我给你发红包
```
AST真的很简单，并没有我们想象的那样高深。
很多地方都把这个技术给夸大了，什么编译原理，抽象语法树 光看这名字就觉得吓人。
当然一项技术总归要起个名字，就像给自己的孩子取名字，肯定要起一个高大上，深有寓意的名字。话又说回来了，名字只是一个代号。
所以就从名字就会让很多人望而却步。我就觉得ast真的超级简单，但是功能超级强大。
我们能用这个技术做很多有意思的东西，只要你能想到的。
本文术道结合，让你感受到ast的有趣和简单，从此爱上ast，还能根据自己的需要打造自己的编译器。
```

### 什么是AST？
```
ast全称是abstract syntax tree,翻译过来叫-抽象语法树。其实这两包含两个意思，一个是“抽象”，一个是“树”。
抽象表示的是把js代码进行了结构化的转化，转化为一种数据结构。
这种数据结构其实就是一个大的json对象，json我们都熟悉,他就像一颗枝繁叶茂的树。
有树根，有树干，有树枝，有树叶.无论多小多大，都是一棵完整的树。

```

### 如何生成AST？
```
我们可以大致的想一下如果亲自实现把js代码转换成结构化的数据我们应该怎么做？
可能我们会想到使用字符串处理、正则匹配等方法，如果对简单的代码处理我们是可以实现的。
但是如果能够对随意的一段代码进行处理那就需要考虑非常多的情况。具体如何实现咱们不必过于纠结，这也不是重点。
但最终的实现里我们能想到方法基本都会被用到。我们可以简化理解，也就是对js代码经过了一系列的加工处理，变成了一盘好吃的饭菜。
这个做菜的过程是及其复杂的，所以我们需要用现成的做菜方法，直接拿过来用就可以了。
所以我们需要用到esprima、UglifyJS等库，做菜的方法不止一种，所以会存在很多这样的三方库，而我们会使用其中一种就可以了。
```


### 有了AST能做什么?
```
到这一步我们已经可以把js代码转换成一颗结构化的树了，那下一步我们要做什么呢？ 比如我们在没有树的情况下，我们要对代码里的某个代码进行替换。
比如我们要把所有 console.log给注释掉或者删除，我们可能会使用ide的查找替换或者用node写一个遍历文件，读取文件然后查找替换。
这种方式不够安全也不够科学，稍有不慎就会把代码给搞错了。
但是这个时候我们有了结构化的代码树，我们是不是只要对这棵树进行修修剪剪然后把这棵树转换成为js代码就可以了呢？
答案：肯定是可以的。因为树已经发生了变化，修改了树就相当于修改了源码。
怎样操作这棵树呢？我觉得就不要说了，就是对一个json对象进行操作。
问题是怎样把树再转成代码？
脑洞打开了，我用递归加字符串拼接，这个方法应该是可以的。
但是这棵树不是我们生成的，成千上万个节点呢？怎么拼接？那岂不是得搞得流鼻血吗？
这就像是菜做好了，我们经过了二次加工，转换成源码的过程就是三次加工。所以具体的转源码的原理不多说，也不需要纠结。
使用现成的方法就可以，所以要用到estraverse,escodegen这两个库。
estraverse 可以遍历树的所有节点，省去我们递归的遍历
escodegen  可以把树再加工转成源代码
```

### 过程总结
```
到这里我们始终都没有提到任何代码，只是在述说的过程中引出了3个库而已。有了这三个库就可以对我们的js代码进行多样化处理，只要你想到的。甚至可以打造自己的编译器了。
看图理解整个处理过程：
```
![avatar](https://github.com/bigerfe/follaw-demos/blob/master/esprima-demo/img/trans.png?raw=true)

这个过程是多么的简单，清晰，所以说ast真的是超级简单，但是功能超级好玩、超级强大。代码可以被你任意的蹂躏了。


### 上代码
```
说的再清楚都不够直观，毕竟都是脑补，不如看代码来的爽快。
这里我就拿日常的一些小问题举例，来演示一下AST的使用。

1. 把 == 改为全等 ===
2. 遇到parsetInt使用不标准的改为标准用法  parseInt(a)-> parseInt(a,10)

先看看ast美不美,这里我使用esprima的官方工具生成了ast,工具地址http://esprima.org/demo/parse.html。

```
源码
我们的功能就是针对这段进行操作。
``` javascript
//源码
function fun1() {
    console.log('fun1');
}
function fun2(opt) {
    if (opt.status == 1) {
        console.log('1');
    }
    if (opt.status == 2) {
        console.log('2');
    }
}
function fun3(age) {
    if (parseInt(age) >= 18) {
        console.log('ok 你已经成年');
    }
}
```
转成ast,由于转成树后结构非常大，所以这里我只贴了一部分，你也可以到工具页面自己生成下。
``` javascript
{
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "fun1"
            },
            "params": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "console"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "log"
                                }
                            },
                            "arguments": [
                                {
                                    "type": "Literal",
                                    "value": "fun1",
                                    "raw": "'fun1'"
                                }
                            ]
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false,
            "async": false
        }
    ]
}
```
> ast看上去很复杂，仔细看看基本都能看懂。所有的代码都在特定的节点里面。具体的这里就不介绍了。总之这就是一个对象，只要你能对这个对象进行修改、添加、删除即可。

开始实现上面的功能
---
1. 基础方法
``` javascript
//引入工具包
const esprima = require('esprima');//JS语法树模块
const estraverse = require('estraverse');//JS语法树遍历各节点
const escodegen = require('escodegen');//JS语法树反编译模块
//获取代码ast
const AST = esprima.parseScript(jsCode);

/**
 * 
 * @param {遍历语法树} ast 
 */
function walkIn(ast){
    estraverse.traverse(ast, {
        enter: (node) => {
            toEqual(node);//把 == 改为全等 ===
            setParseint(node); //parseInt(a)-> parseInt(a,10)
        }
    });
}

```
2. 把 == 改为全等 ===
``` javascript
/**
 * 设置全等
 */
function toEqual(node) {
    if (node.operator === '==') {
        node.operator = '===';
    }
}
```
3. 把parseInt改成标准调用
``` javascript
/**
 * 把parseint改为标准方法
 * @param {节点} node 
 */
function setParseint(node) {
    if (node.type === 'CallExpression' && node.callee.name === 'parseInt' && node.arguments.length===1){
        node.arguments.push({
            "type": "Literal",
            "value": 10,
            "raw": "10"
        });
    }
}

//生成目标代码
const code = escodegen.generate(ast);
//写入文件.....
//....
```
有兴趣的可以自己搞搞看。代码不多，需求简单，但是目的是为了阐述清楚处理过程。
ast的节点很多，有些凌乱，操作的时候只要关心自己的需求就可以，你不需要对所有的节点都搞明白。按需处理就可以。


### AST技术被谁用了
```
虽然平时用不到ast，但我们又时刻都在用ast技术。
家喻户晓、无人不知的babel，webpack，
还有jd taro等都把ast用的淋漓尽致，脱离了ast他们就跪了。

```

### ast太没技术含量了
```
ast没有技术含量吗？怎么可能呢，如果真这么认为怕是会被笑掉大牙的。如果仅仅是保留在使用层面的话，到这步已经基本可以了，只要是你能对这棵树做剪裁就可以对源代码做手脚。
还是像上面说的，ast怎样生成的？ast怎样转换成源码的？会使用就像是在山脚下能看到的风景有限，理解了背后原理就像是爬上了山顶，一览众山小啊。不过上不上山看个人兴趣，
有兴趣的同学可以去看源码、做研究，这里就不再多说了，
因为我也不知道。哈哈哈

```

### 总结
我们主要介绍了什么是ast，以及ast的用途，然后通过具体的示例演示了怎样操作ast，最终是希望能对ast有一个系统的认识和理解并能够利用ast打造自己的工具。
演示代码下载，欢迎star
https://github.com/bigerfe/follaw-demos/tree/master/esprima-demo 
写作不易，请多鼓励

欢迎关注本人公众号 - 重度前端

![avatar](https://github.com/bigerfe/follaw-demos/blob/master/esprima-demo/img/mycode.jpg?raw=true)

记录个人感悟、分享有价值的技术文章