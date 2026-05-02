"use client"
import { useState } from "react"

export function Dashboard() {
  const [input, setInput] = useState("")
  const [plugs, setPlugs] = useState<string[]>([])

  const onAddPlug = () => {
    if (!input.trim()) return

    setPlugs((prev) => [...prev, input])
    setInput("")
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <input className="w-64 h-12 px-3 bg-green-200" placeholder="add plug content"
        value={input}
        onChange={(e) => setInput(e.target.value)}/>

      <button onClick={onAddPlug}>Add Plug</button>

      <div>
        {plugs.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  )
}