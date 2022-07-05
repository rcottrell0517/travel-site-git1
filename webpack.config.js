// module.exports = {
//   entry: "./app/assets/scripts/App.js",
// };

// Above code bundled a dist folder with a file called main.

const path = require("path");

// module.exports = {
//   entry: "./app/assets/scripts/App.js",
//   output: {
//     filename: "bundled.js",
//     path: path.resolve(__dirname, "app"),
//   },
//   mode: "development",
//   watch: true,
// };

// Modified to work with our CSS
// module.exports = {
//   entry: "./app/assets/scripts/App.js",
//   output: {
//     filename: "bundled.js",
//     path: path.resolve(__dirname, "app"),
//   },
//   mode: "development",
//   watch: true,
//   module: {
//     rules: [
//       {
//         test: /\.css/i,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
// };

// Modified to work with our CSS & PostCSS
// const postCSSPlugins = [
//   require("postcss-simple-vars"),
//   require("postcss-nested"),
//   require("autoprefixer"),
// ];

// Modified to work with postcss-import
const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
];

// module.exports = {
//   entry: "./app/assets/scripts/App.js",
//   output: {
//     filename: "bundled.js",
//     path: path.resolve(__dirname, "app"),
//   },
//   mode: "development",
//   watch: true,
//   module: {
//     rules: [
//       {
//         test: /\.css/i,
//         use: [
//           "style-loader",
//           "css-loader",
//           {
//             loader: "postcss-loader",
//             options: { postcssOptions: { plugins: postCSSPlugins } },
//           },
//         ],
//       },
//     ],
//   },
// };

// Modified to use webpack devServer lesson 20
// module.exports = {
//   entry: "./app/assets/scripts/App.js",
//   output: {
//     filename: "bundled.js",
//     path: path.resolve(__dirname, "app"),
//   },
//   devServer: {
//     contentBase: path.join(__dirname, "app"),
//     // static: "./app", // found this solution
//     hot: true,
//     port: 3000,
//     host: "0.0.0.0",
//   },
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.css/i,
//         use: [
//           "style-loader",
//           "css-loader",
//           {
//             loader: "postcss-loader",
//             options: { postcssOptions: { plugins: postCSSPlugins } },
//           },
//         ],
//       },
//     ],
//   },
// };

// Was not reloading
module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },
  devServer: {
    before: function (app, server) {
      server._watch("./app/**/*.html");
    },
    contentBase: path.join(__dirname, "app"),
    hot: true,
    port: 3000,
    host: "0.0.0.0",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: { postcssOptions: { plugins: postCSSPlugins } },
          },
        ],
      },
    ],
  },
};

// Solution from the questions for lesson 20
// module.exports = {
//   entry: "./app/assets/scripts/App.js",
//   output: {
//     filename: "bundled.js",
//     path: path.resolve(__dirname, "app"),
//   },
//   devServer: {
//     watchFiles: ["./app/**/*.html"],
//     static: {
//       directory: path.join(__dirname, "app"),
//       watch: false,
//     },
//     hot: true,
//     port: 3000,
//     host: "0.0.0.0",
//   },
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.css/i,
//         use: [
//           "style-loader",
//           "css-loader",
//           {
//             loader: "postcss-loader",
//             options: { postcssOptions: { plugins: postCSSPlugins } },
//           },
//         ],
//       },
//     ],
//   },
// };
