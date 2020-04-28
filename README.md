# Error Handling in Express

Create an express service if you use the express generator, remove the code we don't need.

1. Create a the following endpoints (all GET)

- /me/about -> Will return a json with some info about you (can be fake)
- /me/hobbies -> Will return an array of hobbies
- /me/hobbies/<hobbyName> -> will return true or false (depending if it is your hobby)

2. Read the Error Handling Guide
   [Read the guide](https://expressjs.com/en/guide/error-handling.html)

3. Overwrite the default error handler
   When any error happens in your application the following error should be returned.

```js
{
  error: {
    message: "Ohh, so sorry can not help you!";
  }
}
```

## Extra

Refactor `/me/hobbies/<hobbyName>` from route parameter to query parameter.

- query multiple hobbies
- response includes data (hobbies) and error not included hobbies
