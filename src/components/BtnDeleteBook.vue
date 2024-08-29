<template>
  <div class="btn--delete__edit">
    <button>Удалить книгу</button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.btn--delete__edit {
  display: flex;
  justify-content: end;
  align-items: center;
  button {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 5px 10px;
    border-radius: 5px;
    background: white;
    color: rgb(201 91 91);
    font-weight: 700;
    border: 1px solid rgb(201 91 91);
    cursor: pointer;
    font-size: 15px;
    transition: all 0.2s ease;
    @media (max-width: 430px) {
      font-size: 12px;
    }
    &:hover {
      background-color: rgb(201 91 91);
      color: white;
      transition: all 0.2s ease;
    }
    &:active {
      scale: 1.1;
    }
  }
}
</style>
