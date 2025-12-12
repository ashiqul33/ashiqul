import * as migration_20251212_133102_user from './20251212_133102_user';
import * as migration_20251212_151104_users_sessions from './20251212_151104_users_sessions';

export const migrations = [
  {
    up: migration_20251212_133102_user.up,
    down: migration_20251212_133102_user.down,
    name: '20251212_133102_user',
  },
  {
    up: migration_20251212_151104_users_sessions.up,
    down: migration_20251212_151104_users_sessions.down,
    name: '20251212_151104_users_sessions'
  },
];
