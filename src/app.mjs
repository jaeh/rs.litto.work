export const state = {
  title: '@magic',
  description: 'hello, world',

  announcement: {
    list: [
      'Augmented Reality Installation',
      '@Medienwerkstatt',
      'Neubaugasse 40a, 1070 Vienna',
      '17.06. - 30.06. / 5pm - 8pm',
      'Opening: 16.06. / 19pm',
    ],

    description: [
      'Reterritorialized Spaces is a hybrid performance in public space ',
      'entailing one performer projecting real space into virtual space ',
      'by scanning with a LIDAR scanner through a mirror. ',
      'The mirror breaks the geometric and perspective properties of space, ',
      'resulting in experimental forms of spatial perception. ',
      'In addition, the movement of the performer and the interaction ',
      'with the audience influence the course of the performance. ',
      'A virtual monument accessible with augmented reality on the ',
      { to: 'https://artificialmuseum.com/', text: 'artificialmuseum.com'},
      ' will remain.',
    ],
  },

  artifacts: {
    2021: [
      {
        title: 'MESSEHALLE, Basel',
        date: '2021-08-27',
        lat: 47.5651,
        lng: 7.6011,
      },
      {
        title: 'LANDESSTELLE, Basel',
        date: '2021-08-27',
        lat: 47.5779,
        lng: 7.5858,
      },
      {
        title: 'SANDKASTEN, Vienna',
        date: '2021-08-03',
        lat: 48.2181,
        lng: 16.3330,
      },
    ],

    2022: [
      {
        title: 'SCHLANDERS, South Tirol',
        date: '2022-07-25',
        lat: 46.6278,
        lng: 10.7662,
      },
      {
        title: 'SEMMELWEISKLINIK, Vienna',
        date: '2022-07-25',
        lat: 48.2362,
        lng: 16.3205,
      },
      {
        title: 'SCHMIEDE HALLEIN, Salzburg',
        date: '2022-07-25',
        lat: 47.6847,
        lng: 13.0930,
      },
      {
        title: 'HELLERAU, Dresden',
        date: '2022-07-25',
        lat: 51.1135,
        lng: 13.7530,
      },
    ],
  },
}
