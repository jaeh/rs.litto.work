const main = async () => {
  const {
    sandbox
  } = await import('https://staging.artificialmuseum.com/rs.js');
  const onLoadObjectButtonClick = await sandbox();
  const artifactButtons = document.getElementsByClassName('show-artifact');
  Array.from(artifactButtons).forEach(button => {
    button.addEventListener('click', evt => {
      const artifact = window.APP_DB.artifacts.find(a => a.title === evt.target.dataset.title);
      // console.log('load in main.js', artifact)

      onLoadObjectButtonClick({
        artifact: artifact.config,
        button
      })();
    });
  });
};
main();
