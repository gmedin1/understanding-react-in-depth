module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // default = "classic"; use "automatic" to dynamically import React from 'react'. This will have compilation consequences.
      },
    ],
  ],
};
