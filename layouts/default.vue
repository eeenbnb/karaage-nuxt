<template>
  <div class="main">
    <karaage-header />
      <div class="main__routing">
        <Nuxt />
      </div>
    <karaage-footer />
  </div>
</template>

<style lang="scss">
  .main{
    min-height: 100vh;
    &__routing{
      min-height: calc(100vh - (var(--size-header) * 2) - (var(--size-itemDistanceMargin) * 2) );
      margin: var(--size-itemDistanceMargin);
    }
  }
</style>
