<template>
  <div class="index">
    <header>
     <top-navigation></top-navigation>
    </header>
    <main>
      <main-left></main-left>
    </main>
  </div>
</template>

<script>
import TopNavigation from 'components/TopNavigation'
import MainLeft from 'components/MainLeft'

export default {
  name: 'index',
  components: {
    TopNavigation,
    MainLeft
  }
}
</script>

<style scoped>

</style>