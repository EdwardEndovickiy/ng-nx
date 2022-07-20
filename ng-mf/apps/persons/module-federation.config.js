module.exports = {
  name: 'persons',
  exposes: {
    './Module': 'apps/persons/src/app/remote-entry/entry.module.ts',
  },
};
