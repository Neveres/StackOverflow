export = StackOverflow
export as namespace StackOverflow

declare namespace StackOverflow {
  declare namespace AppContext {
    type State = {
      searchTag: string
      selectedTag: string
      page: numer
    }

    type Action = State & {
      type: string
    }

    type Actions = {
      setSearchTag(searchTag: string): void
      setSelectedTag(selectedTag: string): void
      setPage(page: number): void
    }
  }
}
