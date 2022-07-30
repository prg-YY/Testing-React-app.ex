import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe("Async Component", () => {
  test("renders posts if request seccedds", async () => {
    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 1, title: "First Post" }],
    })
    //Arrange
    render(<Async />)

    const listItemEl = await screen.findAllByRole("listitem")
    expect(listItemEl).not.toHaveLength(0)
  })
})
