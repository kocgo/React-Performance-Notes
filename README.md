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