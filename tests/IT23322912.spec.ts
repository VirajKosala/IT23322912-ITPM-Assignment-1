import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala Transliteration Tests - IT23322912', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to the translator application
        await page.goto('https://www.swifttranslator.com/');
    });

    // --- POSITIVE FUNCTIONAL TESTS (Pos_Fun) ---

    test('Pos_Fun_01: Simple sentence – travel', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Api japaaneta enavaa');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි ජපානෙට එනවා');
    });

    test('Pos_Fun_02: Compound sentence – sequence', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Api pansal yanavaa iitapasse muhudhu veralatath yanavaa');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි පන්සල් යනවා ඊටපස්සෙ මුහුදු වෙරලටත් යනවා');
    });

    test('Pos_Fun_03: Cause and effect sentence', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata kakul kaekkuma haedhune godak dhura aevidhalaa');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට කකුල් කැක්කුම හැදුනෙ ගොඩක් දුර ඇවිදලා');
    });

    test('Pos_Fun_04: Polite request', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata prinsipalta kathaa karanna puluvandha');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට ප්‍රින්සිපල්ට කතා කරන්න පුලුවන්ද');
    });

    test('Pos_Fun_05: Suggestion question', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('paeththakata yanna');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('පැත්තකට යන්න');
    });

    test('Pos_Fun_06: Future tense – exam', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama viBhaagaya paas venavaa');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම විභාගය පාස් වෙනවා');
    });

    test('Pos_Fun_07: Negative statement', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama ehe yanna enne naehae');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම එහෙ යන්න එන්නෙ නැහැ');
    });

    test('Pos_Fun_08: Greeting', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('suba dhavasak');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('සුබ දවසක්');
    });

    test('Pos_Fun_09: Polite borrowing request', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata tikakata oyaage potha dhenna puluvandha');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට ටිකකට ඔයාගෙ පොත දෙන්න පුලුවන්ද');
    });

    test('Pos_Fun_10: Agreement response', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('hari mama eeka dhennam');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('හරි මම ඒක දෙන්නම්');
    });

    test('Pos_Fun_11: Apology sentence', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('karuNaakaralaa mata eeka dhenna puluvandha');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('කරුණාකරලා මට ඒක දෙන්න පුලුවන්ද');
    });

    test('Pos_Fun_12: Informal command', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('ooka dhiila palayan');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඕක දීල පලයන්');
    });

    test('Pos_Fun_13: Hunger expression', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata badaginiyi');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට බඩගිනියි');
    });

    test('Pos_Fun_14: One-word instruction', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('nidhaaganna');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('නිදාගන්න');
    });

    test('Pos_Fun_15: Plan sentence', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api aevidhinna yanavaa');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි ඇවිදින්න යනවා');
    });

    test('Pos_Fun_16: Joined words variation', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('apiadhapansalyanavaa');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපිඅදපන්සල්යනවා');
    });

    test('Pos_Fun_17: Repeated emphasis words', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('baehae baehae');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('බැහැ බැහැ');
    });

    test('Pos_Fun_18: Past tense action', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('eyaa bath kaevaa');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('එයා බත් කැවා');
    });

    test('Pos_Fun_19: Present continuous action', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama vathura bonavaa');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම වතුර බොනවා');
    });

    test('Pos_Fun_20: Future food plan', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api raeeta kaden kamu');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි රෑට කඩෙන් කමු');
    });

    test('Pos_Fun_21: Simple negation – eating', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata kanna baehae');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට කන්න බැහැ');
    });

    test('Pos_Fun_22: Past tense – studying', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('eyaa paadam karaa');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('එයා පාඩම් කරා');
    });

    test('Pos_Fun_23: Present tense – location', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api minuvangoda enavaa');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි මිනුවන්ගොඩ එනවා');
    });

    test('Pos_Fun_24: Conditional request', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('puLuvannam mata bath bedhala dhenna');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('පුළුවන්නම් මට බත් බෙදල දෙන්න');
    });

    test('Pos_Fun_25: Academic Mixed technical paragraph', async ({ page }) => {
        const input = 'Lamayi heta panthi enna epaa.heta Zoom eken meeting ekak gamu.pdf eka hadhala thiyaaganna.';
        const expected = 'ළමයි හෙට පන්ති එන්න එපා.හෙට Zoom එකෙන් meeting එකක් ගමු.pdf එක හදල තියාගන්න.';
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
        await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
    });

    test('Pos_Fun_26: Complex technical mixed paragraph', async ({ page }) => {
        const input = "oyaata mama APP ekee URL eka SMS karannam.oya NIC eka dhaala phone number eka dhaala OTP eka dhaanna.eeke thiyenavaa godak MP4,MP3 video (songs,films)ehema.oyaa download karalaa USB Ekata dhaala mata dhenna. oyaata puluvan nedha?mama aluth PC ekak gaththa maarthu 10 .eekata RS 300,000 k giyaa. apita aluth film balannayi game gahannayi puluvan eeken dhaen.oyaa heta ennavanedha? 4.30 PM vagee vedhdhi enna.paara kivva mathakai needha.bus eken baehaela 500m k vagee athulata enna digatama.mama magata ennam.";
        const expected = "ඔයාට මම APP එකේ URL එක SMS කරන්නම්.ඔය NIC එක දාල phone number එක දාල OTP එක දාන්න.ඒකෙ තියෙනවා ගොඩක් MP4,MP3 video (songs,films)එහෙම.ඔයා download කරලා USB එකට දාල මට දෙන්න. ඔයාට පුලුවන් නේද?මම අලුත් PC එකක් ගත්ත මාර්තු 10 .ඒකට RS 300,000 ක් ගියා. අපිට අලුත් film බලන්නයි game ගහන්නයි පුලුවන් ඒකෙන් දැන්.ඔයා හෙට එන්නවනෙද? 4.30 PM වගේ වෙද්දි එන්න.පාර කිව්ව මතකෛ නේද.bus එකෙන් බැහැල 500m ක් වගේ අතුලට එන්න ඩිගටම.මම මගට එන්නම්.";
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
        await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
    });

    test('Pos_Fun_27: Formatting check – Spaces', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api heta   galle  enavaa.');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි හෙට galle එනවා.');
    });

    test('Pos_Fun_28: Interrogative sentence – Travel', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('heta api katharagama yanavaa oyaalath enavadha');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('හෙට අපි කතරගම යනවා ඔයාලත් එනවද');
    });

    test('Pos_Fun_29: Scientific long paragraph – Climate', async ({ page }) => {
        const input = "vishva uShNathvaya ihaLa yaama (Global Warming) heethuven Dhraeviiya ayis thattu (Polar Ice Caps) veegayen dhiyaviimata lakva aethi athara, emagin samastha mahaa saagara jala mattama milimiitar 50kin pamaNa ihaLa gos aethi bava vidhYaaGHAyoo penvaa dhethi. mema thaththvaya heethuven dhuupath raajYAyanhi menma veraLabada kalaapayanhi paarisarika padhDhathi (Ecosystems) vinaasha viimee tharjanayak mathuva thibee. meyata piLiyam lesa harithaagaara vaayu (Greenhouse Gases) pitaviima paalanaya kiriimee vaedhagathkama vidhYaa, thaakShaNa haa parisara amaathYAvarayaa avaDhaaraNaya kaLeeya.";
        const expected = "විශ්ව උෂ්ණත්වය ඉහළ යාම (Global Warming) හේතුවෙන් ධ්‍රැවීය අයිස් තට්ටු (Polar Ice Caps) වේගයෙන් දියවීමට ලක්ව ඇති අතර, එමගින් සමස්ත මහා සාගර ජල මට්ටම මිලිමීටර් 50කින් පමණ ඉහළ ගොස් ඇති බව විද්‍යාඥයෝ පෙන්වා දෙති. මෙම තත්ත්වය හේතුවෙන් දූපත් රාජ්‍යයන්හි මෙන්ම වෙරළබඩ කලාපයන්හි පාරිසරික පද්ධති (Ecosystems) විනාශ වීමේ තර්ජනයක් මතුව තිබේ. මෙයට පිළියම් ලෙස හරිතාගාර වායු (Greenhouse Gases) පිටවීම පාලනය කිරීමේ වැදගත්කම විද්‍යා, තාක්ෂණ හා පරිසර අමාත්‍යවරයා අවධාරණය කළේය.";
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
        await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
    });

    test('Pos_Fun_30: Informal slang – Impatient', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('adoo enava kivvanam varen bQQ');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('අඩෝ එනව කිව්වනම් වරෙන් බං');
    });

});

