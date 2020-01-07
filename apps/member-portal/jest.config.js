module.exports = {
  name: 'member-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/member-portal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
