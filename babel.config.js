module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./assets",
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@language": "./src/language",
            "@constans": "./src/constans",
          },
        },
      ],
    ],
  };
};
