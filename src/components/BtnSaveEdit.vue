<template>
  <div class="btn--save__edit">
    <button>Сохранить изменения</button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.btn--save__edit {
  display: flex;
  justify-content: end;
  align-items: center;
  button {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 5px 10px;
    border-radius: 5px;
    background: white;
    color: rgb(91 173 201);
    font-weight: 700;
    border: 1px solid rgb(91 173 201);
    cursor: pointer;
    font-size: 15px;
    transition: all 0.2s ease;
    @media (max-width: 430px) {
      font-size: 12px;
    }
    &:hover {
      background-color: rgb(91, 173, 201);
      color: white;
      transition: all 0.2s ease;
    }
    &:active {
      scale: 1.1;
    }
  }
}
</style>
