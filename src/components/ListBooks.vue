<template>
  <div class="add-book__list" v-if="checkListBooks.length > 0">
    <FilterBooks :books="checkListBooks" @filteredBooks="filterByIntegration" />

    <h3 class="add-book__list-title">Список книг</h3>

    <div class="add-book__block">
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
      <AlphabetFilter
        :books="integrationFilteredBooks"
        @filteredByAlphabet="updateBooks"
        class="add-book__alphabet"
      />
    </div>
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
import FilterBooks from "./FilterBooksBySeller.vue";
import AlphabetFilter from "./AlphabetFilter.vue";

export default {
  components: {
    Pagination,
    FilterBooks,
    AlphabetFilter,
  },
  data() {
    return {
      books: [],
      integrationFilteredBooks: [],
      filteredBooks: [],
      currentPage: 1,
      itemsPerPage: 20,
    };
  },
  computed: {
    checkListBooks() {
      const book = localStorage.getItem("listBooks");
      this.books = JSON.parse(book) || [];
      return this.books;
    },
    totalPages() {
      return Math.ceil(this.filteredBooks.length / this.itemsPerPage);
    },
    paginatedBooks() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredBooks.slice(start, end);
    },
  },
  methods: {
    filterByIntegration(filteredBooks) {
      this.integrationFilteredBooks = filteredBooks;
      this.updateBooks(filteredBooks); // Reset the alphabet filter after integration filter
    },
    updateBooks(filteredBooks) {
      this.filteredBooks = filteredBooks;
      this.currentPage = 1; // Reset to the first page when filtering
    },
  },
  watch: {
    books() {
      this.integrationFilteredBooks = this.books;
      this.filteredBooks = this.books; // Initialize both filters with all books on load
    },
  },
  mounted() {
    this.integrationFilteredBooks = this.books;
    this.filteredBooks = this.books;
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
      @media (max-width: 480px) {
      }
    }
  }
  &__block {
    display: flex;
    justify-content: center;
    align-items: normal;
    & ul {
      width: 100%;
      margin-right: 25px;
      @media (max-width: 690px) {
        order: 1;
        margin-right: 0;
      }
    }
    @media (max-width: 690px) {
      flex-flow: wrap;
    }
  }
  &__alphabet {
    @media (max-width: 690px) {
      order: 0;
    }
  }
}
</style>
