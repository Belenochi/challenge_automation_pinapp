/**
 * The values in the below object are percentages of the screen
 */
 const SWIPE_DIRECTION = {
    down: {
        start: { x: 50, y: 15 },
        end: { x: 50, y: 85 },
    },
    left: {
        start: { x: 95, y: 50 },
        end: { x: 5, y: 50 },
    },
    right: {
        start: { x: 5, y: 50 },
        end: { x: 95, y: 50 },
    },
    up: {
        start: { x: 50, y: 85 },
        end: { x: 50, y: 15 },
    },
    upFromDown: {
    }
};

class Gestures {
/**
     * Check if an element is visible and if not scroll down a portion of the screen to
     * check if it visible after a x amount of scrolls
     *
     * @param {element} element
     * @param {number} maxScrolls
     * @param {number} amount
     */
 static async swipeForElement(element, maxScrolls, amount = 0) {
        
    if(amount==0){
        browser.pause(100);
    }     
    if(await element.isDisplayed()){
        return;
    }
    
    if ((!await element.isExisting() || !await element.isDisplayed()) && amount <= maxScrolls) {
        this.swipeUp(0.4);
        await this.swipeForElement(element, maxScrolls, amount + 1);
    } else if (amount > maxScrolls) {
        console.info(`The element '${element}' could not be found or is not visible.`);
    }
}


/**
 * Swipes the screen the indicated amount of times
 *
 * @param {number} times
 */
static async swipeFor(times: number) {
    for (let i = 0; i < times; i++) {
        await this.swipeUp(0.55)
        browser.pause(500);
    }

}

static async swipeUpFor(element, times) {
    let i = 1;
    while (!await element.isDisplayed() && i < times) {
        await this.swipeUp(0.5);
        i++;
    }
}

/**
 * Swipe down based on a percentage
 *
 * @param {number} percentage from 0 - 1
 */
static async swipeDown(percentage = 1) {
    await this.swipeOnPercentage(
        await this._calculateXY(SWIPE_DIRECTION.down.start, percentage),
        await this._calculateXY(SWIPE_DIRECTION.down.end, percentage),
    );
}

/**
 * Swipe Up based on a percentage
 *
 * @param {number} percentage from 0 - 1
 */
static async swipeUp(percentage = 1) {
    await this.swipeOnPercentage(
        await this._calculateXY(SWIPE_DIRECTION.up.start, percentage),
        await this._calculateXY(SWIPE_DIRECTION.up.end, percentage),
    );
}

/**
 * Swipe left based on a percentage
 *
 * @param {number} percentage from 0 - 1
 */
static async swipeLeft(percentage = 1) {
    await this.swipeOnPercentage(
        await this._calculateXY(SWIPE_DIRECTION.left.start, percentage),
        await this._calculateXY(SWIPE_DIRECTION.left.end, percentage),
    );
}

/**
 * Swipe right based on a percentage
 *
 * @param {number} percentage from 0 - 1
 */
static async swipeRight(percentage = 1) {
    await this.swipeOnPercentage(
        await this._calculateXY(SWIPE_DIRECTION.right.start, percentage),
        await this._calculateXY(SWIPE_DIRECTION.right.end, percentage),
    );
}

/**
 * Swipe from coordinates (from) to the new coordinates (to). The given coordinates are
 * percentages of the screen.
 *
 * @param {object} from { x: 50, y: 50 }
 * @param {object} to { x: 25, y: 25 }
 *
 * @example
 * <pre>
 *   // This is a swipe to the left
 *   const from = { x: 50, y:50 }
 *   const to = { x: 25, y:50 }
 * </pre>
 */
static async swipeOnPercentage(from, to) {
    const SCREEN_SIZE = browser.getWindowSize();
    const pressOptions = this._getDeviceScreenCoordinates(SCREEN_SIZE, from);
    const moveToScreenCoordinates = this._getDeviceScreenCoordinates(SCREEN_SIZE, to);
    await this.swipe(
        pressOptions.x, pressOptions.y,
        moveToScreenCoordinates.x, moveToScreenCoordinates.y
    );
}

/**
 * Swipe from coordinates (from) to the new coordinates (to). The given coordinates are in pixels.
 *
 * @param {object} from { x: 50, y: 50 }
 * @param {object} to { x: 25, y: 25 }
 *
 * @example
 * <pre>
 *   // This is a swipe to the left
 *   const from = { x: 50, y:50 }
 *   const to = { x: 25, y:50 }
 * </pre>
 */
static async swipe(fromX, fromY, toX, toY) {
    await browser.touchAction([{
        action: 'longPress', x:fromX, y:fromY
    }, {
        action: 'wait',
    }, {
        action: 'moveTo', x:toX, y:toY
    }, {
        action: 'release',
    }]);
    browser.pause(1000);
}

static async swipeUpPackages(){
    const SCREEN_SIZE = await browser.getWindowSize();
    const startY = SCREEN_SIZE.height * 0.95;
    const midX = SCREEN_SIZE.width / 2;
    const midY = SCREEN_SIZE.height * 0.60;
    //this.swipe(midX, startY, midX, midY);
    await browser.touchAction([{
        action: 'longPress', x: midX, y:startY
    }, {
        action: 'moveTo', x:midX, y: midY
    }, {
        action: 'release',
    }]);
}

static async tapByCoordinates (coordx, coordy){
    await browser.touchAction([{
        action: 'tap', x: coordx, y:coordy
    }, {
        action: 'release',
    }]);
}

/**
 * Get the screen coordinates based on a device his screensize
 *
 * @param {number} screenSize the size of the screen
 * @param {object} coordinates like { x: 50, y: 50 }
 *
 * @return {{x: number, y: number}}
 *
 * @private
 */
static _getDeviceScreenCoordinates(screenSize, coordinates) {
    return {
        x: Math.round(screenSize.width * (coordinates.x / 100)),
        y: Math.round(screenSize.height * (coordinates.y / 100)),
    };
}



/**
 * Calculate the x y coordinates based on a percentage
 *
 * @param {object} coordinates
 * @param {number} percentage
 *
 * @return {{x: number, y: number}}
 *
 * @private
 */
static _calculateXY({ x, y }, percentage) {
    return {
        x: x * percentage,
        y: y * percentage,
    };
}

static async getCoordenatesOfElement(element){
    const scrollViewRect = await browser.getElementRect(element.elementId);
    const centerX = scrollViewRect.x + scrollViewRect.width /2;
    const centerY = scrollViewRect.y + scrollViewRect.height /2;
    return{
        centerX,
        centerY
    }
}

static async swipeUpByElementCoordenates(element, percentage = 1){
    const x = (await this.getCoordenatesOfElement(element)).centerX
    const y = (await this.getCoordenatesOfElement(element)).centerY
    const end = y+30;

    await this.swipeOnPercentage(y,end);
}
}

export default Gestures;
