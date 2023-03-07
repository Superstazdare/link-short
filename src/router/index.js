import Vue from "vue";
import VueRouter from "vue-router";
import NavPage from "../components/NavPage.vue";
import HeroPage from "../components/HeroPage.vue";
import InputPage from "../components/InputPage.vue";
import ServicePage from "../components/ServicePage.vue";
import BoostPage from "../components/BoostPage.vue";
import FooterPage from "../components/FooterPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/src/components/NavPage.vue",
        name: "NavPage",
        components: NavPage,
    },
    {
        path: "/src/components/HeroPage.vue",
        name: "HeroPage",
        components: HeroPage,
    },
    {
        path: "/src/components/InputPage.vue",
        name: "InputPage",
        components: InputPage,
    },
    {
        path: "/src/components/ServicePage.vue",
        name: "ServicePage",
        components: ServicePage,
    },
    {
        path: "/src/components/BoostPage.vue",
        name: "BoostPage",
        components: BoostPage,
    },
    {
        path: "/src/components/FooterPage.vue",
        name: "FooterPage",
        components: FooterPage,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
