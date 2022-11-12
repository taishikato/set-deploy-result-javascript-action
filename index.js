const core = require("@actions/core");

try {
  // `who-to-greet` input defined in action metadata file
  const deployResultMessage = core.getInput("deploy-result-message");
  console.log("deployResultMessage", `${deployResultMessage}!`);

  try {
    const shapedMessage = deployResultMessage.replace(/('|")/g, "\\$&");
    console.log("shapedMessage", shapedMessage);

    console.log("write end");
  } catch (e) {
    console.log(e);
  }

  core.setOutput("DEPLOY_MESSAGE", shapedMessage);
} catch (error) {
  core.setFailed(error.message);
}
