<template>
  <div>
    base
  </div>
</template>

<script>
import { post, getUrl } from '@/service'
export default {
  created() {
    const url = getUrl('fondsList')
    post(url, {
    }).then(res => {
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
