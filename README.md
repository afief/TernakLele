# Ternak Lele
#### Cradit Card Generator and Validator

+ Visa
+ Mastercard

### Install
```
$ npm install ternaklele
```

### In NodeJS
```
const ternak = require('ternaklele')

const visa = ternak.generateVisa()
const master = ternak.generateMaster()
const valid = ternak.validate('4111 1111 1111 1111')
```