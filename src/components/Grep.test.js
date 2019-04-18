import React from "react"
import { GrepTags } from "./Grep.js"

describe("Grep component", () => {
  it("should parse a markdown prop", () => {
    const tagsArray = GrepTags()
    expect(tagsArray).toBe("1")
  })
})
