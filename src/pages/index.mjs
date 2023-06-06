export const View = state => {
  const years = Object.entries(state.artifacts)

  return [
    Picture({ name: '/img/hero', height: 1000, width: 2000 }),

    Announcement(),

    years.map(([year, artifacts]) => Year({ year, artifacts })),
  ]
}
