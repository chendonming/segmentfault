/* eslint-disable */
import { $$dispathEvent } from '@/utils';

export default {
  data() {
    return {
      PrivateEventMixArray: [],
    };
  },
  methods: {
    $$on(name, fn) {
      document.addEventListener(name, fn);
      this.PrivateEventMixArray.push({ name, fn });
    },
    $$dispath(name, data) {
      $$dispathEvent(name, data);
    }
  },
  beforeDestroy() {
    if (this.PrivateEventMixArray && this.PrivateEventMixArray.length > 0) {
      this.PrivateEventMixArray.forEach((v) => {
        document.removeEventListener(v.name, v.fn);
      });
    }
  },
}
