describe('use jsdom in this test file', () => {
    it("without installing jsdom nor setup jsdom", () => {
        const element = document.createElement('div');
        expect(element).not.toBeNull();
    })

});