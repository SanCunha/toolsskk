export const fetchHtmlForm = async (): Promise<string> => {
  try {
      const response = await fetch('../src/utils/formulario.html'); // Substitua pelo caminho correto do seu arquivo
      if (!response.ok) {
          throw new Error('Não foi possível carregar o arquivo HTML');
      }
      console.log(response);
      const data = await response.text();
      console.log('Conteúdo do arquivo HTML:');
      console.log(data);
      return data;
  } catch (error) {
      console.error('Erro ao buscar o formulário HTML:', error);
      throw error; // Lança o erro novamente para ser tratado onde a função for chamada
  }
};

