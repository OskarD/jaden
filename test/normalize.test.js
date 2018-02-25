'use strict'

import test from 'ava'
import {normalize} from '../lib/jaden'
import simplifiedArray from './structure/simplifiedArray'
import config from './config'
import normalizedArray from './structure/normalizedArray'

test('simplify', t => {
  t.is(normalize(simplifiedArray, config), normalizedArray)
})
