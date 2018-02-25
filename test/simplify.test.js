'use strict'

import test from 'ava'
import {simplify} from '../lib/jaden'
import normalizedArray from './structure/normalizedArray'
import config from './config'
import simplifiedArray from './structure/simplifiedArray'

test('simplify', t => {
  t.is(simplify(normalizedArray, config), simplifiedArray)
})
