import { mount } from "@vue/test-utils";
import Counter from "../Counter.vue";

const wrapper = mount(Counter);

describe("Counter.vue", () => {
  test("clicking button increments the counter value by 1", async () => {
    expect(wrapper.text()).toContain(0);
    wrapper.find("#count-up").trigger("click");
    await wrapper.vm.$nextTick() // wrrapper.vm = this
    expect(wrapper.text()).toContain(1);
  });
});
