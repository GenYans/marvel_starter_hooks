import './charList.scss';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import abyss from '../../resources/img/abyss.jpg';

class CharList extends Component {
    state = {
        list: {},
    }

    marvelService = new MarvelService();

    render() {

        const {list} = this.state;
            const {name, thumbnail} = list;

            return (
                <div className="char__list">
                    <ul className="char__grid">
                        <li className="char__item">
                            <img src={thumbnail} alt="abyss"/>
                            <div className="char__name">{name}</div>
                        </li>
                        <li className="char__item char__item_selected">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                        <li className="char__item">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                        <li className="char__item">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                        <li className="char__item">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                        <li className="char__item">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                        <li className="char__item">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                        <li className="char__item">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                        <li className="char__item">
                            <img src={abyss} alt="abyss"/>
                            <div className="char__name">Abyss</div>
                        </li>
                    </ul>
                    <button className="button button__main button__long">
                        <div className="inner">load more</div>
                    </button>
                </div>
            )
        }
    }

export default CharList;