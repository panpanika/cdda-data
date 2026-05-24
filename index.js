import run from "./pull-data.mjs";
import { Octokit } from "octokit";

// console.log("tok: ", process.env.GITHUB_TOKEN);

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

await run({
  github: octokit,
  context: {
    repo: { owner: "panpanika", repo: "cdda-data" },
  },
  dryRun: false //!process.env.GITHUB_TOKEN,
});
