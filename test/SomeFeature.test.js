'use strict';

import test from 'ava';
import {SomeFeature} from '../lib/jaden';

test('foo', t => {
  t.is(SomeFeature.doSomething(), true);
});
