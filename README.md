# React Performance Notes

### How to Lazy Load Components
1) Webpack setup is not needed.
2) Instead of importing component directly, import it with React.lazy (and assign it to a variable);
```jsx
const Counter = React.lazy(() => import("./Counter"));
```
3) Should be used inside of React.Suspense with a fallback
```jsx
<React.Suspense fallback={<p>loading</p>}>
  <Counter />
</React.Suspense>
```
4) Lazy loaded components should have a default export

### Eager Loading
Loading on conditionals (hover, focus etc)

1) Create the loader function
```jsx
function loadCounter (){
  import('./Counter')
}
```
2) Multiple loading of the same module will use cache
3) Create conditions
```jsx
  <label
    onFocus={loadCounter}
    onMouseEnter={loadCounter}
  >
```

### Prefetching with Webpack Magic Comments
```javascript
import(/* webpackPrefetch: true */ './some-module.js')
```

When webpack sees this comment, it adds this to your document's `head`:

```javascript
<link rel="prefetch" as="script" href="/static/js/1.chunk.js">
```

With this, the browser will automatically load this JavaScript file into the
browser cache so it's ready ahead of time.


### Workerize
No changes to the webpack config are necessary, the loader syntax will bundle the `worker` code automatically into a separate file.

1) `npm install -D workerize-loader`
2) Create your module in a seperate file
```jsx
// block for `time` ms, then return the number of loops we could run in that time:
export function expensive(time: number) {
    let start = Date.now();
    let count = 0;
    while (Date.now() - start < time) count++
    return count
}
```
3) Workerize your module
```jsx
/*
This import line is creating a factory! not loading the module directly!
*/
import worker from 'workerize-loader!./worker'

let instance = worker(); // `new` is optional

instance.expensive(1000).then(count => {
    console.log(`Ran ${count} loops`);
});
``` 
