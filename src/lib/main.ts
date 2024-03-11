import { ENGINE_URL } from './URLS'
import { artifacts } from './artifacts'

const main = async () => {
  const { sandbox } = await import(`${ENGINE_URL}/rs.js`)

  const onLoadObjectButtonClick = await sandbox()

  const artifactButtons = document.getElementsByClassName('show-artifact')

  Array.from(artifactButtons).forEach((button: Element) => {
    button.addEventListener('click', evt => {
      const target: HTMLButtonElement = evt.target as HTMLButtonElement

      const artifact = artifacts.find(a => a.title === target.dataset.title)
      // console.log('load in main.js', artifact)

      if (!artifact) {
        console.error('undefined artifact detected')
        return
      }

      onLoadObjectButtonClick({ artifact: artifact.config, button })()
    })
  })
}

main()
