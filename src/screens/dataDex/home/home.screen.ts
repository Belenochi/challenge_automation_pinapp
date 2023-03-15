import utils from "../../../helpers/utils";
import filterByName from "./filter.by.name";
import fetchMeth from "../../../helpers/fetch";
import { parseJsonText } from "typescript";

const SELECTORS = {
    BTN_FILTER_ALL_GAMES: 'android=new UiSelector().resourceId("com.talzz.datadex:id/view_version_text_1")',
    BTN_FAVORITES:'android=new UiSelector().resourceId("com.talzz.datadex:id/action_favorites")',
    BTN_CHECKLIST:'android=new UiSelector().resourceId("com.talzz.datadex:id/action_caught")',
    BTN_FILTER:'android=new UiSelector().resourceId("com.talzz.datadex:id/fragment_dex_fab")',
    FIRST_ITEM_LIST_ALL_GAMES:'android=new UiSelector().textMatches("Bulbasaur")',
    BTN_FILTER_BY_NAME:'android=new UiSelector().resourceId("com.talzz.datadex:id/fab_filter")',
};

class HomeScreen{
    get btnFilterAllGames() {
        return $(SELECTORS.BTN_FILTER_ALL_GAMES);
    }

    get btnFavorites() {
        return $(SELECTORS.BTN_FAVORITES);
    }

    get btnChecklist() {
        return $(SELECTORS.BTN_CHECKLIST);
    }

    get btnFilters() {
        return $(SELECTORS.BTN_FILTER);
    }

    get firstItemListAllGames() {
        return $(SELECTORS.FIRST_ITEM_LIST_ALL_GAMES);
    }

    get btnFilterByName() {
        return $(SELECTORS.BTN_FILTER_BY_NAME);
    }

    async skipTutorial () {
        let flag;

        utils.waitAndTap(10000, await this.btnFilterAllGames);

        await browser.pause(2000);

        utils.waitAndTap(10000, await this.btnFavorites);

        await browser.pause(2000);

        utils.waitAndTap(10000, await this.btnChecklist);

        await browser.pause(2000);

        utils.waitAndTap(10000, await this.btnFilters);

        await browser.pause(2000);

        await this.firstItemListAllGames.waitForExist({timeout:10000});

        if(await this.firstItemListAllGames.isDisplayed()){
            flag = true;
        }else flag = false;

        await browser.pause(3000);

        return flag;
    }

    async searchRandomPokemonByName() {
        let flag;
        let pokemon = await fetchMeth.getRandomPokemon();

        utils.waitAndTap(10000, await this.btnFilters);

        utils.waitAndTap(10000, await this.btnFilterByName);

        await filterByName.txtBoxFilterByName.waitForExist({timeout:10000});

        await filterByName.txtBoxFilterByName.setValue(`${pokemon}`);

        await browser.hideKeyboard();

        await filterByName.firstItemFilterByName.waitForExist({timeout:10000});

        if(await filterByName.firstItemFilterByName.isDisplayed()) {
            flag = true
        }else flag = false;

        return flag;
    }
}

export default new HomeScreen();