import { render, screen } from "@testing-library/react"
import React from "react"
import NavbarContainer from "./navbar-container"

describe("navbar container test", () => {
  it("should render the container", () => {
    render(<NavbarContainer />)
    expect(
      screen.getByText("Navbar container")
    ).toBeInTheDocument()
  })
})
