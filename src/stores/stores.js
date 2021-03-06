/* @flow */

import { useStrict } from 'mobx';

/* Stores */
import UserStore from './user';

/**
  Enables MobX strict mode globally.
  In strict mode, it is not allowed to
  change any state outside of an action
 */
useStrict(true);

export default class Stores {
  user = new UserStore();
}
