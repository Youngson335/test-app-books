<template>
  <div class="filter-books">
    <label class="filter-books__label">Фильтр по интеграции:</label>
    <div class="filter-books__buttons">
      <button
        :class="{ active: filterType === 'reels' }"
        @click="applyFilter('reels')"
        class="filter-books__button"
      >
        Reels
      </button>
      <button
        :class="{ active: filterType === 'stories' }"
        @click="applyFilter('stories')"
        class="filter-books__button"
      >
        Stories
      </button>
      <BtnResetFilter @click="resetFilter" />
    </div>
  </div>
</template>

<script>
import BtnResetFilter from "../components/BtnResetFilter.vue";

export default {
  components: {
    BtnResetFilter,
  },
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filterType: "", // Текущий выбранный фильтр
    };
  },
  computed: {
    // Фильтруем книги на основе типа интеграции
    filteredBooks() {
      if (this.filterType) {
        return this.books.filter(
          (book) => book.integration === this.filterType
        );
      }
      return this.books;
    },
  },
  methods: {
    applyFilter(type) {
      this.filterType = type;
      this.emitFilteredBooks();
    },
    resetFilter() {
      this.filterType = "";
      this.emitFilteredBooks();
    },
    // Генерация события с отфильтрованными книгами
    emitFilteredBooks() {
      this.$emit("filteredBooks", this.filteredBooks);
    },
  },
  watch: {
    // Пересчитываем фильтрованные книги при изменении списка книг
    books() {
      this.emitFilteredBooks();
    },
  },
  mounted() {
    this.emitFilteredBooks();
  },
};
</script>

<style scoped lang="scss">
.filter-books {
  margin-bottom: 20px;
  &__label {
    font-weight: 600;
    text-align: start;
    width: 100%;
    display: flex;
    margin-bottom: 5px;
  }
  &__buttons {
    display: flex;
    gap: 10px;
    button {
      font-family: Avenir, Helvetica, Arial, sans-serif;
    }
  }
  &__button {
    padding: 3px 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid rgb(91 173 201 / 66%);
    outline: none;
    color: rgb(91, 173, 201);
    font-weight: 600;
    background-color: white;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    &.active {
      background: rgb(91, 173, 201);
      color: white;
    }
    @media (max-width: 550px) {
      font-size: 15px;
    }
  }
}
</style>
