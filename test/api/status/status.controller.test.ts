describe('Ping Controller', () => {
    it('should return http status ok (200)', async () => {
        const response = await global.request.get('/ping');

        expect(response.ok).toBeTruthy();
    })
});