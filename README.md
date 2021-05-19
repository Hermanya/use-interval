# use-interval

> React hook for setting an interval as posted on overreacted.io

[![NPM](https://img.shields.io/npm/v/use-interval.svg)](https://www.npmjs.com/package/use-interval) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Dan Abramov's blog post explaining why you cannot just use `setInterval` within `useEffect`.](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

## Used by


- [codesandbox / codesandbox-client](https://github.com/codesandbox/codesandbox-client)
- [kentcdodds / react-performance](https://github.com/kentcdodds/react-performance)
- [siddharthkp / react-ui](https://github.com/siddharthkp/react-ui)
- [element-motion](https://github.com/element-motion/element-motion)
- [wintercounter / mhy](https://github.com/wintercounter/mhy)
- [sagemathinc / cocalc](https://github.com/sagemathinc/cocalc)
- [wintercounter / mhy](https://github.com/wintercounter/mhy)

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
  }, 1000); // passing null instead of 1000 will cancel the interval if it is already running

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
