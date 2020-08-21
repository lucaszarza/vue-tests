<template>
  <div class="parent">
    <div class="teste">
      <span>{{ count }}</span>

      <div class="buttons">
        <button
          id="count-up"
          class="btn btn-outline-dark btn-lg"
          @click.prevent="increment"
        >
          Count Up</button
        ><button
          id="count-down"
          class="btn btn-outline-dark btn-lg"
          @click.prevent="decrement"
        >
          Count Down</button
        ><button
          id="reset"
          class="btn btn-outline-dark btn-lg"
          @click.prevent="reset"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment: function() {
      this.count += 1;
    },
    decrement: function() {
      this.count -= 1;
    },
    reset: function() {
      this.count = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.parent {
  display: grid;
  place-items: center;

  background: $--color-body;
  width: 100%;
  height: 100%;

  resize: none;
  overflow: auto;

  .teste {
    padding: 0.5rem;
    border-radius: 10px;
    border: none;
    background: $--color-bg-featured-label;
    font-size: 2rem;
    text-align: center;
    width: calc(25%);
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;
    
    > span {
      color: $--color-elements-one;
      margin: 0 30px 15px;
      font-size: 2rem;
      font-weight: bold;
    }

    button {
      color: $--color-elements-two;
      margin: 0px 15px 0 15px;
    }
  }
}
</style>
