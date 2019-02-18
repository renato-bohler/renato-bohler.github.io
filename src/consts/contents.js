import About from "@/views/About";
import Skills from "@/views/Skills";
import Projects from "@/views/Projects";
import Professional from "@/views/Professional";

export default [
  {
    id: "about",
    component: About,
    translateKey: "menu.about"
  },
  {
    id: "skills",
    component: Skills,
    translateKey: "menu.skills"
  },
  {
    id: "projects",
    component: Projects,
    translateKey: "menu.projects"
  },
  {
    id: "professional",
    component: Professional,
    translateKey: "menu.professional"
  }
];
