# use-interval

> React hook for setting an interval as posted on overreacted.io

[![NPM](https://img.shields.io/npm/v/use-interval.svg)](https://www.npmjs.com/package/use-interval) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Dan Abramov's post explaining why you cannot just use `setInterval` and `useEffect`.](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

## Install

```bash
npm install --save use-interval
```

## Usage

```tsx
import * as React from 'react'

import { useInterval } from 'use-interval'

const Example = () => {
  let [count, setCount] = React.useState(0);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
}
```

## License

MIT © [Hermanya](https://github.com/Hermanya)
