<template>
  <div class="posted">
    <button @click="addBook" class="posted--btn">Выложить книгу</button>
  </div>
</template>
<script>
export default {
  methods: {
    addBook() {
      this.$emit("addedBook", true);
    },
  },
};
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
  cursor: pointer;
  font-size: 15px;
  transition: all 0.2s ease;
  width: 100%;
  max-width: 150px;
  &:hover {
    background-color: rgb(91, 173, 201);
    color: white;
    transition: all 0.2s ease;
  }
  &:active {
    scale: 1.1;
  }
}
</style>
