# use-interval

> React hook for setting an interval as posted on overreacted.io

[![NPM](https://img.shields.io/npm/v/use-interval.svg)](https://www.npmjs.com/package/use-interval) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Dan Abramov's blog post explaining why you cannot just use `setInterval` within `useEffect`.](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

## Install

```bash
npm install --save use-interval
```

## Usage

```tsx
import * as React from 'react'

import useInterval from 'use-interval'

const Example = () => {
  let [count, setCount] = React.useState(0);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
}
```

```tsx
// TypeScript Declaration
useInterval(
  callback: () => void,
  delay: number,
  immediate?: boolean /* called when mounted if true */
)
```

## License

MIT

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
