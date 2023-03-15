const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: "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",
});

const createFile = async (owner, repo, path, message, content, branch) => {
  const contentBase64 = Buffer.from(content).toString("base64");
  try {
    const { data } = await octokit.rest.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message,
      content: contentBase64,
      branch,
    });
    console.log("File created successfully.");
    return data;
  } catch (error) {
    console.error("Error creating file:", error);
    throw error;
  }
};

(async () => {
  const owner = "aashayk18";
  const repo = "Project-X";
  const path = "Test/test.txt";
  const message = "Add new file";
  const content = "Hello world!";
  const branch = "main";

  try {
    await createFile(owner, repo, path, message, content, branch);
  } catch (error) {
    console.error("Error:", error);
  }
})();
