import getData from '../../utils/getData';

describe('Fetching API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar una API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });
    expect(fetch.mock.calls).toEqual([['https://google.com']]);
  });
});
