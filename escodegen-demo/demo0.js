//讲代码树转换为代码
let escodegen = require('escodegen');

let code = escodegen.generate({
        "type": "Program",
        "body": [
            {
                "type": "FunctionDeclaration",
                "id": {
                    "type": "Identifier",
                    "name": "bubbleSort"
                },
                "params": [
                    {
                        "type": "Identifier",
                        "name": "list"
                    }
                ],
                "body": {
                    "type": "BlockStatement",
                    "body": [
                        {
                            "type": "VariableDeclaration",
                            "declarations": [
                                {
                                    "type": "VariableDeclarator",
                                    "id": {
                                        "type": "Identifier",
                                        "name": "items"
                                    },
                                    "init": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "list"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "slice"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "VariableDeclarator",
                                    "id": {
                                        "type": "Identifier",
                                        "name": "swapped"
                                    },
                                    "init": {
                                        "type": "Literal",
                                        "value": false,
                                        "raw": "false"
                                    }
                                },
                                {
                                    "type": "VariableDeclarator",
                                    "id": {
                                        "type": "Identifier",
                                        "name": "p"
                                    },
                                    "init": null
                                },
                                {
                                    "type": "VariableDeclarator",
                                    "id": {
                                        "type": "Identifier",
                                        "name": "q"
                                    },
                                    "init": null
                                }
                            ],
                            "kind": "var"
                        },
                        {
                            "type": "ForStatement",
                            "init": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                    "type": "Identifier",
                                    "name": "p"
                                },
                                "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                }
                            },
                            "test": {
                                "type": "BinaryExpression",
                                "operator": "<",
                                "left": {
                                    "type": "Identifier",
                                    "name": "p"
                                },
                                "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "items"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "length"
                                    }
                                }
                            },
                            "update": {
                                "type": "UpdateExpression",
                                "operator": "++",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "p"
                                },
                                "prefix": true
                            },
                            "body": {
                                "type": "BlockStatement",
                                "body": [
                                    {
                                        "type": "ForStatement",
                                        "init": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "q"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0"
                                            }
                                        },
                                        "test": {
                                            "type": "BinaryExpression",
                                            "operator": "<",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "q"
                                            },
                                            "right": {
                                                "type": "BinaryExpression",
                                                "operator": "-",
                                                "left": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "items"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "length"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "p"
                                                }
                                            }
                                        },
                                        "update": {
                                            "type": "UpdateExpression",
                                            "operator": "++",
                                            "argument": {
                                                "type": "Identifier",
                                                "name": "q"
                                            },
                                            "prefix": true
                                        },
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                                {
                                                    "type": "IfStatement",
                                                    "test": {
                                                        "type": "BinaryExpression",
                                                        "operator": "<",
                                                        "left": {
                                                            "type": "MemberExpression",
                                                            "computed": true,
                                                            "object": {
                                                                "type": "Identifier",
                                                                "name": "items"
                                                            },
                                                            "property": {
                                                                "type": "BinaryExpression",
                                                                "operator": "+",
                                                                "left": {
                                                                    "type": "Identifier",
                                                                    "name": "q"
                                                                },
                                                                "right": {
                                                                    "type": "Literal",
                                                                    "value": 1,
                                                                    "raw": "1"
                                                                }
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "MemberExpression",
                                                            "computed": true,
                                                            "object": {
                                                                "type": "Identifier",
                                                                "name": "items"
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "name": "q"
                                                            }
                                                        }
                                                    },
                                                    "consequent": {
                                                        "type": "BlockStatement",
                                                        "body": [
                                                            {
                                                                "type": "ExpressionStatement",
                                                                "expression": {
                                                                    "type": "AssignmentExpression",
                                                                    "operator": "=",
                                                                    "left": {
                                                                        "type": "Identifier",
                                                                        "name": "swapped"
                                                                    },
                                                                    "right": {
                                                                        "type": "Literal",
                                                                        "value": true,
                                                                        "raw": "true"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "type": "VariableDeclaration",
                                                                "declarations": [
                                                                    {
                                                                        "type": "VariableDeclarator",
                                                                        "id": {
                                                                            "type": "Identifier",
                                                                            "name": "temp"
                                                                        },
                                                                        "init": {
                                                                            "type": "MemberExpression",
                                                                            "computed": true,
                                                                            "object": {
                                                                                "type": "Identifier",
                                                                                "name": "items"
                                                                            },
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "name": "q"
                                                                            }
                                                                        }
                                                                    }
                                                                ],
                                                                "kind": "let"
                                                            },
                                                            {
                                                                "type": "ExpressionStatement",
                                                                "expression": {
                                                                    "type": "AssignmentExpression",
                                                                    "operator": "=",
                                                                    "left": {
                                                                        "type": "MemberExpression",
                                                                        "computed": true,
                                                                        "object": {
                                                                            "type": "Identifier",
                                                                            "name": "items"
                                                                        },
                                                                        "property": {
                                                                            "type": "Identifier",
                                                                            "name": "q"
                                                                        }
                                                                    },
                                                                    "right": {
                                                                        "type": "MemberExpression",
                                                                        "computed": true,
                                                                        "object": {
                                                                            "type": "Identifier",
                                                                            "name": "items"
                                                                        },
                                                                        "property": {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "+",
                                                                            "left": {
                                                                                "type": "Identifier",
                                                                                "name": "q"
                                                                            },
                                                                            "right": {
                                                                                "type": "Literal",
                                                                                "value": 1,
                                                                                "raw": "1"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "type": "ExpressionStatement",
                                                                "expression": {
                                                                    "type": "AssignmentExpression",
                                                                    "operator": "=",
                                                                    "left": {
                                                                        "type": "MemberExpression",
                                                                        "computed": true,
                                                                        "object": {
                                                                            "type": "Identifier",
                                                                            "name": "items"
                                                                        },
                                                                        "property": {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "+",
                                                                            "left": {
                                                                                "type": "Identifier",
                                                                                "name": "q"
                                                                            },
                                                                            "right": {
                                                                                "type": "Literal",
                                                                                "value": 1,
                                                                                "raw": "1"
                                                                            }
                                                                        }
                                                                    },
                                                                    "right": {
                                                                        "type": "Identifier",
                                                                        "name": "temp"
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "alternate": null
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "type": "IfStatement",
                                        "test": {
                                            "type": "UnaryExpression",
                                            "operator": "!",
                                            "argument": {
                                                "type": "Identifier",
                                                "name": "swapped"
                                            },
                                            "prefix": true
                                        },
                                        "consequent": {
                                            "type": "BreakStatement",
                                            "label": null
                                        },
                                        "alternate": null
                                    }
                                ]
                            }
                        },
                        {
                            "type": "ReturnStatement",
                            "argument": {
                                "type": "Identifier",
                                "name": "items"
                            }
                        },
                        {
                            "type": "ExpressionStatement",
                            "expression": {
                                "type": "CallExpression",
                                "callee": {
                                    "type": "Identifier",
                                    "name": "alert"
                                },
                                "arguments": [
                                    {
                                        "type": "Literal",
                                        "value": "Finish",
                                        "raw": "\"Finish\""
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
        ],
        "sourceType": "script"
    });
console.log(typeof code);
console.log(code);
