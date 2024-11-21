"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CustomTimer() {
  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [inputHours, setInputHours] = useState("")
  const [inputMinutes, setInputMinutes] = useState("")
  const [inputSeconds, setInputSeconds] = useState("")

  useEffect(() => {
    let interval: Timer | null = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (time === 0) {
      setIsActive(false)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, time])

  const handleStart = () => {
    if (time > 0) {
      setIsActive(true)
    }
  }

  const handlePause = () => {
    setIsActive(false)
  }

  const handleReset = () => {
    setIsActive(false)
    setTime(0)
    setInputHours("")
    setInputMinutes("")
    setInputSeconds("")
  }

  const handleSetTime = () => {
    const hours = parseInt(inputHours, 10) || 0
    const minutes = parseInt(inputMinutes, 10) || 0
    const seconds = parseInt(inputSeconds, 10) || 0

    const totalSeconds = hours * 3600 + minutes * 60 + seconds

    if (totalSeconds > 0) {
      setTime(totalSeconds)
    }
  }

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Timer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-6xl font-bold text-center mb-4">
          {formatTime(time)}
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <Input
            type="number"
            placeholder="Hours"
            value={inputHours}
            onChange={(e) => {
              setInputHours(e.target.value);
              handleSetTime()
            }}
            min="0"
            max="23"
          />
          <Input
            type="number"
            placeholder="Minutes"
            value={inputMinutes}
            onChange={(e) => {
              setInputMinutes(e.target.value);
              handleSetTime()
            }}
            min="0"
            max="59"
          />
          <Input
            type="number"
            placeholder="Seconds"
            value={inputSeconds}
            onChange={(e) => {
              setInputSeconds(e.target.value);
              handleSetTime()
            }}
            min="0"
            max="59"
          />
        </div>
        <div className="flex justify-center gap-2 mb-4">
          <Button onClick={handleSetTime}>Set Timer</Button>
        </div>
        <div className="flex justify-center gap-2">
          {!isActive ? (
            <Button onClick={handleStart} disabled={time === 0}>
              Start
            </Button>
          ) : (
            <Button onClick={handlePause}>Pause</Button>
          )}
          <Button onClick={handleReset}>Reset</Button>
        </div>
      </CardContent>
    </Card>
  )
}