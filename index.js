const core = require("@actions/core");

try {
  const deployResultMessage = core.getInput("deploy-result-message");
  console.log("deployResultMessage", `${deployResultMessage}!`);

  try {
    const shapedMessage = deployResultMessage.replace(/('|")/g, "\\$&");
    console.log({ shapedMessage });
    core.setOutput("DEPLOY_MESSAGE", shapedMessage);
  } catch (e) {
    console.log("error occurred");
    console.log(e);
  }
} catch (error) {
  core.setFailed(error.message);
}
