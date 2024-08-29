<template>
  <div class="btn--reset">
    <button>Сбросить фильтр</button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
button {
  background-color: rgba(178, 178, 178, 0.27);
  color: #3d3d3d;
  border: none;
  transition: all 0.2s ease;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 3px 10px;
  font-size: 16px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  &:active {
    scale: 1.07;
    transition: all 0.2s ease;
    background-color: #3d3d3d6c;
  }
}
</style>
