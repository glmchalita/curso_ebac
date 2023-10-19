<script setup>
import { reactive } from "vue";
import MathHeader from "./components/MathHeader.vue";
import MathForm from "./components/MathForm.vue";

const state = reactive({
  filter: "addition",
  num1: "",
  num2: "",
  result: "",
  operator: "",
});

const addition = () => {
  state.operator = "+";
  state.result = state.num1 + state.num2;
  return state.result;
};

const subtraction = () => {
  state.operator = "-";
  state.result = state.num1 - state.num2;
  return state.result;
};

const multiplication = () => {
  state.operator = "*";
  state.result = state.num1 * state.num2;
  return state.result;
};

const division = () => {
  state.operator = "/";
  state.result = state.num1 / state.num2;
  return state.result;
};

const changeOperation = () => {
  switch (state.filter) {
    case "subtraction":
      return subtraction();
    case "multiplication":
      return multiplication();
    case "division":
      return division();
    default:
      return addition();
  }
};
console.log(state.num1);
</script>

<template>
  <div class="container">
    <MathHeader />
    <MathForm
      :first-num="(event) => (state.num1 = Number(event.target.value))"
      :second-num="(event) => (state.num2 = Number(event.target.value))"
      :operator="state.operator"
      :change-operation="(event) => (state.filter = event.target.value)"
      :result="changeOperation()"
    />
  </div>
</template>

<style scoped></style>
