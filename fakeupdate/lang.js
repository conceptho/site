$(function () {
  // Lets be professional, shall we?
  "use strict";
  // Some variables for later
  var dictionary, set_lang;
  var userLang = navigator.language || navigator.userLanguage;
  // Object literal behaving as multi-dictionary
  dictionary = {
    "english": {
      "_fakewindowsupdates": "Fake Windows Update Screens",
      "_prankyourfriends": "Prank your friends and colleagues with fake update screens!",
      "_pressf11": "Press on the right to go fullscreen (ESC to leave fullscreen)",
      "_pressenter": "Press ENTER to cause a BSOD",
      "_video": "Video Overview",
      "_selecttheme": "Click to go fullscreen, then select a theme",
      "_relyonads": "We rely on ads to host this site, please consider whitelisting it if you like it! :)",

      "_winVistaupdates1": "Configuring updates: Stage",
      "_winVistaOf": "of",

      "_win7configuringupdates": "Configuring Windows Updates",
      "_win7percent": "complete.",
      "_win7donotturnoff": "Do not turn off your computer.",

      "_winXPupdates1": "Installing Windows Updates...",
      "_winXPupdates2": "Do not turn off or unplug your computer.",

      "_win10updates1": "Installing Windows 10",
      "_win10updates2": "Your PC will restart several times. Sit back and relax.",

      "_win10updates3": "Copying Files",
      "_win10updates4": "Installing features and drivers",
      "_win10updates5": "Configuring Settings"


    },
    "spanish": {
      "_fakewindowsupdates": "Pantallas de actualización de Windows falsas",
      "_prankyourfriends": "¡Bromea a tus amigos y compañeros de trabajo con pantallas de actualización falsas!",
      "_pressf11": "Pulsa F11 para ir a pantalla completa",
      "_pressenter": "Pulsa ENTER para causar una pantalla azul",
      "_video": "Vídeo de introducción",
      "_selecttheme": "Selecciona un tema",
      "_relyonads": "Dependemos de los anuncios para hostear este sitio. Por favor, ¡considera añadirlo a tu lista blanca si te gusta! :)",
      "_winVistaupdates1": "Configurando actualizaciones: Paso",
      "_winVistaOf": "de",
      "_win7configuringupdates": "Configurando las actualizaciones de Windows",
      "_win7percent": "completado",
      "_win7donotturnoff": "No apague el equipo.",
      "_winXPupdates1": "Instalando actualizaciones de Windows...",
      "_winXPupdates2": "No apague ni desconecte el equipo.",
      "_win10updates1": "Instalando Windows",
      "_win10updates2": "El PC se reiniciará varias veces. Ponte cómodo y relájate.",
      "_win10updates3": "Copiando archivos",
      "_win10updates4": "Instalando características y controladores",
      "_win10updates5": "Estableciendo la configuración"  	,
      "_win10workingonupdates": "Trabajando en las actualizaciones",
      "_win10donotturnoff": "No apague su equipo. Esto puede tardar un poco.",
      "_win10willrestart": "Su equipo se reiniciará varias veces"
    },
    "bulgarian": {
      "_language": "Български",
      "_fakewindowsupdates": "Фалшиви екрани за актуализации на Windows",
      "_prankyourfriends": "Пошегувайте се с вашите приятели и колеги с тези фалшиви екрани!",
      "_pressf11": "Натиснете F11 за да включите цял екран",
      "_pressenter": "Натиснете Enter за да се появи син екран",
      "_video": "Преглед на видео",
      "_selecttheme": "Изберете тема",
      "_relyonads": "Разчитаме на реклами за да хостваме този сайт, моля, смятайте сайта за добронамерен, ако ви е харесал! :)",
      "_winVistaupdates1": "Конфигуриране на актуализации: Етап",
      "_winVistaOf": "от",
      "_win7configuringupdates": "Конфигуриране на актуализациите за Windows",
      "_win7percent": "завършено.",
      "_win7donotturnoff": "Не изключвайте вашия компютър.",
      "_winXPupdates1": "Инсталиране на актуализации за Windows...",
      "_winXPupdates2": "Не изключвайте вашия компютър.",
      "_win10updates1": "Инсталиране на Windows 10",
      "_win10updates2": "Компютърът ви ще се рестартира няколко пъти. Седнете и се отпуснете.",
      "_win10updates3": "Копиране на файлове",
      "_win10updates4": "Инсталиране на функции и драйвъри",
      "_win10updates5": "Конфигуриране на настройки",
      "_win10workingonupdates": "Работим върху актуализации",
      "_win10donotturnoff": "Не изключвайте вашия компютър. Това ще отнеме време.",
      "_win10willrestart": "Компютърът ви ще се рестартира няколко пъти"
    },
    "lithuanian": {
      "_language": "Lietuvių",
      "_fakewindowsupdates": "Netikri Windows atnaujinimų ekranai",
      "_prankyourfriends": "Apgauk savo draugus ir kolegas su netikru atnaujinimų ekranu!",
      "_pressf11": "Spausk F11, kad įeitumėte į visą ekraną",
      "_pressenter": "Spausk ENTER sukelti BSOD",
      "_video": "Video peržiūra",
      "_selecttheme": "Pasirink temą",
      "_relyonads": "Mes naudojame reklamas, kad išgyventume. Jei tau patinka šis puslapis - pasvarstyk apie jo įtraukimą į leidžiamų sąrašą! :)",
      "_winVistaupdates1": "Konfigūruojami atnaujinimai: Etapas",
      "_winVistaOf": "iš",
      "_win7configuringupdates": "Konfigūruojami atnaujinimai",
      "_win7percent": "baigta.",
      "_win7donotturnoff": "Neišjunkite kompiuterio.",
      "_winXPupdates1": "Diegiami atnaujinimai...",
      "_winXPupdates2": "Neišjunkite ar atjunkite kompiuterio iš maitinimo.",
      "_win10updates1": "Diegiami Windows 10",
      "_win10updates2": "Jūsų kompiuteris persikraus kelis kartus. Prisėskite ir atsipalaiduokite.",
      "_win10updates3": "Kopijuojami failai",
      "_win10updates4": "Diegiami priedai ir tvarkyklės",
      "_win10updates5": "Konfigūruojami nustatymai",
      "_win10workingonupdates": "Tvarkomi atnaujinimai",
      "_win10donotturnoff": "Neišjunkite kompiuterio. Tai šiek tiek užtruks.",
      "_win10willrestart": "Jūsų kompiuteris persikraus kelis kartus"
    },
    "russian": {
      "_fakewindowsupdates": "Поддельные «обновления» Windows",
      "_prankyourfriends": "Разыграйте своих друзей и колег с ненастояшими обновлениями :)",
      "_pressf11": "Нажмите F11, чтобы перейти на весь экран",
      "_pressenter": "Нажмите ENTER, чтобы вызвать синий экран",
      "_video": "Видео Обзор",
      "_selecttheme": "Выберите тему",
      "_relyonads": "We rely on ads to host this site, please consider whitelisting it if you like it! :)",
      "_winVistaupdates1": "Настройка обновлений: этап",
      "_winVistaOf": "из",
      "_win7configuringupdates": "Выполняется установка обновления",
      "_win7percent": "завершено.",
      "_win7donotturnoff": "Не отключайте компьютер",
      "_winXPupdates1": "Выполняется установка обновления...",
      "_winXPupdates2": "Не отключайте компьютер",
      "_win10updates1": "Установка Windows 10",
      "_win10updates2": "Ваш компьютер перезагрузится несколько раз. Подождите.",
      "_win10updates3": "Копирование файлов",
      "_win10updates4": "Установка компонентов и драйверов",
      "_win10updates5": "Настройка параметров",
      "_win10workingonupdates": "Работа с обновлениями",
      "_win10donotturnoff": "Не выключайте компьютер. Это может занять некоторое время.",
      "_win10willrestart": "Компьютер перезагрузится несколько раз."
    },
    "german": {
      "_fakewindowsupdates": "Gefälschte Windows Update Screens",
      "_prankyourfriends": "Lege deine Freunde, Familie und Kollegen mit diesen Fake Windows Updates rein.",
      "_pressf11": "F11 macht es Vollbild",
      "_pressenter": "ENTER gibt einen BSOD",
      "_video": "Video",
      "_selecttheme": "Wählen Sie ein Thema",
      "_relyonads": "We rely on ads to host this site, please consider whitelisting it if you like it! :)",
      "_winVistaupdates1": "Windows-Updates werden konfiguriert",
      "_winVistaOf": "von",
      "_win7configuringupdates": "Windows-Updates werden konfiguriert",
      "_win7percent": "abgeschlossen.",
      "_win7donotturnoff": "Schalten Sie den Computer nicht aus.",
      "_winXPupdates1": "Windows-Updates werden konfiguriert...",
      "_winXPupdates2": "Lassen Sie den Computer bis zum Abschluss dieses Vorgangs angeschlossen.",
      "_win10updates1": "Windows 10 wird installiert",
      "_win10updates2": "Ihr PC wird mehrmals neu gestartet.",
      "_win10updates3": "Kopieren von Dateien",
      "_win10updates4": "Installieren von Funktionen und Treiber",
      "_win10updates5": "Konfigurieren von Einstellungen",
      "_win10workingonupdates": "Updates werden verarbeitet",
      "_win10donotturnoff": "Schalten Sie den Computer nicht aus",
      "_win10willrestart": "Ihr PC wird einige Male neu gestartet"
    },
    "turkish": {
      "_fakewindowsupdates": "Sahte Windows Güncelleme Ekranları",
      "_prankyourfriends": "Arkadaşlarını ve iş arkadaşlarını sahte güncelleme ekranlarıyla kandır!",
      "_pressf11": "Tam ekran moduna girmek için F11'e bas",
      "_pressenter": "Mavi ekran hatası için ENTER'a bas",
      "_video": "Video İncelemesi",
      "_selecttheme": "Bir tema seçin",
      "_relyonads": "Biz bu siteyi reklamlara güvenerek sunucularımızda barındırıyoruz. Lütfen beğendiyseniz sitemizi güvenilir listenize (whitelist) alın :)",
      "_winVistaupdates1": "Güncellemeler yapılandırılıyor: ",
      "_winVistaOf": "/",
      "_win7configuringupdates": "Windows Güncellemeleri yapılandırılıyor",
      "_win7percent": "tamamlandı.",
      "_win7donotturnoff": "Bilgisayarınızı kapatmayın.",
      "_winXPupdates1": "Windows Güncellemeleri yükleniyor...",
      "_winXPupdates2": "Bilgisayarınızı kapatmayın veya fişini çekmeyin.",
      "_win10updates1": "Windows 10 yükleniyor",
      "_win10updates2": "Bilgisayarınız bir kaç kez yeniden başlatılacak. Arkanıza yaslanın ve rahatlayın.",
      "_win10updates3": "Dosyalar Kopyalanıyor",
      "_win10updates4": "Özellikler ve sürücüler yükleniyor",
      "_win10updates5": "Ayarlar yapılandırılıyor"
    },
    "danish": {
      "_fakewindowsupdates": "Falske Windows Opdaterings skærmbilleder",
      "_prankyourfriends": "Snyd dine venner og kollegaer med falske skærmbilleder!",
      "_pressf11": "Tryk F11 for at gå til fuldskærm",
      "_pressenter": "Tryk ENTER for at fremtvinge blå skærm BSOD",
      "_video": "Video Oversigt",
      "_selecttheme": "Vælg et tema",
      "_relyonads": "Vi har reklamer for at betale denne side, overvej venligst at whiteliste den i din adblocker, hvis du kan li det vi laver! :) ",
      "_winVistaupdates1": "Konfigurerer Opdateringer: Trin",
      "_winVistaOf": "af",
      "_win7configuringupdates": "Konfigurerer Windows Opdateringer",
      "_win7percent": "fuldført.",
      "_win7donotturnoff": "Sluk ikke for computeren.",
      "_winXPupdates1": "Installerer Windows Opdatering…",
      "_winXPupdates2": "Sluk ikke for computeren eller tage stikket ud.",
      "_win10updates1": "Installerer Windows 10",
      "_win10updates2": "Din PC vil genstarte op til flere gange.",
      "_win10updates3": "Kopierer filer",
      "_win10updates4": "Installerer funktioner og drivere",
      "_win10updates5": "Konfigurerer Indstillinger"         ,
      "_win10workingonupdates": "Arbejder på opdateringer",
      "_win10donotturnoff": "Du må ikke slukke computeren. Dette kommer til at tage et stykke tid.",
      "_win10willrestart": "Din PC vil genstarte flere gange"
    },
    "polish": {
      "_fakewindowsupdates": "Fałszywe okno Windows Update",
      "_prankyourfriends": "Nabierz swoich znajomych przy pomocy fałszywego okna aktualizacji!",
      "_pressf11": "Naciśnij F11 by przejść w tryb pełnoekranowy",
      "_pressenter": "Naciśnij ENTER aby uruchomić BSOD (bluecreen)",
      "_video": "Podgląd wideo",
      "_selecttheme": "Wybierz motyw",
      "_relyonads": "Nasza strona utrzymuje się z reklam, jeżeli Ci się podoba dodaj ją do białej listy! :)",
      "_winVistaupdates1": "Konfigurowanie aktualizacji: Etap",
      "_winVistaOf": "z",
      "_win7configuringupdates": "Konfigurowanie aktualizacji Windows",
      "_win7percent": "ukończono.",
      "_win7donotturnoff": "Nie wyłączaj komputera.",
      "_winXPupdates1": "Instalowanie aktualizacji Windows...",
      "_winXPupdates2": "Nie wyłączaj komputera.",
      "_win10updates1": "Instalowanie Windows 10",
      "_win10updates2": "Twój komputer może się uruchomić ponownie kilka razy. Usiądź i się zrelaksuj.",
      "_win10updates3": "Kopiowanie plików",
      "_win10updates4": "Instalowanie funkcji i sterowników",
      "_win10updates5": "Konfigurowanie ustawień",
      "_win10workingonupdates": "Przygotowywanie aktualizacji",
      "_win10donotturnoff": "Nie wyłączaj komputera. Może to chwilę potrwać.",
      "_win10willrestart": "Twój komputer może uruchomić się ponownie kilka razy"
    },
    "italian": {
      "_fakewindowsupdates": "Schermata di Windows Update finta",
      "_prankyourfriends": "Prendi in giro i tuoi amici e colleghi con finte schermate di aggiornamento!",
      "_pressf11": "Premi F11 per entrare in modalità schermo intero",
      "_pressenter": "Premi “Invio” per causare una schermata blu",
      "_video": "Panoramica Video",
      "_selecttheme": "Seleziona un tema",
      "_relyonads": "Tiriamo avanti grazie alla publicità su questo sito, per favore considera di metterci nella whitelist se apprezzi questo servizio! :)",
      "_winVistaupdates1": "Configurazione degli aggiornamenti: Passo",
      "_winVistaOf": "di",
      "_win7configuringupdates": " Configurazione degli aggiornamenti di Windows",
      "_win7percent": "completato.",
      "_win7donotturnoff": "Non spegnere il computer.",
      "_winXPupdates1": "Sto installando gli aggiornamenti di Windows...",
      "_winXPupdates2": " Non spegnere o scollegare il computer.",
      "_win10updates1": "Installando Windows 10",
      "_win10updates2": "Il tuo PC verrà riavviato diverse volte. Siediti e rilassati.",
      "_win10updates3": "Copia dei file",
      "_win10updates4": "Installazione delle funzionalità e driver",
      "_win10updates5": "Configurazione delle impostazioni"
    },
    "hungarian": {
      "_fakewindowsupdates": "Hamis Windows Frissítő Képernyők",
      "_prankyourfriends": "Vicceld meg a barátaidat és kollégáidat hamis frissítő képernyőkkel!",
      "_pressf11": "A teljes képernyős módhoz üsd le az F11-et.",
      "_pressenter": "Üss ENTER-t az azonnali BSOD-hoz (kékhalálhoz)!",
      "_video": "Videós bemutató",
      "_selecttheme": "Válassz megjelenést",
      "_relyonads": "Reklámok bevételeiből tartjuk fenn a weboldalt; kérlek, tedd fehérlistára, ha tetszik :)",
      "_winVistaupdates1": "A Windows frissítése: jelenlegi szakasz: ",
      "_winVistaOf": "ennyiből:",
      "_win7configuringupdates": "A Windows frissítések konfigurálása",
      "_win7percent": "befejezve.",
      "_win7donotturnoff": "Ne kapcsolja ki a számítógépét.",
      "_winXPupdates1": "Windows frissítések telepítése...",
      "_winXPupdates2": "Ne kapcsolja ki és ne húzza ki a számítógépet.",
      "_win10updates1": "A Windows 10 telepítése",
      "_win10updates2": "A számítógép több alkalommal újra fog indulni. Dőljön hátra és relaxáljon.",
      "_win10updates3": "Fájlok másolása",
      "_win10updates4": "Illesztőprogramok és szolgáltatások telepítése",
      "_win10updates5": "Beállítások konfigurálása"
    },
    "korean": {
      "_fakewindowsupdates": "저 업데이트중이거든요!? 힝 속았지!",
      "_prankyourfriends": "잠깐 쉬고싶다면 가짜 업데이트 화면을 띄워 커피 한잔의 여유를 즐겨보세요.",
      "_pressf11": "F11키를 누르시면 전체화면으로 전환됩니다.",
      "_pressenter": "Enter 키를 누르시면 블루스크린도 뜬답니다",
      "_video": "소개 영상",
      "_selecttheme": "사용하시는 OS를 골라주세요!",
      "_relyonads": "본 사이트 운영 비용을 마련하기 위해 광고를 게재하였습니다. 귀엽게 봐주세요. :)",
      "_winVistaupdates1": "서비스 팩 설치중:",
      "_winVistaOf": "/",
      "_win7configuringupdates": "Windows Updates 구성 중",
      "_win7percent": "완료",
      "_win7donotturnoff": "컴퓨터의 전원을 끄지 마십시오.",
      "_winXPupdates1": "Windows Updates 설치 중...",
      "_winXPupdates2": "컴퓨터의 전원을 끄거나 전원을 차단하지 마십시오.",
      "_win10updates1": "Windows 업그레이드 중",
      "_win10updates2": "PC가 여러번 다시 시작됩니다. 잠시만 기다려 주세요.",
      "_win10updates3": "파일 복사중",
      "_win10updates4": "기능 및 드라이버 설치중",
      "_win10updates5": "설정 구성중"
    },
    "slovak": {
      "_fakewindowsupdates": "Falošné obrazovky Windows Update",
      "_prankyourfriends": "Vystrelte si z priateľov!",
      "_pressf11": "Pre zobrazenie na celú obrazovku stlačte F11",
      "_pressenter": "Pre BSOD stlačte ENTER",
      "_video": "Videoprehľad",
      "_selecttheme": "Vyberte tému",
      "_relyonads": "Hosting tejto stránky sa spolieha na reklamy. Ak sa Vám páči, zvážte ,prosím, whitelisting! :)",
      "_winVistaupdates1": "Konfigurácia aktualizácií: Časť",
      "_winVistaOf": "z",
      "_win7configuringupdates": "Konfigurácia aktualizácií Windows",
      "_win7percent": "dokončené.",
      "_win7donotturnoff": "Nevypínajte počítač.",
      "_winXPupdates1": "Inštalácia aktualizácií Windows...",
      "_winXPupdates2": "Neodpájajte a nevypínajte počítač.",
      "_win10updates1": "Inštaluje sa Windows 10",
      "_win10updates2": "Počítač sa niekoľkokrát reštartuje. Posaďte sa a relaxujte.",
      "_win10updates3": "Kopírovanie súborov",
      "_win10updates4": "Inštalujú sa funkcie a ovládače",
      "_win10updates5": "Konfigurácia nastavení"
    },
    "portuguese": {
      "_fakewindowsupdates": "Telas de Fake Windows Update",
      "_prankyourfriends": "Faça uma pegadinha com os seus colegas usando o Fake Windows Update!",
      "_pressf11": "Pressione F11 para ativar a tela cheia.",
      "_pressenter": "Pressione ENTER para causar a tela azul da morte",
      "_video": "Video Demonstração",
      "_selecttheme": "Selecione a versão do sistema operacional",
      "_relyonads": "Agente depende de propaganda para manter a hospedagem, por favor considere colocar nosso site no whitelist! :)",
      "_winVistaupdates1": "Configurando updates: Etapa",
      "_winVistaOf": "de",
      "_win7configuringupdates": "Configurando Windows Updates",
      "_win7percent": "completo.",
      "_win7donotturnoff": "Não desligue o seu computador.",
      "_winXPupdates1": "Instalando Windows Updates...",
      "_winXPupdates2": "Não desligue ou desconecte o seu computador.",
      "_win10updates1": "Instalando o Windows 10",
      "_win10updates2": "Seus computador irá reiniciar várias vezes. Sente e relaxe.",
      "_win10updates3": "Copiando Arquivos",
      "_win10updates4": "Instalando componentes e drivers",
      "_win10updates5": "Configurando o sistema",
      "_win10workingonupdates": "Trabalhando em atualizações",
      "_win10donotturnoff": "Não desligue seu computador. Poderá demorar um pouco.",
      "_win10willrestart": "Seu computador irá reiniciar várias vezes"
    },
    "hebrew": {
      "_fakewindowsupdates": "מסכי עדכון ווינדוס מזוייפים",
      "_prankyourfriends": "!הטרל את חבריך ושותפיך עם מסכי עדכון מזוייפים!",
      "_pressf11": "לחץ על F11 על מנת להכנס למסך מלא",
      "_pressenter": "לחץ על Enter על מנת לגרום ל-BSOD",
      "_video": "סקירת וידאו",
      "_selecttheme": "בחר ערכת נושא",
      "_relyonads": "אנו נסמכים על מודעות בשביל לאחסן אתר זה, אנא שקול להוסיף אותנו לרשימה הלבנה אם אהבת את זה! :)",
      "_winVistaupdates1": "מגדיר עדכונים: שלב",
      "_winVistaOf": "מתוך",
      "_win7configuringupdates": "מגדיר עדכוני ווינדוס",
      "_win7percent": "הושלם.",
      "_win7donotturnoff": "אל תכבה את המחשב שלך.",
      "_winXPupdates1": "מתקין עדכוני ווינדוס...",
      "_winXPupdates2": "אל תכבה או תנתק את המחשב שלך.",
      "_win10updates1": "מתקין את Windows 10",
      "_win10updates2": "המחשב שלך יבצע אתחול מספר פעמים.",
      "_win10updates3": "מעתיק קבצים",
      "_win10updates4": "מתקין תכונות והתקנים",
      "_win10updates5": "מגדיר הגדרות"
    },
    "finnish": {
      "_fakewindowsupdates": "Väärennetyt Windows Päivitysruudut",
      "_prankyourfriends": "Pilaile ystäviesi ja työkavereidesi kustannuksella näillä väärennetyillä päivitysruuduilla!",
      "_pressf11": "Paina F11 Päästäksesi koko ruudun tilaan",
      "_pressenter": "Paina Enter aiheuttaaksesi sinisen ruudun",
      "_video": "yleiskatsaus videolla",
      "_selecttheme": "Valitse teema",
      "_relyonads": "Luotamme mainoksiin sivuston ylläpitämiseksi, harkitsethan sivuston sallimista mainoksenesto-ohjelmassa! :)",
      "_winVistaupdates1": "Määritetään Windows-päivityksiä: vaihe",
      "_winVistaOf": "/",
      "_win7configuringupdates": "Määritetään Windows-päivityksiä",
      "_win7percent": "valmis.",
      "_win7donotturnoff": "Älä katkaise virtaa tietokoneesta.",
      "_winXPupdates1": "Määritetään Windows-päivityksiä...",
      "_winXPupdates2": "Älä katkaise koneen virtaa tai irrota sen virtajohtoa.",
      "_win10updates1": "Päivitetään Windowsin versiota",
      "_win10updates2": "Tietokone käynnistyy uudelleen useita kertoja.",
      "_win10updates3": "Kopioidaan tiedostoja",
      "_win10updates4": "Määritetään ominaisuuksia ja ajureita",
      "_win10updates5": "Määritetään asetuksia",
      "_win10workingonupdates": "Käsitellään päivityksiä",
      "_win10donotturnoff": "Älä katkaise virtaa tietokoneesta. Tähän saattaa kulua jonkin verran aikaa.",
      "_win10willrestart": "Tietokone käynnistyy uudelleen useita kertoja."
    },
    "georgian": {
      "_fakewindowsupdates": "ყალბი Windows-ის განახლების ფანჯარა",
      "_prankyourfriends": "მოატყუე შენი მეგობრები ან კოლეგები ამ საიტის დახმარებით!",
      "_pressf11": "დააჭირეთ F11-ს იმისთვის რომ ფანჯარა გადიდდეს",
      "_pressenter": "დააჭირე ENTER-ს რათა გამოისახოს BSOD-ი თქვენს ეკრანზე",
      "_video": "უყურეთ ვიდეოს",
      "_selecttheme": "აარჩიეთ თემა",
      "_relyonads": "რეკლამები აუცილებელია იმისთვის რომ ამ საიტმა მუშაობა განაგრძოს, იმ შემთხვევაში თუ თქვენ ADBLOCKER-ს იყენებთ გთხოვთ გათიშოთ ის.",
      "_winVistaupdates1": "მიმდინარეობს განახლებების კონფიგურაცია",
      "_winVistaOf": "of",
      "_win7configuringupdates": "მიმდინარეობს Windows-ის განახლება...",
      "_win7percent": "დასრულდა.",
      "_win7donotturnoff": "არ გამორთოთ კომპიუტერი.",
      "_winXPupdates1": "მიმდინარეობს განახლებების დაყენება...",
      "_winXPupdates2": "არ გამორთოთ ან გამოაძროთ კომპიუტერი.",
      "_win10updates1": "მიმდინარეობს Windows 10-ის დაყენება",
      "_win10updates2": "თქვენი კომპიუტერი გადაიტვირთება რამდენჯერმე. დაჯექით და დამშვიდდით.",
      "_win10updates3": "მიმდინარეობს ფაილებით დაკოპირება",
      "_win10updates4": "ყენდება ფუნქციები და დრაივერები",
      "_win10updates5": "მიმდინარეობს პარამეტრების კონფიგურაცია",
      "_win10workingonupdates": "ვმუშაობთ განახლებებზე",
      "_win10donotturnoff": "არ გამორთოთ კომპიუტერი. ამას დაჭირდება რამოდენიმე წუთი.",
      "_win10willrestart": "თქვენი კომპიუტერი გადაიტვირთება რამოდენიმეჯერ.",
    },
    "ukrainian": {
      "_fakewindowsupdates": "Підроблені 'оновлення' Windows",
      "_prankyourfriends": "Надуріть своїх друзів та колег!",
      "_pressf11": "Натисніть F11, щоб перейти у повноекранний режим",
      "_pressenter": "Натисніть ENTER, щоб викликати 'синій екран смерті'",
      "_video": "Відео-Огляд",
      "_selecttheme": "Виберіть тему",
      "_relyonads": "Реклама допомагає нам підтримувати наш сайт, будь ласка, відключіть AdBlock :)",
      "_winVistaupdates1": "Налаштування оновлень: Етап",
      "_winVistaOf": "із",
      "_win7configuringupdates": "Налаштування оновлень Winows",
      "_win7percent": "Готово.",
      "_win7donotturnoff": "Не вимикайте ваш комп'ютер.",
      "_winXPupdates1": "Інсталювання оновлень Windows...",
      "_winXPupdates2": "Не вимикайте ваш комп'ютер.",
      "_win10updates1": "Інсталювання Windows 10",
      "_win10updates2": "Ваш комп'ютер перезапуститься кілька разів. Відкиньтесь у кріслі та відпочиньте.",
      "_win10updates3": "Копіювання файлів",
      "_win10updates4": "Інсталювання компонентів та драйверів",
      "_win10updates5": "Налаштування параметрів"
    },
    "arabic": {
      "_fakewindowsupdates": "شاشة تحديث ويندوز وهمية",
      "_prankyourfriends": "إخدع أصدقائك مع شاشة التحديث الوهمية!",
      "_pressf11": "لتكبير الشاشة F11 إضغط على ",
      "_pressenter": "BSOD لإحداث  Enter إضغط على ",
      "_video": "نظرة عامة",
      "_selecttheme": "إختر الثيم",
      "_relyonads": "نحن نعتمد على الإعلانات لاستضافة هذا الموقع، يرجى أضافة الموقع إلى القائمة البيضاء إذا كنت ترغب في ذلك! :)",
      "_winVistaupdates1": "تجهيز التحديثات: المرحلة",
      "_winVistaOf": "من",
      "_win7configuringupdates": "تجهيز تحديثات ويندوز",
      "_win7percent": "إكتمل.",
      "_win7donotturnoff": "لا تغلق الجهاز.",
      "_winXPupdates1": "تثبيت تحديثات ويندوز...",
      "_winXPupdates2": "لا تغلق الجهاز.",
      "_win10updates1": "تثبيت ويندوز 10",
      "_win10updates2": "سيتم إعادة تشغيل جهازك عدة مرات، خذ راحة.",
      "_win10updates3": "يتم نسخ الملفات",
      "_win10updates4": "يتم تثبيت برامج التشغيل",
      "_win10updates5": "تكوين الإعدادات"
    },
    "french": {
      "_fakewindowsupdates": "Faux écrans de mises à jour Windows",
      "_prankyourfriends": "Piégez vos amis et vos collègues avec de faux écrans de mises à jour !",
      "_pressf11": "Appuyez sur F11 pour passer en plein écran",
      "_pressenter": "Appuyez sur Entrée pour faire apparaître un écran bleu de la mort (BSOD)",
      "_video": "Aperçu vidéo",
      "_selecttheme": "Sélectionnez un thème",
      "_relyonads": "Les revenus du site sont basés sur la publicité, pensez à désactiver votre bloqueur de pub s’il vous plaît :)",
      "_winVistaupdates1": "Configuration des mises à jour : En cours",
      "_winVistaOf": "sur",
      "_win7configuringupdates": "Configuration des mises à jour Windows",
      "_win7percent": "effectués.",
      "_win7donotturnoff": "N’éteignez pas votre ordinateur.",
      "_winXPupdates1": "Installation des mises à jour Windows ...",
      "_winXPupdates2": "N’éteignez pas votre ordinateur.",
      "_win10updates1": "Installation de Windows 10",
      "_win10updates2": "Votre PC va redémarrer à plusieurs reprises. Calez-vous dans votre fauteuil et détendez-vous.",
      "_win10updates3": "Copie des fichiers",
      "_win10updates4": "Installation des fonctionnalités et des drivers",
      "_win10updates5": "Configuration des paramètres",
      "_win10workingonupdates": "Configuration des mises à jour",
      "_win10donotturnoff": "N'éteignez pas votre ordinateur. Cela prendra un moment.",
      "_win10willrestart": "Votre ordinateur va redémarrer plusieurs fois"
    },
    "dutch": {
      "_fakewindowsupdates": "Namaak Windows Update Schermen",
      "_prankyourfriends": "Haal grappen uit met je vrienden en collega’s met deze namaak update schermen!",
      "_pressf11": "Druk op F11 om in volledig scherm te gaan.",
      "_pressenter": "Druk op ENTER om een Blue Screen Of Death te simuleren",
      "_video": "Video Voorbeeld",
      "_selecttheme": "Kies een thema",
      "_relyonads": "Wij zijn afhankelijk van advertenties om deze site te kunnen hosten, wij zouden het erg waarderen als je deze website toevoegt aan de veilige lijst van jouw adblocker! :)",
      "_winVistaupdates1": "Updates worden uitgevoerd: Stap",
      "_winVistaOf": "van",
      "_win7configuringupdates": "Windows updates configureren",
      "_winXPupdates1": "Windows Updates installeren...",
      "_winXPupdates2": "Schakel de PC niet uit.",
      "_win10updates1": "Upgrade van Windows 10 uitvoeren",
      "_win10updates2": "De PC wordt verschillende keren opnieuw opgestart. U hoeft even niets te doen.",
      "_win10updates3": "Bestanden kopiëren",
      "_win10updates4": "Apps en drivers installeren",
      "_win10updates5": "Persoonlijke instellingen configureren",
      "_win7workingonupdates": "Updates worden geconfigureerd.",
      "_win7percent": "voltooid.",
      "_win7donotturnoff": "Schakel de PC niet uit. Dit kan even duren.",
      "_win10workingonupdates": "De update voor Windows 10 wordt geconfigureerd",
      "_win10donotturnoff": "Schakel de computer niet uit! Dit zal even duren.",
      "_win10willrestart": "De pc wordt verschillende keren herstart."
    },
    "galician": {
      "_fakewindowsupdates": "Pantallas de actualización de Windows falsas",
      "_prankyourfriends": "Gasta unha broma aos teus amigos e compañeiros de traballo con pantallas de actualización falsas!",
      "_pressf11": "Preme F11 para activar a pantalla completa",
      "_pressenter": "Preme ENTER para provocar un pantallazo azul",
      "_video": "Vídeo de introducción",
      "_selecttheme": "Escolle un tema",
      "_relyonads": "Dependemos dos anuncios para manter este sitio web activo, por favor, considera engadirnos á túa lista de excepcións no bloqueador de publicidade se che gusta a web! :)",
      "_winVistaupdates1": "Configurando actualizacións: Paso",
      "_winVistaOf": "de",
      "_win7configuringupdates": "Configurando actualizacións de Windows",
      "_win7percent": "completado.",
      "_win7donotturnoff": "Non apague o seu equipo.",
      "_winXPupdates1": "Instalando actualizacións de Windows...",
      "_winXPupdates2": "Non apague nin desconecte o seu equipo.",
      "_win10updates1": "Instalando Windows 10",
      "_win10updates2": "O seu equipo reiniciarase numerosas veces. Tome asento e reláxese.",
      "_win10updates3": "Copiando arquivos",
      "_win10updates4": "Instalando características e controladores",
      "_win10updates5": "Establecendo a configuración"
    },
    "simplifiedchinese": {
      "_fakewindowsupdates": "假装 Windows 升级界面",
      "_prankyourfriends": "用假的 windows 升级界面骗你的同事和朋友吧！",
      "_pressf11": "按 F11 开始全屏",
      "_pressenter": "按回车来触发蓝屏界面",
      "_video": "视频预览",
      "_selecttheme": "选择一个主题",
      "_relyonads": "我们依靠广告来支撑这个网站，如果你喜欢他，请考虑加入到广告过滤白名单！:)",
      "_winVistaupdates1": "正在配置更新：第一阶段",
      "_winVistaOf": "of",
      "_win7configuringupdates": "正在配置 Windows 更新",
      "_win7percent": "完成。",
      "_win7donotturnoff": "请不要关闭你的计算机。",
      "_winXPupdates1": "正在安装 Windows 更新...",
      "_winXPupdates2": "请不要关闭你的计算机或拔掉电源。",
      "_win10updates1": "正在安装 Windows 10",
      "_win10updates2": "您的电脑将重新启动多次。 请坐下来放松片刻。",
      "_win10updates3": "正在复制文件",
      "_win10updates4": "正在安装功能和驱动",
      "_win10updates5": "正在配置设置"  	,
      "_win10workingonupdates": "Working on updates",
      "_win10donotturnoff": "请不要关闭您的计算机",
      "_win10willrestart": "您的电脑将重启几次"
    },
    "traditionalchinese": {
      "_fakewindowsupdates": "假装 Windows 的升級界面",
      "_prankyourfriends": "用假的 Windows 升級界面騙你的同事和朋友吧！",
      "_pressf11": "按 F11 開始全屏幕",
      "_pressenter": "按Enter来觸發BSOD界面",
      "_video": "影片概述",
      "_selecttheme": "選擇一個主題",
      "_relyonads": "我們依靠廣告來承載此網站，如果你喜歡它，請考慮將它納入白名單！ :)",
      "_winVistaupdates1": "正在配置更新︰ 階段",
      "_winVistaOf": "的",
      "_win7configuringupdates": "正在配置 Windows 更新",
      "_win7percent": "完成.",
      "_win7donotturnoff": "請勿關閉電腦或拔除電源.",
      "_winXPupdates1": "正在安裝 Windows 更新...",
      "_winXPupdates2": "請勿關閉電腦或拔除電源.",
      "_win10updates1": "正在安裝 Windows 10",
      "_win10updates2": "你的電腦將重新啓動數次，請耐心等候。",
      "_win10updates3": "正在複製文件",
      "_win10updates4": "正在安裝功能和驅動程式",
      "_win10updates5": "正在完成...",
      "_win10workingonupdates": "正在安裝更新",
      "_win10donotturnoff": "請勿關閉電腦. 這可能需要一些時間。",
      "_win10willrestart": "您的電腦將重新啓動"
    },
    "indonesian": {
      "_fakewindowsupdates": "Layar Pembaruan Windows Palsu",
      "_prankyourfriends": "Kerjai teman dan kolegamu dengan layar pembaruan palsu!!",
      "_pressf11": "Tekan F11 untuk masuk modus layar penuh",
      "_pressenter": "Tekan ENTER untuk menampilkan BSOD",
      "_video": "Video Ulasan",
      "_selecttheme": "Pilih tema",
      "_relyonads": "Kami mengandalkan iklan untuk membiayai hosting situs ini, silakan masukkan ke daftar putih jika kamu menyukainya! :)",
      "_winVistaupdates1": "Mengonfigurasi pembaruan: Tahap",
      "_winVistaOf": "dari",
      "_win7configuringupdates": "Mengonfigurasi Pembaruan Windows",
      "_winXPupdates1": "Memasang Pembaruan Windows...",
      "_winXPupdates2": "Jangan matikan komputer Anda.",
      "_win10updates1": "Memasang Windows 10",
      "_win10updates2": "PC Anda akan dimuat ulang beberapa kali. Silakan bersantai.",
      "_win10updates3": "Menyalin berkas",
      "_win10updates4": "Memasang fitur dan driver",
      "_win10updates5": "Mengonfigurasi pengaturan",
      "_win7workingonupdates": "Sedang melakukan pembaruan",
      "_win7percent": "selesai.",
      "_win7donotturnoff": "Jangan matikan PC Anda. Hal ini membutuhkan waktu beberapa saat.",
      "_win10willrestart": "PC Anda akan dimuat ulang beberapa kali"
    },
    "vietnamese": {
      "_fakewindowsupdates": "Màn hình Windows Update giả",
      "_prankyourfriends": "Chơi khăm bạn bè và đồng nghiệp với những màn hình giả, mọi lúc mọi nơi!!",
      "_pressf11": "Nhấn F11 để vào toàn màn hình",
      "_pressenter": "Nhấn Enter để làm màn hình xanh!",
      "_video": "Video Giới thiệu",
      "_selecttheme": "Chon hệ điều hành",
      "_relyonads": "Chúng tôi nhờ vào quảng cáo để giữ trang này hoạt động, nếu bạn thích trang này xin đừng chặn quảng cáo ở đây nhé! :)",
      "_winVistaupdates1": "Đang cấu hình bản cập nhật: Bước ",
      "_winVistaOf": "trên",
      "_win7configuringupdates": "Đang cấu hình Bản Cập nhật Windows",
      "_winXPupdates1": "Đang cài đặt Bản Cập nhật Windows...",
      "_winXPupdates2": "Xin đừng tắt máy hay thao phích cắm điện.",
      "_win10updates1": "Đang cài đặt Windows 10.",
      "_win10updates2": "Máy tính của bạn sẽ khởi động lại nhiều lần. Trong thời gian này, hãy thư giản.",
      "_win10updates3": "Sao chép các tập tin",
      "_win10updates4": "Cài đặt driver và tính năng",
      "_win10updates5": "Cấu hình các cài đặt",
      "_win7workingonupdates": "Đang làm việc với các bản cập nhật",
      "_win7percent": "hoàn tất.",
      "_win7donotturnoff": "Đừng tắt máy. Việc này sẽ tốn nhiều thời gian.",
      "_win10workingonupdates": "Đang cài đặt bản cập nhật",
      "_win10donotturnoff": "Đừng tắt máy tính của bạn. Việc này sẽ mất một lúc.",
      "_win10willrestart": "Máy tính của bạn sẽ khởi động lại vài lần."
    },
    "afrikaans": {
      "_fakewindowsupdates": "Vals Windows Opdateer Skerms",
      "_prankyourfriends": "Grap jou vriende en kollegas met valse opdateer skerms!",
      "_pressf11": "Druk F11 om volskerm te gaan",
      "_pressenter": "Druk ENTER om 'n BSOD veroorsaak",
      "_video": "Video Oorsig",
      "_selecttheme": "Kies 'n tema",
      "_relyonads": "Ons maak staat op advertensies op hierdie webwerf aan te bied, oorweeg asseblief witlys dit as jy dit wil hê! :D",
      "_winVistaupdates1": "Instel Opdateer: Stage",
      "_winVistaOf": "van",
      "_win7configuringupdates": "Instel Windows Opdateere",
      "_win7percent": "volledige.",
      "_win7donotturnoff": "Moenie jou rekenaar afskakel nie.",
      "_winXPupdates1": "Installering Windows Opdateere...",
      "_winXPupdates2": "Moenie afdraai of koppel jou rekenaar.",
      "_win10updates1": "Installering Windows 10",
      "_win10updates2": "Jou rekenaar sal 'n paar keer weer te begin. Sit terug en ontspan.",
      "_win10updates3": "Kopiëring van Lêers",
      "_win10updates4": "Installering funksies en bestuurders",
      "_win10updates5": "Instel Instellings",
      "_win10workingonupdates": "Werk op Opdateere",
      "_win10donotturnoff": "Moenie afdraai jou rekenaar. Dit sal 'n rukkie neem.",
      "_win10willrestart": "Jou rekenaar sal 'n paar keer herlaai"
    },
    "czech": {
      "_fakewindowsupdates": "Falešné Windows aktualizace",
      "_prankyourfriends": "Napalte své kolegy a kamarády falešnými Windows aktualizacemi!",
      "_pressf11": "Zmáčkněte F11 pro režim celé obrazovky",
      "_pressenter": "Stiskněte ENTER pro vyvolání chybové hlášky",
      "_video": "Představení",
      "_selecttheme": "Vyber si tematiku",
      "_relyonads": "Běh této stránky záleží na výdělku z reklam, prosíme, zvažte jeho deaktivaci! :-)",
      "_winVistaupdates1": "Konfigurace nastavení: Fáze",
      "_winVistaOf": "ze",
      "_win7configuringupdates": "Konfigurace aktualizací",
      "_win7percent": "hotovo.",
      "_win7donotturnoff": "Nevypínejte počítač.",
      "_winXPupdates1": "Instalují se aktualizace...",
      "_winXPupdates2": "Nevypínejte nebo neodpojujte počítač.",
      "_win10updates1": "Instaluje se Windows 10",
      "_win10updates2": "Váš počítač se několikrát vypne. Zatím si sedněte a relaxujte.",
      "_win10updates3": "Kopírují se soubory",
      "_win10updates4": "Instalují se aplikace",
      "_win10updates5": "Konfigurace nastavení",
      "_win10workingonupdates": "Probíhá aktualizace",
      "_win10donotturnoff": "Nevypínejte počítač. Bude to trvat jen chvilku.",
      "_win10willrestart": "Váš počítač se několikrát vypne"
    },
    "pt-pt": {
      "_fakewindowsupdates": "Falso Ecrã de Atualizações Windows",
      "_prankyourfriends": "Prega uma partida a amigos ou a colegas de faculdade com falsas atualizações!",
      "_pressf11": "Clica na tecla F11 para o modo tela cheia",
      "_pressenter": "Clica ENTER para aparcer o famoso e letal ecrã azul",
      "_video": "Demonstração em Vídeo",
      "_selecttheme": "Seleciona um tema",
      "_relyonads": "Nós usamos publicidade para manter este site, por favor considere remover os filtros destas, se gosta de nós :)",
      "_winVistaupdates1": "A configurar atualizações: Parte",
      "_winVistaOf": "de",
      "_win7configuringupdates": "A configurar atualizações do Windows",
      "_win7percent": "Completo",
      "_win7donotturnoff": "Não desligue o seu computador",
      "_winXPupdates1": "A instalar atualizações do Windows ...",
      "_winXPupdates2": "Não desligue ou desconecte o seu computador",
      "_win10updates1": "A instalar Windows 10",
      "_win10updates2": "O seu PC vai reiniciar várias vezes. Sente-se e relaxe.",
      "_win10updates3": "A copiar ficheiros",
      "_win10updates4": "A instalar componentes e drivers",
      "_win10updates5": "A configurar o sistema",
      "_win10workingonupdates": "A trabalhar no updates",
      "_win10donotturnoff": "Não desligue o seu PC. Isto vai demorar um pouco.",
      "_win10willrestart": "O seu PC vai reiniciar várias vezes"
    },
    "swedish": {
      "_language": "Svenska",
      "_fakewindowsupdates": "Fejkade Windows-uppdateringsskärmar",
      "_prankyourfriends": "Spela dina vänner och kollegor ett spratt med fejkade uppdateringsskärmar!",
      "_pressf11": "Tryck F11 för fullskärm",
      "_pressenter": "Tryck ENTER för att orsaka en blåskärm",
      "_video": "Video-exempel",
      "_selecttheme": "Välj ett tema",
      "_relyonads": "Kostnaderna för att tillhandahålla den här sidan täcks av reklamen. Lägg gärna till den i whitelist om du gillar den! :)",
      "_winVistaupdates1": "Konfigurerar uppdateringar: Steg",
      "_winVistaOf": "av",
      "_win7configuringupdates": "Konfigurerar Windowsuppdateringar",
      "_win7percent": "klart.",
      "_win7donotturnoff": "Stäng inte av din dator.",
      "_winXPupdates1": "Installerar Windowsuppdateringar...",
      "_winXPupdates2": "Stäng inte av eller koppla ur din dator.",
      "_win10updates1": "Installerar Windows 10",
      "_win10updates2": "Din PC kommer att starta om flera gånger. Luta dig tillbaka och koppla av.",
      "_win10updates3": "Kopierar filer",
      "_win10updates4": "Installerar funktioner och drivrutiner",
      "_win10updates5": "Konfigurerar inställningar",
      "_win10workingonupdates": "Working on updates",
      "_win10donotturnoff": "Stäng inte av din PC. Det här kommer att ta en stund.",
      "_win10willrestart": "Din PC kommer att starta om flera gånger."
    },
    "greek": {
      "_fakewindowsupdates": "Ψεύτικα Updates των Windows",
      "_prankyourfriends": "Κάντε φάρσες στους φίλους σας με ψεύτικα Updates!",
      "_pressf11": "Πατήστε F11 για να εισέλθετε σε πλήρη οθόνη.",
      "_pressenter": "Πατήστε το ENTER για μπλέ οθόνη.",
      "_video": "Προβολή βίντεο",
      "_selecttheme": "Επιλέξτε ένα θέμα",
      "_relyonads": "Βασιζόμαστε σε διαφημίσεις που σχετίζονται μ' αυτό το site. Κοιτάξτε την Whitelist, αν σας αρέσει! :)",
      "_winVistaupdates1": "Γίνεται εγκατάσταση των ενημερώσεών σας: Βήμα",
      "_winVistaOf": "από",
      "_win7configuringupdates": "Γίνεται εγκατάσταση των ενημερώσεών σας",
      "_win7percent": "ολοκληρώθηκε.",
      "_win7donotturnoff": "Μην απενεργοποιήσετε τον υπολογιστή σας.",
      "_winXPupdates1": "Γίνεται εγκατάσταση των ενημερώσεών σας...",
      "_winXPupdates2": "Μην απενεργοποιήσετε ή αποσυνδέσετε τον υπολογιστή σας.",
      "_win10updates1": "Εγκατάσταση των Windows 10",
      "_win10updates2": "Ο υπολογιστής σας θα επανεκκινηθεί αρκετές φορές. Καθίστε αναπαυτικά και χαλαρώστε.",
      "_win10updates3": "Αντιγραφή αρχείων",
      "_win10updates4": "Εγκατάσταση οδηγών και δυνατοτήτων",
      "_win10updates5": "Διαμώρφωση ρυθμίσεων",
      "_win10workingonupdates": "Εργασία με τις ενημερώσεις.",
      "_win10donotturnoff": "Μην απενεργοποιήσετε τον υπολογιστή σας. Αυτό θα πάρει λίγα λεπτά.",
      "_win10willrestart": "Ο υπολογιστής σας θα επανεκκινηθεί αρκετές φορές."
    },
    "thai": {
      "_fakewindowsupdates": "หน้าจอ Windows Update ปลอม",
      "_prankyourfriends": "เล่นตลกให้เพื่อนและเพื่อนร่วมงานของคุณด้วยหน้าจออัปเดตปลอม!",
      "_pressf11": "กด F11 เพื่อไปยังแบบเต็มหน้าจอ",
      "_pressenter": "กด ENTER เพื่อเข้าสู่จอฟ้ามรณะ",
      "_video": "ภาพรวมวิดีโอ",
      "_selecttheme": "เลือกธีม",
      "_relyonads": "เราพึ่งพาโฆษณาในการโฮสต์ไซต์นี้โปรดพิจารณารายชื่อที่อนุญาตพิเศษหากคุณต้องการ! :)",
      "_winVistaupdates1": "Configuring updates: Stage",
      "_winVistaOf": "of",
      "_win7configuringupdates": "Configuring Windows Updates",
      "_win7percent": "complete.",
      "_win7donotturnoff": "Do not turn off your computer.",
      "_winXPupdates1": "กำลังติดตั้งการอัปเดต Windows ...",
      "_winXPupdates2": "อย่าปิดหรือถอดปลั๊กคอมพิวเตอร์",
      "_win10updates1": "กำลังติดตั้ง Windows 10",
      "_win10updates2": "พีซีของคุณจะรีสตาร์ทหลายครั้ง นั่งพักผ่อน",
      "_win10updates3": "การคัดลอกไฟล์",
      "_win10updates4": "การติดตั้งคุณลักษณะและไดรเวอร์",
      "_win10updates5": "การกำหนดค่าการตั้งค่า",
      "_win10workingonupdates": "การทำงานกับการอัปเดต",
      "_win10donotturnoff": "อย่าปิดเครื่องคอมพิวเตอร์ของคุณ ขั้นตอนนี้จะใช้เวลาสักครู่",
      "_win10willrestart": "พีซีของคุณจะรีสตาร์ทหลายครั้ง"
    },
    "romanian": {
      "_fakewindowsupdates": "Ecrane pentru actualizări Windows false",
      "_prankyourfriends": "Păcălește-ți prietenii și colegii cu ecrane de update-uri false!",
      "_pressf11": "Apasă F11 pentru a merge pe Fullscreen",
      "_pressenter": "Apasă ENTER pentru a cauza un BSOD",
      "_video": "Videoclip pentru demonstrație",
      "_selecttheme": "Alege o temă",
      "_relyonads": "Ne bazăm pe reclame pentru a hosta acest site, vă rog să consideri să adaugi site-ul la whitelist dacă-ți place! :)",
      "_winVistaupdates1": "Se configurează actualizările: Pasul",
      "_winVistaOf": "din",
      "_win7configuringupdates": "Se configurează Windows Update",
      "_win7percent": "complet.",
      "_win7donotturnoff": "Nu închideți computerul.",
      "_winXPupdates1": "Se instalează Windows Updates...",
      "_winXPupdates2": "Nu închideți sau deconectați calculatorul.",
      "_win10updates1": "Se isnstalează Windows 10",
      "_win10updates2": "PC-ul tău va reporni de câteva ori. Așteaptă și relaxează-te.",
      "_win10updates3": "Se copiază fișierele",
      "_win10updates4": "Se instalează funcțiile și driverele",
      "_win10updates5": "Se configurează setările",
      "_win10workingonupdates": "Se lucrează la actualizări",
      "_win10donotturnoff": "Nu închideți PC-ul. Va dura ceva vreme.",
      "_win10willrestart": "PC-ul tău va reporni de câteva ori."
    },
    "japanese": {
      "_fakewindowsupdates": "偽 Windows Update 画面",
      "_prankyourfriends": "偽のアップデート画面であなたの友人や同僚にいたずらしましょう！",
      "_pressf11": "F11を押して全画面表示にする",
      "_pressenter": "Enterキーを押してブルースクリーンを出す",
      "_video": "概要ビデオ",
      "_selecttheme": "テーマを選択",
      "_relyonads": "このサイトの運営は広告に依存しています、気に入ったらこのサイトをホワイトリストに登録してください！ :)",
      "_winVistaupdates1": "更新プログラムを構成しています: ステージ",
      "_winVistaOf": "/",
      "_win7configuringupdates": "Windows 更新プログラムの構成中",
      "_win7percent": "完了",
      "_win7donotturnoff": "コンピューターの電源を切らないでください。",
      "_winXPupdates1": "更新プログラムのインストール中...",
      "_winXPupdates2": "コンピューターの電源を切らないでください。",
      "_win10updates1": "Windows 10 をインストールしています",
      "_win10updates2": "PC は数回再起動されます。もうしばらくお待ちください。",
      "_win10updates3": "ファイルをコピーしています",
      "_win10updates4": "機能とドライバーをインストールしています",
      "_win10updates5": "設定を構成しています",
      "_win10workingonupdates": "更新プログラムを構成しています",
      "_win10donotturnoff": "PCの電源を切らないでください。処理にはしばらくかかります。",
      "_win10willrestart": "PCは数回再起動します。"
    },
    "norwegian": {
      "_fakewindowsupdates": "Falsk Windows oppdateringsskjermer",
      "_prankyourfriends": "Spøk med vennene dine og kollegene dine med falsk oppdateringsskjerm!",
      "_pressf11": "Trykk F11 for fullskjerm",
      "_pressenter": "Trykk ENTER for å skape en BSOD",
      "_video": "Forhåndsvisning",
      "_selecttheme": "Velg tema",
      "_relyonads": "Vi er avhengige av reklame for å opprettholde denne siden, vær så snill å whitelist denne siden hvis du liker den! :)",
      "_winVistaupdates1": "Konfigurerer Oppdateringer: Trinn",
      "_winVistaOf": "av",
      "_win7configuringupdates": "Konfigurerer Windows Oppdateringer",
      "_win7percent": "Ferdig.",
      "_win7donotturnoff": "Ikke skru av din datamaskin.",
      "_winXPupdates1": "Installerer Windows Oppdatering...",
      "_winXPupdates2": "Ikke skru av eller plugg ut datamaskinen din.",
      "_win10updates1": "Installerer Windows 10",
      "_win10updates2": "Din datamaskin vil start på nytt flere ganger. Sitt tilbake og slapp av.",
      "_win10updates3": "Kopierer filer",
      "_win10updates4": "Installerer egenskaper og drivere",
      "_win10updates5": "Konfigurerer innstillinger",
      "_win10workingonupdates": "Arbeider med oppdateringer",
      "_win10donotturnoff": "Ikke skru av din datamskin. Dette vil ta en stund.",
      "_win10willrestart": "Din datamaskin vil starte på nytt flere ganger"
    },
    "catalan": {
      "_language": "Català",
      "_fakewindowsupdates": "Pantalles d'actualització de Windows falses",
      "_prankyourfriends": "Bromeja amb els teus amics i companys de treball amb les pantalles d'actualització falses!",
      "_pressf11": "Prem F11 per canviar a pantalla completa",
      "_pressenter": "Prem ENTER per causar una pantalla blava de la mort",
      "_video": "Vídeo d'introducció",
      "_selecttheme": "Selecciona un tema",
      "_relyonads": "Depenem dels anuncis per allotjar aquesta pàgina web, si us plau, considera afegir-nos a la llista blanca si t'agrada! :)",
      "_winVistaupdates1": "S'estan configurant les actualitzacions: Pas",
      "_winVistaOf": "de",
      "_win7configuringupdates": "S'estan configurant les actualitzacions de Windows",
      "_win7percent": "completat.",
      "_win7donotturnoff": "No apaguis l'ordinador.",
      "_winXPupdates1": "S'estan instal·lant actualitzacions de Windows...",
      "_winXPupdates2": "No apaguis ni desconnectis l'ordinador.",
      "_win10updates1": "S'està instal·lant Windows 10",
      "_win10updates2": "L'ordinador és reiniciarà varies vegades. Seu i relaxa't.",
      "_win10updates3": "S'estan copiant els arxius",
      "_win10updates4": "S'estan instal·lant les característiques i els controladors",
      "_win10updates5": "S'estan configurant els paràmetres",
      "_win10workingonupdates": "S'està treballant en les actualitzacions",
      "_win10donotturnoff": "No apaguis l'ordinador. Això trigarà una estona.",
      "_win10willrestart": "L'ordinador es reiniciarà diverses vegades"
    }
  };

  // Function for swapping dictionaries
  set_lang = function (dictionary) {
    $("[data-translate]").text(function () {
      var key = $(this).data("translate");
      if (dictionary.hasOwnProperty(key)) {
        return dictionary[key];
      }
    });
  };

  // Swap languages when menu changes
  $("#lc").on("change", function () {
    var language = $(this).val().toLowerCase();
    if (dictionary.hasOwnProperty(language)) {
      set_lang(dictionary[language]);
      localStorage.setItem("lang", language);
    }
  });

  $("#en").on("click", function () {
    localStorage.setItem("lang", "english");
    set_lang(dictionary.english);
  });

  $("#es").on("click", function () {
    localStorage.setItem("lang", "spanish");
    set_lang(dictionary.spanish);
  });


  $("#de").on("click", function () {
    localStorage.setItem("lang", "german");
    set_lang(dictionary.german);
  });

  $("#ru").on("click", function () {
    localStorage.setItem("lang", "russian");
    set_lang(dictionary.russian);
  });

  $("#tr").on("click", function () {
    localStorage.setItem("lang", "turkish");
    set_lang(dictionary.turkish);
  });

  $("#it").on("click", function () {
    localStorage.setItem("lang", "italian");
    set_lang(dictionary.italian);
  });

  $("#ptbr").on("click", function () {
    localStorage.setItem("lang", "portuguese");
    set_lang(dictionary.portuguese);
  });

  $("#pl").on("click", function () {
    localStorage.setItem("lang", "polish");
    set_lang(dictionary.polish);
  });

  $("#fi").on("click", function () {
    localStorage.setItem("lang", "finnish");
    set_lang(dictionary.finnish);
  });

  $("#he").on("click", function () {
    localStorage.setItem("lang", "hebrew");
    set_lang(dictionary.hebrew);
  });

  $("#ar").on("click", function () {
    localStorage.setItem("lang", "arabic");
    set_lang(dictionary.arabic);
  });

  $("#hu").on("click", function () {
    localStorage.setItem("lang", "hungarian");
    set_lang(dictionary.hungarian);
  });

  $("#sk").on("click", function () {
    localStorage.setItem("lang", "slovak");
    set_lang(dictionary.slovak);
  });

  $("#ua").on("click", function () {
    localStorage.setItem("lang", "ukrainian");
    set_lang(dictionary.ukrainian);
  });

  $("#ko").on("click", function () {
    localStorage.setItem("lang", "korean");
    set_lang(dictionary.korean);
  });

  $("#io").on("click", function () {
    localStorage.setItem("lang", "indonesian");
    set_lang(dictionary.indonesian);
  });

  $("#fr").on("click", function () {
    localStorage.setItem("lang", "french");
    set_lang(dictionary.french);
  });

  // Set initial language to English
  if (localStorage.lang === undefined) {
    var lgeo = window.navigator.userLanguage || window.navigator.language;
    var lgeosub = lgeo.substring(0, 2);

    if (lgeosub == "ru") {
      localStorage.setItem("lang", "russian");
      set_lang(dictionary.russian);
    }

    else if (lgeosub == "fr") {
      localStorage.setItem("lang", "french");
      set_lang(dictionary.french);
    }

    else if (lgeosub == "de") {
      localStorage.setItem("lang", "german");
      set_lang(dictionary.german);
    }

    else if (lgeosub == "es") {
      localStorage.setItem("lang", "spanish");
      set_lang(dictionary.spanish);
    }

    else if (lgeosub == "it") {
      localStorage.setItem("lang", "italian");
      set_lang(dictionary.italian);
    }

    else if (lgeosub == "nl") {
      localStorage.setItem("lang", "dutch");
      set_lang(dictionary.dutch);
    }

    else if (lgeosub == "pt") {
      localStorage.setItem("lang", "portuguese");
      set_lang(dictionary.portuguese);
    }

    else if (lgeosub == "id") {
      localStorage.setItem("lang", "indonesian");
      set_lang(dictionary.indonesian);
    }

    else if (lgeosub == "ko") {
      localStorage.setItem("lang", "korean");
      set_lang(dictionary.korean);
    }

    else if (lgeosub == "ua") {
      localStorage.setItem("lang", "ukrainian");
      set_lang(dictionary.ukrainian);
    }

    else if (lgeosub == "sk") {
      localStorage.setItem("lang", "slovak");
      set_lang(dictionary.slovak);
    }

    else if (lgeosub == "hu") {
      localStorage.setItem("lang", "hungarian");
      set_lang(dictionary.hungarian);
    }

    else if (lgeosub == "ar") {
      localStorage.setItem("lang", "arabic");
      set_lang(dictionary.arabic);
    }

    else if (lgeosub == "he") {
      localStorage.setItem("lang", "hebrew");
      set_lang(dictionary.hebrew);
    }

    else if (lgeosub == "fi") {
      localStorage.setItem("lang", "finnish");
      set_lang(dictionary.finnish);
    }

    else if (lgeosub == "pl") {
      localStorage.setItem("lang", "polish");
      set_lang(dictionary.polish);
    }


    else if (lgeosub == "tr") {
      localStorage.setItem("lang", "turkish");
      set_lang(dictionary.turkish);
    }

    else if (lgeosub == "zh") {
      localStorage.setItem("lang", "simplifiedchinese");
      set_lang(dictionary.simplifiedchinese);
    }

    else if (lgeosub == "vi") {
      localStorage.setItem("lang", "vietnamese");
      set_lang(dictionary.vietnamese);
    }

    else {
      var getLanguage = localStorage.getItem('lang') || 'english';
      set_lang(dictionary[getLanguage]);
    }
  }
  else {
    var getLanguage = localStorage.getItem('lang') || 'english';
    set_lang(dictionary[getLanguage]);
  }
});