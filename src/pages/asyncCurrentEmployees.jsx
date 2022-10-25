import React, { Suspense, lazy } from 'react'
const LazyCurrentEmployees = lazy(() => import('./CurrentEmployees'))

const AsyncCurrentEmployees = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyCurrentEmployees />
      </Suspense>
    </div>
  )
}

export default AsyncCurrentEmployees
