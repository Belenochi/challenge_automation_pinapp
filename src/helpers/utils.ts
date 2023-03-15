/*******************************************************************************************************
 * @author: beluuochi@gmail.com
 * @description: Utility class for common page obects.
 ******************************************************************************************************/
const SELECTORS = {};

class Utils {
  tap(element) {
    element.waitForExist({ timeout: 5000 });
    element.click();
  }

  async waitAndTap(time, element) {
    await (element).waitForExist({timeout : time});
    this.tap(element);
  }

  setValue(element, value) {
    element.waitForExist({ timeout: 5000 });
    element.setValue(value);
  }
}

export default new Utils();
