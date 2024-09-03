import { t } from 'qingnio-ui/src/locale';

export default {
  methods: {
    t (...args) {
      return t.apply(this, args);
    }
  }
};
