const baseUrl = 'https://apiadvisor.climatempo.com.br';
const token = '146025cb29034e754a86d1789d9c0114';

export const cidadeId = '4898';

export const get = async (url) => {
  const response = await fetch(`${baseUrl}${url}?token=${token}`);

  const json = await response.json();

  return json;
}
