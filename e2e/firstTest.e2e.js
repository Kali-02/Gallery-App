const { waitFor } = require("detox");

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  let name = 'Kali@19759'
  let password = 'Kali@12345'
  let password1 = 'Kali@12345'
  let Title = 'Kalsium'


  it('should have welcome screen', async () => {


    await waitFor(element(by.id('Splash'))).toBeVisible().withTimeout(5000)
    await waitFor(element(by.id('SignUp'))).toBeVisible().withTimeout(10000)
    await expect(element(by.id('Visible'))).toBeVisible();
    // await element(by.id('email1')).typeText(name);
    // await element(by.id('password')).typeText(password);
    // await element(by.id('Renter')).typeText(password1);
    // await device.pressBack()
    // await (element(by.id('Button'))).tap();
    await (element(by.id('All'))).tap();

    await waitFor(element(by.id('LoginPage1'))).toBeVisible().withTimeout(10000);
    await element(by.id('email')).typeText(name);
    await element(by.id('password')).typeText(password);
    await (element(by.id('loginButton'))).tap();
    await waitFor(element(by.id('Mainpage'))).toBeVisible().withTimeout(10000);
    await (element(by.id('OnOverlay'))).tap();
    await (element(by.id('ContactUs'))).tap();
    await device.pressBack();
    await waitFor(element(by.id('Image'))).toBeVisible().withTimeout(10000);
    await (element(by.id('Nav1'))).tap();
    await waitFor(element(by.id('ImageViewer'))).toBeVisible().withTimeout(10000);
    await (element(by.id('0'))).tap();
    await device.pressBack();
    await device.pressBack();
    await waitFor(element(by.id('Image'))).toBeVisible().withTimeout(10000);
    await (element(by.id('fav2'))).tap();
    await (element(by.id('Fav'))).tap();
    await (element(by.id('AllPhoto'))).tap();
    await (element(by.id('photo1'))).tap();
    await (element(by.id('1delete'))).tap();
    await element(by.id('Albums')).tap();
    await element(by.id('Whatsapp Images')).tap();
    await element(by.id('My Photos')).tap();
    await element(by.id('Camera')).tap();
    await element(by.id('flatlist')).scroll(350,"right")
    await element(by.id('downloads')).tap();
    await element(by.id('ScreenShots')).tap();
    await element(by.id('Others')).tap();
    await element(by.id('flatlist')).scroll(350,'left')
    await element(by.id('My Photos')).tap();
    await element(by.id('61')).tap();
    await device.pressBack();
    await element(by.id('My Photos')).longPress();
    await element(by.id('T2')).tap();
    await element(by.id('Id')).tap();
    await element(by.id('0')).longPress();
    await element(by.id('T')).tap();
    await element(by.id('0')).longPress();
    await element(by.id('My Photos')).tap();
    await element(by.id('UN')).tap();
    await device.pressBack();
    await element(by.id('Whatsapp Images')).tap();
    await element(by.id('Whatsapp Images')).longPress();
    await element(by.id('Edit')).tap();
    await element(by.id('Cancel')).tap();
    await element(by.id('Whatsapp Images')).longPress();
    await element(by.id('Edit')).tap();
    await element(by.id('Txt1')).typeText(Title);
    await element(by.id('Name')).tap();
    await element(by.id('OnOverlay')).tap();
    await device.pressBack();
    await (element(by.id('AllPhoto'))).tap();
    await element(by.id('OnOverlay')).tap();
    await element(by.id('Logout')).tap();
    await element(by.id('Clear')).tap();
    await waitFor(element(by.id('LoginPage1'))).toBeVisible().withTimeout(10000);
    await element(by.id('navText1')).tap();
    await waitFor(element(by.id('Image'))).toBeVisible().withTimeout(10000);
    await element(by.id('0')).tap();
    await element(by.id('Overlay')).tap();
    await element(by.id('Delete')).tap();














  });
});
