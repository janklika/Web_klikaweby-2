Text pro soubor instrukce.md 
(zadání pro AI agenta k tvorbě webu)

**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
•	Strukturovaný komentovaný HTML5 kód s validní sémantikou
•	Responzivní design (mobile-first přístup)
•	CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
•	Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
•	CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp 
•	Základní JavaScript pro interaktivitu (na jemné oživení stránek)
•	Dbej na bezpečnost webu (nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
•	Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

**Znalosti**
•	Zajisti rychlé načítání a optimalizovaný výkon
•	Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
•	Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
•	Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu


**Základní SEO**
•	Strukturuj nadpisy H1-H6
•	Přidej meta title a description na každé stránce
•	Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
•	Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
•	Urči kanonickou url
•	Obrázkům dej alt popisky
•	Propoj stránky vnitřními odkazy
•	Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)


**Optimalizace obrázků**
•	Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
•	Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.
**Vizuální hierarchie a čitelnost**
•	Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
•	Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
•	Čitelné fonty s českou diakritikou, minimální velikost 16px
•	Správné řádkování (line-height 1.5-1.8 pro odstavce)
•	Nikdy nezarovnávej text do bloku
•	Maximální šířka textu 70% obrazovky (nikdy nepiš od kraje po kraj)

**Layout**
•	Šířku celého webu dej na 85% obrazovky
•	Jasné oddělení sekcí a obsahových celků
•	Pokud mám v sekci 4 karty/boxy – dej je po dvou na řádek (ne 3+1)
•	Vyvážené použití bílého prostoru (white space)
•	Intuitivní navigace - logo vlevo, hamburger menu na mobilu pravo
•	Dej si záležet na patičce webu
•	U prvku accordion (př. pro otázky a odpovědi) dávej ikonu šipky dolů a nahoru a pokud je jich víc než 3, tak je rozděl do dvou sloupců
•	Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
•	Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
•	Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
•	Stručné a srozumitelné texty
•	Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
•	Vizuální prvky podporující obsah (ikony, obrázky, grafika)
•	Logické uspořádání informací (nejdůležitější nahoře)
•	Chybová stránka (místo „404“ dej ikonu <wa-icon name="face-frown" variant="regular"></wa-icon>) a přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html
•	Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
•	Jednotný styl tlačítek, karet a komponent
•	Stejný padding/margin napříč podobnými elementy
•	Stejné zaoblení prvků
•	Konzistentní ikonografie (používej font awesome, ne emotikony)
•	Stíny karet pouze velmi jemné
•	Jednotný projev značky (brand voice)
•	Konzistentní použití barev napříč celým webem
•	Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**
•	Omezený počet barev (2-3 hlavní + neutrální)
•	Primární barva pro CTA (call-to-action) tlačítka
•	Neutrální jemné barvy pro pozadí 
•	Pro text #333333
•	Brand barvy (HEX): 
   - primární: [#dddfdf]
   - sekundární: [#ffbf00]
   - tlačítka: [#fff4e6]
   - text: [#333333]

**Fonty**
•	Pokud není jasné, zvol moderní sans-serif font (př. Outfit)
•	Brandový font [Special Elite]

**Struktura**
•	Jednostránkový web
•	Položky menu: 
o	Úvod 
o	Co nabízím
o	Spolupráce
o	Kontakty
Do hlavičky nahoře vlož logo Obrazky/logo_klikaweby.png

**Další prvky na webu**
•	Vlož odkaz na Dotazník na tvorbu webových stránek https://docs.google.com/forms/d/e/1FAIpQLSezjpJmKydRVK1zFO0OhNAXWOIBiyRMzyC-cKheNnobuI0NdQ/viewform?usp=dialog


**Design**
Design hero sekce (celého webu) vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu jpg 
Zbytek weby vytvoř tak aby ladil k hero sekci.
**Moderní design**
•	Barvy: Jemné gradienty, plynulé přechody
•	Prvky: Zaoblené rohy (border-radius 16-24px), jemné stíny
•	Animace: Mikro interakce na hover, jemné scroll animace 
•	Web může lehce působit jako napsaný na psacím stroji.
**obrázky**
Na webu použij fotky, které najdeš ve složce Obrazky.
o	Obrazky/Lide – pro osoby
o	Obrazky/Webari_anime – pro doplnění webu
o	Obrazky/Ikony – pro dokreslení celého webu
o	Obrazky/Webari – pro doplnění webu

**texty**
Na webu použij tyto texty pro jednotlivé sekce. Drž se jich doslova a nic neměň ani nepřidávej.  


*Menu (kotvy)*
	- Úvod
	- Co nabízím
	- Spolupráce
	- Kontakty

*Hero sekce*
Tvorba webových stránek na míru
Vytvářím moderní a funkční weby pro malé firmy a OSVČ, které přivádějí nové zákazníky.
To chci.
*Použij fotku Obrazky/Webari_anime/webar_anime_pocitac.png*
*V bublinách kolem fotky dej tyto texty:*
Vzhled
Struktura
Orientace
Zabezpečení
Rychlost
Responzivita


*Úvod*
Společně vytvoříme webové stránky, které budou
Jednoduché a přehledné
Čistý a nerušivý vzhled.
Jasná struktura a snadná orientace.
Dobrá čitelnost a příjemné barvy.
*Použij ikonu Obrazky/Ikony/Jednoduche_a_prehledne.png*

Funkční a rychlé
Rychlé načítání a zabezpečení.
Optimalizace pro vyhledávače.
Plná funkčnost na mobilech i počítačích.
*Použij ikonu Obrazky/Ikony/Funkcni_a_rychle.png*

Chcete mít takové webové stránky? To si budeme rozumět.


Co nabízím
Chcete, aby lidé ve vašem okolí věděli, co umíte a jak jim můžete pomoci?
Rád si s vámi nezávazně zavolám na 30 minut a probereme vaše představy.
Konzultace zdarma


Co vám můžu nabídnout
1/ Tvorba webových stránek
Vytvoříme webové stránky, které budou magnetem pro vyhledávače, s obsahem, který zaujme a prezentací, která vás vystihne.
To chci
*Použij ikonu Obrazky/Ikony/Tvorba_webovych_stranek.png*

2/ Editace a péče o webové stránky
Udržím váše webové stránky v top formě – bleskově rychlé, neprůstřelně bezpečné a vždy snadno k nalezení.
To se hodí
*Použij ikonu Obrazky/Ikony/Editace_a_pece_o_webove_stranky.png*

3/ Něco navíc
Můžu vám připravit texty na web, pomoci s výběrem nebo pořízením fotografií a vytvořit jednoduché logo,
Zajímá mě to
*Použij ikonu Obrazky/Ikony/Neco_navic.png*


Kdo za tím stojí?
webař Honza
Jsem vystudovaný dřevař a nábytkář, ale život mě nakonec zavedl do sociálních služeb, kde pracuji dodnes.
K webům jsem se dostal nenápadně — vždycky mě to táhlo ke grafice, designu a focení, a z toho byl jen krůček k tvorbě webových stránek. Velký impuls mi dal i kurz Magdalény Bouškové (webykvalitne.cz), který mi pomohl dát mému koníčku jasnější směr. Webařina je pro mě prostor, kde můžu spojit kreativitu, estetiku i technickou stránku věcí.
A když je třeba vypnout, sáhnu po dobré kávě nebo vyrazím ven — příroda je pro mě největší inspirací.
Co nabízím
*Použij fotku Obrazky/Lide/jan_klika.jpg*


*Co nabízím*

Webové stránky na míru
Jaké možnosti nabízím
*Použij ikonu Obrazky/Co_nabizim/Ne.png*

1/ Tvorba webových stránek
Web bez redakčního systému
Přehledný a jednoduchý web, který funguje jako vaše online vizitka. Hodí se pro situace, kdy chcete mít hezky na jednom místě, co nabízíte, a zároveň se nechcete zabývat dalším udržováním.
Co získáte:
- moderní a přehledný design
- strukturu zaměřenou na přehlednost
- optimalizaci pro mobilní zařízení
- základní SEO nastavení
- rychlý a bezpečný provoz bez starostí
od 10 000 kč
*Použij ikonu Obrazky/Ikony/Web_bez_administrace.png*


Web s redakčním systémem
Živý web, který roste společně s vaším podnikáním. Můžete ho sami kdykoliv aktualizovat a postupně doplňovat o nové informace, služby nebo projekty.
Co získáte:
- možnost pravidelně měnit obsah
- lepší možnosti SEO optimalizace
- blog, aktuality nebo další rozšiřující funkce
- škálovatelné řešení do budoucna
- responzivní řešení pro všechna zařízení
od 15 000 kč
*Použij ikonu Obrazky/Ikony/Web_s_administraci.png*

Kontaktujte mě


Aby stránky pracovaly tak jak mají

2/ Editace a péče o webové stránky
Aby váš web fungoval tak, jak má, potřebuje občasnou péči. Aktualizace, zálohy i technické věci klidně nechte na mně.
O web se starám pravidelně 3x do roka.
Rád vám pomůžu i s texty, fotkami nebo přidáním nových funkcí.

1x údržba
- pravidelná záloha webu
- aktualizace pluginů
- kontrola stavu webu
- správa 3 do roka
350 kč
*Použij ikonu Obrazky/Ikony/Udrzba.png*


Editace
- úprava vzhledu webu
- aktualizace textů
- rozšíření možností webu
- jiné úpravy
900 kč/h
*Použij ikonu Obrazky/Ikony/Editace.png*

Kontaktujte mě



Může se hodit
3/ Něco navíc

Texty na web
Kvalitní texty jsou základ úspěšné prezentace.
Připravím obsah, který je srozumitelný, přehledný a přizpůsobený tomu, co chceš komunikovat.
Zahrnuje úpravu stávajících textů nebo tvorbu nových od nuly.
 1 500–3 000 Kč
(pro One page web; u více stránek dle rozsahu 2 500–6 000 Kč)
*Použij ikonu Obrazky/Ikony/Texty_na_web.png*


Logo
Základní vizuální identita.
Vytvořím jednoduché, čisté a moderní logo, které bude ladit s celkovým stylem webu.
1 000–3 000 Kč
(dle náročnosti a počtu návrhů)
*Použij ikonu Obrazky/Ikony/Logo.png*


Fotografie
Pomůžu s výběrem vhodných fotografií z fotobank, případně upravím tvoje vlastní snímky tak, aby na webu působily profesionálně.
Může jít o výběr, retuše, sjednocení stylu nebo doporučení vizuálního směru
300–1 000 Kč
(výběr + úpravy; vlastní focení dle domluvy)
*Použij ikonu Obrazky/Ikony/Fotografie.png*

Kontaktujte mě

Co cena zahrnuje a nezahrnuje:

Co zahrnuje
*Použij ikonu Obrazky/Ikony/Ano.png*
Úvodní schůzka
Máme na sebe 90 minut. Můžeme se potkat osobně, nebo online. Probereme detailně obsah webových stránek, jejich strukturu, vzhled a další.
Doména a hosting
Zařídím vám  hosting a doménu s jejímž výběrem mohu pomoci.
Návrh webové struktury
Udělám přehlednou strukturu, která zajistí snadnou a jasnou orientaci po webových stránkách.
Zabezpečení
Každým webovým stránkám dávám automaticky bezpečnostní certifikát SSL.
Mobilní přizpůsobení
Většina online světa dnes funguje na mobilních telefonech, proto budou vaše webové stránky na těchto zařízeních nejen skvěle vypadat, ale i bez problémů fungovat.
Základní SEO
Zajistím základní optimalizaci pro vyhledávače a propojení s Google Search Console, aby vás uživatelé mohli snadno najít.
Cookie lišta
Pokud bude potřeba, rád ji připravím.

Co nezahrunje
*Použij ikonu Obrazky/Ikony/Ne.png*
Cena za doménu a hosting
Doména i hosting se platí jednou ročně přímo poskytovateli služby, a platbu provádíte vy jako klient. S jejich výběrem i nastavením vám ale rád pomohu.
Tvorba finálních textů
Finální texty si připravuje klient, ale nenechám vás v tom samotné — vytvoříme si společně přehlednou strukturu, podle které se vám bude psát mnohem snadněji. Pokud budete chtít, texty mohu zpracovat za vás, případně doporučím copywritera. Cena se stanovuje podle rozsahu a tématu.
Fotografie
Dobré fotografie dělají velký rozdíl. Pokud nemáte vlastní, ráda vyhledám snímky ve fotobankách nebo je mohu nafotit. Cena se odvíjí od počtu fotografií a úprav.
Průběžná údržba webu
Webové stránky potřebují průběžnou péči — aktualizace, zálohy i kontrolu, aby vše fungovalo tak, jak má. Nabízím jednorázovou údržbu za 350 Kč, kterou standardně provádím 3-4 do roka.
Úpravy po spuštění webu
V prvním týdnu ostrého provozu máte drobné úpravy zdarma. Další editace již spuštěných webových stránek pak provádím za standardní sazbu 900 Kč za hodinu.
Zaškolení do DIVI
Chcete si obsah webových stránek spravovat sami? Nabízím jednorázové zaškolení do administrace a editace webu v délce asi 1,5 hodiny. Cena je 1 400 Kč.
Napojení na Google Analytics
Google Analytics je analytický nástroj, který monitoruje provoz na webových stránkách. Sbírá důležitá data a nabízí jasné přehledy o tom, jak lidé váš webové stránky používají.


*Spolupráce*
Spolupráce při tvorbě webových stránek
Jak vzniká váš web
*Použij ikonu Obrazky/Ikony/Spoluprace.png*

1. Stanovíme cíl
Nejprve si řekneme, co má web splňovat, pro koho je určený a jaký výsledek od něj očekáváte. Díky tomu bude mít celý projekt jasný směr.

2. Připravím koncept a strukturu
Navrhnu logické uspořádání stránek a obsah tak, aby byl web přehledný a návštěvníci se na něm snadno orientovali.

3. Navrhnu a vytvořím web
Zpracujeme vizuální podobu a pustím se do samotné realizace. Důraz kladu na jednoduchý design, rychlost načítání a pohodlné používání.

4. Otestuji a spustím online
Vše doladím, zkontroluji funkčnost a připravím web ke spuštění, aby byl připravený bez problémů fungovat o
d prvního dne.

*Kontakty*
Chcete jednoduchý a funkční web, který bude fungovat?
Napište mi. Rád se na váš projekt podívám.
Pokud chcete, abych rychleji dostal představu o vašem projektu, můžete vyplnit dotazník.
Dotazník: https://docs.google.com/forms/d/e/1FAIpQLSezjpJmKydRVK1zFO0OhNAXWOIBiyRMzyC-cKheNnobuI0NdQ/viewform?usp=publish-editor

Jan Klika
j.klika@post.cz
+420 732 545 963
Kontaktujte mě
PO-PÁ/ 8:00-17:00
 IČ: 08479500
Nejsem plátcem DPH.
Zapsán u živnostenského úřadu České Budějovice.

*Patička na každé stránce*
Klikaweby© Všechyn práva vyhrazena | Obchodní podmínky | Zásady ochrany osobních údajů
Jan Klika, Horní Bukovsko 16, 373 65 Dolní Bukovsko

Zásady ochrany osobních údajů
1. Základní ustanovení
1.1 Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů (dále jen: „GDPR”) je Jan Klika, IČ 08479500 se sídlem Horní Bukovsko 16, 373 65 Dolní Bukovsko (dále jen: „Správce“).
1.2 Kontaktní údaje Správce:
Adresa: Horní Bukovsko 16, 373 65 Dolní Bukovsko
E‑mail: j.klika@post.cz
Telefon: +420 732 545 963
1.3 Osobními údaji se rozumí veškeré informace o identifikované nebo identifikovatelné fyzické osobě; identifikovatelnou fyzickou osobou je fyzická osoba, kterou lze přímo či nepřímo identifikovat, zejména odkazem na určitý identifikátor, například jméno, identifikační číslo, lokační údaje, síťový identifikátor nebo na jeden či více zvláštních prvků fyzické, fyziologické, genetické, psychické, ekonomické, kulturní nebo společenské identity této fyzické osoby.
1.4 Správce nejmenoval pověřence pro ochranu osobních údajů.
2. Zdroje a kategorie zpracovávaných osobních údajů
2.1 Správce zpracovává osobní údaje, které jste mu poskytl/a nebo osobní údaje, které Správce získal na základě plnění Vaší objednávky.
2.2 Správce zpracovává Vaše identifikační a kontaktní údaje a údaje nezbytné pro plnění smlouvy.
3. Zákonný důvod a účel zpracování osobních údajů
3.1 Zákonným důvodem zpracování osobních údajů je
plnění smlouvy mezi Vámi a Správcem podle čl. 6 odst. 1 písm. b) GDPR,
oprávněný zájem Správce na poskytování přímého marketingu (zejména pro zasílání obchodních sdělení a newsletterů) podle čl. 6 odst. 1 písm. f) GDPR,
Váš souhlas se zpracováním pro účely poskytování přímého marketingu (zejména pro zasílání obchodních sdělení a newsletterů) podle čl. 6 odst. 1 písm. a) GDPR ve spojení s § 7 odst. 2 zákona č. 480/2004 Sb., o některých službách informační společnosti v případě, že nedošlo k objednávce zboží nebo služby.
3.2 Účelem zpracování osobních údajů je
vyřízení Vaší objednávky a výkon práv a povinností vyplývajících ze smluvního vztahu mezi Vámi a Správcem; při objednávce jsou vyžadovány osobní údaje, které jsou nutné pro úspěšné vyřízení objednávky (jméno a adresa, kontakt), poskytnutí osobních údajů je nutným požadavkem pro uzavření a plnění smlouvy, bez poskytnutí osobních údajů není možné smlouvu uzavřít či jí ze strany Správce plnit,
zasílání obchodních sdělení a činění dalších marketingových aktivit.
3.3 Ze strany Správce nedochází k automatickému individuálnímu rozhodování ve smyslu čl. 22 GDPR. S takovým zpracováním jste poskytl/a svůj výslovný souhlas.
4. Doba uchovávání údajů
4.1 Správce uchovává osobní údaje
po dobu nezbytnou k výkonu práv a povinností vyplývajících ze smluvního vztahu mezi Vámi a Správcem a uplatňování nároků z těchto smluvních vztahů (po dobu 15 let od ukončení smluvního vztahu).
po dobu, než je odvolán souhlas se zpracováním osobních údajů pro účely marketingu, nejdéle 10 let, jsou-li osobní údaje zpracovávány na základě souhlasu.
4.2 Po uplynutí doby uchovávání osobních údajů Správce osobní údaje vymaže.
5. Příjemci osobních údajů (subdodavatelé správce)
5.1 Příjemci osobních údajů jsou osoby 
podílející se na dodání zboží / služeb / realizaci plateb na základě smlouvy,
podílející se na zajištění provozu služeb,
zajišťující marketingové služby.
5.2 Správce nemá v úmyslu předat osobní údaje do třetí země (do země mimo EU) nebo mezinárodní organizaci. Příjemci osobních údajů ve třetích zemích jsou poskytovatelé mailingových služeb / cloudových služeb.
6. Vaše práva
6.1 Za podmínek stanovených v GDPR máte
právo na přístup ke svým osobním údajům dle čl. 15 GDPR,
právo opravu osobních údajů dle čl. 16 GDPR, popřípadě omezení zpracování dle čl. 18 GDPR.
právo na výmaz osobních údajů dle čl. 17 GDPR.
právo vznést námitku proti zpracování dle čl. 21 GDPR a
právo na přenositelnost údajů dle čl. 20 GDPR.
právo odvolat souhlas se zpracováním písemně nebo elektronicky na adresu nebo e‑mail správce uvedený v části 1. Základní ustanovení (oddíl 1.2) těchto podmínek.
6.2 Dále máte právo podat stížnost u Úřadu pro ochranu osobních údajů v případě, že se domníváte, že bylo porušeno Vaší právo na ochranu osobních údajů.
7. Podmínky zabezpečení osobních údajů
7.1 Správce prohlašuje, že přijal veškerá vhodná technická a organizační opatření k zabezpečení osobních údajů.
7.2 Správce přijal technická opatření k zabezpečení datových úložišť a úložišť osobních údajů v listinné podobě, zejména použití antivirových programů, bezpečné uložení záloh, bezpečná přístupová hesla apod.
7.3 Správce prohlašuje, že k osobním údajům mají přístup pouze jím pověřené osoby.
8. Závěrečná ustanovení
8.1 Odesláním objednávky z internetového objednávkového formuláře potvrzujete, že jste seznámen/a s podmínkami ochrany osobních údajů a že je v celém rozsahu přijímáte.
8.2 S těmito podmínkami souhlasíte zaškrtnutím souhlasu prostřednictvím internetového formuláře. Zaškrtnutím souhlasu potvrzujete, že jste seznámen/a s podmínkami ochrany osobních údajů a že je v celém rozsahu přijímáte.
8.3 Správce je oprávněn tyto podmínky změnit. Novou verzi podmínek ochrany osobních údajů zveřejní na svých internetových stránkách, případně Vám zašle novou verzi těchto podmínek na e‑mailovou adresu, kterou jste Správci poskytl/a.
Tyto podmínky nabývají účinnosti dne 10.2.2026


Obchodní podmínky
1. Úvodní ustanovení
1.1 Zhotovitel: Jan Klika , IČ: 08479500, Horní Bukovsko 16, 373 65 Dolní Bukovsko, dále jako „Zhotovitel“
1.2 Objednatel: Objednatelem služeb může být fyzická nebo právnická osoba, které zhotovitel poskytuje služby na základě objednávky nebo smlouvy, dle těchto podmínek, dále jako „Objednavatel“
1.3 Všeobecné obchodní podmínky: Všeobecné obchodní podmínky, dále jako „VOP“
1.4 Odchylná ujednání ve Smlouvě mají přednost před ustanoveními VOP.
2. Vymezení pojmů
2.1 Podmínkami se rozumí tyto všeobecné obchodní podmínky.
2.2 VOP definují obchodní vztah mezi Zhotovitelem a Objednatelem. V souladu s nimi Zhotovitel poskytuje/poskytne Objednateli (na základě objednávky nebo smlouvy) služby za podmínek definovaných v konkrétní objednávce či smlouvě.
3. Objednání služeb — SMLOUVA
3.1 E‑mailová zpráva, z níž zřetelně vyplývá požadavek na objednání konkrétní služby, může být rovněž považována za E‑mailovou závaznou objednávku bez dalšího potvrzení Objednatele.
3.2 Smlouva se uzavírá výhradně písemně nebo elektronicky formou e‑mailu. Telefonické objednávky nepřijímám.
3.3 Smlouva je uzavřena v okamžiku, kdy Zhotovitel akceptuje Objednávku zaslanou Objednatelem.
3.4 Zhotovitel má právo odmítnout realizaci objednávky v případě, že je v rozporu se zákony, dobrými mravy, vyhláškami, pokud odporuje zájmům zhotovitele nebo pokud by mohla poškodit dobré jméno Zhotovitele.
3.5 Údaje dodané Objednatelem jsou Zhotovitelem považovány za správné a platné. Objednatel je povinen uvést pravdivé údaje. Zhotovitel není povinen tyto údaje ověřovat či jinak kontrolovat.
3.7 Objednatel potvrzuje, že jím poskytnuté osobní údaje jsou přesné a že jde z jeho strany o dobrovolné poskytnutí údajů.
3.8 Objednatel souhlasí s použitím komunikačních prostředků na dálku při uzavírání Smlouvy.
3.9 Objednatel bere na vědomí, že Zhotovitel není povinen uzavřít smlouvu nebo přijmout objednávku a to zejména s osobami, které dříve podstatným způsobem porušily smlouvu včetně VOP.
3.10 Objednatel bere na vědomí, že objednání hostingových služeb a doménového jména musí provádět samostatně a na své náklady a jméno. Případně objednávku vyřídí Zhotovitel jménem a s písemným souhlasem Objednatele.
4. Podklady pro tvorbu díla
4.1 Objednatel dodává veškeré textové podklady, překlady, dokumenty atd. pokud dodání obsahového materiálu nebylo sjednáno jinak.
4.2 Objednatel je povinen dodat veškeré podklady, jejichž použití vyžaduje následná tvorba, a to v elektronické podobě (prostřednictvím e‑mailu či přes server Uschovna.cz). A to zejména všechny kontaktní informace pro použití na web, texty, odkazy na sociální sítě, přístupy na hosting, do databáze a v případě redesignu webu do administrace webu.
4.3 Fotografie a obrázky je potřeba dodat v rastrovém formátu BMP, JPG, JPEG, PNG nebo GIF. Logo je potřeba dodat ve vektorovém formátu PDF, případně může být použitý jiný formát (PNG, JPG), pokud bude rozlišení dostatečně kvalitní pro další zpracování.
4.4 Textové podklady je potřeba dodat ve formátech doc, docx, rtf nebo txt (stránky musí být řádně označeny a viditelně odděleny).
4.5 Zhotovitel nezodpovídá za chyby a problémy, jestliže tyto chyby byly způsobeny použitím materiálů předaných mu Objednatelem v případě, že Zhotovitel nemohl vliv těchto materiálů zjistit nebo na jejich použití Objednatel trval.
5. Pravidla pro obsah
5.1 Objednatel nesmí provozovat Závadný obsah.
5.2 Objednatel nese odpovědnost za publikovaný obsah jeho webových stránek (porušení práv k ochranným známkám, práv k obchodní firmě, autorských práv).
5.3 Zhotovitel neodpovídá za protiprávní úkony Objednatele v souvislosti s dodaným obsahovým materiálem (porušení práv k ochranným známkám, práv k obchodní firmě, autorských práv).
5.4 Zhotovitel je případně povinen odstranit protiprávní informace uložené Objednatelem, dozví-li se o jejich protiprávnosti. Tyto kroky jsou následně účtovány Objednavateli.
5.5 Webové stránky nesmí sloužit k rozesílání nevyžádaných obchodních sdělení (spamu) nebo nevyžádaných sdělení obecně.
5.6 Objednatel nesmí v rámci mých služeb šířit počítačové viry.
6. Práva a povinnosti
6.1 Objednatel je povinen se před zadáním objednávky seznámit s obsahem VOP.
6.2 Objednatel se zavazuje zajistit Zhotoviteli veškeré podmínky nezbytné pro řádné poskytování služeb, zejména se Objednatel zavazuje zajistit a/nebo poskytnout všechny potřebné podklady a přístupy a to bez zbytečného odkladu.
6.3 Součinnost a dodání veškerých potřebných přístupů.
6.4 Zhotovitel se zavazuje během zpracovávání dílo konzultovat s objednatelem a případné změny při provádění díla může provádět jen se souhlasem Objednatele. Jednotlivé kroky zajištění předmětu díla budou realizovány až po odsouhlasení jejich finálních návrhů Objednatelem. Pokud Objednatel neposkytne v dostatečném předstihu Zhotoviteli potřebné pokyny, je Zhotovitel oprávněn postupovat samostatně tak, aby byly řádně chráněny zájmy Objednatele, které Zhotovitel zná nebo znát má.
Zhotovitel dílo jako celek i jeho jednotlivé výstupy zpracuje bez věcných a formálních chyb, v řádné kvalitě, včas a v dohodnuté formě.
6.5 Zhotovitel je povinen v průběhu provádění díla informovat Objednatele o skutečnostech, které mohou mít vliv na provedení díla. Zhotovitel je při plnění této smlouvy povinen postupovat s náležitou odbornou péčí, zajišťovat plnění smlouvy v souladu se zájmy Objednatele, které zná nebo znát má, oznámit Objednateli všechny okolnosti, které zjistí při výkonu své činnosti a jež mohou mít vliv na změnu pokynů objednatele. Zjistí-li Zhotovitel kdykoliv v průběhu plnění této smlouvy, že pokyny Objednatele jsou nevhodné či pro plnění předmětu této smlouvy neúčelné, je povinen na to Objednatele upozornit.
6.6 S osobními údaji Objednatele je nakládáno plně v souladu s ustanoveními zákona č. 101/2000 Sb.
6.7  Zhotovitel při realizaci díla postupuje samostatně a není při provádění díla vázán pokyny Objednatele.
6.8 Zhotovitel si vyhrazuje právo dočasně přerušit či omezit poskytování služby v nezbytném rozsahu bez předchozího upozornění Objednatele, je-li služba využívána v rozporu se smlouvou, objednávkou nebo při porušení závazků daných VOP.
6.9 Zhotovitel si vyhrazuje právo poskytnout údaje nutné pro výkon díla třetím stranám – například při registraci domény, zřízení webhostingu, zajištění tisku atd.
6.10 Zhotovitel si vyhrazuje právo upravit funkce a grafické provedení webových stránek v rámci funkčnosti, responzivity a správného zobrazení u materiálů dodaných ke zpracování Objednatelem.
6.11 Zhotovitel nenese zodpovědnost za obchodní výsledky Objednatele.
7. Fakturace a platební podmínky
7.1 Objednatel se zavazuje k zaplacení ceny za provedení díla včetně víceprací nad rámec dohodnuté ceny, která mu bude známá a domluvená v průběhu provádění díla.
7.2 Zhotovitel je oprávněn požadovat od objednatele zálohu na realizaci díla ve výši 40 % z celkové ceny před započetím tvorby díla. Zbývající část ceny je Objednatel povinen uhradit po převzetí díla dle faktury.
7.3 Faktury jsou vystavovány se splatností 3 až 14 dnů a zasílány v elektronické podobě na elektronickou adresu Objednatele v den vystavení.
7.4 Objednatel se zavazuje provádět platby nejpozději k datu splatnosti faktury nebo výzvy k platbě. Dnem platby se rozumí den připsání platby na účet Zhotovitele.
7.5 Teprve po úplném uhrazení faktury nebo výzvy k platbě obdrží Objednatel plné přístupy k webovým stránkám a k administraci služeb.
7.7 Zálohu na realizaci objednávky je povinen objednatel uhradit do 7 dnů pracovních dnů od potvrzení objednávky. Záloha na realizaci je nevratná.
7.8 Protokolárním převzetím a schválením díla uznává Objednatel svůj peněžní závazek vůči Zhotoviteli.
7.9 Objednatel je povinen provést platbu dle pokynů vystavené faktury v přesné částce a označit ji uvedeným variabilním symbolem.
7.10 V případě prodlení s platbou Objednatele za doobjednané služby a rozšíření stávajícího díla je Zhotovitel oprávněn zakázat užívání již předaných prvků, pozastavit přístup Objednatele do správy webových stránek případně k jejich odstavení.
8. Podmínky dodání a předání díla
8.1 Dílo zůstává ve vlastnictví Zhotovitele až do úplného uhrazení faktury a všech závazků vůči Zhotoviteli. Do doby uhrazení ceny díla není Objednatel oprávněn využívat dílo pro svůj prospěch. 
8.2 V případě, že je webová stránka spuštěna před úplným uhrazením všech závazků Zhotoviteli, má Zhotovitel právo pozastavit webovou stránku a znepřístupnit ji veřejnosti do doby plného splacení všech závazků.
8.3 Objednatel je oprávněn odstoupit od smlouvy ze zákonných důvodů, zejména pak v případě, kdy je Zhotovitel v prodlení oproti smluvenému termínu dokončení o více než jeden měsíc nebo předávané dílo z velké části neodpovídá sjednanému.
8.4 Podmínkou pro získání přístupu ke zdrojovému kódu, užité grafice a administraci je vyrovnání všech finančních závazků Objednatele.
8.5 Získání přístupu ke zdrojovému kódu webové prezentace ze strany Objednavatele zbavuje Zhotovitele veškeré odpovědnosti za škodu a odpovědnosti za vady webové prezentace a to i v případě, kdy nebyla podepsána písemná dohoda. Zhotovitel v žádném případě nezodpovídá za problémy respektive ušlý zisk, který by vznikl zásahem Objednatele do kódu prezentace, vadou díla, či jeho nedostupností.
8.5 Dílo nebo objednávka je dokončena ve stanoveném termínu nebo dříve.
8.7 Bude-li Objednatel v prodlení s dodáním potřebných podkladů, je Poskytovatel oprávněn posunout výše uvedené termíny plnění o dobu prodlení Objednatele s dodáním potřebných podkladů, případně navíc o dobu potřebnou k opětovné alokaci zdrojů potřebných pro poskytnutí Dodávky.
8.8 Pokud Objednatel nebude schopen nebo ochoten pokračovat v realizaci Dodávky nebo dodat podklady nezbytné pro pokračování v realizaci Dodávky tak, aby byla poskytnuta v dohodnutém termínu, je povinen uhradit k tomuto termínu alikvotní částku odpovídající ceně Dodávky realizované k tomuto datu.
9. Údržba webových stránek
9.1 Rozsah prací spadajících do údržby webových stránek naleznete na stránce CO NABÍTÍM (oddíl 02 / EDITACE A PÉČE)
9.2 Objednatel se zavazuje nahlásit vady bezprostředně po jejích zjištění primárně na e‑mailovou adresu: j.klika@post.cz
9.3  Zhotovitel se zavazuje zahájit úpravu zjištěných vad nejdéle do:
a) 48 hodin u textových vad
b) 24 hodin u grafických vad
c) 12 hodin v případě vad ve funkčnosti webových stránek
9.4 Vady, které nespadají do shora uvedených kategorií, budou odstraněny nejpozději do 5 pracovních dnů od zahájení nápravy.9.5 Pokud Objednatel neposkytne Zhotoviteli náležitou součinnost pro řádný výkon smluvených prací, nemůže se dovolávat lhůt plnění uvedených v tomto článku.
Vady zapříčiněné cizím zaviněním
9.6 Závady zapříčiněné cizím zaviněním nejsou považovány za závady způsobené Zhotovitelem a nevztahuje se na ně doba odezvy.
9.7 Závady zapříčiněné cizím zaviněním se rozumí závady vzniklé na webových stránkách při manipulaci Objednatele se zdrojovými soubory stránek serveru, manipulaci s databází, nastavením parametrů serveru, které zapříčiní závady na webových stránkách a také závady vzniklé útokem na stránky třetí osobou hackerské útoky, mallware atd.
9.8 Odstranění vad spojené se zjištěním útoků třetích stran – hackerů, mallware a dalších virů nespadá pod kompetence Zhotovitele, ale do kompetence programátora. Zhovotovitel může poskytnout součinnost při řešení závad (např. vyhledání vhodného programátora zaměřujícího se na odstranění mallware apod.)
9.9 Objednatel není povinen se Zhotoviteli zavázat k placení měsiční údržby webových stránek. K nepřijetí údržby není vázaná služba dodání webových stránek.
9.10 Objednatel je ovšem povinen informovat Zhotovitele, jestliže si nepřeje měsiční údržbu webových stránek a to v poptávce, anebo v závazné objednávce.
9.11 Zhotovitel nenese žádnou odpovědnost za škody způsobené Objednatelem, jestliže vlastním přičiněním způsobí nefunkčnost stránky.
Fakturace a platební podmínky za údržbu webových stránek
9.12 Cena za údržbu webových stránek bude Objednateli známá v kalkulaci za dodání webových stránek. Cena je vypočítána dle velikosti webových stránek a funkcí. Ceník základní údržby naleznete na stránce CO NABÍZÍM (oddíl 02 / EDITACE A PÉČE)
10. Vady, výpadky webhostingových služeb
10.1 Zhotovitel nezodpovídá za vady a výpadky webhostingové služby dodané Objednatelem.10.2 Zhotovitel nezodpovídá za výpadky webhostingové služby zajištěnou poskytovatelem webhostingových služeb.
11. Reklamace a odstoupení od smlouvy
11.1 Zhotovitel je oprávněn odstoupit od smlouvy ze zákonných důvodů, zejména pak v případě, jestliže je Objednatel s placením záloh nebo splátek v prodlení větším než 14 dnů. 11.2 Zhotovitel je oprávněn odstoupit od smlouvy, jestliže je termín pro předání podkladů pro dokončení díla nebo termín konečné kontroly a schválení díla překročen Objednatelem o více než jeden měsíc. 11.3 Je-li k tvorbě díla nutná součinnost Objednatele, je Zhotovitel oprávněn určit přiměřenou lhůtu k součinnosti a po jejím uplynutí může od smlouvy odstoupit, upozorní-li na takový následek Objednatele. 11.4 Zhotovitel je oprávněn odstoupit od smlouvy, jestliže mu Objednatel brání k odvedení profesionální práce dle všech designérských a kodérských standardů, a jestliže Objednavatel ve skutečnosti nepotřebuje webmastera s podřebnými kvalitami, kterými Zhotovitel disponuje. 11.5 Zhotovitel nezodpovídá za problémy respektive ušlý zisk, v případě závady ze strany hostingové společnosti, jako například nedostupnost serveru, zavirování, problémy vzniklé únikem dat atd. 11.6 V případě zjištění cizího zásahu do zdrojového kódu nebo nevhodného používání není Objednatel oprávněn požadovat bezplatné odstranění závad. Toto zjištění není považováno za porušení funkčnosti ze strany Zhotovitele. 11.7 Reklamaci může uplatňovat pouze Objednatel, tj. osoba, která provádí objednávku, nebo osoba uvedená ve smlouvě o dílo. 11.8 Na služby poskytnuté zdarma nebo formou bonusu není možné uplatňovat reklamace, Objednatel má právo takové bonusy odmítnout. 11.9 Odstoupením od smlouvy nebo stornováním potvrzené objednávky vzniká Zhotoviteli nárok na úhradu prací, které byly zhotoveny do data odstoupení od smlouvy a to nejpozději do 7 dnů. 11.10 Objednatel má možnost odstoupit od smlouvy v okamžiku, kdy je zásadně nespokojen s grafickým návrhem vytvořeným Zhotovitelem a to pouze v případě, kdy se grafický návrh podstatně neslučuje se zadáním Objednatele.
12. Prohlášení o ochraně osobních údajů
12.1 Respektuju zákon č. 101/2000 Sb. o ochraně osobních údajů v podobě jeho aktuálního znění a dle toho i nakládám s Vašimi údaji.
12.2 Veškerá data uchovávám pouze po dobu nutnou k jejich zpracování, a to pouze pokud je zpracování potřeba.
12.3 Vyhrazuji si však právo tyto údaje poskytnout orgánům činným v soudním či jiném trestním řízení či šetření.
13. Závěrečná ustanovení
13.1 V případě vyšší moci je každá strana zproštěna svých závazků ze Smlouvy a jakékoliv prodlení v plnění jakéhokoliv závazku vyplývajícího ze Smlouvy bude tolerováno a smluvní strana postižená zásahem vyšší moci nebude odpovědná za škody nebo jinak, pokud takové prodlení nebo škoda bude přímým nebo nepřímým důsledkem vyšší moci.
13.2 Tyto všeobecné obchodní podmínky tvoří nedílnou součást každé objednávky či smlouvy.
13.3 Veškeré zde neuvedené vztahy smluvních stran se řídí dle platného zákoníku.
13.4 Objednatel souhlasí s těmito obchodními podmínkami.
13.5 Zhotovitel a Objednatel se dohodli, že plně uznávají elektronickou formu komunikace, zvláště pak prostřednictvím elektronické pošty a internetové sítě, jako platnou a závaznou pro obě smluvní strany.
Tyto Obchodní podmínky nabývají účinnost od 10.2.2026
