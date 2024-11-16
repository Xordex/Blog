import art1 from '../assets/article/art1.jpg';
import art2 from '../assets/article/art2.jpg';
import art3 from '../assets/article/art3.jpg';
import art4 from '../assets/article/art4.jpg';
import art5 from '../assets/article/art5.jpg';

let post1 = {
    title: "Zero waste w codziennym życiu – jak zacząć?",
    date: "3 dni temu",
    content: ["Wprowadzenie filozofii zero waste do codziennego życia może wydawać się trudne, ale jest to krok w stronę ograniczenia odpadów i ochrony środowiska. Na początek warto skupić się na małych zmianach, takich jak unikanie jednorazowych opakowań, noszenie własnych toreb na zakupy czy wybór produktów wielorazowego użytku.",
        "Najważniejsza jest konsekwencja i edukacja – z czasem zero waste staje się nawykiem, który pozytywnie wpływa na planetę i nasze finanse.Warto też dzielić się swoimi doświadczeniami z innymi, by inspirować do działania na rzecz środowiska."],
    categories: ["Ekologiczne rozwiązania", "Styl życia", "Praktyczne porady"],
    image: art1,
    ID: 1
}
let post2 = {
    title: "Jak zmiany klimatyczne wpływają na bioróżnorodność?",
    date: "6 dni temu",
    content: ["Zmiany klimatyczne mają dramatyczny wpływ na bioróżnorodność, prowadząc do zaniku siedlisk, wymierania gatunków i zmian w ekosystemach. Wzrost temperatury, susze, powodzie czy zmieniające się wzorce pogodowe sprawiają, że wiele gatunków nie jest w stanie przystosować się do nowych warunków.",
        "Ochrona bioróżnorodności to kluczowy element walki ze skutkami zmian klimatycznych.Możemy wspierać ten proces poprzez sadzenie drzew, ochronę lokalnych ekosystemów i świadome wybory konsumenckie, które redukują emisję gazów cieplarnianych."],
    categories: ["Nauka o środowisku", "Zmiany klimatyczne", "Ochrona przyrody"],
    image: art2,
    ID: 2
}
let post3 = {
    title: "Mikroplastik – niewidzialne zagrożenie dla środowiska",
    date: "2 tygodnie temu",
    content: ["Mikroplastik to drobne cząsteczki plastiku, które trafiają do środowiska i wody pitnej, stanowiąc zagrożenie dla ludzi i zwierząt. Pochodzi on z produktów codziennego użytku, takich jak kosmetyki, odzież syntetyczna czy opony samochodowe. W oceanie mikroplastik zagraża rybom i innym organizmom morskim, które go spożywają.",
        "Ograniczenie użycia plastiku jednorazowego, unikanie produktów z mikroplastikiem oraz odpowiedzialne zarządzanie odpadami to kroki, które możemy podjąć, by zmniejszyć skalę tego problemu. Każda zmiana na poziomie jednostkowym przyczynia się do poprawy stanu środowiska."],
    categories: ["Zanieczyszczenie środowiska", "Zdrowie", "Edukacja ekologiczna"],
    image: art3,
    ID: 3
}
let post4 = {
    title: "Czy ekologiczne podróże są możliwe?",
    date: "3 tygodnie temu",
    content: ["Podróże mogą być bardziej ekologiczne, jeśli zdecydujemy się na środki transportu o niższym śladzie węglowym, takie jak pociągi czy rowery. Zmniejszenie liczby lotów i wybieranie lokalnych miejsc wypoczynku to również kroki w stronę bardziej zrównoważonego podróżowania.",
        "Planowanie podróży z myślą o środowisku obejmuje także wybór miejsc, które wspierają lokalną społeczność i ekologiczne praktyki. Dzięki temu możemy cieszyć się odkrywaniem świata, jednocześnie dbając o jego przyszłość."],
    categories: ["Transport", "Styl życia", "Inspiracje podróżnicze"],
    image: art4,
    ID: 4
}
let post5 = {
    title: "Korzyści z miejskiego ogrodnictwa – od zdrowia po klimat",
    date: "2 miesiące temu",
    content: ["Miejskie ogrodnictwo to nie tylko sposób na uprawę własnych warzyw i owoców, ale także metoda na poprawę jakości powietrza i wzbogacenie miejskiego krajobrazu. Ogródki społecznościowe, zielone dachy czy balkonowe uprawy są doskonałymi przykładami ekologicznych inicjatyw w miastach.",
        "Poza korzyściami dla środowiska, takie działania sprzyjają integracji społecznej i promują zdrowy styl życia. Miejskie ogrodnictwo to prosty sposób, aby przyczynić się do ochrony środowiska, jednocześnie zyskując świeże produkty i radość z bliskości natury."],
    categories: ["Zrównoważony rozwój", "Miasto i środowisko", "Zielone inicjatywy"],
    image: art5,
    ID: 5
}

export const PostsData = {
    posts: [post1, post2, post3, post4, post5],
    delete: function (postId) {
        let index = 0;
        PostsData.posts.map(post => {
            if (post.ID == postId) {
                PostsData.posts.splice(index, 1);
            }
            index += 1;
        })
    },
    add: function (TitleInput, ContentInput, ImageInput, CategoriesInput) {
        const newCat = CategoriesInput.split(', ');
        const newContent = ContentInput.split('\n');
        PostsData.posts.unshift({ title: TitleInput, date: "Dzisiaj", content: newContent, categories: newCat, image: ImageInput, ID: Math.floor(Math.random() * 10000) })
    }
};

