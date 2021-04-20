module.exports = {
  plugins: {
    autoprefixer: { browsers: ["Android >= 4.0", "iOS >= 7"] },
    "postcss-pxtorem": { 
        // vant-UI的官方根字体大小是37.5
        rootValue: 37.5, 
        propList: ["*"] },
        
  },
};
//大写的 PX，可以避开被编译成 rem 单位，用在字体和圆角上比较方便。
