/*******************************************************************************************************
 * @author: beluuochi@gmail.com
 * @description: pixel 6, select two pokemons of pokedex functionality from dataDex PROD from PinApp Challenge.
 ******************************************************************************************************/

import startApp from "../../../src/screens/dataDex/start/start.app.screen";
import birthDay from "../../../src/screens/dataDex/start/birthday.screen";
import startPoke from "../../../src/screens/dataDex/start/finish.set.profile";
import popup from "../../../src/screens/dataDex/home/popup";
import home from "../../../src/screens/dataDex/home/home.screen";
import { expect } from "chai";

describe("Select two Pokemons", () => {

  it("Start in App", async() => {
    expect(await startApp.startApp()).to.be.true;
  });

  it("select birthday", async() => {
    expect(await birthDay.setBirthDay()).to.be.true;
  });

  it("start to use pokedex", async() => {
    expect(await startPoke.startUseApp()).to.be.true;
  });

  it("skip pop up to visit web site", async() => {
    expect(await popup.backWebsite()).to.be.true;
  });

  it("skip tutorial", async() => {
    expect(await home.skipTutorial()).to.be.true;
  });

  it("search first pokemon", async() => {
    expect(await home.searchRandomPokemonByName()).to.be.true;
  });

  it("search second pokemon", async() => {
    expect(await home.searchRandomPokemonByName()).to.be.true;
  });
});