import { defineComponent } from "vue";
import '@styles/index.css';
import '@styles/test.scss';
import classes from '@styles/test.module.css'
export default defineComponent({
    setup() {
        return () => {
            return <div class={`root ${classes.moduleClass}`}>Hello Vue3 JSX</div>;
        };
    },
});