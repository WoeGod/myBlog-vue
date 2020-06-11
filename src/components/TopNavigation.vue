<template>
  <div class="top-navigation">
    <div class="nav-wrapper">
      <ul class="nav-left">
        <li class="nav-item">首页</li>
        <li class="nav-item">归档</li>
        <li class="nav-item">标签</li>
        <li class="nav-item">关于</li>
      </ul>

      <ul class="nav-right">
        <li class="nav-item">
          <i class="icon icon-icon-test1"></i>
        </li>
        <li class="nav-item">
          <i class="icon icon-icon-test"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top-navigation{
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
}
.nav-wrapper {
  width: 1190px;
  height: 60px;
  margin: 0 auto;
}

.nav-item {
  height: 60px;
  line-height: 60px;
  padding: 0 10.5px;
}

ul li {
  float: left;
}

.nav-right {
  float: right;
}
</style>