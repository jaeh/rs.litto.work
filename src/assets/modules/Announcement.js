export const View = () =>
  div({ class: 'Announcement' }, [
    Picture({ name: '/img/branding', height: 237, width: 800 }),

    p(['Augmented Reality Installation by ', Link({ to: 'https://litto.work/' }, 'litto')]),
    p('@Medienwerkstatt'),
    p('Neubaugasse 40a, 1070 Vienna'),
    p('25.06. - 29.06. / 5pm - 8pm'),
    p('Vernissage: 24.06. / 7pm'),
    p('Finissage: 30.06. / 7pm'),

    div({ class: 'description' }, [
      'Reterritorialized Spaces is a hybrid performance in public space ',
      'entailing one performer projecting real space into virtual space ',
      'by scanning with a LIDAR scanner through a mirror. ',
      'The mirror breaks the geometric and perspective properties of space, ',
      'resulting in experimental forms of spatial perception. ',
      'In addition, the movement of the performer and the interaction ',
      'with the audience influence the course of the performance. ',
      'A virtual monument accessible with augmented reality on the ',
      Link({ to: 'https://artificialmuseum.com/' }, 'artificialmuseum.com'),
      ' will remain.',
    ]),
  ])

export const style = {
  margin: '3em 1em',

  picture: {
    img: {
      maxWidth: '800px',
    },
  },

  p: {
    fontSize: '1.5em',
    fontStyle: 'italic',
  },

  '.description': {
    margin: '10em 0 0',
    fontSize: '1.2em',
  },
}
