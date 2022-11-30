import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Stepper from "../Stepper.vue";

test("Stepper", async () => {
  const wrapper = mount(Stepper, {
    props: {
      max: 3,
    },
  });
  expect(wrapper.find("p").text()).toContain(0);
  await expect(wrapper.find("button").trigger("click"));
  expect(wrapper.find("p").text()).toContain(1);
  await expect(wrapper.find("button").trigger("click"));
  expect(wrapper.find("p").text()).toContain(2);
  await expect(wrapper.find("button").trigger("click"));
  expect(wrapper.find("p").text()).toContain(3);
  await expect(wrapper.find("button").trigger("click"));
  expect(wrapper.find("p").text()).toContain(3);
});
