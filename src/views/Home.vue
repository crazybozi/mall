<template>
  <div class="home">
    <div>
      <i class="iconfont icon-user"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
//lang属性代表用什么预处理，scoped属性代表作用域
<style lang="less" scoped>
.home {
  div{
    background-color: grey;
    width: 150px;
    height: 150px;
    font-size: 18px;
  }
  i{
    color: red;
  }

}
</style>
