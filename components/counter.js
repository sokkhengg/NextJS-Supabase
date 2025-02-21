'use client'

import { useState } from "react"


export default function Coutner() {
    const [count, setCount] = useState(0)
    setTimeout(() => setCount(count + 1), 1000)
  return (
    <div>{count}</div>
  )
}
