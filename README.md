# dashboard-sdk-utils

## Dependencies

- Angular 1.4+
- Lodash

## Development

Create `aws.private.json` file int *grunt/* directory.

Run `grunt build` to build library - artifacts are placed in *dist/* directory.

Run `yarn link` in root folder of this repository.

Run `yarn link @enplug/dashboard-sdk-utils` in root folder of another repository which depends on **dashboard-sdk-utils**.

When no longer working on this repository, unlink everything.

More info on linking in yarn docs: [yarn link](https://yarnpkg.com/lang/en/docs/cli/link/).
