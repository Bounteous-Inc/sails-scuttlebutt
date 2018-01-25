# sails-scuttlebutt

A hard fork of [sails-disk](https://github.com/balderdashy/sails-disk).

A local disk adapter and fixture provider for the Sails framework and Waterline ORM. Bundled with the `sails-hook-orm` hook.

## Usage

First, register `sails-scuttlebutt` as an adapter in your datastore config.

```javascript
module.exports.datastores = {
  test: {
    adapter: 'sails-scuttlebutt',
    dir: './test/fixtures'
  }
};
```

When the adapter loads, it will attempt to load a file named `modelName.json` for each model in your app from the directory `dir`. `dir` defaults to `./test/fictures`. In `/env/test.js`, override your dev/prod datastore config:

```javascript
module.exports = {
  models: {
    datastore: 'test'
  }
};
```

Finally, run your tests and specify the environment:

```
NODE_ENV=test npm run tests;
```

Since your fixture data is populated directly instead of being added using `Model.create()`, sails-specific hooks won't take effect (e.g. `beforeCreate` or auto-incrementing IDs). You'll need to account for that in your fixture data.

> Under the hood, this uses [nedb](http://npmjs.com/package/nedb).

## License

This package, like the [Sails framework](http://sailsjs.com), is free and open-source under the [MIT License](http://sailsjs.com/license).
