<template>
  <div class="alphabet-filter">
    <label class="alphabet-filter__label">Фильтр по алфавиту:</label>
    <div class="alphabet-filter__buttons">
      <button
        v-for="letter in russianAlphabet"
        :key="letter"
        :class="{ active: selectedLetter === letter }"
        @click="applyFilter(letter)"
        class="alphabet-filter__button"
      >
        {{ letter }}
      </button>

      <BtnResetFilter v-if="selectedLetter" @click="resetFilter" />
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
      selectedLetter: "",
      russianAlphabet: "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split(""),
    };
  },
  methods: {
    applyFilter(letter) {
      this.selectedLetter = letter;
      this.filterBooks();
    },
    resetFilter() {
      this.selectedLetter = "";
      this.filterBooks();
    },
    filterBooks() {
      let filteredBooks = this.books;
      if (this.selectedLetter) {
        filteredBooks = this.books.filter((book) =>
          book.name.startsWith(this.selectedLetter)
        );
      }
      this.$emit("filteredByAlphabet", filteredBooks);
    },
  },
  watch: {
    books() {
      this.filterBooks();
    },
  },
  mounted() {
    this.filterBooks();
  },
};
</script>

<style scoped lang="scss">
.alphabet-filter {
  margin-bottom: 20px;
  max-width: 30%;
  @media (max-width: 690px) {
    max-width: 100%;
  }
  &__label {
    font-weight: 600;
    margin-bottom: 10px;
    display: block;
    text-align: start;
  }
  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    justify-content: end;
    @media (max-width: 690px) {
      justify-content: start;
    }
  }
  &__button {
    padding: 3px 18px;
    font-size: 14px;
    border-radius: 5px;
    outline: none;
    color: rgb(91, 173, 201);
    font-weight: 600;
    background-color: white;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    border: 1px solid rgba(91, 173, 201, 0.66);
    &.active {
      background: rgb(91, 173, 201);
      color: white;
    }
  }
}
</style>
