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