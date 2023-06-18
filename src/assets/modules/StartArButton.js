export const View = state => {
  if (!state.config) {
    return
  }

  return [button({ onclick: actions.startarbutton.click, 'data-title': state.title }, 'test'), div(JSON.stringify(state))]
}

export const actions = {
  startarbutton: {
    click: (state, evt) => {
      state.loading = true
      const { target } = evt

      const title = target.dataset.title

      let artifact
      if (!artifact) {
        artifact = state.artifacts['2021'].find(a => a.title === title)
      }
      if (!artifact) {
        artifact = state.artifacts['2022'].find(a => a.title === title)
      }
      if (!artifact) {
        artifact = state.artifacts['2023'].find(a => a.title === title)
      }

      return [{ ...state }, [effects.startarbutton.click, artifact]]
    },
    done: state => {
      state.loading = false

      return { ...state }
    },
  },
}

export const effects = {
  startarbutton: {
    click: async (dispatch, props) => {
      window.APP_DB = {
        SCENE_TYPES: {},
      }

      const { sandbox } = await import('http://localhost:8000/sandbox.js')

      await sandbox({ artifact: props.config })

      dispatch(actions.startarbutton.done)
    },
  },
}