// --- NEGATIVE FUNCTIONAL TESTS (Neg_Fun) ---
// 1. 
    test('Neg_Fun_01: Email string preservation', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('magee email eka virajkosala@gmail.com');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('මගේ email එක virajkosala@gmail.com');
    });

    // 2. 
    test('Neg_Fun_02: Password alphanumeric preservation', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('magee laptop ekee password eka "45fkgrgr"');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('මගේ laptop එකේ password එක "45fkgrgr"');
    });

    // 3. 
    test('Neg_Fun_03: URL preservation in sentence', async ({ page }) => {
        const input = 'meken oyaata singlish valin sinhala Translator karaganna puluvan https://www.swifttranslator.com/';
        const expected = 'මෙකෙන් ඔයාට සින්ග්ලිශ් වලින් sinhala වලට Translate කරගන්න පුලුවන් https://www.swifttranslator.com/';
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
        await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
    });

    // 4. 
    test('Neg_Fun_04: Programming code block preservation', async ({ page }) => {
        const codeInput = 'if(a>b){ print("value is 100")};';
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill(codeInput);
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('if(a>b){ print("value is 100")};');
    });

    // 5.
    test('Neg_Fun_05: Ambiguous phonetic W usage', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('wathura vathura');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('වතුර වතුර');
    });

    // 6.
    test('Neg_Fun_06: Improper word segmentation', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mamagedarayannae');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('මමගෙදරයන්නෑ');
    });

    // 7. 
    test('Neg_Fun_07: Handling mixed English loanwords', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('bus eka school ekata aava');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('bus එක school එකට ආව');
    });

    // 8. 
    test('Neg_Fun_08: Case sensitivity in transliteration', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('MAMA yanavaa Mama yanavaa');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම යනවා මම යනවා');
    });

    // 9.
    test('Neg_Fun_09: Special characters between words', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('bath-kanna#yamu');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('බත්-කන්න#යමු');
    });

    // 10.
    test('Neg_Fun_10: Retroflex character confusion', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('kaNna kanna');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('කන්න කන්න');
    });




        /// --- POSITIVE UI TESTS (Pos_UI) ---
        
        test('Pos_UI_0001: Real-time Output Update', async ({ page }) => {
            // Ensure page is loaded and input field is visible
            await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
            await page.getByPlaceholder('Input Your Singlish Text Here.').waitFor({ state: 'visible' });
            
            // Use fill() instead of type() for reliability
            await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama dhaen yanavaa');
            
            // Wait for output to be populated
            await page.locator('div.bg-slate-50').first().waitFor({ state: 'visible' });
            await page.waitForTimeout(500);
            
            await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම දැන් යනවා', { timeout: 15000 });
        });




        /// --- NEGATIVE UI TESTS (Neg_UI) --
        test('Neg_UI_0004: Scientific Notation Preservation', async ({ page }) => {
                const input = '6.022 x 10^23 mole';
                await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
                await expect(page.locator('div.bg-slate-50').first()).toHaveText('6.022 x 10^23 mole');
            });