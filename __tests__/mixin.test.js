import { shallowMount } from "@vue/test-utils";
import Home from "./../src/views/Home.vue";

describe("test de la directive pour la traduction des libellés", () => {
  it("Devrait retourner la traducion attendue pour un libellé possédant une traduction", async() => {
    const wrapper = shallowMount(Home) 
    expect(wrapper.vm.$options.filters.translate('welcome')).toEqual("Bienvenue")
  });
  
  it("Devrait pas retourner de traducion corréspondante si aucun libellé n'a été passé en parametre de la fonction de traduction", async() => {
    const wrapper = shallowMount(Home) 
    expect(wrapper.vm.$options.filters.translate()).toEqual("Traductin introuvable")
  });

  it("Devrait rien retourner pour un libellé ne possédant aucune traduction", async() => {
    const wrapper = shallowMount(Home) 
    expect(wrapper.vm.$options.filters.translate('Inconnu')).toEqual(undefined)
  });
});