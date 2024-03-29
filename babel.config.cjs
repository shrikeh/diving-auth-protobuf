const fs = require("fs");
const { createMatchPath, loadConfig } = require("tsconfig-paths");
const {
  resolvePath: defaultResolvePath,
} = require("babel-plugin-module-resolver");

const configLoaderResult = loadConfig();

const extensions = [".js", ".ts" ];

const configLoaderSuccessResult =
  configLoaderResult.resultType === "failed" ? null : configLoaderResult;

const matchPath =
  configLoaderSuccessResult &&
  createMatchPath(
    configLoaderSuccessResult.absoluteBaseUrl,
    configLoaderSuccessResult.paths,
  );

const moduleResolver = configLoaderSuccessResult && [
  "module-resolver",
  {
    extensions,
    resolvePath: (sourcePath, currentFile, opts) => {
      if (matchPath) {
        try {
          return matchPath(sourcePath, require, fs.existsSync, extensions);
        } catch(e) {
        }
      }

      return defaultResolvePath(sourcePath, currentFile, opts);
    },
  },
];

module.exports = {
  presets: [
    ["@babel/preset-env",
      {
      "targets": {
        "browsers": [
          "> 5%, last 3 major versions"
        ],
        "node": "current"
      }
    }],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        "root": "./",
        "extensions": [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".js",
          ".json"
        ]
      }
    ],
    // optionally include
    ...(moduleResolver ? [moduleResolver] : []),
  ],
};
