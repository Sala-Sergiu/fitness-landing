Vreau să construiesc o aplicație Angular simplă și profesională pentru un antrenor de fitness / personal trainer.

Tehnologii folosite:
- Angular
- TypeScript
- Tailwind CSS
- HTML semantic
- CSS minim, doar dacă este absolut necesar
- Fără backend momentan
- Fără bază de date
- Fără autentificare
- Fără librării externe inutile

Scopul proiectului:
Aplicația este un landing page / website de prezentare pentru un antrenor de fitness. Pagina trebuie să fie modernă, curată, rapidă, responsive și optimizată în primul rând pentru telefoane mobile. Utilizatorul care intră pe site trebuie să înțeleagă rapid cine este antrenorul, ce servicii oferă și cum îl poate contacta.

Vreau ca proiectul să fie potrivit pentru portofoliu, dar să rămână simplu și ușor de înțeles pentru cineva care învață Angular și TypeScript.

Structura dorită:
src/
  app/
    components/
      hero/
      services/
      about/
      benefits/
      contact/
      footer/
    data/
      coach-info.ts
    app.component.html
    app.component.ts
    app.component.css

Componentele aplicației:

1. HeroComponent
- Prima secțiune vizibilă pe pagină.
- Trebuie să conțină:
  - un badge scurt, de exemplu „Personal Trainer”
  - un titlu puternic
  - un text scurt de prezentare
  - un buton principal pentru contact / programare
  - un buton secundar pentru servicii
- Design mobile-first.
- Pe mobil elementele trebuie să fie așezate vertical și ușor de citit.
- Pe desktop poate exista un layout mai larg, eventual cu două coloane.
- Nu folosi imagini externe greu de controlat. Dacă este nevoie, folosește placeholder vizual cu gradient/card.

2. ServicesComponent
- Secțiune cu serviciile oferite de antrenor.
- Folosește carduri responsive.
- Exemple de servicii:
  - Antrenamente personale
  - Planuri de antrenament
  - Coaching online
  - Recomandări pentru progres
- Fiecare card trebuie să aibă titlu, descriere scurtă și eventual un mic icon text/emoji simplu.
- Codul trebuie să folosească un array TypeScript pentru servicii și *ngFor / @for, în funcție de stilul Angular folosit în proiect.

3. AboutComponent
- Secțiune scurtă despre antrenor.
- Ton profesional, dar uman.
- Să explice că antrenorul ajută oamenii să își construiască disciplină, forță, încredere și obiceiuri sănătoase.
- Textul să fie ușor de schimbat ulterior.

4. BenefitsComponent
- Secțiune cu beneficii clare.
- Exemple:
  - Plan adaptat nivelului tău
  - Corectarea execuției
  - Progres monitorizat
  - Motivație și disciplină
  - Abordare realistă
- Folosește o listă de beneficii definită în TypeScript.

5. ContactComponent
- Secțiune foarte importantă.
- Trebuie să conțină butoane mari, ușor de apăsat pe telefon:
  - Sună acum
  - Trimite email
  - Messenger / Facebook
  - Instagram
- Folosește linkuri de tip:
  - tel:
  - mailto:
  - URL normal pentru social media
- Datele de contact trebuie citite din fișierul coach-info.ts, nu hardcodate în mai multe locuri.
- Pe mobil butoanele trebuie să fie pe toată lățimea sau foarte ușor de apăsat.

6. FooterComponent
- Footer simplu.
- Conține numele antrenorului, anul curent și eventual un text de tip:
  „Website realizat de Sergiu Sala”
- Să fie discret și profesional.

Fișierul coach-info.ts:
Creează sau folosește un fișier:
src/app/data/coach-info.ts

Exemplu structură:

export const coachInfo = {
  name: 'Numele Antrenorului',
  role: 'Personal Trainer',
  headline: 'Antrenamente personalizate pentru rezultate reale',
  description: 'Construiește forță, disciplină și încredere printr-un plan adaptat pentru tine.',
  phone: '+40 700 000 000',
  email: 'contact@example.com',
  messengerUrl: 'https://m.me/example',
  instagramUrl: 'https://instagram.com/example',
  location: 'Oradea, România'
};

Reguli de design:
- Mobile-first.
- Folosește Tailwind CSS pentru styling.
- Design modern, curat, aerisit.
- Fundal elegant, de preferat dark theme:
  - bg-neutral-950
  - text-white
  - text-neutral-300
  - accente lime / emerald / green, potrivite pentru fitness
- Butoane mari, clare, cu border-radius generos.
- Folosește spațiere bună:
  - px-6 pe mobil
  - py-16 sau py-20 pentru secțiuni
  - max-w pentru conținut pe desktop
- Nu încărca pagina cu prea multe efecte.
- Nu folosi animații complexe.
- Nu folosi culori țipătoare în exces.
- Site-ul trebuie să pară premium, nu kitsch.

Reguli Angular:
- Folosește componente simple.
- Păstrează logica minimă.
- Folosește TypeScript curat.
- Evită overengineering.
- Nu crea servicii Angular dacă nu sunt necesare.
- Pentru date statice, folosește array-uri în componente sau fișierul coach-info.ts.
- Codul trebuie să fie ușor de înțeles pentru un junior.
- Nu introduce routing, pentru că aplicația este momentan single page.
- Nu introduce formulare reactive complexe.
- Nu introduce backend.

Reguli TypeScript:
- Folosește tipuri clare unde are sens.
- Pentru liste, definește array-uri simple de obiecte.
- Evită `any`.
- Denumește variabilele clar.
- Codul trebuie să fie ușor de citit.

Reguli pentru explicații:
- După ce generezi sau modifici cod, explică în limba română ce ai făcut.
- Explică pe scurt rolul fiecărei componente.
- Când introduci o sintaxă Angular sau TypeScript importantă, explic-o simplu.
- Nu da explicații prea lungi dacă nu sunt necesare.
- Vreau să învăț Angular și TypeScript lucrând la acest proiect.

Reguli importante:
- Nu genera tot proiectul haotic într-un singur răspuns.
- Lucrează pas cu pas.
- Înainte să modifici multe fișiere, spune ce fișiere urmează să modifici.
- Păstrează structura proiectului simplă.
- Nu adăuga funcționalități pe care nu le-am cerut.
- Nu complica aplicația cu state management, backend, API-uri sau autentificare.
- Prioritizează claritatea, designul mobile-first și codul ușor de înțeles.

Primul obiectiv:
Ajută-mă să construiesc structura principală a landing page-ului:
- app.component.html
- HeroComponent
- ServicesComponent
- AboutComponent
- BenefitsComponent
- ContactComponent
- FooterComponent
- coach-info.ts

Începe prin a-mi arăta pașii și fișierele care trebuie create sau modificate.