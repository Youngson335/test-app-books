<template>
  <div class="noActive">
    <button disabled>Пункт</button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 5px 10px;
  border-radius: 5px;
  background: rgb(230 234 235);
  color: rgb(91 173 201);
  font-weight: 700;
  border: 1px solid rgb(91 173 201);
  cursor: not-allowed;
  font-size: 15px;
  transition: all 0.2s ease;
  width: 150px;
  opacity: 0.5;
}
</style>
