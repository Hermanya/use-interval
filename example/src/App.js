import React from 'react'

import { useMyHook } from 'use-interval'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
