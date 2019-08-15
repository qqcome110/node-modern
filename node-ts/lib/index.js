"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const test_1 = require("./test");
const pkgContent = fs_1.readFileSync(path_1.resolve(process.cwd(), 'package.json'), 'utf8');
console.log(pkgContent);
const addResult = test_1.add(1, 2);
const plusResult = test_1.plus(18, 3);
console.log(addResult, plusResult, test_1.default('node-es'));
