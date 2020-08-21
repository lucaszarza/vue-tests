import { mount } from '@vue/test-utils'
import Counter from '../Counter.vue'

const wrapper = mount(Counter)

describe('Counter.vue', () => {
  test('Clicking button resets the counter value to 0', async()=> {
    expect(wrapper.text()).toContain(0);
    wrapper.find('#reset').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain(0)
  })
})