const path = require("path"); // //引用path模組
module.exports = {
  entry: ["./index.js", "./app.jsx"], //如果有一個以上的檔案需要打包，可以傳陣列給entry
  output: {
    filename: "bundle.js", // 打包後的檔案名稱
    path: path.resolve(__dirname, "./"), //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
  },

  devServer: {
    hot: true,
  },
  //將loader的設定寫在module的rules屬性中
  module: {
    //rules的值是一個陣列可以存放多個loader物件
    rules: [
      {
        // 編譯 JSX
        test: /.jsx$/, // 指定編譯檔案的副檔名
        exclude: /node_modules/,
        /* 不編譯的路徑，因為我們不會把node_nodules資料夾放到serve，所以不需要編譯他。*/
        use: {
          // 指定用來編譯符合副檔名條件的loader
          loader: "babel-loader", // 指定進行編譯的套件
          options: { presets: ["@babel/preset-react", "@babel/preset-env"] }, // 指定loader套件中的presets
        },
      },
      {
        // 編譯 ES6
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
      {
        // 編譯 css 樣式檔
        test: /\.css$/,
        loader: ["style-loader", "css-loader"],
      },
    ],
  },
};
