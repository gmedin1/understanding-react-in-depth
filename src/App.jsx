import { lazy, useState } from 'react'

const Lazy = lazy(() =>
  import(/* webpackPrefetch: true */ '@/components/Lazy.jsx')
)

export default function App() {
  const [state, setState] = useState('idle')
  return (
    <div>
      <h1>Hello, React + Webpack</h1>
      <button
        onClick={() => {
          setState('lazy')
        }}
      >
        Load On Demand
      </button>
      <div>{state === 'lazy' && <Lazy />}</div>
    </div>
  )
}
