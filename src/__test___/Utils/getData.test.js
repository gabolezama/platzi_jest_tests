import { getData } from '../../Utils/getData';
import fetchMock from 'jest-fetch-mock';

describe('Fetch API', ()=>{

    beforeEach(()=>{
        fetchMock.enableMocks();
        fetchMock.resetMocks();
    });

    test('getData', async()=>{
        fetchMock.mockResponseOnce(JSON.stringify({ data: "12345"}));

        try {
            const resp = await getData('https://google.com');
            
            // Verificar que la llamada se realizó correctamente y que la respuesta es la esperada
            expect(fetchMock).toHaveBeenCalledTimes(1);
            expect(fetchMock).toHaveBeenCalledWith('https://google.com'); // Se espera que se haya llamado con la URL correcta
            // También se puede verificar el contenido de la respuesta de manera más específica
            expect(resp.data).toEqual('12345');
        } catch (error) {
            throw new Error(error);
        }
    });
});