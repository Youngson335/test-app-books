<template>
  <div class="add-book__list" v-if="checkListBooks.length > 0">
    <h3 class="add-book__list-title">Список книг</h3>
    <ul>
      <li
        v-for="(book, index) in paginatedBooks"
        :key="index"
        class="add-book__list-item"
      >
        {{ book.name }} (Селлер: {{ book.seller }}, Интеграция:
        {{ book.integration }})
      </li>
    </ul>
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @update:currentPage="currentPage = $event"
    />
  </div>
  <div v-else>
    <h3>У вас нет добавленных книг!</h3>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      books: [],
      currentPage: 1,
      itemsPerPage: 20,
    };
  },
  computed: {
    checkListBooks() {
      let book = localStorage.getItem("listBooks");
      this.books = JSON.parse(book) || [];
      return this.books;
    },
    totalPages() {
      return Math.ceil(this.books.length / this.itemsPerPage);
    },
    paginatedBooks() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.books.slice(start, end);
    },
  },
};
</script>

<style lang="scss">
ul {
  padding-bottom: 90px;
}
.add-book {
  &__list {
    &-title {
      font-size: 25px;
      margin-bottom: 10px;
      text-align: start;
    }
    &-item {
      text-align: start;
      margin-bottom: 10px;
      font-size: 18px;
      background: rgba(91, 173, 201, 0.46);
      padding: 15px;
      max-width: 600px;
      border-radius: 10px;
      box-sizing: border-box;
      color: white;
      font-weight: 600;
    }
  }
}
</style>
