# Angular 7, Bootstrap 4 demo

```
npm i
ng serve -o
ng test
```

## Testing

```
// testing with headless chrome
ng test -- --no-watch --no-progress --browsers=ChromeHeadlessCI
ng e2e -- --protractor-config=e2e/protractor-ci.conf.js

// Code coverage
ng test --no-watch --code-coverage

