module.exports = {
  name: 'provider-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/provider-portal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
