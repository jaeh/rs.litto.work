export const View = state => {
  const years = Object.entries(state.artifacts)

  return [
    Picture({ name: '/img/hero', height: 1500, width: 2000 }),

    Announcement(state.announcement),

    // years.map(([year, artifacts]) => [
    //   Picture({ name: `/img/graphic_${year}`, height: 1180, width: 1920 }),
    //   h2(year),
    //   div(artifacts.map(ArtifactListItem)),
    // ]),
  ]
}