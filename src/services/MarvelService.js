class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'; // Выносим повторяемые элементы ссылки 
    _apiKey = 'apikey=2355113c7604fc1adb26bf433cf65239';
    _baseOffset = 210;

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transofrmCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?&${this._apiKey}`);
        return this._transofrmCharacter(res.data.results[0]);
    }

    _transofrmCharacter = (char) => { // Трансформируем обьект API с сервера
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this feature',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url ,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
}

export default MarvelService;