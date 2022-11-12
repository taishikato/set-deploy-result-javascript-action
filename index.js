const core = require("@actions/core");
const github = require("@actions/github");

try {
  const deployResultMessage = core.getInput("deploy-result-message");
  console.log("deployResultMessage", `${deployResultMessage}!`);

  try {
    const shapedMessage = deployResultMessage.replace(/('|"|`)/g, "$&$&");
    core.setOutput("error", shapedMessage);
    core.setOutput("appId", github.event.client_payload.apiId);
    console.log({ shapedMessage });
  } catch (e) {
    console.log("error occurred");
    console.log(e);
  }
} catch (error) {
  core.setFailed(error.message);
}
