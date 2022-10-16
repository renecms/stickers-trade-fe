import { reactive } from 'vue'

export const store = reactive({
    appBarTitle: "Home",
    changeAppBarTitle(newTitle: string) {
        this.appBarTitle = newTitle;
    }
})