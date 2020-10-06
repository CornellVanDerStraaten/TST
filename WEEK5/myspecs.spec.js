let voorraad = new Voorraad('Sneakers', 2);

describe('Voorraad.js testen',function() {
    it('Artikel testen', function() {
        expect(voorraad .getArtikel()).toBe('Sneakers')
    })
})