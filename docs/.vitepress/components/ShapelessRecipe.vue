<template>
  <ShapedRecipe
    :a1="useIngredients.a1"
    :b1="useIngredients.b1"
    :c1="useIngredients.c1"
    :a2="useIngredients.a2"
    :b2="useIngredients.b2"
    :c2="useIngredients.c2"
    :a3="useIngredients.a3"
    :b3="useIngredients.b3"
    :c3="useIngredients.c3"
    :output="output"
    :count="count"
    :shapeless="true"
  />
</template>

<script>
export default {
  name: "ShapelessRecipe",
  props: {
    ingredients: {
      type: Array,
      default: [],
    },
    count: {
      type: Number,
      default: 1,
    },
    output: String,
  },
  computed: {
    useIngredients() {
      var ing = this.ingredients;
      var args = {
        a1: undefined,
        b1: undefined,
        c1: undefined,
        a2: undefined,
        b2: undefined,
        c2: undefined,
        a3: undefined,
        b3: undefined,
        c3: undefined,
      };
      if (ing[0]) {
        if (ing[6]) {
          args = {
            a1: ing[0],
            b1: ing[1],
            c1: ing[2],
            a2: ing[3],
            b2: ing[4],
            c2: ing[5],
          };
          if (ing[7]) {
            // ◼◼◼      ◼◼◼
            // ◼◼◼  OR  ◼◼◼
            // ◼◼◼      ◼◼◻
            args.a3 = ing[6];
            args.b3 = ing[7];
            args.c3 = ing[8];
            if (ing[8]) {
              args = {
                a1: ing[0],
                b1: ing[1],
                c1: ing[2],
                a2: ing[3],
                b2: ing[4],
                c2: ing[5],
                a3: ing[6],
                b3: ing[7],
                c3: ing[8],
              };
            }
          } else {
            args.b3 = ing[6];
          }
        } else if (ing[1]) {
          args.a2 = ing[0];
          args.b2 = ing[1];
          if (ing[4]) {
            // ◻◻◻      ◻◻◻
            // ◼◼◼  OR  ◼◼◼
            // ◼◼◼      ◼◼◻
            args.c2 = ing[2];
            args.a3 = ing[3];
            args.b3 = ing[4];
            args.c3 = ing[5];
          } else if (ing[3]) {
            // ◻◻◻
            // ◼◼◻
            // ◼◼◻
            args.a3 = ing[2];
            args.b3 = ing[3];
          } else {
            // ◻◻◻      ◻◻◻
            // ◼◼◻  OR  ◼◼◻
            // ◻◼◻      ◻◻◻
            args.b3 = ing[2];
          }
        } else {
          // ◻◻◻
          // ◻◼◻
          // ◻◻◻
          args.b2 = ing[0];
        }
      }

      return args;
    },
  },
};
</script>

<style scoped></style>
