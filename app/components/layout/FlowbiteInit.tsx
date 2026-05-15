"use client"

import { useEffect } from "react"

export default function FlowbiteInit() {
  useEffect(() => {
    void import("flowbite").then(({ initFlowbite }) => {
      initFlowbite()
    })
  }, [])

  return null
}