#!/usr/bin/env node

import * as data from '../db.js'

// print data to stdout, gets captured and unstringified in startCluster
console.log(JSON.stringify(data))
